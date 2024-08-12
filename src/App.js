import { DataViews, filterSortAndPaginate } from "@wordpress/dataviews";
import { useState } from "@wordpress/element";
import { uploadToMediaLibrary } from "./utils";
import { withNotices } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Spinner } from "@wordpress/components";

import "./style.css";
import { PHOTOS, TOPICS } from "./data";

const primaryField = "id";
const mediaField = "img_src";
const badgeFields = ["category"];

const DEFAULT_LAYOUTS = {
  table: {
    layout: {
      primaryField,
    },
  },
  grid: {
    layout: {
      primaryField,
      mediaField,
      badgeFields,
    },
  },
  list: {
    layout: {
      primaryField,
      mediaField,
    },
  },
};

const App = withNotices(({ noticeOperations, noticeUI }) => {
  const { createNotice } = noticeOperations;

  const [data, setData] = useState([]);
  const [isUploadingItems, setIsUploadingItems] = useState([]);

  const [paginationInfo, setPaginationInfo] = useState({
    totalItems: 0,
    totalPages: 0,
  });

  const [view, setView] = useState({
    type: "table",
    perPage: 10,
    layout: DEFAULT_LAYOUTS.table.layout,
  });

  const fields = [
    {
      label: "Image",
      id: "img_src",
      render: ({ item }) => (
        <img alt={item.alt_description} src={item.urls.thumb} />
      ),
      enableSorting: false,
    },
    {
      label: "Author",
      id: "author",
      getValue: ({ item }) => `${item.user.first_name} ${item.user.last_name}`,
      render: ({ item }) => (
        <a target="_blank" href={item.user.url}>
          {item.user.first_name} {item.user.last_name}
        </a>
      ),
      enableGlobalSearch: true,
    },
    {
      id: "id",
      label: "ID",
      enableGlobalSearch: true,
    },
    {
      id: "alt_description",
      label: "Description",
      enableGlobalSearch: true,
    },
    {
      id: "topics",
      label: "Topics",
      elements: TOPICS,
      render: ({ item }) => {
        return (
          <div class="topic_photos">
            {item.topics.map((topic) => (
              <span class="topic_photo_item">{topic.toUpperCase()}</span>
            ))}
          </div>
        );
      },
      filterBy: {
        operators: ["isAny", "isNone", "isAll", "isNotAll"],
      },
      enableSorting: false,
    },
    {
      id: "width",
      label: "Width",
    },
    {
      id: "height",
      label: "Height",
    },
  ];

  const onChangeView = (view) => {
    const { data, paginationInfo } = filterSortAndPaginate(
      PHOTOS,
      view,
      fields
    );
    setView(view);
    setData(data);
    setPaginationInfo(paginationInfo);
  };

  const onSuccessMediaUpload = ({ title }) => {
    setIsUploadingItems((prevIsUploadingItems) =>
      prevIsUploadingItems.filter((slugLoading) => slugLoading !== title)
    );

    createNotice({
      status: "success",
      content: __(`${title}.jpg succesfully uploaded to Media Library!`),
      isDismissible: true,
    });
  };

  const onErrorMediaUpload = () => {
    createNotice({
      status: "error",
      content: __("An error occurred!"),
      isDismissible: true,
    });
  };

  const actions = [
    {
      id: "upload-media",
      label: "Upload Media",
      isPrimary: true,
      icon: "upload",
      supportsBulk: true,
      callback: (images) => {
        images.forEach((image) => {
          setIsUploadingItems((prevIsUploadingItems) => [
            ...prevIsUploadingItems,
            image.slug,
          ]);
          uploadToMediaLibrary({
            image,
            onSuccessMediaUpload,
            onErrorMediaUpload,
          });
        });
      },
    },
    {
      id: "see-original",
      label: "See Original",
      callback: ([item]) => {
        const urlImage = item.urls.raw;
        window.open(urlImage, "_blank");
      },
    },
  ];
  return (
    <>
      {!!isUploadingItems.length && <Spinner />}
      {noticeUI}
      <DataViews
        data={data}
        fields={fields}
        view={view}
        actions={actions}
        onChangeView={onChangeView}
        defaultLayouts={DEFAULT_LAYOUTS}
        paginationInfo={paginationInfo}
      />
    </>
  );
});

export default App;

import { DataViews, filterSortAndPaginate } from "@wordpress/dataviews";
import { useState } from "@wordpress/element";
import { uploadToMediaLibrary } from "./utils";
import { withNotices } from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { Spinner } from "@wordpress/components";

import "./style.css";
import { PHOTOS, TOPICS } from "./data";

const primaryField = "id";
const mediaField = "img_src";
const badgeFields = ["topic"];

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
  const [isLoading, setIsLoading] = useState(false);

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
      id: "topic",
      label: "Topic",
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
        operators: ["isAny"],
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

  const onSuccessMediaUpload = ({ slug }) => {
    setIsLoading(false);
    createNotice({
      status: "success",
      content: __(`${slug}.jpg succesfully uploaded to Media Library!`),
      explicitDismiss: true,
    });
  };

  const onErrorMediaUpload = () => {
    createNotice({
      status: "error",
      content: __("An error occurred!"),
      type: "snackbar",
      explicitDismiss: true,
    });
  };

  const actions = [
    {
      id: "upload-media",
      label: "Upload Media",
      isPrimary: true,
      icon: "upload",
      callback: ([image]) => {
        setIsLoading(true);
        uploadToMediaLibrary({
          image,
          onSuccessMediaUpload,
          onErrorMediaUpload,
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
      {isLoading && <Spinner />}
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

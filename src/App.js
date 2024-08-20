import { DataViews, filterSortAndPaginate } from "@wordpress/dataviews";
import { useState, useMemo } from "@wordpress/element";
import { uploadToMediaLibrary, getTopicsElementsFormat } from "./utils";
import { withNotices } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Spinner } from "@wordpress/components";

import "./style.css";
import { PHOTOS } from "./data";

const primaryField = "id";
const mediaField = "img_src";

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
    },
  },
};

const FIELDS = [
  {
    id: "img_src",
    label: "Image",
    render: ({ item }) => (
      <img alt={item.alt_description} src={item.urls.thumb} />
    ),
    enableSorting: false,
  },
  {
    id: "id",
    label: "ID",
    enableGlobalSearch: true,
  },
  {
    id: "author",
    label: "Author",
    getValue: ({ item }) => `${item.user.first_name} ${item.user.last_name}`,
    render: ({ item }) => (
      <a target="_blank" href={item.user.url}>
        {item.user.first_name} {item.user.last_name}
      </a>
    ),
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
    elements: getTopicsElementsFormat(PHOTOS),
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
    getValue: ({ item }) => parseInt(item.width),
    enableSorting: true,
  },
  {
    id: "height",
    label: "Height",
    getValue: ({ item }) => parseInt(item.height),
    enableSorting: true,
  },
];
const App = withNotices(({ noticeOperations, noticeUI }) => {
  const { createNotice } = noticeOperations;

  const [isUploadingItems, setIsUploadingItems] = useState([]);

  const [view, setView] = useState({
    type: "table",
    perPage: 10,
    layout: DEFAULT_LAYOUTS.table.layout,
    fields: [
      "img_src",
      "id",
      "alt_description",
      "author",
      "topics",
      "width",
      "height",
    ],
  });

  const { data, paginationInfo } = useMemo(() => {
    return filterSortAndPaginate(PHOTOS, view, FIELDS);
  }, [PHOTOS, view, FIELDS]);

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

  const onErrorMediaUpload = (error) => {
    setIsUploadingItems([]);
    console.log(error);
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
        fields={FIELDS}
        view={view}
        actions={actions}
        onChangeView={setView}
        defaultLayouts={DEFAULT_LAYOUTS}
        paginationInfo={paginationInfo}
      />
    </>
  );
});

export default App;

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

import { store as noticesStore } from "@wordpress/notices";
import { useDispatch } from "@wordpress/data";
// https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/#uploadmedia
import { uploadMedia } from "@wordpress/media-utils";

/**
 * Helper function to convert image URL to File object
 * @param {*} url
 * @param {*} name
 * @returns
 */
const urlToObject = async (url, name = "test-upload.jpg") => {
  const response = await fetch(url);
  // here image is url/location of image
  const blob = await response.blob();
  const file = new File([blob], name, { type: blob.type });
  return file;
};

const isBlobURL = (url) => {
  if (!url || !url.indexOf) {
    return false;
  }
  return url.indexOf("blob:") === 0;
};

const goToTop = () => {
  window.scrollTo(0, 0);
};

export const uploadToMediaLibrary = async ({
  urlImage,
  onSuccessMediaUploadNotice,
  onErrorMediaUploadNotice,
}) => {
  const file = await urlToObject(urlImage);

  uploadMedia({
    filesList: [file],
    onFileChange: async ([fileObj]) => {
      if (!isBlobURL(fileObj.url)) {
        onSuccessMediaUploadNotice();
      }
    },
    onError: (error) => {
      onErrorMediaUploadNotice();
    },
  });

  goToTop();
};

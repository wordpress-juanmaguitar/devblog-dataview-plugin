/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
// https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/#uploadmedia
import { uploadMedia } from "@wordpress/media-utils";

/**
 * Helper function to convert image URL to File object
 * @param {*} url
 * @param {*} name
 * @returns
 */
const urlToFileObject = async (image) => {
  const urlImage = image.urls.raw;
  const name = `${image.slug}.jpg`;
  const response = await fetch(urlImage);
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
  image,
  onSuccessMediaUpload,
  onErrorMediaUpload,
}) => {
  const fileImage = await urlToFileObject(image);

  uploadMedia({
    filesList: [fileImage],
    onFileChange: async ([fileObj]) => {
      if (isBlobURL(fileObj?.url)) {
        return;
      }
      // fileObj here is the object of uploaded image as returned by: POST /wp/v2/media
      // https://developer.wordpress.org/rest-api/reference/media/#schema
      onSuccessMediaUpload(fileObj);
    },
    onError: (error) => {
      onErrorMediaUpload(error);
    },
  });

  goToTop();
};

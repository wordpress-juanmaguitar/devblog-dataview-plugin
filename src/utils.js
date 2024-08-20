/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
// https://developer.wordpress.org/block-editor/reference-guides/packages/packages-media-utils/#uploadmedia
import { uploadMedia } from "@wordpress/media-utils";

/**
 * Helper function to convert image URL to File object
 *
 * @param {Object} image - The image object containing the URL and other properties.
 * @returns {Promise<File>} - A Promise that resolves to a File object representing the image.
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

/**
 * Checks if a given URL is a blob URL.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - Returns true if the URL is a blob URL, false otherwise.
 */
const isBlobURL = (url) => {
  if (!url || !url.indexOf) {
    return false;
  }
  return url.indexOf("blob:") === 0;
};

/**
 * Scrolls the window to the top.
 */
const goToTop = () => {
  window.scrollTo(0, 0);
};

/**
 * Uploads an image to the media library.
 * @param {Object} options - The options for uploading the image.
 * @param {string} options.image - The image to upload.
 * @param {Function} options.onSuccessMediaUpload - The callback function to be called on successful media upload.
 * @param {Function} options.onErrorMediaUpload - The callback function to be called on media upload error.
 * @returns {void}
 */
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

/**
 * Retrieves the unique topics from an array of photos
 * and returns them in the format expected
 * by the "elements" property ("field" prop) of the Dataviews component.
 *
 * @param {Array} photos - The array of photos.
 * @returns {Array} - An array of objects containing the label and value of each topic.
 * @example
 *  Call - getTopics([{ topics: ["nature", "water"] }, { topics: ["nature", "mountain"] }]);
 *  Returns - [{ label: "Nature", value: "nature" }, { label: "Water", value: "water" }, { label: "Mountain", value: "mountain" }]
 * @link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-dataviews/#fields-elements
 */
export const getTopicsElementsFormat = (photos) => {
  const topics = photos.reduce((acc, photo) => {
    return acc.concat(photo.topics);
  }, []);
  return [...new Set(topics)].map((topic) => {
    return {
      label: topic.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      value: topic,
    };
  });
};

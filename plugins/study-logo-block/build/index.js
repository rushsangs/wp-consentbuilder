/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOWED_MEDIA_TYPES": () => (/* binding */ ALLOWED_MEDIA_TYPES),
/* harmony export */   "LINK_DESTINATION_ATTACHMENT": () => (/* binding */ LINK_DESTINATION_ATTACHMENT),
/* harmony export */   "LINK_DESTINATION_CUSTOM": () => (/* binding */ LINK_DESTINATION_CUSTOM),
/* harmony export */   "LINK_DESTINATION_MEDIA": () => (/* binding */ LINK_DESTINATION_MEDIA),
/* harmony export */   "LINK_DESTINATION_NONE": () => (/* binding */ LINK_DESTINATION_NONE),
/* harmony export */   "MEDIA_ID_NO_FEATURED_IMAGE_SET": () => (/* binding */ MEDIA_ID_NO_FEATURED_IMAGE_SET),
/* harmony export */   "MIN_SIZE": () => (/* binding */ MIN_SIZE),
/* harmony export */   "NEW_TAB_REL": () => (/* binding */ NEW_TAB_REL)
/* harmony export */ });
const MIN_SIZE = 20;
const LINK_DESTINATION_NONE = 'none';
const LINK_DESTINATION_MEDIA = 'media';
const LINK_DESTINATION_ATTACHMENT = 'attachment';
const LINK_DESTINATION_CUSTOM = 'custom';
const NEW_TAB_REL = ['noreferrer', 'noopener'];
const ALLOWED_MEDIA_TYPES = ['image'];
const MEDIA_ID_NO_FEATURED_IMAGE_SET = 0;

/***/ }),

/***/ "./src/deprecated.js":
/*!***************************!*\
  !*** ./src/deprecated.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


const blockAttributes = {
  align: {
    type: 'string'
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  caption: {
    type: 'string',
    source: 'html',
    selector: 'figcaption'
  },
  title: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'title'
  },
  href: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'href'
  },
  rel: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'rel'
  },
  linkClass: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'class'
  },
  id: {
    type: 'number'
  },
  width: {
    type: 'number'
  },
  height: {
    type: 'number'
  },
  sizeSlug: {
    type: 'string'
  },
  linkDestination: {
    type: 'string'
  },
  linkTarget: {
    type: 'string',
    source: 'attribute',
    selector: 'figure > a',
    attribute: 'target'
  }
};
const blockSupports = {
  anchor: true,
  color: {
    __experimentalDuotone: 'img',
    text: false,
    background: false
  },
  __experimentalBorder: {
    radius: true,
    __experimentalDefaultControls: {
      radius: true
    }
  }
};
const deprecated = [// The following deprecation moves existing border radius styles onto the
// inner img element where new border block support styles must be applied.
// It will also add a new `.has-custom-border` class for existing blocks
// with border radii set. This class is required to improve caption position
// and styling when an image within a gallery has a custom border or
// rounded corners.
//
// See: https://github.com/WordPress/gutenberg/pull/31366/
{
  attributes: blockAttributes,
  supports: blockSupports,

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      url,
      alt,
      caption,
      align,
      href,
      rel,
      linkClass,
      width,
      height,
      id,
      linkTarget,
      sizeSlug,
      title
    } = attributes;
    const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(rel) ? undefined : rel;
    const classes = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      [`align${align}`]: align,
      [`size-${sizeSlug}`]: sizeSlug,
      'is-resized': width || height
    });
    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null,
      width: width,
      height: height,
      title: title
    });
    const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      className: linkClass,
      href: href,
      target: linkTarget,
      rel: newRel
    }, image) : image, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
      className: classes
    }), figure);
  }

}, {
  attributes: { ...blockAttributes,
    title: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'title'
    },
    sizeSlug: {
      type: 'string'
    }
  },
  supports: blockSupports,

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const {
      url,
      alt,
      caption,
      align,
      href,
      rel,
      linkClass,
      width,
      height,
      id,
      linkTarget,
      sizeSlug,
      title
    } = attributes;
    const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(rel) ? undefined : rel;
    const classes = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      [`align${align}`]: align,
      [`size-${sizeSlug}`]: sizeSlug,
      'is-resized': width || height
    });
    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null,
      width: width,
      height: height,
      title: title
    });
    const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      className: linkClass,
      href: href,
      target: linkTarget,
      rel: newRel
    }, image) : image, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));

    if ('left' === align || 'right' === align || 'center' === align) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", {
        className: classes
      }, figure));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
      className: classes
    }), figure);
  }

}, {
  attributes: blockAttributes,

  save(_ref3) {
    let {
      attributes
    } = _ref3;
    const {
      url,
      alt,
      caption,
      align,
      href,
      width,
      height,
      id
    } = attributes;
    const classes = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      [`align${align}`]: align,
      'is-resized': width || height
    });
    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null,
      width: width,
      height: height
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", {
      className: classes
    }, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: href
    }, image) : image, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));
  }

}, {
  attributes: blockAttributes,

  save(_ref4) {
    let {
      attributes
    } = _ref4;
    const {
      url,
      alt,
      caption,
      align,
      href,
      width,
      height,
      id
    } = attributes;
    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null,
      width: width,
      height: height
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", {
      className: align ? `align${align}` : null
    }, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: href
    }, image) : image, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));
  }

}, {
  attributes: blockAttributes,

  save(_ref5) {
    let {
      attributes
    } = _ref5;
    const {
      url,
      alt,
      caption,
      align,
      href,
      width,
      height
    } = attributes;
    const extraImageProps = width || height ? {
      width,
      height
    } : {};
    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      src: url,
      alt: alt
    }, extraImageProps));
    let figureStyle = {};

    if (width) {
      figureStyle = {
        width
      };
    } else if (align === 'left' || align === 'right') {
      figureStyle = {
        maxWidth: '50%'
      };
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", {
      className: align ? `align${align}` : null,
      style: figureStyle
    }, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: href
    }, image) : image, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));
  }

}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageEdit": () => (/* binding */ ImageEdit),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isExternalImage": () => (/* binding */ isExternalImage),
/* harmony export */   "pickRelevantMediaFiles": () => (/* binding */ pickRelevantMediaFiles)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image */ "./src/image.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module constants
 */


const pickRelevantMediaFiles = (image, size) => {
  const imageProps = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ['sizes', size, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ['media_details', 'sizes', size, 'source_url']) || image.url;
  return imageProps;
};
/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */

const isTemporaryImage = (id, url) => !id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url);
/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */


const isExternalImage = (id, url) => url && !id && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url);
/**
 * Checks if WP generated default image size. Size generation is skipped
 * when the image is smaller than the said size.
 *
 * @param {Object} image
 * @param {string} defaultSize
 *
 * @return {boolean} Whether or not it has default image size.
 */

function hasDefaultSize(image, defaultSize) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.has)(image, ['sizes', defaultSize, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.has)(image, ['media_details', 'sizes', defaultSize, 'source_url']);
}

function ImageEdit(_ref) {
  let {
    attributes,
    setAttributes,
    isSelected,
    className,
    noticeUI,
    insertBlocksAfter,
    noticeOperations,
    onReplace,
    context,
    clientId
  } = _ref;
  const {
    url = '',
    alt,
    caption,
    align,
    id,
    width,
    height,
    sizeSlug
  } = attributes;
  const [temporaryURL, setTemporaryURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const altRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    altRef.current = alt;
  }, [alt]);
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    captionRef.current = caption;
  }, [caption]);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    imageDefaultSize,
    mediaUpload
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(getSettings(), ['imageDefaultSize', 'mediaUpload']);
  }, []);

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
    setAttributes({
      src: undefined,
      id: undefined,
      url: undefined
    });
    setTemporaryURL(undefined);
  }

  function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        title: undefined,
        caption: undefined
      });
      return;
    }

    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(media.url)) {
      setTemporaryURL(media.url);
      return;
    }

    setTemporaryURL();
    let mediaAttributes = pickRelevantMediaFiles(media, imageDefaultSize); // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.

    if (captionRef.current && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(mediaAttributes, ['caption'])) {
      mediaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(mediaAttributes, ['caption']);
    }

    let additionalAttributes; // Reset the dimension attributes if changing to a different image.

    if (!media.id || media.id !== id) {
      additionalAttributes = {
        width: undefined,
        height: undefined,
        // Fallback to size "full" if there's no default image size.
        // It means the image is smaller, and the block will use a full-size URL.
        sizeSlug: hasDefaultSize(media, imageDefaultSize) ? imageDefaultSize : 'full'
      };
    } else {
      // Keep the same url when selecting the same file, so "Image Size"
      // option is not changed.
      additionalAttributes = {
        url
      };
    } // Check if default link setting should be used.


    let linkDestination = attributes.linkDestination;

    if (!linkDestination) {
      // Use the WordPress option to determine the proper default.
      // The constants used in Gutenberg do not match WP options so a little more complicated than ideal.
      // TODO: fix this in a follow up PR, requires updating media-text and ui component.
      switch (window?.wp?.media?.view?.settings?.defaultProps?.link || _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_NONE) {
        case 'file':
        case _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_MEDIA:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_MEDIA;
          break;

        case 'post':
        case _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_ATTACHMENT:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_ATTACHMENT;
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_CUSTOM:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_CUSTOM;
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_NONE:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_NONE;
          break;
      }
    } // Check if the image is linked to it's media.


    let href;

    switch (linkDestination) {
      case _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_MEDIA:
        href = media.url;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_9__.LINK_DESTINATION_ATTACHMENT:
        href = media.link;
        break;
    }

    mediaAttributes.href = href;
    setAttributes({ ...mediaAttributes,
      ...additionalAttributes,
      linkDestination
    });
  }

  function onSelectURL(newURL) {
    if (newURL !== url) {
      setAttributes({
        url: newURL,
        id: undefined,
        width: undefined,
        height: undefined,
        sizeSlug: imageDefaultSize
      });
    }
  }

  function updateAlignment(nextAlign) {
    const extraUpdatedAttributes = ['wide', 'full'].includes(nextAlign) ? {
      width: undefined,
      height: undefined
    } : {};
    setAttributes({ ...extraUpdatedAttributes,
      align: nextAlign
    });
  }

  let isTemp = isTemporaryImage(id, url); // Upload a temporary image on mount.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTemp) {
      return;
    }

    const file = (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.getBlobByURL)(url);

    if (file) {
      mediaUpload({
        filesList: [file],
        onFileChange: _ref2 => {
          let [img] = _ref2;
          onSelectImage(img);
        },
        allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_9__.ALLOWED_MEDIA_TYPES,
        onError: message => {
          isTemp = false;
          onUploadError(message);
        }
      });
    }
  }, []); // If an image is temporary, revoke the Blob url when it is uploaded (and is
  // no longer temporary).

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isTemp) {
      setTemporaryURL(url);
      return;
    }

    (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.revokeBlobURL)(temporaryURL);
  }, [isTemp, url]);
  const isExternal = isExternalImage(id, url);
  const src = isExternal ? url : undefined;
  const mediaPreview = !!url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit image'),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit image'),
    className: 'edit-image-preview',
    src: url
  });
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalUseBorderProps)(attributes);
  const classes = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(className, {
    'is-transient': temporaryURL,
    'is-resized': !!width || !!height,
    [`size-${sizeSlug}`]: sizeSlug,
    'has-custom-border': !!borderProps.className || !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(borderProps.style)
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)({
    ref,
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", blockProps, (temporaryURL || url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    temporaryURL: temporaryURL,
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    insertBlocksAfter: insertBlocksAfter,
    onReplace: onReplace,
    onSelectImage: onSelectImage,
    onSelectURL: onSelectURL,
    onUploadError: onUploadError,
    containerRef: ref,
    context: context,
    clientId: clientId
  }), !url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
    group: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockAlignmentControl, {
    value: align,
    onChange: updateAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockIcon, {
      icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }),
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    notices: noticeUI,
    onError: onUploadError,
    accept: "image/*",
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_9__.ALLOWED_MEDIA_TYPES,
    value: {
      id,
      src
    },
    mediaPreview: mediaPreview,
    disableMediaButtons: temporaryURL || url
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices)(ImageEdit));

/***/ }),

/***/ "./src/image.js":
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../embed/util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './use-client-width'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */













/**
 * Internal dependencies
 */




/**
 * Module constants
 */


function Image(_ref) {
  let {
    temporaryURL,
    attributes,
    setAttributes,
    isSelected,
    insertBlocksAfter,
    onReplace,
    onSelectImage,
    onSelectURL,
    onUploadError,
    containerRef,
    context,
    clientId
  } = _ref;
  const {
    url = '',
    alt,
    caption,
    align,
    id,
    href,
    rel,
    linkClass,
    linkDestination,
    title,
    width,
    height,
    linkTarget,
    sizeSlug
  } = attributes;
  const imageRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const prevUrl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(url);
  const {
    allowResize = true
  } = context;
  const {
    getBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    image,
    multiImageSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getMedia
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__.store);
    const {
      getMultiSelectedBlockClientIds,
      getBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const multiSelectedClientIds = getMultiSelectedBlockClientIds();
    return {
      image: id && isSelected ? getMedia(id, {
        context: 'view'
      }) : null,
      multiImageSelection: multiSelectedClientIds.length && multiSelectedClientIds.every(_clientId => getBlockName(_clientId) === 'core/image')
    };
  }, [id, isSelected]);
  const {
    canInsertCover,
    imageEditing,
    imageSizes,
    maxWidth,
    mediaUpload
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getBlockRootClientId,
      getSettings,
      canInsertBlockType
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const rootClientId = getBlockRootClientId(clientId);
    const settings = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(getSettings(), ['imageEditing', 'imageSizes', 'maxWidth', 'mediaUpload']);
    return { ...settings,
      canInsertCover: canInsertBlockType('core/cover', rootClientId)
    };
  }, [clientId]);
  const {
    replaceBlocks,
    toggleSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    createErrorNotice,
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__.store);
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)('medium');
  const isWideAligned = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.includes)(['wide', 'full'], align);
  const [{
    loadedNaturalWidth,
    loadedNaturalHeight
  }, setLoadedNaturalSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [isEditingImage, setIsEditingImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [externalBlob, setExternalBlob] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const clientWidth = Object(function webpackMissingModule() { var e = new Error("Cannot find module './use-client-width'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(containerRef, [align]);
  const isResizable = allowResize && !(isWideAligned && isLargeViewport);
  const imageSizeOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(imageSizes, _ref2 => {
    let {
      slug
    } = _ref2;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['media_details', 'sizes', slug, 'source_url']);
  }), _ref3 => {
    let {
      name,
      slug
    } = _ref3;
    return {
      value: slug,
      label: name
    };
  }); // If an image is externally hosted, try to fetch the image data. This may
  // fail if the image host doesn't allow CORS with the domain. If it works,
  // we can enable a button in the toolbar to upload the image.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,_edit__WEBPACK_IMPORTED_MODULE_13__.isExternalImage)(id, url) || !isSelected || externalBlob) {
      return;
    }

    window.fetch(url).then(response => response.blob()).then(blob => setExternalBlob(blob)) // Do nothing, cannot upload.
    .catch(() => {});
  }, [id, url, isSelected, externalBlob]); // Focus the caption after inserting an image from the placeholder. This is
  // done to preserve the behaviour of focussing the first tabbable element
  // when a block is mounted. Previously, the image block would remount when
  // the placeholder is removed. Maybe this behaviour could be removed.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (url && !prevUrl && isSelected) {
      captionRef.current.focus();
    }
  }, [url, prevUrl]); // Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
  // width and height. This resolves an issue in Safari where the loaded natural
  // width and height is otherwise lost when switching between alignments.
  // See: https://github.com/WordPress/gutenberg/pull/37210.

  const {
    naturalWidth,
    naturalHeight
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      naturalWidth: imageRef.current?.naturalWidth || loadedNaturalWidth || undefined,
      naturalHeight: imageRef.current?.naturalHeight || loadedNaturalHeight || undefined
    };
  }, [loadedNaturalWidth, loadedNaturalHeight, imageRef.current?.complete]);

  function onResizeStart() {
    toggleSelection(false);
  }

  function onResizeStop() {
    toggleSelection(true);
  }

  function onImageError() {
    // Check if there's an embed block that handles this URL, e.g., instagram URL.
    // See: https://github.com/WordPress/gutenberg/pull/11472
    const embedBlock = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../embed/util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      attributes: {
        url
      }
    });

    if (undefined !== embedBlock) {
      onReplace(embedBlock);
    }
  }

  function onSetHref(props) {
    setAttributes(props);
  }

  function onSetTitle(value) {
    // This is the HTML title attribute, separate from the media object
    // title.
    setAttributes({
      title: value
    });
  }

  function updateAlt(newAlt) {
    setAttributes({
      alt: newAlt
    });
  }

  function updateImage(newSizeSlug) {
    const newUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['media_details', 'sizes', newSizeSlug, 'source_url']);

    if (!newUrl) {
      return null;
    }

    setAttributes({
      url: newUrl,
      width: undefined,
      height: undefined,
      sizeSlug: newSizeSlug
    });
  }

  function uploadExternal() {
    mediaUpload({
      filesList: [externalBlob],

      onFileChange(_ref4) {
        let [img] = _ref4;
        onSelectImage(img);

        if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__.isBlobURL)(img.url)) {
          return;
        }

        setExternalBlob();
        createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Image uploaded.'), {
          type: 'snackbar'
        });
      },

      allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_14__.ALLOWED_MEDIA_TYPES,

      onError(message) {
        createErrorNotice(message, {
          type: 'snackbar'
        });
      }

    });
  }

  function updateAlignment(nextAlign) {
    const extraUpdatedAttributes = ['wide', 'full'].includes(nextAlign) ? {
      width: undefined,
      height: undefined
    } : {};
    setAttributes({ ...extraUpdatedAttributes,
      align: nextAlign
    });
  }

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected) {
      setIsEditingImage(false);
    }
  }, [isSelected]);
  const canEditImage = id && naturalWidth && naturalHeight && imageEditing;
  const allowCrop = !multiImageSelection && canEditImage && !isEditingImage;

  function switchToCover() {
    replaceBlocks(clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__.switchToBlockType)(getBlock(clientId), 'core/cover'));
  }

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
    group: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockAlignmentControl, {
    value: align,
    onChange: updateAlignment
  }), !multiImageSelection && !isEditingImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalImageURLInputUI, {
    url: href || '',
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaUrl: image && image.source_url || url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: rel
  }), allowCrop && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: () => setIsEditingImage(true),
    icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Crop')
  }), externalBlob && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: uploadExternal,
    icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Upload external image')
  }), !multiImageSelection && canInsertCover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Add text over image'),
    onClick: switchToCover
  })), !multiImageSelection && !isEditingImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
    group: "other"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaReplaceFlow, {
    mediaId: id,
    mediaURL: url,
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_14__.ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Settings')
  }, !multiImageSelection && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Alt text (alternative text)'),
    value: alt,
    onChange: updateAlt,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Describe the purpose of the image')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Leave empty if the image is purely decorative.'))
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalImageSizeControl, {
    onChangeImage: updateImage,
    onChange: value => setAttributes(value),
    slug: sizeSlug,
    width: width,
    height: height,
    imageSizeOptions: imageSizeOptions,
    isResizable: isResizable,
    imageWidth: naturalWidth,
    imageHeight: naturalHeight
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
    __experimentalGroup: "advanced"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Title attribute'),
    value: title || '',
    onChange: onSetTitle,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Describe the role of this image on the page.'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://www.w3.org/TR/html52/dom.html#the-title-attribute"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('(Note: many devices and browsers do not display this text.)')))
  })));
  const filename = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_8__.getFilename)(url);
  let defaultedAlt;

  if (alt) {
    defaultedAlt = alt;
  } else if (filename) {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.sprintf)(
    /* translators: %s: file name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('This image has an empty alt attribute; its file name is %s'), filename);
  } else {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('This image has an empty alt attribute');
  }

  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalUseBorderProps)(attributes);
  const isRounded = attributes.className?.includes('is-style-rounded');
  const hasCustomBorder = !!borderProps.className || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(borderProps.style);
  let img = // Disable reason: Image itself is not meant to be interactive, but
  // should direct focus to block.

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: temporaryURL || url,
    alt: defaultedAlt,
    onError: () => onImageError(),
    onLoad: event => {
      setLoadedNaturalSize({
        loadedNaturalWidth: event.target?.naturalWidth,
        loadedNaturalHeight: event.target?.naturalHeight
      });
    },
    ref: imageRef,
    className: borderProps.className,
    style: borderProps.style
  }), temporaryURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null))
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  ;
  let imageWidthWithinContainer;
  let imageHeightWithinContainer;

  if (clientWidth && naturalWidth && naturalHeight) {
    const exceedMaxWidth = naturalWidth > clientWidth;
    const ratio = naturalHeight / naturalWidth;
    imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
    imageHeightWithinContainer = exceedMaxWidth ? clientWidth * ratio : naturalHeight;
  }

  if (canEditImage && isEditingImage) {
    img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalImageEditor, {
      borderProps: isRounded ? undefined : borderProps,
      url: url,
      width: width,
      height: height,
      clientWidth: clientWidth,
      naturalHeight: naturalHeight,
      naturalWidth: naturalWidth
    });
  } else if (!isResizable || !imageWidthWithinContainer) {
    img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width,
        height
      }
    }, img);
  } else {
    const currentWidth = width || imageWidthWithinContainer;
    const currentHeight = height || imageHeightWithinContainer;
    const ratio = naturalWidth / naturalHeight;
    const minWidth = naturalWidth < naturalHeight ? _constants__WEBPACK_IMPORTED_MODULE_14__.MIN_SIZE : _constants__WEBPACK_IMPORTED_MODULE_14__.MIN_SIZE * ratio;
    const minHeight = naturalHeight < naturalWidth ? _constants__WEBPACK_IMPORTED_MODULE_14__.MIN_SIZE : _constants__WEBPACK_IMPORTED_MODULE_14__.MIN_SIZE / ratio; // With the current implementation of ResizableBox, an image needs an
    // explicit pixel value for the max-width. In absence of being able to
    // set the content-width, this max-width is currently dictated by the
    // vanilla editor style. The following variable adds a buffer to this
    // vanilla style, so 3rd party themes have some wiggleroom. This does,
    // in most cases, allow you to scale the image beyond the width of the
    // main column, though not infinitely.
    // @todo It would be good to revisit this once a content-width variable
    // becomes available.

    const maxWidthBuffer = maxWidth * 2.5;
    let showRightHandle = false;
    let showLeftHandle = false;
    /* eslint-disable no-lonely-if */
    // See https://github.com/WordPress/gutenberg/issues/7584.

    if (align === 'center') {
      // When the image is centered, show both handles.
      showRightHandle = true;
      showLeftHandle = true;
    } else if ((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.isRTL)()) {
      // In RTL mode the image is on the right by default.
      // Show the right handle and hide the left handle only when it is
      // aligned left. Otherwise always show the left handle.
      if (align === 'left') {
        showRightHandle = true;
      } else {
        showLeftHandle = true;
      }
    } else {
      // Show the left handle and hide the right handle only when the
      // image is aligned right. Otherwise always show the right handle.
      if (align === 'right') {
        showLeftHandle = true;
      } else {
        showRightHandle = true;
      }
    }
    /* eslint-enable no-lonely-if */


    img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ResizableBox, {
      size: {
        width: width !== null && width !== void 0 ? width : 'auto',
        height: height && !hasCustomBorder ? height : 'auto'
      },
      showHandle: isSelected,
      minWidth: minWidth,
      maxWidth: maxWidthBuffer,
      minHeight: minHeight,
      maxHeight: maxWidthBuffer / ratio,
      lockAspectRatio: true,
      enable: {
        top: false,
        right: showRightHandle,
        bottom: true,
        left: showLeftHandle
      },
      onResizeStart: onResizeStart,
      onResizeStop: (event, direction, elt, delta) => {
        onResizeStop();
        setAttributes({
          width: parseInt(currentWidth + delta.width, 10),
          height: parseInt(currentHeight + delta.height, 10)
        });
      }
    }, img);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalImageEditingProvider, {
    id: id,
    url: url,
    naturalWidth: naturalWidth,
    naturalHeight: naturalHeight,
    clientWidth: clientWidth,
    onSaveImage: imageAttributes => setAttributes(imageAttributes),
    isEditing: isEditingImage,
    onFinishEditing: () => setIsEditingImage(false)
  }, !temporaryURL && controls, img, (!_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText.isEmpty(caption) || isSelected) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText, {
    className: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalGetElementClassName)('caption'),
    ref: captionRef,
    tagName: "figcaption",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Image caption text'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Add caption'),
    value: caption,
    onChange: value => setAttributes({
      caption: value
    }),
    inlineToolbar: true,
    __unstableOnSplitAtEnd: () => insertBlocksAfter((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__.createBlock)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__.getDefaultBlockName)()))
  }));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    url,
    alt,
    caption,
    align,
    href,
    rel,
    linkClass,
    width,
    height,
    id,
    linkTarget,
    sizeSlug,
    title
  } = attributes;
  const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rel) ? undefined : rel;
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetBorderClassesAndStyles)(attributes);
  const classes = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    [`align${align}`]: align,
    [`size-${sizeSlug}`]: sizeSlug,
    'is-resized': width || height,
    'has-custom-border': !!borderProps.className || !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(borderProps.style)
  });
  const imageClasses = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(borderProps.className, {
    [`wp-image-${id}`]: !!id
  });
  const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    className: imageClasses || undefined,
    style: borderProps.style,
    width: width,
    height: height,
    title: title
  });
  const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: linkClass,
    href: href,
    target: linkTarget,
    rel: newRel
  }, image) : image, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    className: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetElementClassName)('caption'),
    tagName: "figcaption",
    value: caption
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: classes
  }), figure);
}

/***/ }),

/***/ "./src/transforms.js":
/*!***************************!*\
  !*** ./src/transforms.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "stripFirstImage": () => (/* binding */ stripFirstImage)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function stripFirstImage(attributes, _ref) {
  let {
    shortcode
  } = _ref;
  const {
    body
  } = document.implementation.createHTMLDocument('');
  body.innerHTML = shortcode.content;
  let nodeToRemove = body.querySelector('img'); // If an image has parents, find the topmost node to remove.

  while (nodeToRemove && nodeToRemove.parentNode && nodeToRemove.parentNode !== body) {
    nodeToRemove = nodeToRemove.parentNode;
  }

  if (nodeToRemove) {
    nodeToRemove.parentNode.removeChild(nodeToRemove);
  }

  return body.innerHTML.trim();
}

function getFirstAnchorAttributeFormHTML(html, attributeName) {
  const {
    body
  } = document.implementation.createHTMLDocument('');
  body.innerHTML = html;
  const {
    firstElementChild
  } = body;

  if (firstElementChild && firstElementChild.nodeName === 'A') {
    return firstElementChild.getAttribute(attributeName) || undefined;
  }
}

const imageSchema = {
  img: {
    attributes: ['src', 'alt', 'title'],
    classes: ['alignleft', 'aligncenter', 'alignright', 'alignnone', /^wp-image-\d+$/]
  }
};

const schema = _ref2 => {
  let {
    phrasingContentSchema
  } = _ref2;
  return {
    figure: {
      require: ['img'],
      children: { ...imageSchema,
        a: {
          attributes: ['href', 'rel', 'target'],
          children: imageSchema
        },
        figcaption: {
          children: phrasingContentSchema
        }
      }
    }
  };
};

const transforms = {
  from: [{
    type: 'raw',
    isMatch: node => node.nodeName === 'FIGURE' && !!node.querySelector('img'),
    schema,
    transform: node => {
      // Search both figure and image classes. Alignment could be
      // set on either. ID is set on the image.
      const className = node.className + ' ' + node.querySelector('img').className;
      const alignMatches = /(?:^|\s)align(left|center|right)(?:$|\s)/.exec(className);
      const anchor = node.id === '' ? undefined : node.id;
      const align = alignMatches ? alignMatches[1] : undefined;
      const idMatches = /(?:^|\s)wp-image-(\d+)(?:$|\s)/.exec(className);
      const id = idMatches ? Number(idMatches[1]) : undefined;
      const anchorElement = node.querySelector('a');
      const linkDestination = anchorElement && anchorElement.href ? 'custom' : undefined;
      const href = anchorElement && anchorElement.href ? anchorElement.href : undefined;
      const rel = anchorElement && anchorElement.rel ? anchorElement.rel : undefined;
      const linkClass = anchorElement && anchorElement.className ? anchorElement.className : undefined;
      const attributes = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockAttributes)('core/image', node.outerHTML, {
        align,
        id,
        linkDestination,
        href,
        rel,
        linkClass,
        anchor
      });
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)('core/image', attributes);
    }
  }, {
    // Note: when dragging and dropping multiple files onto a gallery this overrides the
    // gallery transform in order to add new images to the gallery instead of
    // creating a new gallery.
    type: 'files',

    isMatch(files) {
      // The following check is intended to catch non-image files when dropped together with images.
      if (files.some(file => file.type.indexOf('image/') === 0) && files.some(file => file.type.indexOf('image/') !== 0)) {
        const {
          createErrorNotice
        } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
        createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('If uploading to a gallery all files need to be image formats'), {
          id: 'gallery-transform-invalid-file'
        });
      }

      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.every)(files, file => file.type.indexOf('image/') === 0);
    },

    transform(files) {
      const blocks = files.map(file => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)('core/image', {
          url: (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_1__.createBlobURL)(file)
        });
      });
      return blocks;
    }

  }, {
    type: 'shortcode',
    tag: 'caption',
    attributes: {
      url: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img'
      },
      alt: {
        type: 'string',
        source: 'attribute',
        attribute: 'alt',
        selector: 'img'
      },
      caption: {
        shortcode: stripFirstImage
      },
      href: {
        shortcode: (attributes, _ref3) => {
          let {
            shortcode
          } = _ref3;
          return getFirstAnchorAttributeFormHTML(shortcode.content, 'href');
        }
      },
      rel: {
        shortcode: (attributes, _ref4) => {
          let {
            shortcode
          } = _ref4;
          return getFirstAnchorAttributeFormHTML(shortcode.content, 'rel');
        }
      },
      linkClass: {
        shortcode: (attributes, _ref5) => {
          let {
            shortcode
          } = _ref5;
          return getFirstAnchorAttributeFormHTML(shortcode.content, 'class');
        }
      },
      id: {
        type: 'number',
        shortcode: _ref6 => {
          let {
            named: {
              id
            }
          } = _ref6;

          if (!id) {
            return;
          }

          return parseInt(id.replace('attachment_', ''), 10);
        }
      },
      align: {
        type: 'string',
        shortcode: _ref7 => {
          let {
            named: {
              align = 'alignnone'
            }
          } = _ref7;
          return align.replace('align', '');
        }
      }
    }
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transforms);

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/study-logo-block","version":"0.1.0","title":"Study Logo Block","category":"media","usesContext":["allowResize","imageCrop","fixedHeight"],"description":"Insert an image to make a visual statement.","keywords":["img","photo","picture"],"textdomain":"default","attributes":{"align":{"type":"string"},"url":{"type":"string","source":"attribute","selector":"img","attribute":"src"},"alt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"caption":{"type":"string","source":"html","selector":"figcaption"},"title":{"type":"string","source":"attribute","selector":"img","attribute":"title"},"href":{"type":"string","source":"attribute","selector":"figure > a","attribute":"href"},"rel":{"type":"string","source":"attribute","selector":"figure > a","attribute":"rel"},"linkClass":{"type":"string","source":"attribute","selector":"figure > a","attribute":"class"},"id":{"type":"number"},"width":{"type":"number"},"height":{"type":"number"},"sizeSlug":{"type":"string"},"linkDestination":{"type":"string"},"linkTarget":{"type":"string","source":"attribute","selector":"figure > a","attribute":"target"}},"supports":{"anchor":true,"color":{"__experimentalDuotone":"img","text":false,"background":false},"__experimentalBorder":{"radius":true,"__experimentalDefaultControls":{"radius":true}}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"rounded","label":"Rounded"}],"editorStyle":"wp-block-image-editor","style":"wp-block-image"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./src/transforms.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_4__;

const settings = {
  icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  example: {
    attributes: {
      sizeSlug: 'large',
      url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
      // translators: Caption accompanying an image of the Mont Blanc, which serves as an example for the Image block.
      caption: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mont Blanc appears—still, snowy, and serene.')
    }
  },

  __experimentalLabel(attributes, _ref) {
    let {
      context
    } = _ref;

    if (context === 'accessibility') {
      const {
        caption,
        alt,
        url
      } = attributes;

      if (!url) {
        return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Empty');
      }

      if (!alt) {
        return caption || '';
      } // This is intended to be read by a screen reader.
      // A period simply means a pause, no need to translate it.


      return alt + (caption ? '. ' + caption : '');
    }
  },

  getEditWrapperProps(attributes) {
    return {
      'data-align': attributes.align
    };
  },

  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
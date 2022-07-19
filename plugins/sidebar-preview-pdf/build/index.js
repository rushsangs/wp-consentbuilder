/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

// /**
//  * WordPress dependencies.
//  */
//  import { __ } from '@wordpress/i18n';
//  import { TextControl } from '@wordpress/components';
//  import { useEntityProp } from '@wordpress/core-data';
//  import { useSelect } from '@wordpress/data';
//  import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
const {
  registerPlugin
} = wp.plugins;
const {
  PluginSidebar,
  PluginSidebarMoreMenuItem
} = wp.editPost;
const {
  __
} = wp.i18n;
const {
  PanelBody,
  TextControl
} = wp.components;
const {
  withSelect,
  withDispatch
} = wp.data;

let PluginMetaFields = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    value: props.text_value,
    label: __('Text Meta Field', 'sidebar-preview-pdf') // onChange={}

  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: wp.data.select('core/editor').getEditedPostAttribute('meta')["prefix_text_field"],
    target: "_blank",
    rel: "noopener noreferrer",
    id: "pdf-previewer"
  }, "Click here to view PDF!"));
}; //trigger select and dispatch
// PluginMetaFields = withSelect(
//     ( select) => {
//         return {
//             text_value: select('core/editor').getEditedPostAttribute('meta')['prefix_text_field']
//         }
//     }
// )(PluginMetaFields);


registerPlugin('sidebar-preview-pdf', {
  icon: 'smiley',
  render: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PluginSidebar, {
      name: "sidebar-preview-pdf",
      title: __('Meta Options', 'sidebar-preview-pdf')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PluginMetaFields, null)));
  }
}); //  const ExamplePluginDocumentSettingPanel = () => {
//      // Get post type.
//      const postType = useSelect(
//          ( select ) => select( 'core/editor' ).getCurrentPostType(),
//          []
//      );
//      // Get the value of meta and a function for updating meta from useEntityProp.
//      const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
//      // Define which post meta key to read from/save to.
//      const metaKey = 'example_meta_field';
//      /**
//       * A helper function for getting post meta by key.
//       *
//       * @param {string} key - The meta key to read.
//       * @return {*} - Meta value.
//       */
//      const getPostMeta = ( key ) => meta[ key ] || '';
//      /**
//       * A helper function for updating post meta that accepts a meta key and meta
//       * value rather than entirely new meta object.
//       *
//       * Important! Don't forget to register_post_meta (see ../index.php).
//       *
//       * @param {string} key   - The meta key to update.
//       * @param {*}      value - The meta value to update.
//       */
//      const setPostMeta = ( key, value ) =>
//          setMeta( {
//              ...meta,
//              [ key ]: value,
//          } );
//      return (
//          <PluginDocumentSettingPanel
//              name="example-07-slotfills-esnext"
//              title={ __( 'Example Meta Box (ESNext)', 'gutenberg-examples' ) }
//              className="example-07-slotfills-esnext"
//          >
//              <TextControl
//                  label={ __( 'Example Meta Field', 'gutenberg-examples' ) }
//                  value={ getPostMeta( metaKey ) }
//                  onChange={ ( value ) => setPostMeta( metaKey, value ) }
//              />
//          </PluginDocumentSettingPanel>
//      );
//  };
//  registerPlugin( 'example-07-slotfills-esnext', {
//      render: ExamplePluginDocumentSettingPanel,
//  } );
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
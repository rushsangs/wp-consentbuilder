// /**
//  * WordPress dependencies.
//  */
//  import { __ } from '@wordpress/i18n';
//  import { TextControl } from '@wordpress/components';
//  import { useEntityProp } from '@wordpress/core-data';
//  import { useSelect } from '@wordpress/data';
//  import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem} = wp.editPost;
const { __ } = wp.i18n;
const {PanelBody, TextControl} = wp.components;
const {withSelect, withDispatch} = wp.data;

let PluginMetaFields  = ( props ) => {
    return(
        <>
            <TextControl
            value={props.text_value}
            label={__('Text Meta Field', 'sidebar-preview-pdf')}
            // onChange={}
            >

            </TextControl>
            <a href={wp.data.select('core/editor').getEditedPostAttribute('meta')["prefix_text_field"]} target="_blank" rel="noopener noreferrer" id="pdf-previewer">Click here to view PDF!</a>
        </>
    )
}

//trigger select and dispatch
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
        return(
            <>
                <PluginSidebar
                name="sidebar-preview-pdf"
                title={__('Meta Options', 'sidebar-preview-pdf') }
                >
                   <PluginMetaFields />
                </PluginSidebar>
            </>
        )
    }
});
//  const ExamplePluginDocumentSettingPanel = () => {
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
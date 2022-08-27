/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps, RichText } from '@wordpress/block-editor';
 
 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * Those files can contain any CSS code that gets applied to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './editor.scss';
 
 /**
  * The edit function describes the structure of your block in the context of the
  * editor. This represents what the editor will render when the block is used.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
  *
  * @return {WPElement} Element to render.
  */
 
//  export default function Edit({attributes, setAttributes}) {
// 	// var blockProps = useBlockProps();
// 	// 	var rt = wp.element.createElement( RichText, Object.assign( blockProps, {
//     //         tagName: 'p',  // The tag here is the element output and editable in the admin
//     //         value: props.attributes.content, // Any existing content, either from the database or an attribute default
//     //         allowedFormats: [ 'core/bold', 'core/italic' ], // Allow the content to be made bold or italic, but do not allow other formatting options
//     //         onChange: function( content ) {
//     //             setAttributes( { content: content } ); // Store updated content as a block attribute
//     //         },
//     //         placeholder: __( 'Participants of patients...' ), // Display this text before any content has been added by the user
//     //     } ) );
 
//     return (
//         <div { ...useBlockProps() }>
//             <TextareaControl
//                 label={ __( 'Participation of patients') }
//                 onChange={ ( val ) => setAttributes( { message: val } ) }
//             >
// 				<RichText.Content value={ attributes.message } allowedFormats={['core/bold', 'core/italic' ]}/>
// 			</TextareaControl>
//         </div>
//     );
// 		// wp.element.createElement( TextareaControl, Object.assign( blockProps, {
			
// 			// contenteditable : true,
// 			// value :  props.attributes.content
// 		// }), rt); 
// }

export default function Edit(props) {
	var blockProps = useBlockProps();
 
        return <div class="wp-block-create-block-participation-of-patient-block">Risks block{wp.element.createElement( RichText, Object.assign( blockProps, {
            tagName: 'p',  // The tag here is the element output and editable in the admin
			className: 'custom-block-rt-content',
            value: props.attributes.content, // Any existing content, either from the database or an attribute default
            allowedFormats: [ 'core/bold', 'core/italic' ], // Allow the content to be made bold or italic, but do not allow other formatting options
            onChange: function( content ) {
                props.setAttributes( { content: content } ); // Store updated content as a block attribute
            },
            placeholder: __( 'Enter text here...' ), // Display this text before any content has been added by the user
        } ) )}</div>;
}

//  export default function Edit(props) {
// 	if ( ! ClassicEdit ) {
// 		var block = wp.blocks.getBlockType( 'core/freeform' );
// 		ClassicEdit = ( class extends block.edit {
// 			componentDidMount() {
// 				// Call the parent method to setup TinyMCE, etc.
// 				block.edit.prototype.componentDidMount.call( this );

// 				// Change the toolbar's title - to your block's.
// 				jQuery( '#toolbar-' + this.props.clientId )
// 					.attr( 'data-placeholder', 'My Title' );
// 			}
// 		} );
// 	}
// 	return el( ClassicEdit, props );
//  }
//  export default function Edit( { attributes, setAttributes } ) {
//     return (
//         <div { ...useBlockProps() }>
//             <TextControl
//                 label={ __( 'Risks', 'Study background here!' ) }
//                 value={ attributes.message }
//                 onChange={ ( val ) => setAttributes( { message: val } ) }
//             />
//         </div>
//     );
// } 
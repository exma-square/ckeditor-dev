/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// %REMOVE_START%
	config.toolbarGroups = [
 		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
 		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
 		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
 		{ name: 'forms', groups: [ 'forms' ] },
 		'/',
 		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
 		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
 		{ name: 'links', groups: [ 'links' ] },
 		{ name: 'insert', groups: [ 'insert' ] },
 		'/',
 		{ name: 'styles', groups: [ 'styles' ] },
 		{ name: 'colors', groups: [ 'colors' ] },
 		{ name: 'tools', groups: [ 'tools' ] },
 		{ name: 'others', groups: [ 'others' ] },
 		{ name: 'about', groups: [ 'about' ] }
 	];
	config.plugins =
			// 'about,' +
			// 'a11yhelp,' +
			// 'basicstyles,' +
			// 'bidi,' +
			// 'blockquote,' +
			// 'clipboard,' +
			// 'colorbutton,' +
			// 'colordialog,' +
			// 'contextmenu,' +
			// 'dialogadvtab,' +
			// 'div,' +
			// 'elementspath,' +
			// 'enterkey,' +
			// 'entities,' +
			'filebrowser,' +
			// 'find,' +
			// 'flash,' +
			'floatingspace,' +
			'font,' +
			'format,' +
			// 'forms,' +
			// 'horizontalrule,' +
			'htmlwriter,' +
			'image,' +
			// 'iframe,' +
			'indentlist,' +
			'indentblock,' +
			'justify,' +
			// 'language,' +
			'link,' +
			'list,' +
			'liststyle,' +
			'magicline,' +
			'maximize,' +
			// 'newpage,' +
			// 'pagebreak,' +
			// 'pastefromword,' +
			// 'pastetext,' +
			// 'preview,' +
			// 'print,' +
			// 'removeformat,' +
			'resize,' +
			// 'save,' +
			// 'selectall,' +
			// 'showblocks,' +
			'showborders,' +
			// 'smiley,' +
			// 'sourcearea,' +
			// 'specialchar,' +
			'stylescombo,' +
			'tab,' +
			// 'table,' +
			// 'tabletools,' +
			// 'templates,' +
			'toolbar,' +
			// 'undo,' +
			'wysiwygarea';
	// %REMOVE_END%

	// set the route of image upload route here
	config.filebrowserUploadUrl = '/ckeditor/upload';
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%

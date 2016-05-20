/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// %REMOVE_START%

		config.plugins =
				'about,' +
				'a11yhelp,' +
				'basicstyles,' +
				'bidi,' +
				'blockquote,' +
				'clipboard,' +
				'colorbutton,' +
				'colordialog,' +
				'contextmenu,' +
				'dialogadvtab,' +
				'div,' +
				'elementspath,' +
				'enterkey,' +
				'entities,' +
				'filebrowser,' +
				'find,' +
				'flash,' +
				'floatingspace,' +
				'font,' +
				'format,' +
				'forms,' +
				'horizontalrule,' +
				'htmlwriter,' +
				'image,' +
				'iframe,' +
				'indentlist,' +
				'indentblock,' +
				'justify,' +
				'language,' +
				'link,' +
				'list,' +
				'liststyle,' +
				'magicline,' +
				'maximize,' +
				'newpage,' +
				'pagebreak,' +
				'pastefromword,' +
				'pastetext,' +
				'preview,' +
				'print,' +
				'removeformat,' +
				'resize,' +
				'save,' +
				'selectall,' +
				'showblocks,' +
				'showborders,' +
				'smiley,' +
				'sourcearea,' +
				'specialchar,' +
				'stylescombo,' +
				'tab,' +
				'table,' +
				'tabletools,' +
				'templates,' +
				'toolbar,' +
				'undo,' +
				'wysiwygarea';

	  config.toolbarGroups = [
			{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
			{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
			{ name: 'insert', groups: [ 'insert' ] },
			{ name: 'links', groups: [ 'links' ] },
			{ name: 'tools', groups: [ 'tools' ] },
			{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
			{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
			'/',
			{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
			{ name: 'colors', groups: [ 'colors' ] },
			{ name: 'styles', groups: [ 'styles' ] },
			{ name: 'about', groups: [ 'about' ] },
			{ name: 'others', groups: [ 'others' ] },
			{ name: 'forms', groups: [ 'forms' ] }
		];

		config.removeButtons = 'Save,NewPage,Preview,Print,Templates,PasteFromWord,Cut,Flash,About,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Form,Copy,Paste,PasteText';

		// %REMOVE_END%

	// set the route of image upload route here
	config.filebrowserUploadUrl = '/ckeditor/upload';
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%

/**
 * Include some important stuff
 */
var buttons = require('sdk/ui/button/action');
var { Hotkey } = require("sdk/hotkeys");
var tabs = require("sdk/tabs");


/**
 * Adding a button to the UI
 */
var button = buttons.ActionButton ({
	id: "contao-backend-jumper-button",
	label: "Jump into the Contao CMS backend.",
	icon: {
		"16": "./contao-logo-16x16.png",
		"32": "./contao-logo-32x32.png",
		"64": "./contao-logo-64x64.png"
	},
	onClick: jumpToBackend
});


/**
 * Register the shortcut
 */
var showHotKey = Hotkey ({
	combo: "f8",
	onPress: jumpToBackend
});


/**
 * Manipulate the URL and jump into the backend
 */
function jumpToBackend (state) {

	// parse the current url
	var currentUrl = require("sdk/url").URL(tabs.activeTab.url);

	// jump to the backend
	tabs.activeTab.url = currentUrl.host + '/contao';
}

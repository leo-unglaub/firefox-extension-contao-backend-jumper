// add a event listener to the browser action
browser.browserAction.onClicked.addListener (jumpToBackendNewTab);
browser.commands.onCommand.addListener (listenToHotkeys);


/**
 * Open the Contao CMS backend in the current tab
 *
 * @param	tab
 * @return	void
 */
function jumpToBackend (tab) {

	// open the backend in the current tab
	browser.tabs.update (tab.id, {
		url: getNewUrl (tab)
	});

}


/**
 * Open the Contao CMS backend in a new tab
 *
 * @param	tab
 * @return	void
 */
function jumpToBackendNewTab (tab) {

	// open the backend in a new tab
	browser.tabs.create ({
		url: getNewUrl (tab)
	});

}


/**
 * Get the new URL to the Contao CMS backend
 *
 * @param	tab
 * @return	string
 */
function getNewUrl (tab) {

	// modify the current url
	var urlBackend = new URL (tab.url);
	urlBackend.pathname = "/contao/";

	// return the backend url
	return urlBackend.href;
}


/**
 * Listen to all pressed hotkeys
 *
 * @param	command
 * @return	void
 */
function listenToHotkeys (command) {

	// try to resolv the current tab
	var queryOptions = {
		active: true
	};
	var pCurrentTab = browser.tabs.query (queryOptions).then (tabs => {

		// check if our command got called
		switch (command)
		{
			case "open-contao-backend":
				jumpToBackend (tabs[0]);
				break;
				
			case "open-contao-backend-new-tab":
				jumpToBackendNewTab (tabs[0]);
				break;
		}
	});
}
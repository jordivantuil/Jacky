chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);


			var el = document.createElement("div");
		    el.innerHTML = "<img src=\"" + chrome.extension.getURL("/assets/jacky.png") + "\" style=\"position:fixed;bottom:0px;left:50px;width:130px;z-index:9001;\">";
		    // "document.body" can be any element on the page.
		    document.body.appendChild(el);

	}
	}, 10);
});
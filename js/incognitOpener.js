chrome.runtime.onMessage.addListener(function(request) {
  if(request.url != undefined) {
    chrome.windows.create({"url": request.url, "incognito": true});
  }
})

document.addEventListener('click', function(event) {
  reactOnLinkBlank(event.path, function(anchor) {
      var url = anchor.href;
      chrome.runtime.sendMessage({"url": url});
      event.preventDefault();
  });
});

function reactOnLinkBlank(path, openLink) {
  var len = path.length;

  for(var i = 0; i < len; i++) {
    if(path[i].tagName == "A" && path[i].target == "_blank") {
      openLink(path[i]);
    }
  }
}

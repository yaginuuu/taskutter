chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getLocalStorage")
    sendResponse({data: localStorage.my_room_id});
  else
    sendResponse({});
});

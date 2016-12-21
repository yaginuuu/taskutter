$(function(){

  $('ul.btnNavList').eq(1).append('<li id="_quotePartlyToMyChatTask" role="button" class="button btn24 btnLarge">マイチャットにタスク化</li>');

  $('#_quotePartlyToMyChatTask').click(function(){
    var task_text = $.selection();
    chrome.runtime.sendMessage({method: "getLocalStorage", key: "status"}, function(response) {
      location.href = 'https://kcw.kddi.ne.jp/#!rid' + response.data;

      setTimeout(function(){
        $('#_taskNameInput').val(task_text);
      },500);
    });
  });
});

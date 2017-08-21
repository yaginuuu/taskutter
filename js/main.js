$(function(){

  $('ul.quoteTooltip__itemContainer').append('<li id="_quotePartlyToMyChatTask" role="button" class="quoteTooltip__toTask">タスクに引用(マイチャット)</li>');

  $('#_quotePartlyToMyChatTask').click(function(){
    var task_text = $.selection();
    chrome.runtime.sendMessage({method: "getLocalStorage", key: "status"}, function(response) {
      location.href = 'https://kcw.kddi.ne.jp/#!rid' + response.data;

      setTimeout(function(){
        $('#_taskNameInput').val('[qt]' + "\n" + task_text + '[/qt]');
        $('#_taskNameInput').focus();
      },500);
    });
  });
});

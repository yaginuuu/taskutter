$(function(){
  if(localStorage.my_room_id){
    $('#value').val(localStorage.my_room_id);
  }

  // 保存
  $("#put").click(function(){
    localStorage.my_room_id = $("#value").val();
  });
});

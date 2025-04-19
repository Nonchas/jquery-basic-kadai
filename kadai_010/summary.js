$(function(){
  //文字色が変化する
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });

  //文字内容が変更される
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });

  //フェードアウトする
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });

  //フェードインする
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});

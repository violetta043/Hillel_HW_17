 $('button').on('click', function(){
    $('.overlay').css('display', 'block');
    $('.modal').css('display', 'block');
 })

 $('.close').on('click', function(){
    $('.modal').css('display', 'none');
    $('.overlay').css('display', 'none');
 })


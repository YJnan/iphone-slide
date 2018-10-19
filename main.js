/**
 * Created by acer on 2018/10/19.
 */
$(document).ready(function(){
    var totWidth=0;
    var positions = new Array();
    $('#slides .slide').each(function(i){

        positions[i]= totWidth;
        totWidth += $(this).width();
    });
    let $menu = $('#menu ul li a')
    $('#slides').width(totWidth);
    $menu.click(function(e){
        $('li.menuItem').removeClass('act').addClass('inact');
        $(this).parent().addClass('act');
        var roll = $(this).parent().prevAll('.menuItem').length;
        $('#slides').stop().animate({marginLeft:-positions[roll]+'px'},450);
        e.preventDefault();
    });
});
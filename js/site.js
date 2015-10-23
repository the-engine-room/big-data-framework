$(function() {
    $('.hover').hover(function(){
        var popup_div = $('.popup_div');
        var obj = $(this);
        var offset = obj.offset();
        
        var new_top = offset.top + 30;
        
        var new_left = offset.left;
        
        new_left = new_left - ( popup_div.width() / 2);
        new_left = new_left + ( obj.width() / 2);
        
        popup_div.css('left', new_left + 'px');
        popup_div.css('top', new_top + 'px');
        
        popup_div.show();
    }
    , function (){
        //hovered away so hide popup
        $('.popup_div').hide();
    }
    );
});
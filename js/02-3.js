/**
 * Created by dadsf on 2016/9/28.
 */

//左边颜色切换

$('.collect').click(function(){
    $('.left div').css({
        'color':'#333',
        'background-color':'#fff'
    });
    $('.collect').css({
        'color':'#fff',
        'background-color':'#75a749'
    });
    $('.right').hide()
});

$('.publish').click(function(){
    $('.left div').css({
        'color':'#333',
        'background-color':'#fff'
    });
    $('.publish').css({
        'color':'#fff',
        'background-color':'#75a749'
    });
    $('.right').hide()
});

$('.history').click(function(){
    $('.left div').css({
        'color':'#333',
        'background-color':'#fff'
    });
    $('.history').css({
        'color':'#fff',
        'background-color':'#75a749'
    });
    $('.right').hide()
});

$('.information').click(function(){
    $('.left div').css({
        'color':'#333',
        'background-color':'#fff'
    });
    $('.information').css({
        'color':'#fff',
        'background-color':'#75a749'
    });
    $('.right').show();
    $('.uploadingPhoto').css({
        'color': '#333',
        'background-color': '#ccc'
    });
});

$('#first').trigger("click");

$('.changeNickname').click(function(){
    $('.ccc div').css({
        'color': '#666',
        'background-color': '#eee'
    });
    $('.changeNickname').css({
        'color': '#333',
        'background-color': '#ccc'
    });
    $('.boardOne').hide();
    $('.boardThree').hide();
    $('.boardTwo').show();
});

$('.changePassword').click(function(){
    $('.ccc div').css({
        'color': '#666',
        'background-color': '#eee'
    });
    $('.changePassword').css({
        'color': '#333',
        'background-color': '#ccc'
    });
    $('.boardOne').hide();
    $('.boardThree').show();
    $('.boardTwo').hide();
});

$('.uploadingPhoto').click(function(){
    $('.ccc div').css({
        'color': '#666',
        'background-color': '#eee'
    });
    $('.uploadingPhoto').css({
        'color': '#333',
        'background-color': '#ccc'
    });
    $('.boardOne').show();
    $('.boardThree').hide();
    $('.boardTwo').hide();
});
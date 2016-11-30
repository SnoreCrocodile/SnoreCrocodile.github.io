/**
 * Created by Administrator on 2016/10/11 0011.
 */

var off={};
$('form input[name=lname]').on({
        focus: function () {
            $(this).css({
                'border-color': 'rgb(112, 173, 70)'
            });
        },
        blur:function () {
            var val=$(this).val();
            isinput(/[\w]{6,20}/.test(val),this);
        }
    })
    .focus();

$('form input[name=lpassword]').on({
    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur:function () {
        var val=$(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val),this);
    }
});
$('form .input-3').on({
    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur:function () {
        var val=$(this).val();
        isinput(val==''?false:val===$('form input[name=lpassword]').val(),this);
    }
});

$('form input[name=lemail]').on({
    focus: function () {

        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur:function () {
        var val=$(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val),this);

    }
});

$('form input[name=lphone]').on({
    focus: function () {
        $(this).css({
            'border-color': 'rgb(112, 173, 70)'
        })
    },
    blur:function () {
        var val=$(this).val();
        isinput(/^1[0-9]{10}$/.test(val),this);
    }
});

function isinput(put,_this){
    if(put){
        $(_this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
        off[_this.className]=true
    }else {
        $(_this).css({
            'border-color': '#981616'
        });
        off[_this.className]=false;
    }
}

$('form .enroll').click(function () {
    var isform = true;
    if (isform) {
        if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
            $('form input[name=lname]').blur();
        }
        if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
            $('form input[name=lpassword]').blur();
        }
        if (!($('form .input-3').val() === $('form input[name=lpassword]').val()) || $('form .input-3').val()=='' ) {
            $('form .input-3').blur();
        }
        if (!(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test($('form input[name=lemail]').val()))) {
            $('form input[name=lmile]').blur();
        }
        if (!(/^1[0-9]{10}$/.test($('form input[name=lphone]').val()))) {
            $('form input[name=lphone]').blur();
        }
        if($('#a').attr('checked')== undefined){
            alert('请选择');
        }
    }
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
    console.log(isform);
    if (isform) {
        $.ajax({
            type: 'post',
            url: 'http://www.zhijunxing.com/yiju/saveLandlord.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                if (data.resultCode == '0000') {
                    $('.popupBox').show();
                }else{
                    alert('注册失败')
                }

            }
        })
    }
    $('.close').on().click(function(){
        $('.popupBox').hide();
        $("input[type=reset]").trigger("click");
    });
});


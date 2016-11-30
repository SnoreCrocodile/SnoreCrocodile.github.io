/**
 * Created by Administrator on 2016/10/10 0010.
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


$('form .into').click(function () {

    var isform = true;
    if (isform) {
        if (!(/[\w]{6,20}/.test($('form input[name=lname]').val()))) {
            $('form input[name=lname]').blur();
        }
        if (!(/^[a-zA-Z0-9][\w]{5,19}/.test($('form input[name=lpassword]').val()))) {
            $('form input[name=lpassword]').blur();
        }
        if($('#a').attr('checked')== undefined){
            isform = false;
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
            url: 'http://www.zhijunxing.com/yiju/landlordLogin.action',
            dataType: 'jsonp',
            data: $('form').serialize(),
            success: function (data) {
                if (data.resultCode == '0000') {
                    location.href='http://192.168.0.174/index.html'
                }

            }
        })
    }
});



define(['jquery_form','jquery_cookie','jquery'],function(ud,ud,$){

//  * 这里的形参用来接收模块的输出，
//  * 但是需要注意它们是按照顺序接收输出值的，
//  * 同时这些形参的名字可以任意起。
//  */ 

//登录检测状态:
//1.使用cookie插件来判断是否存在PHPSESSID 这个cookie
 //2.如果存在就说明已经登陆,不用再次登陆,直接把用户跳转到登录首页:

    if($.cookie('PHPSESSID')){
        location.href = '/';
    }

    $('#login-form').ajaxForm({
        type:'post',
        url:'/v6/login',
        success:function(){
            location.href = '/';
            console.log('登录成功了');
        },
        error:function(){
            alert('账号密码错误/登录失败');
        }
    })

})
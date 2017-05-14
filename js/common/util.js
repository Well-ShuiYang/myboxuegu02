define(['jquery','jquery_cookie'],function($,ud){

    /**
     * 检测登录状态(登录首页除外)
     * 1.使用cookie插件 判断是否存在PHPSESSID这个cookie
     * 2.如果 不存在 表明没有登录过,直接跳转到 登录首页
     * 
     */

    return {
        checkLoginStatus:function(){
            if(!$.cookie('PHPSESSID')){ //如果不是登录状态,立即跳转登录页面
                location.href = '/html/home/login.html';
            }
            return this
        },
        fn2:function(){
            console.log('uitl fn2');
            return this;
        },

        fn3:function(){
            console.log('util fn3');
            return this;
        },

        add:function(a, b){
            return a + b;
        },
    //启用页面的ajax请求loading效果


    

    }

})
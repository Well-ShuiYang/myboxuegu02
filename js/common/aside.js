define(['jquery_cookie','jquery'], function(ud,$) {
/**
 * 导航上部 用户信息展示:
 * 1.使用插件获取本地cookie,存储用户信息
 * 2.但是这个用户数据属JSON字符串,所以要先用JSON.parse解析成对象再使用:
 * 3.如果用户信息中存在头像,那么进行 img的src替换.否则不用管,因为布局是有默认的头像
 * 4.当用户信息中存在 用户名,则替换/否则使用布局系统默认自带的.
 * 
 */

var userInfo = JSON.parse($.cookie('userInfo') || '{}');
userInfo.tc_avatar && $('.aside .avatar img').attr('src',userInfo.tc_avatar);
userInfo.tc_name  &&  $('.aside h4').text(userInfo.tc_name);



	
});

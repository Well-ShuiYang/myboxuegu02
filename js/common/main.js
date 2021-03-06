require.config({
    baseUrl:'/',

    paths:{
        
        //每个页面对应的模块;
       index:'js/home/index',
       login:'js/home/login',
       repass:'js/home/repass',
       settings:'js/home/settings',

       tcEdit:'js/teacher/edit',
       tcList:'js/teacher/list',

       usProfile:'js/user/profile',
       usList:'js/user/list',

       csAdd:'js/course/add',
       csList:'js/course/list',
       cgAdd:'js/course/category_add',
       cgList:'js/course/category_list',
       csAdd1:'js/course/course_add_step1',
       csAdd2:'js/course/course_add_step2',
       csAdd3:'js/course/course_add_step3',

       //公共模块:
       aside:'js/common/aside',
       header:'js/common/header',
       util:'js/common/util',

       //第三方模块
       jquery:'lib/jquery/jquery.min',
       bootstrap:'lib/bootstrap/js/bootstrap.min',
       jquery_form:'lib/jquery-form/jquery.form',
       jquery_cookie: 'lib/jquery-cookie/jquery.cookie',

       //不依赖jqury的
      nprogress:'lib/nprogress/nprogress',
       
    },


    //配置普通模块 依赖和输出:
    shim:{
      //bootstrap是普通模块,它依赖jquery;所以要配置
      bootstrap:{
          deps:['jquery']
      }

      

    }

});

var obj = {
    '/': 'index',
	'/html/home/login.html': 'login',
	'/html/home/repass.html': 'repass',
	'/html/home/settings.html': 'settings',
	'/html/teacher/edit.html': 'tcEdit',
	'/html/teacher/list.html': 'tcList',
	'/html/user/profile.html': 'usProfile',
	'/html/user/list.html': 'usList',
	'/html/course/add.html': 'csAdd',
	'/html/course/list.html': 'csList',
	'/html/course/category_add.html': 'cgAdd',
	'/html/course/category_list.html': 'cgList',
	'/html/course/course_add_step1.html': 'csAdd1',
	'/html/course/course_add_step2.html': 'csAdd2',
	'/html/course/course_add_step3.html': 'csAdd3'
};

require([obj[location.pathname]]);
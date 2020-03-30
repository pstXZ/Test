import Mock from 'mockjs';

Mock.mock('http://g.cn', {
    'success': '验证码已成功发送' ,
    'msg':'邮箱格式错误',
    'verCode':'123456',
    'userInfo':{
        "token":'123',
        "nickName":"会飞的猪",
        "userEmail":"1607273131@qq.com",
        "rootFolderId":"123456"
    },    
});
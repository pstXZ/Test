import React, { Component } from 'react';
import '../Mock/index';
import 'antd/dist/antd.css';
import '../Static/style/pages/login.css';
import axios from 'axios';
import { message } from 'antd';
import LoginMenu from '../Components/Login/LoginMenu';
import LoginMode from '../Components/Login/LoginMode';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
            isShow: true,
            isLoading: false,
            userEmail: '',
            userEmail2: '',
            password: '',
            verCode: ''
        }
    }

    // 切换登录方式
    handleClick = e => {
        this.setState({ current: e.key })
        if (e.key === 'mail') {
            this.setState({ isShow: true })
        } else if (e.key === 'user') {
            this.setState({ isShow: false })
        }
    }

    // 输入框值的改变
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     // 点击获取验证码校验邮箱
     handleCheckEmail = () => {    
        const { userEmail } = this.state;
        const reg = /[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let isOK = reg.test(userEmail)
        if (!userEmail) {
            message.error('用户邮箱不能为空')
            return false
        } else if (userEmail) {            
            if (!isOK) {
                message.error('用户邮箱格式错误')
                return false
            } else {
                let dataProps = {
                    'userEmail': userEmail
                }
                axios({
                    method: 'post',
                    url: 'http://g.cn',
                    data: dataProps,
                    dataType: 'json',
                    withCredentials: true
                }).then(
                    res => {
                        if (res.data.success === '验证码已成功发送') {
                            message.success(res.data.success)
                        } else {
                            message.error(res.data.msg)
                        }
                    }
                )
                return false
            }
        }
    }

    // 邮箱登录校验
    handleEmailLogin = () => {
        const { userEmail,verCode } = this.state;
        const reg = /[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let isOK = reg.test(userEmail)
        if (!userEmail) {
            message.error('用户邮箱不能为空')
            return false
        } else if (userEmail) {            
            if (!isOK) {
                message.error('用户邮箱格式错误')
                return false
            } else {
                if( !verCode ){
                    message.error('验证码不能为空')
                    return false
                }else{
                    let dataProps = {
                        'userEmail': userEmail,
                        'verCode':verCode
                    }
                    axios({
                        method: 'post',
                        url: 'http://g.cn',
                        data: dataProps,
                        dataType: 'json',
                        withCredentials: true
                    }).then(
                        res => {
                            if (res.data.userInfo) {
                                message.success('登录成功')
                            } else {
                                message.error(res.data.msg)
                            }
                        }
                    )
                    return false
                }
            }
        }
    }

    // 账户登录校验
    handleUserLogin = () =>{
        const { userEmail2,password } = this.state;
        const reg = /[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        let isOK = reg.test(userEmail2)
        if (!userEmail2) {
            message.error('用户邮箱不能为空')
            return false
        } else if (userEmail2) {            
            if (!isOK) {
                message.error('用户邮箱格式错误')
                return false
            } else {
                if(!password){
                    message.error('密码不能为空')
                    return false
                }else{
                    let dataProps = {
                        'userEmail': userEmail2,
                        'password': password
                    }
                    axios({
                        method: 'post',
                        url: 'http://g.cn',
                        data: dataProps,
                        dataType: 'json',
                        withCredentials: true
                    }).then(
                        res => {
                            if (res.data.userInfo) {
                                message.success('登录成功')
                            } else {
                                message.error(res.data.msg)
                            }
                        }
                    )
                    return false
                }                
            }
        }
    }
    
    render() {  
        
        // 解构
        const { current,
                isShow,
                isLoading,
                userEmail,                
                verCode,
                userEmail2,
                password} = this.state;

        return (
            <div className="login-div">
                <LoginMenu 
                    current = { current } 
                    isShow = { isShow } 
                    handleClick = { this.handleClick }
                />
                <LoginMode 
                    isLoading = { isLoading }
                    isShow = { isShow }
                    userEmail = { userEmail }                   
                    verCode = { verCode }
                    userEmail2 = { userEmail2 }
                    password = { password }      
                    onChange = { this.onChange }    
                    handleCheckEmail = { this.handleCheckEmail }
                    handleEmailLogin = { this.handleEmailLogin }          
                    handleUserLogin = { this.handleUserLogin }
                />
            </div>
        );
    }
}

export default Login;
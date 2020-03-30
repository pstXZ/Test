import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import '../../Static/style/pages/login.css';
import { Spin, Card, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const LoginCard = ({ isLoading,
                     isShow,
                     userEmail,
                     onChange,
                     verCode,
                     userEmail2,
                     password,           
                     handleCheckEmail,
                     handleEmailLogin,            
                     handleUserLogin }) => {
                    
    return (
        <Fragment>
            <Spin tip="Loading..." spinning={ isLoading }>
                {/* 邮箱登录 */}
                <Card className={isShow ? 'show' : 'hide'} style={{ width: 400 }}>
                    <Input
                        id="userEmail"
                        size="large"
                        name="userEmail"
                        placeholder="用户邮箱"
                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        value={ userEmail }
                        onChange={ onChange }
                    />
                    <br /><br />
                    <div className="email-div">
                        <div className="email-ver">
                            <Input
                                id="verCode"
                                size="large"
                                name="verCode"
                                placeholder="6位数字验证码"
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={ verCode }
                                onChange={ onChange }
                            />
                        </div>
                        <div className="email-btn">
                            <Button type="primary" size="large" block onClick={ handleCheckEmail }>获取验证码</Button>
                        </div>
                    </div>
                    <br />
                    <Button type="primary" size="large" block onClick={ handleEmailLogin }>登 录</Button>
                </Card>
                {/* 用户名登录 */}
                <Card className={isShow ? 'hide' : 'show'} style={{ width: 400 }}>
                    <Input
                        id="userEmail2"
                        size="large"
                        name="userEmail2"
                        placeholder="用户邮箱"
                        value={ userEmail2 }
                        onChange={ onChange }
                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <br /><br />
                    <Input.Password
                        id="password"
                        size="large"
                        name="password"
                        placeholder="用户密码"
                        value={ password }
                        onChange={ onChange }
                        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <br /><br />
                    <Button type="primary" size="large" block onClick={ handleUserLogin }>登 录</Button>
                </Card>
            </Spin>
        </Fragment>        
    );

}

// 类型校验
LoginCard.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isShow: PropTypes.bool.isRequired,
    userEmail: PropTypes.string.isRequired,
    userEmail2:  PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    verCode: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    handleCheckEmail: PropTypes.func.isRequired,
    handleEmailLogin: PropTypes.func.isRequired,
    handleUserLogin: PropTypes.func.isRequired,
}

export default LoginCard;
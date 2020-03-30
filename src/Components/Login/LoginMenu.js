import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd'
import PropTypes from 'prop-types';

const LoginMenu = ({ current,handleClick }) => {
   
    return (        
        <Fragment>
            <Menu onClick={ handleClick } selectedKeys={ current } mode="horizontal">
                <Menu.Item key="mail">
                    邮箱登录
                </Menu.Item>
                <Menu.Item key="user">
                    账号登录
                </Menu.Item>
            </Menu>            
        </Fragment>
    );
    
}

LoginMenu.propTypes = {
    current:PropTypes.string.isRequired,
    handleClick:PropTypes.func.isRequired,    
}

export default LoginMenu;
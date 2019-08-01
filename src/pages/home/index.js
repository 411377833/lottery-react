/*
 * @file: Home
 * @author: beichensky
 * @description: 打开应用展示的主界面
 */

import React from 'react';
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
const alert = Modal.alert;
export default ({history}) => {

    /**
     * 跳转到 Settings 界面
     */
    const toSettingPage = () => {
        history.push('/settings')
    }

    /**
     * 跳转到 Display 界面
     */
    const toDisplayPage = () => {
        history.push('/display')
    }

    return  (
        <div>
            <h2>当前是 Home 页面，可以选择跳转到 Setting 界面或 Component 界面</h2>
            <Button style={{ marginLeft: 50 }} onClick={ toSettingPage }>Seeting 界面</Button>
            <Button style={{ marginLeft: 30 }} type="primary" onClick={ toDisplayPage }>Display 界面</Button>
            <br />
            <Button
      onClick={() =>
        alert('Delete', 'Are you sure???', [
          { text: 'Cancel', onPress: () => console.log('cancel') },
          { text: 'Ok', onPress: () => console.log('ok') },
        ])
      }
    >
      confirm
    </Button>
        </div>
    )
}


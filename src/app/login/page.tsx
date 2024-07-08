'use client';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '50px' }}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
            >
            <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Login
            </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default Login;
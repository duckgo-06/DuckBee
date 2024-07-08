'use client';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import React from 'react';

const Register = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '50px' }}>
        <h1 style={{ textAlign: 'center' }}>Register</h1>
        <Form
            name="register"
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
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
            >
            <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
                { required: true, message: 'Please confirm your Password!' },
                ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                    }
                    return Promise.reject(
                    new Error('The two passwords that you entered do not match!')
                    );
                },
                }),
            ]}
            >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Register
            </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default Register;
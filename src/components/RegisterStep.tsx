import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

const RegisterStep: React.FC = () => (
    <Steps
        items={[
        {
            title: 'ログイン',
            status: 'finish',
            icon: <UserOutlined />,
        },
        {
            title: '認証',
            status: 'finish',
            icon: <SolutionOutlined />,
        },
        {
            title: 'お支払い',
            status: 'process',
            icon: <LoadingOutlined />,
        },
        {
            title: '終了',
            status: 'wait',
            icon: <SmileOutlined />,
        },
        ]}
    />
);

export default RegisterStep;
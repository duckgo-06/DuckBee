import React from 'react';
import { Button, Empty, Checkbox, Radio, Form, Input } from 'antd';
import TopCarousel from '@/components/TopCarousel';
import ServiceTimeline from '@/components/ServiceTimeline';
import RegisterStep from '@/components/RegisterStep';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Home = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <TopCarousel />
    <Empty />
    <ServiceTimeline />
    <RegisterStep />
    <Checkbox>利用規約及びプライバシーポリシーに同意します</Checkbox>
    <Radio>男</Radio>
    <Radio>女</Radio>
  </div>
);

export default Home;
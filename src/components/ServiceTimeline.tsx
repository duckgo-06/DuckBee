import React from 'react';
import { Timeline } from 'antd';

const ServiceTimeline: React.FC = () => (

    <Timeline
        items={[
        {
            children: '2024年7月 サービスが開始される',
        },
        {
            children: '2024年7月 サービスのUIが大幅に更新される',
        },
        ]}
    />
);

export default ServiceTimeline;
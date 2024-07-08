import React from 'react';
import { Carousel, Image } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const TopCarousel: React.FC = () => (
    <Carousel autoplay arrows>
        <div>
            <Image src='https://www.rollingstone.com/wp-content/uploads/2022/10/Seulgi-of-Red-Velvet.jpg' />
        </div>
        <div>
        <h3 style={contentStyle}>2</h3>
        </div>
        <div>
        <h3 style={contentStyle}>3</h3>
        </div>
        <div>
        <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);

export default TopCarousel;
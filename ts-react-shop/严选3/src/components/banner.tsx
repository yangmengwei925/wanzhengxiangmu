import React, { useEffect, useState } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

interface PropsType {
  bannerList: Array<{
    [name: string]: string | number
  }>
}
let BannerBar: React.FC<PropsType> = (props) => {
  return <WingBlank>
    <Carousel
      autoplay={false}
      infinite={true}
      dotStyle={{ background: '#ccc', width: '0.01rem', height: '0.01rem' }}
      dotActiveStyle={{ background: "black" }}
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      {props.bannerList && props.bannerList.map(val => (
        <a
          key={val.id}
          // href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: 4 + 'rem' }}
        >
          <img
            src={`${val.image_url}`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
            }}
          />
        </a>
      ))}
    </Carousel>
  </WingBlank>
}

export default BannerBar;
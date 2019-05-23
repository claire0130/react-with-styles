import React, { Component } from 'react';

import classNames from 'classnames/bind';
import styles from './KakaoFooter.sass';
const cx = classNames.bind(styles);

class KakaoFooter extends Component {
  state = {
    socialNetworkList : [
      {
        link: '/',
        classname: 'img_comm btn_facebook',
        text: 'Facebook'
      },
      {
        link: '/',
        classname: 'img_comm btn_twitter',
        text: 'twitter'
      },
      {
        link: '/',
        classname: 'img_comm btn_kakaostory',
        text: 'kakaostory'
      } 
    ]
	};

	renderSocialList() {
    return this.state.socialNetworkList.map((social, index) => {
      return (
        <li key={index}>
          <a
            className={social.classname} 
            key={index} 
            href={social.link}
            target="_blank"
            rel="noopener noreferrer">
            {social.text}
          </a>
        </li>
      )    
    })
  };

	render() {
		return (
			<div id="kakaoFoot" className={cx('foot_archer')} role='contentinfo'>  
				<strong className={cx('screen_out')}>소셜 네트워크 서비스 공유하기</strong>
				<ul className={cx('list_sns')}>
					{this.renderSocialList()}
				</ul>

				{/* <small className={cx('img_comm txt_copy')}>
					Copyright ©
					<a href="https://www.kakaogames.com/" target="_blank" rel="noopener noreferrer" className={cx('link_kakaogames')}>Kakao Games Corp.</a> | 
					<a href="https://www.pearlabyss.com/" target="_blank" rel="noopener noreferrer" className={cx('link_pealabyss')}>PearlAbyss</a> 
					All rights reserved.
				</small> */}

				{/* <strong className={cx('screen_out')}>관련사이트</strong>
				<ul className={cx('list_comp')}>
					<li><a href="https://www.kakaogames.com/" target="_blank" rel="noopener noreferrer" className={cx('img_comm', 'btn_kakaogames')}>kakaogames</a></li>
					<li><a href="https://www.pearlabyss.com/" target="_blank" rel="noopener noreferrer" className={cx('img_comm', 'btn_pearlabyss')}>PEARL ABYSS</a></li>
				</ul> */}
			</div>
		);
	}
}

export default KakaoFooter;
// classnames 라이브러리 사용
import React from 'react';
import logoBlack from 'static/images/logo_black.png';
import classNames from 'classnames/bind';
import styles from './KakaoHead.sass';
const cx = classNames.bind(styles);

const KakaoHead = () => {
  return (
    <>  
      <div id="kakaoHead" className={cx('head_event')}>
      <h1 className={cx('tit_logo')}>
        <a href="#none" id="kakaoServiceLogo" className={cx('link_logo')}>
          <img src={logoBlack} width="183" height="53" className={cx('img_thumb')} alt="Black Desert Online REMASTERED" />
        </a>
      </h1>

        <strong className={cx('screen_out')}>서비스 바로가기</strong>
        <ul className={cx('list_util')}>
          <li>
            <a href="#none" className={cx('img_comm', 'link_home')}>검은사막 홈페이지 바로가기</a>
          </li>
          <li>
            <a href="#none" className={cx('img_comm', 'link_today')}>이벤트 페이지 오늘하루 그만보기</a>
          </li>
        </ul>
      </div>      
    </>
  );
};

export default KakaoHead;
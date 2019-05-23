// 방법4. inline-style + CSS moudle + classnames 라이브러리 
import React from 'react';
import classNames from 'classnames';
import logoBlack from 'static/images/logo_black.png';
import styles from './KakaoHead.module.sass';
const cx = classNames.bind(styles);

const KakaoHead = () => {
  const head_event = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    zIdnex: '20',
    minWidth: '1260px',
    height: '100px'
  };

  return (
    <>
      <div id="kakaoHead" style={head_event}>
        <h1 style={{position:"absolute",top:"23px",left:"50px"}}>
          <a href="#none" id="kakaoServiceLogo" style={{display:"block"}}>
            <img src={logoBlack} width="183" height="53" style={{verticalAlign:"top"}} alt="Black Desert Online REMASTERED" />
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
      <hr className={cx('hide')} />
    </>
  );
};

export default KakaoHead;
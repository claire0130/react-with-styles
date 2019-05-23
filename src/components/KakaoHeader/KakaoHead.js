// 방법1. CSS Module
import React from 'react';
import logoBlack from 'static/images/logo_black.png';
import styles from './KakaoHead.module.sass';

console.log(styles); // object 반환

const KakaoHead = () => {
  return (
    <div id="kakaoHead" className={styles.head_event}>
      <h1 className={styles.tit_logo}>
        <a href="#none" id="kakaoServiceLogo" className={styles.link_logo}>
          <img src={logoBlack} width="183" height="53" className={styles.img_thumb} alt="Black Desert Online REMASTERED" />
        </a>
      </h1>

      <strong className={styles.screen_out}>서비스 바로가기</strong>
      <ul className={styles.list_util}>
        <li>
          <a href="#none" className={[styles.img_comm, styles.link_home].join(' ')}>검은사막 홈페이지 바로가기</a>
        </li>
        <li>
          <a href="#none" className={[styles.img_comm, styles.link_today].join(' ')}>이벤트 페이지 오늘하루 그만보기</a>
        </li>
      </ul>
    </div>
  );
};

export default KakaoHead;
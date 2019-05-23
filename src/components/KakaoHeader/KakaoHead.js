// 방법3. inline-style + CSS moudle
import React from 'react';
import logoBlack from 'static/images/logo_black.png';
import {
  img_comm,
  screen_out,
  hide,
  head_event,
  list_util,
  link_home,
  link_today } from './KakaoHead.module.sass';

const KakaoHead = () => {
  return (
    <>
    <div id="kakaoHead" className={head_event}>
      <h1 style={{position:"absolute",top:"23px",left:"50px"}}>
        <a href="#none" id="kakaoServiceLogo" style={{display:"block"}}>
          <img src={logoBlack} width="183" height="53" style={{verticalAlign:"top"}} alt="Black Desert Online REMASTERED" />
        </a>
      </h1>

      <strong className={screen_out}>서비스 바로가기</strong>
      <ul className={list_util}>
        <li>
          <a href="#none" className={[img_comm, link_home].join(' ')}>검은사막 홈페이지 바로가기</a>
        </li>
        <li>
          <a href="#none" className={[img_comm, link_today].join(' ')}>이벤트 페이지 오늘하루 그만보기</a>
        </li>
      </ul>
    </div>
    <hr className={hide} />
    </>
  );
};

export default KakaoHead;
import React, { Component } from 'react';
import ReactModal from 'react-modal';

import VideoLayer1 from '../KakaoLayer/VideoLayer1';
import VideoLayer2 from '../KakaoLayer/VideoLayer2';
import VideoLayer3 from '../KakaoLayer/VideoLayer3';

import styled, { css } from 'styled-components';
import styles from './KakaoMain.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Title = styled.h2`
  width: 662px;
  height: 124px;
  margin-top: 25px;  
`;

const SubTitle = styled.span`
  width: 664px;
  height: 19px;
  margin-top: 27px;
  background-position: 0 -380px;
  ${props =>
    props.type2 &&
    css`
      display: block;
      margin-top: 10px;
      font-size: 15px;
      color: #fff;      
      background: none;
  `};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;  
`;

const Li = styled.li`
  & + li {
    margin-left: 25px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 59px; 
  margin-top: 81px;
  font-size: 15px;  
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #818181;  
  &:hover {
    color: #000;
    background: #d9d9d9;
  }
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid #fff;
      color: #fff;
      &:hover {
        background: #fff;
        color: #000;
      }
  `};  
`;

const dimmedLayer = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgb(0, 0, 0, .6)',
    zIndex: 1000 
  },
  content: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    right: 'auto',
    bottom: 'auto',
    width: 400,
    height: 400,
    margin: '-200px 0 0 -200px',
    padding: 0,
    border: 'none',
    borderRadius: 'none',
    background: '#fff',
    zIndex: 1010
  }
};

ReactModal.setAppElement('#root')

class KakaoMain extends Component {
  state = {
    showModal: false,
    showModal2: false,
    showModal3: false,
    titleList : [
      {        
        classname: 'img_comm ico_sprite',
        text: 'A'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'R'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'C'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'H'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'E'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'R'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'U'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'P'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'D'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'A'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'T'
      },
      {        
        classname: 'img_comm ico_sprite',
        text: 'E'
      },
    ]
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 = () => {
    this.setState({ showModal2: true });
  }

  handleOpenModal3 = () => {
    this.setState({ showModal3: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 = () => {
    this.setState({ showModal2: false });
  }

  handleCloseModal3 = () => {
    this.setState({ showModal3: false });
  }

  renderTextList() {
    return this.state.titleList.map((title, index) => {
      return (
        <span
          key={index}
          className={title.classname + (index+1)}
        >
          {title.text}
        </span>
      )    
    })
  };

  render() {
    const { handleOpenModal, handleOpenModal2, handleOpenModal3, handleCloseModal, handleCloseModal2, handleCloseModal3 } = this;
    const { showModal, showModal2, showModal3 } = this.state;

    return (
      <>
      <div id="kakaoContent" className={cx('cont_main')} role="main">
        <div className={cx('section_intro')}>
          <div className={cx('wrap_video')}>
            <div id="videoArcher" className={cx('video_event')}>
              <iframe src="https://www.youtube.com/embed/78gi1U4Fb7w?autoplay=1&amp;loop=1&amp;autohide=1&amp;controls=1&amp;modestbranding=0&amp;rel=0&amp;showinfo=0&amp;mute=1&amp;enablejsapi=1" className={cx('iframe_youtube')} title="youtube iframe" allow="autoplay; encrypted-media" allowFullScreen=""></iframe>
            </div>
          </div>
  
          <div className={cx('wrap_archer')}>
            <div className={cx('group_sprite')}>
              {this.renderTextList()}
            </div>
  
            <Title className={cx('img_comm', 'tit_archer')}>아처 업데이트</Title>
            <SubTitle className={cx('img_comm')}>개편된 초반 스토리 &amp; 1레벨 각성 무기로 시작의 재미를 더하다!</SubTitle>
            <SubTitle type2={true}>여신 실비아의 영물인 흰 갈기 늑대가 건넨 신물. 카마실브의 힘을 근원으로 하여 신성함이 베여 있다!</SubTitle>
  
            <Ul>
              <Li>
                <Button onClick={handleOpenModal}>전투영상</Button>         
              </Li>
              <Li>
                <Button onClick={handleOpenModal2}>트레이얼</Button>         
              </Li>
              <Li>
                <Button inverted={true} onClick={handleOpenModal3}>캐릭터 소개</Button>         
              </Li>
            </Ul>

            <ReactModal
              isOpen={showModal}
              onRequestClose={handleCloseModal}
              style={dimmedLayer}
            >
            
              <VideoLayer1 onClickClose={handleCloseModal}/>
            </ReactModal>

            <ReactModal 
              isOpen={showModal2}
              onRequestClose={handleCloseModal2}
              style={dimmedLayer}              
            >
              <VideoLayer2 onClickClose={handleCloseModal2}/>
            </ReactModal>
            
            <ReactModal 
              isOpen={showModal3}
              contentLabel="Modal #2 Global Style Override Example"
              onRequestClose={handleCloseModal3}
              style={dimmedLayer}              
            >

              <VideoLayer3 onClickClose={handleCloseModal3}/>
            </ReactModal>

          </div>
        </div>
      </div>      
      </>
    );
  }
}

export default KakaoMain;
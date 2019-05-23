import React from 'react';

import styles from './Layer.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const VideoLayer2 = ({ onClickClose }) => {
  return (
    <div className={cx('video_layer')}>
      <div className={cx('inner_video_layer')}>
        <div className={cx('layer_head')}>
          <strong className={cx('screen_out')}>아처 트레일러 보기</strong>
        </div>
        <div className={cx('layer_body')}>
          <div className={cx('thumb_media')}>
          <iframe className={cx('video_movie')} title='아처 트레일러' src='https://www.youtube.com/embed/vDLeILM6phA?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;loop=1&amp;playlist=vDLeILM6phA' />
          </div>
        </div>
        <div className={cx('layer_foot')}>
          <button onClick={onClickClose} className={cx('btn_close')}><span className={cx('img_comm', 'ico_close')}>아처 트레일러 영상 팝업 닫기</span></button>
        </div>
      </div>
    </div>
  );
};

export default VideoLayer2;
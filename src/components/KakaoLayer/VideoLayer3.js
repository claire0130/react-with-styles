import React from 'react';

import styles from './Layer.sass';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const VideoLayer3 = ({ onClickClose }) => {
  return (
    <div className={cx('video_layer')}>
      <div className={cx('inner_video_layer')}>
        <div className={cx('layer_head')}>
          <strong className={cx('screen_out')}>17번째 신규 캐릭터 아처 등장 보기</strong>
        </div>
        <div className={cx('layer_body')}>
          <div className={cx('thumb_media')}>
          <iframe className={cx('video_movie')} title='17번째 신규 캐릭터 아처 등장' src='https://www.youtube.com/embed/k-XZzQTP9qQ?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;loop=1&amp;playlist=vDLeILM6phA' />
          </div>
        </div>
        <div className={cx('layer_foot')}>
          <button onClick={onClickClose} className={cx('btn_close')}><span className={cx('img_comm', 'ico_close')}>17번째 신규 캐릭터 아처 등장 영상 팝업 닫기</span></button>
        </div>
      </div>
    </div>
  );
};

export default VideoLayer3;
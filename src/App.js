import React, { Component } from 'react';
import styles from './App.sass';
import classNames from 'classnames';
import KakaoHead from 'components/KakaoHeader/KakaoHead';
import KakaoMain from 'components/KakaoMain/KakaoMain';
import KakaoFooter from 'components/KakaoFooter/KakaoFooter';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div id="kakaoPromotion" className={cx('prm_event')}>
        <KakaoHead />
        <hr className={('hide')} />
        <KakaoMain />
        <hr className={('hide')} />
        <KakaoFooter />
      </div>
    );
  }
}

export default App;

import classNames from 'classnames/bind';
import styles from './AccountVideo.module.scss';
import videos from '~/assets/videos/2.mp4';
const cx = classNames.bind(styles);
function AccountVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-videos')}>
                <video className={cx('video')} controls width="850" height="740">
                    <source src={videos}></source>
                </video>
            </div>
            <div className={cx('right-chat')}>
                <div className={cx('chat')}></div>
            </div>
        </div>
    );
}

export default AccountVideo;

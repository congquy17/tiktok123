import styles from './Content.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faLink, faMessage } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import videos from '~/assets/videos/2.mp4';
import AccountVideo from '~/components/AccountVideo';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
const cx = classNames.bind(styles);
function Content({ data }) {
    // const history = useHistory();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('img-header')} src={data.avatar}></img>
                <div className={cx('sub-header')}>
                    <h2 className={cx('name')}>
                        {data.full_name} <span className={cx('subname')}>#Fa</span>
                    </h2>
                    <p className={cx('fami')}>#Family #OurDZ</p>
                    <div>
                        <img
                            className={cx('img-icon')}
                            src="https://media.istockphoto.com/id/1017890378/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-nh%E1%BA%A1c-ho%E1%BA%A1t-h%C3%ACnh-vector-theo-phong-c%C3%A1ch-truy%E1%BB%87n-tranh-bi%E1%BB%83u-%C4%91%E1%BB%93-h%C3%ACnh-%E1%BA%A3nh-minh-h%E1%BB%8Da-d%E1%BA%A5u.jpg?s=612x612&w=0&k=20&c=FzUQmwpUEgrpDsdq5GwKSJD48oo6xR8RcQqohpzv7kw="
                        ></img>
                        <span>Đừng vì anh mà khóc ##</span>
                    </div>
                </div>
                <Button primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('center-content')}>
                <video className={cx('video')} controls width="350" height="640">
                    <source src={videos}></source>
                </video>

                <div className={cx('actions')}>
                    <div className={cx('icon-action')}>
                        <FontAwesomeIcon className={cx('icon-single')} icon={faHeart} />
                        <p>137.954K</p>
                    </div>
                    <div className={cx('icon-action')}>
                        <Link to={`/video/@${data.nickname}`}>
                            <FontAwesomeIcon className={cx('icon-single')} icon={faMessage} />
                            <p>135K</p>
                        </Link>
                    </div>
                    <div className={cx('icon-action')}>
                        <FontAwesomeIcon className={cx('icon-single')} icon={faBookmark} />
                        <p>137</p>
                    </div>
                    <div className={cx('icon-action')}>
                        <FontAwesomeIcon className={cx('icon-single')} icon={faLink} />
                        <p>137</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;

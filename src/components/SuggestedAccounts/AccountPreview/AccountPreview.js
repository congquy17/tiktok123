import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountPreview({ children }) {
    return (
        <div className={cx('preview')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6958db668e18814b5fc658d17dcf7b35.jpeg?lk3s=a5d48078&x-expires=1705071600&x-signature=yIelGa5E%2FaWsZMCi%2BqpGirUHSoI%3D"
                    alt=""
                />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong> <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
            </div>
        </div>
    );
}

export default AccountPreview;

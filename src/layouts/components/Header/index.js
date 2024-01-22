import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faRightFromBracket,
    faSignIn
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';

import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { CommentIcon, MailBoxIcon, UploadIcon } from '~/components/icons';
import Search from '../Search';
import config from '~/config/routes';
const cx = classNames.bind(styles);
//   user dang nhap
const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            { type: 'language', code: 'en', title: 'Tiếng pháp' },
                            { type: 'language', code: 'vi', title: 'Tiếng Việt 1' }
                        ]
                    }
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard short cuts'
    }
];

function Header() {
    // đang triển khai
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile'
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Get icon',

            separate: true
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'log out',
            to: '/logout',
            separate: true
        }
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.home}>
                    <div className={cx('logo')}>
                        <Image className={cx('logo1')} src={images.logo1} alt="titok"></Image>
                    </div>
                </Link>
                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload" delay={[0, 200]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faFileUpload}></FontAwesomeIcon>
                                     */}
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <button className={cx('action-btn')}>
                                <CommentIcon />
                            </button>

                            <Tippy content="Hộp thư" delay={[0, 200]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MailBoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ee13c3f262ed000091a095d7f968f487~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704441600&x-signature=zGrsUBYM4u4khnlMGgw5E1chL2g%3D"
                                className={cx('user-avatar')}
                                alt="becuaanh"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

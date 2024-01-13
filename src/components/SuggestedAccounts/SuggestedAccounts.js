import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function SuggestedAcounts({ label }) {
    const [sideBar, setSideBar] = useState([]);
    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=less')
            .then((res) => res.json())
            .then((res) => {
                setSideBar(res.data);
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {/* Kiểm tra sideBar tồn tại và là một mảng trước khi map */}
            {sideBar &&
                Array.isArray(sideBar) &&
                sideBar.map((sidebar) => <AccountItem key={sidebar.id} data={sidebar} />)}

            <p className={cx('more-btn')}> See all</p>
        </div>
    );
}
SuggestedAcounts.prototype = {
    label: PropTypes.string.isRequired
};
export default SuggestedAcounts;

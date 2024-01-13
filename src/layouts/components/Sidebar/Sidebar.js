import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAcounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(style);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={cx()}>
                <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Khám phá mới" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestedAcounts label="Suggested Account" />
            <SuggestedAcounts label="Suggested Account" />
        </aside>
    );
}
// Menu.prototype;

export default Sidebar;

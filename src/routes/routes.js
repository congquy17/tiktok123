import { HeaderOnly } from '~/layouts';
import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';
import config from '~/config';
import Live from '~/page/Live';
import Feedback from '~/page/Feedback';
import AccountVideo from '~/components/AccountVideo';
//  dùng để hiển thị public
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.profileVideo, component: AccountVideo, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
    { path: config.routes.feedback, component: Feedback },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null }
];
//  dùng để hiển thị bắt buộc phải đăng nhập
const privateRoutes = [];
export { publicRoutes, privateRoutes };

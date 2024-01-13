import { useEffect, useState } from 'react';
import Content from './Content';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=less')
            .then((res) => res.json())
            .then((res) => {
                setVideo(res.data);
            });
    }, []);

    return (
        <div>
            {video && Array.isArray(video) && video.map((video) => <Content key={video.id} data={video} />)}
            <p className={cx('more-btn')}> See all</p>
        </div>
    );
}

export default Home;

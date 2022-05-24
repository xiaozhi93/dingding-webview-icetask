import { Link } from 'ice';
import styles from './index.module.less';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>home page</h1>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/ice">进入 React 微应用</Link></div>
    </div>
  );
};

export default Home;

import { Link } from 'ice';
import styles from './index.module.less';

const About = () => {
  return (
    <div className={styles.page}>
      <h1>About page</h1>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/seller/list">进入 React 微应用</Link></div>
    </div>
  );
};

export default About;

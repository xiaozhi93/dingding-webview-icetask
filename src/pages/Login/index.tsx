import { Link } from 'ice';
import styles from './index.module.less';

const Login = () => {
  return (
    <div className={styles.page}>
      <h2>登录页面</h2>
      <p>使用独立的 Layout</p>
      <div>
        <Link to="/">返回首页</Link>
      </div>
    </div>
  );
};

export default Login;

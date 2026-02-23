import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>Copyright &copy; {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>
  )
}

export default Sidebar

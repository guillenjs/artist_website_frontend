import styles from '../../styles/Layout.module.css'
import NavBar from './nav'

const Layout = ({children}) => {
    return (
        <div className={styles.main}>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}

export default Layout
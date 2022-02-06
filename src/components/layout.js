import Head from 'next/head'
import { BASE_URL } from './constants'
import styles from '../../styles/Layout.module.css'
import NavBar from './nav'

const Layout = ({children}) => {
    return (
        <div className={styles.main}>
            <Head>
                <link rel="preload" href={`${BASE_URL}/api/work-years`} as="fetch" crossorigin="anonymous"></link>
            </Head>

            <NavBar />
            <main>{children}</main>
        </div>
    )
}

export default Layout
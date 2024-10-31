import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

import styles from './styles/Layout.module.scss';

function Layout({ children }: { children?: React.ReactNode }) {
  return children ?? (
    <>
        <div className={styles.background} />
        <Header routes={[]} />
        <Outlet />
    </>
  )
}

export default Layout;
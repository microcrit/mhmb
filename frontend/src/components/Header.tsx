import Route from '@/types/Route';

import styles from './styles/Header.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Header({ routes }: { routes: Route[] }) {
    const nav = useNavigate();

    return (
        <header className={styles.header}>
            <nav>
                {routes.map((x: Route) => (
                    <li onClick={() => {
                        nav(x.path);
                    }}>
                        <div className={styles.icon}>{x.icon}</div>
                        <div className={styles.title}>{x.name}</div>
                    </li>
                ))}
            </nav>
        </header>
    )
}
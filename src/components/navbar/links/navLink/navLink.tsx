import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    item: {
        path: string;
        title: string;
    };
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.title}
        </Link>
    );
};

export default NavLink;

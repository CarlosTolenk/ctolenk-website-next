import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";


import styles from './NavItem.module.css';


interface IPropsNavItem {
    href: string;
    iconSource: IconDefinition;
    text: string;
}

const NavItem = ({href, iconSource, text}: IPropsNavItem) => {
    const {asPath} = useRouter();

    return (
        <>
            <Link href={href} passHref>
                <li className={styles.listNav}>
                    <a className={asPath === href ? 'active' : ''}>
                        <div className={styles.containerNavItem}>
                            <div className={styles.containerNavItemIcon}>
                                <FontAwesomeIcon
                                    size={"1x"}
                                    icon={iconSource}/>
                            </div>
                            <p className={styles.NavItemText}>{text}</p>
                        </div>
                    </a>
                </li>
            </Link>
        </>
    )

}

export default NavItem;

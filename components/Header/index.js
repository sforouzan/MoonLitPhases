import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image className={styles.logoIcon} src={'/images/logo.svg'} alt="logo" width={40} height={40}/>
            </div>
            <h1>MoonLit Phases</h1>
        </header>

    )
}
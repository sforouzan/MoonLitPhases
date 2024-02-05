import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>© Designed with love for the moon by <a target="_blank" href="https://www.instagram.com/shirinlune">Shirin Forouzan</a></p>
            <p>All rights reserved.</p>
        </footer>

    )
}
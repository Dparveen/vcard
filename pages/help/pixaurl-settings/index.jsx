import Link from "next/link";
import styles from '../help.module.css';
const pixaURLSettings = () => {
    return (
     <>
        <div className={styles.page_full_handle}>
            <div className="pu_container">
                <div className={styles.pu_wr}>
                    <h3 className={styles.page_heading}>PixaURL Settings</h3>
                    <div className={styles.page_handle}>
                        <Link href="/help"><a  className={styles.link___active}> Help <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_22_10)"><path d="M7.64506 5.49505L3.34522 9.79476C3.0717 10.0684 2.62823 10.0684 2.35484 9.79476C2.08143 9.52135 2.08143 9.0779 2.35484 8.80451L6.15953 4.99993L2.35495 1.19548C2.08154 0.921955 2.08154 0.478552 2.35495 0.205141C2.62836 -0.0683805 3.07181 -0.0683805 3.34533 0.205141L7.64517 4.50492C7.78188 4.64169 7.85015 4.82075 7.85015 4.99991C7.85015 5.17915 7.78174 5.35835 7.64506 5.49505Z" fill="#F9913A"/></g><defs><clipPath id="clip0_22_10"><rect width="10" height="10" fill="white"/></clipPath></defs></svg> </a></Link>
                        <a > PixaURL Settings </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="pu_container">
            <div className={`${styles.help_main} ${styles.pu_pixaurl_settings}`}> 
                <Link href="/help/pixaurl-settings/customize-theme"><a>How to customize PixaURL theme</a></Link>
                <Link href="/help/pixaurl-settings/setup-social-links"><a>How to setup social links</a></Link>
                <Link href="/help/pixaurl-settings/change-icon-theme"><a>How to change social icon theme</a></Link>
                <Link href="/help/pixaurl-settings/change-template"><a>How to change PixaURL template</a></Link>
                <Link href="/help/pixaurl-settings/seo-settings"><a>PixaURL SEO settings</a></Link>
            </div>
        </div>
        </>
     
    );
}
export default pixaURLSettings;
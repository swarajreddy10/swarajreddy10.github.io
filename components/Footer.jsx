import { PROFILE, RESUME_PATH, SOCIAL_LINKS } from '../data/site';

const PROFILE_LINKS = SOCIAL_LINKS.filter(link => link.external);

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-shell">
                <div>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} {PROFILE.fullName}.</p>
                    <p className="footer-note">
                        This site counts visits with GoatCounter, which sets no cookies and collects no personal data.{' '}
                        <a href="https://www.goatcounter.com/help/gdpr" target="_blank" rel="noopener noreferrer">How GoatCounter handles data</a>
                    </p>
                </div>
                <nav className="footer-links" aria-label="Footer navigation">
                    <a href={RESUME_PATH} download data-goatcounter-click="resume-download">Résumé</a>
                    {PROFILE_LINKS.map(link => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ))}
                    <a href="#home">Back to top</a>
                </nav>
            </div>
        </footer>
    );
}

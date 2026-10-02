import { RESUME_PATH } from '../data/site';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-shell">
                <p className="footer-copy">&copy; {new Date().getFullYear()} Swaraj Chandra Reddy M.</p>
                <nav className="footer-links" aria-label="Footer navigation">
                    <a href={RESUME_PATH} download>Résumé</a>
                    <a href="https://linkedin.com/in/swarajreddy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/swarajreddy10" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#home">Back to top</a>
                </nav>
            </div>
        </footer>
    );
}

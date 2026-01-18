import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#events', label: 'Events' },
        { href: '#why', label: 'Why LMTLS' },
        { href: '#gallery', label: 'Gallery' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#hero" className="navbar-logo">
                    <span className="logo-mark">LMTLS</span>
                </a>
                <div className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
                        ))}
                    </div>
                    <a href="#join" className="btn btn-primary navbar-cta" onClick={() => setMobileOpen(false)}>Join Now</a>
                </div>
                <button className={`navbar-toggle ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

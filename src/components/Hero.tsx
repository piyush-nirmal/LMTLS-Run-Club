import { useEffect, useState } from 'react';
import './Hero.css';
import CurvedLoop from './CurvedLoop';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="hero" id="hero">
            {/* Curved Loop - positioned at top below navbar */}
            <CurvedLoop
                marqueeText="We ✦ Are ✦ LMTLS ✦ We ✦ Are ✦ Limitless ✦ "
                speed={0.5}
                curveAmount={300}
                direction="left"
                interactive
            />

            {/* Animated Background */}
            <div className="hero-bg">
                <div
                    className="hero-gradient-orb orb-1"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                />
                <div
                    className="hero-gradient-orb orb-2"
                    style={{
                        transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
                    }}
                />
                <div
                    className="hero-gradient-orb orb-3"
                    style={{
                        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                    }}
                />
                <div className="hero-grid" />
                <div className="hero-motion-blur" />
            </div>

            {/* Content */}
            <div className="container hero-content">
                <div className={`hero-text ${isLoaded ? 'loaded' : ''}`}>
                    {/* Badge */}
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        <span>Not a club, a collective</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="hero-title">
                        <span className="title-line">
                            <span className="title-word">Built on</span>
                            <span className="title-word text-gradient"> Motion.</span>
                        </span>
                        <span className="title-line">
                            <span className="title-word">Powered by</span>
                            <span className="title-word text-gradient"> Community.</span>
                        </span>
                    </h1>

                    {/* Subtext */}
                    <div className="hero-subtext">
                        <span className="subtext-item">Running</span>
                        <span className="subtext-divider">|</span>
                        <span className="subtext-item">Fitness</span>
                        <span className="subtext-divider">|</span>
                        <span className="subtext-item">Collective</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-cta">
                        <a href="#join" className="btn btn-primary">
                            <span>Join the Collective</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#events" className="btn btn-secondary">
                            <span>Community Runs</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </a>
                    </div>

                    {/* LMTLS Logo Text */}
                    <div className="hero-logo-text">
                        <span className="logo-letter">L</span>
                        <span className="logo-letter">M</span>
                        <span className="logo-letter">T</span>
                        <span className="logo-letter">L</span>
                        <span className="logo-letter">S</span>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </div>

            {/* Speed Lines */}
            <div className="speed-lines">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="speed-line" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
            </div>
        </section>
    );
};

export default Hero;


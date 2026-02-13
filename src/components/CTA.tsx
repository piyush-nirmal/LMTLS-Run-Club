import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CTA.css';

const CTA = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

    return (
        <section className="cta" id="join" ref={ref}>
            <div className="cta-bg">
                <div className="cta-gradient-1" />
                <div className="cta-gradient-2" />
                <div className="cta-lines">{[...Array(5)].map((_, i) => <div key={i} className="cta-line" />)}</div>
            </div>
            <div className="container">
                <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
                    <div className="cta-badge"><span className="badge-pulse" /><span>Join 5000+ Members</span></div>
                    <h2 className="cta-title">
                        <span className="title-line">Move Together.</span>
                        <span className="title-line text-gradient">Grow Limitless.</span>
                    </h2>
                    <p className="cta-subtitle">The next chapter of your fitness journey starts with a single step. Take it with us.</p>
                    <div className="cta-buttons">
                        <a href="https://www.instagram.com/wearelmtls" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            Follow on Instagram
                        </a>
                        <a href="#events" className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            Join Next Run
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;

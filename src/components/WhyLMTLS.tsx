import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyLMTLS.css';

const values = [
    { icon: 'users', title: 'Community', desc: 'Run with people who push you forward. No egos, just energy.' },
    { icon: 'repeat', title: 'Consistency', desc: 'Show up every day. Small steps lead to massive results.' },
    { icon: 'target', title: 'Discipline', desc: 'Build habits that last. Train your mind before your body.' },
    { icon: 'trending', title: 'Growth', desc: 'Every run is a chance to become a better version of yourself.' },
];

const getIcon = (name: string) => {
    const icons: Record<string, React.ReactNode> = {
        users: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        repeat: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>,
        target: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
        trending: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    };
    return icons[name];
};

const WhyLMTLS = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

    return (
        <section className="why-lmtls" id="why" ref={ref}>
            <div className="why-bg"><div className="why-gradient" /><div className="why-pattern" /></div>
            <div className="container">
                <div className={`why-content ${isVisible ? 'visible' : ''}`}>
                    <div className="why-header">
                        <span className="section-tag">Our Values</span>
                        <h2 className="section-title">Why <span className="text-gradient">LMTLS</span>?</h2>
                        <p className="section-subtitle">We're built on principles that transform runners into a family.</p>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div className="value-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="value-icon">{getIcon(v.icon)}</div>
                                <h3 className="value-title">{v.title}</h3>
                                <p className="value-desc">{v.desc}</p>
                                <div className="value-glow" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyLMTLS;

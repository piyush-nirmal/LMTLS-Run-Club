import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import './About.css';

interface StatProps {
    value: number;
    label: string;
    suffix?: string;
}

const StatCard = ({ value, label, suffix = '' }: StatProps) => {
    const { ref, count } = useCountUp(value, 2500);

    return (
        <div className="stat-card" ref={ref}>
            <div className="stat-value">
                <span className="stat-number">{count.toLocaleString()}</span>
                <span className="stat-suffix">{suffix}</span>
            </div>
            <div className="stat-label">{label}</div>
            <div className="stat-glow" />
        </div>
    );
};

const About = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

    return (
        <section className="about" id="about" ref={sectionRef}>
            {/* Background Elements */}
            <div className="about-bg">
                <div className="about-gradient" />
                <div className="about-lines">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="about-line" />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className={`about-content ${isVisible ? 'visible' : ''}`}>
                    {/* Section Header */}
                    <div className="about-header">
                        <span className="section-tag">Who We Are</span>
                        <h2 className="section-title">
                            More Than a Club.
                            <br />
                            <span className="text-gradient">A Movement.</span>
                        </h2>
                    </div>

                    {/* Story */}
                    <div className="about-story">
                        <div className="story-text">
                            <p className="story-lead">
                                LMTLS started as a group of friends chasing the same thing —
                                <strong> to push beyond limits</strong>.
                                What began as sunrise runs through the streets of Mumbai has grown
                                into a collective of hundreds who believe that
                                <em> movement is medicine</em>.
                            </p>
                            <p className="story-body">
                                We're not here to gatekeep fitness. Whether you're running your
                                first kilometer or your hundredth marathon, you belong here.
                                This is a space for anyone who wants to move, grow, and connect
                                with a community that shows up — rain or shine, 5 AM or sunset.
                            </p>
                            <p className="story-tagline">
                                <span className="text-gradient">Limitless isn't a destination. It's a mindset.</span>
                            </p>
                        </div>

                        {/* Image Placeholder with Motion Effect */}
                        <div className="about-visual">
                            <div className="visual-frame">
                                <div className="visual-image">
                                    <div className="image-overlay" />
                                    <div className="image-text">
                                        <span>EST.</span>
                                        <span className="year">2023</span>
                                    </div>
                                </div>
                                <div className="visual-accent" />
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="about-stats">
                        <StatCard value={250} label="Community Runs" suffix="+" />
                        <StatCard value={5000} label="Active Members" suffix="+" />
                        <StatCard value={75000} label="Kilometers Covered" suffix="+" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

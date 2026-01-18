import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Gallery.css';

const galleryItems = [
    { id: 1, title: 'Dawn Warriors', category: 'Running', image: '/images/runner_motion.png' },
    { id: 2, title: 'Street Strength', category: 'Fitness', image: '/images/street_strength.png' },
    { id: 3, title: 'Unity in Motion', category: 'Community', image: '/images/community_run.png' },
    { id: 4, title: 'Breaking Limits', category: 'Running', image: '/images/breaking_limits.png' },
    { id: 5, title: 'Iron Will', category: 'Fitness', image: '/images/iron_will.png' },
    { id: 6, title: 'Together Forward', category: 'Community', image: '/images/together_forward.png' },
];

const Gallery = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

    // Duplicate items for seamless infinite scroll
    const duplicatedItems = [...galleryItems, ...galleryItems];

    return (
        <section className="gallery" id="gallery" ref={sectionRef}>
            <div className="gallery-bg"><div className="gallery-gradient" /></div>
            <div className="container">
                <div className={`gallery-header ${isVisible ? 'visible' : ''}`}>
                    <span className="section-tag">Gallery</span>
                    <h2 className="section-title">Motion in <span className="text-gradient">Frame</span></h2>
                    <p className="section-subtitle">Moments captured from the streets. The grind. The glory.</p>
                </div>
            </div>
            <div className={`gallery-marquee-wrapper ${isVisible ? 'visible' : ''}`}>
                <div className="gallery-marquee">
                    <div className="gallery-track">
                        {duplicatedItems.map((item, index) => (
                            <div className="gallery-item" key={`${item.id}-${index}`}>
                                <div className="gallery-image">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                    <div className="gallery-gradient-overlay" />
                                    <div className="gallery-overlay">
                                        <span className="gallery-number">0{item.id}</span>
                                        <h3 className="gallery-title">{item.title}</h3>
                                        <span className="gallery-category">{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;

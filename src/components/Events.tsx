import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Events.css';

interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    distance: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    spots: number;
}

const events: Event[] = [
    { id: 1, title: 'Sunrise Sprint', date: 'Jan 25, 2026', time: '5:30 AM', location: 'Marine Drive, Mumbai', distance: '5K', difficulty: 'Beginner', spots: 12 },
    { id: 2, title: 'Urban Warriors', date: 'Feb 2, 2026', time: '6:00 AM', location: 'Bandra Bandstand', distance: '10K', difficulty: 'Intermediate', spots: 8 },
    { id: 3, title: 'Limitless Half', date: 'Feb 15, 2026', time: '5:00 AM', location: 'Worli Sea Face', distance: '21K', difficulty: 'Advanced', spots: 5 },
    { id: 4, title: 'Recovery Run', date: 'Feb 22, 2026', time: '6:30 AM', location: 'Juhu Beach', distance: '3K', difficulty: 'Beginner', spots: 20 },
];

const getDifficultyColor = (d: Event['difficulty']) => d === 'Beginner' ? 'var(--cyan)' : d === 'Intermediate' ? 'var(--electric-purple)' : 'var(--crimson)';

const EventCard = ({ event }: { event: Event }) => (
    <div className="event-card">
        <div className="event-card-inner">
            <div className="event-topbar">
                <span className="event-difficulty" style={{ color: getDifficultyColor(event.difficulty) }}>{event.difficulty}</span>
                <span className="event-distance">{event.distance}</span>
            </div>
            <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-details">
                    <div className="event-detail"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg><span>{event.date}</span></div>
                    <div className="event-detail"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span>{event.time}</span></div>
                    <div className="event-detail"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg><span>{event.location}</span></div>
                </div>
            </div>
            <div className="event-footer">
                <div className="event-spots"><span className="spots-count">{event.spots}</span><span className="spots-label">spots left</span></div>
                <button className="event-cta">Register<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            </div>
            <div className="event-glow" />
        </div>
    </div>
);

const Events = () => {
    const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

    return (
        <section className="events" id="events" ref={sectionRef}>
            <div className="events-bg"><div className="events-gradient" /></div>
            <div className="container">
                <div className={`events-content ${isVisible ? 'visible' : ''}`}>
                    <div className="events-header">
                        <span className="section-tag">Upcoming</span>
                        <h2 className="section-title">Community<span className="text-gradient"> Runs</span></h2>
                        <p className="section-subtitle">Join our weekly runs across Mumbai. All levels welcome.</p>
                    </div>
                    <div className="events-grid">{events.map((e) => <EventCard key={e.id} event={e} />)}</div>
                    <div className="events-more"><a href="#all-events" className="btn btn-secondary">View All Events</a></div>
                </div>
            </div>
        </section>
    );
};

export default Events;

// Spotify Configuration
const SPOTIFY_CONFIG = {
  CLIENT_ID: 'your_client_id_here',
  CLIENT_SECRET: 'your_client_secret_here',
  PLAYLIST_ID: '5mypPIA8Gp9DHI7VIXGkq7' // Extracted from your Spotify URL
};

const { useState, useEffect, StrictMode } = React;

// --- DATA ---
const experiencesData = {
  professional: [
    { title: "Backend Software Engineer Intern", company: "Fetch", location: "Madison, WI", dates: "May 2025 – Aug 2025", description: ["Architected and deployed a FastAPI-based location auditor service to identify near-miss receipt matches—driving an average increase of 4,000 matched receipts / year per audited location and unlocking $1.3M+ in annual partner revenue", "Developed an LLM-driven agentic receipt surfacer, automating receipt detection and eliminating manual review effort", "Created a Grafana dashboard to monitor audit performance and revenue impact, and remediate mis-audited locations"], logo: "./images/fetch-logo.png" },
    { title: "Founder", company: "Piles", location: "Madison, WI", dates: "May 2025 - Present", description: ["Building iOS application to allow users to express themselves by organizing and curating content from across the internet", "Leading team of three developers through product/marketing sprints using AGILE project management framework", "Implementing A/B tests of features and trial marketing runs with users to increase engagement in initial product"], logo: "./images/piles-logo.png" },
    { title: "Software Engineer Intern", company: "sidebetz.ai", location: "Remote", dates: "May 2024 – Jan 2025", description: ["Developed the world's first historical vault of live-streamed high-stakes poker game data and player behavior for optimizing the application's odds engine", "Leveraged and trained object detection and optical character recognition models with PyTorch in order to generate actionable data from previous live streams", "Created an application capable of parsing thousands of hours of poker live-stream video for player actions and behaviors through pattern recognition and data analysis"], logo: "./images/sidebetz-logo.png" },
    { title: "Backend Software Engineer Intern", company: "TAO Digital Solutions", location: "Taipei, Taiwan", dates: "June 2024 – July 2024", description: ["Developed a working CQRS software architecture pattern with Java and SpringBoot and tested using Docker with a leadership election system to minimize server downtime", "Implemented event-driven micro-services and event sourcing using Kafka clusters managed by Zookeeper", "Created RESTful API endpoints for the client's (CDK Global) backend to access the data store using CQRS architecture"], logo: "./images/tao-logo.png" },
    { title: "Generative AI Programmer and Reviewer", company: "Remotasks", location: "Remote", dates: "Jan 2024 – June 2024", description: ["Assisted in the training of LLMs to provide accurate solutions to complex coding and math questions", "Utilized programming skills in Java, C++, SQL, and Python as well as multiple frontend frameworks", "Reviewed AI responses to coding problems and assisted in the correction and development of better responses"], logo: "./images/remotasks-logo.png" }
  ],
  projects: [
    { title: "Curio - Personalized Learning Management System", company: "React, TypeScript, Node.js, Express.js, MongoDB, Flask, Docker", location: "Personal Project", dates: "November 2024", description: ["Developed Curio, a personalized Learning Management System that empowers teachers to generate content matching students' interests", "Architected a Node.js/Express backend with MongoDB database that manages student profiles, teacher dashboards, and learning material distribution through RESTful APIs", "Engineered a containerized Python/Flask AI engine using Docker to automatically generate educational questions tailored to student interests"], logo: "https://placehold.co/64x64/333333/aaaaaa?text=C" },
    { title: "FastAPI Receipt Processing Pipeline", company: "FastAPI, HNSW Vector Search, Grafana", location: "Fetch Internship", dates: "Summer 2025", description: ["Refactored the hot-path matching endpoint into a configurable multi-stage search pipeline utilizing an HNSW vector index, geolocation search, and phone # lookup", "Enhanced system configurability with the capability to handle 100 requests / second", "Built a location-mapping application with FastAPI enabling rapid onboarding of partners and accelerating offer launch cycles"], logo: "https://placehold.co/64x64/333333/aaaaaa?text=FR" },
    { title: "Computer Vision Poker Analytics", company: "PyTorch, OpenCV, Pandas, NumPy", location: "sidebetz.ai", dates: "2024-2025", description: ["Leveraged and trained object detection and optical character recognition models with PyTorch", "Created an application capable of parsing thousands of hours of poker live-stream video for player actions and behaviors", "Implemented pattern recognition and data analysis to generate actionable insights for odds optimization"], logo: "https://placehold.co/64x64/333333/aaaaaa?text=CV" }
  ],
  leadership: [
    { title: "Team Captain", company: "We Love Pi Robotics Team", location: "Fremont, California", dates: "Aug 2018 – June 2023", description: ["Led a driven team of high-school engineers to regional and international robotics competitions", "Oversaw the design process from concept to product using CAD and 3D Printing—developed software using Java's object-oriented programming to allow the robot to move autonomously and using driver control", "Oversaw outreach efforts both domestically and internationally, spreading STEM to under-served and underrepresented communities (www.welovepi.org)"], logo: "https://placehold.co/64x64/ff6b6b/ffffff?text=🤖" }
  ],
  education: [
    { title: "Computer Sciences B.S. & Mathematics B.S.", company: "University of Wisconsin-Madison", location: "Madison, Wisconsin", dates: "Expected Graduation May 2026", description: ["Relevant Coursework: Operating Systems, Relational Databases, Big Data Systems, User Interfaces, Computer Networks, Information Security", "Double major in Computer Sciences and Mathematics", "Focus on backend systems, distributed computing, and machine learning applications"], logo: "./images/uw-logo.png" }
  ]
};

const blogPosts = [
    { id: 1, title: "Building Scalable APIs with FastAPI", date: "August 12, 2025", content: "During my internship at Fetch, I had the opportunity to work extensively with FastAPI to build high-performance backend services. Here's what I learned about architecting scalable receipt processing pipelines that can handle 100+ requests per second. The key insights include proper async/await usage, implementing efficient database queries, and leveraging HNSW vector indexing for similarity search. One of the most challenging aspects was optimizing the hot-path matching endpoint while maintaining configurability for different partner requirements." },
    { id: 2, title: "Computer Vision in Production: Lessons from Poker Analytics", date: "August 10, 2025", content: "Working on live-stream poker analysis at sidebetz.ai taught me valuable lessons about deploying computer vision models in production. PyTorch model optimization, handling variable video quality, and managing inference latency were crucial challenges. The project involved training custom OCR models to detect card values and player actions from thousands of hours of video data. Key learnings include the importance of data preprocessing, model versioning, and creating robust pipelines that can handle edge cases in real-world video feeds." },
    { id: 3, title: "From Microservices to Event Sourcing", date: "August 8, 2025", content: "My experience in Taiwan working with CQRS patterns and event-driven architecture fundamentally changed how I think about system design. Implementing Kafka clusters with Zookeeper for event sourcing taught me about the complexities of distributed systems. The separation of read and write workloads through CQRS not only improved performance but also provided better scalability patterns. Docker containerization and proper service orchestration became essential skills for managing the complexity of microservices architectures." },
];

const conversations = {
    tech: { name: "Tech Stack", avatar: "💻", avatarColor: '#5856d6', messages: [ { sender: 'me', text: 'What technologies are you most excited about right now?' }, { sender: 'contact', text: 'Definitely FastAPI for backend development and Golang for concurrency. Also diving deep into distributed systems with Kafka and event sourcing patterns.' } ] },
    projects: { name: "Projects", avatar: "🚀", avatarColor: '#ff9500', messages: [ { sender: 'me', text: 'Tell me about your coolest project lately' }, { sender: 'contact', text: 'I built a computer vision system that analyzes poker livestreams! It uses PyTorch for OCR and can process thousands of hours of video to extract player behavior patterns.' } ] },
    goals: { name: "Goals", avatar: "🎯", avatarColor: '#34c759', messages: [ { sender: 'me', text: 'What are you working towards?' }, { sender: 'contact', text: 'Finishing my CS/Math double major at UW-Madison and growing Piles into a platform people actually love using. Also want to get better at system design and distributed computing.' } ] }
};

// --- COMPONENTS ---

// Desktop Spotify Widget Component (EXACT copy from reference)
const DesktopSpotifyWidget = () => {
    return (
        <div className="desktop-spotify-widget">
            <div className="window-title-bar">
                <div className="window-controls">
                    <div className="window-dot red"><span>×</span></div>
                    <div className="window-dot yellow"></div>
                    <div className="window-dot green"></div>
                </div>
                <div className="window-title"></div>
                <div style={{width: '58px'}}></div>
            </div>
            <div className="spotify-content">
                <div className="spotify-header">
                    <div className="spotify-logo">♫</div>
                    <span>otw back from sf • shrey</span>
                </div>
                <div className="spotify-track">
                    <div className="track-info">
                        <div className="track-title">Navajo</div>
                        <div className="track-artist">Masego</div>
                    </div>
                    <div className="spotify-controls">
                        <button className="control-btn">⏮</button>
                        <button className="control-btn play-btn">▶</button>
                        <button className="control-btn">⏭</button>
                    </div>
                </div>
                <div className="spotify-link">
                    <a href="https://open.spotify.com/playlist/5mypPIA8Gp9DHI7VIXGkq7?si=655ae9f702ca4c8c" target="_blank" rel="noopener noreferrer">
                        Open in Spotify
                    </a>
                </div>
            </div>
        </div>
    );
};

// Reusable Modal Component
const MacOSModal = ({ children, title, onClose, onGreenButtonClick, isFullScreen }) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className={`modal-window ${isFullScreen ? 'fullscreen' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="window-title-bar">
                <div className="window-controls">
                    <div className="window-dot red" onClick={onClose}><span>×</span></div>
                    <div className="window-dot yellow"></div>
                    <div className="window-dot green" onClick={onGreenButtonClick}></div>
                </div>
                <div className="window-title">{title}</div>
                <div style={{width: '58px'}}></div>
            </div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>
);

// Liquid Glass Spotify Display
const SpotifyDisplay = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    
    // Real songs from your "otw back from sf" playlist
    const playlist = [
        { title: "Dreams, Fairytales, Fantasies", artist: "A$AP Ferg, Brent Faiyaz", duration: "3:43" },
        { title: "DEAD MAN WALKING", artist: "Brent Faiyaz", duration: "4:07" },
        { title: "Good Days", artist: "SZA", duration: "4:38" },
        { title: "C U Girl", artist: "Steve Lacy", duration: "2:10" },
        { title: "HONEST", artist: "Baby Keem", duration: "2:53" },
        { title: "lost souls", artist: "Baby Keem, Brent Faiyaz", duration: "4:30" },
        { title: "Teenage Fever", artist: "Drake", duration: "3:40" },
        { title: "Navajo", artist: "Masego", duration: "3:14" }
    ];

    useEffect(() => {
        // Auto-cycle through songs every 15 seconds when playing
        if (isPlaying && playlist.length > 0) {
            const songTimer = setInterval(() => {
                setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
            }, 15000);
            return () => clearInterval(songTimer);
        }
    }, [isPlaying, playlist.length]);

    const togglePlay = () => setIsPlaying(!isPlaying);
    
    const nextSong = () => {
        setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    };
    
    const prevSong = () => {
        setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    };

    const openInSpotify = () => {
        window.open('https://open.spotify.com/playlist/5mypPIA8Gp9DHI7VIXGkq7?si=655ae9f702ca4c8c', '_blank');
    };

    const currentSong = playlist[currentSongIndex];

    return (
        <div className="spotify-glass-display">
            <div className="spotify-header-glass">
                <div className="spotify-icon">🎵</div>
                <div className="currently-playing">
                    otw back from sf • shrey
                </div>
            </div>
            
            <div className="spotify-main-content">
                <div className="song-info-left">
                    <div className="song-title-glass">{currentSong.title}</div>
                    <div className="artist-glass">{currentSong.artist}</div>
                </div>
                
                <div className="controls-right">
                    <button className="control-btn-glass" onClick={prevSong}>⏮</button>
                    <button className="play-btn-glass" onClick={togglePlay}>
                        {isPlaying ? '⏸' : '▶'}
                    </button>
                    <button className="control-btn-glass" onClick={nextSong}>⏭</button>
                </div>
            </div>
            
            <button className="open-spotify-btn" onClick={openInSpotify}>
                Open in Spotify
            </button>
        </div>
    );
};

// Professional Section Component
const Professional = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [activeCategory, setActiveCategory] = useState('professional');
    const [searchText, setSearchText] = useState("");
    const [loaded, setLoaded] = useState(false);
    const fullSearchText = "my experience";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setSearchText(fullSearchText.substring(0, i + 1));
            i++;
            if (i > fullSearchText.length) {
                clearInterval(typingInterval);
                setTimeout(() => setLoaded(true), 100);
            }
        }, 150);
        return () => clearInterval(typingInterval);
    }, []);

    const renderExperience = (exp, index) => (
        <div key={index} className="experience-entry" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="experience-details">
                <a href="#" className="experience-title" onClick={(e) => { e.preventDefault(); setSelectedExperience(exp); }}>{exp.title}</a>
                <p className="experience-source">{exp.company} — {exp.location}</p>
                <p className="experience-snippet">{exp.description[0]}...</p>
            </div>
            {(activeCategory === 'professional' || activeCategory === 'education') && (
                <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
            )}
        </div>
    );

    return (
        <div className="window-content">
            <div className="search-engine-header">
                <h1 className="search-engine-title">SHREY Search</h1>
                <div className="search-bar">{searchText}</div>
            </div>
            {loaded && (
                <div style={{animation: 'fadeIn 0.5s forwards', opacity: 0}}>
                    <div className="experience-sub-tabs">
                        {Object.keys(experiencesData).map(key => (
                            <div 
                                key={key} 
                                className={`experience-sub-tab ${activeCategory === key ? 'active' : ''}`}
                                onClick={() => setActiveCategory(key)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </div>
                        ))}
                    </div>
                    <div>
                        {experiencesData[activeCategory].map(renderExperience)}
                    </div>
                </div>
            )}

            {selectedExperience && (
                <MacOSModal title={selectedExperience.company} onClose={() => setSelectedExperience(null)}>
                    <h2>{selectedExperience.title}</h2>
                    <p><strong>{selectedExperience.company}</strong> | {selectedExperience.location}</p>
                    <p><em>{selectedExperience.dates}</em></p>
                    <ul>{selectedExperience.description.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </MacOSModal>
            )}
        </div>
    );
};

// Thoughts Section Component
const Thoughts = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleSelectPost = (post) => {
        setSelectedPost(post);
        setIsFullScreen(false);
    };

    const handleClosePost = () => {
        setSelectedPost(null);
    };

    const toggleFullScreen = () => {
        setIsFullScreen(prev => !prev);
    };

    return (
        <div className="window-content">
            <div className="thoughts-container">
                {blogPosts.map(post => (
                     <div key={post.id} className="thought-post" onClick={() => handleSelectPost(post)}>
                        <h3>{post.title}</h3>
                        <em>{post.date}</em>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <MacOSModal 
                    title={selectedPost.title} 
                    onClose={handleClosePost}
                    onGreenButtonClick={toggleFullScreen}
                    isFullScreen={isFullScreen}
                >
                     <h2>{selectedPost.title}</h2>
                     <p><em>{selectedPost.date}</em></p>
                     <p style={{whiteSpace: 'pre-wrap', lineHeight: '1.7'}}>{selectedPost.content}</p>
                </MacOSModal>
            )}
        </div>
    );
}

// Main Window App Component
const MainWindowApp = () => {
    const [activeTab, setActiveTab] = useState('thoughts');  // Changed default to 'thoughts'
    
    const renderContent = () => {
        switch (activeTab) {
            case 'professional': return <Professional />;
            case 'thoughts': return <Thoughts />;
            default: return <Thoughts />;  // Changed default to Thoughts
        }
    };
    
    return (
        <div className="main-window">
            <div className="window-title-bar">
                <div className="window-controls">
                    <div className="window-dot red"><span>×</span></div>
                    <div className="window-dot yellow"></div>
                    <div className="window-dot green"></div>
                </div>
                <div className="window-title">Portfolio.app</div>
                <div style={{width: '58px'}}></div>
            </div>
            <div className="tabs">
                <div className={`tab ${activeTab === 'thoughts' ? 'active' : ''}`} onClick={() => setActiveTab('thoughts')}>Blog</div>
                <div className={`tab ${activeTab === 'professional' ? 'active' : ''}`} onClick={() => setActiveTab('professional')}>About Me</div>
            </div>
            {renderContent()}
        </div>
    );
};

// Chat View Component
const ChatView = ({ contactId, onBack }) => {
    const contact = conversations[contactId];
    const [displayedMessages, setDisplayedMessages] = useState([]);
    const [finalMessageText, setFinalMessageText] = useState("");

    useEffect(() => {
        setDisplayedMessages(contact.messages.slice(0, -1));
        setFinalMessageText("");
        
        let typingInterval;
        const typingTimeout = setTimeout(() => {
            const finalMessage = contact.messages[contact.messages.length - 1];
            let i = 0;
            const text = finalMessage.text;
            
            typingInterval = setInterval(() => {
                i++;
                setFinalMessageText(text.substring(0, i));
                
                if (i >= text.length) {
                    clearInterval(typingInterval);
                    setDisplayedMessages(prev => [...prev, finalMessage]);
                    setFinalMessageText("");
                }
            }, 50);
        }, 1000);

        return () => {
            clearTimeout(typingTimeout);
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [contactId]);

    return (
        <div className="chat-view">
            <div className="chat-header">
                <div className="back-button" onClick={onBack}>&lt; Messages</div>
                <div className="chat-contact-name">{contact.name}</div>
            </div>
            <div className="message-area">
                {displayedMessages.map((msg, i) => (
                    <div key={i} className={`message ${msg.sender === 'me' ? 'outgoing' : 'incoming'}`}>{msg.text}</div>
                ))}
                {finalMessageText && <div className="message incoming">{finalMessageText}</div>}
            </div>
        </div>
    );
};

// Inbox View Component
const InboxView = ({ onContactClick }) => (
    <>
        <div className="inbox-header"><h1>Messages</h1></div>
        <div className="contact-list">
            {Object.keys(conversations).map(id => {
                const contact = conversations[id];
                return (
                    <div key={id} className="contact" onClick={() => onContactClick(id)}>
                        <div className="contact-avatar" style={{ backgroundColor: contact.avatarColor }}>{contact.avatar}</div>
                        <div className="contact-details">
                            <div className="contact-name">
                                <span>{contact.name}</span>
                                <span>Just now &gt;</span>
                            </div>
                            <div className="contact-preview">{contact.messages[0].text}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    </>
);

// Phone App Component
const PhoneApp = () => {
    const [activeView, setActiveView] = useState('inbox');
    const [selectedContact, setSelectedContact] = useState(null);
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const handleContactClick = (contactId) => {
        setSelectedContact(contactId);
        setActiveView('chat');
    };

    const handleBackToInbox = () => {
        setActiveView('inbox');
        setSelectedContact(null);
    };

    return (
        <div className="phone">
            <div className="phone-notch"></div>
            <div className="screen">
                <div className="status-bar">
                    <span>{time}</span>
                    <div className="status-bar-icons">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                            <line x1="12" y1="20" x2="12.01" y2="20"></line>
                        </svg>
                    </div>
                </div>
                {activeView === 'inbox' ? (
                    <InboxView onContactClick={handleContactClick} />
                ) : (
                    <ChatView contactId={selectedContact} onBack={handleBackToInbox} />
                )}
                {activeView === 'inbox' && <div className="home-indicator"></div>}
            </div>
        </div>
    );
};

// Root Component
const PortfolioOS = () => {
    useEffect(() => {
        const timeEl = document.getElementById('top-time');
        const updateTime = () => {
            const now = new Date();
            timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };
        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <StrictMode>
            <div className="top-bar">
                <div className="top-bar-left">
                    <div className="logo">Shrey's Portfolio</div>
                    <div className="menu-items">
                        <div className="menu-item">File</div>
                        <div className="menu-item">Edit</div>
                        <div className="menu-item">View</div>
                    </div>
                </div>
                <div className="notch">
                    <span></span>
                </div>
                <div className="top-bar-right">
                    <span id="top-time">--:--</span>
                </div>
            </div>
            
            <div className="desktop">
                <div className="left-panel">
                    <DesktopSpotifyWidget />
                    <div className="phone-container">
                        <PhoneApp />
                    </div>
                </div>
                
                <div className="right-panel">
                    <MainWindowApp />
                </div>
            </div>
            
            <div className="taskbar">
                <div className="taskbar-content">
                     <a href="https://github.com/shreyk2" target="_blank" className="taskbar-link">GitHub</a>
                     <a href="https://www.linkedin.com/in/shrey-katyal" target="_blank" className="taskbar-link">LinkedIn</a>
                     <a href="mailto:shreykatyal21@gmail.com" className="taskbar-link">Email Me</a>
                </div>
            </div>

            <div className="mobile-blocker">
                <h2>Desktop Recommended</h2>
                <p>For the best viewing experience, please visit this page from a desktop computer.</p>
            </div>
        </StrictMode>
    );
};

// Render the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<PortfolioOS />);
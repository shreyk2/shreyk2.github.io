// Spotify Configuration
const SPOTIFY_CONFIG = {
  CLIENT_ID: 'your_client_id_here',
  CLIENT_SECRET: 'your_client_secret_here',
  PLAYLIST_ID: '5mypPIA8Gp9DHI7VIXGkq7' // Extracted from your Spotify URL
};

const { useState, useEffect, StrictMode } = React;

// Device Detection Hook
const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('desktop');
    
    useEffect(() => {
        const updateDeviceType = () => {
            const width = window.innerWidth;
            if (width <= 768) setDeviceType('mobile');
            else if (width <= 1024) setDeviceType('tablet');
            else if (width <= 1200) setDeviceType('small-desktop');
            else setDeviceType('desktop');
        };
        
        updateDeviceType();
        window.addEventListener('resize', updateDeviceType);
        return () => window.removeEventListener('resize', updateDeviceType);
    }, []);
    
    return deviceType;
};

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
    { id: 1, title: "FastAPI: The Perfect Tool for Rapid Prototyping and Development", date: "August 12, 2025", preview: "Why FastAPI became my go-to choice for building production systems at Fetch, and how it enabled rapid development without sacrificing quality.", file: "fastapi-rapid-prototyping.txt" },
    { id: 2, title: "Computer Vision in Production: Lessons from Poker Analytics", date: "August 10, 2025", preview: "Working on live-stream poker analysis at sidebetz.ai taught me valuable lessons about deploying computer vision models in production.", file: "computer-vision-production.txt" },
    { id: 3, title: "From Microservices to Event Sourcing", date: "August 8, 2025", preview: "My experience in Taiwan working with CQRS patterns and event-driven architecture fundamentally changed how I think about system design.", file: "microservices-event-sourcing.txt" },
];

const conversations = {
    tech: { name: "Tech Stack", avatar: "💻", avatarColor: '#5856d6', messages: [ { sender: 'me', text: 'What technologies are you most excited about right now?' }, { sender: 'contact', text: 'Definitely FastAPI for backend development and Golang for concurrency. Also diving deep into distributed systems with Kafka and event sourcing patterns.' } ] },
    projects: { name: "Projects", avatar: "🚀", avatarColor: '#ff9500', messages: [ { sender: 'me', text: 'Tell me about your coolest project lately' }, { sender: 'contact', text: 'I built a computer vision system that analyzes poker livestreams! It uses PyTorch for OCR and can process thousands of hours of video to extract player behavior patterns.' } ] },
    goals: { name: "Goals", avatar: "🎯", avatarColor: '#34c759', messages: [ { sender: 'me', text: 'What are you working towards?' }, { sender: 'contact', text: 'Finishing my CS/Math double major at UW-Madison and growing Piles into a platform people actually love using. Also want to get better at system design and distributed computing.' } ] }
};

// --- COMPONENTS ---

// Onboarding Tooltip Component
const OnboardingTooltip = ({ tip, onNext, onSkip, isLast }) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [targetRect, setTargetRect] = useState(null);
    
    useEffect(() => {
        const targetElement = document.querySelector(tip.target);
        if (targetElement) {
            // Add CSS class to force element to top
            targetElement.classList.add('onboarding-target-highlight');
            
            const rect = targetElement.getBoundingClientRect();
            setTargetRect({
                top: rect.top - 8,
                left: rect.left - 8,
                width: rect.width + 16,
                height: rect.height + 16
            });
            
            let top = rect.bottom + 10;
            let left = rect.left;
            
            // Position adjustments based on tip.position
            if (tip.position === 'bottom-left') {
                left = rect.right - 200; // Tooltip width
            } else if (tip.position === 'bottom') {
                left = rect.left + (rect.width / 2) - 100; // Center
            }
            
            setPosition({ top, left });
        }
        
        // Cleanup function to remove class
        return () => {
            const targetElement = document.querySelector(tip.target);
            if (targetElement) {
                targetElement.classList.remove('onboarding-target-highlight');
            }
        };
    }, [tip]);
    
    return (
        <>
            <div className="onboarding-overlay">
                {/* Clickable area for skipping */}
                <div className="overlay-background" onClick={onSkip} />
            </div>
            
            {/* Highlighted element area - on top of overlay */}
            {targetRect && (
                <div 
                    className="highlighted-element"
                    style={{
                        position: 'fixed',
                        top: `${targetRect.top}px`,
                        left: `${targetRect.left}px`,
                        width: `${targetRect.width}px`,
                        height: `${targetRect.height}px`,
                        borderRadius: '8px',
                        border: '2px solid var(--accent-color)',
                        background: 'transparent',
                        pointerEvents: 'none',
                        zIndex: 10001,
                        boxShadow: '0 0 0 4px rgba(0, 145, 255, 0.2), 0 0 20px rgba(0, 145, 255, 0.3)'
                    }}
                />
            )}
            
            <div 
                className="onboarding-tooltip"
                style={{
                    position: 'fixed',
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    zIndex: 10002
                }}
            >
                <div className="tooltip-arrow"></div>
                <div className="tooltip-content">
                    <h3>{tip.title}</h3>
                    <p>{tip.description}</p>
                    <div className="tooltip-actions">
                        <button className="tooltip-btn secondary" onClick={onSkip}>Skip Tour</button>
                        <button className="tooltip-btn primary" onClick={onNext}>
                            {isLast ? 'Got it!' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

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

// Enhanced Spotify Display with Full Album Art
const SpotifyDisplay = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [dominantColor, setDominantColor] = useState('#2d1b42');
    
    // Real songs from your "otw back from sf" playlist with album art
    const playlist = [
        { 
            title: "Navajo", 
            artist: "Masego", 
            duration: "3:14",
            albumArt: "./images/navajo.jpg",
            progress: 0.4
        },
        { 
            title: "Dreams, Fairytales, Fantasies", 
            artist: "A$AP Ferg, Brent Faiyaz", 
            duration: "3:43",
            albumArt: "./images/dreams-fairytales-fantasies.jpg",
            progress: 0
        },
        { 
            title: "DEAD MAN WALKING", 
            artist: "Brent Faiyaz", 
            duration: "4:07",
            albumArt: "./images/dead-man-walking.jpg",
            progress: 0
        },
        { 
            title: "Good Days", 
            artist: "SZA", 
            duration: "4:38",
            albumArt: "./images/good-days.jpg",
            progress: 0
        },
        { 
            title: "C U Girl", 
            artist: "Steve Lacy", 
            duration: "2:10",
            albumArt: "./images/c-u-girl.jpg",
            progress: 0
        },
        { 
            title: "HONEST", 
            artist: "Baby Keem", 
            duration: "2:53",
            albumArt: "./images/honest.jpg",
            progress: 0
        },
        { 
            title: "lost souls", 
            artist: "Baby Keem, Brent Faiyaz", 
            duration: "4:30",
            albumArt: "./images/lost-souls.jpg",
            progress: 0
        },
        { 
            title: "Teenage Fever", 
            artist: "Drake", 
            duration: "3:40",
            albumArt: "./images/teenage-fever.jpg",
            progress: 0
        }
    ];

    // Extract dominant color from image
    const extractDominantColor = (imageSrc) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                canvas.width = img.width;
                canvas.height = img.height;
                
                ctx.drawImage(img, 0, 0);
                
                try {
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;
                    
                    const colorCounts = {};
                    
                    // Sample every 10th pixel for performance
                    for (let i = 0; i < data.length; i += 40) {
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        
                        // Skip very light or very dark colors
                        const brightness = (r + g + b) / 3;
                        if (brightness > 30 && brightness < 220) {
                            // Round to reduce similar colors
                            const roundedR = Math.round(r / 20) * 20;
                            const roundedG = Math.round(g / 20) * 20;
                            const roundedB = Math.round(b / 20) * 20;
                            
                            const color = `${roundedR},${roundedG},${roundedB}`;
                            colorCounts[color] = (colorCounts[color] || 0) + 1;
                        }
                    }
                    
                    // Find most common color
                    let maxCount = 0;
                    let dominantColor = '45,27,66'; // fallback
                    
                    Object.entries(colorCounts).forEach(([color, count]) => {
                        if (count > maxCount) {
                            maxCount = count;
                            dominantColor = color;
                        }
                    });
                    
                    // Convert to darker shade for background
                    const [r, g, b] = dominantColor.split(',').map(Number);
                    const darkerR = Math.max(0, Math.round(r * 0.6));
                    const darkerG = Math.max(0, Math.round(g * 0.6));
                    const darkerB = Math.max(0, Math.round(b * 0.6));
                    
                    resolve(`rgb(${darkerR}, ${darkerG}, ${darkerB})`);
                } catch (error) {
                    resolve('#2d1b42'); // fallback color
                }
            };
            
            img.onerror = () => resolve('#2d1b42');
            img.src = imageSrc;
        });
    };

    useEffect(() => {
        // Extract color when song changes
        const currentSong = playlist[currentSongIndex];
        extractDominantColor(currentSong.albumArt).then(color => {
            setDominantColor(color);
        });
    }, [currentSongIndex]);

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
    
    // Format time from progress
    const formatTime = (progress, duration) => {
        const totalSeconds = parseInt(duration.split(':')[0]) * 60 + parseInt(duration.split(':')[1]);
        const currentSeconds = Math.floor(totalSeconds * progress);
        const mins = Math.floor(currentSeconds / 60);
        const secs = currentSeconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Always show fullscreen player
    return (
        <div 
            className="spotify-fullscreen-player"
            style={{
                background: `linear-gradient(135deg, ${dominantColor} 0%, #1a1a2e 100%)`,
                transition: 'background 1s ease'
            }}
        >
            <div className="spotify-fullscreen-header">
                <div className="spotify-source">
                    <span>otw back from sf • shrey</span>
                </div>
                <button className="spotify-menu-btn">⋯</button>
            </div>
            
            <div className="spotify-album-container">
                <div className="clean-frame">
                    <img 
                        src={currentSong.albumArt} 
                        alt={`${currentSong.title} album art`}
                        className="spotify-album-art"
                    />
                </div>
            </div>
            
            <div className="spotify-track-info">
                <h1 className="spotify-track-title">{currentSong.title}</h1>
                <p className="spotify-track-artist">{currentSong.artist}</p>
                
                {/* Combined Progress + Controls in ONE Modal */}
                <div className="spotify-progress-container">
                    <span className="spotify-time-current">{formatTime(currentSong.progress, currentSong.duration)}</span>
                    <div className="spotify-progress-bar">
                        <div 
                            className="spotify-progress-fill"
                            style={{ width: `${currentSong.progress * 100}%` }}
                        ></div>
                        <div className="spotify-progress-handle"></div>
                    </div>
                    <span className="spotify-time-total">-{currentSong.duration}</span>
                </div>
                
                <div className="spotify-controls-row">
                    <button className="spotify-play-btn-large" onClick={prevSong}>
                        <img src="./images/backward.png" alt="Previous" className="control-icon" />
                    </button>
                    <button className="spotify-play-btn-large" onClick={togglePlay}>
                        <img 
                            src={isPlaying ? "./images/pause.png" : "./images/resume.png"} 
                            alt={isPlaying ? "Pause" : "Play"} 
                            className="play-icon" 
                        />
                    </button>
                    <button className="spotify-play-btn-large" onClick={nextSong}>
                        <img src="./images/forward.png" alt="Next" className="control-icon" />
                    </button>
                </div>
            </div>
            
            <button className="spotify-open-link" onClick={openInSpotify}>
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

// Simple markdown parser
const parseMarkdown = (text) => {
    return text
        // Headers
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code inline
        .replace(/`(.*?)`/g, '<code>$1</code>')
        // Links
        .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Line breaks
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
};

// Thoughts Section Component
const Thoughts = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [blogContent, setBlogContent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSelectPost = async (post) => {
        setSelectedPost(post);
        setIsFullScreen(false);
        setLoading(true);
        
        try {
            const response = await fetch(`./blog-posts/${post.file}`);
            const content = await response.text();
            const parsedContent = parseMarkdown(content);
            setBlogContent(parsedContent);
        } catch (error) {
            setBlogContent('Error loading blog post content.');
        }
        setLoading(false);
    };

    const handleClosePost = () => {
        setSelectedPost(null);
        setBlogContent('');
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
                        <p>{post.preview}</p>
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
                     {loading ? (
                         <p>Loading...</p>
                     ) : (
                         <div 
                             style={{lineHeight: '1.7'}} 
                             dangerouslySetInnerHTML={{__html: `<p>${blogContent}</p>`}}
                         />
                     )}
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
                <div className={`tab ${activeTab === 'professional' ? 'active' : ''}`} data-tab="professional" onClick={() => setActiveTab('professional')}>About Me</div>
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
                    <span></span>
                    <div className="status-bar-icons">
                        {/* Removed WiFi icon */}
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

// Mobile/Tablet App Components
// Mobile Professional Component (iOS Style)
const MobileProfessional = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [activeCategory, setActiveCategory] = useState('professional');
    
    const renderExperience = (exp, index) => (
        <div key={index} className="mobile-experience-card" onClick={() => setSelectedExperience(exp)}>
            <div className="mobile-exp-content">
                <div className="mobile-exp-header">
                    <h3 className="mobile-exp-title">{exp.title}</h3>
                    <span className="mobile-exp-dates">{exp.dates}</span>
                </div>
                <p className="mobile-exp-company">{exp.company}</p>
                <p className="mobile-exp-snippet">{exp.description[0].substring(0, 120)}...</p>
            </div>
            {(activeCategory === 'professional' || activeCategory === 'education') && (
                <img src={exp.logo} alt={`${exp.company} logo`} className="mobile-exp-logo" />
            )}
        </div>
    );
    
    return (
        <div className="mobile-professional">
            <div className="mobile-header">
                <h1>Shrey Katyal</h1>
                <p>CS + Math @ UW-Madison</p>
            </div>
            
            <div className="mobile-category-tabs">
                {Object.keys(experiencesData).map(key => (
                    <button 
                        key={key} 
                        className={`mobile-category-tab ${activeCategory === key ? 'active' : ''}`}
                        onClick={() => setActiveCategory(key)}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </div>
            
            <div className="mobile-experience-list">
                {experiencesData[activeCategory].map(renderExperience)}
            </div>
            
            {selectedExperience && (
                <div className="mobile-modal-overlay" onClick={() => setSelectedExperience(null)}>
                    <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-modal-header">
                            <h2>{selectedExperience.title}</h2>
                            <button onClick={() => setSelectedExperience(null)}>✕</button>
                        </div>
                        <div className="mobile-modal-content">
                            <p><strong>{selectedExperience.company}</strong> | {selectedExperience.location}</p>
                            <p><em>{selectedExperience.dates}</em></p>
                            <ul>{selectedExperience.description.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Mobile Thoughts Component (iOS Style)
// Mobile Blog Post Component for full-page content
const MobileBlogPost = ({ post, onBack }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (post?.content) {
            setContent(parseMarkdown(post.content));
            setLoading(false);
        } else if (post?.file) {
            // Load from file if not already loaded
            fetch(`./blog-posts/${post.file}`)
                .then(response => response.text())
                .then(text => {
                    setContent(parseMarkdown(text));
                    setLoading(false);
                })
                .catch(() => {
                    setContent('Error loading blog post content.');
                    setLoading(false);
                });
        }
    }, [post]);
    
    if (loading) {
        return (
            <div className="mobile-blog-post-loading">
                <div className="loading-spinner"></div>
                <p>Loading article...</p>
            </div>
        );
    }
    
    return (
        <div className="mobile-blog-post">
            <div className="mobile-blog-post-header">
                <h1>{post.title}</h1>
                <p className="blog-post-date">{post.date}</p>
            </div>
            <div 
                className="mobile-blog-post-content"
                dangerouslySetInnerHTML={{__html: `<p>${content}</p>`}}
            />
        </div>
    );
};

const MobileThoughts = ({ onPostClick }) => {
    const [activeTab, setActiveTab] = useState('thoughts');
    
    const renderContent = () => {
        switch (activeTab) {
            case 'professional': return <MobileProfessional />;
            case 'thoughts':
            default:
                return (
                    <div className="mobile-blog-list">
                        {blogPosts.map(post => (
                            <div key={post.id} className="mobile-blog-card" onClick={() => onPostClick(post)}>
                                <div className="mobile-blog-content">
                                    <h3 className="mobile-blog-title">{post.title}</h3>
                                    <p className="mobile-blog-date">{post.date}</p>
                                    <p className="mobile-blog-preview">{post.preview}</p>
                                </div>
                                <div className="mobile-blog-arrow">›</div>
                            </div>
                        ))}
                    </div>
                );
        }
    };
    
    return (
        <div className="mobile-thoughts">
            {/* Conditional header - only show on Blog tab */}
            {activeTab === 'thoughts' && (
                <div className="mobile-header">
                    <h1>Latest Posts</h1>
                    <p>Thoughts on tech, startups, and life</p>
                </div>
            )}
            
            {/* Tab Navigation - moves to top on About Me */}
            <div className={`mobile-tab-navigation ${activeTab === 'professional' ? 'top-position' : ''}`}>
                <button 
                    className={`mobile-nav-tab ${activeTab === 'thoughts' ? 'active' : ''}`}
                    onClick={() => setActiveTab('thoughts')}
                >
                    Blog
                </button>
                <button 
                    className={`mobile-nav-tab ${activeTab === 'professional' ? 'active' : ''}`}
                    onClick={() => setActiveTab('professional')}
                >
                    About Me
                </button>
            </div>
            
            {renderContent()}
        </div>
    );
};

// Mobile Safari Browser App Component
const MobileSafariApp = ({ isActive, onClose }) => {
    const [activeTab, setActiveTab] = useState('thoughts');
    const [viewStack, setViewStack] = useState([{ type: 'main', tab: 'thoughts' }]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);
    const [blogContent, setBlogContent] = useState('');
    
    const navigateBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            const previousView = viewStack[currentIndex - 1];
            if (previousView.type === 'main') {
                setActiveTab(previousView.tab);
                setSelectedPost(null);
            } else if (previousView.type === 'post') {
                setSelectedPost(previousView.post);
            }
        }
    };
    
    const navigateForward = () => {
        if (currentIndex < viewStack.length - 1) {
            setCurrentIndex(currentIndex + 1);
            const nextView = viewStack[currentIndex + 1];
            if (nextView.type === 'main') {
                setActiveTab(nextView.tab);
                setSelectedPost(null);
            } else if (nextView.type === 'post') {
                setSelectedPost(nextView.post);
            }
        }
    };
    
    const handleTabChange = (tab) => {
        const newView = { type: 'main', tab };
        const newStack = viewStack.slice(0, currentIndex + 1);
        newStack.push(newView);
        setViewStack(newStack);
        setCurrentIndex(newStack.length - 1);
        setActiveTab(tab);
        setSelectedPost(null);
    };
    
    const handlePostClick = async (post) => {
        // Load blog content
        try {
            const response = await fetch(`./blog-posts/${post.file}`);
            const content = await response.text();
            const postWithContent = { ...post, content };
            
            const newView = { type: 'post', post: postWithContent };
            const newStack = viewStack.slice(0, currentIndex + 1);
            newStack.push(newView);
            setViewStack(newStack);
            setCurrentIndex(newStack.length - 1);
            setSelectedPost(postWithContent);
            setBlogContent(parseMarkdown(content));
        } catch (error) {
            console.error('Error loading blog post:', error);
            setBlogContent('Error loading blog post content.');
        }
    };
    
    const renderSafariContent = () => {
        if (selectedPost) {
            return (
                <div className="mobile-blog-post">
                    <div className="mobile-blog-post-header">
                        <h1>{selectedPost.title}</h1>
                        <p className="blog-post-date">{selectedPost.date}</p>
                    </div>
                    <div 
                        className="mobile-blog-post-content"
                        dangerouslySetInnerHTML={{__html: `<p>${blogContent}</p>`}}
                    />
                </div>
            );
        }
        
        switch (activeTab) {
            case 'professional': return <MobileProfessional />;
            case 'thoughts': return <MobileThoughts onPostClick={handlePostClick} />;
            default: return <MobileThoughts onPostClick={handlePostClick} />;
        }
    };
    
    return (
        <div className={`mobile-app safari-app ${isActive ? 'active' : ''}`}>
            {/* Safari Content Area */}
            <div className="safari-content-area">
                {renderSafariContent()}
            </div>
            
            {/* Safari Floating Bottom UI */}
            <div className="safari-bottom-ui">
                {/* Safari floating controls */}
                <div className="safari-floating-controls">
                    <button 
                        className={`safari-nav-btn back ${currentIndex === 0 ? 'disabled' : ''}`}
                        onClick={navigateBack}
                        disabled={currentIndex === 0}
                    >
                        ‹
                    </button>
                    <button 
                        className={`safari-nav-btn forward ${currentIndex === viewStack.length - 1 ? 'disabled' : ''}`}
                        onClick={navigateForward}
                        disabled={currentIndex === viewStack.length - 1}
                    >
                        ›
                    </button>
                    <div className="safari-address-bar">
                        <div className="address-bar-content">
                            <span className="address-icon">🔒</span>
                            <span className="address-text">portfolio.app</span>
                        </div>
                    </div>
                    <button className="safari-nav-btn tabs">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="3" y="3" width="7" height="7" rx="1"/>
                            <rect x="14" y="3" width="7" height="7" rx="1"/>
                            <rect x="3" y="14" width="7" height="7" rx="1"/>
                            <rect x="14" y="14" width="7" height="7" rx="1"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const MobileSpotifyApp = ({ isActive, onClose }) => {
    return (
        <div className={`mobile-app ${isActive ? 'active' : ''}`}>
            <div className="mobile-app-content spotify-fullscreen">
                <SpotifyDisplay />
            </div>
        </div>
    );
};

const MobileMessagesApp = ({ isActive, onClose }) => {
    return (
        <div className={`mobile-app ${isActive ? 'active' : ''}`}>
            <div className="mobile-app-content">
                <PhoneApp />
            </div>
        </div>
    );
};

// Mobile/Tablet Layout Component
const MobileLayout = ({ deviceType }) => {
    const [activeApp, setActiveApp] = useState('browser'); // Start with browser open
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000);
        return () => clearInterval(timer);
    }, []);
    
    const switchApp = (appName) => {
        setActiveApp(appName);
    };
    
    const closeApp = () => {
        setActiveApp('browser'); // Default back to browser
    };
    
    const isTablet = deviceType === 'tablet';
    
    return (
        <div className="mobile-layout">
            {/* Status Bar */}
            <div className="mobile-status-bar">
                <span>{time}</span>
                <div className="mobile-status-icons">
                    <div className="signal-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar active"></div>
                    </div>
                    <div className="wifi-icon">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                            <path d="M8 0C3.6 0 0 2.6 0 6c0 0.3 0.1 0.6 0.2 0.8l1.5-1.5c-0.1-0.1-0.2-0.2-0.2-0.3 0-2.2 2.7-4 6-4s6 1.8 6 4c0 0.1-0.1 0.2-0.2 0.3l1.5 1.5c0.1-0.2 0.2-0.5 0.2-0.8C16 2.6 12.4 0 8 0z"/>
                            <path d="M8 3c-2.2 0-4 1.3-4 3 0 0.2 0.1 0.4 0.2 0.6l1.5-1.5c0-0.1-0.1-0.1-0.1-0.1 0-1.1 1.3-2 3-2s3 0.9 3 2c0 0 0 0.1-0.1 0.1l1.5 1.5c0.1-0.2 0.2-0.4 0.2-0.6C12 4.3 10.2 3 8 3z"/>
                            <circle cx="8" cy="9" r="1"/>
                        </svg>
                    </div>
                    <div className="battery-icon">
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="currentColor">
                            <rect x="1" y="2" width="20" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
                            <rect x="3" y="4" width="16" height="4" rx="1" fill="currentColor"/>
                            <rect x="22" y="4" width="1" height="4" rx="0.5" fill="currentColor"/>
                        </svg>
                        <span className="battery-percent">57</span>
                    </div>
                </div>
            </div>
            
            {/* Notch */}
            <div className="mobile-notch"></div>
            
            {/* Content Area */}
            <div className="mobile-content">
                <MobileSafariApp isActive={activeApp === 'browser'} onClose={closeApp} />
                <MobileSpotifyApp isActive={activeApp === 'spotify'} onClose={closeApp} />
                <MobileMessagesApp isActive={activeApp === 'messages'} onClose={closeApp} />
            </div>
            
            {/* Dock */}
            <div className="mobile-dock">
                <div 
                    className={`dock-app messages ${activeApp === 'messages' ? 'active' : ''}`}
                    onClick={() => switchApp('messages')}
                >
                    <img src="./images/imessage-logo.png" alt="Messages" className="dock-app-icon" />
                </div>
                <div 
                    className={`dock-app browser ${activeApp === 'browser' ? 'active' : ''}`}
                    onClick={() => switchApp('browser')}
                >
                    <img src="./images/safari-logo.png" alt="Safari" className="dock-app-icon" />
                </div>
                <div 
                    className={`dock-app spotify ${activeApp === 'spotify' ? 'active' : ''}`}
                    onClick={() => switchApp('spotify')}
                >
                    <img src="./images/spotify-logo.png" alt="Spotify" className="dock-app-icon" />
                </div>
            </div>
        </div>
    );
};

// Small Desktop Layout Component  
const SmallDesktopLayout = () => {
    return (
        <>
            <div className="top-bar">
                <div className="top-bar-left">
                    <div className="logo">Shrey's Portfolio</div>
                </div>
                <div className="notch"><span></span></div>
                <div className="top-bar-right">
                    <span id="top-time">--:--</span>
                </div>
            </div>
            
            <div className="small-desktop-layout">
                <div className="browser-section">
                    <MainWindowApp />
                </div>
                
                <div className="spotify-section">
                    <DesktopSpotifyWidget />
                </div>
                
                <div className="phone-section">
                    <PhoneApp />
                </div>
                
                <div className="taskbar">
                    <div className="taskbar-content">
                        <a href="https://github.com/shreyk2" target="_blank" className="taskbar-link">GitHub</a>
                        <a href="https://www.linkedin.com/in/shrey-katyal-801948223/" target="_blank" className="taskbar-link">LinkedIn</a>
                        <a href="mailto:shreykatyal21@gmail.com" className="taskbar-link">Email Me</a>
                    </div>
                </div>
            </div>
        </>
    );
};

// Desktop Layout Component
const DesktopLayout = () => {
    const [showOnboarding, setShowOnboarding] = useState(true);
    const [currentTip, setCurrentTip] = useState(0);
    
    const tips = [
        {
            id: 'fullscreen',
            target: '.fullscreen-btn',
            title: 'Go Fullscreen',
            description: 'Click here for the best viewing experience',
            position: 'bottom-left'
        },
        {
            id: 'about',
            target: '[data-tab="professional"]',
            title: 'Learn About Me',
            description: 'Check out my experience and background',
            position: 'bottom'
        }
    ];
    
    const nextTip = () => {
        if (currentTip < tips.length - 1) {
            setCurrentTip(currentTip + 1);
        } else {
            setShowOnboarding(false);
        }
    };
    
    const skipOnboarding = () => {
        setShowOnboarding(false);
    };
    
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
        <>
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
                    <button className="fullscreen-btn" onClick={() => {
                        if (!document.fullscreenElement) {
                            document.documentElement.requestFullscreen();
                        } else {
                            document.exitFullscreen();
                        }
                    }}>
                        ⛶
                    </button>
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
                     <a href="https://www.linkedin.com/in/shrey-katyal-801948223/" target="_blank" className="taskbar-link">LinkedIn</a>
                     <a href="mailto:shreykatyal21@gmail.com" className="taskbar-link">Email Me</a>
                </div>
            </div>

            <div className="mobile-blocker">
                <h2>Desktop Recommended</h2>
                <p>For the best viewing experience, please visit this page from a desktop computer.</p>
            </div>
            
            {showOnboarding && (
                <OnboardingTooltip 
                    tip={tips[currentTip]}
                    onNext={nextTip}
                    onSkip={skipOnboarding}
                    isLast={currentTip === tips.length - 1}
                />
            )}
        </>
    );
};

// Root Component
const PortfolioOS = () => {
    const deviceType = useDeviceType();
    
    // Render different layouts based on device type
    return (
        <StrictMode>
            {(() => {
                switch (deviceType) {
                    case 'mobile':
                    case 'tablet':
                        return <MobileLayout deviceType={deviceType} />;
                    case 'small-desktop':
                        return <SmallDesktopLayout />;
                    case 'desktop':
                    default:
                        return <DesktopLayout />;
                }
            })()}
        </StrictMode>
    );
};

// Render the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<PortfolioOS />);
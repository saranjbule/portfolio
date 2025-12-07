'use client';

import React, { useState, useEffect } from 'react';
import {
    Mail,
    Phone,
    Globe,
    Linkedin,
    Github,
    MapPin,
    Code,
    Moon,
    Sun,
    ChevronDown,
    Briefcase,
    GraduationCap,
    User,
    Sparkles,
    AppWindow,
    Send,
    FileCodeCorner,
    CodeXml,
    ExternalLink,
    Square,
} from 'lucide-react';
import { greatVibes } from './fonts';
import './home.css';

const profileData = {
    name: 'Saranju Bule',
    title: 'Senior Frontend Engineer',
    contact: {
        email: 'saranj.bule@gmail.com',
        phone: '8827891710',
        website: 'saranju.in',
        linkedin: 'https://www.linkedin.com/in/saranju/',
        github: 'https://github.com/saranjbule',
        leetcode: 'https://leetcode.com/u/saranju/',
        location: 'Bengaluru, India',
        codesanbox: 'https://codesandbox.io/u/saranj',
    },
    summary: [
        'Front-End Engineer with 4+ years of experience building scalable, high-performance applications using React, TypeScript, and cloud-native tooling. Skilled in UI/UX engineering, performance optimization, SEO architecture, component libraries, CI/CD automation, microfrontends & reusable module development for enterprise platforms.',
        'I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.',
    ],
    skills: {
        Programming: ['JavaScript (ES5, ES6+)', 'TypeScript', 'Python', 'C'],
        Frontend: [
            'React',
            'Next.js',
            'Redux Toolkit',
            'HTML5 / CSS3',
            'SCSS',
            'Tailwind',
            'React Query',
            'Context API',
        ],
        Backend: ['Node.js', 'Express', 'REST APIs', 'Django'],
        'Cloud & DevOps': ['AWS', 'Docker', 'GitLab', 'GitHub', 'CI/CD'],
        Databases: ['MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
        Tools: [
            'Git',
            'Jest',
            'Figma',
            'Swagger',
            'Postman',
            'npm',
            'Babel',
            'Webpack',
            'Vite',
            'Material UI',
            'Bootstrap',
        ],
        'Soft Skills': [
            'Product thinking',
            'Debugging',
            'Troubleshooting',
            'Communication',
            'Collaboration',
            'Ownership',
        ],
    },
    experience: [
        {
            company: 'Trendlyne',
            role: 'Senior Frontend Engineer & Full Stack Engineer',
            period: 'Mar 2023 – Present',
            date: '2023 - Present',
            achievements: [
                'Led UI architecture for next-gen F&O Strategy Builder, improving workflow responsiveness by 25%',
                'Achieved 2× faster rendering through optimized state management, memoization, and code splitting',
                'Mentored 5 engineers and established frontend development standards across the team',
                'Built an AI-driven summary pipeline that increased user engagement by 40%',
                'Improved SEO architecture, routing strategy, and page indexing, contributing to 70% organic growth',
                'Integrated Freshdesk API, reducing customer resolution time by 50%',
            ],
        },
        {
            company: 'Persistent Systems',
            role: 'Software Engineer',
            period: 'Sep 2021 – Mar 2023',
            date: '2021 - 2023',
            achievements: [
                'Built responsive UI components achieving 99% design accuracy across 40+ screens',
                'Optimized page load speed, achieving 80% faster initial load',
                'Automated cloud deployments (AWS + Docker), reducing release time by 40%',
            ],
        },
        {
            company: 'Tata Consultancy Services',
            role: 'Assistant System Engineer Intern',
            period: 'Jan 2021 – June 2021',
            date: '2021',
            achievements: [
                'Build & Optimized web and cloud application, resulting in a 15% increase in process efficiency',
                'Achieved 100% on-time delivery while strengthening documentation and client communication skills',
                'Collaborated with senior engineers to enhance problem-solving effectiveness by 40%',
            ],
        },
        {
            company: 'WhiteHorse Business Solutions',
            role: 'UI/UX Intern',
            period: 'Apr 2020 – May 2020',
            date: '2020',
            achievements: [
                'Designed and implemented UI modules used by 10k+ active users',
            ],
        },
    ],
    projects: [
        {
            name: 'SmartOptions',
            tech: 'React, JavaScript, Material UI, SCSS, Python, Django',
            description:
                'Futures & Options platform offering strategy building, portfolio hedging, risk management, and direct broker integration for smarter, faster trading.',
        },

        {
            name: 'CampusConnect',
            tech: 'Node.js, Express, MySQL, JavaScript, HTML5, CSS3',
            description:
                'Placement management system to organize student and company data, filter eligible students, and send automated email notifications.',
        },
        {
            name: 'SmartSpeed',
            tech: 'Python, Open CV, Tesseract OCR',
            description:
                'Automated Speed Enforcement System leverages image processing to detect speeding vehicles and automatically issue electronic challans.',
        },
        {
            name: 'EventSync',
            tech: 'AWS, React, TypeScript, Material UI, SCSS',
            description:
                'Cloud-based employee and event management platform on AWS to optimize resource allocation and facilitate efficient workforce.',
        },
    ],
    education: {
        institution: 'Nagpur University',
        degree: 'Bachelor of Engineering (B.E.) in Information Technology',
        period: '2017–2021',
        cgpa: '8.6',
    },
    certifications: [
        { name: 'Amazon Web Services (AWS) Cloud Practitioner' },
        { name: 'Microsoft Azure Fundamentals (AZ-900)' },
        {
            name: 'HackerRank Certifications - JavaScript, React, SQL, Data Structures and Algorithms (DSA)',
        },
    ],
};

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme && storedTheme === 'dark') {
            setIsDarkMode(true);
        }

        const handleScroll = () => {
            const sections = [
                'home',
                'about',
                'skills',
                'experience',
                'projects',
                'education',
                'certifications',
                'contact',
            ];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 200 && rect.bottom >= 200;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 20;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);

        const newTheme = !isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    };

    const navItems = [
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: CodeXml },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: AppWindow },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'certifications', label: 'Certifications', icon: FileCodeCorner },
        { id: 'contact', label: 'Contact', icon: Send },
    ];

    return (
        <div className={`portfolio ${isDarkMode ? 'dark' : 'light'}`}>
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-pattern"></div>
                <div className="hero-content">
                    <div className="hero-greet">Hello, Let's Connect!</div>

                    <h1
                        className={`${greatVibes.className} hero-name gradient-text`}
                    >
                        {profileData.name}
                    </h1>
                    <h2 className="hero-title">{profileData.title}</h2>

                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('contact')}
                        >
                            <Sparkles size={18} />
                            Let's Collaborate
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-wrapper">
                        <div className="glass-card about-content-card">
                            <div className="about-intro">
                                {profileData.summary.map((content, idx) => (
                                    <p className="about-description" key={idx}>
                                        {content}
                                    </p>
                                ))}
                            </div>
                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <div className="highlight-icon">💼</div>
                                    <div className="highlight-text">
                                        <h4>Experience</h4>
                                        <p>
                                            4+ years building scalable web
                                            applications
                                        </p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon">🚀</div>
                                    <div className="highlight-text">
                                        <h4>Expertise</h4>
                                        <p>
                                            React, Next.js, JavaScript,
                                            TypeScript, Python
                                        </p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon">🎯</div>
                                    <div className="highlight-text">
                                        <h4>Focus</h4>
                                        <p>
                                            UI/UX Engineering & Modern Web
                                            Architecture
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-stats-wrapper">
                            <div className="glass-card stats-card">
                                <div className="stat-number gradient-text">
                                    4+
                                </div>
                                <div className="stat-text">
                                    Years Experience
                                </div>
                            </div>
                            <div className="glass-card stats-card">
                                <div className="stat-number gradient-text">
                                    5
                                </div>
                                <div className="stat-text">
                                    Engineers Mentored
                                </div>
                            </div>
                            <div className="glass-card stats-card">
                                <div className="stat-number gradient-text">
                                    100+
                                </div>
                                <div className="stat-text">Screens Built</div>
                            </div>
                            <div className="glass-card stats-card">
                                <div className="stat-number gradient-text">
                                    70%
                                </div>
                                <div className="stat-text">Organic Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="section">
                <div className="container">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="skills-categories">
                        {Object.entries(profileData.skills).map(
                            ([category, items], index) => (
                                <div
                                    key={index}
                                    className="glass-card skill-category"
                                >
                                    <h3 className="category-title">
                                        {category}
                                    </h3>
                                    <div className="category-items">
                                        {items.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="skill-badge"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="section">
                <div className="container">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="experience-list">
                        {profileData.experience.map((exp, index) => (
                            <div
                                key={index}
                                className="glass-card experience-card"
                            >
                                <div className="exp-content">
                                    <div className="exp-header">
                                        <div className="exp-title-group">
                                            <h3 className="exp-company">
                                                {exp.company}
                                            </h3>
                                            <h4 className="exp-role">
                                                {exp.role}
                                            </h4>
                                        </div>
                                        <span className="exp-period">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="exp-achievements">
                                        {exp.achievements.map(
                                            (achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        {profileData.projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass-card project-card"
                            >
                                <div className="project-number">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-tech">{project.tech}</p>
                                <p className="project-desc">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="section">
                <div className="container">
                    <h2 className="section-title">Education</h2>
                    <div className="glass-card education-card">
                        <div className="education-content">
                            <div className="education-left">
                                <div className="education-icon-large">🎓</div>
                            </div>
                            <div className="education-right">
                                <h3 className="institution">
                                    {profileData.education.institution}
                                </h3>
                                <h4 className="degree">
                                    {profileData.education.degree}
                                </h4>
                                <div className="education-footer">
                                    <span className="period-badge">
                                        {profileData.education.period}
                                    </span>
                                    <span className="cgpa-badge">
                                        CGPA: {profileData.education.cgpa} (
                                        Distinction )
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="section">
                <div className="container">
                    <h2 className="section-title">Certifications</h2>
                    <div className="certifications-grid">
                        {profileData.certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="glass-card certification-item"
                            >
                                <div className="cert-icon">✓</div>
                                <p className="cert-name">{cert.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section contact-section">
                <div className="container">
                    <h2 className="section-title">Let's Connect</h2>
                    <div className="contact-wrapper">
                        <div className="glass-card contact-main">
                            <div className="contact-header-text">
                                <h3>
                                    Let's work{' '}
                                    <i className="gradient-text">together</i>
                                </h3>
                                <p>
                                    Let's build something amazing together. Feel
                                    free to reach out through any of these
                                    channels.
                                </p>
                            </div>
                            <div className="contact-methods">
                                {[
                                    {
                                        href: `mailto:${profileData.contact.email}`,
                                        icon: Mail,
                                        label: 'Email',
                                        value: profileData.contact.email,
                                    },
                                    {
                                        href: `tel:${profileData.contact.phone}`,
                                        icon: Phone,
                                        label: 'Phone',
                                        value: profileData.contact.phone,
                                    },
                                    {
                                        href: `https://${profileData.contact.website}`,
                                        icon: Globe,
                                        label: 'Website',
                                        value: profileData.contact.website,
                                    },
                                ].map((method, index) => {
                                    const Icon = method.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={method.href}
                                            target={
                                                method.href.startsWith('http')
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                method.href.startsWith('http')
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                            className="contact-method"
                                        >
                                            <Icon
                                                size={20}
                                                className="method-icon"
                                            />
                                            <div className="method-info">
                                                <span className="method-label">
                                                    {method.label}
                                                </span>
                                                <span className="method-value">
                                                    {method.value}
                                                </span>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="contact-social">
                            {[
                                {
                                    href: profileData.contact.linkedin,
                                    icon: Linkedin,
                                    label: 'LinkedIn',
                                },
                                {
                                    href: profileData.contact.github,
                                    icon: Github,
                                    label: 'GitHub',
                                },
                                {
                                    href: profileData.contact.leetcode,
                                    icon: Code,
                                    label: 'LeetCode',
                                },
                                {
                                    href: profileData.contact.codesanbox,
                                    icon: Square,
                                    label: 'CodeSanbox',
                                },
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-card social-link"
                                    >
                                        <Icon size={24} />
                                        <span>{social.label}</span>
                                        <ExternalLink
                                            size={15}
                                            color="var(--text-tertiary)"
                                        />
                                    </a>
                                );
                            })}
                            <div className="location-info">
                                <MapPin size={18} />
                                <span>{profileData.contact.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>
                        &copy; {new Date().getFullYear()} {profileData.name}.
                        Crafted with passion.
                    </p>
                </div>
            </footer>

            {/* Floating Toolbar - Bottom */}
            <div className="toolbar">
                <div className="toolbar-content">
                    <button
                        className="toolbar-item home-btn"
                        onClick={() => scrollToSection('home')}
                        title="Home"
                    >
                        <ChevronDown
                            size={20}
                            style={{ transform: 'rotate(180deg)' }}
                        />
                    </button>
                    <div className="toolbar-divider"></div>
                    <nav className="toolbar-nav">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    className={`toolbar-item ${
                                        activeSection === item.id
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => scrollToSection(item.id)}
                                    title={item.label}
                                >
                                    <Icon size={20} />
                                    <span className="toolbar-label">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>
                    <div className="toolbar-divider"></div>
                    <button
                        className="toolbar-item theme-toggle"
                        onClick={toggleTheme}
                        title="Toggle theme"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
}

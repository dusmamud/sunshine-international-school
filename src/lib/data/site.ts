// Sunshine International School — shared site data.
// ALL content is demo/mock data for client presentation (2024-25 session as in the
// reference design). Real names, fees, dates and photos must be replaced before launch.
export const school = {
	name: 'Sunshine International School',
	short: 'SIS',
	tagline: 'Nurturing Minds. Shaping Futures.',
	motto: 'Empowering students with knowledge, values and skills to thrive in a changing world.',
	phoneDisplay: '+91 98765 43210',
	phoneHref: 'tel:+919876543210',
	email: 'info@sunshineschool.edu.in',
	website: 'www.sunshineschool.edu.in',
	address: '123 Education Street, New Delhi - 110001, India',
	hours: 'Mon – Sat: 8:00 AM – 4:00 PM',
	established: 2004
};

export const navLinks = [
	{ label: 'Home', href: '/' },
	{
		label: 'About Us',
		href: '/about',
		children: [
			{ label: 'Our Story', href: '/about' },
			{ label: 'Principal’s Message', href: '/about#principal' },
			{ label: 'Our Faculty', href: '/about#faculty' },
			{ label: 'Alumni', href: '/alumni' }
		]
	},
	{
		label: 'Academics',
		href: '/academics',
		children: [
			{ label: 'Pre-Primary (Nursery – KG)', href: '/academics#pre-primary' },
			{ label: 'Primary School (I – V)', href: '/academics#primary' },
			{ label: 'Middle School (VI – VIII)', href: '/academics#middle' },
			{ label: 'High School (IX – X)', href: '/academics#high' },
			{ label: 'Senior Secondary (XI – XII)', href: '/academics#senior' }
		]
	},
	{
		label: 'Admissions',
		href: '/admissions',
		children: [
			{ label: 'Admission Process', href: '/admissions#process' },
			{ label: 'Fee Structure', href: '/admissions#fees' },
			{ label: 'Important Dates', href: '/admissions#dates' },
			{ label: 'Enquire Now', href: '/admissions#enquire' }
		]
	},
	{
		label: 'Campus Life',
		href: '/campus-life',
		children: [
			{ label: 'Sports', href: '/campus-life#sports' },
			{ label: 'Performing Arts', href: '/campus-life#arts' },
			{ label: 'Clubs & Societies', href: '/campus-life#clubs' },
			{ label: 'Library & Labs', href: '/campus-life#library' }
		]
	},
	{ label: 'Gallery', href: '/gallery' },
	{ label: 'Contact Us', href: '/contact' }
];

export const heroFeatures = [
	{ icon: 'lotus', title: 'Holistic Education' },
	{ icon: 'users', title: 'Experienced Faculty' },
	{ icon: 'globe', title: 'Global Perspective' },
	{ icon: 'shield', title: 'Safe & Nurturing Environment' },
	{ icon: 'building', title: 'Modern Infrastructure' }
];

export const welcomeStats = [
	{ value: 20, suffix: '+', label: 'Years of Excellence', icon: 'award' },
	{ value: 150, suffix: '+', label: 'Dedicated Faculty', icon: 'users' },
	{ value: 2500, suffix: '+', label: 'Happy Students', icon: 'gradcap' },
	{ value: 25, suffix: ':1', label: 'Student-Teacher Ratio', icon: 'user' },
	{ value: 15, suffix: '+', label: 'Sports & Co-curricular Activities', icon: 'trophy' },
	{ value: 100, suffix: '%', label: 'Safe & Secure Campus', icon: 'shield' }
];

export const programs = [
	{
		id: 'pre-primary', title: 'Pre-Primary', tagline: 'Play. Learn. Grow.',
		text: 'Nurturing curiosity and creativity in a caring environment.',
		img: '/images/pre-primary.jpg', icon: 'sparkles'
	},
	{
		id: 'primary', title: 'Primary School', tagline: 'Build. Explore. Discover.',
		text: 'Strong fundamentals for a bright future.',
		img: '/images/primary-classroom.webp', icon: 'book'
	},
	{
		id: 'middle', title: 'Middle School', tagline: 'Learn. Engage. Excel.',
		text: 'Encouraging critical thinking and real-world learning.',
		img: '/images/middle-school.jpg', icon: 'flask'
	},
	{
		id: 'high', title: 'High School', tagline: 'Focus. Achieve. Lead.',
		text: 'Preparing students for board exams and beyond.',
		img: '/images/high-school.jpg', icon: 'gradcap'
	},
	{
		id: 'senior', title: 'Senior Secondary', tagline: 'Prepare. Perform. Succeed.',
		text: 'Empowering future leaders and innovators.',
		img: '/images/senior-secondary.jpg', icon: 'trophy'
	}
];

export const campusStats = [
	{ value: '10+', label: 'Acres Campus', icon: 'building' },
	{ value: '50+', label: 'Smart Classrooms', icon: 'monitor' },
	{ value: '10+', label: 'Science Labs', icon: 'flask' },
	{ value: '5+', label: 'Activity Rooms', icon: 'music' },
	{ value: '100%', label: 'Digital Campus', icon: 'laptop' }
];

export const activities = [
	{ title: 'Sports', img: '/images/sports-students.webp', icon: 'trophy' },
	{ title: 'Performing Arts', img: '/images/performing-arts.jpg', icon: 'music' },
	{ title: 'Visual Arts', img: '/images/visual-arts.jpg', icon: 'sparkles' },
	{ title: 'Life Skills', img: '/images/life-skills.jpg', icon: 'bulb' },
	{ title: 'Community Service', img: '/images/community-service.jpg', icon: 'heart' },
	{ title: 'Clubs & Societies', img: '/images/clubs.jpg', icon: 'users' }
];

export const announcements = [
	{ day: '20', month: 'MAY', title: 'Summer Camp 2024 Registrations Open!', text: 'Know More →' },
	{ day: '15', month: 'MAY', title: 'Parent-Teacher Meeting', text: 'Saturday, 25 May 2024' },
	{ day: '10', month: 'MAY', title: 'Admissions Open for 2024-25 Session', text: 'Know More →' }
];

export const testimonial = {
	quote:
		'Sunshine International School has been a wonderful experience for my child. The teachers are supportive and the environment is perfect for overall growth.',
	name: 'Priya Sharma',
	detail: 'Parent of Class 5 Student'
};

export const galleryItems = [
	{ src: '/images/hero-students.webp', alt: 'Students in maroon blazers in front of the school', cat: 'Campus' },
	{ src: '/images/school-building.webp', alt: 'Sunshine International School building', cat: 'Campus' },
	{ src: '/images/primary-classroom.webp', alt: 'Primary students learning in class', cat: 'Academics' },
	{ src: '/images/sports-students.webp', alt: 'Students playing football', cat: 'Sports' },
	{ src: '/images/pre-primary.jpg', alt: 'Pre-primary children at play', cat: 'Academics' },
	{ src: '/images/library.jpg', alt: 'School library', cat: 'Campus' },
	{ src: '/images/science-lab.jpg', alt: 'Science laboratory', cat: 'Academics' },
	{ src: '/images/performing-arts.jpg', alt: 'Music and performing arts', cat: 'Arts' },
	{ src: '/images/campus-life.jpg', alt: 'Campus life', cat: 'Campus' },
	{ src: '/images/clubs.jpg', alt: 'Students in a club activity', cat: 'Arts' },
	{ src: '/images/middle-school.jpg', alt: 'Middle school classroom', cat: 'Academics' },
	{ src: '/images/community-service.jpg', alt: 'Community service activity', cat: 'Sports' }
];

export const searchIndex = [
	{ label: 'Admissions Open 2024-25', href: '/admissions', section: 'Admissions' },
	{ label: 'Admission Process', href: '/admissions#process', section: 'Admissions' },
	{ label: 'Fee Structure', href: '/admissions#fees', section: 'Admissions' },
	{ label: 'Important Dates', href: '/admissions#dates', section: 'Admissions' },
	{ label: 'Enquire Now', href: '/admissions#enquire', section: 'Admissions' },
	{ label: 'About the School', href: '/about', section: 'About Us' },
	{ label: 'Principal’s Message', href: '/about#principal', section: 'About Us' },
	{ label: 'Academic Programs', href: '/academics', section: 'Academics' },
	{ label: 'Pre-Primary', href: '/academics#pre-primary', section: 'Academics' },
	{ label: 'Senior Secondary', href: '/academics#senior', section: 'Academics' },
	{ label: 'Campus Life', href: '/campus-life', section: 'Campus Life' },
	{ label: 'Photo Gallery', href: '/gallery', section: 'Gallery' },
	{ label: 'News & Events', href: '/news-events', section: 'News' },
	{ label: 'Parent Portal', href: '/parent-portal', section: 'Parents' },
	{ label: 'Careers', href: '/careers', section: 'School' },
	{ label: 'Alumni', href: '/alumni', section: 'School' },
	{ label: 'Contact Us', href: '/contact', section: 'School' }
];

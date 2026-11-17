// Sunshine International School — extended data for the professional round
// (mandatory disclosure, board results, calendar, faculty, notices, downloads,
// transport, FAQs, testimonials, news). ALL content is demo/mock data for
// client presentation. Real names, fees, dates and photos must be replaced
// before a real launch.
export const disclosure = {
	general: [
		{ label: 'Name of the school', value: 'Sunshine International School' },
		{ label: 'Affiliation No.', value: '2730123 (Demo)' },
		{ label: 'School Code', value: '65112 (Demo)' },
		{ label: 'Complete address', value: '123 Education Street, New Delhi – 110001, India' },
		{ label: 'Principal name & qualification', value: 'Dr. Meera Kapoor — M.Ed., Ph.D. (Education)' },
		{ label: 'School email ID', value: 'info@sunshineschool.edu.in' },
		{ label: 'Contact details', value: '+91 98765 43210 (Mon – Sat, 8:00 AM – 4:00 PM)' },
		{ label: 'Year of establishment', value: '2004' },
		{ label: 'Affiliation status', value: 'Affiliated to CBSE, New Delhi (Demo)' }
	],
	documents: [
		{ name: 'Affiliation / Upgradation Letter', ref: 'CBSE/AFF/2730123/2004', validity: '31 Mar 2027', status: 'Demo copy' },
		{ name: 'Society / Trust Registration Certificate', ref: 'SR/DL/2004/091', validity: 'Renewed 2025', status: 'Demo copy' },
		{ name: 'No Objection Certificate (State Govt.)', ref: 'NOC/DL/2004/118', validity: 'Valid', status: 'Demo copy' },
		{ name: 'Recognition Certificate (RTE Act, 2009)', ref: 'RTE/DL/2010/064', validity: 'Valid', status: 'Demo copy' },
		{ name: 'Building Safety Certificate (National Building Code)', ref: 'BSC/DL/2025/142', validity: '31 Dec 2026', status: 'Demo copy' },
		{ name: 'Fire Safety Certificate', ref: 'FSC/DL/2025/308', validity: '31 Dec 2026', status: 'Demo copy' },
		{ name: 'DEO Certificate / Self-Certification', ref: 'DEO/DL/2025/057', validity: 'Valid', status: 'Demo copy' },
		{ name: 'Water, Health & Sanitation Certificates', ref: 'WHS/DL/2025/201', validity: '30 Jun 2027', status: 'Demo copy' }
	],
	fees: [
		{ label: 'Pre-Primary (Nursery – KG)', value: '₹48,000 / year' },
		{ label: 'Primary (Classes I – V)', value: '₹62,000 / year' },
		{ label: 'Middle School (Classes VI – VIII)', value: '₹72,000 / year' },
		{ label: 'High School (Classes IX – X)', value: '₹84,000 / year' },
		{ label: 'Senior Secondary (Classes XI – XII)', value: '₹96,000 / year' },
		{ label: 'One-time admission fee', value: '₹15,000' },
		{ label: 'Registration fee', value: '₹500' },
		{ label: 'Transport (optional)', value: '₹1,500 / month' }
	],
	smc: [
		{ name: 'Mr. Suresh Khanna', role: 'Chairman' },
		{ name: 'Mrs. Kavita Khanna', role: 'Manager' },
		{ name: 'Dr. Meera Kapoor', role: 'Principal (Member Secretary)' },
		{ name: 'Mr. Arvind Menon', role: 'Vice Principal' },
		{ name: 'Mrs. Shalini Bhatt', role: 'Teacher Representative' },
		{ name: 'Mr. Rakesh Gupta', role: 'Parent Representative' },
		{ name: 'Dr. Anil Verma', role: 'Educationist Member' }
	],
	pta: [
		{ name: 'Mrs. Priya Sharma', role: 'President (Parent, Class V)' },
		{ name: 'Mr. Rakesh Gupta', role: 'Vice President (Parent, Class XI)' },
		{ name: 'Mrs. Sunita Agarwal', role: 'Secretary (Parent, Class III)' },
		{ name: 'Mr. Nikhil Rao', role: 'Teacher Member' },
		{ name: 'Mrs. Neha Gupta', role: 'Teacher Member' },
		{ name: 'Dr. Meera Kapoor', role: 'Principal (Ex-officio)' }
	],
	staff: [
		{ label: 'Principal', count: 1 },
		{ label: 'Vice Principal', count: 1 },
		{ label: 'PGT (Classes XI – XII)', count: 14 },
		{ label: 'TGT (Classes VI – X)', count: 22 },
		{ label: 'PRT (Classes I – V)', count: 26 },
		{ label: 'Pre-Primary Teachers', count: 12 },
		{ label: 'PET / Sports & Yoga', count: 5 },
		{ label: 'Music, Dance & Art', count: 5 },
		{ label: 'Counsellor', count: 1 },
		{ label: 'Librarian', count: 1 },
		{ label: 'Lab Assistants', count: 4 },
		{ label: 'Special Educator', count: 1 }
	],
	infrastructure: [
		{ label: 'Campus area', value: '10 acres' },
		{ label: 'Classrooms', value: '60 smart classrooms (avg. size 20 × 24 ft)' },
		{ label: 'Science laboratories', value: '10+ (Physics, Chemistry, Biology)' },
		{ label: 'Computer labs', value: '2 — 80 networked systems' },
		{ label: 'Library', value: '1 — 20,000+ books, reading hall' },
		{ label: 'Internet connectivity', value: '100 Mbps leased line + Wi-Fi campus' },
		{ label: 'Auditorium', value: '800 seats' },
		{ label: 'Playground & sports', value: 'Football field, basketball court, cricket nets, athletics track' },
		{ label: 'Toilets — Girls', value: '30' },
		{ label: 'Toilets — Boys', value: '30' },
		{ label: 'Toilets — CWSN', value: '4 (accessible)' },
		{ label: 'School buses', value: '18 GPS-enabled' },
		{ label: 'Drinking water', value: 'RO + UV purified, tested quarterly' }
	]
};

export const boardResults = [
	{
		year: '2025–26',
		x: { appeared: 148, passed: 148, pass: 100, topper: 'Aarav Mehta', topScore: '99.2%', above90: 52 },
		xii: { appeared: 122, passed: 122, pass: 100, topper: 'Ishita Rao', topScore: '98.6%', above90: 44 }
	},
	{
		year: '2024–25',
		x: { appeared: 142, passed: 142, pass: 100, topper: 'Diya Kapoor', topScore: '98.8%', above90: 47 },
		xii: { appeared: 118, passed: 118, pass: 100, topper: 'Kabir Singh', topScore: '98.1%', above90: 39 }
	},
	{
		year: '2023–24',
		x: { appeared: 136, passed: 136, pass: 100, topper: 'Ananya Iyer', topScore: '98.4%', above90: 41 },
		xii: { appeared: 112, passed: 112, pass: 100, topper: 'Rohan Sethi', topScore: '97.9%', above90: 35 }
	}
];

export const calendarTerms = [
	{ term: 'Term 1', period: 'April – September 2026', note: 'New session, Periodic Test 1, Half-Yearly Exams' },
	{ term: 'Term 2', period: 'October 2026 – March 2027', note: 'Periodic Test 2, Pre-Boards, Annual Exams, Results' }
];

export const calendarEvents = [
	{ date: '01 Apr 2026', event: 'New academic session begins', category: 'Event' },
	{ date: '14 Apr 2026', event: 'Dr. B. R. Ambedkar Jayanti — Holiday', category: 'Holiday' },
	{ date: '01 May 2026', event: 'Labour Day — Holiday', category: 'Holiday' },
	{ date: '15 – 25 May 2026', event: 'Summer break', category: 'Holiday' },
	{ date: '01 Jun 2026', event: 'School reopens after summer break', category: 'Event' },
	{ date: '11 Jul 2026', event: 'Parent–Teacher Meeting (Term 1)', category: 'Event' },
	{ date: '03 – 08 Aug 2026', event: 'Periodic Test 1 (Classes VI – XII)', category: 'Exam' },
	{ date: '15 Aug 2026', event: 'Independence Day celebration', category: 'Event' },
	{ date: '02 Oct 2026', event: 'Gandhi Jayanti — Holiday', category: 'Holiday' },
	{ date: '12 – 21 Oct 2026', event: 'Half-Yearly Examinations', category: 'Exam' },
	{ date: '24 Oct – 02 Nov 2026', event: 'Diwali break', category: 'Holiday' },
	{ date: '14 Nov 2026', event: "Children's Day celebration", category: 'Event' },
	{ date: '20 Nov 2026', event: 'National Science Exhibition (school round)', category: 'Activity' },
	{ date: '05 Dec 2026', event: 'Annual Sports Day', category: 'Activity' },
	{ date: '20 Dec 2026', event: 'Annual Day & Prize Distribution', category: 'Event' },
	{ date: '25 Dec 2026 – 01 Jan 2027', event: 'Winter break', category: 'Holiday' },
	{ date: '26 Jan 2027', event: 'Republic Day celebration', category: 'Event' },
	{ date: '01 – 10 Feb 2027', event: 'Pre-Board Examinations (Classes X & XII)', category: 'Exam' },
	{ date: '15 Feb 2027', event: 'Annual Examinations begin', category: 'Exam' },
	{ date: '20 Mar 2027', event: 'Result declaration & report cards', category: 'Event' },
	{ date: '31 Mar 2027', event: 'Session 2026–27 ends', category: 'Event' }
];

export function teacherSlug(name: string) {
	return name
		.toLowerCase()
		.replace(/[^a-z\s]/g, '')
		.trim()
		.replace(/\s+/g, '-');
}

export const facultyDirectory = [
	{
		department: 'Leadership',
		members: [
			{
				initials: 'MK',
				name: 'Dr. Meera Kapoor',
				role: 'Principal',
				note: 'M.Ed., Ph.D. (Education) — 22 yrs',
				bio: 'Dr. Kapoor has led Sunshine International School since 2012, shaping it from a 600-student school into a 2,500-strong CBSE institution. She believes a school runs on trust — between teachers, parents and children — and her door is open to every family.',
				subjects: ['Educational Leadership', 'School Culture'],
				achievements: ['CBSE Best Principal Award 2023 (demo)', '100% board results for 3 consecutive years'],
				quote: 'Every child arrives with a gift — our job is to help them unwrap it.',
				office: 'Mon – Fri, 10:00 AM – 12:00 PM'
			},
			{
				initials: 'AM',
				name: 'Mr. Arvind Menon',
				role: 'Vice Principal',
				note: 'M.Sc. Mathematics — 18 yrs',
				bio: 'A mathematics teacher at heart, Mr. Menon now leads academics and board preparation across the school. He designed the remedial programme that lifted the Class X mathematics average by 18% in two years.',
				subjects: ['Mathematics', 'Academic Planning'],
				achievements: ['Designed the school remedial programme', 'Mentor to 3 state-level maths Olympiad finalists'],
				quote: 'Discipline is not restriction — it is the freedom to achieve.',
				office: 'Mon – Sat, 9:00 – 11:00 AM'
			},
			{
				initials: 'KS',
				name: 'Ms. Kavita Sharma',
				role: 'Head, Primary Wing',
				note: 'B.Ed., M.A. English — 16 yrs',
				bio: 'Ms. Sharma champions joyful early learning. Under her, the Primary Wing moved to a play-way phonics programme where reading begins with stories, rhymes and sand trays — not with rote work.',
				subjects: ['Early Childhood Education', 'Phonics'],
				achievements: ['Built the play-way phonics programme', 'Primary Wing reading levels up 35% in 3 years'],
				quote: 'Children learn best when they forget they are learning.',
				office: 'Mon – Fri, 9:00 – 11:00 AM'
			}
		]
	},
	{
		department: 'English',
		members: [
			{
				initials: 'SB',
				name: 'Mrs. Shalini Bhatt',
				role: 'PGT English',
				note: 'M.A. English, B.Ed. — 15 yrs',
				bio: 'Mrs. Bhatt teaches senior English and runs the debate and literary club. Her students have won the Delhi inter-school debate championship two years running, and the school magazine she edits is read cover to cover.',
				subjects: ['English Literature', 'Creative Writing'],
				achievements: ['Delhi inter-school debate champions 2025', 'Editor, school magazine “The Sunbeam”'],
				quote: 'Words build worlds.',
				office: 'Mon & Wed, 1:00 – 3:00 PM'
			},
			{
				initials: 'RS',
				name: 'Mr. Rohan Sethi',
				role: 'TGT English',
				note: 'M.A. English — 9 yrs',
				bio: 'Mr. Sethi makes grammar feel like a game and drama feel like life. He directs the annual day English musical and coaches the middle-school elocution team.',
				subjects: ['English Grammar', 'Drama'],
				achievements: ['Directed 5 annual day musicals', 'Elocution team — district winners 2024'],
				quote: 'Read a hundred books, and you have lived a hundred lives.',
				office: 'Tue & Fri, 1:00 – 3:00 PM'
			}
		]
	},
	{
		department: 'Hindi & Sanskrit',
		members: [
			{
				initials: 'SA',
				name: 'Mrs. Sunita Agarwal',
				role: 'PGT Hindi',
				note: 'M.A. Hindi, B.Ed. — 17 yrs',
				bio: 'Mrs. Agarwal teaches senior Hindi literature and coaches the Hindi debate team to the state-level finals. Her classroom is famous for its poetry wall, where students pin their own verses.',
				subjects: ['Hindi Literature', 'Debate'],
				achievements: ['Hindi debate — state-level finalists', 'School poetry wall curator'],
				quote: 'Bhasha hi sanskriti hai.',
				office: 'Mon & Wed, 2:00 – 4:00 PM'
			},
			{
				initials: 'PJ',
				name: 'Mr. Prakash Jha',
				role: 'TGT Hindi & Sanskrit',
				note: 'M.A. Sanskrit — 11 yrs',
				bio: 'Mr. Jha keeps Sanskrit alive at Sunshine — shloka recitation, Sanskrit week, and a small but passionate group of students who can chant the Bhagavad Gita from memory.',
				subjects: ['Hindi', 'Sanskrit'],
				achievements: ['Sanskrit shloka recitation — district winners', 'Sanskrit Week founder'],
				quote: 'Sanskrit is the mother of clarity.',
				office: 'Tue & Thu, 1:00 – 3:00 PM'
			}
		]
	},
	{
		department: 'Mathematics',
		members: [
			{
				initials: 'NG',
				name: 'Mrs. Neha Gupta',
				role: 'PGT Mathematics',
				note: 'M.Sc. Maths — 13 yrs',
				bio: 'Mrs. Gupta teaches senior mathematics and coaches the Olympiad group — 12 of her students qualified for Olympiad level 2 last year. Her rule: no one leaves the class with a doubt.',
				subjects: ['Mathematics', 'Statistics'],
				achievements: ['12 students qualified for Olympiad level 2', 'Maths Olympiad coach, 6 years'],
				quote: 'Maths is not about numbers — it is about patterns.',
				office: 'Mon – Fri, 2:00 – 3:00 PM'
			},
			{
				initials: 'SK',
				name: 'Mr. Sameer Khan',
				role: 'TGT Mathematics',
				note: 'M.Sc. Maths, B.Ed. — 10 yrs',
				bio: 'Mr. Khan built the maths lab and the activity corners that turned fractions into board games and geometry into art. His middle-school students now ask for extra maths periods.',
				subjects: ['Mathematics', 'Mental Maths'],
				achievements: ['Built the maths lab & activity corners', 'Mental maths championship organiser'],
				quote: 'Every problem has a solution — sometimes you just need a new angle.',
				office: 'Mon, Wed & Fri, 1:00 – 2:00 PM'
			}
		]
	},
	{
		department: 'Science',
		members: [
			{
				initials: 'AM',
				name: 'Mr. Arjun Malhotra',
				role: 'Head of Science · PGT Physics',
				note: 'M.Sc. Physics — 14 yrs',
				bio: 'Mr. Malhotra runs the three science laboratories, the robotics club and the school science fair. His students built the rainwater-harvesting model that won 2nd prize at the district science exhibition.',
				subjects: ['Physics', 'Robotics'],
				achievements: ['District science exhibition 2nd prize (2026)', 'Robotics club — 60 active members'],
				quote: 'Science is not a subject — it is a way of asking questions.',
				office: 'Tue & Thu, 2:00 – 4:00 PM'
			},
			{
				initials: 'AV',
				name: 'Dr. Anil Verma',
				role: 'PGT Chemistry',
				note: 'M.Sc., Ph.D. Chemistry — 16 yrs',
				bio: 'Dr. Verma brings a research lab’s rigour to school chemistry — and a storyteller’s warmth. Three of his students have qualified for NTSE, and his practical classes are the most awaited of the week.',
				subjects: ['Chemistry'],
				achievements: ['Ph.D. Chemistry', '3 NTSE qualifiers mentored'],
				quote: 'Chemistry is the poetry of matter.',
				office: 'Mon & Thu, 2:00 – 4:00 PM'
			},
			{
				initials: 'PD',
				name: 'Mrs. Pooja Desai',
				role: 'TGT Science',
				note: 'M.Sc. Biology, B.Ed. — 8 yrs',
				bio: 'Mrs. Desai coordinates the school science fair and makes general science hands-on — every concept gets an experiment, every experiment gets a question to take home.',
				subjects: ['General Science', 'Biology'],
				achievements: ['Science fair coordinator', 'Hands-on science kit designer'],
				quote: 'Curiosity is the beginning of all science.',
				office: 'Mon – Fri, 1:00 – 2:00 PM'
			}
		]
	},
	{
		department: 'Social Science',
		members: [
			{
				initials: 'RM',
				name: 'Mrs. Ritu Malhotra',
				role: 'PGT History & Civics',
				note: 'M.A. History — 14 yrs',
				bio: 'Mrs. Malhotra mentors the Model UN team and teaches history as a living story — with debates, role play and field visits to Delhi’s heritage sites. Her students argue like parliamentarians.',
				subjects: ['History', 'Civics'],
				achievements: ['Model UN team mentor', 'Heritage walk programme founder'],
				quote: 'History is not the past — it is the mirror of the present.',
				office: 'Tue & Thu, 2:00 – 4:00 PM'
			},
			{
				initials: 'KJ',
				name: 'Mr. Karan Joshi',
				role: 'TGT Geography',
				note: 'M.A. Geography, B.Ed. — 8 yrs',
				bio: 'Mr. Joshi built the geography map lab and runs field trips that teach contour lines on real hillsides. His disaster-management workshops are now part of the school safety drill.',
				subjects: ['Geography', 'Disaster Management'],
				achievements: ['Geography map lab founder', 'Disaster-management workshop lead'],
				quote: 'The world is the best classroom.',
				office: 'Mon & Wed, 1:00 – 3:00 PM'
			}
		]
	},
	{
		department: 'Computer Science',
		members: [
			{
				initials: 'NR',
				name: 'Mr. Nikhil Rao',
				role: 'PGT Computer Science',
				note: 'MCA — 11 yrs',
				bio: 'Mr. Rao runs the coding club, where 40 students have built real apps — a library tracker, a bus-timing board, a quiz game. He teaches Python and AI to Classes XI–XII.',
				subjects: ['Python', 'AI & Data'],
				achievements: ['Coding club — 40 students built working apps', 'AI workshop for Classes IX–XII'],
				quote: 'Code is the new handwriting.',
				office: 'Mon – Fri, 2:00 – 3:00 PM'
			},
			{
				initials: 'AI',
				name: 'Ms. Ananya Iyer',
				role: 'TGT Computer Science',
				note: 'B.Tech., B.Ed. — 6 yrs',
				bio: 'Ms. Iyer introduces the youngest students to computers — Scratch stories, robotics kits, and the rule that every child finishes the term having built something of their own.',
				subjects: ['Computers', 'Scratch & Robotics'],
				achievements: ['Robotics club junior winners', 'Scratch storytelling festival'],
				quote: 'Every child can code — they just need the first hello world.',
				office: 'Tue & Fri, 1:00 – 3:00 PM'
			}
		]
	},
	{
		department: 'Arts, Music & Sports',
		members: [
			{
				initials: 'DN',
				name: 'Mrs. Divya Nair',
				role: 'Music Teacher',
				note: 'M.A. Music — 13 yrs',
				bio: 'Mrs. Nair leads the school choir and the vocal and instrumental programme. Her choir won the district cultural fest, and the morning assembly’s song is the sound of Sunshine.',
				subjects: ['Vocal Music', 'Instrumental Music'],
				achievements: ['District cultural fest — choir winners', 'School orchestra founder'],
				quote: 'Music is the soul of the school.',
				office: 'Mon, Wed & Fri, 2:00 – 4:00 PM'
			},
			{
				initials: 'IS',
				name: 'Mr. Imran Sheikh',
				role: 'Dance & Drama',
				note: 'Diploma, NSD — 9 yrs',
				bio: 'Mr. Sheikh has choreographed the annual day for six years and runs the theatre society, where shy students become confident performers — and confident students become directors.',
				subjects: ['Dance', 'Theatre'],
				achievements: ['Annual day choreographer, 6 years', 'Theatre society — 3 inter-school wins'],
				quote: 'The stage teaches what no textbook can.',
				office: 'Tue & Thu, 2:00 – 4:00 PM'
			},
			{
				initials: 'RY',
				name: 'Mr. Rajesh Yadav',
				role: 'PET / Sports',
				note: 'B.P.Ed., Karate Black Belt — 12 yrs',
				bio: 'Mr. Yadav coaches football, athletics and karate, and runs the morning fitness programme. His U-16 football team won the district championship in 2026.',
				subjects: ['Physical Education', 'Karate'],
				achievements: ['District football champions 2026', 'Karate — 30 black belts trained'],
				quote: 'A healthy body builds a focused mind.',
				office: 'Mon – Sat, 7:00 – 8:00 AM'
			}
		]
	}
];

export const allTeachers = facultyDirectory.flatMap((d) =>
	d.members.map((m) => ({ ...m, department: d.department, slug: teacherSlug(m.name) }))
);

export const notices = [
	{
		date: '12 Nov 2026',
		title: 'Admissions Open for Academic Year 2026–27 — forms available at the school office and online',
		category: 'Admissions',
		pinned: true
	},
	{
		date: '10 Nov 2026',
		title: 'Half-Yearly Examination date sheet released for Classes VI – XII',
		category: 'Examinations',
		pinned: true
	},
	{
		date: '08 Nov 2026',
		title: 'Diwali break: school closed from 24 October to 02 November 2026',
		category: 'Holiday',
		pinned: false
	},
	{
		date: '05 Nov 2026',
		title: 'Parent–Teacher Meeting on 15 November 2026 (9:00 AM – 12:00 PM)',
		category: 'General',
		pinned: false
	},
	{
		date: '01 Nov 2026',
		title: 'Annual Sports Day on 05 December 2026 — house trials begin 18 November',
		category: 'Sports',
		pinned: false
	},
	{
		date: '28 Oct 2026',
		title: 'Term 1 fee due date: 10 November 2026 — pay online via parent portal',
		category: 'Fees',
		pinned: false
	},
	{
		date: '24 Oct 2026',
		title: 'Winter uniform compulsory from 01 December 2026',
		category: 'General',
		pinned: false
	},
	{
		date: '20 Oct 2026',
		title: 'National Science Exhibition (school round) on 20 November — register by 10 November',
		category: 'Activity',
		pinned: false
	}
];

export const downloads = [
	{
		title: 'Admission Application Form 2026–27',
		desc: 'For Nursery to Class IX and XI — fill and submit with documents at the school office.',
		file: '/downloads/admission-form.pdf',
		pages: '1 page',
		size: '2 KB'
	},
	{
		title: 'Transfer Certificate Application',
		desc: 'Apply for a TC when leaving the school — attach the last fee receipt.',
		file: '/downloads/tc-application.pdf',
		pages: '1 page',
		size: '2 KB'
	},
	{
		title: 'Fee Challan (Term 1)',
		desc: 'Printable fee challan for offline payment at the school office or bank.',
		file: '/downloads/fee-challan.pdf',
		pages: '1 page',
		size: '2 KB'
	},
	{
		title: 'Transport Request Form',
		desc: 'Request a bus seat or change of route / stop — submit before the 10th of the month.',
		file: '/downloads/transport-form.pdf',
		pages: '1 page',
		size: '2 KB'
	},
	{
		title: 'Leave Application Form',
		desc: 'For planned leave of more than 2 days — parent signature mandatory.',
		file: '/downloads/leave-application.pdf',
		pages: '1 page',
		size: '2 KB'
	},
	{
		title: 'Bonafide Certificate Request',
		desc: 'Request a bonafide certificate for passport, bank or other official work.',
		file: '/downloads/bonafide-certificate.pdf',
		pages: '1 page',
		size: '2 KB'
	}
];

export const busRoutes = [
	{ route: 'Route 1', areas: 'Connaught Place — Barakhamba Road, Janpath, Mandi House', pickup: '7:00 AM', fee: '₹1,500 / month' },
	{ route: 'Route 2', areas: 'South Delhi — Lajpat Nagar, Greater Kailash, Saket', pickup: '6:30 AM', fee: '₹1,500 / month' },
	{ route: 'Route 3', areas: 'East Delhi — Mayur Vihar, Preet Vihar, Laxmi Nagar', pickup: '6:45 AM', fee: '₹1,500 / month' },
	{ route: 'Route 4', areas: 'West Delhi — Rajouri Garden, Janakpuri, Dwarka', pickup: '6:30 AM', fee: '₹1,500 / month' },
	{ route: 'Route 5', areas: 'North Delhi — Rohini, Pitampura, Model Town', pickup: '6:45 AM', fee: '₹1,500 / month' },
	{ route: 'Route 6', areas: 'Noida & Ghaziabad — Sector 62, Indirapuram, Vaishali', pickup: '6:30 AM', fee: '₹1,800 / month' }
];

export const generalFaqs = [
	{
		category: 'General',
		q: 'What are the school timings?',
		a: 'Classes run Monday to Saturday, 8:00 AM to 4:00 PM. Pre-Primary runs 8:30 AM to 12:30 PM. The school office is open 8:00 AM to 4:00 PM on working days.'
	},
	{
		category: 'General',
		q: 'Is the school CBSE affiliated?',
		a: 'Yes. Sunshine International School is affiliated to the Central Board of Secondary Education (CBSE), New Delhi — Affiliation No. 2730123 (Demo). Our Mandatory Disclosure page lists the affiliation letter and all statutory certificates.'
	},
	{
		category: 'Fees',
		q: 'What does the fee include?',
		a: 'Tuition fee covers academics, labs, library, sports and co-curricular activities. Transport (₹1,500/month) is optional. There is a one-time admission fee of ₹15,000 and a ₹500 registration fee. See the full fee structure on the Admissions page.'
	},
	{
		category: 'Fees',
		q: 'Is there a concession for siblings?',
		a: 'Yes — a 10% concession on tuition fee for the second sibling, and a 10% concession on the one-time admission fee for alumni wards.'
	},
	{
		category: 'Transport',
		q: 'Which areas do the school buses cover?',
		a: 'Our 18 GPS-enabled buses cover Delhi, Noida and Ghaziabad on 6 routes. Every bus has a trained driver and a lady attendant, and parents get live GPS tracking. See the Transport page for routes and timings.'
	},
	{
		category: 'Transport',
		q: 'Can I change my child’s bus route mid-year?',
		a: 'Yes. Submit the Transport Request Form (available on the Downloads page) before the 10th of the month. Route changes are confirmed subject to seat availability on the requested route.'
	},
	{
		category: 'Academics',
		q: 'Which streams are offered in Classes XI – XII?',
		a: 'Science (PCM / PCB), Commerce and Humanities. Competitive-exam mentoring is available for JEE, NEET, CUET and CA Foundation.'
	},
	{
		category: 'Academics',
		q: 'How are parents kept informed about progress?',
		a: 'Through the parent portal (attendance, marks, notices), Parent–Teacher Meetings every term, and the diary. Parents can also try the Parent Portal page for a demo of the dashboard.'
	}
];

export const extraTestimonials = [
	{
		quote:
			'My daughter joined in Nursery and now reads on her own in Class II. The teachers make learning feel like play — she asks to go to school on Sundays too!',
		name: 'Mrs. Kavita Jha',
		role: 'Parent, Class II'
	},
	{
		quote:
			'I joined Sunshine in Class IX. The board preparation here is serious but never stressful — weekly tests, doubt sessions, and teachers who actually listen.',
		name: 'Aarav Mehta',
		role: 'Student, Class X'
	},
	{
		quote:
			'The robotics club changed my life. We built our first line-follower robot in Class VIII, and today I am studying Computer Science at IIT Delhi.',
		name: 'Rohan Sethi',
		role: 'Alumnus, Batch of 2024'
	},
	{
		quote:
			'As a single parent, the office staff and teachers have always been supportive — fee reminders are gentle, and the bus attendant knows my son by name.',
		name: 'Mrs. Neha Singh',
		role: 'Parent, Class V'
	},
	{
		quote:
			'The campus tour sold it for us — smart classrooms, a real library, and teachers who knew every child by name. Two years on, we would choose it again.',
		name: 'Mr. & Mrs. Kapoor',
		role: 'Parents, Class VII'
	},
	{
		quote:
			'From the morning assembly song to the annual day stage, Sunshine gave my daughter confidence she never had before. The music programme is outstanding.',
		name: 'Mrs. Divya Nair',
		role: 'Parent, Class IV'
	}
];

export const newsItems = [
	{
		slug: 'summer-camp-2026-registrations-open',
		date: '20 MAY 2026',
		title: 'Summer Camp 2026 Registrations Open!',
		excerpt: 'Cricket, coding, music and art — four weeks of fun learning.',
		img: '/images/sports-students.webp',
		category: 'Events'
	},
	{
		slug: 'parent-teacher-meeting-may-2026',
		date: '15 MAY 2026',
		title: 'Parent-Teacher Meeting',
		excerpt: 'Saturday, 25 May 2026, 9 AM – 1 PM across all classes.',
		img: '/images/primary-classroom.webp',
		category: 'Parents'
	},
	{
		slug: 'admissions-open-2026-27',
		date: '10 MAY 2026',
		title: 'Admissions Open for 2026-27 Session',
		excerpt: 'Nursery to Class XII — apply online or visit the campus.',
		img: '/images/hero-students.webp',
		category: 'Admissions'
	},
	{
		slug: 'annual-sports-day-winners',
		date: '02 MAY 2026',
		title: 'Annual Sports Day Winners',
		excerpt: 'Red House lifts the overall championship trophy.',
		img: '/images/sports-students.webp',
		category: 'Sports'
	},
	{
		slug: 'science-exhibition-2026',
		date: '25 APR 2026',
		title: 'Science Exhibition 2026',
		excerpt: '120 student projects on display — parents welcome.',
		img: '/images/science-lab.jpg',
		category: 'Academics'
	},
	{
		slug: 'inter-school-debate-champions',
		date: '18 APR 2026',
		title: 'Inter-School Debate Champions',
		excerpt: 'SIS team wins the Delhi inter-school debate.',
		img: '/images/performing-arts.jpg',
		category: 'Achievements'
	}
];

export const newsBodies: Record<string, string[]> = {
	'summer-camp-2026-registrations-open': [
		'Sunshine International School’s Summer Camp 2026 opens registrations for four weeks of cricket, coding, music and art. The camp runs Monday to Friday, 8:00 AM to 12:00 PM, for students from Nursery to Class VIII.',
		'Children can pick two activities each week — from football and swimming to robotics, painting and classical dance. All sessions are led by the school’s own coaches and teachers, with a trained first-aider on campus at all times.',
		'Registrations close on 31 May 2026. Forms are available at the school office and through the enquiry form on the Admissions page. For any help, call the school office at +91 98765 43210 between 8:00 AM and 4:00 PM, Monday to Saturday.'
	],
	'parent-teacher-meeting-may-2026': [
		'The Term 1 Parent–Teacher Meeting will be held on Saturday, 25 May 2026, from 9:00 AM to 1:00 PM across all classes. Parents are requested to carry the student diary and the Term 1 report card.',
		'Each meeting slot is 10 minutes. Parents who need a longer discussion can book a separate appointment with the class teacher through the school office.',
		'The Principal will be available in the main office from 10:00 AM to 12:00 PM for parents who wish to discuss school-wide matters.'
	],
	'admissions-open-2026-27': [
		'Sunshine International School invites applications for Nursery to Class XII for the academic year 2026–27. Application forms are available at the school office and through the online enquiry form on the Admissions page.',
		'Admission to Nursery to Class V is through a friendly interaction with the child, while Classes VI to IX and XI have a simple written assessment in English, Mathematics and Science.',
		'Parents are encouraged to apply early — seats are limited in every class, and early applicants get priority for the interaction. For any help, call the admissions office at +91 98765 43210 between 8:00 AM and 4:00 PM, Monday to Saturday.'
	],
	'annual-sports-day-winners': [
		'Red House lifted the overall championship trophy at the Annual Sports Day 2026, finishing ahead of Blue House by 12 points after a full day of athletics, relays and house march-past.',
		'The day opened with the march-past and the lighting of the sports flame, followed by track finals, the inter-house tug of war, and the much-loved parents’ race.',
		'Principal Dr. Meera Kapoor congratulated all four houses: “Winning matters, but the way our children cheered for each other mattered more.”'
	],
	'science-exhibition-2026': [
		'120 student projects went on display at the Science Exhibition 2026 — from working rainwater-harvesting models to solar cookers, robotics demos and a human-body walkthrough built by Class VIII.',
		'Parents are welcome between 10:00 AM and 1:00 PM. The best projects from each wing will represent the school at the district-level National Science Exhibition.',
		'The school science club meets every Friday, and students from Classes VI to XII can join with a simple sign-up at the science lab.'
	],
	'inter-school-debate-champions': [
		'Sunshine International School’s debate team won the Delhi inter-school debate championship, defeating 24 schools in the final round on the motion “Artificial intelligence will do more good than harm”.',
		'The team — Aarav Mehta (Class X), Diya Kapoor (Class XI) and Kabir Singh (Class XII) — was coached by Mrs. Shalini Bhatt (PGT English). Aarav was named Best Speaker of the tournament.',
		'Principal Dr. Meera Kapoor said: “Debate teaches children to listen before they speak — that is the skill that will carry them furthest.”'
	]
};

// ---- Round 3 data: fees, facilities, tour, exams, scholarships, circulars,
// safety, e-learning, library, open day, timetables, admission stages.
// ALL demo/mock data for client presentation.
export const feeStructure = [
	{ stage: 'Pre-Primary', classes: 'Nursery – KG', tuition: 48000, admission: 15000, registration: 500, transport: 1500 },
	{ stage: 'Primary', classes: 'Classes I – V', tuition: 62000, admission: 15000, registration: 500, transport: 1500 },
	{ stage: 'Middle School', classes: 'Classes VI – VIII', tuition: 72000, admission: 15000, registration: 500, transport: 1500 },
	{ stage: 'High School', classes: 'Classes IX – X', tuition: 84000, admission: 15000, registration: 500, transport: 1500 },
	{ stage: 'Senior Secondary', classes: 'Classes XI – XII', tuition: 96000, admission: 15000, registration: 500, transport: 1500 }
];

export const feeInstalments = [
	{ term: 'Term 1', due: '10 April 2026', share: '40% of annual tuition', note: 'Payable at admission for new students' },
	{ term: 'Term 2', due: '10 August 2026', share: '30% of annual tuition', note: 'With transport fee for Aug – Nov' },
	{ term: 'Term 3', due: '10 December 2026', share: '30% of annual tuition', note: 'With transport fee for Dec – Mar' }
];

export const paymentOptions = [
	{ name: 'UPI', detail: 'Pay instantly with any UPI app — Google Pay, PhonePe, Paytm or BHIM.', icon: 'phone' },
	{ name: 'Credit / Debit Card', detail: 'Visa, Mastercard, RuPay and Amex accepted. No surcharge on school payments.', icon: 'calculator' },
	{ name: 'NetBanking', detail: 'All major banks supported through the parent portal fee section.', icon: 'laptop' },
	{ name: 'Cash / Cheque at Office', detail: 'Pay at the school accounts office (Mon – Sat, 8:00 AM – 4:00 PM).', icon: 'building' }
];

export const facilitiesList = [
	{ name: 'Smart Classrooms', icon: 'monitor', img: '/images/primary-classroom.webp', desc: '60 air-cooled smart classrooms with interactive panels, digital content and a 1:1 device programme for Classes VI–XII.' },
	{ name: 'Science Laboratories', icon: 'flask', img: '/images/science-lab.jpg', desc: 'Separate Physics, Chemistry and Biology labs for 10+ practical batches a week, with a dedicated lab assistant in every session.' },
	{ name: 'Computer Labs', icon: 'laptop', img: '/images/middle-school.jpg', desc: 'Two labs with 80 networked systems, a coding club and AI modules for Classes IX–XII.' },
	{ name: 'Library', icon: 'book', img: '/images/library.jpg', desc: '20,000+ books, a reading hall for 120 students, and a weekly library period for every class.' },
	{ name: 'Sports & Athletics', icon: 'trophy', img: '/images/sports-students.webp', desc: 'Football field, basketball court, cricket nets, athletics track and a morning fitness programme.' },
	{ name: 'Performing Arts', icon: 'music', img: '/images/performing-arts.jpg', desc: 'Music rooms, dance studio, a 800-seat auditorium and the annual day stage.' },
	{ name: 'Infirmary', icon: 'heart', img: '/images/campus-life.jpg', desc: 'A full-time nurse, a doctor on call, first-aid in every wing and a sick bay with 6 beds.' },
	{ name: 'Safe Transport', icon: 'bus', img: '/images/main-gate.webp', desc: '18 GPS-enabled buses with a trained driver and a lady attendant on every route.' }
];

export const tourStops = [
	{ name: 'The Main Gate', img: '/images/main-gate.webp', desc: 'A warm welcome at our 10-acre campus — security-checked entry and a shaded parent waiting lounge.' },
	{ name: 'Smart Classrooms', img: '/images/primary-classroom.webp', desc: 'See a live class in action: interactive panels, group seating and joyful, activity-based learning.' },
	{ name: 'Science Laboratories', img: '/images/science-lab.jpg', desc: 'Physics, Chemistry and Biology labs where every child experiments hands-on, twice a week.' },
	{ name: 'Library', img: '/images/library.jpg', desc: '20,000+ books, a reading hall and the reading programme that made us the “reading school” of the neighbourhood.' },
	{ name: 'Sports Field', img: '/images/sports-students.webp', desc: 'Football field, basketball court, cricket nets and the morning fitness programme.' },
	{ name: 'Auditorium', img: '/images/performing-arts.jpg', desc: 'Our 800-seat auditorium — home to the annual day, debates, concerts and the school orchestra.' }
];

export const examTables = [
	{
		band: 'Classes VI – VIII',
		pattern: 'Periodic Tests (20 marks) + Half-Yearly (80) + Annual (80). No detention policy as per CBSE.',
		rows: [
			{ exam: 'Periodic Test 1', dates: '03 – 08 Aug 2026', subjects: 'English, Hindi, Maths, Science, Social Science' },
			{ exam: 'Half-Yearly Examinations', dates: '12 – 21 Oct 2026', subjects: 'All subjects (syllabus: Apr – Sep)' },
			{ exam: 'Periodic Test 2', dates: '08 – 13 Feb 2027', subjects: 'English, Maths, Science, Social Science' },
			{ exam: 'Annual Examinations', dates: '15 Feb – 15 Mar 2027', subjects: 'All subjects (full syllabus)' }
		]
	},
	{
		band: 'Classes IX – X',
		pattern: 'CBSE pattern: Periodic Tests (5+5), Subject Enrichment (5), Portfolio (5), Annual Exam (80).',
		rows: [
			{ exam: 'Periodic Test 1', dates: '03 – 08 Aug 2026', subjects: 'English, Hindi, Maths, Science, Social Science' },
			{ exam: 'Half-Yearly Examinations', dates: '12 – 21 Oct 2026', subjects: 'All subjects (syllabus: Apr – Sep)' },
			{ exam: 'Periodic Test 2', dates: '01 – 06 Feb 2027', subjects: 'English, Maths, Science, Social Science' },
			{ exam: 'Pre-Board Examinations', dates: '01 – 10 Feb 2027', subjects: 'All subjects (full syllabus, Class X only)' },
			{ exam: 'Annual / Board Examinations', dates: 'From 15 Feb 2027', subjects: 'As per CBSE date sheet' }
		]
	},
	{
		band: 'Classes XI – XII',
		pattern: 'Unit Tests (20) + Half-Yearly (70 + practical) + Pre-Boards + CBSE Boards (70 + 30 practical).',
		rows: [
			{ exam: 'Unit Test 1', dates: '03 – 08 Aug 2026', subjects: 'Stream subjects (PCM / PCB / Commerce / Humanities)' },
			{ exam: 'Half-Yearly Examinations', dates: '12 – 21 Oct 2026', subjects: 'All subjects + practicals' },
			{ exam: 'Unit Test 2', dates: '01 – 06 Feb 2027', subjects: 'Stream subjects' },
			{ exam: 'Pre-Board Examinations', dates: '01 – 10 Feb 2027', subjects: 'All subjects (full syllabus, Class XII only)' },
			{ exam: 'Annual / Board Examinations', dates: 'From 15 Feb 2027', subjects: 'As per CBSE date sheet' }
		]
	}
];

export const scholarshipsList = [
	{ name: 'Merit Scholarship', icon: 'award', cover: 'Up to 50% tuition waiver', who: 'Top 3 rank holders in the Class X / XII board examinations and school toppers of Classes VI–IX.', how: 'Automatic — no separate application. Awarded at the Annual Day.' },
	{ name: 'Need-Based Scholarship', icon: 'heart', cover: '25% – 50% tuition waiver', who: 'Families with a household income below ₹6 lakh per year, with a strong academic record.', how: 'Apply with income proof and the previous year’s report card by 31 March.' },
	{ name: 'Sibling Scholarship', icon: 'users', cover: '10% tuition waiver (2nd child)', who: 'Families with two or more children studying at Sunshine at the same time.', how: 'Applied automatically once both children are enrolled.' },
	{ name: 'Sports & Arts Scholarship', icon: 'trophy', cover: '25% tuition waiver', who: 'Students who have represented the state or nation in a recognised sport, or won a national-level arts competition.', how: 'Apply with certificates and a trial / audition by 31 March.' }
];

export const circulars = [
	{ date: '12 Nov 2026', title: 'Admissions Open for Academic Year 2026–27', category: 'Admissions', file: '/downloads/circular-admissions-2026-27.pdf' },
	{ date: '10 Nov 2026', title: 'Half-Yearly Examination Date Sheet (Classes VI – XII)', category: 'Examinations', file: '/downloads/circular-half-yearly-datesheet.pdf' },
	{ date: '28 Oct 2026', title: 'Term 1 Fee Due Date — 10 November 2026', category: 'Fees', file: '/downloads/circular-fee-due-date.pdf' },
	{ date: '20 Oct 2026', title: 'Winter Uniform Compulsory from 01 December 2026', category: 'General', file: '/downloads/circular-winter-uniform.pdf' },
	{ date: '08 Oct 2026', title: 'Diwali Break: School Closed 24 Oct – 02 Nov 2026', category: 'Holiday', file: '/downloads/circular-diwali-break.pdf' },
	{ date: '01 Oct 2026', title: 'Annual Sports Day Trials Begin 18 November 2026', category: 'Sports', file: '/downloads/circular-sports-day-trials.pdf' }
];

export const safetyPoints = [
	{ name: 'CCTV Coverage', icon: 'eye', desc: '200+ CCTV cameras cover every corridor, classroom entrance, playground and bus bay. Footage is stored for 30 days and reviewed daily by the safety officer.' },
	{ name: 'Visitor Entry', icon: 'shield', desc: 'Every visitor is registered at the gate with a photo ID and a printed pass, and is escorted by a staff member. Parents use the parent ID card at pick-up.' },
	{ name: 'Bus Supervision', icon: 'bus', desc: 'Every bus has a trained driver and a lady attendant, GPS tracking for parents, and a first-aid kit. No child is dropped without a parent or guardian at the stop.' },
	{ name: 'Infirmary & First Aid', icon: 'heart', desc: 'A full-time nurse, a doctor on call, and a first-aider in every wing. The infirmary has 6 beds and an ambulance on standby during school hours.' },
	{ name: 'Fire & Emergency Drills', icon: 'alert-circle', desc: 'Fire drills every term, an evacuation plan displayed in every classroom, and fire-safety certification renewed annually.' },
	{ name: 'Anti-Bullying & Counselling', icon: 'users', desc: 'A trained counsellor, a student wellbeing committee, and a confidential reporting box in every wing. Every complaint is followed up within 24 hours.' }
];

export const eLearning = [
	{ name: 'DIKSHA (NCERT)', desc: 'NCERT textbooks, videos and practice questions for every class — free, by the Government of India.', href: 'https://diksha.gov.in', tag: 'NCERT' },
	{ name: 'Khan Academy', desc: 'Free maths, science and computing courses with practice exercises for Classes I–XII.', href: 'https://www.khanacademy.org', tag: 'Free' },
	{ name: 'NCERT e-Pathshala', desc: 'Official NCERT e-books, audio books and learning material for all subjects.', href: 'https://ncert.nic.in', tag: 'NCERT' },
	{ name: 'CBSE Academic', desc: 'CBSE curriculum, sample papers and exemplar material for board classes.', href: 'https://cbseacademic.nic.in', tag: 'CBSE' },
	{ name: 'Scratch — Learn to Code', desc: 'The coding platform our computer classes use for Classes III–VIII storytelling and games.', href: 'https://scratch.mit.edu', tag: 'Coding' },
	{ name: 'National Digital Library', desc: 'Free books, journals and lectures from IITs and leading Indian universities.', href: 'https://ndl.iitkgp.ac.in', tag: 'Library' }
];

export const libraryInfo = {
	timings: [
		{ who: 'Classes I – V', time: '8:30 AM – 1:00 PM (library periods)' },
		{ who: 'Classes VI – XII', time: '8:00 AM – 4:00 PM' },
		{ who: 'Reading hall', time: '8:00 AM – 4:00 PM, Monday to Saturday' }
	],
	highlights: [
		{ title: '20,000+ Books', desc: 'Fiction, non-fiction, reference, comics and magazines in English and Hindi.' },
		{ title: 'Reading Programme', desc: 'Every child reads one book a week — tracked in the reading diary and celebrated at assembly.' },
		{ title: 'Book Club', desc: 'The Sunbeam Book Club meets every Friday: reviews, author talks and the annual reading festival.' },
		{ title: 'Digital Corner', desc: '10 e-readers and a curated list of free e-books for every class.' }
	]
};

export const openDaySlots = [
	{ date: 'Saturday, 29 November 2026', slots: ['10:00 AM', '11:30 AM', '1:00 PM'] },
	{ date: 'Saturday, 06 December 2026', slots: ['10:00 AM', '11:30 AM', '1:00 PM'] },
	{ date: 'Saturday, 13 December 2026', slots: ['10:00 AM', '11:30 AM', '1:00 PM'] }
];

export const timetables = [
	{
		stage: 'Pre-Primary', classes: 'Nursery – KG', note: '8:30 AM – 12:30 PM · Play-way learning, no homework',
		periods: ['8:30 – 9:00  Assembly & Rhymes', '9:00 – 9:40  Language & Phonics', '9:40 – 10:20  Numbers & Play', '10:20 – 10:50  Snack & Story Time', '10:50 – 11:30  Art & Craft', '11:30 – 12:10  Outdoor Play', '12:10 – 12:30  Goodbye Circle']
	},
	{
		stage: 'Primary', classes: 'Classes I – V', note: '8:00 AM – 2:30 PM · 40-minute periods',
		periods: ['8:00 – 8:20  Assembly', '8:20 – 9:00  English', '9:00 – 9:40  Mathematics', '9:40 – 10:20  EVS / Science', '10:20 – 10:50  Break', '10:50 – 11:30  Hindi', '11:30 – 12:10  Computer / Art', '12:10 – 12:50  Sports / Music', '12:50 – 1:30  Library / Value Education', '1:30 – 2:30  Lunch & Diary']
	},
	{
		stage: 'Middle School', classes: 'Classes VI – VIII', note: '8:00 AM – 3:30 PM · 40-minute periods',
		periods: ['8:00 – 8:20  Assembly', '8:20 – 9:00  English', '9:00 – 9:40  Mathematics', '9:40 – 10:20  Science', '10:20 – 10:40  Break', '10:40 – 11:20  Social Science', '11:20 – 12:00  Hindi / Sanskrit', '12:00 – 12:40  Computer Science', '12:40 – 1:20  Lunch', '1:20 – 2:00  Art / Music / Dance', '2:00 – 2:40  Physical Education', '2:40 – 3:30  Activity Clubs']
	},
	{
		stage: 'High School', classes: 'Classes IX – X', note: '8:00 AM – 4:00 PM · 40-minute periods + remedial',
		periods: ['8:00 – 8:20  Assembly', '8:20 – 9:00  Mathematics', '9:00 – 9:40  Science', '9:40 – 10:20  English', '10:20 – 10:40  Break', '10:40 – 11:20  Social Science', '11:20 – 12:00  Hindi / Sanskrit', '12:00 – 12:40  Computer / AI', '12:40 – 1:20  Lunch', '1:20 – 2:00  Science Practical', '2:00 – 2:40  Physical Education', '2:40 – 3:30  Remedial / Doubt Session', '3:30 – 4:00  Diary & Dispersal']
	},
	{
		stage: 'Senior Secondary', classes: 'Classes XI – XII', note: '8:00 AM – 4:00 PM · Stream subjects + competitive mentoring',
		periods: ['8:00 – 8:20  Assembly', '8:20 – 9:00  Physics / Accountancy', '9:00 – 9:40  Chemistry / Business Studies', '9:40 – 10:20  Mathematics / Economics', '10:20 – 10:40  Break', '10:40 – 11:20  Biology / History', '11:20 – 12:00  English', '12:00 – 12:40  Informatics / Psychology', '12:40 – 1:20  Lunch', '1:20 – 2:00  Practical Labs', '2:00 – 2:40  Competitive Mentoring (JEE / NEET / CUET)', '2:40 – 3:30  Physical Education / Clubs', '3:30 – 4:00  Diary & Dispersal']
	}
];

export const admissionStages = [
	{
		slug: 'pre-primary', title: 'Pre-Primary', classes: 'Nursery – KG', icon: 'sparkles',
		age: 'Nursery: 3+ years · KG: 4+ years as on 31 March 2026',
		seats: '60 seats (2 sections of 30)',
		docs: ['Birth certificate (original + copy)', 'Aadhaar card of child and parents', '4 passport-size photographs', 'Address proof (electricity bill / Aadhaar)', 'Immunisation record'],
		process: ['Submit the online enquiry or collect the form from the school office.', 'Friendly interaction with the child — no formal test.', 'Offer letter within 5 working days of the interaction.', 'Document verification and fee payment to confirm the seat.'],
		feesNote: 'Tuition ₹48,000 / year · Admission ₹15,000 (one-time) · Registration ₹500'
	},
	{
		slug: 'primary', title: 'Primary School', classes: 'Classes I – V', icon: 'book',
		age: 'Class I: 5+ years as on 31 March 2026',
		seats: '120 seats across Classes I – V',
		docs: ['Birth certificate', 'Aadhaar card of child and parents', 'Previous school report card (for Classes II–V)', 'Transfer certificate (for Classes II–V)', '4 passport-size photographs', 'Address proof'],
		process: ['Submit the online enquiry or the application form.', 'Age-appropriate interaction — reading, numbers and a chat.', 'Offer letter within 5 working days.', 'Document verification and fee payment to confirm the seat.'],
		feesNote: 'Tuition ₹62,000 / year · Admission ₹15,000 (one-time) · Registration ₹500'
	},
	{
		slug: 'middle', title: 'Middle School', classes: 'Classes VI – VIII', icon: 'flask',
		age: 'Class VI: 10+ years as on 31 March 2026',
		seats: '90 seats across Classes VI – VIII',
		docs: ['Birth certificate', 'Aadhaar card of child and parents', 'Previous class report card', 'Transfer certificate', '4 passport-size photographs', 'Address proof'],
		process: ['Submit the online enquiry or the application form.', 'Written assessment in English, Mathematics and Science (60 minutes).', 'Interaction with the child and parents.', 'Offer letter and fee payment to confirm the seat.'],
		feesNote: 'Tuition ₹72,000 / year · Admission ₹15,000 (one-time) · Registration ₹500'
	},
	{
		slug: 'high', title: 'High School', classes: 'Classes IX – X', icon: 'gradcap',
		age: 'Class IX: 13+ years as on 31 March 2026',
		seats: '60 seats across Classes IX – X',
		docs: ['Birth certificate', 'Aadhaar card of child and parents', 'Class VIII report card', 'Transfer certificate', '4 passport-size photographs', 'Address proof'],
		process: ['Submit the online enquiry or the application form.', 'Written assessment in English, Mathematics and Science (90 minutes).', 'Interaction with the child and parents.', 'Offer letter and fee payment to confirm the seat.'],
		feesNote: 'Tuition ₹84,000 / year · Admission ₹15,000 (one-time) · Registration ₹500'
	},
	{
		slug: 'senior-secondary', title: 'Senior Secondary', classes: 'Classes XI – XII', icon: 'trophy',
		age: 'Class XI: 15+ years as on 31 March 2026 · Streams: Science (PCM / PCB), Commerce, Humanities',
		seats: '120 seats across 3 streams (40 per stream)',
		docs: ['Birth certificate', 'Aadhaar card of child and parents', 'Class X board marksheet', 'Transfer certificate', '4 passport-size photographs', 'Address proof', 'Migration certificate (for other boards)'],
		process: ['Submit the online enquiry or the application form.', 'Stream counselling with our counsellor and subject teachers.', 'Written assessment in stream subjects (90 minutes).', 'Offer letter and fee payment to confirm the seat.'],
		feesNote: 'Tuition ₹96,000 / year · Admission ₹15,000 (one-time) · Registration ₹500'
	}
];

export const demoStudents = [
	{ adm: 'SIS2026001', name: 'Aarav Verma', cls: 'Class VI – B', due: 28800, term: 'Term 2 (2026–27)', transport: 6000 },
	{ adm: 'SIS2026014', name: 'Diya Kapoor', cls: 'Class IX – A', due: 33600, term: 'Term 2 (2026–27)', transport: 6000 },
	{ adm: 'SIS2026027', name: 'Kabir Singh', cls: 'Class XI – Science', due: 38400, term: 'Term 2 (2026–27)', transport: 0 }
];

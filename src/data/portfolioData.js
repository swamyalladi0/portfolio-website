/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION FILE
 * ====================================================================
 * All personal details, project descriptions, skills, and links can
 * be updated directly in this file. Changes reflect instantly across
 * the entire website.
 * 
 * Replace the placeholders (e.g. [YOUR NAME], [YOUR EMAIL]) with
 * your personal information.
 * ====================================================================
 */

export const portfolioData = {
  // Personal Details
  personal: {
    name: "Swami",
    initials: "S",
    role: "Computer Science Engineering Graduate • 2026",
    subRole: "Aspiring Software Developer",
    graduationYear: "2026",
    eyebrow: "COMPUTER SCIENCE ENGINEERING • 2026",
    tagline: "I build digital experiences with code.",
    shortBio:
      "I’m a Computer Science Engineering graduate passionate about building practical software solutions and learning modern technologies. I enjoy working with Python, SQL, Java, and problem-solving.",
    aboutDescription:
      "I am a 2026 Computer Science Engineering graduate with a strong foundation in core software development, programming, databases, and building useful applications. Passionate about writing clean, maintainable code, dissecting complex problems into elegant logic, and continuously exploring modern engineering practices.",
    profilePhoto: "./src/assets/profile.jpg",
    resumeUrl: "./src/assets/resume.pdf",
    location: "[YOUR LOCATION]",
    email: "[YOUR EMAIL]",
    github: "https://github.com/swamyalladi0",
    linkedin: "https://linkedin.com/in/[YOUR-LINKEDIN]",
    status: "Available for Software Developer Opportunities",
  },

  // About Section Highlights / Telemetry Cards
  aboutHighlights: [
    {
      metric: "2026",
      label: "CSE Graduate",
      description: "Computer Science & Engineering background with solid fundamentals.",
      icon: "graduation-cap"
    },
    {
      metric: "Python",
      label: "Development",
      description: "Algorithm scripting, automation, logic design, and problem solving.",
      icon: "code"
    },
    {
      metric: "SQL",
      label: "Database",
      description: "Relational schema design, normalization, joins, and data queries.",
      icon: "database"
    },
    {
      metric: "Problem Solving",
      label: "Continuous Learning",
      description: "Focused on core data structures, OOP principles, and clean code.",
      icon: "cpu"
    }
  ],

  // Technologies I Work With
  // IMPORTANT: ONLY display technologies actually included in the project/content.
  techStack: [
    {
      category: "Programming",
      description: "Core languages for logic, algorithms, and application development.",
      skills: [
        {
          name: "Python",
          level: "Core Proficiency",
          description: "Data manipulation, logic design, control flows, loops, and OOP.",
          icon: "python"
        },
        {
          name: "Java",
          level: "Object-Oriented",
          description: "Classes, inheritance, polymorphism, encapsulation, and type safety.",
          icon: "java"
        }
      ]
    },
    {
      category: "Web",
      description: "Front-end structure, styling, and interactive scripting.",
      skills: [
        {
          name: "HTML",
          level: "Semantic Markup",
          description: "Accessible document structure, semantic tags, and standards.",
          icon: "html"
        },
        {
          name: "CSS",
          level: "Modern Styling",
          description: "Responsive layouts, Flexbox, Grid, CSS animations, and UI styling.",
          icon: "css"
        },
        {
          name: "JavaScript",
          level: "Client Scripting",
          description: "DOM manipulation, event handling, asynchronous logic, and ES6+.",
          icon: "javascript"
        }
      ]
    },
    {
      category: "Database",
      description: "Relational data modeling, querying, and schema management.",
      skills: [
        {
          name: "SQL",
          level: "Relational Queries",
          description: "Complex joins, aggregations, DDL/DML, constraints, and data analysis.",
          icon: "database"
        }
      ]
    },
    {
      category: "Core Concepts",
      description: "Fundamental engineering pillars underpinning software architecture.",
      skills: [
        {
          name: "OOP",
          level: "Object-Oriented Design",
          description: "Encapsulation, abstraction, inheritance, and modular reusability.",
          icon: "box"
        },
        {
          name: "DBMS",
          level: "Database Management",
          description: "Relational schemas, normalization, ACID properties, and integrity.",
          icon: "layers"
        },
        {
          name: "Data Structures",
          level: "Algorithmic Foundation",
          description: "Arrays, linked lists, stacks, queues, trees, and algorithmic complexity.",
          icon: "git-branch"
        }
      ]
    },
    {
      category: "Tools",
      description: "Version control and collaborative workflow systems.",
      skills: [
        {
          name: "Git",
          level: "Version Control",
          description: "Branching, committing, staging, history inspection, and merging.",
          icon: "git"
        },
        {
          name: "GitHub",
          level: "Code Repository",
          description: "Remote repositories, code hosting, version tracking, and documentation.",
          icon: "github"
        }
      ]
    }
  ],

  // Selected Projects
  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Number Guessing Game",
      tagline: "Python Logic & Interactive CLI Application",
      description:
        "A beginner-friendly Python project demonstrating user input, conditional logic, loops, and basic programming concepts.",
      techStack: ["Python", "Control Flow", "CLI"],
      codeUrl: "https://github.com/swamyalladi0/number-guessing-game",
      demoUrl: "#demo-guessing-game", // Triggers interactive in-browser terminal
      hasLiveDemo: true,
      visualType: "terminal",
      highlights: [
        "Dynamic secret number generation using pseudorandom entropy",
        "Input validation loop handling non-numeric edge cases gracefully",
        "Adaptive feedback system calculating distance to target (Hot / Cold / Too High / Too Low)",
        "Turn counter and score evaluation based on trial efficiency"
      ],
      codeSnippet: `import random

def play_guessing_game():
    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7
    
    print("=== QUANTUM NUMBER GUESSER ===")
    print("Range: [1 - 100] | Attempts: 7")
    
    while attempts < max_attempts:
        guess_input = input(f"Attempt {attempts + 1}/{max_attempts} > ")
        if not guess_input.isdigit():
            print("[WARN] Please enter a valid integer.")
            continue
            
        guess = int(guess_input)
        attempts += 1
        
        if guess == secret_number:
            print(f"[SUCCESS] Target unlocked in {attempts} attempts!")
            return True
        elif guess < secret_number:
            print(">> Target is HIGHER.")
        else:
            print(">> Target is LOWER.")
            
    print(f"[FAILED] Out of tries. Secret was {secret_number}.")
    return False

if __name__ == "__main__":
    play_guessing_game()`
    },
    {
      id: "project-2",
      number: "02",
      title: "SQL / Database Project",
      tagline: "Relational Healthcare Schema & Query Suite",
      description:
        "A collection of SQL queries and database exercises involving patients, doctors, hospitals, medicines, labs, appointments, and rooms.",
      techStack: ["SQL", "Database", "DBMS", "Schema Design"],
      codeUrl: "https://github.com/swamyalladi0/hospital-management-sql",
      demoUrl: "#demo-sql-explorer", // Triggers interactive Schema Visualizer
      hasLiveDemo: true,
      visualType: "database",
      highlights: [
        "Entity-Relationship model comprising Patients, Doctors, Hospitals, Appointments, Rooms, Labs, and Prescriptions",
        "Multi-table JOIN operations matching patients with doctors and designated hospital wards",
        "Aggregate analytical queries evaluating doctor workload, bed occupancy, and departmental metrics",
        "Integrity constraints, primary/foreign key cascading, and index optimizations"
      ],
      sampleQueries: [
        {
          name: "Doctor Appointment Schedule with Room & Ward Lookup",
          sql: `SELECT 
    a.appointment_id,
    p.patient_name,
    p.contact_number,
    d.doctor_name,
    d.specialization,
    h.hospital_name,
    r.room_number,
    r.room_type,
    a.scheduled_time,
    a.status
FROM appointments a
JOIN patients p ON a.patient_id = p.patient_id
JOIN doctors d ON a.doctor_id = d.doctor_id
JOIN hospitals h ON d.hospital_id = h.hospital_id
LEFT JOIN rooms r ON a.assigned_room_id = r.room_id
WHERE a.status = 'CONFIRMED'
ORDER BY a.scheduled_time ASC;`
        },
        {
          name: "Hospital Bed Occupancy & Department Utilization",
          sql: `SELECT 
    h.hospital_name,
    r.room_type,
    COUNT(r.room_id) AS total_rooms,
    SUM(CASE WHEN r.is_occupied = 1 THEN 1 ELSE 0 END) AS occupied_rooms,
    ROUND((SUM(CASE WHEN r.is_occupied = 1 THEN 1.0 ELSE 0.0 END) / COUNT(r.room_id)) * 100, 2) AS occupancy_rate
FROM hospitals h
JOIN rooms r ON h.hospital_id = r.hospital_id
GROUP BY h.hospital_name, r.room_type
ORDER BY occupancy_rate DESC;`
        }
      ]
    },
    {
      id: "project-3",
      number: "03",
      title: "[ADD MY PROJECT HERE]",
      tagline: "Upcoming Software Engineering Project",
      description:
        "Placeholder for your upcoming software or web application. Easily update the title, description, and links in portfolioData.js.",
      techStack: ["Python", "SQL", "Web"],
      codeUrl: "https://github.com/swamyalladi0/[PROJECT-REPO]",
      demoUrl: "https://[YOUR-DEMO-URL].com",
      hasLiveDemo: false,
      visualType: "code",
      highlights: [
        "Configurable slot for your third major course or personal project",
        "Seamless integration with GitHub repository links and live web deployments",
        "Matches the futuristic dark visual design language of the portfolio"
      ],
      codeSnippet: `// Configuration for Project 03 in src/data/portfolioData.js:
{
  number: "03",
  title: "Your Project Title",
  tagline: "Your Project Subtitle",
  description: "Detailed description of the problem solved and architecture...",
  techStack: ["Python", "SQL", "JavaScript"],
  codeUrl: "https://github.com/your-username/repo-name",
  demoUrl: "https://your-demo-link.com"
}`
    }
  ],

  // Education Section
  education: {
    year: "2026",
    degree: "Bachelor of Technology / Bachelor of Engineering",
    major: "Computer Science & Engineering",
    institution: "[COLLEGE NAME]",
    university: "[UNIVERSITY / AFFILIATION]",
    cgpa: "[CGPA]", // e.g. "8.6 / 10.0"
    status: "Graduating Batch 2026",
    location: "[COLLEGE LOCATION]",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies"
    ],
    timelineNotes: [
      "Focused on strong analytical problem solving and algorithmic reasoning.",
      "Comprehensive laboratory coursework in Python, Java, and SQL database management.",
      "Active participation in technical projects and continuous computer science learning."
    ]
  },

  // Resume Section
  resume: {
    heading: "Let's build something meaningful.",
    text: "Interested in working together or discussing an opportunity? Take a look at my resume or connect with me.",
    downloadFileName: "resume.pdf",
    filePath: "./src/assets/resume.pdf"
  },

  // Contact Information
  contact: {
    heading: "Let's Connect",
    subheading: "Have an opportunity, question, or looking to collaborate? Drop me a message below.",
    email: "[YOUR EMAIL]",
    github: "https://github.com/swamyalladi0",
    githubUsername: "@swamyalladi0",
    linkedin: "https://linkedin.com/in/[YOUR-LINKEDIN]",
    linkedinUsername: "in/[YOUR-LINKEDIN]",
    location: "[YOUR LOCATION]",
    availability: "Available for internships & full-time junior developer roles (2026)",
    note: "Response time: Typically within 24-48 hours."
  },

  // Footer Information
  footer: {
    quote: "Designed & built with curiosity.",
    copyright: "© 2026 Swami. All rights reserved.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" }
    ]
  }
};

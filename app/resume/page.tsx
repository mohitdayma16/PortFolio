import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-8 shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">MOHIT DAYMA</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" /> +91 7558410656
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" /> mohitdayma164@gmail.com
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2" /> mohitdayma16
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2" /> mohitdayma16
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> Nanded, Maharashtra, India
          </div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">PROFILE</h2>
        <p className="text-sm">
          A Computer Science student skilled in full-stack
          development and Android app development, with proficiency in Python, C++, Java, TypeScript, Kotlin,
          and Php. I aim to enhance my coding expertise and contribute to
          impactful software projects. With experience in tools like
          React, and NodeJS, I
          seek to apply my problem-solving skills to real-world challenges. I am
          eager to grow as a developer and contribute to meaningful,
          cutting-edge technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <div className="text-sm">
            <p className="font-medium">Lovely Professional University</p>
            <p>Jalandhar, Punjab | 2026</p>
            <p>CGPA: 6.97</p>
            <p>
              Relevant Coursework: Data Structures and Algorithms, Operating
              Systems, Database Management Systems, Artificial Intelligence,
              Computer Networks, Software Engineering
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Senior Secondary School Certificate (12th Grade)
          </h3>
          <div className="text-sm">
            <p className="font-medium">Shivaji jr College</p>
            <p>Nanded, Maharashtra | 2022</p>
            <p>Percentage: 72.5%</p>
            <p>
              Key Subjects: Physics, Chemistry, Mathematics, Computer Science
            </p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Secondary School Certificate (10th Grade)
          </h3>
          <div className="text-sm">
            <p className="font-medium">Little Scholars' Public School</p>
            <p>Nanded, Maharashtra | 2020</p>
            <p>Percentage: 88.80%</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">TECHNICAL SKILLS</h2>
        <ul className="list-disc list-inside text-sm">
          <li>
            <span className="font-medium">Programming Languages:</span> Python,
            C++, Java, TypeScript, Javascript, Kotlin
          </li>
          <li>
            <span className="font-medium">Frameworks & Technologies:</span> Figma,
            VScode, NodeJS, ExpressJS , Android Studio, Mysql, MERN,  Git & Github
          </li>
          <li>
            <span className="font-medium">Databases:</span> MySQL, MongoDB,
            Firebase
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Lead Management System</h3>
          <p className="text-sm font-medium">
          Tech: MERN stack & Rest API  
          </p>
          <p className="text-sm">
            Description:  Developed a Lead Management System to analyze event engagement  
            and optimize lead conversion. Retrieves participant registration data from the database and assigns  
            lead scores to events. Assigns scores based on user activity, interests, and past event  
            participation 
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Car-rental Console System</h3>
          <p className="text-sm font-medium">Tech: Java,MySql,Maven,JDBC</p>
          <p className="text-sm">
            Description: Implemented a secure and efficient car rental management system  
with role-based access control for users and administrators. 
Optimized database queries and indexing to enhance system  
performance and reduce booking processing time. 
Developed a robust error-handling mechanism to ensure smooth  
operation and prevent data inconsistencies
          </p>
        </div>
      </section>
    </div>
  );
}

import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3 sm:p-6 sm:pt-24 flex justify-center items-center pt-20">
      <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">Muhammad Arslan</h1>
          <p className="text-gray-600 mt-2">
            <a href="mailto:arslanakramsoftwareengineer@gmail.com" className="hover:text-blue-500">
              arslanakramsoftwareengineer@gmail.com
            </a>
          </p>
          <p className="text-gray-600">+92 306 5058102</p>
          <p className="text-gray-600">Lahore, Punjab, Pakistan</p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Programming Language</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>C++</li>
            <li>Basics of JavaScript</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Skills</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>OOP</li>
            <li>Data Structures</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>REACT</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Tools</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>VSCode</li>
            <li>MS Office</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Recent Projects</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Banking Management System (BMS) - Using Data Structures</li>
            <li>Campus Management System</li>
            <li>Todo App</li>
            <li>Rocket-site</li>
            <li>Battle Team Arena</li>
            <li>Lesson Planner</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Work Experience</h2>
          <p className="mt-2 text-gray-600">
            Currently, I am pursuing a Bachelor's degree in Computer Science at Minhaj University Lahore (MUL), where I've been honing my skills since December 2021.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Education</h2>
          <p className="mt-2 text-gray-600">Minhaj University Lahore – MUL</p>
          <p className="text-gray-600">Bachelor’s in Computer Science: Dec. 2021 – Continue</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Programming Fundamentals</li>
            <li>Object-Oriented Programming</li>
            <li>Data Structures</li>
            <li>Database</li>
            <li>Design and Analysis of Algorithm</li>
            <li>Computer Organization and Assembly Language (COAS)</li>
            <li>Digital Logic Design</li>
            <li>Computer Networks</li>
            <li>Life and Learning</li>
            <li>Professional Practices</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Games & Hobbies</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>PUBG</li>
            <li>Chess</li>
            <li>Book Reading</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-900">Languages</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>English</li>
            <li>Urdu</li>
            <li>Punjabi</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;


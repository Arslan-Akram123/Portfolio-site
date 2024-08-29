import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 flex justify-center pt-24 px-4">
      <div className="bg-white max-w-4xl w-full rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">About Me</h2>
        <p className="text-gray-800 leading-relaxed">
          Hello! I'm <span className="font-semibold text-blue-900">Muhammad Arslan</span>, a passionate and dedicated software developer from Lahore, Punjab, Pakistan. Currently, I am pursuing a Bachelor's degree in Computer Science at Minhaj University Lahore (MUL), where I've been honing my skills since December 2021.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-900">Programming Skills</h3>
          <p className="text-gray-800 leading-relaxed">
            I have a solid foundation in various programming languages and tools, including:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            <li>C++</li>
            <li>JavaScript (Basics)</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Data Structures</li>
            <li>HTML, CSS</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-900">React and Frontend Development</h3>
          <p className="text-gray-800 leading-relaxed">
            My recent focus has been on frontend development, particularly using React.js. I have developed various web applications, including a <span className="font-semibold text-blue-900">Todo App</span> and a <span className="font-semibold text-blue-900">Rocket-site</span>, leveraging React's component-based architecture to create dynamic and responsive user interfaces.
          </p>
          <p className="text-gray-800 leading-relaxed mt-2">
            I am well-versed in using React hooks, state management, and integrating APIs to build interactive applications. I also have experience with modern tools and libraries like Tailwind CSS, making my projects visually appealing and responsive.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-900">Education</h3>
          <p className="text-gray-800 leading-relaxed">
            I am currently enrolled in a Bachelor's program in Computer Science at Minhaj University Lahore (MUL). My coursework includes Programming Fundamentals, Object-Oriented Programming, Data Structures, Database Management, and more, providing a comprehensive understanding of both theoretical and practical aspects of computer science.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-900">Hobbies and Interests</h3>
          <p className="text-gray-800 leading-relaxed">
            Beyond coding, I enjoy playing <span className="font-semibold text-blue-900">PUBG</span> and <span className="font-semibold text-blue-900">Chess</span>, which help sharpen my strategic thinking. I am also an avid reader, always eager to explore new ideas and expand my knowledge.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-900">Languages</h3>
          <p className="text-gray-800 leading-relaxed">
            I am fluent in <span className="font-semibold text-blue-900">English</span>, <span className="font-semibold text-blue-900">Urdu</span>, and <span className="font-semibold text-blue-900">Punjabi</span>, allowing me to communicate effectively with a diverse audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


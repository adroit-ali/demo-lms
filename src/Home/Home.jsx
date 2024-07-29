import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero-section">
          <h1>Welcome to Our Learning Management System</h1>
          <p>A brief welcome message or tagline that conveys the purpose and value of the LMS.</p>
          <div className="cta-buttons">
            <button>Sign Up</button>
            <button>Login</button>
            <button>Explore Courses</button>
          </div>
        </section>

        <section className="featured-courses">
          <h2>Featured Courses</h2>
          <div className="course">
            <img src="course1.jpg" alt="Course 1" />
            <h3>Course Title 1</h3>
            <p>Brief description of Course 1.</p>
            <a href="#">Learn More</a>
          </div>
          <div className="course">
            <img src="course2.jpg" alt="Course 2" />
            <h3>Course Title 2</h3>
            <p>Brief description of Course 2.</p>
            <a href="#">Learn More</a>
          </div>
          <div className="course">
            <img src="course3.jpg" alt="Course 3" />
            <h3>Course Title 3</h3>
            <p>Brief description of Course 3.</p>
            <a href="#">Learn More</a>
          </div>
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <p>A short description of the LMS platform, its mission, and what it aims to achieve.</p>
          <ul>
            <li>Key feature 1</li>
            <li>Key feature 2</li>
            <li>Key feature 3</li>
          </ul>
        </section>

        <section className="student-testimonials">
          <h2>Student Testimonials</h2>
          <blockquote>
            <p>Quote or short story from a student.</p>
            <cite>- Student Name</cite>
          </blockquote>
          <blockquote>
            <p>Another quote or short story from a student.</p>
            <cite>- Student Name</cite>
          </blockquote>
        </section>

        <section className="course-categories">
          <h2>Course Categories</h2>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events/Announcements</h2>
          <div className="event">
            <h3>Webinar Title</h3>
            <p>Information about the webinar.</p>
          </div>
          <div className="event">
            <h3>Workshop Title</h3>
            <p>Information about the workshop.</p>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <p>A step-by-step guide or video on how to use the LMS, from signing up to enrolling in courses.</p>
        </section>

        <section className="instructor-spotlight">
          <h2>Instructor Spotlight</h2>
          <div className="instructor">
            <img src="instructor1.jpg" alt="Instructor 1" />
            <h3>Instructor Name 1</h3>
            <p>Brief bio of Instructor 1.</p>
            <a href="#">View Courses</a>
          </div>
          <div className="instructor">
            <img src="instructor2.jpg" alt="Instructor 2" />
            <h3>Instructor Name 2</h3>
            <p>Brief bio of Instructor 2.</p>
            <a href="#">View Courses</a>
          </div>
        </section>

        <section className="latest-blogs">
          <h2>Latest Blog Posts/Resources</h2>
          <div className="blog-post">
            <h3>Blog Post Title</h3>
            <p>Brief description of the blog post.</p>
            <a href="#">Read More</a>
          </div>
          <div className="blog-post">
            <h3>Blog Post Title</h3>
            <p>Brief description of the blog post.</p>
            <a href="#">Read More</a>
          </div>
        </section>

        <section className="contact-information">
          <h2>Contact Information</h2>
          <p>Links to support resources, FAQs, and a contact form for further assistance.</p>
        </section>
      </div>
    );
  }
}

export default Home;

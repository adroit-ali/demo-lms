// src/LandingPage/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="bg-dark text-white text-center py-5">
        <Container>
          <h1 className="display-3">Welcome to Our LMS</h1>
          <p className="lead">Your gateway to a brighter future.</p>
          <Link to="/home" className="btn btn-primary btn-lg">Get Started</Link>
        </Container>
      </header>
      <section className="py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h2>Courses</h2>
              <p>Browse our extensive catalog of courses and find the right one for you.</p>
              <Link to="/courses" className="btn btn-secondary">View Courses</Link>
            </Col>
            <Col md={4}>
              <h2>Students</h2>
              <p>Join our community of learners and start your educational journey today.</p>
              <Link to="/students" className="btn btn-secondary">Meet Our Students</Link>
            </Col>
            <Col md={4}>
              <h2>Lecturers</h2>
              <p>Learn from the best educators and industry experts.</p>
              <Link to="/lecturers" className="btn btn-secondary">Our Lecturers</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

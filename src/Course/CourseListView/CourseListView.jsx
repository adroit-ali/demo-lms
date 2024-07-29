import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

import { PageLoader } from '../../framework/ui';
import CourseCard from '../CourseCard/CourseCard';


export default class CourseListView extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      courses: [],
    };
  }

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.setState({ isLoading: true });
    // axios.get('/api/courses').then((response) => {
    // this.setState({ courses: response.data, isLoading: false });
    // });
    const data = [
      { id: 23, title: 'woo', fee: 300, maxStudent: 5, description: 'Many more desc' },
      { id: 25, title: 'woo', fee: 300, maxStudent: 5, description: 'Many more desc' },
      { id: 26, title: 'woo', fee: 300, maxStudent: 5, description: 'Many more desc' },
      { id: 27, title: 'woo', fee: 300, maxStudent: 5, description: 'Many more desc' },
      { id: 28, title: 'woo', fee: 300, maxStudent: 5, description: 'Many more desc' },
      { id: 29, title: 'woo', fee: 300, maxStudent: 5, description: 'Many more desc' },
    ];
    this.setState({ courses: data, isLoading: false });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <PageLoader />}
        {!this.state.isLoading && (
          <div>
            <h1 className="ui header">Courses</h1>
            <Link to="/courses/create" className="ui teal button">Add course</Link>
            <div className="ui divider" />
            <div className="ui cards">
              {this.state.courses.map(course => <CourseCard course={course} key={course.id} />)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

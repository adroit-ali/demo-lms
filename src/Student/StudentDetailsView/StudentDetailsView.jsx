import React from 'react';
// import axios from 'axios';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import { Segment, Loader, Message, Button, Confirm } from '../../framework/ui';
// import { statusCodeToError } from '../../framework/utils';

function createNewStudent() {
  return {
    fullName: '',
    gender: 'Male',
    dateOfBirth: '1999-01-01',
    email: '',
    credit: 0,
  };
}

class StudentDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isEditing: false,
      isSaving: false,
      isDeleting: false,
      showConfirmDelete: false,
      showSuccess: false,
      showError: false,
      error: '',
      student: null,
    };
  }

  componentDidMount() {
    this.fetchStudent();
  }

  fetchStudent() {
    const { id } = this.props.match.params;
    if (id === 'create') {
      this.setState({ student: createNewStudent(), isEditing: true });
      return;
    }

    this.setState({ isLoading: true, error: '' });
    const data = { id: 23, fullName: 'Leo mna', email: 'abc@test.com', gender: 'male', dateOfBirth: 'Many more desc', credit: 24 };
    this.setState({
      student: {
        ...data,
        firstName: data.fullName.split(' ')[0],
        lastName: data.fullName.split(' ')[1],
      },
      isLoading: false,
    });
    // const onSuccess = (response) => {
    //   this.setState({
    //     student: {
    //       ...response.data,
    //       firstName: response.data.fullName.split(' ')[0],
    //       lastName: response.data.fullName.split(' ')[1],
    //     },
    //     isLoading: false,
    //   });
    // };
    // const onError = (error) => {
    //   this.setState({
    //     student: null,
    //     error: statusCodeToError(error.response.status),
    //     showError: true,
    //     isLoading: false,
    //   });
    // };
    // axios.get(`/api/students/${id}`).then(onSuccess).catch(onError);
  }

  handleFieldChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      student: {
        ...this.state.student,
        [name]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submit ho gya');
    this.setState({ isSaving: true, showSuccess: false, showError: false });
    this.setState({ isSaving: false, showSuccess: false, showError: false });
    // const { student } = this.state;
    // const onSuccess = () => {
    //   this.setState({ isSaving: false, showSuccess: true });
    // };
    // const onError = (error) => {
    //   this.setState({
    //     isSaving: false,
    //     showError: true,
    //     error: `${error.response.statusText} (${error.response.status})`,
    //   });
    // };
    // if (this.props.match.params.id === 'create') {
    //   axios.post('/api/students', student)
    //     .then(onSuccess)
    //     .catch(onError);
    // } else {
    //   axios.put(`/api/students/${student.id}`, student)
    //     .then(onSuccess)
    //     .catch(onError);
    // }
  }

  handleCancel() {
    this.props.history.push('/students');
  }

  showConfirmDelete() {
    this.setState({ showConfirmDelete: true });
  }

  closeConfirmDelete() {
    this.setState({ showConfirmDelete: false });
  }

  handleDelete() {
    this.setState({ isDeleting: true });
    this.closeConfirmDelete();
    this.setState({ isDeleting: false });
    // axios.delete(`/api/students/${this.state.student.id}`).then(() => {
    //   this.setState({ isDeleting: false });
    //   this.closeConfirmDelete();
    //   this.props.history.push('/students');
    // }).catch((error) => {
    //   this.setState({
    //     isDeleting: false,
    //     showError: true,
    //     error: `${error.response.statusText} (${error.response.status})`,
    //   });
    // });
  }

  render() {
    const student = this.state.student || createNewStudent();

    return (
      <div>
        <Segment style={{ width: 600, margin: '0 auto' }}>
          {this.state.showSuccess && (
            <Message header="Success!" type="success">
              <p>All changes have been saved</p>
            </Message>
          )}
          {this.state.showError && (
            <Message header="Oops!" type="negative">
              <p>{this.state.error}</p>
            </Message>
          )}
          <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <h4 className="ui dividing header">
              <span style={{ marginRight: 10 }}>Student Details</span>
              {this.props.match.params.id !== 'create' && (
                <Button
                  danger
                  onClick={this.showConfirmDelete.bind(this)}
                  loading={this.state.isDeleting}
                >
                  Delete
                </Button>
              )}
            </h4>
            <div className="fields">
              <div className="eight wide field">
                <label>First name</label>
                <input type="text" name="firstName" value={student.firstName} onChange={this.handleFieldChange.bind(this)} placeholder="First name" />
              </div>
              <div className="eight wide field">
                <label>Last name</label>
                <input type="text" name="lastName" value={student.lastName} onChange={this.handleFieldChange.bind(this)} placeholder="Last name" />
              </div>
            </div>
            <div className="fields">
              <div className="eight wide field">
                <label>Email</label>
                <input type="email" name="email" value={student.email} onChange={this.handleFieldChange.bind(this)} placeholder="Email" />
              </div>
              <div className="eight wide field">
                <label>Date of birth</label>
                <input type="text" name="dateOfBirth" value={student.dateOfBirth} onChange={this.handleFieldChange.bind(this)} placeholder="YYYY-MM-DD" />
              </div>
            </div>
            <div className="fields">
              <div className="five wide field">
                <label>Gender</label>
                <select name="gender" value={student.gender} className="ui fluid dropdown" onChange={this.handleFieldChange.bind(this)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="five wide field">
                <label>Credit</label>
                <select name="credit" value={student.credit} className="ui fluid dropdown" onChange={this.handleFieldChange.bind(this)}>
                  <option value="16">16</option>
                  <option value="24">24</option>
                  <option value="32">32</option>
                </select>
              </div>
            </div>
            <button
              className={classnames('ui teal button', { loading: this.state.isSaving })}
              type="submit"
              disabled={this.state.isSaving}
            >
              Save changes
            </button>
            <button className="ui button" type="button" onClick={this.handleCancel.bind(this)}>
              Cancel
            </button>
          </form>
          {this.state.isLoading && <Loader />}
        </Segment>
        <Confirm
          show={this.state.showConfirmDelete}
          onApprove={this.handleDelete.bind(this)}
          onClose={this.closeConfirmDelete.bind(this)}
          header="Confirm deleting student"
        >
          This is action is irrevocable. Are you sure you want to continue?
        </Confirm>
      </div>
    );
  }
}

export default withRouter(StudentDetailsView);

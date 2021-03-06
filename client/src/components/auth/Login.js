import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChangeEmail = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  handleChangePassword = e => {
    const password = e.target.value;
    this.setState({ password });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    this.props.dispatch(
      login(user, () => {
        this.props.history.push('/dashboard');
        console.log('Login was succesful');
      })
    );
  };

  renderErrorMessage = () => {
    if (this.props.errorMessage) {
      return <p className="help is-danger">{this.props.errorMessage}</p>;
    }
    return <p />;
  };

  render() {
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="title">Log In</h1>

            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="email"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleChangeEmail}
                    className="input is-medium"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.handleChangePassword}
                    className="input is-medium"
                  />
                </div>
                {this.renderErrorMessage()}
              </div>

              <div className="field">
                <div className="control">
                  <input
                    type="submit"
                    value="Login"
                    className="button is-primary is-medium"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default connect(mapStateToProps)(Login);

import React, { Component } from 'react'
import firebase from 'firebase'
import './SignUpForm.css'

class SignUpForm extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({ user })
        )
    }

    handleSubmit = event => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(
            this.props.email,
            this.props.password
        )
    }

    logIn = event => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(
            this.props.email,
            this.props.password
        )
    }

    signOut = (event) => {
        event.preventDefault()
        firebase.auth().signOut()
    }

    render() {
        return (
            <div className={`sign-up-form ${this.props.user && 'sign-up-form--hidden'}`}>
              <span
              className="title-form-span">
                nudzi ci się?
              </span>
                {!this.props.user &&
                <form onSubmit={this.handleSubmit}>
                    <label
                        htmlFor="e-mail"
                        className="form-label"
                    >
                        <span
                          className="form-span">
                          E-mail:
                        </span>
                        <input
                            className="form-input"
                            name="e-mail"
                            type="text"
                            value={this.props.email}
                            onChange={event => this.setState({
                                email: event.target.value
                            })}
                        />
                    </label>
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        <span
                        className="form-span">
                          Hasło:
                        </span>
                        <input
                            className="form-input"
                            name="password"
                            type="password"
                            value={this.props.password}
                            onChange={event => this.setState({
                                password: event.target.value
                            })}
                        />
                    </label>
                    <button
                        onClick={this.handleSubmit}
                        className="form-button"
                    >
                        Stwórz konto
                    </button>
                    <button
                        onClick={this.logIn}
                        className="form-button"
                    >
                        Zaloguj się
                    </button>
                </form>}
            </div>
        )
    }
}

export default SignUpForm

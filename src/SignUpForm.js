import React, { Component } from 'react'
import firebase from 'firebase'
import './SignUpForm.css'

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        user: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({ user })
        )
    }

    handleSubmit = event => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
    }

    signOut = (event) => {
        event.preventDefault()
        firebase.auth().signOut()
    }

    render() {
        return (
            this.state.user ?
                <div>
                    <p>Hello {this.state.user.email}</p>
                    <button onClick={this.signOut}>Log Out</button>
                </div>
                 :
                <form onSubmit={this.handleSubmit}>
                    <label
                        htmlFor="e-mail"
                        className="form-label"
                    >
                        <span>E-mail</span>
                    <input
                        className="form-input"
                        name="e-mail"
                        type="text"
                        placeholder="e-mail"
                        value={this.state.email}
                        onChange={event => this.setState({
                            email: event.target.value
                        })}
                    />
                    </label>
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        <span>Hasło</span>
                    <input
                        className="form-input"
                        name="password"
                        type="password"
                        placeholder="hasło"
                        value={this.state.password}
                        onChange={event => this.setState({
                            password: event.target.value
                        })}
                    />
                    </label>
                    <button
                        className="form-button"
                    >
                        Zaloguj się
                    </button>
                </form>
        )
    }
}

export default SignUpForm

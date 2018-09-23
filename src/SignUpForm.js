import React, { Component } from 'react'
import firebase from 'firebase'

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

    render() {
        return (
            this.state.user ?
                <p>Hello {this.state.user.email}</p> :
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="e-mail"
                        value={this.state.email}
                        onChange={event => this.setState({
                            email: event.target.value
                        })}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={event => this.setState({
                            password: event.target.value
                        })}
                    />
                    <button>Sign up</button>
                </form>
        )
    }
}

export default SignUpForm

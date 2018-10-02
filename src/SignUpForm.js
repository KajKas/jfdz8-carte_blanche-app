import React, {Component} from 'react'
import firebase from 'firebase'
import './SignUpForm.css'

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        const {createAccount, logIn} = this.props

        return (
            <div className={'sign-up-form'}>
              <span
                  className="title-form-span">
                nudzi ci się?
              </span>
                <form>
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
                        <span
                            className="form-span">
                          Hasło:
                        </span>
                        <input
                            className="form-input"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={event => this.setState({
                                password: event.target.value
                            })}
                        />
                    </label>
                    <button
                        onClick={(e) => createAccount(e, this.state.email, this.state.password)}
                        className="form-button"
                    >
                        Stwórz konto
                    </button>
                    <button
                        onClick={(e) => logIn(e, this.state.email, this.state.password)}
                        className="form-button"
                    >
                        Zaloguj się
                    </button>
                </form>
            </div>
        )
    }
}

export default SignUpForm

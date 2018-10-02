import React from 'react'
import SignUpForm from './SignUpForm'

const Home = ({user, createAccount, logIn}) => (
    <div>
        {
            !user && <SignUpForm
                createAccount={createAccount}
                logIn={logIn}
            />
        }
    </div>
)

export default Home

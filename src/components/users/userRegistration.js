import React from 'react' 
import {connect} from 'react-redux' 
import {startRegisterUser} from '../../actions/userAction' 

class UserRegistration extends React.Component {
    constructor() {
        super()
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        const redirect = () => {
            return this.props.history.push('/login')
        }
        this.props.dispatch(startRegisterUser({formData, redirect}))
    }
    render (){
        return (
            <div> 
                <form onSubmit ={this.handleSubmit}>
                    <div>
                        <label htmlFor="username"> Username </label>
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/> 
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(UserRegistration) 

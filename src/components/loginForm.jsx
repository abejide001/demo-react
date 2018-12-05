import React, { Component } from 'react';
import Input from './common/input'
class Login extends Component {
    state = {
      account: {
        email: '',
        password: ''
      },
      errors: {}
    }
    handleChange = e => {
      const account = {...this.state.account}
      account[e.currentTarget.name] = e.currentTarget.value
      this.setState({account})
    }
    validate = () => {
        const errors = {}
        if (this.state.account.email.trim() === '') {
            errors.email = 'Email is required'
        }
        if (this.state.account.password.trim() === '') {
            errors.password = 'Password is required'
        }
        return Object.keys(errors).length === 0 ? null : errors
    }
    handleFormSubmit = e => {
      e.preventDefault();
      const errors = this.validate();
      this.setState({errors: errors || {}})
      if (errors) return      
      console.log('submitted')
    }
   
    render() {
        const { account, errors } = this.state;
        return (
            <div>
            <h1>Login</h1>
             <form onSubmit={this.handleFormSubmit}>
             <Input error={errors.email} name="email" value={account.email} onChange={this.handleChange} type="text"/>
             <Input error={errors.password} name="password" value={account.password} onChange={this.handleChange} type="text"/>
               <button type="submit" className="btn btn-success">Login</button>
             </form>
            </div>
        );
    }
}

export default Login;

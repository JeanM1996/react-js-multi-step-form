import React, { Component } from 'react';
import Email from './Email';
import Password from './Password';
import Name from './Name';
import Postcode from './Postcode';
import Steps from './Steps';
import Confirmation from './Confirmation';

class Registration extends Component {

    constructor(){
        super()
        this.state = {
            step: 1,
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            confirm: '',
            confirmError: '',
            forename: '',
            forenameError: '',
            surname: '',
            surnameError: '',
            username: '',
            usernameError: '',
            country: '',
            countryError: '',
            postcode: '',
            postcodeError: '',
            terms: false,
            termsError: ''
        }
    }

    validate = () => {
        let isError = false;
        const errors = {
            emailError: '',
            passwordError: '',
            confirmError: '',
            forenameError: '',
            surnameError: '',
            usernameError: '',
            termsError: ''
        }

        if(this.state.email.indexOf('@') === -1){
            isError = true;
            errors.emailError = 'Please enter a valid email address';
        }

        if(this.state.step > 1){
            if(this.state.password.length < 4){
                isError = true;
                errors.passwordError = 'Password must be at least 4 characters long';
            }

            if(this.state.password !== this.state.confirm){
                isError = true;
                errors.confirmError = 'Passwords must match';
            }
        }

        if(this.state.step > 2){
            if(this.state.forename.length < 1){
                isError = true;
                errors.forenameError = 'Forename cannot be blank';
            }

            if(this.state.surname.length < 1){
                isError = true;
                errors.surnameError = 'Surname cannot be blank';
            }

            if(this.state.username.length < 1){
                isError = true;
                errors.usernameError = 'Username cannot be blank';
            }
        }

        if(this.state.step > 3){
            if(this.state.terms === false){
                isError = true;
                errors.termsError = 'Please accept the Terms and Conditions by ticking the checkbox';
            }
        }

        this.setState({
            ...this.state,
            ...errors
        })

        return isError;
    }

    next(){
        const err = this.validate()
        if(!err){
            this.setState({
                step:this.state.step + 1,
                emailError: '',
                passwordError: '',
                confirmError: '',
                forenameError: '',
                surnameError: '',
                usernameError: '',
                termsError: ''
            })
        }
    }

    prev(){
        const err = this.validate()
        if(!err){
            this.setState({step:this.state.step - 1})
        }
    }

    handleOnChange(e){
        this.setState({[e.target.id]: e.target.value})
    }

    handleOnCheck(e){
        this.setState({[e.target.id]: !this.state.terms})
    }

    render() {
      switch (this.state.step) {
          case 1:
            return <div>
                <Steps step={this.state.step}/>
                <Email
                   email={this.state.email}
                   emailError={this.state.emailError}
                   onChange={this.handleOnChange.bind(this)}
                   next={this.next.bind(this)}/>
                </div>
          case 2:
            return <div>
                <Steps step={this.state.step}/>
                <Password
                   password={this.state.password}
                   confirm={this.state.confirm}
                   passwordError={this.state.passwordError}
                   confirmError={this.state.confirmError}
                   onChange={this.handleOnChange.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 3:
            return <div>
                <Steps step={this.state.step}/>
                <Name
                   forename={this.state.forename}
                   surname={this.state.surname}
                   username={this.state.username}
                   forenameError={this.state.forenameError}
                   surnameError={this.state.surnameError}
                   usernameError={this.state.usernameError}
                   onChange={this.handleOnChange.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 4:
            return <div>
                <Steps step={this.state.step}/>
                <Postcode
                   country={this.state.country}
                   postcode={this.state.postcode}
                   terms={this.state.terms}
                   termsError={this.state.termsError}
                   onChange={this.handleOnChange.bind(this)}
                   onCheck={this.handleOnCheck.bind(this)}
                   next={this.next.bind(this)}
                   prev={this.prev.bind(this)}/>
                </div>
          case 5:
            return <Confirmation />
          default:
            return null
        }
    }
}

export default Registration;

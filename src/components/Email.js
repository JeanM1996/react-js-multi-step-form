import React, { Component } from 'react';

class Email extends Component {

    render() {
        return (
            <div className="form-card">
                <div className="form-group">
                    <label>Email</label>
                    <span className="pull-right text-danger"><small>{this.props.emailError}</small></span>
                    <input className="form-control"
                           type="text"
                           id="email"
                           value={this.props.email}
                           onChange={this.props.onChange}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-success"
                            onClick={this.props.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default Email;

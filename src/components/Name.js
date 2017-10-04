import React, { Component } from 'react';

class Name extends Component {

    render() {
        return (
            <div className="form-card">
                <div className="form-group">
                    <label>Forename</label>
                    <span className="pull-right text-danger"><small>{this.props.forenameError}</small></span>
                    <input className="form-control"
                           type="text"
                           id="forename"
                           value={this.props.forename}
                           onChange={this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label>Surname</label>
                    <span className="pull-right text-danger"><small>{this.props.surnameError}</small></span>
                    <input className="form-control"
                           type="text"
                           id="surname"
                           value={this.props.surname}
                           onChange={this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <span className="pull-right text-danger"><small>{this.props.usernameError}</small></span>
                    <input className="form-control"
                           type="text"
                           id="username"
                           value={this.props.username}
                           onChange={this.props.onChange}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-danger"
                            onClick={this.props.prev}>Prev</button>
                    <button className="btn btn-success"
                            onClick={this.props.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default Name;

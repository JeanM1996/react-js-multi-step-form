import React, { Component } from 'react';

class Password extends Component {

    render() {
        return (
            <div className="form-card">
                <div className="form-group">
                    <label>Password</label>
                    <span className="pull-right text-danger"><small>{this.props.passwordError}</small></span>
                    <input className="form-control"
                           type="password"
                           id="password"
                           value={this.props.password}
                           onChange={this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <span className="pull-right text-danger"><small>{this.props.confirmError}</small></span>
                    <input className="form-control"
                           type="password"
                           id="confirm"
                           value={this.props.confirm}
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

export default Password;

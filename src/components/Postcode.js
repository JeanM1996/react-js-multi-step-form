import React, { Component } from 'react';

class Postcode extends Component {

    render() {
        return (
            <div className="form-card">
                <div className="form-group">
                    <label>Country</label>
                    <input className="form-control"
                           type="text"
                           id="country"
                           value={this.props.country}
                           onChange={this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label>Postcode</label>
                    <input className="form-control"
                           type="text"
                           id="postcode"
                           value={this.props.postcode}
                           onChange={this.props.onChange}/>
                </div>

                <div className="form-group">
                    <label>Terms and Conditions</label>
                    <input className="form-check-input"
                           type="checkbox"
                           id="terms"
                           checked={this.props.terms}
                           onChange={this.props.onCheck}/>
                    <span className="pull-right text-danger"><small>{this.props.termsError}</small></span>
                </div>

                <div className="form-group">
                    <button className="btn btn-danger"
                            onClick={this.props.prev}>Prev</button>
                    <button className="btn btn-success"
                            onClick={this.props.next}>Register</button>
                </div>
            </div>
        )
    }
}

export default Postcode;

import React, { Component } from 'react';

class Steps extends Component {

    render() {
        return (
            <div className="row form-steps">
                <div className={"col-xs-3 " + (this.props.step > 0 ? 'active' : '')}>
                    <i className="fa fa-at" aria-hidden="true"></i><br/>Email</div>
                <div className={"col-xs-3 " + (this.props.step > 1 ? 'active' : '')}>
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i><br/>Password</div>
                <div className={"col-xs-3 " + (this.props.step > 2 ? 'active' : '')}>
                    <i className="fa fa-pencil" aria-hidden="true"></i><br/>Name</div>
                <div className={"col-xs-3 " + (this.props.step > 3 ? 'active' : '')}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i><br/>Postcode</div>
            </div>
        )
    }
}

export default Steps;

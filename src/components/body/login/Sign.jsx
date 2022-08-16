import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../user/component/Button";
import Input from "../user/component/Input";
import { getAuthenticationSign } from "./SignService"

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }
    
    sign() {
        
    }

    render() {
        return (
            <div className="container-fluid-login">

                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-xl-6 col-12">
                        <div className="sign-body-form">
                            <div className="row">
                                <div className='col-12'>
                                    <h1 className="display-4 d-flex justify-content-center">Sign</h1>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <Input name="Username" onChange={(event) => this.setState({ name: event.target.value })} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Input name="Password" type="password" onChange={(event) => this.setState({ name: event.target.value })} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Button name="Enter" onClick={() => this.props.getAuthenticationSign(this.state.email, this.state.password)} style={{width: '100%'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({
    getAuthenticationSign
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sign);
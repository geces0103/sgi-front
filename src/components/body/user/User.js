import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "./component/Button.jsx";
import Input from "./component/Input.jsx";
import TableUser from "./component/TableUser.jsx";
import { getAll, createUser, updateUser, deleteUser } from './UserService.js';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            username: '',
            description: '',
            active: false,
            id: null,
            hashPassword: ''
        }
    }

    componentDidMount() {
        this.props.getAll();
    }

    createUser() {
        this.state.user = { id: this.state.id, username: this.state.username, description: this.state.description, email: this.state.email, active: this.state.active, hashPassword: this.state.hashPassword };


        if (!this.state.id) {
            this.props.createUser(this.state.user);
        } else {
            this.props.updateUser(this.state.user);
        }

        this.onClear()

        this.componentDidMount();
    }

    onSelected(event) {
        this.setState({ id: event.id, username: event.username, description: event.description, email: event.email, active: event.active, hashPassword: event.hashPassword });
    }

    onClear() {
        this.setState({ user: {}, id: null, username: '', description: '', email: '', active: false, hashPassword: '' })
    }

    onDelete(event) {
        this.props.deleteUser(event);
        this.componentDidMount();
    }

    validationButton() {
        return !this.state.username || !this.state.description || !this.state.email
    }

    render() {
        return <>
            <div className="container-fluid m-0 pt-2">

                <div className="component-create">
                    <form className="row g-3 needs-validation">
                        <div className="row">
                            <div className="col-6"><Input name="Username" value={this.state.username || ''} onChange={(event) => this.setState({ username: event.target.value })} /></div>
                            <div className="col-6"><Input name="Description" value={this.state.description || ''} onChange={(event) => this.setState({ description: event.target.value })} /></div>
                        </div>
                        <div className="row">
                            <div className="col-4"><Input name="Email" value={this.state.email || ''} onChange={(event) => this.setState({ email: event.target.value })} /></div>
                            <div className="col-4"><Input name="Password" value={this.state.hashPassword || ''} onChange={(event) => this.setState({ hashPassword: event.target.value })} /></div>
                            <div className="col-4 mt-2">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                        checked={this.state.active || false}
                                        onChange={(event) => this.setState({ active: event.target.checked })} />
                                    <label className="form-check-label">Active</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 m-0">
                                <Button className="btn btn-outline-primary button-style-user w-100" name="Create" onClick={(event) => this.createUser(event)} disabled={this.validationButton()} />
                            </div>
                            <div className="col-2 m-0">
                                <Button className="btn btn-outline-default button-style-user w-100" name="Clear" onClick={() => this.onClear()} />
                            </div>
                            <div className="col-2 mt-2">
                                <i className="bi bi-arrow-repeat" style={{cursor: "pointer"}} onClick={() => this.props.getAll()}></i>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="component-table">
                    <TableUser users={this.props.users} onDelete={(event) => this.onDelete(event)} onSelected={(event) => this.onSelected(event)} />
                </div>

            </div>
        </>
    }
}

const mapStateToPropos = state => ({
    users: state.reduxUserReducer.users
});
const mapDispatchToProps = dispatch => bindActionCreators({ getAll, createUser, updateUser, deleteUser }, dispatch);

export default connect(mapStateToPropos, mapDispatchToProps)(User)
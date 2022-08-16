import React from "react"
import { removesAuthorizationAndLogoutStorage } from "../../GlobalService"

export default props => {

    let logout = () => {
        props.logout()
    }

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand pl-2" href="#">TCC GABRIEL</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home</a>
                    <a className="nav-item nav-link" href="#/cadastro-usuario">Create user</a>
                    <a className="nav-item nav-link" href="" onClick={() => logout()}>Logout</a>
                </div>
            </div>
        </nav>
    </>
}
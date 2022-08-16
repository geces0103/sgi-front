import React from "react"

export default props => {

    let onSelected = (event) => {
        props.onSelected(event)
    }

    let onDelete = (event) => {
        props.onDelete(event)
    }
    return <>
        <table className="table table-hover table-style-product">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Description</th>
                    <th scope="col">Email</th>
                    <th scope="col">Active</th>
                    <th scope="col">creation</th>
                    <th scope="col">updated</th>
                </tr>
            </thead>
            <tbody>
                {props.users && props.users.length > 0 && props.users.map((item, index) => (
                    <tr className="tr-optional-table-product" key={index}>
                        <td className="m-0 p-0">{item.username}</td>
                        <td className="m-0 p-0">
                            <div className="row">
                                <div className="col-sm-6 col-12">{item.description}</div>
                                <div className="col-sm-6 col-12 float-left p-0">
                                    <button id="btnGroupDrop1" type="button"
                                        className="btn btn-light btn-optional-table-product"
                                        onClick={() => onSelected(item)}>
                                        <i className="bi bi-arrow-left icon-table-user"></i>
                                    </button>
                                    <button id="btnGroupDrop2" type="button"
                                        className="btn btn-light btn-optional-table-product"
                                        onClick={() => onDelete(item)}>
                                        <i className="bi bi-person-x icon-table-user"></i>
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td className="m-0 p-0">{item.email}</td>
                        <td className="m-0 p-0">{item.active}</td>
                        <td className="m-0 p-0">{item.creation}</td>
                        <td className="m-0 p-0">{item.updated}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
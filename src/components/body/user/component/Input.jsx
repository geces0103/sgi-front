import React from 'react';

export default props => {
    return <>
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">{props.name}</span>
            </div>
            <input type={props.type ? props.type : 'text'} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                value={props.value} onChange={props.onChange} required id={props.id} />
            <div className="invalid-feedback">
                Please provide a valid zip.
            </div>
        </div>
    </>
}
import React from "react";

export default props => {
    return <button type="button" className={`${props.className}`} onClick={props.onClick} disabled={props.disabled} style={props.style}>{props.name}</button>
}
import React from 'react'

function ButtonLink(props){
    return (
        <button href={props.href} className={props.className}>
            {props.children}
        </button>
    )
}

export default ButtonLink
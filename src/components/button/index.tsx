import React from 'react'
import './style.scss';
type Props = {
    text: string
    type?: "button" | "reset" | "submit"
}
const Button = (props: Props) => {
    return (
        <>
            <button className='btn-default' type={props.type ?? "button"}>
                {props.text}
            </button>
        </>
    )
}

export default Button
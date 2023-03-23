import React from 'react'

export default function XucXac(props: { xucXac: { img: string | undefined } }) {
    return (
        <img src={props.xucXac.img} alt="img.jpg" style={{ width: 50 }} />
    )
}

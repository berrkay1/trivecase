"use client"
import React from 'react'
import './style.scss';

type Props = {
    text: string
    fs?: "fs12" | "fs14" | "fs16" | "fs24" |"fs36" | "fs48"
    mfs?: "mfs12" | "mfs14" | "mfs16"
    fw?: "fw300" |"fw400" | "fw500" | "fw600" | "fw700" | "bold"
    color?: "cC8CBCC" | "c0097D6" | "cFFFFFF" | "c5770EA" | "c2A2B23"
    lh?: "normal" | "lh12" | "lh15"
    classNames?: string
    isCenter?: boolean
}

const Text = (props: Props) => {
    return (
        <div className={"default-text " + (props.classNames ? props.classNames : "") + " " + (props.color ? props.color : "") + " " + (props.fs ? props.fs : "") + " " + (props.mfs ? props.mfs : "") + " " + (props.fw ? props.fw : "") + " " + (props.lh ? props.lh : "") + " " + (props.isCenter ? "isCenter" : "")}>
            {props.text}
        </div>
    )
}

export default Text
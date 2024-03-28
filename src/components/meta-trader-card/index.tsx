"use client"
import React from 'react'
import './style.scss';
import Text from '../text';
import Image from 'next/image';

type Props = {
    text: string
    description: string
    classNames?: string
    footerText: string
    image: string

}

const MetaTraderCard = (props: Props) => {

    return (
        <div className={'card-body ' + (props.classNames ? props.classNames : "")}>
            <div className="card-up">
                <Text text={props.text} color='c2A2B23' fw='bold' fs='fs16' mfs='mfs14' lh='normal' classNames='title' />
                <Text text={props.description} color='c2A2B23' fw='fw400' fs='fs16' mfs='mfs14' lh='lh15' classNames='desc' />
            </div>

            <span className="text">{props.footerText}</span>
            <Image src={props.image} alt='' className='desktop-only image' />

        </div>
    )
}

export default MetaTraderCard
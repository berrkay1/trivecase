"use client"
import Image from 'next/image'
import React from 'react'
import Text from '../text'
import './style.scss'

type Props = {
    title: string | HTMLElement | any
    description: string
    icon: string
    bgColor: string
}

const FairMarketsCard = (props: Props) => {
    return (
        <div className={'fair-markets-card'} style={{ backgroundColor: props.bgColor }}>
            <Image src={props.icon} alt='' className='image' />
            <div className="card-content">
                <div className='card-title'>{props.title}</div>
                <Text text={props.description} color='cFFFFFF' fw='fw300' fs='fs24' mfs='mfs14' lh='lh15' classNames='card-desc' />
            </div>
        </div>
    )
}

export default FairMarketsCard
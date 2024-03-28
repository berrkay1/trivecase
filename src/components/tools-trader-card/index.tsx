import React from 'react'
import './style.scss';
import Text from '../text';
import Image from 'next/image';

type Props = {
    title: string | HTMLElement | any
    description: string
    classNames?: string
    icon: string

}

const ToolsTraderCard = (props: Props) => {

    return (
        <div className={'tools-card-body ' + (props.classNames ? props.classNames : "")}>
            <Image src={props.icon} alt='' className='tools-iamge' />
            <div className="card-main">
                <div className='tools-title'>{props.title}</div>
                <Text text={props.description} color='cFFFFFF' fs='fs24' lh='lh15' mfs='mfs14' fw='fw300' classNames='tools-desc' />
            </div>
        </div>
    )
}

export default ToolsTraderCard
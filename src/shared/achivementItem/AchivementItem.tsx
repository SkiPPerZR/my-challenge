import React, { FC } from 'react'
import './AchivementItem.scss'

interface AchivementItemProps {
    title: string;
    text: string;
    state?: number;
    icon: string;
}

const AchivementItem:FC<AchivementItemProps> = ({title, text, state, icon}) => (
    <div className='AchivementItem'>
        <div className="AchivementItemContent">
            <div className="AchivementItemContentImg">
                <img src={icon} alt={title} />
            </div>
            <div className="AchivementItemContentText">
                <h4 className='title-18 semibold'>{title}</h4>
                <p className='text-14 regular'>{text}</p>
            </div>
        </div>
        {state != null
            ? <div className="AchivementItemState"><div style={{width: `${state  }%`}} /></div>
            : <></>
        }
    </div>
)

export default AchivementItem;
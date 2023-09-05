import React, {FC} from 'react';
import './SidebarButton.scss'

interface SidebarButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: any;
    activeIcon: any;
    text: string;
    active?: boolean;
}

const SidebarButton:FC<SidebarButtonProps> = ({icon, activeIcon, text, active, ...props}: SidebarButtonProps) => {
    return (
        <button className='SidebarButton' {...props} style={{
            background: active === true ? 'var(--BG_secondary8)' : 'transparent',
            }}>
            <div>
                {active? <img src={activeIcon} alt=""/> : <img src={icon} alt=""/> }
            </div>
            <span className='title-11 bold'>{text}</span>
        </button>
    );
};

export default SidebarButton;
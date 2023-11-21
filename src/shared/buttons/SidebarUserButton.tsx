import React, {FC} from 'react';
import './SidebarUserButton.scss'

interface SidebarUserButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: any;
    activeIcon: any;
    text: string;
    active?: boolean;
    arrow?: boolean;
    toggle?: () => void;
}

const SidebarUserButton:FC<SidebarUserButtonProps> = ({icon, activeIcon, text, active, arrow, toggle, ...props}: SidebarUserButtonProps) => (
    <button
        className='SidebarUserButton'
        onClick={toggle}
        {...props}
        style={{ background: active === true ? 'var(--BG_secondary8)' : 'transparent',}}
    >
        <div>
            {active? <img src={activeIcon} alt=""/> : <img src={icon} alt=""/> }
        </div>
        <span className='title-11 bold'>{text}</span>
        <div>
            {arrow? <img src='../../img/SidebarLg/Arrow-down.svg' alt=""/> : <img src='../../img/SidebarLg/Arrow-downHover.svg' alt=""/> }
        </div>
    </button>
);

export default SidebarUserButton;
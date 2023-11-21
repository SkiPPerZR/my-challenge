import React, {FC} from 'react';
import './UserProfileButton.scss'
import avatar from '../../img/test-profile-icon.png'

interface UserProfileButtonProps {
    toggleStatus: () => void;
    toggle: () => void;
}

const UserProfileButton:FC<UserProfileButtonProps> = ({toggle, toggleStatus}) => (
    <div onClick={toggle} onMouseDown={toggleStatus}>
        <div className='user-profile'>
            <img src={avatar} alt="Avatar" />
        </div>
        <button className='profile-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M8.94845 0.453369H4.79512H1.05512C0.415119 0.453369 0.0951188 1.2267 0.548452 1.68004L4.00179 5.13337C4.55512 5.6867 5.45512 5.6867 6.00845 5.13337L7.32178 3.82004L9.46179 1.68004C9.90845 1.2267 9.58845 0.453369 8.94845 0.453369Z" fill="#102B32"/>
            </svg>
        </button>
    </div>
);

export default UserProfileButton;
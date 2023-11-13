import React, {FC} from 'react';
import './BalanceState.scss'

interface BalanceStateProps {
    balance: string;
    toggleStatus: () => void;
    toggle: () => void;
}

const BalanceState:FC<BalanceStateProps> = ({balance, toggle, toggleStatus}) => {
    return (
        <div className='balance-state'>
            <div className='gold'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8 3.09923V2H10V3.05782C11.2759 3.22835 12.3731 3.76381 13.2245 4.5L11.5102 6.18C11.0204 5.76 10.2857 5.28 9.12245 5.28C7.59184 5.28 6.30612 6.18 5.7551 7.44C5.72072 7.47369 5.70565 7.52631 5.6882 7.58722C5.67457 7.63477 5.6595 7.68739 5.63265 7.74C5.5102 8.1 5.44898 8.52 5.44898 8.94C5.44898 9.36 5.5102 9.78 5.63265 10.14C6.12245 11.64 7.53061 12.66 9.12245 12.66C10.0408 12.66 10.7755 12.42 11.2653 12.06C12.0612 11.52 12.4286 10.68 12.4898 10.14H9.12245V8H14.8776C14.8853 8.04572 14.8931 8.09015 14.9008 8.13387C14.9533 8.43435 15 8.70096 15 9.12C15 10.98 14.3265 12.54 13.1633 13.56C12.362 14.2961 11.2741 14.7914 10 14.9474V16H8V14.9008C6.09505 14.5594 4.49588 13.3623 3.67347 11.7C3.2449 10.86 3 9.96 3 9C3 8.04 3.2449 7.14 3.67347 6.3C4.49588 4.6377 6.09505 3.44059 8 3.09923Z" fill="#F99D12"/>
                    </svg>
                </div>
                <div className='balance text-17 semibold'>
                    <span>{balance}</span>
                </div>
            </div>
            <button className='gold-buy' onClick={toggle} onMouseDown={toggleStatus}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14 10.75H10.75V14C10.75 14.41 10.41 14.75 10 14.75C9.59 14.75 9.25 14.41 9.25 14V10.75H6C5.59 10.75 5.25 10.41 5.25 10C5.25 9.59 5.59 9.25 6 9.25H9.25V6C9.25 5.59 9.59 5.25 10 5.25C10.41 5.25 10.75 5.59 10.75 6V9.25H14C14.41 9.25 14.75 9.59 14.75 10C14.75 10.41 14.41 10.75 14 10.75Z" fill="#1E8CAF"/>
                </svg>
            </button>
        </div>
    );
};

export default BalanceState;
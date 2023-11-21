import './CreateNewChallengeModal.scss'
import { FC } from 'react'
import lightning from '../../img/CreateNewChallenge/lightning.svg'
import heart from '../../img/CreateNewChallenge/heart.svg'

interface CreateNewChallengeModalProps {
    setOpenMiniModal: Function;
    setOpenSideBar: Function;

}

const CreateNewChallengeModal: FC<CreateNewChallengeModalProps> = ({ setOpenMiniModal, setOpenSideBar }) => {
    const closeModal = () => {
        setOpenMiniModal(false)
    }
    const openSideBar = () => {
        setOpenMiniModal(false)
        setOpenSideBar(true)
    }
    return (
        <>
            <div className='overlay' onClick={closeModal} />
            <div className='modal'>
                <div className='modal__item' onClick={openSideBar}>
                    <img src={lightning} alt="img" className='modal__icon' />
                    <span className='text-17 medium'>Новый челлендж</span>
                </div>
                <div className='modal__item'>
                    <img src={heart} alt="img" className='modal__icon' />
                    <span className='text-17 medium'>Создать из шаблона</span>
                </div>
            </div>
        </>
    )
}

export default CreateNewChallengeModal
import React, { FC, useState } from 'react'
import './DeadLinesInputs.scss'
import ask from '../../../img/CreateNewChallenge/Ask.svg'

import DescriptionModal from '../../../components/DescriptionModal/DescriptionModal'

interface DeadLinesInputsProps {
    title: String,
    description: String
}

const DeadLinesInputs:FC<DeadLinesInputsProps> = ({ title, description }) => {
    const [openModal, setOpenModal] = useState(false)

    const openDescription = () => {
        setOpenModal(!openModal)
    }

    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className='deadlines'>
            <div className="deadlines__title">
                <span className='text-14 light dealines__text'>{title}</span>
                <img src={ask} alt="img" className='deadlines__img' onClick={openDescription}/>
                {openModal && <DescriptionModal setOpenModal={setOpenModal} description={description}/>}
            </div>
            <div className="deadlines__inputs">
                <input type="number" placeholder='Число' className='deadlines__numbers' />
                <select className='deadlines__select'>
                    <option value="" disabled selected>Дней</option>
                    {days.map((day) => (
                        <option value={day}>{day}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default DeadLinesInputs;
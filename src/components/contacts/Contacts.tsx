import React, {ReactNode} from 'react';
import './Contacts.scss'
import close from '../../img/close.svg'
import logo from '../../img/contacts-icon.svg'

interface ContactsProps {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Contacts(props: ContactsProps) {
    return (
        <>
        {props.isOpen && (
            <div className='Contacts-overlay' onClick={props.toggle}>
                <div onClick={(e) => e.stopPropagation()} className="Contacts">
                    <div className='ContactsTitle'>
                        <h1 className='text-36 medium'>Контакты</h1>
                        <button onClick={props.toggle}>
                            <img src={close} alt="Закрыть" />
                        </button>
                    </div>
                    <img src={logo} alt="Лого" className='icon'/>
                    <div className='ContactsInfo'>
                        <h2 className='text-18 semibold'>Полное наименование:</h2>
                        <p className='text-14 regular'>Общество с ограниченной <br/>ответственностью «Виртуал энд Роботик Системс»</p>
                        <p className='text-14 regular'>Сокращенное наименование: ООО «ВРС» </p>
                        <h3 className='text-11 bold'>Юридический адрес: </h3>
                        <p className='text-14 regular'>429960, Чувашская Республика - <br/>Чувашия, М.О. ЧЕБОКСАРСКИЙ, Д<br/> АРКАСЫ,УЛ ЛУГОВАЯ,Д. 42А</p>
                        <p className='text-14 regular'><span className='bold'>ИНН</span> 2124047439</p>
                        <p className='text-14 regular'><span className='bold'>КПП</span> 212401001</p>
                        <p className='text-14 regular'><span className='bold'>БИК:</span> 042282881О</p>
                        <p className='text-14 regular'><span className='bold'>КПО:</span> 45157621</p>
                        <p className='text-14 regular'><span className='bold'>ОГРН:</span> 1202100005580</p>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};
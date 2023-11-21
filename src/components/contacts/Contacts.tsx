import React, {ReactNode} from 'react';
import {useNavigate} from 'react-router-dom'
import './Contacts.scss'
import close from '../../img/close.svg'
import logo from '../../img/contacts-icon.svg'

interface ContactsProps {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Contacts(props: ContactsProps) {
    const navigate = useNavigate();

    const navigateToTerms = () => {
        navigate('/terms');
    }

    return (
        <>
            {props.isOpen && (
                <div className='Contacts-overlay' onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="Contacts">
                        <div className='ContactsTitle'>
                            <h1 className='text-36 medium'>О компании</h1>
                            <button onClick={props.toggle}>
                                <img src={close} alt="Закрыть" />
                            </button>
                        </div>
                        {/* <img src={logo} alt="Лого" className='icon'/> */}
                        <div className="ContactsAbout">
                            <h2 className='title-25 semibold'>О нас</h2>
                            <p className='text-14 regular'>Your Challenge - это игровая мотивационная платформа, на которой ваш потенциал превращается в конкретные результаты и достижения. Мы создали это приложение, чтобы объединить единомышленников, вдохновить на соревновательный дух и помочь вам раскрыть свой внутренний потенциал, независимо от вашего местоположения.</p>
                            <p className='text-14 regular'>Наша цель – дать любому пользователю возможность  создать свой вызов (челлендж), с возможностью отправить его другу, знакомому и другому пользователю площадки,  или принять участие в заинтересованном вызове (челлендже), при этом развиваясь в своей профессиональной сфере.</p>
                            <p className='text-14 regular'>Your Challenge - это не просто приложение, это сообщество, где вы найдете поддержку, мотивацию и друзей, готовых принимать вызовы и участвовать в челленджах, придерживаясь наших принципов:</p>
                            <h3 className='title-18 semibold'>Соревновательный дух</h3>
                            <p className="text-14 regular">Мы верим, что конкуренция мотивирует к лучшим результатам. Участвуйте в наших челленджах, соревнуйтесь и достигайте новых высот.</p>
                            <h3 className='title-18 semibold'>Личностное развитие</h3>
                            <p className="text-14 regular">Your Challenge - это не только о физической активности, но и о развитии вашей личности. Преодолевайте препятствия, достигайте целей и узнавайте о себе больше.</p>
                            <h3 className='title-18 semibold'>Уроки из побед и поражений</h3>
                            <p className="text-14 regular">Мы верим, что каждый опыт ценен. Наши челленджи помогут вам не только побеждать, но и учиться на своих ошибках.</p>
                            <h3 className='title-18 semibold'>Справедливые решения</h3>
                            <p className="text-14 regular">Функционал приложения содержит максимально непредвзятое отношение к игровому процессу, при возникновении спорных ситуаций наши пользователи всегда получат объективное и непредвзятое решение.</p>
                        </div>
                        <div className='ContactsInfo'>
                            <h2 className='title-25 semibold'>Контакты</h2>
                            <p className='text-14 regular'>Полное наименование: Общество с ограниченной <br/>ответственностью «Виртуал энд Роботик Системс»</p>
                            <p className='text-14 regular'>Сокращенное наименование: ООО «ВРС» </p>
                            <h3 className='text-11 bold'>Юридический адрес: </h3>
                            <p className='text-14 regular'>429960, Чувашская Республика - <br/>Чувашия, М.О. ЧЕБОКСАРСКИЙ, Д<br/> АРКАСЫ,УЛ ЛУГОВАЯ,Д. 42А</p>
                            <h3 className='text-11 bold'>Контактная информация: </h3>
                            <p className='text-14 regular'>телефон +7 925 743 8822</p>
                            <p className='text-14 regular'>e-mail support@yourchallenge.pro</p>
                            <p className='text-14 regular'><span className='bold'>ИНН</span> 2124047439</p>
                            <p className='text-14 regular'><span className='bold'>КПП</span> 212401001</p>
                            <p className='text-14 regular'><span className='bold'>БИК:</span> 042282881О</p>
                            <p className='text-14 regular'><span className='bold'>КПО:</span> 45157621</p>
                            <p className='text-14 regular'><span className='bold'>ОГРН:</span> 1202100005580</p>
                            <hr color="#102B32"/>
                            <h3 className='text-11 bold'>Политики и соглашения</h3>
                            <h4 className='text-11 bold' onClick={navigateToTerms}>Политика обработки персональных данных<br/> и конфиденциальности</h4>
                            <h4 className='text-11 bold' onClick={navigateToTerms}>Согласие на распорстранение<br/> персональных данных</h4>
                            <h4 className='text-11 bold' onClick={navigateToTerms}>Пользовательское соглашение</h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
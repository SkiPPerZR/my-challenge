import { FC } from "react"
import close from 'public/img/close.svg'
import media from 'public/img/CreateNewChallenge/Media.svg'
import './CreateNewChallengeSideBar.scss'
import NewChallengeInputs from '../../shared/inputs/NewChallengeInputs/NewChallengeInputs'
import CreateChallengeSwitch from '../../shared/buttons/CreateChallengeSwitch'
import InputFile from '../../shared/inputs/InputFile/InputFile'
import DeadLinesInputs from "../../shared/inputs/DeadLinesInputs/DeadLinesInputs"
import CreateNewChallengeBank from "../CreateNewChallengeBank/CreateNewChallengeBank"

interface CreateNewChallengeSideBarProps {
    setOpenSideBar: Function;
}

const CreateNewChallengeSideBar: FC<CreateNewChallengeSideBarProps> = ({ setOpenSideBar }) => {
    const closeSideBar = () => {
        setOpenSideBar(false)
    }
    return (
        <div className="container">
            <div className="sidebar__overlay" onClick={closeSideBar} />
            <div className="sidebar">
                <div className="sidebar__header">
                    <h2 className="text-36 regular sidebar__title">Новый челлендж</h2>
                    <img src={close} alt="img" className="sidebar__close" onClick={closeSideBar} />
                </div>

                <div className="sidebar__info">
                    <h3 className="text-28 regular sidebar__title">Основная информация</h3>
                    {/* <form id="challenge__info">
                        <input form="challenge__info" type="text"  name='title' id='title' placeholder='Название челленджа' className="sidebar__input" />
                        <NewChallengeInputs/>
                        <CreateChallengeSwitch title={'Онлайн'} description={''}/>
                        <CreateChallengeSwitch title={'Приватный челлендж'} description={'При включении ваш Челлендж не будет отображаться для других пользователей и будет доступен только по приглашению.'}/>
                        <CreateChallengeSwitch title={'18+ контент'} description={'При включении ваш Челлендж не будет отображаться для других пользователей и будет доступен только по приглашению.'}/>
                    </form> */}

                </div>

                <div className="sidebar__conditions">
                    <h3 className="text-28 regular sidebar__title">Условия</h3>
                    <div className="sidebar__media">
                        <img src={media} alt="img" className="sidebar__img" />
                        <p className="text-18 semibold" >Медиаматериалы</p>
                    </div>
                    <p className="text-18 light">Загрузите фото или видео с условиями челленджа</p>
                    <InputFile />
                    <div className="sidebar__container">
                        <span className="text-17 light">Напишите, что является конечным результатом вашего челленджа? Например: «Подтянуться 10 раз»</span>
                    </div>
                    <input form="challenge__info" type="text" name='title' id='title' placeholder='Текст' className="sidebar__input" />
                    <div className="sidebar__container">
                        <span className="text-17 light ">Подробно распишите условия выполнения результата.</span>
                    </div>
                    <input form="challenge__info" type="text" name='title' id='title' placeholder='Текст' className="sidebar__input" />

                </div>
                <div className="sidebar__deadlines">
                    <h3 className="text-28 regular sidebar__title">Пари и сроки</h3>
                    <DeadLinesInputs title="Общий спрок проведения Челленджа" description="Срок, когда челлендж будет автоматически завершен в пользу оппонентов, в случае, если создатель не предоставит вовремя результат." />
                    <DeadLinesInputs title="Время на проверку результата" description={'Время, в течение которого создатель челленджа должен рассмотреть результат и вынести вердикт.Если создатель\участник не рассмотрели голос идет участнику\создателю челленджа.'} />
                    <CreateNewChallengeBank />

                </div>
            </div>
        </div>
    )
}

export default CreateNewChallengeSideBar;
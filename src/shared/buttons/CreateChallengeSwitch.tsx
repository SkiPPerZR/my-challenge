import { FC, useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import './CreateChallengeSwitch.scss'

interface CreateChallengeSwitchProps {
    title: string,
    docUrl: string;
    id?: string;
    description?: string;
    turn?: any;
}

const CreateChallengeSwitch: FC<CreateChallengeSwitchProps> = ({title, description, turn, id, docUrl}) => {
    const [active, setActive] = useState(false)
    const [styleSwitch, setStyleSwitch] = useState<string>('switch__button')
    const [styleCircle, setStyleCircle] = useState<string>('switch__circle')

    useEffect(() => {
        buttonHandler()
    }, [])

    const buttonHandler = (): void => {
        setActive(!active)
        if (active) {
            setStyleSwitch('switch__button button__active')
            setStyleCircle('switch__circle circle__active')
        }
        else{
            setStyleSwitch('switch__button')
            setStyleCircle('switch__circle')
        }
        
    }

    return (
        <div className="switch"  >
            <div className="switch__container">
                <Link to={docUrl} target="_blank" className="switch__container__link"><span className="text-14 regular">{title}</span></Link>
                <label htmlFor={id} className={styleSwitch} onMouseDown={buttonHandler}>
                    <div className={styleCircle} ></div>
                </label>
                <input id={id} type="checkbox" onChange={event => turn(event.target.value)}/>
            </div>
            <p className="text-17 light">{description}</p>
        </div>
    )
}

export default CreateChallengeSwitch
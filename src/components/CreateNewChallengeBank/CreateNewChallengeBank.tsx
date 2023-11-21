import { useState } from 'react';
import gold from 'public/img/CreateNewChallenge/Gold.svg'
import './CreateNewChallengeBank.scss'

function CreateNewChallengeBank() {
    const [value, setValue] = useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);
    };

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setValue(newValue);
    };

    return (
        <div className='bank'>
            <span className='text-17 light'>Общий банк Челленджа</span>
            <div className='bank__container'>
                <div className="bank__number">
                    <input
                        type="number"
                        value={value}
                        min={1}
                        max={10000}
                        onChange={handleChange}
                        className='bank__input'
                    />
                    <img src={gold} alt="img" />
                </div>

                <input
                    type="range"
                    value={value}
                    min={1}
                    max={10000}
                    onChange={handleSliderChange}
                // style={{
                //     background: linear-gradient(to right, blue ${value / 100}%, red ${
                //         100 - value / 100
                //     }%)
                // }}
                />
            </div>

        </div>
    )
}

export default CreateNewChallengeBank
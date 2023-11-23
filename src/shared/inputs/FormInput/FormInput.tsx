import React, { FC } from 'react'
import './FormInput.scss'

interface FormInputProps {
    label: string;
    id: string;
    value?: string;
    onChange?: Function;
}

const FormInput:FC<FormInputProps> = ({label,id,value,onChange}) => (
    <div className='FormInput'>
        <label htmlFor={id} className='text-14 regular'>{label}</label>
        <input id={id} type='text' className='text-17 semibold' value={value} onChange={() => onChange} />
    </div>
);
export default FormInput;
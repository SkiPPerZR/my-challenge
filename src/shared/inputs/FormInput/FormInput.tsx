import React, { FC } from 'react'
import './FormInput.scss'

interface FormInputProps {
    label: string;
    id: string;
}

const FormInput:FC<FormInputProps> = ({label,id}) => {
    return (
        <div className='FormInput'>
            <label htmlFor={id} className='text-14 regular'>{label}</label>
            <input id={id} type='text' className='text-17 semibold'></input>
        </div>
    );
};
export default FormInput;
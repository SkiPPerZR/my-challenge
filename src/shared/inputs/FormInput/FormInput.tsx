import React, { FC } from 'react'
import './FormInput.scss'

interface FormInputProps {
    label: string;
    htmlFor: string;
    input: string;
}

const FormInput:FC<FormInputProps> = ({label,htmlFor,input}) => {
    return (
        <>
            <label htmlFor={htmlFor} className='text-14 regular'>{label}</label>
            <input type='text' className='text-17 semibold'>{input}</input>
        </>
    );
};
export default FormInput;
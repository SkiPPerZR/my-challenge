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
            <label htmlFor={htmlFor}>{label}</label>
            <input type='text'>{input}</input>
        </>
    );
};
export default FormInput;
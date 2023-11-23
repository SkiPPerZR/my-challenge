import React, { ChangeEvent, ChangeEventHandler, FC, useContext, useEffect, useState } from 'react';
import './FormInterests.scss'
import { ProfileData, TokenContext } from '../../../context';
import CheckboxCategory from '../../checkbox/checkboxCategory/CheckboxCategory';
import CheckboxSubCategory from '../../checkbox/checkboxSubCategory/CheckboxSubCategory';
import { ICategory, ICategorySub, IData } from '../../../interfaces/IResponse';

interface FormInterestsProps {
    dataCat: IData;
    onClick: ()=>void;
}

const FormInterests:FC<FormInterestsProps> = ({onClick, dataCat}) => {
    const { data, setData } = useContext(ProfileData);
    const {isToken, setIsToken} = useContext(TokenContext);
    const [switcher, setSwitcher] = useState(false);
    const [switcherSub, setSwitcherSub] = useState(false);
    const [checkCategory, setCheckCategory] = useState<ICategory[]>([]);
    const [categoryForForm, setCategoryForForm] = useState<string[]>([]);
    const [checkCategorySub, setCheckCategorySub] = useState<string[]>([]);

    const [dataCategory, setDataCategory] = useState<IData>()
    const [category, setCategory] = useState<ICategory[]>([]);
    const [categorySub, setCategorySub] = useState<ICategorySub[]>([]);

    const addValue = (category: string[], category_sub: string[]) => {
        // console.log(data)
        setData((prevData: any) => ({
            ...prevData,
            category: [category],
            category_sub: [category_sub]
        }));
        console.log(JSON.stringify(data))
    };

    const handleCategoryCheck = (event : ChangeEvent<HTMLInputElement>) : void => {
        const {value} = event.target;
    
        setCheckCategory(prevList => {
            if (event.target.checked) {
                return [...prevList, { id: value, name: '' }]; // добавление нового элемента
            } 
            return prevList.filter(item => item.id !== value); // удаление элемента
          
        });
        setCategoryForForm(prevList => {
            if (event.target.checked) {
                return [...prevList, value]; // добавление нового элемента
            } 
            return prevList.filter(item => item !== value); // удаление элемента
            
        });
    };
    
    const handleCategorySubCheck = (event : ChangeEvent<HTMLInputElement>) : void => {
        const {value} = event.target;
    
        setCheckCategorySub(prevList => {
            if (event.target.checked) {
                return [...prevList, value]; // добавление нового элемента
            } 
            return prevList.filter(item => item !== value); // удаление элемента
          
        });
    };

    useEffect(()=>{
        setDataCategory(dataCat)
    },[])

    const [active, setActive] = useState(false);
    const [styleSwitch, setStyleSwitch] = useState<string>('CheckboxCategoryContainer')
    const [styleCircle, setStyleCircle] = useState<string>('CheckboxCategory__circle')

    // const buttonHandler = (): void => {
    //     setActive(!active)
    // }

    useEffect(() => {
        if (dataCategory && checkCategory.length > 0) { // Проверка, что есть выбранные категории
            const filteredCategorySub = dataCategory.category_sub.filter(
                (item: ICategorySub) => checkCategory.some(category => category.id === item.id_category)
            );
            setCategorySub(filteredCategorySub);
        }
    }, [dataCategory, checkCategory]);
    
    function ExitForm() {
        addValue(categoryForForm, checkCategorySub)
        onClick()
    }

    return (
        <div className='FormInterests'>
            <div className="FormInterestsCategory">
                <span className='text-14 regular'>Выберите разделы</span>
                <div className="FormInterestsCategoryGroup">
                    {dataCategory && (
                        <>
                            {dataCategory.category.map((category) => (
                                // <CheckboxCategory key={category.id} category={category} value={category.id} turn={handleCategoryCheck}/>
                                <div className='CheckboxCategory' key={category.id}>
                                    <div className={`CheckboxCategoryContainer${active ? ' check__active' : ''}`}>
                                        <span className='title-18 semibold'>{category.name}</span>
                                        <div className="CheckboxCategoryContainerSwitch">
                                            {/* <label htmlFor={category.id} className='CheckboxCategory__circle'  onClick={buttonHandler}>
                                                <div className={`CheckboxCategory__circle${active ? ' cir__active' : ''}`}></div>
                                            </label> */}
                                            <input id={category.id} type="checkbox" value={category.id} onChange={handleCategoryCheck}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <div className="FormInterestsSubCategory">
                <span className='text-14 regular'>Возможно, вам будет интересно</span>
                <div className="FormInterestsSubCategoryGroup">
                    {checkCategory && (
                        <>
                            {categorySub.map((category_sub) => (
                                <CheckboxSubCategory key={category_sub.id} categorySub={category_sub} turn={handleCategorySubCheck}/>
                            ))}
                            {/* {categorySub.map((category_sub) => (
                                <div key={category_sub.id}>
                                    <input type="checkbox" value={category_sub.id} onChange={handleCategorySubCheck}/>
                                    <span>{category_sub.name}</span>
                                </div>
                            ))} */}
                            {/* {categorySub.map((category_sub) => (
                                <div key={category_sub.id}>
                                    <input type="checkbox" value={category_sub.id} onChange={handleCategorySubCheck}/>
                                    <span>{category_sub.name}</span>
                                </div>
                            ))} */}
                        </>
                    )}
                </div>
            </div>
            <button className='FormsSettingsButton text-17 semibold' onClick={ExitForm}>Сохранить</button>
        </div>
    );
};

export default FormInterests;
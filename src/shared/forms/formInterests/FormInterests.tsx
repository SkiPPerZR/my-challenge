import React, { FC, useContext, useState } from 'react';
import './FormInterests.scss'
import { ProfileData, TokenContext } from '../../../context';
import CheckboxCategory from '../../checkbox/checkboxCategory/CheckboxCategory';
import CheckboxSubCategory from '../../checkbox/checkboxSubCategory/CheckboxSubCategory';
import { ICategory } from '../../../interfaces/ICategory';

interface FormInterestsProps {
    category: ICategory[];
    categorySub: ICategory[];
    onClick: ()=>void;
}

const FormInterests:FC<FormInterestsProps> = ({onClick, category}) => {
    const { data, setData } = useContext(ProfileData);
    const {isToken, setIsToken} = useContext(TokenContext)
    const [switcher, setSwitcher] = useState(false)

    const handleField1Change = (category: any, category_sub: any) => {
        setData((prevData: any) => ({
          ...prevData,
          category: category.split(',').map((item:any) => item.trim()),
          category_sub: category_sub.split(',').map((item:any) => item.trim()),
        }));
      };

    const handleSwitcher = () => {
        setSwitcher(!switcher)
    }

    return (
        <div className='FormInterests'>
            <div className="FormInterestsCategory">
                <span className='text-14 regular'>Выберите разделы</span>
                <div className="FormInterestsCategoryGroup">
                    <CheckboxCategory title='Видеоигры' key='VideoGames' turn={handleSwitcher}/>
                    <CheckboxCategory title='Спорт' key='Sport' turn={handleSwitcher}/>
                    <CheckboxCategory title='Настольные игры' key='BoardGames' turn={handleSwitcher}/>
                    <CheckboxCategory title='Блогеры и стримеры' key='BloggersStreamers' turn={handleSwitcher}/>
                    <CheckboxCategory title='Другое' key='Other' turn={handleSwitcher}/>
                    {/* {cards.map(card => {
                        return <CheckboxCategory title={card.name} key='category.id' turn={handleSwitcher}/>
                    })} */}
                </div>
            </div>   
            <div className="FormInterestsSubCategory">
                <span className='text-14 regular'>Возможно, вам будет интересно</span>
                <div className="FormInterestsSubCategoryGroup">
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    <CheckboxSubCategory title='Другое' id='Other' turn={handleSwitcher}/>
                    {/* {cards.map(card => {
                        return <CheckboxSubCategory title={categorySub.name} key='categorySub.id' turn={handleSwitcher}/>
                    })} */}
                </div>
            </div>
            <button className='FormsSettingsButton text-17 semibold' onClick={onClick}>Сохранить</button>
        </div>
    );
};

export default FormInterests;
import React, { FC, useContext, useEffect, useState } from 'react';
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
    const [idForSub, setIdForSub] = useState('')

    const [dataCategory, setDataCategory] = useState<IData>()
    const [category, setCategory] = useState<ICategory | null>(null);
    const [categorySub, setCategorySub] = useState<ICategorySub[]>([]);

    const addValue = (field: string, value: string) => {
        // @ts-ignore
        // console.log(data[field])
        setData((prevData: any) => ({
            ...prevData,
            [field]: [...prevData[field], value]
        }));
    };

    useEffect(() => {
        setDataCategory(dataCat)
        if (dataCategory && category) {
          const filteredCategorySub = dataCategory.category_sub.filter(
            (item: ICategorySub) => item.id_category === category.id
          );
          setCategorySub(filteredCategorySub);
        }
      }, [switcher, category]);
    
      const handleCategoryChange = (category: ICategory) => {
        setSwitcher(!switcher)
        setCategory(category);
      };

    const handleSwitcher = () => {
        setSwitcherSub(!switcherSub)
    }

    return (
        <div className='FormInterests'>
            <div className="FormInterestsCategory">
                <span className='text-14 regular'>Выберите разделы</span>
                <div className="FormInterestsCategoryGroup">
                    {dataCategory && (
                        <>
                            {dataCategory.category.map((category) => (
                                <CheckboxCategory key={category.id} category={category} turn={() => handleCategoryChange(category)} onClick={()=>{addValue('Category', category.id)}}/>
                            ))}
                        </>
                    )}
                </div>
        </div>
            <div className="FormInterestsSubCategory">
                <span className='text-14 regular'>Возможно, вам будет интересно</span>
                <div className="FormInterestsSubCategoryGroup">
                    {category && (
                        <>
                            {categorySub.map((categorySub) => (
                                <CheckboxSubCategory key={categorySub.id_category} categorySub={categorySub} turn={()=>handleSwitcher()} onClick={()=>{addValue('Category_sub', categorySub.id)}}/>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <button className='FormsSettingsButton text-17 semibold' onClick={onClick}>Сохранить</button>
        </div>
    );
};

export default FormInterests;
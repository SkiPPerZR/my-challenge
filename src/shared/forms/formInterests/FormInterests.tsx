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
    const [checked, setChecked] = useState([]);

    const [dataCategory, setDataCategory] = useState<IData>()
    const [category, setCategory] = useState<ICategory | null>(null);
    const [categorySub, setCategorySub] = useState<ICategorySub[]>([]);

    const addValue = (field: string, value: string) => {
        // console.log(data)
        setData((prevData: any) => ({
            ...prevData,
            [field]: [...prevData[field], value]
        }));
    };

    // const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     let updatedList: string[] = [...checked];
    //     const value : string = event.target.value
      
    //     if (event.target.checked) {
    //         updatedList = [...checked, value];
    //       } else {
    //         updatedList.splice(checked.indexOf(value), 1);
    //       }
    //     }
    //     setChecked(updatedList);
    //     console.log("Проверка списка категорий: "+JSON.stringify(updatedList))
    //   };

    useEffect(()=>{
        setDataCategory(dataCat)
    },[])

    useEffect(() => {
        if (dataCategory && category) {
            const filteredCategorySub = dataCategory.category_sub.filter(
              (item: ICategorySub) => item.id_category === category.id
            );
            setCategorySub(filteredCategorySub);
          }
    }, [dataCategory, category]);
    
    const handleCategoryChange = (categoryID: ICategory) => {
        setSwitcher(!switcher)
        setCategory(categoryID);
        if (switcher && dataCategory && category) {
            const filteredCategorySub = dataCategory.category_sub.filter(
                (item: ICategorySub) => item.id_category === category.id
            );
            setCategorySub(filteredCategorySub);
        }
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
                                <CheckboxCategory key={category.id} category={category} value={category.name} turn={() => handleCategoryChange(category)} onClick={()=>{addValue('category', category.id)}}/>
                            ))}
                            {/* {dataCategory.category.map((category, item) => (
                                <CheckboxCategory key={category.id} category={category} value={item} turn={()=>handleCheck} onClick={()=>{addValue('category', category.id)}}/>
                            ))} */}
                        </>
                    )}
                </div>
        </div>
            <div className="FormInterestsSubCategory">
                <span className='text-14 regular'>Возможно, вам будет интересно</span>
                <div className="FormInterestsSubCategoryGroup">
                    {category && (
                        <>
                            {categorySub.map((category_sub) => (
                                <CheckboxSubCategory key={category_sub.id} categorySub={category_sub} turn={() => handleSwitcher()} onClick={()=>{addValue('category_sub', category_sub.id)}}/>
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
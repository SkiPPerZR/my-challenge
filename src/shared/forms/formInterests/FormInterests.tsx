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
    const [checkCategory, setCheckCategory] = useState<string[]>([]);
    const [checkCategorySub, setCheckCategorySub] = useState<string[]>([]);

    const [dataCategory, setDataCategory] = useState<IData>()
    const [category, setCategory] = useState<ICategory[]>([]);
    const [categorySub, setCategorySub] = useState<ICategorySub[]>([]);

    const addValue = (category: string, category_sub: string) => {
        //console.log(data)
        setData((prevData: any) => ({
            ...prevData,
            category: [category],
            category_sub: [category_sub]
        }));
    };

    const handleCategoryCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        let updatedList: string[] = [...checkCategory];
        const value : string = event.target.value;
      
        if (event.target.checked) {
            updatedList = [...checkCategory, value];
          } else {
            updatedList.splice(checkCategory.indexOf(value), 1);
          }
          //@ts-ignore
        // const newArray : string[] = checkCategory.map((item) =>{
        //     return {id: item, name: ''}
        // })
        
        setCheckCategory(updatedList);
        //console.log(JSON.stringify(categorySub))
        console.log("Проверка списка категорий: "+JSON.stringify(checkCategory))
    };

    const handleCategorySubCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        let updatedList: string[] = [...checkCategorySub];
        const value : string = event.target.value;
      
        if (event.target.checked) {
            updatedList = [...checkCategorySub, value];
          } else {
            updatedList.splice(checkCategorySub.indexOf(value), 1);
          }
        
        setCheckCategorySub(updatedList);
        // console.log(JSON.stringify(data))
        console.log("Проверка списка подкатегорий: "+JSON.stringify(checkCategorySub))
    };

    useEffect(()=>{
        setDataCategory(dataCat)
    },[])

    useEffect(() => {
        if (dataCategory && category) {
            const filteredCategorySub = dataCategory.category_sub.filter(
                (item: ICategorySub) => item.id_category = checkCategory[1]
            )
            setCategorySub(filteredCategorySub);
            console.log(JSON.stringify(filteredCategorySub))
          }
    }, [dataCategory, category, checkCategory]);
    
    // const handleCategoryChange = (categoryID: ICategory) => {
    //     setSwitcher(!switcher)
    //     setCategory(categoryID);
    //     if (switcher && dataCategory && category) {
    //         const filteredCategorySub = dataCategory.category_sub.filter(
    //             (item: ICategorySub) => item.id_category === category.id
    //         );
    //         setCategorySub(filteredCategorySub);
    //     }
    // };

    // const handleSwitcher = () => {
    //     setSwitcherSub(!switcherSub)
    // }

    return (
        <div className='FormInterests'>
            <div className="FormInterestsCategory">
                <span className='text-14 regular'>Выберите разделы</span>
                <div className="FormInterestsCategoryGroup">
                    {dataCategory && (
                        <>
                            {/* {dataCategory.category.map((category) => (
                                <CheckboxCategory key={category.id} category={category} value={category.name} turn={() => handleCategoryChange(category)} onClick={()=>{addValue('category', category.id)}}/>
                            ))} */}
                            {dataCategory.category.map((category) => (
                                // <CheckboxCategory key={category.id} category={category} turn={handleCheck} onClick={()=>{addValue('category', category.id)}}/>
                                <div key={category.id}>
                                    <input type="checkbox" value={category.id} onChange={handleCategoryCheck}/>
                                    <span>{category.name}</span>
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
                            {/* {categorySub.map((category_sub) => (
                                <CheckboxSubCategory key={category_sub.id} categorySub={category_sub} turn={handleSwitcher} onClick={()=>{addValue('category_sub', category_sub.id)}}/>
                            ))} */}
                            {/* {categorySub.map((category_sub) => (
                                <div key={category_sub.id}>
                                    <input type="checkbox" value={category_sub.id} onChange={handleCategorySubCheck}/>
                                    <span>{category_sub.name}</span>
                                </div>
                            ))} */}
                            {categorySub.map((category_sub) => (
                                <div key={category_sub.id}>
                                    <input type="checkbox" value={category_sub.id} onChange={handleCategorySubCheck}/>
                                    <span>{category_sub.name}</span>
                                </div>
                            ))}
                        </>
                    )}
                    {/* <div>
                        {`Items checked are: ${checkedItems}`}
                    </div> */}
                </div>
            </div>
            <button className='FormsSettingsButton text-17 semibold' onClick={onClick}>Сохранить</button>
        </div>
    );
};

export default FormInterests;
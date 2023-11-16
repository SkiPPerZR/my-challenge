export interface IResponse{
    data: IData
}
export interface IData{
    data: any;
    challenge_mode: ICategory,
    category: ICategory,
    category_sub: ICategorySub
}

export interface ICategory {
    id: String;
    name: String;
}

export interface ICategorySub {
    id: String,
    name: String,
    id_category: String;
}
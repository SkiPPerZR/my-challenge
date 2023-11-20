export interface IResponse{
    data: IData
}
export interface IData{
    challenge_mode: ICategory[],
    category: ICategory[],
    category_sub: ICategorySub[]
}

export interface ICategory {
    id: string,
    name: string
}

export interface ICategorySub {
    id: string,
    name: string,
    id_category: string
}
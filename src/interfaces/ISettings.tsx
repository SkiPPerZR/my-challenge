import { ICategory, ICategorySub } from "./IResponse";

export interface ISetting{
    nick : string,
    date_of_birth : string,
    fio : string,
    city : string,
    vk: string,
    steam: string,
    discord: string,
    category: ICategory[],
    category_sub: ICategorySub[],
    token : string
}
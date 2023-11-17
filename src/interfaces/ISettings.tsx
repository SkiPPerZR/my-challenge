import { ICategory, ICategorySub } from "./IResponse";

export interface ISetting{
    Nick : string,
    Date : string,
    Fio : string,
    City : string,
    Vk: string,
    Steam: string,
    Discord: string,
    Category: ICategory[],
    Category_sub: ICategorySub[],
    Token : string
}
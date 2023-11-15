interface IResponse{
    data: IData
}
interface IData{
    challenge_mode: ICategory,
    category: ICategory,
    category_sub: ICategorySub,
}
interface ICategory {
     id: String;
     name: String;
}
interface ICategorySub {
     id: String,
     name: String,
     id_category: String;
}

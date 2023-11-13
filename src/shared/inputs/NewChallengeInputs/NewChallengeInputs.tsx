import { FC, useEffect, useState } from "react";
import PostService from "../../../api/PostService";
import { IChallenge } from "../../../interfaces/IChallenge";

interface NewChallengeInputsProps {

}

const NewChallengeInputs:FC<NewChallengeInputsProps> = (  ) => {
    // const [category, setCategory] = useState<IChallenge>()

    // useEffect(() => {
    //     fetchCategory()
    // })

    // async function fetchCategory() {
    //     let categoryList : IChallenge = await PostService.getChallengeCategory()
    //     setCategory(categoryList)
    // }
    // console.log(category)
    return (
        <div>

        </div>
    )
}

export default NewChallengeInputs;
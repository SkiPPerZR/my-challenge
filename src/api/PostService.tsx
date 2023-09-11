import axios from "axios"
import { ICard } from "../interfaces/ICard";

export default class PostService {
    static async getChallengeList(type : String) : Promise<ICard[]> {
        let data = '{"type" : "' + type + '", "token" : "2704a8149172386fcb7b01408c0c35c343fd9dfc7c02aab5321da2c40358d8ea635eaedfc1b01f44551a554c5192723c60359fad0db538ef994644ab0b40d1a0"}';

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://form.upon.ru/api/challenge_list.php',
            headers: { 
            'Content-Type': 'text/plain'
        },
            data : data
        };

        let responce = await axios.request(config);

        let cardListFromApi = responce.data["challenge"];

        let cardList : ICard[] = [];
        for(let cardFromApi of cardListFromApi){
            let CardInfo : ICard = {
                token: cardFromApi["token"],
                name: cardFromApi["name"],
                id_mode: cardFromApi["id_mode"],
                cash_min: cardFromApi["cash_min"],
                cash_max: cardFromApi["cash_max"],
                cash_bank: cardFromApi["cash_bank"],
                is_online: cardFromApi["is_online"],
                user_count1: cardFromApi["user_count1"],
                user_count2: cardFromApi["user_count2"]
            }


            cardList.push(CardInfo);
        }

        return  cardList.slice(cardList.length-4, cardList.length); //TO DO Slider
    }
}
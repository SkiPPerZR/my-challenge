import axios from "axios"
import { ICard } from "../interfaces/ICard";
import { ICardInfo } from "../interfaces/ICardInfo";

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
                city: cardFromApi["city"],
                is_online: cardFromApi["is_online"],
                district: cardFromApi["district"],
                user_count1: cardFromApi["user_count1"],
                user_count2: cardFromApi["user_count2"]
            }


            cardList.push(CardInfo);
        }

        return cardList.slice(cardList.length-4, cardList.length); //TO DO Slider
    }

    static async getChallengeInfo(token_challenge : String) : Promise<ICardInfo[]> {
        let data = '{"token" : "2704a8149172386fcb7b01408c0c35c343fd9dfc7c02aab5321da2c40358d8ea635eaedfc1b01f44551a554c5192723c60359fad0db538ef994644ab0b40d1a0", "token_challenge" : "'+ token_challenge +'"}';

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

        let cardInfoFromApi = responce.data["challengeInfo"];

        let cardInfo : ICardInfo[] = [];

        for(let infoFromApi of cardInfoFromApi){
            let CardInfo : ICardInfo = {
                token: infoFromApi['token'],
                name: infoFromApi['name'],
                id_category: infoFromApi['id_category'],
                id_category_string: infoFromApi['id_category_string'],
                id_category_sub: infoFromApi['id_category_sub'],
                id_category_sub_string: infoFromApi['id_category_sub_string'],
                id_mode: infoFromApi['id_mode'],
                id_mode_string: infoFromApi['id_mode_string'],
                is_online: infoFromApi['is_online'],
                city: infoFromApi['city'],
                district: infoFromApi['district'],
                is_private: infoFromApi['is_private'],
                is_18: infoFromApi['is_18'],
                is_repeat: infoFromApi['is_repeat'],
                is_premium: infoFromApi['is_premium'],
                is_blogger: infoFromApi['is_blogger'],
                user_count1: infoFromApi['user_count1'],
                user_count2: infoFromApi['user_count2'],
                condition_execution: infoFromApi['condition_execution'],
                final_result: infoFromApi['final_result'],
                start_dt: infoFromApi['start_dt'],
                end_dt: infoFromApi['end_dt'],
                time_condition: infoFromApi['time_condition'],
                time_condition_type: infoFromApi['time_condition_type'],
                time_result: infoFromApi['time_result'],
                time_result_type: infoFromApi['time_result_type'],
                cash_bank: infoFromApi['cash_bank'],
                id_user_create_date: infoFromApi['id_user_create_date'],
                status: infoFromApi['status'],
                id_user_creator: infoFromApi['id_user_creator'],
                image: infoFromApi['image'],
                video: infoFromApi['video']
            }


            cardInfo.push(CardInfo);
        }

        return cardInfo
    }
}
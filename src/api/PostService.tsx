import axios, { AxiosResponse } from "axios"
import { ICard } from "../interfaces/ICard";
import { ICardInfo } from "../interfaces/ICardInfo";

export default class PostService {
    static async sendRawData(data : String, url:String) : Promise<AxiosResponse> {
        const BASE_URL = 'https://uponblog.ru/api/';
            
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BASE_URL +  url,
            headers: { 
            'Content-Type': 'text/plain' //application/json
        },
            data : data
        };

        let responce = await axios.request(config);

        return responce;
    }

    static async getChallengeList(type : String) : Promise<ICard[]> {
        let data = '{"type" : "' + type + '", "token" : "6d432d60ef3bc832fb651ede7ab89cf2bec45cf0d2208dcf8c2f3a2fd5b151e1bb1b800b304e7798b6fc017128b7aea0bfe30dbd61f702599520e1a74ce1071d"}';

        let responce = await PostService.sendRawData(data, 'challenge_list.php');

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

        return cardList;
    }

    static async getChallengeInfo(token_challenge : String) : Promise<ICardInfo> {
        let data = '{"token" : "6d432d60ef3bc832fb651ede7ab89cf2bec45cf0d2208dcf8c2f3a2fd5b151e1bb1b800b304e7798b6fc017128b7aea0bfe30dbd61f702599520e1a74ce1071d", "token_challenge" : "'+ token_challenge +'"}';

        let responce = await PostService.sendRawData(data, 'challenge_info.php');

        let cardInfoFromApi = responce.data["challenge"][0];
        let CardInfo : ICardInfo = {
            token: cardInfoFromApi['token'],
            name: cardInfoFromApi['name'],
            id_category: cardInfoFromApi['id_category'],
            id_category_string: cardInfoFromApi['id_category_string'],
            id_category_sub: cardInfoFromApi['id_category_sub'],
            id_category_sub_string: cardInfoFromApi['id_category_sub_string'],
            id_mode: cardInfoFromApi['id_mode'],
            id_mode_string: cardInfoFromApi['id_mode_string'],
            is_online: cardInfoFromApi['is_online'],
            city: cardInfoFromApi['city'],
            district: cardInfoFromApi['district'],
            is_private: cardInfoFromApi['is_private'],
            is_18: cardInfoFromApi['is_18'],
            is_repeat: cardInfoFromApi['is_repeat'],
            is_premium: cardInfoFromApi['is_premium'],
            is_blogger: cardInfoFromApi['is_blogger'],
            user_count1: cardInfoFromApi['user_count1'],
            user_count2: cardInfoFromApi['user_count2'],
            condition_execution: cardInfoFromApi['condition_execution'],
            final_result: cardInfoFromApi['final_result'],
            start_dt: cardInfoFromApi['start_dt'],
            end_dt: cardInfoFromApi['end_dt'],
            time_condition: cardInfoFromApi['time_condition'],
            time_condition_type: cardInfoFromApi['time_condition_type'],
            time_result: cardInfoFromApi['time_result'],
            time_result_type: cardInfoFromApi['time_result_type'],
            cash_bank: cardInfoFromApi['cash_bank'],
            id_user_create_date: cardInfoFromApi['id_user_create_date'],
            status: cardInfoFromApi['status'],
            id_user_creator: cardInfoFromApi['id_user_creator'],
            image: cardInfoFromApi['image'],
            video: cardInfoFromApi['video']
        }

        return CardInfo
    }

    static async sendPhone(phone : String) : Promise<String> {

        let data = '{"phone" : "'+ phone +'"}';

        let responce = await PostService.sendRawData(data, 'user_registration_by_phone.php');

        let statusCode = responce.status;

        if (statusCode == 200)
            return responce.data["token"]; //заменить на сохранение в кеш

        return statusCode.toString();
    }

    static async sendCode(code : String) : Promise<String> {

        //let token = кеш.токен

        let data = '{"phone_code" : "'+ code +
                    '"token"' + '??????????????????' + '"}';

        let responce = await PostService.sendRawData(data, 'user_registration_by_phone.php');

        let statusCode = responce.status;

        return statusCode.toString();
    }


    static async emailSignIn(code : String) : Promise<String> {

        return '';
    }

    static async emailSignUp(code : String) : Promise<String> {

        return '';
    }

    static async sendAgreement(isTerms : String, isPrivacy: String) : Promise<String> {

        
        let data = '{"is_terms_of_use" : "' + isTerms + //заставить пользователя поставить 1
                    '"is_privacy_policy" : "'+ isPrivacy +  //заставить пользователя поставить 1
                    '"token"' + '??????????????????' + '"}';

        let responce = await PostService.sendRawData(data, 'user_profile_update.php');

        let statusCode = responce.status;

        return statusCode.toString();
    }
}
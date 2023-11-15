import axios, { AxiosResponse } from "axios"
import { ICard } from "../interfaces/ICard";
import { ICardInfo } from "../interfaces/ICardInfo";
import { ICategory } from "../interfaces/ICategory";

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

    static async sendRawDataForm(data : String, url:String) : Promise<AxiosResponse> {
        const BASE_URL = 'https://form.upon.ru/api/';
            
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

    static async getChallengeList( type : String) : Promise<ICard[]> {
        let data = '{"type" : "' + type + '", "token" : "6d432d60ef3bc832fb651ede7ab89cf2bec45cf0d2208dcf8c2f3a2fd5b151e1bb1b800b304e7798b6fc017128b7aea0bfe30dbd61f702599520e1a74ce1071d"}';

        let responce = await PostService.sendRawData(data, 'challenge_list.php');

        let cardListFromApi: ICard[] = responce.data["challenge"];

        return cardListFromApi;
    }

    static async getChallengeInfo(token_challenge : String) : Promise<ICardInfo> {
        let data = '{"token" : "6d432d60ef3bc832fb651ede7ab89cf2bec45cf0d2208dcf8c2f3a2fd5b151e1bb1b800b304e7798b6fc017128b7aea0bfe30dbd61f702599520e1a74ce1071d", "token_challenge" : "'+ token_challenge +'"}';

        let responce = await PostService.sendRawData(data, 'challenge_info.php');
        let cardInfoFromApi: ICardInfo = responce.data["challenge"][0];

        return cardInfoFromApi
    }

    static async sendPhone(phone : String) : Promise<String> {

        let data = '{"phone" : "'+ phone +'"}';

        let responce = await PostService.sendRawData(data, 'user_registration_by_phone.php');

        let statusCode = responce.status;

        if (statusCode == 200)
            return responce.data["token"]; //заменить на сохранение в кеш

        return statusCode.toString();
    }

    static async sendPhoneCode(code : String, token : String) : Promise<String> {

        let data = '{"phone_code" : "'+ code + '", "token" : "' + token + '"}';

        let responce = await PostService.sendRawData(data, 'user_registration_by_phone.php');

        let statusCode = responce.status;

        if (statusCode == 200)
            return responce.data['token'];

        // if (statusCode == 401)
        //     return responce.data['message'];

        return statusCode.toString();
    }

    static async sendEmailCode(code : String, token : String) : Promise<String> {

        let data = '{"email_code" : "'+ code + '", "token" : "' + token + '"}';

        let responce = await PostService.sendRawData(data, 'user_registration_by_email.php');

        let statusCode = responce.status

        if (statusCode == 200)
            return responce.data['token'];

        return statusCode.toString();
    }

    static async emailSignIn(code : String) : Promise<String> {

        return '';
    }

    static async emailSignUp(email : String, password : String) : Promise<String> {
        let data = '{"email" : "'+ email +'", "password" : "'+ password +'", "password_repeat" : "'+ password +'"}';

        let responce = await PostService.sendRawData(data, 'user_registration_by_email.php');

        let statusCode = responce.status;

        if (statusCode == 200) 
            return responce.data['token'];

        return statusCode.toString(); //заменить на сохранение в кеш
    }

    static async sendAgreement(isTerms : String, isPrivacy: String, token : String) : Promise<String> {

        const data = '{"is_terms_of_use" : "'+isTerms+'", "is_privacy_policy" : "'+isPrivacy+'", "token" : "'+token+'"}'
        
        let responce = await PostService.sendRawData(data, 'user_profile_update.php');

        let statusCode = responce.status;

        if (statusCode == 200) 
            return responce.data['token'];
        if (statusCode == 402)
            return ''

        return statusCode.toString();
    }

    // static async sendNickAndDateProfile(Nickname : String, ProfileDate: String, token : String) : Promise<String> {

    //     const data = '{"nick" : "'+Nickname+'", "date_of_birth" : "'+ProfileDate+'", "token" : "'+token+'"}'
        
    //     let responce = await PostService.sendRawData(data, 'user_profile_update.php');

    //     let statusCode = responce.status;

    //     if (statusCode == 200) 
    //         return responce.data['token'];
    //     if (statusCode == 402)
    //         return ''

    //     return statusCode.toString();
    // }

    static async sendSettingProfile({Nickname, ProfileDate, Name, Surname, City, Vk, Steam, Discord, token}: ISetting) : Promise<String| any> {

        // const data = '{"nick" : "'+Nickname+'", "date_of_birth" : "'+ProfileDate+'", "name" : "'+Name+'", "surname" : "'+Surname+'", "city" : "'+City+'", "vk" : "https://vk.com/'+Vk+'", "steam" : "https://steamcommunity.com/id/'+Steam+'", "discord" : "https://discordapp.com/users/'+Discord+' "token" : "'+token+'"}'
        const dataCorrect = {
            nick: Nickname,
            date_of_birth: ProfileDate,
            name: Name,
            surname: Surname,
            city: City,
            vk: `https://vk.com/${Vk}`,
            steam: `https://steamcommunity.com/id/${Steam}`,
            discord: `https://discordapp.com/users/${Discord}`,
            token: token
        } 
        let responce = await PostService.sendRawData(JSON.stringify(dataCorrect), 'user_profile_update.php');

        let statusCode = responce.status;

        if (statusCode == 200) 
            return responce.data['token'];
        if (statusCode == 402)
            return ''

        return statusCode.toString();
    }

    static async getCategory( token : String) : Promise<IResponse> {
        let data = {
            token: token
        }
        let response = await PostService.sendRawData(JSON.stringify(data), 'data.php');

        return response.data;
    }
}
interface IResponse{
    data: IData
}
interface IData{
    challenge_mode: ICategory,
    category: ICategory,
    category_sub: ICategory,
}
interface ISetting{
    Nickname : String,
    ProfileDate : String,
    Name : String,
    Surname : String,
    City : String,
    Vk: String,
    Steam: String,
    Discord: String,
    token : String
}
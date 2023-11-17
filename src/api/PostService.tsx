import axios, { AxiosResponse } from "axios"
import { ICard } from "../interfaces/ICard";
import { ICardInfo } from "../interfaces/ICardInfo";
import { ICategory, ICategorySub, IData, IResponse } from "../interfaces/IResponse";
import { ICity, ICityItem } from "../interfaces/ICity";
import { ISetting } from "../interfaces/ISettings";

const TOKEN = '82d586feb901a2dc7ee622cdb693240870cbe714ecaedf2edab0cda81eb7fe20302fe398c5456a72820205eb4cd41e96c6a48c1106df4cde09d054693eea7a4f'

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
        
        let responce = await PostService.sendRawData(data, 'user_agreement.php');

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

    static async sendSettingProfile({Nick, Date, Fio, City, Vk, Steam, Discord, Category, Category_sub, Token}: ISetting) : Promise<string| any> {

        const dataCorrect = {
            nick: Nick,
            date_of_birth: Date,
            fio: Fio,
            city: City,
            vk: `https://vk.com/${Vk}`,
            steam: `https://steamcommunity.com/id/${Steam}`,
            discord: `https://discordapp.com/users/${Discord}`,
            category: Category,
            category_sub: Category_sub,
            token: TOKEN
        } 
        let responce = await PostService.sendRawData(JSON.stringify(dataCorrect), 'user_profile_update.php');

        let statusCode = responce.status;

        if (statusCode == 200) 
            return responce.data['token'];
        if (statusCode == 402)
            return ''

        return statusCode.toString();
    }

    static async getCategory(token : string) : Promise<IResponse> {
        let data = {
            token: TOKEN
        }
        let response = await PostService.sendRawData(JSON.stringify(data), 'data.php');

        return response.data;
    }

    static async getCities(token: string, letter: string) : Promise<ICity> {
        let data = {
            token: TOKEN,
            letter: letter
        };
        let response = await PostService.sendRawData(JSON.stringify(data), 'city_by_letter.php');

        return response.data;
    }

    static async setImage(avatar: ArrayBuffer | null, token: string) : Promise<string> {
        let data = {
            avatar: avatar,
            token: token
        };
        let response = await PostService.sendRawData(JSON.stringify(data), 'user_update_profile_avatar.php');

        return response.data;
    }

    // static async setImage(imageData: ArrayBuffer, token: string) : Promise<void> {
    //     try {
    //       const url = 'https://uponblog.ru/api/user_update_profile_avatar.php';

    //       let config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: url,
    //         headers: {
    //             'Content-Type': 'application/octet-stream',
    //         },
    //             avatar : imageData,
    //             token : token
    //         };
    //         const response = await axios.post(config)
      
    //       console.log('Image upload successful:', response.data);
    //     } catch (error) {
    //       console.error('Error uploading image:', error);
    //     }
    //   };
}
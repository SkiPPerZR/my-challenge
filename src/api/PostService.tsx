import axios, { AxiosResponse } from "axios"
import { ICard } from "../interfaces/ICard";
import { ICardInfo } from "../interfaces/ICardInfo";
import { ICategory, ICategorySub, IData, IResponse } from "../interfaces/IResponse";
import { ICity, ICityItem } from "../interfaces/ICity";
import { ISetting } from "../interfaces/ISettings";
import { ILogin } from "../interfaces/ILogin";

const TOKEN = '82d586feb901a2dc7ee622cdb693240870cbe714ecaedf2edab0cda81eb7fe20302fe398c5456a72820205eb4cd41e96c6a48c1106df4cde09d054693eea7a4f'
const MYTOKEN = 'd875845675a0affbc47a11c3e4997b180849ab397a93bdc0e445bdccc0d6021c1868902abece3465e04c063e11b907604340f99099fe37524f1202c5ff36c974'

export default class PostService {
    static async sendRawData(data: String, url: String): Promise<AxiosResponse> {
        const BASE_URL = 'https://uponblog.ru/api/';

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BASE_URL + url,
            headers: {
                'Content-Type': 'text/plain' // application/json
            },
            data
        };

        const responce = await axios.request(config);

        return responce;
    }

    static async sendRawDataForm(data: String, url: String): Promise<AxiosResponse> {
        const BASE_URL = 'https://form.upon.ru/api/';

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BASE_URL + url,
            headers: {
                'Content-Type': 'text/plain' // application/json
            },
            data
        };

        const responce = await axios.request(config);

        return responce;
    }

    static async getChallengeList(type: String): Promise<ICard[]> {
        const data = `{"type" : "${type}", "token" : "6d432d60ef3bc832fb651ede7ab89cf2bec45cf0d2208dcf8c2f3a2fd5b151e1bb1b800b304e7798b6fc017128b7aea0bfe30dbd61f702599520e1a74ce1071d"}`;

        const responce = await PostService.sendRawData(data, 'challenge_list.php');

        const cardListFromApi: ICard[] = responce.data.challenge;

        return cardListFromApi;
    }

    static async getChallengeInfo(token_challenge: String): Promise<ICardInfo> {
        const data = `{"token" : "6d432d60ef3bc832fb651ede7ab89cf2bec45cf0d2208dcf8c2f3a2fd5b151e1bb1b800b304e7798b6fc017128b7aea0bfe30dbd61f702599520e1a74ce1071d", "token_challenge" : "${token_challenge}"}`;

        const responce = await PostService.sendRawData(data, 'challenge_info.php');
        const cardInfoFromApi: ICardInfo = responce.data.challenge[0];

        return cardInfoFromApi
    }

    static async sendPhone(phone: string): Promise<string> {

        const data = `{"phone" : "${phone}"}`;

        const responce = await PostService.sendRawData(data, 'user_registration_by_phone.php');

        const statusCode = responce.status;

        if (statusCode === 200)
            return responce.data.token; // заменить на сохранение в кеш

        return statusCode.toString();
    }

    static async sendPhoneLogin(phone: string): Promise<string> {

        const data = `{"phone" : "${phone}"}`;

        const responce = await PostService.sendRawData(data, 'user_login_by_phone.php');

        const statusCode = responce.status;

        if (statusCode === 200) {
            return responce.data.token;
        }
        if ((statusCode === 401)) {
            return responce.data.error;
        }

        return responce.data;
    }

    static async sendPhoneCodeLogin(code: String, token: String): Promise<String> {

        const data = `{"phone_code" : "${code}", "token" : "${token}"}`;

        const responce = await PostService.sendRawData(data, 'user_registration_by_phone.php');

        const statusCode = responce.status;

        if (statusCode === 200)
            return responce.data.token;

        if (statusCode === 401)
            return responce.data.message;

        return statusCode.toString();
    }


    static async sendPhoneCode(code: String, token: String): Promise<String> {

        const data = `{"phone_code" : "${code}", "token" : "${token}"}`;

        const responce = await PostService.sendRawData(data, 'user_registration_by_phone.php');

        const statusCode = responce.status;

        if (statusCode === 200)
            return responce.data.token;

        // if (statusCode ===401)
        //     return responce.data['message'];

        return statusCode.toString();
    }

    static async sendPhoneCodeAgain(token: String): Promise<String> {

        const data = {
            token
        }
        const responce = await PostService.sendRawData(JSON.stringify(data), 'user_registration_by_phone_repeat_code.php');

        return responce.data;
    }

    static async sendEmailCode(code: String, token: String): Promise<String> {

        const data = `{"email_code" : "${code}", "token" : "${token}"}`;

        const responce = await PostService.sendRawData(data, 'user_registration_by_email.php');

        const statusCode = responce.status

        if (statusCode === 200)
            return responce.data.token;

        return statusCode.toString();
    }

    static async emailLogin(email: string, password: string): Promise<ILogin> {
        const data = {
            email,
            password
        }

        const response = await PostService.sendRawData(JSON.stringify(data), 'user_login_by_email.php');

        return response.data;
    }

    static async emailSignUp(email: string, password: string): Promise<string> {
        const data = `{"email" : "${email}", "password" : "${password}", "password_repeat" : "${password}"}`;

        const responce = await PostService.sendRawData(data, 'user_registration_by_email.php');

        const statusCode = responce.status;

        if (statusCode === 200)
            return responce.data.token;

        return statusCode.toString(); // заменить на сохранение в кеш
    }

    static async sendAgreement(isTerms: String, isPrivacy: String, token: String): Promise<String> {

        const data = `{"is_terms_of_use" : "${isTerms}", "is_privacy_policy" : "${isPrivacy}", "token" : "${token}"}`

        const responce = await PostService.sendRawData(data, 'user_agreement.php');

        const statusCode = responce.status;

        if (statusCode === 200)
            return responce.data.token;
        if (statusCode === 402)
            return ''

        return statusCode.toString();
    }

    static async sendSettingProfile({ nick, date_of_birth, fio, city, vk, steam, discord, category, category_sub, token }: ISetting): Promise<string | any> {

        const dataCorrect = {
            nick,
            date_of_birth,
            fio,
            city,
            vk: `https://vk.com/${vk}`,
            steam: `https://steamcommunity.com/id/${steam}`,
            discord: `https://discordapp.com/users/${discord}`,
            category,
            category_sub,
            token
        }
        const responce = await PostService.sendRawData(JSON.stringify(dataCorrect), 'user_profile_update.php');

        const statusCode = responce.status;

        if (statusCode === 200)
            return responce.data.token;
        if (statusCode === 402)
            return ''

        return statusCode.toString();
    }

    static async getProfileData(token: string | null): Promise<ISetting> {
        const data = {
            token
        }
        const response = await PostService.sendRawData(JSON.stringify(data), 'user_profile_info.php');

        return response.data;
    }

    static async getCategory(token: string): Promise<IResponse> {
        const data = {
            token
        }
        const response = await PostService.sendRawData(JSON.stringify(data), 'data.php');

        return response.data;
    }

    static async getCities(token: string, letter: string): Promise<ICity> {
        const data = {
            token,
            letter
        };
        const response = await PostService.sendRawData(JSON.stringify(data), 'city_by_letter.php');

        return response.data;
    }

    static async setImage(avatar: any, token: string): Promise<any> {

        // const formData = new FormData();
        //     formData.append('avatar', avatar);
        //     formData.append('token', MYTOKEN);
        //     console.log(formData)
        const data = {
            token,
            avatar
        };
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://uponblog.ru/api/user_update_profile_avatar.php',
            headers: {
                'Content-Type': 'multipart/form-data' // application/json
            },
            data
        };


        try {
            const response = await axios.request(config);
            console.log(response.data);
            // Дополнительная обработка успешной загрузки изображения
        } catch (error) {
            console.error(error);
            // Обработка ошибок загрузки изображения
        }
    }

    static async deleteAccount(token: string): Promise<string> {
        const data = {
            token
        };
        const response = await PostService.sendRawData(JSON.stringify(data), 'user_is_delete.php');

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
import axios from "axios"

export default class PostService {
    static async getChallengeList() {
        let data = '{\r\n\t"type" : "all", \r\n\t"token" : "2704a8149172386fcb7b01408c0c35c343fd9dfc7c02aab5321da2c40358d8ea635eaedfc1b01f44551a554c5192723c60359fad0db538ef994644ab0b40d1a0"\r\n}';

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://form.upon.ru/api/challenge_list.php',
            headers: { 
            'Content-Type': 'text/plain'
        },
            data : data
        };

        axios.request(config)
        .then((response: any) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((e) => {
            console.log(e)
        });
    }
}
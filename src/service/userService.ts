import axios from 'redaxios';

export default class userService {
    static async fetchById(userId: number) {
        console.log(userId);
        return axios.get('https://reqres.in/api/users');
    }
}

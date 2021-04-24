import axios from 'redaxios';

export default class userService {
    static async fetchById(userId: number) {
        return await axios.get(`https://reqres.in/api/users`);
    }
}
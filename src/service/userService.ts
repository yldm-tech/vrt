import axios, { Response } from 'redaxios';

export default class userService {
	static async fetchById<T>(userId: number): Promise<Response<T>> {
		console.log(userId);
		return axios.get('https://reqres.in/api/users');
	}
}

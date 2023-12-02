import axios from 'axios';
import {IData} from '../types/types.tsx';

export const ApiService = {
	async getAll(){
		try {
			const res = await axios.get<IData>(`${import.meta.env.VITE_API_URL}`,{
				params:{
					access_key:import.meta.env.VITE_API_ACCESS_KEY
				}
			})
			return res.data.rates
		}catch (e){
			console.log(e)
		}
	}
}

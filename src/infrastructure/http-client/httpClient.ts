import Axios from 'axios';
import {DeleteAttributes, GetAttributes, HttpClientDef, PostAttributes, PutAttributes} from './types';

class HttpClient implements HttpClientDef{
	get({url, config}: GetAttributes ): Promise<any>{
		return Axios.get(url, config);
	}
    
	post({url, data, config}: PostAttributes): Promise<any>{
		return Axios.post(url, data, config);
	}
    
	put({url, data, config}: PutAttributes): Promise<any>{
		return Axios.put(url, data, config);
	}
  
	delete({url, config}: DeleteAttributes): Promise<any> {
		return Axios.delete(url, config);
	}
}

export const httpClient = new HttpClient();
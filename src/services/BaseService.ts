import APIConfig from "./APIConfig";

class BaseService {
	serviceUrl: string = "";

	constructor(serviceUrl: string) {
		this.serviceUrl = serviceUrl;
	}

	async getAll(): Promise<any> {
		const response = await APIConfig.get(`${this.serviceUrl}`);
		return response;
	}

	async get(id: number, filters: any): Promise<any> {
		const response = await APIConfig.get(`${this.serviceUrl}/${id}`, {
			params: filters,
		});
		return response;
	}

	async post(data: any): Promise<any> {
		const response = await APIConfig.post(`${this.serviceUrl}/`, data);
		return response;
	}

	async put(id: number, data: any): Promise<any> {
		const response = await APIConfig.put(`${this.serviceUrl}/${id}/`, data);
		return response;
	}

	async patch(id: number, data: FormData): Promise<any> {
		const response = await APIConfig.patch(
			`${this.serviceUrl}/${id}/`,
			data
		);
		return response;
	}

	async delete(id: number): Promise<any> {
		const response = await APIConfig.delete(`${this.serviceUrl}/${id}/`);
		return response;
	}
}

export default BaseService;

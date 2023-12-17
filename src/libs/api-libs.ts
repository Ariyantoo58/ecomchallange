import axios from "axios";

const endpoint = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getProductResponse = async () => {
	const configurationObject = {
		method: "GET",
		url: `${endpoint}/api/products`,
	};
	try {
		const response = await axios(configurationObject);
		return response.data.data;
	} catch (error) {
		return error;
	}
};
export const getProductDetail = async (id: number) => {
	const configurationObject = {
		method: "GET",
		url: `${endpoint}/api/products/${id}`,
	};
	try {
		const response = await axios(configurationObject);
		return response.data.data;
	} catch (error) {
		return error;
	}
};
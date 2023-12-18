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
export const CreateProductResponse = async (body: any) => {
	const configurationObject = {
		method: "POST",
		url: `${endpoint}/api/products`,
		data: body,
	};
	try {
		const response = await axios(configurationObject);
		return response;
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
export const createCart = async (body: any) => {
	const configurationObject = {
		method: "POST",
		url: `${endpoint}/api/carts`,
		data: body,
	};
	try {
		const response = await axios(configurationObject);
		return response;
	} catch (error) {
		return error;
	}
};
export const getCart = async () => {
	const configurationObject = {
		method: "GET",
		url: `${endpoint}/api/carts`,
	};
	try {
		const response = await axios(configurationObject);
		return response.data;
	} catch (error) {
		return error;
	}
};

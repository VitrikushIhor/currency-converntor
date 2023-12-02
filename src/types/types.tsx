export interface ICurrencyRates {
	[currency: string]: number;
}

export interface IData {
	success: boolean;
	timestamp: number;
	base: string;
	date: string;
	rates: ICurrencyRates;
}

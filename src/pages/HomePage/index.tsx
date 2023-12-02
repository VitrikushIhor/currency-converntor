import {FC, useEffect, useState} from 'react';
import {CurrencyInput} from '../../components/CurrencyInput';
import {ApiService} from '../../services/api-service.ts';
import {ICurrencyRates} from '../../types/types.tsx';
import {Header} from '../../components/Header';


export const HomePage: FC = () => {

	const [amountFirst, setAmountFirst] = useState<number>(1)
	const [amountSecond, setAmountSecond] = useState<number>(1)
	const [currencyFirst, setCurrencyFirst] = useState<string>('USD')
	const [currencySecond, setCurrencySecond] = useState<string>('UAH')
	const [rates, setRates] = useState<ICurrencyRates>({});

	useEffect(() => {
		async function fetchData(){
		const res = await ApiService.getAll()
			if (res){
				setRates(res)
			}
		}
		fetchData()
	}, []);

	useEffect(() => {
		if (Object.keys(rates).length > 0) {
			handleAmount1Change(1);
		}
	}, [rates]);

	const format = (number: number): string =>{
		return number.toFixed(4);
	}

	const handleAmount1Change = (amount1: number): void => {
		setAmountSecond(parseFloat(format(amount1 * rates[currencySecond] / rates[currencyFirst])));
		setAmountFirst(amount1);
	}

	const handleCurrency1Change = (currency1: string): void => {
		setAmountSecond(parseFloat(format(amountFirst * rates[currencySecond] / rates[currency1])));
		setCurrencyFirst(currency1);
	}

	const handleAmount2Change = (amount2: number): void => {
		setAmountFirst(parseFloat(format(amount2 * rates[currencyFirst] / rates[currencySecond])));
		setAmountSecond(amount2);
	}

	const handleCurrency2Change = (currency2: string): void => {
		setAmountFirst(parseFloat(format(amountSecond * rates[currencyFirst] / rates[currency2])));
		setCurrencySecond(currency2);
	}

	return (
		 <div>
			 <Header rates={rates}/>
			 <h1>Currency Converter</h1>
			 <CurrencyInput
					onAmountChange={handleAmount1Change}
					onCurrencyChange={handleCurrency1Change}
					currencies={Object.keys(rates)}
					amount={amountFirst}
					currency={currencyFirst}
			 />
			 <CurrencyInput
					onAmountChange={handleAmount2Change}
					onCurrencyChange={handleCurrency2Change}
					currencies={Object.keys(rates)}
					amount={amountSecond}
					currency={currencySecond}
			 />
		 </div>
	);
};

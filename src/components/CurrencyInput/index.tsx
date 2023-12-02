import {FC} from 'react';
import styles from './styles.module.scss';

export interface ICurrencyInput {
	amount:number
	currency:string
	currencies:any[]
	onCurrencyChange:(currency:string)=>void
	onAmountChange:(amount:number)=>void
}

export const CurrencyInput: FC<ICurrencyInput> = ({onCurrencyChange,currencies,currency,onAmountChange,amount}) => {
	return (
		 <div className={styles.group}>
			 <input type="text" value={amount} onChange={e => onAmountChange(Number(e.target.value))} />
			 <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
				 {currencies.map((currency => (
						<option key={currency} value={currency}>{currency}</option>
				 )))}
			 </select>
		 </div>
	);
};


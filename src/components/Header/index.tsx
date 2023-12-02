import {FC} from 'react';
import styles from './styles.module.scss';
import {ICurrencyRates} from '../../types/types.tsx';

export interface IHeader {
	rates:ICurrencyRates
}

export const Header: FC<IHeader> = ({rates}) => {
		 return (
		 <div className={styles.wrapper}>
			 <div className={styles.container}>
				 <div><span>UAH</span> - <span>{rates["UAH"]}</span></div>
				 <div><span>USD</span> - <span>{rates["USD"]}</span></div>
				 <div><span>EUR</span> - <span>{rates["EUR"]}</span></div>
			 </div>
		 </div>
	);
};


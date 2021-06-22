import { IProps } from "./interface";
import styles from "./styles.module.scss";

const Button = ({ children }: IProps) => {
	return (
		<button className={styles.button}>
			<img src="/icons/sports_esports_black_24dp.svg" />
			<h3>{children}</h3>
		</button>
	);
};

export default Button;

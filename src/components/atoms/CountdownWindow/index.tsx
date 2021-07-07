import { Props } from "./interface";
import styles from "./styles.module.scss";

const CountdownWindow = ({ children }: Props) => {
	return (
		<div className={styles.countdown}>
			<h3>{children}</h3>
		</div>
	);
};

export default CountdownWindow;

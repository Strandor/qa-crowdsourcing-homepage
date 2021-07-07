import styles from "./styles.module.scss";
import { Props } from "./interface";

const WrapperMaximus = ({ children }: Props) => {
	return <div className={styles.outer}>{children}</div>;
};

export default WrapperMaximus;

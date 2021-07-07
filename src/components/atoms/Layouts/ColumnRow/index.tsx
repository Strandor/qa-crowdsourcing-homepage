import { Props } from "./interface";
import styles from "./styles.module.scss";

const ColumnRow = ({ children }: Props) => {
	return <div className={styles.outer}>{children}</div>;
};

export default ColumnRow;

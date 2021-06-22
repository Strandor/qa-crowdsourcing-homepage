import { IProps } from "./interface";
import styles from "./styles.module.scss";

const CenteredWrapper = ({ children }: IProps) => {
	return <div className={styles.centered}>{children}</div>;
};

export default CenteredWrapper;

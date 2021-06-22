import { IProps } from "./interface";
import styles from "./styles.module.scss";

const PaddingWrapper = ({ children, backgroundColor }: IProps) => {
	return (
		<div
			className={styles.outer}
			style={{
				backgroundColor,
			}}
		>
			{children}
		</div>
	);
};

export default PaddingWrapper;

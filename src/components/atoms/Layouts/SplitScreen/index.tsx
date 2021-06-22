import { IProps } from "./interface";
import styles from "./styles.module.scss";

const SplitScreen = ({ leftSide, rightSide }: IProps) => {
	return (
		<div className={styles.outer}>
			<div>{rightSide}</div>
			<div
				style={{
					maxWidth: "400px",
				}}
			>
				{leftSide}
			</div>
		</div>
	);
};

export default SplitScreen;

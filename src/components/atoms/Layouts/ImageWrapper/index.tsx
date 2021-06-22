import { IProps } from "./interface";
import styles from "./styles.module.scss";

const ImageWrapper = ({ src }: IProps) => {
	return (
		<div className={styles.wrapper}>
			<img src={src} className={styles.img} />
		</div>
	);
};

export default ImageWrapper;

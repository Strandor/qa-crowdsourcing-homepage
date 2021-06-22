import { IProps } from "./interface";
import styles from "./contributor.module.scss";

const Contributor = ({ name, description, imageURL }: IProps) => {
	return (
		<div className={styles.outer}>
			<div className={styles.imageWrapper}>
				<img src={imageURL} />
			</div>
			<div className={styles.textWrapper}>
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Contributor;

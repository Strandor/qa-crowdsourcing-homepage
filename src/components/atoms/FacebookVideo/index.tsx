import { Props } from "./interface";
import styles from "./styles.module.scss";

const FacebookVideo = ({ src }: Props) => {
	return (
		<iframe
			src={`https://www.facebook.com/plugins/video.php?height=314&href=${src}&show_text=false`}
			frameBorder="0"
			className={styles.video}
			allowFullScreen={true}
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
		/>
	);
};

export default FacebookVideo;

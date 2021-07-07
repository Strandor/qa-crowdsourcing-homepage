import { Props } from "./interface";

const LoadingWrapper = ({ isLoading, children }: Props) => {
	if (!isLoading) return children;

	return (
		<div>
			<p>Loading</p>
		</div>
	);
};

export default LoadingWrapper;

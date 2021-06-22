import type { AppProps } from "next/app";
import * as Components from "../components";
import "../styles/app.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Components.Layout.LayoutWrapper>
			<title>Spurningar.is</title>
			<Component {...pageProps} />
		</Components.Layout.LayoutWrapper>
	);
};

export default MyApp;

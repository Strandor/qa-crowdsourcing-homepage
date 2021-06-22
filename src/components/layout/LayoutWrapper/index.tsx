import React from "react";
import * as Layout from "..";
import { IProps } from "./interface";

const LayoutWrapper = ({ children }: IProps) => {
	return (
		<>
			<Layout.Header />
			{children}
			<Layout.Footer />
		</>
	);
};

export default LayoutWrapper;

import React from "react";
import { IProps } from "./interface";
import styles from "./styles.module.scss";

const Title = ({ children }: IProps) => {
	return <h1 className={styles.title}>{children}</h1>;
};

export default Title;

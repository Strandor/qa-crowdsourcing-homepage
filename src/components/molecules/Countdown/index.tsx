import { useEffect, useMemo, useState } from "react";
import * as Atoms from "../../atoms";
import { Props } from "./interface";
import styles from "./styles.module.scss";

const Countdown = ({ time, children }: Props) => {
	const getDiffTime = () => time.getTime() - new Date().getTime();
	const [diffTime, setDiffTime] = useState(getDiffTime());

	useEffect(() => {
		const interval = setInterval(() => setDiffTime(getDiffTime()), 1000);

		return () => clearInterval(interval);
	}, []);

	const rawSeconds = useMemo(
		() => (diffTime > 0 ? Math.floor(diffTime / 1000) : 0),
		[diffTime]
	);
	const second = useMemo(() => rawSeconds % 60, [rawSeconds]);
	const minute = useMemo(() => ((rawSeconds - second) / 60) % 60, [rawSeconds]);
	const hour = useMemo(
		() => ((rawSeconds - second - minute * 60) / (60 * 60)) % 24,
		[rawSeconds]
	);
	const day = useMemo(
		() => (rawSeconds - second - minute * 60 - hour * 60 * 60) / (60 * 60 * 24),
		[rawSeconds]
	);

	const secondHour = useMemo(() => hour % 10, [hour]);
	const firstHour = useMemo(() => (hour - secondHour) / 10, [hour, secondHour]);

	const secondMinute = useMemo(() => minute % 10, [minute]);
	const firstMinute = useMemo(
		() => (minute - secondMinute) / 10,
		[minute, secondMinute]
	);

	const secondSecond = useMemo(() => second % 10, [second]);
	const firstSecond = useMemo(
		() => (second - secondSecond) / 10,
		[second, secondSecond]
	);

	const secondDay = useMemo(() => day % 10, [day]);
	const firstDay = useMemo(() => (day - secondDay) / 10, [day, secondDay]);

	if (rawSeconds === 0) return children;

	return (
		<div className={styles.outer}>
			<Atoms.CountdownWindow>{`${firstDay}`}</Atoms.CountdownWindow>
			<Atoms.CountdownWindow>{`${secondDay}`}</Atoms.CountdownWindow>
			<h3>:</h3>
			<Atoms.CountdownWindow>{`${firstHour}`}</Atoms.CountdownWindow>
			<Atoms.CountdownWindow>{`${secondHour}`}</Atoms.CountdownWindow>
			<h3>:</h3>
			<Atoms.CountdownWindow>{`${firstMinute}`}</Atoms.CountdownWindow>
			<Atoms.CountdownWindow>{`${secondMinute}`}</Atoms.CountdownWindow>
			<h3>:</h3>
			<Atoms.CountdownWindow>{`${firstSecond}`}</Atoms.CountdownWindow>
			<Atoms.CountdownWindow>{`${secondSecond}`}</Atoms.CountdownWindow>
		</div>
	);
};

export default Countdown;

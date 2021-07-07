import Link from "next/link";
import * as Atoms from "../../atoms";
import style from "./style.module.scss";

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.links}>
				<div>
					<Link href="/">
						<p>Heim</p>
					</Link>
				</div>
				<div>
					<Link href="/app">
						<p>Appið</p>
					</Link>
				</div>
				<div>
					<Link href="/team">
						<p>Teymið</p>
					</Link>
				</div>
				<div>
					<Link href="/stream">
						<p>Streymið</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;

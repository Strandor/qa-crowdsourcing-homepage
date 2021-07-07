import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import * as Atoms from "../../atoms";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={styles.outer}>
			<div>
				<h2>Taktu þátt</h2>
				<Link href="/app">
					<a>
						<Atoms.Button>Náðu í appið</Atoms.Button>
					</a>
				</Link>
				<div className={styles.socials}>
					<a href="https://twitter.com/SpurningarI">
						<img src="/icons/iconmonstr-twitter-1.svg" />
					</a>
					<a href="https://instagram.com/spurningar.is_app">
						<img src="/icons/iconmonstr-instagram-11.svg" />
					</a>
					<a href="https://facebook.com/spurningar.is">
						<img src="/icons/iconmonstr-facebook-4.svg" />
					</a>
				</div>
			</div>
			<div className={styles.links}>
				<div>
					<h3>Leikurinn</h3>
					<Link href="/">
						<a>
							<p>Heimasíða</p>
						</a>
					</Link>
					<Link href="/app">
						<a>
							<p>Appið</p>
						</a>
					</Link>
					<Link href="/stream">
						<a>
							<p>Streymið</p>
						</a>
					</Link>
				</div>
				<div>
					<h3>Lagalegt</h3>
					<Link href="/terms">
						<a>
							<p>Skilmálar</p>
						</a>
					</Link>
					<Link href="/privacy">
						<a>
							<p>Persónuvernd</p>
						</a>
					</Link>
					<Link href="/cookies">
						<a>
							<p>Vafrakökur</p>
						</a>
					</Link>
				</div>
				<div>
					<h3>Spurningar</h3>
					<Link href="/team">
						<a>
							<p>Teymið</p>
						</a>
					</Link>
					<Link href="/about">
						<a>Um okkur</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;

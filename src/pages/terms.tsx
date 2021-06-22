import * as Components from "../components";
import Link from "next/link";

const TermsOfService = () => {
	return (
		<Components.Atoms.Layouts.PaddingWrapper backgroundColor="white">
			<>
				<h1>Skilmálar vegna þátttöku í gerð gagnasafns</h1>
				<p>
					<i>Skilmálar voru uppfærðir 21. júní 2021</i>
				</p>
				<p>
					Í spurningaleiknum{" "}
					<Link href="/">
						<a>Spurningar.is</a>
					</Link>{" "}
					getur þú tekið þátt í gerð gagnasafnsins Reykjavik University Question
					Answering Dataset (RUQuAD). Þátttaka þín felst í að þú spyrð og
					yfirferð spurningar ásamt því að þú finnur, merkir og yfirferð svör í
					textum við spurningum sem sendar hafa verið inn í leikinn.
					Spurningarnar og svörin sem verða til út frá þátttöku notenda verða
					notuð við gerð opins gagnasafns. Gagnasafnið mun nýtast rannsóknar- og
					þróunaraðilum við þróun á máltæknilausnum fyrir íslensku sem snúa að
					spurningasvörun. Sem dæmi þá er hægt að nota svona gagnasafn við þróun
					gervigreindarlíkans sem lærir að svara spurningum á íslensku.
				</p>
				<h3>Þátttaka í gerð gagnasafnsins RUQuAD</h3>
				<p>
					Allir geta tekið þátt í gerð gagnasafnsins RUQuAD. Þátttakan felur í
					sér að taka þátt í spurningaleik þar sem markmiðið er að safna
					hagnýtum spurningum og svörum. Mikilvægt er að spurningar séu settar
					fram á skiljanlegan hátt. Meti umsjónaraðilar að um rangar
					upplýsingar, vitlaus svör eða ósvaranlegar spurningar sé að ræða sem
					geti haft neikvæð áhrif á gæði gagnasafnins áskila þeir sér þann rétt
					að fjarlægja gögnin.
				</p>
				<p>
					Sem þátttakandi samþykkir þú að allt þitt framlag (spurningar,
					yfirferðir á spurningum og svörum, fundin og merkt svör) verði hluti
					af gagnasafninu RuQuAD sem verður gefið út með{" "}
					<Link href="https://creativecommons.org/licenses/by/4.0/">
						<a>Creative Commons by attribution</a>
					</Link>{" "}
					leyfi Gagnasafnið RuQuAD mun ekki innihalda neinar persónugreinanlegar
					upplýsingar.
				</p>
				<p>
					Vegna eðli söfnunarinnar og tæknilegrar uppsetningar er ekki hægt að
					eyða framlagi einstaka notenda eftir að það hefur verið sent inn. Því
					er ekki hægt að uppfylla óskir um að fjarlægja spurningar, svör eða
					yfirferðir notenda þegar slík framlög hafa verið vistuð í gagnagrunni.
				</p>
				<h3>Vinningar</h3>
				<p>
					Með þátttöku þinni við gerð gagnasafnsins átt þú möguleika á að vera
					dregin/n út sem vinningshafi. Vinningarnir skiptast í nokkra flokka. Í
					hverjum flokki er sett ákveðið takmark um framlag þitt til
					gagnasöfnunarinnar. Með því að fara á síðuna spurningar.is/vinningar
					er hægt að sjá lista yfir þá vinninga sem eru í boði í hverjum flokki
					og þau takmörk sem þarf að ná. Þegar þú hefur náð viðeigandi takmarki
					í tilgreindum flokki, átt þú möguleika á því að vinna vinning úr þeim
					flokki. Vinningar verða dregnir út með slembiúrtaki úr hverjum flokki
					fyrir sig. Við úrdrátt vinninga verða notendanöfn vinninshafa tilkynnt
					opinberlega.
				</p>
				<h3>Aðgengi að gagnasafni</h3>
				<p>
					Gagnasafnið verður aðgengilegt í heild sinni með{" "}
					<Link href="https://creativecommons.org/licenses/by/4.0/">
						<a>Creative Commons by attribution</a>
					</Link>{" "}
					leyfi. Þær veitur sem munu bjóða upp á niðurhal gagnasafnsins verða
					tilgreindar á vefnum spurningar.is. Þær veitur verða tilgreindar þegar
					gagnasafnið er tilbúið til útgáfu.
				</p>
				<h3>Samskipti</h3>
				<p>
					Ef þú skráir þig á póstlista spurningar.is mun umsjónaraðili senda þér
					tölvupósta um þína framgöngu, nýja vinninga, framgang
					gagnasöfnunarinnar og mögulega frekara kynningarefni um verkefnið. Þér
					er gefinn kostur að skrá þig af póstlistanum í öllum skeytum sem þér
					berast.
				</p>
				<h3>Vafrakökur (e.cookies)</h3>
				<p>
					Sjá vafrakökustefnu{" "}
					<Link href="/cookies">
						<a>hér</a>
					</Link>
				</p>
				<h3>Fyrirvari</h3>
				<p>
					Háskólinn í Reykjavík er undanþeginn hvers kyns bótaábyrgð vegna
					notkunar gagnasafnsins sem aðgengilegt er öllum með{" "}
					<Link href="https://creativecommons.org/licenses/by/4.0/">
						<a>Creative Commons by attribution</a>
					</Link>{" "}
					leyfi.
				</p>
				<h3>Brot á skilmálum</h3>
				<p>
					Ef upp kemst um brot þátttakenda á þessum skilmálum áskilja
					aðstandendur sér rétt til að fjarlægja framlög viðkomandi þátttakanda
					úr gagnasafninu.
				</p>
				<h3>Annað</h3>
				<p>
					Hægt er að hafa samband við okkur í gegnum netfangið{" "}
					<a href="mailto:spurningarapp@hr.is">spurningarapp@hr.is</a>.
					Skilmálar vegna þátttöku í gerð gagnasafnsins RUQuAD eru endurskoðaðir
					eftir þörfum og kunna því að taka breytingum ef tilefni er til.
				</p>
			</>
		</Components.Atoms.Layouts.PaddingWrapper>
	);
};

export default TermsOfService;

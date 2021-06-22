import * as Components from "../components";

const Cookies = () => {
	return (
		<Components.Atoms.Layouts.PaddingWrapper backgroundColor="white">
			<>
				<h1>Vafrakökustefna</h1>
				<p>
					Þessi vefsíða notar vafrakökur (e. cookies) til að bæta upplifun þína
					á vefsíðunni.
				</p>
				<h3>Hvað er vafrakaka?</h3>
				<p>
					Vafrakökur (e. cookies) eru stafræn fótspor sem eru dulkóðaðir
					textastrengir sem vefsíða geymir á tölvu notandans í textaskrá. Þær
					gerðir af kökum sem við notum eru „lotukökur“ (e. session cookies) og
					„viðvarandi kökur“ (e. persistent cookies). Lotukökur eru tímabundnar
					og þeim er sjálfkrafa eytt þegar þú yfirgefur vefsíðuna okkar.
					Viðvarandi kökur eru geymdar áfram í tölvunni þinni þar til þú eyðir
					þeim. Vefgeymsla vafra (e. web storage) gerir vefsvæðum kleift að
					geyma gögn, sem eru yfirleittt stærri en vafrakökur, í tölvu notanda
					en eru einungis lesanlegar í hefðbundnu notendaviðmóti. Í vefgeymslu
					vafra notandans nýtir vefurinn „staðbundna geymslu“ (e. local storage)
					og „lotugeymslu“ (e. session storage). Gögn í lotugeymslu vafrans eru
					geymd tímabundið og er sjálfkrafa eytt þegar þú yfirgefur vefsíðuna.
					Gögn í staðbundinni geymslu vafrans eru áfram í tölvunni þinni þar til
					þú eyðir þeim.
				</p>
				<p>
					Án notkunar á vafrakökum og vefgeymslu vafra gæti upplifun þín á
					síðunni versnað og vefsíðan ekki virkað eins og til var ætlast.
				</p>
				<h3>Tilgangur með notkun vafrakaka og vefgeymslu vafra</h3>
				<p>
					Vefsíðan notar vafrakökur til að mæla notkun á ýmsum undirsíðum innan
					vefsíðunnar, en það hjálpar okkur að meta hvað þarf að bæta og til að
					greina umferð á vefsíðunni. Til þess notum við vafrakökur fyrir Google
					Analyctics. Vafrakökur gera okkur kleift að bjóða upp á aukin þægindi,
					svo sem innskráningu sem og að vista upplýsingar umstillingar þínar á
					vefsíðunni. Þegar notendur t.d. loka skilaboðum frá leiðarvísi
					leiksins vistum við slíkt í staðbundinni geymslu til þess að tryggja
					að skilaboðin birtist ekki aftur að óþörfu.
				</p>
				<p>
					Við notum hvorki vafrakökur til að safna upplýsingum er varða
					heimsóknir þínar á aðrar síður, né til að safna persónulegum
					upplýsingum um þig, aðrar en þær sem þú hefur skráð hjá okkur af
					frjálsum vilja í gegnum samskipti við vefsíðuna.
				</p>
			</>
		</Components.Atoms.Layouts.PaddingWrapper>
	);
};

export default Cookies;

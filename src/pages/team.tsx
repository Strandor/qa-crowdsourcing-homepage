import * as Components from "../components";

const Team = () => {
	return (
		<>
			<Components.Atoms.Layouts.PaddingWrapper backgroundColor="#8950fc">
				<Components.Atoms.Layouts.CenteredWrapper>
					<h1>Teymið okkar</h1>
				</Components.Atoms.Layouts.CenteredWrapper>
			</Components.Atoms.Layouts.PaddingWrapper>
			<Components.Atoms.Layouts.PaddingWrapper backgroundColor="white">
				<>
					<Components.Atoms.Contributor
						name="Hrafn Loftsson"
						description="Hrafn Loftsson er dósent í tölvunarfræði við Háskólann í Reykjavík (HR) og meðlimur í Gervigreindarsetri og Mál- og raddtæknistofu HR. Rannsóknir Hrafns eru á sviði máltækni þar sem markmiðið er að þróa búnað sem getur unnið með og skilið náttúruleg tungumál og stuðla að notkun þeirra í samskiptum manns og tölvu. Rannsóknir og þróunarverkefni Hrafns hafa sérstaklega beinst að smíði hugbúnaðar til að vinna með og greina íslensku."
						imageURL="/images/contributors/hrafn_loftsson.png"
					/>
					<Components.Atoms.Contributor
						name="Njáll Skarphéðinsson"
						description="Njáll Skarphéðinsson er upphafsmaður gagnasöfnunarinnar. Hann hefur lokið BSc gráðu í tölvunarfræði frá Háskólanum í Reykjavík og er nú í mastersnámi í gervigreind við fremsta háskóla heims á því sviði, Carnegie Mellon. Hann hefur stýrt þróun og leitt teymið áfram til þess að skapa leikinn sem er undirstaða gagnasöfnunarinnar."
						imageURL="/images/contributors/njall_skarphedinsson.png"
					/>
					<Components.Atoms.Contributor
						name="Alberta Albertsdóttir"
						description="Alberta Albertsdóttir hefur lokið BSc gráðu í ferðamálafræði frá Háskóla Íslands og stefnir á mastersnám í markaðsfræði við Háskólann í Reykjavík. Hún hefur yfirumsjón með og ber ábyrgð á markaðs- og kynningarmálum, m.a. auglýsingagerð og birtingum á samfélagsmiðlum og uppfærslum á vef verkefnisins. Þá sér hún um samskipti við fyrirtæki og fjölmiðla í samstarfi við markaðs- og samskiptasvið háskólans."
						imageURL="/images/contributors/alberta_albertsdottir.png"
					/>
					<Components.Atoms.Contributor
						name="Breki Guðmundsson"
						description="Breki Guðmundsson er BSc nemi í tölvunarfræði við Háskólann í Reykjavík. Breki stefnir á sérhæfingu í þróun vefforrita og smáforrita fyrir snjallsíma, en hann hefur tekið áfanga innan háskólans sem snúa að þeirri sérhæfingu. Breki hefur átt stóran þátt í því að koma með nýstárlegar hugmyndir og innleitt flókna virkni þætti."
						imageURL="/images/contributors/breki_gudmundsson.png"
					/>
					<Components.Atoms.Contributor
						name="Steinar Þór Smári"
						description="Steinar Smári er 19 ára, nýútskrifaður úr Menntaskólanum í Reykjavík. Þrátt fyrir ungan aldur hefur hann yfirgripsmikla þekkingu á og ótrúlega innsýn í hugbúnaðarþróun. Það mætti því helst halda að hann hafi verið að forrita öll sín 19 ár. Steinar hefur átt stóran þátt í því að koma með nýstárlegar hugmyndir, innleiða flókna virkniþætti sem og að sjá um útgáfu á hugbúnaðinum.						"
						imageURL="/images/contributors/steinar_thor_smari.png"
					/>
				</>
			</Components.Atoms.Layouts.PaddingWrapper>
		</>
	);
};

export default Team;

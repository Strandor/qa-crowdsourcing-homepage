import Link from "next/link";
import * as Components from "../components";

const App = () => {
	return (
		<>
			<Components.Atoms.Layouts.PaddingWrapper backgroundColor="#8950fc">
				<Components.Atoms.Layouts.CenteredWrapper>
					<h1>Náðu í appið</h1>
					<h4>Taktu þátt í að móta framtíð íslenskunnar</h4>
				</Components.Atoms.Layouts.CenteredWrapper>
			</Components.Atoms.Layouts.PaddingWrapper>
			<Components.Atoms.Layouts.PaddingWrapper backgroundColor="white">
				<Components.Atoms.Layouts.SplitScreen
					rightSide={
						<Components.Atoms.Layouts.ImageWrapper
							src={"/images/icon0003.png"}
						/>
					}
					leftSide={
						<>
							<h1>Spilaðu í þínu tæki</h1>
							<a href="https://play.google.com/store/apps/details?id=com.spurningaris.Spurningar">
								<Components.Atoms.Button>Android</Components.Atoms.Button>
							</a>
							<a href="https://apps.apple.com/us/app/spurningar-is/id1569804986">
								<Components.Atoms.Button>iOS</Components.Atoms.Button>
							</a>
						</>
					}
				/>
			</Components.Atoms.Layouts.PaddingWrapper>
		</>
	);
};

export default App;

import Link from "next/link";
import React from "react";
import * as Component from "../components";
import { PaddingWrapper } from "../components/atoms/Layouts";

const Index = () => {
	return (
		<>
			<Component.Atoms.Layouts.PaddingWrapper backgroundColor="#8950fc">
				<Component.Atoms.Layouts.SplitScreen
					leftSide={
						<>
							<h1>Skemmtilegur spurningaleikur</h1>
							<h4>
								Spurningar.is er glænýr spurningaleikur á netinu sem snýst um að
								setja fram og svara spurningum. Því fleiri spurningar og svör
								sem þú setur inn því fleiri stig færðu og því fleiri sem taka
								þátt, því skemmtilegri verður leikurinn. Ólíkir notendur skapa
								fjölbreyttari spurningar og því fjölbreyttari verður þekking
								þín. Glæsilegir vinningar eru í boði sem verða enn glæsilegri
								eftir því sem þú kemst lengra í leiknum. Prófaðu leikinn í dag í
								gegnum Android og iOS.
							</h4>
							<div>
								<Link href="/app">
									<a>
										<Component.Atoms.Button>
											Náðu í appið
										</Component.Atoms.Button>
									</a>
								</Link>
							</div>
						</>
					}
					rightSide={
						<Component.Atoms.Layouts.ImageWrapper
							src={"/images/landing_image.png"}
						/>
					}
				/>
			</Component.Atoms.Layouts.PaddingWrapper>
			<PaddingWrapper backgroundColor="white">
				<Component.Atoms.Layouts.SplitScreen
					rightSide={
						<Component.Atoms.Layouts.ImageWrapper
							src={"/images/icon0003.png"}
						/>
					}
					leftSide={
						<>
							<h2>Þú getur haft áhrif</h2>
							<p>
								Tilgangur leiksins er að styðja við íslensku í upplýsingatækni.
								Með þinni þátttöku safnast spurningar og svör í gagnagrunn sem
								nýtist í máltækniverkefnum framtíðar til þess að gera tölvum og
								snjallsímum kleift að svara spurningum á íslensku.
							</p>
							<p>
								Vefurinn og söfnunin er rannsóknarverkefni á vegum Mál- og
								raddtæknistofu Háskólans í Reykjavík.
							</p>
						</>
					}
				/>
			</PaddingWrapper>
			<PaddingWrapper backgroundColor="#fafafa">
				<Component.Atoms.Layouts.SplitScreen
					rightSide={
						<Component.Atoms.Layouts.ImageWrapper
							src={"/images/blue_closed.png"}
						/>
					}
					leftSide={
						<>
							<h2>Markmiðið</h2>
							<p>
								Markmiðið er að safna 100 þúsund spurningum og svörum. Þegar því
								verður náð munu gögnin gera fólki auðveldara að eiga samskipti
								við tölvur og snjalltæki. Meðal annars verður hægt að nýta
								gögnin til að skapa stafrænan aðstoðarmann sem talar íslensku.
							</p>
							<p>
								Hugmyndin er sú að þegar tekist hefur að safna 100 þúsund
								spurningum og svörum, þá verði hægt að kenna tölvum og
								snjallsímum að svara áður óséðum spurningum. Hægt verði að
								spyrja tæki spurningar upphátt og fá lesin svör til baka. Við
								erum sem sagt að stíga mikilvægt skref í átt að því að hægt
								verði að smíða alvöru snjallmenni sem getur lært að svara þínum
								spurningum! :)
							</p>
						</>
					}
				/>
			</PaddingWrapper>
			<PaddingWrapper backgroundColor="white">
				<Component.Atoms.Layouts.SplitScreen
					rightSide={
						<Component.Atoms.Layouts.ImageWrapper
							src={"/images/icon0003.png"}
						/>
					}
					leftSide={
						<>
							<h2>Vinningar</h2>
							<h5>
								Því fleiri sem taka þátt, því skemmtilegri verður leikurinn og
								um leið safnast fjölbreyttar spurningar og svör fyrir
								snjallmennið okkar. Glæsilegir vinningar eru í boði sem verða
								enn glæsilegri eftir því sem þú kemst lengra í leiknum. Hversu
								spennandi hljómar það?
							</h5>
						</>
					}
				/>
			</PaddingWrapper>
		</>
	);
};

export default Index;

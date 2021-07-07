import { useDispatch, useSelector } from "react-redux";
import * as Components from "../components";
import * as Redux from "src/redux";
import { useEffect, useMemo } from "react";

const Stream = () => {
	const prizedGiveaways = useSelector(
		(state: Redux.Reducers.StoreState) => state.prizeGiveaways
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Redux.Actions.fetchPrizeGiveaways());
	}, []);

	const filter = useMemo(
		() =>
			prizedGiveaways.data.sort(
				(a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
			)[0],
		[prizedGiveaways.data]
	);

	const time = useMemo(
		() =>
			prizedGiveaways.data.length > 0 ? new Date(filter.time) : new Date(),
		[prizedGiveaways.data]
	);

	return (
		<>
			<Components.Atoms.Layouts.PaddingWrapper backgroundColor="white">
				<Components.Atoms.Layouts.CenteredWrapper>
					<h1>Taktu þátt!</h1>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Components.Atoms.Layouts.LoadingWrapper
							isLoading={prizedGiveaways.isLoading}
						>
							<Components.Molecules.Countdown time={time}>
								<Components.Atoms.Layouts.WrapperMaximus>
									<Components.Atoms.FacebookVideo src="https://www.facebook.com/spurningar.is/live" />
								</Components.Atoms.Layouts.WrapperMaximus>
							</Components.Molecules.Countdown>
						</Components.Atoms.Layouts.LoadingWrapper>
					</div>
				</Components.Atoms.Layouts.CenteredWrapper>
			</Components.Atoms.Layouts.PaddingWrapper>
			<Components.Atoms.Layouts.PaddingWrapper backgroundColor="white">
				<h2>Gamlir útdrættir</h2>
				<Components.Atoms.Layouts.ColumnRow>
					<Components.Atoms.FacebookVideo src="https://www.facebook.com/spurningar.is/live" />
				</Components.Atoms.Layouts.ColumnRow>
			</Components.Atoms.Layouts.PaddingWrapper>
		</>
	);
};

export default Stream;

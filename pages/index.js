/* eslint-disable @next/next/no-sync-scripts */
import Intro from "../components/Intro";
import LandingPage from "../components/LandingPage";
import AboutUs from "../components/AboutUs";
import ParticlesWrapper from "../components/Particles";

export default function Home() {
	return (
		<div>
			<div>
				<LandingPage />
			</div>
			<div className="w-10/12 m-auto">
				<Intro />
				<AboutUs />
			</div>
		</div>
	);
}

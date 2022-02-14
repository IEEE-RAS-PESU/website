/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Intro from "../components/Intro";

export default function Home() {
	return (
		<div>
			<p className="bg-ourPurple text-white">first section</p>
			<Intro></Intro>
		</div>
	);
}

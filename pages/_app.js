/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponenets from "../components/MDXComponents";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<MDXProvider componenets={MDXComponenets}>
			<Head>
				<script
					type="module"
					src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
				></script>
				<script
					nomodule
					src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
				></script>
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</MDXProvider>
	);
}

export default MyApp;

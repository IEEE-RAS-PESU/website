import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponenets from "../components/MDXComponents";

function MyApp({ Component, pageProps }) {
	return (
		<MDXProvider componenets={MDXComponenets}>
			<Component {...pageProps} />
		</MDXProvider>
	);
}

export default MyApp;

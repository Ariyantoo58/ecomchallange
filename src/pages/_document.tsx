import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Header from "@/components/ProductsList/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Navbar />
				<Main />

				<NextScript />
				<Footer />
			</body>
		</Html>
	);
}

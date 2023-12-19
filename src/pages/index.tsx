"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/ProductsList/Header";
import ProductsList from "@/components/ProductsList";
import { getProductResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const Home = ({ products }: any) => {
	return (
		<div>
			<Navbar />
			<>
				<section className="my-8">
					<Header
						title="Paling Populer"
						linkTitle="Lihat Semua"
						linkHref="/populer"
					/>
					<ProductsList products={products} />
				</section>

				{/* <section>
          <Header title="Rekomendasi" />
          <AnimeList api={recommendedAnime} />
        </section> */}
			</>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const products = await getProductResponse();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			products,
		},
	};
}

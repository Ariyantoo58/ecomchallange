import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductResponse } from "@/libs/api-libs";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const ProductDetail = ({ product }: any) => {
	const params = useParams();
	const router = useRouter();
	const id = router.query;
	console.log({ id });
	return (
		<div>
			<Navbar />
			<></>
			<Footer />
		</div>
	);
};

export default ProductDetail;

// export async function getStaticProps() {
// 	// Call an external API endpoint to get posts.
// 	// You can use any data fetching library

// 	// const product = await getProductResponse(id);

// 	// By returning { props: { posts } }, the Blog component
// 	// will receive `posts` as a prop at build time
// 	return {
// 		props: {
// 			product: [],
// 		},
// 	};
// }

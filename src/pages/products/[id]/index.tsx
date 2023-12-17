import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Detail = () => {
	const searchParams = useSearchParams();
	const params = searchParams.get("new");

	return (
		<div>
			<Navbar />
			<>
				<Footer />
			</>
		</div>
	);
};

export default Detail;

import { ShoppingCart } from "@phosphor-icons/react";
import Link from "next/link";
// import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = () => {
	const user = true;

	const actionLabel = user ? "Sign Out" : "Sign In";
	const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

	return (
		<div className="flex justify-between gap-2">
			<Link href="/cart" className="py-1 px-10">
				<ShoppingCart fontSize={25} />
			</Link>
			{user ? (
				<Link href="/users/dashboard" className="py-1">
					Dashboard
				</Link>
			) : null}
			<Link
				href={actionURL}
				className="bg-color-dark text-color-accent py-1 px-12 inline-block"
			>
				{actionLabel}
			</Link>
		</div>
	);
};

export default UserActionButton;

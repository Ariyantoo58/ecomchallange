import { PlusSquare, ShoppingCart } from "@phosphor-icons/react";
import Link from "next/link";
import AddProduct from "./addProduct";
import { useState } from "react";

const UserActionButton = () => {
	const [open, setOpen] = useState(false);
	const user = true;

	function handleClick() {
		setOpen(!open);
	}

	const actionLabel = user ? "Sign Out" : "Sign In";
	const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

	return (
		<div className="flex justify-between gap-2">
			<button className="py-1 " onClick={handleClick}>
				<PlusSquare fontSize={27} />
				<AddProduct setOpen={setOpen} open={open} />
			</button>
			<Link
				href="/carts"
				className="bg-color-dark text-color-accent py-1 px-12 inline-block"
			>
				<ShoppingCart size={27} />
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

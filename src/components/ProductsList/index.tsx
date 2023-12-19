"use client";
import Image from "next/image";
import Link from "next/link";
import {
	FormEvent,
	Fragment,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { createCart } from "@/libs/api-libs";
import { stringify } from "querystring";

const ProductsList = ({ products }: any) => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState([]);

	const handleClick = (props: SetStateAction<never[]>) => {
		setData(props);
		setOpen(!open);
		console.log("first");
	};

	return (
		<div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
			{products.map((data: any, index: number) => (
				<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<Image
							className="rounded-t-lg"
							src={data.productImage}
							width={350}
							height={350}
							alt=""
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{data.productName}
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							{data.productDescription}
						</p>
						<a
							onClick={() => handleClick(data)}
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Read More
							<svg
								className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</a>
					</div>
				</div>
			))}

			<ModalProducts prod={data} setOpen={setOpen} open={open} />
		</div>
	);
};

export default ProductsList;

function ModalProducts({ prod, setOpen, open }: any) {
	const [loading, setLoading] = useState(true);
	const [payload, setPayload] = useState({
		productId: prod.id,
		quantity: 0,
		userId: 1,
		prodactList: prod,
	});

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		await createCart(payload).then((res: any) => {
			console.log({ res });
			// if (res.status === 200) {
			// 	setLoading(false);
			// 	setOpen(false);
			// }
		});
	};
	const [close, setClose] = useState(false);
	const cancelButtonRef = useRef(null);

	useEffect(() => {
		setPayload({
			productId: prod.id,
			quantity: 0,
			userId: 1,
			prodactList: prod,
		});
		setLoading(!loading);
	}, [open]);

	return (
		<>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					// initialFocus={cancelButtonRef}
					onClose={setClose}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 md:w-full sm:w-full sm:max-w-lg">
									<form onSubmit={(event) => handleSubmit(event)}>
										<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
											<div className="">
												<center>
													<Image
														src={prod.productImage}
														width={350}
														height={350}
														alt=""
													/>
												</center>

												<div className="mt- text-center sm:ml-4 sm:mt-5 sm:text-left my-5">
													<Dialog.Title
														as="h3"
														className="text-base font-semibold leading-6 text-gray-900"
													>
														{prod.productName}
													</Dialog.Title>
													<div className="mt-2">
														<p className="text-sm text-gray-500">
															{prod.productDescription}
														</p>
													</div>
													<div className="w-20 mt-3">
														<label
															htmlFor="visitors"
															className="block mb-2 text-sm font-medium text-gray-900 light:text-black"
														>
															Quantity
														</label>
														<input
															type="number"
															min={1}
															onChange={(e) =>
																(payload.quantity = parseInt(e.target.value))
															}
															max={20}
															id="visitors"
															className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
															placeholder=""
															required
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
											<button
												type="submit"
												className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-blue-600 hover:border-blue-600 sm:ml-3 sm:w-auto"
												onClick={() => setOpen(false)}
											>
												{loading ? (
													<div role="status">
														<svg
															aria-hidden="true"
															className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600"
															viewBox="0 0 100 101"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
																fill="currentColor"
															/>
															<path
																d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
																fill="currentFill"
															/>
														</svg>
														<span>Loading...</span>
													</div>
												) : (
													"Add Cart"
												)}
											</button>
											<button
												type="button"
												className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
												onClick={() => setOpen(false)}
												ref={cancelButtonRef}
											>
												Cancel
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}

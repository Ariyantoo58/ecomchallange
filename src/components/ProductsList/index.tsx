import Image from "next/image";
import Link from "next/link";

const ProductsList = ({ products }: any) => {
	console.log(products, "okeee");
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
							href={`/products/${data.id}`}
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<ModalProducts />
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
		</div>
	);
};

export default ProductsList;

const ModalProducts = () => {
	return (
		<>
			<button
				data-modal-target="crud-modal"
				data-modal-toggle="crud-modal"
				className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
			>
				Read More
			</button>
			<div
				id="crud-modal"
				aria-hidden="true"
				className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div className="relative p-4 w-full max-w-md max-h-full">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Create New Product
							</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-toggle="crud-modal"
							>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>

						<form className="p-4 md:p-5">
							<div className="grid gap-4 mb-4 grid-cols-2">
								<div className="col-span-2">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Type product name"
									/>
								</div>
								<div className="col-span-2 sm:col-span-1">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Price
									</label>
									<input
										type="number"
										name="price"
										id="price"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="$2999"
									/>
								</div>
								<div className="col-span-2 sm:col-span-1">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Category
									</label>
									<select
										id="category"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									>
										<option>Select category</option>
										<option value="TV">TV/Monitors</option>
										<option value="PC">PC</option>
										<option value="GA">Gaming/Console</option>
										<option value="PH">Phones</option>
									</select>
								</div>
								<div className="col-span-2">
									<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Product Description
									</label>
									<textarea
										id="description"
										className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Write product description here"
									></textarea>
								</div>
							</div>
							<button
								type="submit"
								className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								<svg
									className="me-1 -ms-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
										clip-rule="evenodd"
									></path>
								</svg>
								Add new product
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

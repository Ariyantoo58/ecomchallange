/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "dfstudio-d420.kxcdn.com",
			},
			{
				hostname: "selularid.sgp1.cdn.digitaloceanspaces.com",
			},
			{
				hostname: "cdn.timesmedia.co.id",
			},
			{
				hostname: "www.lg.com",
			},
			{
				hostname: "images.pexels.com",
			},
		],
	},
};

module.exports = nextConfig;

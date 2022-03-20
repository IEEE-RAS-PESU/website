const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx"],
	images: {
		domains: ['tailwindui.com', "unsplash.com"],
	  },
});

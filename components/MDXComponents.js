const CustomCode = (props) => {
	return <code style={{ backgroundColor: "blue" }} {...props} />;
};

const MDXComponenets = {
	p: (props) => <p style={{ fontSize: "10px" }} {...props} />,
	inlineCode: CustomCode,
};

export default MDXComponenets;

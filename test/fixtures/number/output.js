Comp.schema = {
	type: "object",
	required: ["num2", "num4"],
	properties: {
		num1: {
			type: "number"
		},
		num2: {
			type: "number"
		},
		num3: {
			type: "number"
		},
		num4: {
			type: "number"
		}
	}
};
Comp.propTypes = {
	num1: PropTypes.number,
	num2: PropTyeps.number.isRequired,
	num3: number,
	num4: number.isRequired
};


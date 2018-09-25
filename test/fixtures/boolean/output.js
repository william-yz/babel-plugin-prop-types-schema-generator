Comp.schema = {
	type: "object",
	required: ["bool2", "bool4"],
	properties: {
		bool1: {
			type: "boolean"
		},
		bool2: {
			type: "boolean"
		},
		bool3: {
			type: "boolean"
		},
		bool4: {
			type: "boolean"
		}
	}
};
Comp.propTypes = {
	bool1: PropTypes.bool,
	bool2: PropTyeps.bool.isRequired,
	bool3: bool,
	bool4: bool.isRequired
};


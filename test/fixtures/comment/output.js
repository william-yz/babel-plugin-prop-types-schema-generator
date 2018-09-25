Comp.schema = {
	type: "object",
	required: ["str2", "str4"],
	properties: {
		str1: {
			type: "string",
			title: "title for str1"
		},
		str2: {
			type: "string",
			title: "title for str2",
			extraProps1: 1
		},
		str3: {
			type: "string",
			extraProps: "3"
		},
		str4: {
			type: "string",
			prop1: 1,
			prop2: "22",
			prop3: true
		}
	}
};
Comp.propTypes = {
	// title for str1
	str1: PropTypes.string,
	// title for str2
	// extraProps1: 1
	str2: PropTyeps.string.isRequired,
	// extraProps: '3'
	str3: string,
	/**
  * prop1: 1
  * prop2: '22'
  * prop3: true
  */
	str4: string.isRequired
};


Comp.schema = {
	type: "object",
	required: ["obj2", "obj4"],
	properties: {
		obj1: {
			type: "array",
			items: {
				type: "object",
				properties: {
					key: {
						type: "string"
					},
					value: {
						type: "string"
					}
				}
			}
		},
		obj2: {
			type: "array",
			items: {
				type: "object",
				properties: {
					key: {
						type: "string"
					},
					value: {
						type: "string"
					}
				}
			}
		},
		obj3: {
			type: "array",
			items: {
				type: "object",
				properties: {
					key: {
						type: "string"
					},
					value: {
						type: "string"
					}
				}
			}
		},
		obj4: {
			type: "array",
			items: {
				type: "object",
				properties: {
					key: {
						type: "string"
					},
					value: {
						type: "string"
					}
				}
			}
		}
	}
};
Comp.propTypes = {
	obj1: PropTypes.object,
	obj2: PropTypes.object.isRequired,
	obj3: object,
	obj4: object.isRequired
};


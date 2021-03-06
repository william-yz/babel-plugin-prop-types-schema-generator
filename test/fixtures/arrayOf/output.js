Comp.schema = {
	type: "object",
	required: ["arr2", "arr4"],
	properties: {
		arr1: {
			type: "array",
			items: {
				type: "string"
			}
		},
		arr2: {
			type: "array",
			items: {
				type: "number"
			}
		},
		arr3: {
			type: "array",
			items: {
				type: "boolean"
			}
		},
		arr4: {
			type: "array",
			items: {
				type: "object",
				required: ["arr6"],
				properties: {
					arr5: {
						type: "array",
						items: {
							type: "string"
						}
					},
					arr6: {
						type: "array",
						items: {
							type: "number"
						}
					},
					arr7: {
						type: "array",
						items: {
							type: "boolean"
						}
					}
				}
			}
		},
		arr8: {
			type: "array",
			items: {
				type: "array",
				items: {
					type: "object",
					required: [],
					properties: {
						arr9: {
							type: "array",
							items: {
								type: "string"
							}
						}
					}
				}
			}
		}
	}
};
Comp.propTypes = {
	arr1: PropTypes.arrayOf(PropTypes.string),
	arr2: PropTypes.arrayOf(PropTypes.number).isRequired,
	arr3: arrayOf(PropTypes.bool),
	arr4: arrayOf(PropTypes.shape({
		arr5: PropTypes.arrayOf(PropTypes.string),
		arr6: PropTypes.arrayOf(PropTypes.number).isRequired,
		arr7: arrayOf(PropTypes.bool)
	})).isRequired,
	arr8: arrayOf(arrayOf(shape({
		arr9: arrayOf(string)
	})))
};


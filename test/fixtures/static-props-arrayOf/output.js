class Comp extends Component {
	static schema = {
		type: "object",
		required: ["arr2", "arr4", "arr9", "arr11"],
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
					type: "bool"
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
								type: "bool"
							}
						}
					}
				}
			},
			arr8: {
				type: "array",
				items: {
					type: "string"
				}
			},
			arr9: {
				type: "array",
				items: {
					type: "number"
				}
			},
			arr10: {
				type: "array",
				items: {
					type: "bool"
				}
			},
			arr11: {
				type: "array",
				items: {
					type: "object",
					required: ["arr13"],
					properties: {
						arr12: {
							type: "array",
							items: {
								type: "string"
							}
						},
						arr13: {
							type: "array",
							items: {
								type: "number"
							}
						},
						arr14: {
							type: "array",
							items: {
								type: "bool"
							}
						}
					}
				}
			}
		}
	};

	static propTypes = {
		arr1: PropTypes.arrayOf(PropTypes.string),
		arr2: PropTypes.arrayOf(PropTypes.number).isRequired,
		arr3: arrayOf(PropTypes.bool),
		arr4: arrayOf(PropTypes.shape({
			arr5: PropTypes.arrayOf(PropTypes.string),
			arr6: PropTypes.arrayOf(PropTypes.number).isRequired,
			arr7: arrayOf(PropTypes.bool)
		})).isRequired,
		arr8: PropTypes.arrayOf(string),
		arr9: PropTypes.arrayOf(number).isRequired,
		arr10: arrayOf(bool),
		arr11: arrayOf(shape({
			arr12: PropTypes.arrayOf(string),
			arr13: PropTypes.arrayOf(number).isRequired,
			arr14: arrayOf(bool)
		})).isRequired
	};

}


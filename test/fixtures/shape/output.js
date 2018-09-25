Comp.schema = {
	type: "object",
	required: ["obj2", "obj4"],
	properties: {
		obj1: {
			type: "object",
			required: ["str2", "str4"],
			properties: {
				str1: {
					type: "string"
				},
				str2: {
					type: "string"
				},
				str3: {
					type: "string"
				},
				str4: {
					type: "string"
				}
			}
		},
		obj2: {
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
		},
		obj3: {
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
		},
		obj4: {
			type: "object",
			required: ["obj6", "obj8"],
			properties: {
				obj5: {
					type: "object",
					required: ["str2", "str4"],
					properties: {
						str1: {
							type: "string"
						},
						str2: {
							type: "string"
						},
						str3: {
							type: "string"
						},
						str4: {
							type: "string"
						}
					}
				},
				obj6: {
					type: "object",
					required: ["str2", "str4"],
					properties: {
						str1: {
							type: "string"
						},
						str2: {
							type: "string"
						},
						str3: {
							type: "string"
						},
						str4: {
							type: "string"
						}
					}
				},
				obj7: {
					type: "object",
					required: ["str2", "str4"],
					properties: {
						str1: {
							type: "string"
						},
						str2: {
							type: "string"
						},
						str3: {
							type: "string"
						},
						str4: {
							type: "string"
						}
					}
				},
				obj8: {
					type: "object",
					required: ["str2", "str4"],
					properties: {
						str1: {
							type: "string"
						},
						str2: {
							type: "string"
						},
						str3: {
							type: "string"
						},
						str4: {
							type: "string"
						}
					}
				}
			}
		}
	}
};
Comp.propTypes = {
	obj1: PropTypes.shape({
		str1: PropTypes.string,
		str2: PropTyeps.string.isRequired,
		str3: string,
		str4: string.isRequired
	}),
	obj2: PropTypes.shape({
		num1: PropTypes.number,
		num2: PropTyeps.number.isRequired,
		num3: number,
		num4: number.isRequired
	}).isRequired,
	obj3: shape({
		bool1: PropTypes.bool,
		bool2: PropTyeps.bool.isRequired,
		bool3: bool,
		bool4: bool.isRequired
	}),
	obj4: shape({
		obj5: PropTyeps.shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired
		}),
		obj6: PropTyeps.shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired
		}).isRequired,
		obj7: shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired
		}),
		obj8: shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired
		}).isRequired
	}).isRequired
};


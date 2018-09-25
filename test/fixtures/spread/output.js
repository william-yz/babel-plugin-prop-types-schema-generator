Comp.schema = {
	type: "object",
	required: ["str2", "str4"],
	properties: {
		...(Common.schema && Common.schema.properties),
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
};
Comp.propTypes = {
	...Common.propTypes,
	str1: PropTypes.string,
	str2: PropTyeps.string.isRequired,
	str3: string,
	str4: string.isRequired
};

Comp2.schema = Common.schema;
Comp2.propTypes = Common.propTypes;

class Comp2 extends Component {
	static schema = Common.schema;

	static propTypes = Common.propTypes;
}


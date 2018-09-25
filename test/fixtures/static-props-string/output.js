class Comp extends Component {
	static schema = {
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
	};

	static propTypes = {
		str1: PropTypes.string,
		str2: PropTyeps.string.isRequired,
		str3: string,
		str4: string.isRequired
	};
}


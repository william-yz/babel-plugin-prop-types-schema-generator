class Comp extends Component {
	static schema = {
		type: "object",
		required: ["obj2", "obj4"],
		properties: {
			obj1: {
				type: "array",
				items: {
					type: "object",
					properties: [{
						name: "key",
						type: "string"
					}, {
						name: "value",
						type: "string"
					}]
				}
			},
			obj2: {
				type: "array",
				items: {
					type: "object",
					properties: [{
						name: "key",
						type: "string"
					}, {
						name: "value",
						type: "string"
					}]
				}
			},
			obj3: {
				type: "array",
				items: {
					type: "object",
					properties: [{
						name: "key",
						type: "string"
					}, {
						name: "value",
						type: "string"
					}]
				}
			},
			obj4: {
				type: "array",
				items: {
					type: "object",
					properties: [{
						name: "key",
						type: "string"
					}, {
						name: "value",
						type: "string"
					}]
				}
			}
		}
	};

	static propTypes = {
		obj1: PropTypes.object,
		obj2: PropTypes.object.isRequired,
		obj3: object,
		obj4: object.isRequired
	};
}


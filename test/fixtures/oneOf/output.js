Comp.schema = {
	type: 'object',
	required: ['arr2', 'arr4'],
	properties: {
		arr1: {
			type: 'array',
			items: {
				type: 'number',
				enum: [1, 2, 3]
			}
		},
		arr2: {
			type: 'array',
			items: {
				type: 'string',
				enum: ['a', 'b', 'c']
			}
		},
		arr3: {
			type: 'array',
			items: {
				type: 'number',
				enum: [1, 2, 3]
			}
		},
		arr4: {
			type: 'array',
			items: {
				type: 'string',
				enum: ['a', 'b', 'c']
			}
		}
	}
};
Comp.propTypes = {
	arr1: PropTypes.oneOf([1, 2, 3]),
	arr2: PropTypes.oneOf(['a', 'b', 'c']).isRequired,
	arr3: oneOf([1, 2, 3]),
	arr4: oneOf(['a', 'b', 'c']).isRequired
};


Comp.propTypes = {
	arr1: PropTypes.arrayOf(PropTypes.string),
	arr2: PropTypes.arrayOf(PropTypes.number).isRequired,
	arr3: arrayOf(PropTypes.bool),
	arr4: arrayOf(PropTypes.shape({
		arr5: PropTypes.arrayOf(PropTypes.string),
		arr6: PropTypes.arrayOf(PropTypes.number).isRequired,
		arr7: arrayOf(PropTypes.bool),
	})).isRequired,
}

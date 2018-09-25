Comp.propTypes = {
	arr1: PropTypes.oneOf([1, 2, 3]),
	arr2: PropTypes.oneOf(['a', 'b', 'c']).isRequired,
	arr3: oneOf([1, 2, 3]),
	arr4: oneOf([
		'a', 'b', 'c'
	]).isRequired,
}

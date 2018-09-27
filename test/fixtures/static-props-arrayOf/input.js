class Comp extends Component {
	static propTypes = {
		arr1: PropTypes.arrayOf(PropTypes.string),
		arr2: PropTypes.arrayOf(PropTypes.number).isRequired,
		arr3: arrayOf(PropTypes.bool),
		arr4: arrayOf(PropTypes.shape({
			arr5: PropTypes.arrayOf(PropTypes.string),
			arr6: PropTypes.arrayOf(PropTypes.number).isRequired,
			arr7: arrayOf(PropTypes.bool),
		})).isRequired,
		arr8: PropTypes.arrayOf(string),
		arr9: PropTypes.arrayOf(number).isRequired,
		arr10: arrayOf(bool),
		arr11: arrayOf(shape({
			arr12: PropTypes.arrayOf(string),
			arr13: PropTypes.arrayOf(number).isRequired,
			arr14: arrayOf(bool),
		})).isRequired,
	}

}

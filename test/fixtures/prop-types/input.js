class Comp extends React.Component {
	render() {

	}
}

const a = {}
Comp.propTypes = {
  	/**
    * aaa
    */
	a: PropTypes.string,
  b: PropTypes.number.isRequired,
  /**
   * title: 1
   */
  shape: PropTypes.shape({
	  /**
   * title: "shape.a"
   */
	a: PropTypes.string
}),
/**
   * title: "arr"
   */
arr: PropTypes.arrayOf(PropTypes.string),
/**
 * title: "arr-required"
 * description: "asdasd"
 */
arrRequired: PropTypes.arrayOf(PropTypes.string).isRequired,
arrShape: PropTypes.arrayOf(PropTypes.shape({
	/**
	 * title: "arrShape.a"
	 */
	a: PropTypes.string,
	b: PropTypes.number.isRequired
	})),


	oneOfString: PropTypes.oneOf(['a','b','c'])
}

Comp.xx = {}

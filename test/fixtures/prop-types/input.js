class Comp extends React.Component {
	render() {

	}
}

/** @schema */
Comp.propTypes = {
  	/**
    * title: "aaa"
    *
    */
	a: PropTypes.string,
  b: PropTypes.number.isRequired,
  /**
   * title: "shapeeeee"
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


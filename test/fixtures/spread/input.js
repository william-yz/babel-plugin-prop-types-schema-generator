Comp.propTypes = {
	...Common.propTypes,
	str1: PropTypes.string,
	str2: PropTyeps.string.isRequired,
	str3: string,
	str4: string.isRequired,
}

Comp2.propTypes = Common.propTypes;

class Comp2 extends Component {
	static propTypes = Common.propTypes
}
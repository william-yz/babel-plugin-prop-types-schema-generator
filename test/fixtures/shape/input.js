Comp.propTypes = {
	obj1: PropTypes.shape({
		str1: PropTypes.string,
		str2: PropTyeps.string.isRequired,
		str3: string,
		str4: string.isRequired,
	}),
	obj2: PropTypes.shape({
		num1: PropTypes.number,
		num2: PropTyeps.number.isRequired,
		num3: number,
		num4: number.isRequired,
	}).isRequired,
	obj3: shape({
		bool1: PropTypes.bool,
		bool2: PropTyeps.bool.isRequired,
		bool3: bool,
		bool4: bool.isRequired,
	}),
	obj4: shape({
		obj5: PropTyeps.shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired,
		}),
		obj6: PropTyeps.shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired,
		}).isRequired,
		obj7: shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired,
		}),
		obj8: shape({
			str1: PropTypes.string,
			str2: PropTyeps.string.isRequired,
			str3: string,
			str4: string.isRequired,
		}).isRequired,
	}).isRequired,
}

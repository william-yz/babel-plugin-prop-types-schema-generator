const os = require('os');

/**
 * @param {types} t
 */
function utils(t) {
	const fns = {
		/**
*
* @param {string} key
* @param {string} value
*/
		generateLiteralPropery(key, value) {
			let type = typeof value;
			if (typeof value === 'number') {
				type = 'numeric';
			}
			return t.objectProperty(t.identifier(key), t[`${type}Literal`](value));
		},

		/**
*
* @param {string} key
* @param {*} valueExpression
*/
		generateProperty(key, valueExpression) {
			return t.objectProperty(
				t.identifier(key),
				valueExpression,
			);
		},

		generateObject(required, properties) {
			return t.objectExpression([
				fns.generateLiteralPropery('type', 'object'),
				fns.generateProperty('required', required),
				fns.generateProperty('properties', t.objectExpression(properties)),
			]);
		},


		generateRequired(requires = []) {
			return t.arrayExpression(requires.map(required => t.stringLiteral(required)));
		},

		handleComment(node) {
			const extraProps = {};
			if (node.leadingComments && node.leadingComments.length > 0) {
				node.leadingComments.forEach(({ value: comment }) => {
					comment.split(os.EOL)
						.map(line => line.replace(/\s*\**\s*/, ''))
						.filter(f => f)
						.forEach((line) => {
							let [key, ...value] = line.split(':');
							value = value.join(':');
							if (value === '') {
								value = `"${key.trim()}"`;
								key = 'title';
							}
							extraProps[key.trim()] = eval(`(${value.trim()})`);
						});

				})
			}
			return extraProps;
		},

		getPropType(node) {
			let propType;
			let required = false;
			let returnNode = node;
			// 直接是string/number
			if (t.isIdentifier(node)) {
				propType = node.name;
			}
			const callHandler = (callNode) => {
				if (t.isIdentifier(callNode.callee)) {
					return callNode.callee.name;
				}
				if (t.isMemberExpression(callNode.callee)) {
					return callNode.callee.property.name;
				}
			};
			// 如果是非方法(string/number..., 或者是isRequired)
			if (t.isMemberExpression(node)) {
				if (node.property.name === 'isRequired') {
					// 如果是函数,取函数名(shape等)
					if (t.isCallExpression(node.object)) {
						propType = callHandler(node.object);
					}
					if (t.isIdentifier(node.object)) {
						propType = node.object.name;
					}
					if (t.isMemberExpression(node.object)) {
						propType = node.object.property.name;
					}
					required = true;
					returnNode = node.object;
				} else {
					propType = node.property.name;
				}
			}
			// 是方法(shape..)
			if (t.isCallExpression(node)) {
				propType = callHandler(node);
			}

			return {
				propType,
				required,
				returnNode,
			};
		},


		handleProperty(node) {
			const extraProps = this.handleComment(node);
			const { propType, required, returnNode } = this.getPropType(node.value);
			if (typeof this[propType] === 'function') {
				return {
					property: this[propType](extraProps, returnNode),
					required,
				};
			}
			return {};
		},

		handleProperties(nodes) {
			const properties = [];
			const requires = [];
			nodes.forEach((node) => {
				if (t.isSpreadProperty(node)) {
					if (t.isMemberExpression(node.argument) && t.isIdentifier(node.argument.property, { name: 'propTypes' })) {
						properties.push(t.spreadProperty(
							t.logicalExpression('&&',
								t.memberExpression(
									node.argument.object.__clone(),
									t.identifier('schema')
								),
								t.memberExpression(
									t.memberExpression(
										node.argument.object.__clone(),
										t.identifier('schema'),
									),
									t.identifier('properties'),
								)
							)
						));
					}
				}
				if (t.isObjectProperty(node)) {
					const propKey = node.key.name;
					const { property, required } = this.handleProperty(node);
					if (property) {
						properties.push(t.objectProperty(t.identifier(propKey), property));
					}
					if (required) {
						requires.push(propKey);
					}
				}
			});
			return this.generateObject(this.generateRequired(requires), properties);
		},

		handleExtraProps(extraProps) {
			return Object.keys(extraProps)
				.map((key) => {
					return fns.generateLiteralPropery(key, extraProps[key]);
				});
		},

		handleFuncProps(extraProps, node) {
			if (t.isCallExpression(node)) {
				if (t.isIdentifier(node.callee)) {
					return this[node.callee.name](extraProps, node);
				}
				if (t.isMemberExpression(node.callee) && t.isIdentifier(node.callee.property)) {
					return this[node.callee.property.name](extraProps, node);
				}
			}
		}
	};


	const propTypes = {
		string(extraProps) {
			const properties = [fns.generateLiteralPropery('type', 'string')];
			if (extraProps) {
				Array.prototype.push.apply(properties, fns.handleExtraProps(extraProps));
			}
			return t.objectExpression(properties);
		},
		number(extraProps) {
			const properties = [fns.generateLiteralPropery('type', 'number')];
			if (extraProps) {
				Array.prototype.push.apply(properties, fns.handleExtraProps(extraProps));
			}
			return t.objectExpression(properties);
		},
		bool(extraProps) {
			const properties = [fns.generateLiteralPropery('type', 'boolean')];
			if (extraProps) {
				Array.prototype.push.apply(properties, fns.handleExtraProps(extraProps));
			}
			return t.objectExpression(properties);
		},
		shape(extraProps, node) {
			const objectExp = this.handleProperties(node.arguments[0].properties);
			const properties = objectExp.properties;
			if (extraProps) {
				Array.prototype.push.apply(properties, fns.handleExtraProps(extraProps));
			}
			return objectExp;
		},
		arrayOf(extraProps, node) {
			const properties = [fns.generateLiteralPropery('type', 'array')];
			if (extraProps) {
				Array.prototype.push.apply(properties, fns.handleExtraProps(extraProps));
			}
			if (t.isMemberExpression(node.arguments[0])) {
				properties.push(fns.generateProperty('items', t.objectExpression([fns.generateLiteralPropery('type', node.arguments[0].property.name)])));
			}
			if (t.isIdentifier(node.arguments[0])) {
				properties.push(fns.generateProperty('items', t.objectExpression([fns.generateLiteralPropery('type', node.arguments[0].name)])));
			}
			if (t.isCallExpression(node.arguments[0])) {
				properties.push(fns.generateProperty('items', fns.handleFuncProps(extraProps, node.arguments[0])));
			}
			return t.objectExpression(properties);
		},
		oneOf(extraProps, node) {
			const properties = [fns.generateLiteralPropery('type', 'array')];
			if (extraProps) {
				Array.prototype.push.apply(properties, fns.handleExtraProps(extraProps));
			}
			// 默认用第一个作为类型
			const valueType = typeof node.arguments[0].elements[0].value; // TODO: elements有可能没有
			properties.push(fns.generateProperty('items', t.objectExpression([
				fns.generateLiteralPropery('type', valueType),
				fns.generateProperty('enum', node.arguments[0].__clone()),
			])));
			return t.objectExpression(properties);
		},
		object(extraProps, node) {
			const properties = [fns.generateLiteralPropery('type', 'string')];
			if (extraProps) {
				Array.prototype.push.apply(properties, fns.handleExtraProps(extraProps));
			}
			return t.objectExpression(properties);
		}
	};

	Object.assign(fns, propTypes);
	return fns;
}
module.exports = (api) => {
	const t = api.types;
	const verionIs7 = !!api.version.match(/^7/);
	const fns = verionIs7 ? utils({
		...t,
		spreadProperty: t.spreadElement,
		isSpreadProperty: t.isSpreadElement,
	}) : utils(t);

	return {
		manipulateOptions(opts, parsedOpts) {
			parsedOpts.plugins.push('*');
		},
		visitor: {
			Program(path, state) {

				try {
					path.traverse({
						ClassProperty: {
							enter(path) {
								if (t.isClassProperty(path.node, { static: true }) && t.isIdentifier(path.node.key, { name: 'propTypes' })) {
									if (path.get('value').isObjectExpression()) {
										state.schema = fns.handleProperties(path.node.value.properties);
									}
									if (path.get('value').isMemberExpression() && path.get('value.property').isIdentifier({ name: 'propTypes' })) {
										state.schema = t.memberExpression(
											t.identifier(path.node.value.object.name),
											t.identifier('schema'),
										);
									}
								}
							},
							exit(path) {
								const { schema } = state;
								if (schema) {
									const prop = t.classProperty(t.identifier('schema'), schema);
									prop.static = true;
									path.insertBefore(prop);
									state.schema = null;
								}
							},
						},
						ExpressionStatement: {
							enter(path) {
								const { node } = path;
								if (t.isAssignmentExpression(node.expression)) {
									if (t.isMemberExpression(node.expression.left) && t.isObjectExpression(node.expression.right)) {
										if (t.isIdentifier(node.expression.left.property, {
											name: 'propTypes',
										})) {
											if (path.get('expression.right').isObjectExpression()) {
												state.schema = fns.handleProperties(path.node.expression.right.properties);
											}
										}
									}
									if (path.get('expression.right').isMemberExpression() && path.get('expression.right.property').isIdentifier({ name: 'propTypes' })) {
										state.schema = t.memberExpression(
											t.identifier(path.node.expression.right.object.name),
											t.identifier('schema'),
										);
									}
								}
							},
							exit(path) {
								const { schema } = state;
								if (schema) {
									path.insertBefore(t.expressionStatement(t.assignmentExpression(
										'=',
										t.memberExpression(
											t.identifier(path.node.expression.left.object.name),
											t.identifier('schema'),
										),
										schema,
									)));
									state.schema = null;
								}
							},
						},
					});
				} catch (e) {
					throw new Error();
				}
			},
		},
	};
};

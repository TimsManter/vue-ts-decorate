import TestComponent = require('./extComponent');

describe('Extend Component', () => {

	beforeEach(function () {
		this.options = (<any>TestComponent).options;
	});

	it(' should be defined', function () {
		expect(TestComponent).toBeDefined();
	});

	it(' should be a function', function () {
		expect(typeof TestComponent === 'function').toBeTruthy();
	});

	describe('.options', () => {
		
		describe('.components', () => {
			it(' should be defined', function () {
				expect(this.options.components).toBeDefined();
			});

			it(' should be an object', function () {
				expect(typeof this.options.components).toBe('object');
			});

			it(' should contain ExtComponent property', function () {
				expect(this.options.components.ExtComponent).toBeDefined();
				expect(typeof this.options.components.ExtComponent).toBe('function');
			});
		});

		describe('.template', () => {
			it(' should be defined', function () {
				expect(this.options.template).toBeDefined();
			});

			it(' should be string', function () {
				expect(typeof this.options.template).toBe('string');
			});

			it(' should contain html', function () {
				expect(this.options.template).toBe('<h1>{{ msg }}</h1>');
			});
		});
		
		describe('.data', () => {
			it(' should be defined', function () {
				expect(this.options.data).toBeDefined();
			});

			it(' should be a function', function () {
				expect(typeof this.options.data).toBe('function');
			});
		});

		describe('.data()', () => {
			it(' should return an object', function () {
				expect(typeof this.options.data()).toBe('object');
			});

			it(' should have two property', function () {
				expect(Object.keys(this.options.data()).length).toBe(2);
			});

			it(' someProperty should be string', function () {
				expect(typeof this.options.data().someProperty).toBe('string');
			});
		});

		describe('.methods', () => {
			it(' should be defined', function () {
				expect(this.options.methods).toBeDefined();
			});

			it(' should be an object', function () {
				expect(typeof this.options.methods).toBe('object');
			});

			it(' should have one property', function () {
				expect(Object.keys(this.options.methods).length).toBe(1);
			});

			it(' property should be a function', function () {
				expect(typeof this.options.methods.testMethod).toBe('function');
			});
		});

		describe('.props', () => {
			it(' should be defined', function () {
				expect(this.options.props).toBeDefined();
			});

			it(' should be an object', function () {
				expect(typeof this.options.props).toBe('object');
			});

			it(' should have 4 properties', function () {
				expect(Object.keys(this.options.props).length).toBe(4);
			});

			describe('property 1', () => {
				it(' should be Null', function () {
					expect(this.options.props.someProp).toBeNull();
				});
			});

			describe('property 2', () => {
				it(' should be an object', function () {
					expect(typeof this.options.props.someDefaultProp).toBe('object');
				});
				it(' should have 2 properties', function () {
					expect(Object.keys(this.options.props.someDefaultProp).length).toBe(2);
				});
				it(' `default` should be a string', function () {
					expect(typeof this.options.props.someDefaultProp.default).toBe('string');
				});
			});

			describe('property 3', () => {
				it(' should be an object', function () {
					expect(typeof this.options.props.someObjProp).toBe('object');
				});

				it(' should have a property `default`', function () {
					expect(Object.keys(this.options.props.someObjProp).length).toBe(1);
				});

				it(' `default` should be a function', function () {
					expect(typeof this.options.props.someObjProp.default).toBe('function');
				});
			});

			describe('property 4', () => {
				it(' should be an object', function () {
					expect(typeof this.options.props.someFuncProp).toBe('object');
				});
				it(' should have 2 properties', function () {
					expect(Object.keys(this.options.props.someFuncProp).length).toBe(2);
				});
				it(' `default` should be a function', function () {
					expect(typeof this.options.props.someFuncProp.default).toBe('function');
				});
			});

		});

		describe('.ready', () => {
			it(' should be defined', function () {
				expect(this.options.ready).toBeDefined();
			});

			it(' should be an Array', function () {
				expect(Array.isArray(this.options.ready)).toBeTruthy();
			});

			it(' should have one function', function () {
				expect(this.options.ready.length).toBe(1);
				expect(typeof this.options.ready[0]).toBe('function');
			});
		});

		describe('.watch', () => {
			it(' should be defined', function () {
				expect(this.watch).toBeDefined();
			});

			it(' should have two properties defined', () => {
				expect(typeof this.watch.testProp).toBe('object');
				expect(this.watch.testProp.deep).toBeTruthy();
				expect(typeof this.watch.someProperty).toBe('function');
			});
		});

		describe('.events', () => {
			it(' should be defined', function () {
				expect(this.options.events).toBeDefined();
			});

			it(' should be an object', function () {
				expect(typeof this.options.events).toBe('object');
			});

			it(' should have two properties', function () {
				expect(Object.keys(this.options.events).length).toBe(2);
			});

			it(' must be functions', function () {
				for (let key in this.options.events) {
					expect(typeof this.options.events[key]).toBe('function');
				}
			});
		});
	});
});
let menu = {
	_courses : {
		appetizers : [],
		mains : [],
		desserts : [],
		get appetizers() {
			return this._courses.appetizers;
		},
		set appetizers(inputOne) {
			this._courses.appetizers.push(appetizer);
		},
		get mains() {
			return this._courses.mains;
		},
		set mains(inputTwo) {
			this._courses.mains.push(main);
		},
		get desserts() {
			return this._courses.desserts;
		},
		set desserts(inputThree) {
			this._courses.desserts.push(dessert);
		}
	},
		get _courses() {
				return {
					appetizers: this.appetizers,
					mains: this.mains,
					desserts: this.desserts
				}
			},
		addDishToCourse(courseName, dishName, dishPrice) {
			const dish = {
				name : this.dishName,
				price: this.dishPrice
			};
			this._courses[courseName] = dish;
		},
		getRandomDishFromCourse(courseName) {
			let dishes = this._courses[courseName];
			let randomIndex = Math.floor(Math.random() * dishes.length);
			return dishes[randomIndex]; // Attention
		},
		generateRandomMeal() {
			let appetizer = this.getRandomDishFromCourse('appetizers');
			let main = this.getRandomDishFromCourse('mains');
			let dessert = this.getRandomDishFromCourse('desserts');
			let totalPrice = appetizer.price + main.price + dessert.price;
			return `${appetizer.name} "," ${main.name} "," ${dessert.name} "," ${totalPrice}`;
		}
	};
	
	menu.addDishToCourse('appetizers', 'Easy Beer Bread', 10);
	menu.addDishToCourse('mains', 'Chicken Soup', 15);
	menu.addDishToCourse('desserts', 'Banana Split', 5);

	menu.addDishToCourse('appetizers', 'Pizza Rolls', 7);
	menu.addDishToCourse('mains', 'Fried Chicken', 17);
	menu.addDishToCourse('desserts', 'Brownie', 6);

	menu.addDishToCourse('appetizers', 'Reuben Roll Ups', 12);
	menu.addDishToCourse('mains', 'Pizza', 20);
	menu.addDishToCourse('desserts', 'Cake', 7);

	let meal = menu.generateRandomMeal();
	console.log(meal);

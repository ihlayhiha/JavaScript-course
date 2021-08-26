// using destructuring for objects

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  
    order : function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    pizzaOrder : function(...ingredients){
        console.log(ingredients);
        console.log("Pizza with ingredients: ", ...ingredients, "has been ordered");
    }
  };
  
//   const {restaurantName = restaurant.name, location, mainMenu} = restaurant;
//   console.log(restaurantName, location, mainMenu);

  console.log(...restaurant.mainMenu);

restaurant.pizzaOrder('piccolo', "goku", "vegeta");



// using ... for spread and rest 
const add = function(...numbers){
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });
    console.log(sum);
    return sum;
}

add(2, 3, 4);
add(2, 3, 4, 10, 2, 2200);
add();

// using ... for spreading or making shallow copies
const restaurantCopy = {...restaurant};
console.log(restaurantCopy);
// basically made a shallow copy of the restaurant
const randList = [2, 3 ,4,  5, 5,6 ,6 , 6,];
const randListCopy = [1, ...randList];  // creating a new list which has an added 1 to the randList 
console.log(randListCopy);

// using ... for resting
console.log("**************************************8");
const [first, second, ...others] = randList;
console.log(others);
const [one, two, ...rest] = randList;
console.log(one, two, rest); 


const multiply = function(...values){
  if (values.length === 1) return values;
  return values.pop() * multiply(...values)
}           

console.log(multiply(2, 3, 4, 5));

const print =  function(...values){
  console.log(...values);
}

print("yeah", "this", "will", "be", "printed", "with", "spaces", 200, ["yeah", "sure"]);
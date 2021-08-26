// using the nullish coalescing operator
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
    }
  };
  
  
restaurant.numGuests = 0;

// we get 10 using \\ operator even  when we define numGuests property because 0 is a falsy value
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//  to avoid that issue, we can use nullish coalescing operator
// we use that by using 2 question marks '??'
// nullish coalescing operator only checks for null or undefined values *called nullish values*
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);  // returns 0 because 0 is neither null nor undefined

console.log(0 ?? 100);  // gives back 0, because ?? checks for null or undefined values instead of false values
console.log(undefined ?? 200);    // returns 200
console.log(false ?? "next to false");  // returns false
console.log(undefined ?? null);   // will be null
console.log(null ?? undefined);   // will be undefined


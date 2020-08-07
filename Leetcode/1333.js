/* Given the array restaurants where  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]. 
You have to filter the restaurants using three filters.

The veganFriendly filter will be either true (meaning you should only include restaurants with veganFriendlyi set to true) 
or false (meaning you can include any restaurant). 
In addition, you have the filters maxPrice and maxDistance which are the maximum value for price and distance of restaurants you should consider respectively.

Return the array of restaurant IDs after filtering, ordered by rating from highest to lowest. 
For restaurants with the same rating, order them by id from highest to lowest. 
For simplicity veganFriendlyi and veganFriendly take value 1 when it is true, and 0 when it is false. */

/* restaurants {
    id: int,
    rating: int,
    veganFriendly: boolean,
    price: int,
    distance: int
} */

let answer = [3,1,5];
let output = filterRestaurants([[1,4,1,40,10],[2,8,0,50,5], [3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 1, 50, 10);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = [4,3,2,1,5];
output = filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 0, 50, 10);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

answer = [4,5];
output = filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 0, 30, 3);
console.log("Ouput = " + output);
console.log(output.toString() == answer.toString());

function filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance) {
    let output = restaurants.filter(rest => {
        if (veganFriendly) {
            return rest[2] == 1 && rest[3] <= maxPrice && rest[4] <= maxDistance;
        } else {
            return rest[3] <= maxPrice && rest[4] <= maxDistance;
        }
    }).sort((a, b) => {
        if (a[1] == b[1]) {
            return b[0] - a[0];
        }
        return b[1] - a[1];
    }).map(rest => {
        return rest[0];
    });
    
    return output;
}
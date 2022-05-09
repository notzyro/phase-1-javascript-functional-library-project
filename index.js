myEach({one: 1, two: 2, three: 3}, alert);

myMap([1,2,3], function(num){ return num * 3; });

myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });

myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });

myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })

mySize([]);

myFirst([5, 4, 3, 2, 1], 3);

myLast([5, 4, 3, 2, 1], 3);

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
mySortBy(stooges, function(stooge){ return stooge.name });

myFlatten([1, [2], [3, [[4]]]], true);

myKeys({one: 1, two: 2, three: 3});

myValues({one: 1, two: 2, three: 3});
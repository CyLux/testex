let pointA={
	x:100,
	y:200
}
let pointB={
	x:700,
	y:200
}
let orders=[[["Заказ 1 "]+["откуда : "+ pointA.x, pointA.y], ["куда : ", pointB.x-49, pointB.y],[["Цена: "],[652]] ],
			[["Заказ 2 "]+["откуда : "+ pointA.x, pointA.y], ["куда : ", 25, 35],[["Цена: "],[250]]],
			[["Заказ 3 "]+["откуда : "+ pointA.x, pointA.y], ["куда : ", 650, 200],[["Цена: "],[250]]],
			[["Заказ 4 "]+["откуда : "+ pointA.x, pointA.y], ["куда : ", 450, 60],[["Цена: "],[653]]]];

let closestOrder = null; 
let closestDistance = Infinity; 
let minPrice = Infinity;
for (let i = 0; i < orders.length; i++) {
const order = orders[i];
const orderXTo = order[1][1];
const orderYTo = order[1][2];
const price= order[2][1];
const distance = Math.sqrt(Math.pow(orderXTo - pointB.x, 2) + Math.pow(orderYTo - pointB.y, 2));
if (distance < closestDistance) {
closestOrder = order;
closestDistance = distance;
minPrice=price;
}
if (price > minPrice){
	minPrice=order;
}
}
console.log("Ближайший заказ: ", closestOrder);
console.log("Самый выгодный заказ: ", minPrice);

			
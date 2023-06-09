// Q1.Write one example explaining how you can write a callback function.
function myname(name, callback){
	console.log("Hey I am " + name)
	callback()
}
function callme(){
	console.log("Here is the callback function")
}
myname('Kanmani Karthiga',callme)
// Q2.Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
let count=0;
setTimeout(()=>{
	console.log(++count)
	setTimeout(()=>{
		console.log(++count)
		setTimeout(()=>{
			console.log(++count)
			setTimeout(()=>{
				console.log(++count)
				setTimeout(()=>{
					console.log(++count)
					setTimeout(()=>{
						console.log(++count)
						setTimeout(()=>{
							console.log(++count)
						}, 7000)
					}, 6000)	
				}, 5000)
			}, 4000)
		}, 3000)
	}, 2000)
}, 1000)

// Q3.Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
function mypromise(num, timeout){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log(num)
			resolve("resolved")
		}, timeout)
	})
}

async function visible(){
	await mypromise('1',1000)
	await mypromise('2',2000)
	await mypromise('3',3000)
	await mypromise('4',4000)
	await mypromise('5',5000)
	await mypromise('6',6000)
	await mypromise('7',7000)
}
visible()

// Q4.Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject the state and catch the error and print Promise Rejected 

let variable = true;
const promise = new Promise((resolve,reject) => {
	if(variable === true){
		resolve("Promise Resolved")
	}
	else{
		reject("Promise Rejected")
	}
})
promise
.then((data) => console.log(data))
.catch((err) => console.log(err))

// Q5. Create examples to explain callback function
function sum(a, b) {
	console.log(a + b)
  }
function arithmetic(val1, val2, callback) {
	callback(val1, val2)
}
arithmetic(10, 20, sum)

// Q6. Create examples to explain callback hell function
let getname = function (name, callback){
	console.log(`I am ${name}`)
	callback("data1")
}
let getdob = function (data1, callback){
	console.log("My Date of birth is 09/12/1995")
	callback("data2")
}
let getstudies = function (data2, callback){
	console.log("Studying web development")
	callback("data3")
}
getname("Riya", (data1) => {
	getdob(data1, (data2) => {
		getstudies(data2, (data3) => {
			console.log("I want to be a Web Developer!")
		})
	} )
})

//Q7.Create examples to explain promises function
var ticket = true
const promise1 = new Promise(function(resolve,reject)
{
	if(ticket)
	{
		resolve("Lets go to vacation")
	}
	else{
		reject("Plan someother way")
	}
})

promise1.then(function(result){
	result = "Lets go to vacation"
	console.log(result)
}, function(error){
	console.log(error)
})

// Q8.Create examples to explain async await function
function fetchdata(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello World")
		},1000)
	})
}
async function dotask(){
	let data = await fetchdata()
	console.log("Ans is", data)
}
dotask()

// Q9.Create examples to explain promise.all function
const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1 is done")
	},2000)
})
const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 2 is done")
	},1000)
})
Promise.all([promise2, promise3]).then((result) => {
	console.log("All promises are fullfilled", result)
})

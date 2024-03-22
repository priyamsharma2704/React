## to print the states
	usEffect take a function and an array(optional) as an argument.
	It is executed after that component function has been executed.

	If the useEffect is being executed twice , the reason could be tha the app is running in Strict mode, and react calls useEffect twice in strict mode because that can help catch certain bugs.

	2nd arg - an array - 
	- if no aaray is passed, the the function args passed to the useEffect will be executed everytime after that component function has been executed

	- if an [] empty array is passed, then UseEffect will be called once. React will keep an eye on the dependencies passed in that array. If those dependecies changes, react will re-execute the useEffect.

	- if a dependency is passed in the array, then React will execute the useEffect in the starting after that particular component functions has been executed and will only re-execute the useEffect only when that dependecy changes.

	3 wrong ways of using useEffect
	a. by not specifying the needed dependencies
	b. by specifying dependencies that are not needed and hence causing the useEffect to be executed unnecessarily.
	c. by causing infinite loops. i.e. setting a state inside useEffect and then passing the same state as a dependencies.

	(https://www.youtube.com/watch?v=V1f8MOQiHRw&ab_channel=Academind) @9:45
	```
	useEfect(()=>{
		console.log(/*state name*/);
	},[-states]);
	```

	It has 3 stages:
	MOUNTING :- when a component is done execution/ has been mounted
	UPDATING :- when a state included as a dependency is updated
	UNMOUNTING: when a component is unmounted.
	```
	useEfect(()=>{
		console.log("component mounted!!")
		console.log(/*state name*/);

		return ()=>{
			console.log("component unmounted")
		}
	},[-states]);
	```
## to stop rendering twice:
	this is because the app is runnig in strict mode. Got ot MAin.jsx and remove the "React.StrictMode" tag and it should not render twice.

## to set state for an array of an object
	```
	const [arrObj, setArrObj] = useState([]);

	const someFunc = ()=>
	{
		setArrObj(arrObj => [...arrObj, newArrObj]);
	}
	```


## arrow func vs normal func in Event handlers
	it will call "handleInputChange" right away
	
	```
	<input type="text" onChange={handleInputchange()}></input>
	```

							vs.

	this will assing the "handleInputChange" to the onChange and call it whenever that event is triggered.
	
	```
	<input type="text" onChange={()=>{handleInputchange()}></input>
	```

							vs.

	this will also assing the "handleInputChange" to the onChange and call it whenever that event is triggered.
	BUT IT IS USED WHEN NO PARAMS AS BEING PASSED.

	```
	<input type="text" onChange={handleInputchange}></input>
	```


## while mapping an array if there is no unique values in the array that can be used as the key, we can use the index while mapping the array.

	```
	arr.map((arrItem, index) =>(<li key={index}>
									<span></span>
									<div></div>
									.
									.
									.
								</li>))
	```
## to print the states
	
	```
	useEfect(()=>{
		console.log(/*state name*/);
	},[-states]);
	```



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
// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var output = [];

	if(obj === undefined || typeof obj === 'function' || typeof obj === 'symbol'){
		output.push(undefined);
	}else if(obj === null){
		output.push("null");
	}else if(Array.isArray(obj)){
		var currentOutput = [];

		obj.forEach(function(item, index, arr){
			if(item === undefined || typeof item === 'function' || typeof item === 'symbol'){
				currentOutput.push("null");
			}else{
				currentOutput.push(stringifyJSON(item));
			}
		});
		output.push("[" + currentOutput.join(',') + "]")
	}else if(typeof obj === 'object'){
		var objOutput = [];

		for(var key in obj){
			if(obj.propertyIsEnumerable(key)){
				var value = obj[key];
				if(value !== undefined && typeof value !== 'function' && typeof value !== 'symbol'){
					objOutput.push('"' + key.toString() + '"' + ":" + stringifyJSON(obj[key]));
				}
			}
		}
		
		output.push('{' + objOutput.join(",") + '}');
		
	}else if(typeof obj === 'string'){
		output.push('"' + obj + '"');
	}else{
		output.push(obj.toString());
	}
	//output += "";
	return output.join(","); 
};


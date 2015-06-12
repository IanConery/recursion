// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// 
// document.body element.childNodes element.classList
var getElementsByClassName = function(className){

	if(typeof className !== "string"){
		throw new TypeError("argument must be a string");
	}

	var nodesWithClass = [];
	//var element = document; 
	var children = document.childNodes;

	/*if(element.classList && element.classList.contains(className)){
		nodesWithClass.push(element);
	}*/
	
	var walkTheDom = function(nodeArray){
		if(nodeArray === undefined){
			return;
		}
		for(var i = 0; i < nodeArray.length; i++){
			var node = nodeArray[i];
			if(node.classList && node.classList.contains(className)){
				nodesWithClass.push(node);
			}
			if(node.childNodes){
				return walkTheDom(node);
			}
		}
	};
	walkTheDom(children);
	return nodesWithClass;

};



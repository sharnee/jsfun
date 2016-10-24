var secondToLast = function (stringOrArray){
	var length = stringOrArray.length,
		lastIndex = length - 1,
		secondToLastIndex = lastIndex - 1
	return stringOrArray[secondToLastIndex]
}

console.log(secondToLast('lampasd'))
console.log(secondToLast(['this','is','the','remix', 'mine', 'mad']))
 
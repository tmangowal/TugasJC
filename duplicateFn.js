
var x = 'abcde'
ABbCcc = (word) => {
    var arr = word.split('')
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        var upLetter = arr[i].toUpperCase()
        newArr.push(upLetter)
        for(var j = 0; j < i; j++){
            newArr.push(arr[i].toLowerCase())
        }
        if(i == arr.length - 1){
            break
        }
        newArr.push('-')
    }
    return newArr.join('')
}

console.log(ABbCcc(x))

var arr = [4,3,2,1,5]
duplikatFilter = (arr, callback) => {
    newArr = []
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(duplikatFilter(arr, function(val){return val !== 2}))

var a = [1,4,5,2,34,4,5,1,3,11]

sortDup = (arr, anon) => {
    sort = true
    while(sort){
        sort = false
        for(var i = 0; i < arr.length; i++){
            if(anon(arr[i], arr[i+1]) > 0){
                var t = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = t
                sort = true
            }
        }
    }
    return arr
}

console.log(sortDup(a, function(a,b){return a-b}))

// ARRAY

const myArray = ["İzmir", "İstanbul", "Ankara", "Diyarbakır", "Ankara", "Mardin", "Ankara", "Muğla"];

console.log("myArray", myArray)
console.log(myArray[3])

// console.log("typeof: " + typeof myArray)//  ?
// flat array
// array of array
// object of array

{ // concat
    let arr_1 = ["Konya", "Çanakkale"];
    const result = myArray.concat(arr_1);

    console.log(myArray, arr_1, result);
}
{ // sort
    const result = myArray.sort();
    console.log(result)
}

{ // push
    const result = myArray.push("Van");
    console.log(result, myArray);
}

{ // pop
    console.log(myArray)
    const result = myArray.pop();
    console.log(result, myArray);
}

{ // shift
    console.log(myArray)
    const result = myArray.shift();
    console.log(result, myArray);
}

{ // unshift
    console.log(myArray)
    const result = myArray.unshift("Zonguldak");
    console.log(result, myArray);
}

{ // splice
    console.log(myArray);
    const result = myArray.splice(2, 3, "Merhaba")
    console.log(result, myArray);
}

{ // slice
    console.log(myArray);
    const result = myArray.slice(1, 4);
    console.log(result, myArray);
}

{ // indexes
    const searchIndex = myArray.indexOf("Ankara", 3);
    const searchLastIndex = myArray.lastIndexOf("Ankara");
    console.log(searchIndex, searchLastIndex);
}

{
    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];

        console.log(element);
    }

    console.log("======")

    // built-in
    myArray.forEach(element => {
        console.log(element)
    });

    console.log("======")

    for (const element of myArray) {
        console.log(element)
    }

}
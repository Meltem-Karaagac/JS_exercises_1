// LOOPS

{
    let sum = 1;

    for (let i = 1; i <= 10; i += 2) {
        sum += i;
    }

    // console.log("sum: ", sum);
}

{
    let myString = "Clarusway";
    let result = "";

    for (let i = 0; i < myString.length; i++) {
        for (let j = 0; j < 2; j++) {
            // console.log(`${i + 1}.ci harf ${myString[i]}`);
            result += myString[i]
        }
    }

    // console.log(result)
}

// WHILE
{
    let i = 0;

    while (i < 5) {
        i++
        // console.log("i:" + i);
    }
}
{
    let i = 0, sum = 0;

    while (i < 5) {
        i++;
        sum += i;
    }

    // console.log("sum: ", sum)
}
{
    let i = 0, myString = "Clarusway";

    while (i < myString.length) {
        // console.log(myString[i])
        i++;
    }
}

// DO-WHILE
{
    let i = 0;

    do {
        // console.log(i)
        i++;
    } while (i < 5)
}

// BREAK & CONTINUE
{
    let sum = 0;

    for (let i = 1; i <= 5; i++) {
        if (i % 2 !== 0)
            continue;

        // console.log("i: ", i)
        sum += i;

        // if (i % 2 === 0)
        //     sum += i;
    }

    // console.log("Sum: " + sum);
}
{
    let myString = "Clarusway", result = "";

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "a")
            continue;

        result += myString[i]
    }

    // console.log(result);
}

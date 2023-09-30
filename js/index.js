function printPattern(count) {
    const store =[];

    for (let i = 0; i < count; i++) {
    if (i == 0) {

    store.push(getChar(i));  
    console.log(store[i]);
    } 
    else 
    {
    let str;
    if (i < 2) 
    {
    str = getChar(i) + "*" + getChar(i);
    store.push(str);
    console.log(str);
    } 
    else 
    {
    str = getChar(i) +  "*" + store[i-2] + "*" + getChar(i);
    store.push(str);
    console.log(str);
    }
    }
}

}

function getChar(n) {
    return String.fromCharCode(n + 65);
 }

printPattern(5);
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function headerOutFunction( headerNumber1, kataNumber ) {
    headerNumber1.textContent = kataNumber;
    document.body.appendChild(headerNumber1);
}

function headerInFunction( headerNumber, kataName ) {
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(kataName)
    headerNumber.appendChild(newElement)
    return kataName
}

// Kata 1

let header1 = document.createElement("div");
    header1.textContent = "Kata 1";
    document.body.appendChild(header1);

function kata1(){
    let gotCitiesarray = gotCitiesCSV.split(',');
    
    let newElement = document.createElement("div");
        newElement.textContent = JSON.stringify(gotCitiesarray);
        header1.appendChild(newElement);
    
    return gotCitiesarray;
}
kata1();

//  Kata 2

let header2 = document.createElement("div");
    header2.textContent = "Kata 2";
    document.body.appendChild(header2);

function kata2() {
    let bestThingArray = bestThing.split(' ')

    let newElement = document.createElement("div");
        newElement.textContent = JSON.stringify(bestThingArray);
        header2.appendChild(newElement);
    
    return bestThingArray;
}
kata2();

// Kata 3

let header3 = document.createElement("div");
    header3.textContent = "Kata 3";
    document.body.appendChild(header3);

function kata3() {
    let gotCitiesCSVSemi_Colon = gotCitiesCSV.replace(/,/g, ";")

    let newElement = document.createElement("div");
        newElement.textContent = JSON.stringify(gotCitiesCSVSemi_Colon);
        header3.appendChild(newElement);
    
    return gotCitiesCSVSemi_Colon;
}
kata3();

// Kata 4

let header4 = document.createElement("div");
    header4.textContent = "Kata 4";
    document.body.appendChild(header4);

function kata4() {
    let lotrCitiesArrayString = lotrCitiesArray.join(", ")

    let newElement = document.createElement("div");
        newElement.textContent = JSON.stringify(lotrCitiesArrayString);
        header4.appendChild(newElement);
    
    return lotrCitiesArrayString; 
}
kata4();

// Kata 5

let header5 = document.createElement("div")
    header5.textContent = "Kata 5"
    document.body.appendChild(header5)

function kata5() {
    let lotrCitiesArrayFirstFiveCities = lotrCitiesArray.slice(0, 5)

    let newElement = document.createElement("div")
        newElement.textContent = JSON.stringify(lotrCitiesArrayFirstFiveCities)
        header5.appendChild(newElement)

    return lotrCitiesArrayFirstFiveCities
}
kata5();

// Kata 6

let header6 = document.createElement("div")
    header6.textContent = "Kata 6"
    document.body.appendChild(header6)

function kata6() {
    let lotrCitiesArrayLastFiveCities = lotrCitiesArray.slice(-5)

    let newElement = document.createElement("div")
        newElement.textContent = JSON.stringify(lotrCitiesArrayLastFiveCities)
        header6.appendChild(newElement)
}
kata6();

// Kata 7

let header7 = document.createElement("div")
    header7.textContent = "Kata 7"
    document.body.appendChild(header7)

function kata7() {
    let lotrCitiesArrayThirdToFifth = lotrCitiesArray.slice(2,5)

    let newElement = document.createElement("div")
        newElement.textContent = JSON.stringify(lotrCitiesArrayThirdToFifth)
        header7.appendChild(newElement)

        return lotrCitiesArrayThirdToFifth
}
kata7();

// Kata 8

let header8 = document.createElement("div")
    header8.textContent = "Kata 8"
    document.body.appendChild(header8)

function kata8() {
    lotrCitiesArray.splice(2, 1)

    let newElement = document.createElement("div")
        newElement.textContent = JSON.stringify(lotrCitiesArray)
        header8.appendChild(newElement)

        return lotrCitiesArray
}
kata8();

// Kata 9

let header9 = document.createElement("div")
    header9.textContent = "Kata 9"
    document.body.appendChild(header9)

function kata9() {
    let lotrCitiesArrayNothingAfterDeadMarsh = lotrCitiesArray.splice(5,2)
    
    let newElement = document.createElement("div")
        newElement.textContent = JSON.stringify(lotrCitiesArray)
        header9.appendChild(newElement)

        return lotrCitiesArray
}
kata9();

//  Kata 10

let header10 = document.createElement("div")
    header10.textContent = "Kata 10"
    document.body.appendChild(header10)

function kata10() {
    let lotrCitiesArrayAddRohan = lotrCitiesArray.splice(2, 0, "Rohan")

    let newElement = document.createElement("div")
        newElement.textContent = JSON.stringify(lotrCitiesArray)
        header10.appendChild(newElement)

        return lotrCitiesArray
}
kata10();

// Kata 11

let header11 = document.createElement("div")
    header11.textContent = "Kata 11"
    document.body.appendChild(header11)

function kata11() {
    let lotrCitiesArrayRenameDeadMarsh = lotrCitiesArray.splice(5,1, "Deadest Marshes")

    let newElement = document.createElement("div")
        newElement.textContent = JSON.stringify(lotrCitiesArray)
        header11.appendChild(newElement)

        return lotrCitiesArray
}
kata11();

// Kata 12

let header12 = document.createElement("div")
    header12.textContent = "Kata 12"
    document.body.appendChild(header12)

function kata12() {
    let bestThingFirstFourteenLetters = bestThing.slice(0,14)

    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(bestThingFirstFourteenLetters)
    header12.appendChild(newElement)

    return bestThingFirstFourteenLetters
}
kata12();

// Kata 13

let header13 = document.createElement("div")
    header13.textContent = "Kata 13"
    document.body.appendChild(header13)

function kata13() {
    let bestThingLastTwelve = bestThing.slice(-12)

    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(bestThingLastTwelve)
    header13.appendChild(newElement)

    return bestThingLastTwelve
}
kata13();

// Kata 14

let header14 = document.createElement("div")
    header14.textContent = "Kata 14"
    document.body.appendChild(header14)

function kata14() {
    let bestThingShortened = bestThing.slice(23,38)

    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(bestThingShortened)
    header14.appendChild(newElement)

    return bestThingShortened
}
kata14();

// Kata 15

let header15 = document.createElement("div")
    header15.textContent = "Kata 15"
    document.body.appendChild(header15)

function kata15() {
    let bestThingSubStringOne = bestThing.substring(bestThing.length -12)

    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(bestThingSubStringOne)
    header15.appendChild(newElement)

    return bestThingSubStringOne
}
kata15();

// Kata 16

let header16 = document.createElement("div")
    header16.textContent = "Kata 16"
    document.body.appendChild(header16)

function kata16() {

    let bestThingSubStringTwo = bestThing.substring(23,38)

    headerInFunction(header16, bestThingSubStringTwo)
    // let newElement = document.createElement("div")
    // newElement.textContent = JSON.stringify(bestThingSubStringTwo)
    // header16.appendChild(newElement)
    return bestThingSubStringTwo
}
kata16();

//  Kata 17

let header17 = document.createElement("div")
    header17.textContent = "Kata 17"
    document.body.appendChild(header17)

function kata17() {
    let word = "only"
    let bestThingOnly = bestThing.indexOf(word)

    headerInFunction(header17, bestThingOnly)

    return bestThingOnly
}
kata17();

// Kata 18

let header18 = document.createElement("div")
    header18.textContent = "Kata 18"
    document.body.appendChild(header18)

function kata18() {
    let word = "bit"
    let bestThingBit = bestThing.indexOf(word)

    headerInFunction(header18, bestThingBit)
}
kata18();

//  Kata 19 

let header19 = document.createElement("div")
headerOutFunction(header19, "Kata 19")

function kata19() {
    let regex = /(\w*aa\w*)|(\w*ee\w*.+?(?=,)|\w*ee\w*)/g;
    let gotCitiesVowels = gotCitiesCSV.match(regex);

    headerInFunction(header19, gotCitiesVowels)
}
kata19();

// Kata 20

let header20 = document.createElement("div")
headerOutFunction(header20, "Kata 20")

function kata20() {
    let regex = /\w*or\b/g;
    let lotrCitiesString = lotrCitiesArray.join();
    let lotrCitiesOR = lotrCitiesString.match(regex);

    headerInFunction(header20, lotrCitiesOR)
}
kata20();

// Kata 21

let header21 = document.createElement("div")
headerOutFunction(header21, "Kata 21")

function kata21(){
    let regex = /\bb\S*/g;
    let bestThingB = bestThing.match(regex);

    headerInFunction(header21, bestThingB)
}
kata21();
// Kata 22

let header22 = document.createElement("div")
headerOutFunction(header22, "Kata 22")

function kata22(t){
    let match = "No"
    for (i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i] === t) {
            match = "Yes"
        }
    }
    headerInFunction(header22, match)
}
kata22("Mirkwood");

// Kata 23

let header23 = document.createElement("div")
headerOutFunction(header23, "Kata 23")

function kata23(t){
    let match = "No"
    for (i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i] === t) {
            match = "Yes"
        }
    }
    headerInFunction(header23, match)
}
kata23("Hollywood");

// Kata 24

let header24 = document.createElement("div")
headerOutFunction(header24, "Kata 24")

function kata24(){
    word = "Mirkwood"
    let lotrCitiesArrayMirkWood = lotrCitiesArray.indexOf(word)

    headerInFunction(header24, lotrCitiesArrayMirkWood)
}
kata24();

// Kata 25

let header25 = document.createElement("div")
headerOutFunction(header25, "Kata 25")

function kata25(){
    const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
    let regex = /\w*\s\w*/;
    let lotrCitiesString = lotrCitiesArray.join();
    let lotrDoubleWord = lotrCitiesString.match(regex);

    headerInFunction(header25, lotrDoubleWord)
}
kata25();

// Kata 26

let header26 = document.createElement("div")
headerOutFunction(header26, "Kata 26")

function kata26(){
    const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
    let lotrCitiesArrayReverse = lotrCitiesArray.reverse(); 

    headerInFunction(header26, lotrCitiesArrayReverse)
}
kata26();

// Kata 27

let header27 = document.createElement("div")
headerOutFunction(header27, "Kata 27")

function kata27(){
    const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
    let lotrCitiesArrayAlpha = lotrCitiesArray.sort()

    headerInFunction(header27, lotrCitiesArrayAlpha)
}
kata27();

// Kata 28

let header28 = document.createElement("div")
headerOutFunction(header28, "Kata 28")

function compare(a,b){
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
}

function kata28(){
    const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
    let lotrCitiesArrayShortLong = lotrCitiesArray.sort(compare); 

    headerInFunction(header28, lotrCitiesArrayShortLong)
}
kata28();

// Kata 29

const lotrCitiesArray2 = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

let header29 = document.createElement("div")
headerOutFunction(header29, "Kata 29")

function kata29(){
    let lotrCitiesArrayPop = lotrCitiesArray2.pop()

    headerInFunction(header29, lotrCitiesArray2)
    
}
kata29();

// Kata 30

let header30 = document.createElement("div")
headerOutFunction(header30, "Kata 30")

function kata30(){
    let lotrCitiesArrayAddEnd = lotrCitiesArray2.push("Harad"); 

    headerInFunction(header30, lotrCitiesArray2)
}
kata30();

// Kata 31
const lotrCitiesArray3 = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

let header31 = document.createElement("div")
headerOutFunction(header31, "Kata 31")

function kata31() {
    lotrCitiesArrayShift = lotrCitiesArray3.shift()

    headerInFunction(header31, lotrCitiesArray3)
}
kata31();

// Kata 32
let header32 = document.createElement("div")
headerOutFunction(header32, "Kata 32")

function kata32() {
    let lotrCitiesArrayAddBack = lotrCitiesArray3.unshift("Mordor");

    headerInFunction(header32, lotrCitiesArray3)
}
kata32();
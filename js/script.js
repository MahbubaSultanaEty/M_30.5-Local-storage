/*Local Storage (JavaScript)

Local Storage হলো ব্রাউজারের একটি web storage system যেখানে ওয়েবসাইট user-er data browser-e permanently save করে রাখতে পারে।
Browser বন্ধ বা page refresh হলেও data থাকে, যতক্ষণ না manually delete করা হয়।
*/


/**
 * Data key-value pair আকারে store হয়
 * Browser-e store হয়, server-e না
 * সাধারণত প্রায় 5–10 MB পর্যন্ত data রাখা যায়
 */


/**
 * setItem()
→ Local Storage-এ data save করার জন্য ব্যবহার করা হয়।
 * getItem()
→ Local Storage-থেকে save করা data retrieve / নেওয়ার জন্য ব্যবহার করা হয়।
 */

/**
 * Primitive data (string, number, boolean) directly Local Storage-এ set করা যায়।
 * কিন্তু Non-primitive data (object, array) directly set করা যায় না, কারণ Local Storage শুধু string store করে।
 */
const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem("number", number);
}


const setObjectToLS = () => {
    const customer = {
        name: "Rahim",
        product: 3,
        price: 75
    }
    const customerJson = JSON.stringify(customer);
    localStorage.setItem('customer', customerJson)
}


const readObjFromLS = () => {
    const customerJson = localStorage.getItem("customer");
    const customer= JSON.parse(customerJson)
    console.log(typeof customerJson);
    console.log(customer)
}


const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log("from saved local storage", number)
}
let nos=[1,2,3,4,5,];
console.log("Initially nos are:",nos);
nos.shift();
console.log("Nos after shift:",nos);
nos.unshift(1);
console.log("Nos after unshift:",nos);
//deleting elements using splice
nos.splice(2,3);
console.log("Nos after splice delection:",nos);
//insert elements in between using splice
nos.splice(2,0,3,4,5,6,7,8,9);
console.log("NOs after inserting elements using splice:",nos);
//replacing valuse
nos.splice(2,3,10,11,12);
console.log("Nos after replacing:",nos);
f=["a","b","c"];
console.log(f);
f.splice(1,1,"d","e","f");
console.log("Valuse of replacing:",f);
g=["X","Y","Z"];
console.log(g);

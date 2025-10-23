function add( a, b){
    return a+b;
}

function sub(a,b){
    return a-b; // overriding of mathematics function is taking place 
    // leading to
}
// whatever im doing here in module.exports we need to work over there only 
// and then after that we will be importing and exporting the fucntion we want to do so 
// from there only 
module.exports = {
    add,
   sub,  // creation of javascript based objects 

}

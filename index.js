
// function scopeTest(){
//     const yep = "yep";
//     console.log(yep);

// }
// scopeTest()
// console.log(yep)


// function hoistingTest1(){
//    if (true) {
//     var customerName = "John Smith";
//    }
//    console.log(customerName);

// }

// function hoistingTest2(){
//     if (true) {
//      let customerName = "John Smith";
//     }
//     console.log(customerName);
 
//  }
//  function hoistingTest3(){
//     if (true) {
//      const customerName = "John Smith";
//     }
//     console.log(customerName);
 
//  }
 


function hoistChallenge1(){
    console.log(customerName);
    let customerName = "James Cameron";
    
}

function hoistChallenge2(){
    function customerName(){ 
        let customerName = "Howdy Doody"
        console.log(customerName);  
    }
    
}
customerName()
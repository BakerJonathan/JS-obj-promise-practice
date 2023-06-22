//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

//Made things more 'human readable', but in exchange, as it's loop generated, it's repetative
let printObj=function (obj){
    console.log('These are my favorite dishes:')

    for (const key in obj){

        if (`${obj[key]}`=='[object Object]'){
            console.log(`As for ${key}:`)
            for (key2 in obj[key][0]){
                console.log(`   My favorite ${key2} ${key}: ${obj[key][0][key2]}`)
            }
        }//For shake case, when there's an object in an object.
        // Or more accurately an object in an array (containing only the object) in an object (hence why the 0 in obj[key][0] is needed)

       else{        
        console.log(`My favorite ${key}(s): ${obj[key]}`)
    }

    }

}




let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        // This being an obj in an array threw me off for a bit, seeing as there's little reason for that to be the case (aside from pizza and ice cream being arrays)
        // An array with 1 item is barely an array
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

printObj(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name=name
    this.age=age
// Use an arrow to create the printInfo method
    this.printInfo=()=>{
        console.log(`${this.name} is ${this.age} years old`)
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge=(increment=1)=>{
        this.age+=increment
    }

}

me = new Person('Jonathan', 24)
me.printInfo()
me.addAge()
me.printInfo()

someoneElse = new Person ('Mario',42)
someoneElse.printInfo()
someoneElse.addAge(3)
someoneElse.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function wordBig (word) {
    return new Promise((resolve,reject)=>{
        if (word.length>=10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}
wordBig("George")
.then((result)=>{
    console.log('Big Word')
}).catch((error)=>{
    console.log('Small Word')
})


//A couple of 6 kyu
//One I've done before
// Multiples of 3 or 5
// This asks for the sum of all previous 3's or 5's, I used a cycle based on the number 15
function solution(number){
    let sum=0
    let cycle=[3,2,1,3,1,2,3]
    let cycle_tracker=0
    let curr=0
    while (curr<number){
      sum+=curr
      curr+=cycle[cycle_tracker]
      cycle_tracker=(cycle_tracker+1)%7
    }
    return sum
}
console.log(solution(24))
// 3+5+6+9+10+12+15+18+20+21


//And for a new one, 'Consonant value'
function solve(s) {
    let score_obj={a:false, b:2, c:3, d:4, e:false, f:6, g:7, h:8, i:false, j:10, k:11, l:12, m:13, n:14, o:false
                  ,p:16, q:17, r:18, s:19, t:20, u:false, v:22, w:23, x:24, y:25, z:26}
    let top_score=0
    let curr_score=0
    for (let char of s){
      if (score_obj[char]==false){
        if (curr_score>top_score){
          top_score=curr_score
        }
        curr_score=0
      } else{
        curr_score+=score_obj[char]
      }
    }
    
    if (curr_score>top_score){
     top_score=curr_score}//one extra for letters at the end
    return top_score
  };
  // Basically the objective is to find the greatest 'sum' of letters between consonants (including before or after the word)
  //I made an object for easy conversion of char -> score, and used a for loop to get the chars of the string
  console.log(solve('jonathan'))
//   th is the largest sum at 20+8
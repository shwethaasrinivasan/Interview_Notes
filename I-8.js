const userActive1 = true;
const userLeft1 = false;
const userState = true

function userStatus1() {
    return new Promise((resolve,reject)=>{
        // userActive1 ? resolve("User1 is Active!") : reject("User1 has left")
        if(userActive1){
            resolve("User1 active")
        }else if(userState){
            resolve("User1 is available")
        }else{
            reject("User1 has left")
        }
    })
}


userStatus1()
.then((msg)=>{
console.log(msg)
return `userState: ${userState}`;
})
.then((msg2)=>{
console.log(msg2)
})
.catch((err)=>console.log(err))



const userActive = false;
const userLeft = false;

function userStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userActive ? resolve("User2 is Active!") : reject("User2 has left");
        }, 2000); 
    });
}

async function checkUserStatus() {
    const message = await userStatus();
    console.log(message);
}

checkUserStatus().catch((err)=>console.log(err))


const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("P1 is success")
    },3000)
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("P2 is success")
    },1000)
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("P3 is success")
    },5000)
})

Promise.all([p1,p2,p3]).then((message)=>{
    console.log(message)
})

Promise.allSettled([p1,p2,p3]).then((message)=>{
    console.log(message)
})

Promise.race([p1,p2,p3]).then((message)=>{
    console.log(message)
})

Promise.any([p1,p2,p3]).then((message)=>{
    console.log(message)
})


let isCancelled = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isCancelled) {
      reject('Promise was cancelled');
    } else {
      resolve('Done');
    }
  }, 1000);
});

// Implement a custom cancel function
function cancel() {
  isCancelled = true;
}

// Simulate cancelling the promise
cancel();

promise.then(result => console.log(result)).catch(error => console.log(error));


let isCancelled1 = false;

// Define the promise as before
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isCancelled) {
      reject('Promise was cancelled');
    } else {
      resolve('Done');
    }
  }, 1000);
});

// Implement the custom cancel function as before
function cancel() {
  isCancelled = true;
}

// Use async/await to handle the promise
async function handlePromise() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Simulate cancelling the promise
cancel();

// Call the async function to handle the promise
handlePromise();

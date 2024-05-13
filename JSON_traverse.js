let user = {
    name: "Shwethaa S",
    address: {
      personal: {
        city: ["Chennai"],
        state: "Tamil Nadu",
        area: "Velachery",
      },
      office: {
        city: "Chennai",
        area: {
          landmark: "Hi Tech",
        },
      },
    },
  };
  
  let magic = (obj, parent, finalObj) => {

    for(let key in obj){
      if(typeof obj[key] === "object"){
        magic(obj[key], parent + "_" + key, finalObj);
      }
      else {
        finalObj[parent + "_" + key] = obj[key];
      }
    }
  }
  
  let finalObj= {};
  magic(user, "user", finalObj);
  
 // console.log(finalObj);

//Second code  
  
function traverse(obj, func) {
    for (const key in obj) {
        func(key, obj[key]); 
        if (obj[key] !== null && typeof obj[key] === "object") {
            traverse(obj[key], func);
        }
    }
}

const myObject = {
    foo: "bar",
    arr: [1, 2, 3],
    subo: { foo2: "bar2" }
};

function process(key, value) {
    console.log(key + ": " + value);
}

traverse(myObject, process);

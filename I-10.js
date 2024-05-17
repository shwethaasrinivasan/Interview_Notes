//call method
//call and apply immediately invoke the function with the specified this context and arguments. 
//They are direct function calls where you specify the context and pass the arguments (individually for call, as an array for apply).

function introduce(language, hobby) {
    console.log(`Hello! I'm ${this.name}. I code in ${language}, enjoy ${hobby}, and my favorite book is ${this.favoriteFood}.`);
  }
  
  const user = {
    name: 'Shwethaa',
    favoriteFood: 'Dosa'
  };
  
  // Using call to set `this` to user, passing arguments individually
  introduce.call(user, 'JavaScript', 'cooking');
  
  introduce.apply(user, ['JavaScript', 'cooking'])

//bind
//bind, on the other hand, does not immediately invoke the function. Instead, it returns a new function with the specified this context and arguments, 
//which you can then call at a later point. This is useful for scenarios where you need to pass a function with a specific context as a callback to be executed later.

const skipIntroduceNow = introduce.bind(user, 'JavaScript', 'cooking')();
// skipIntroduceNow()


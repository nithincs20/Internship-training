
// Closure
function Func() {
    const name = "My Function";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = Func();
  myFunc();


// Example
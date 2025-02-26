function myMethod() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve('Data');
        }, 2000);
    });
  }
  
  promise.then(function(arg){
    console.log('Hello', arg)
  }).catch(function(){
    console.log('Error')
  })
  
  // async function SampleFun(){
  //   try {
  //     const res = await myMethod();
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  

var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
});

var myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        resolve("成功!"); //代码正常执行！
    }, 250);
});
 
myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage)
});


var getData = function (id) {
    return new Promise(function (resolve, reject) {
       if(id < 8) {
        resolve("resolve:" + id);
       }else {
        reject("reject:" + id);
       }
      });
}

// 生成一个Promise对象的数组
var promises = [2, 3, 5, 7, 11, 13].map(function(id){
    console.log(getData( id ));
  });
   
  Promise.all(promises).then(function(posts) {
    // ...  
  }).catch(function(reason){
    // ...
  });
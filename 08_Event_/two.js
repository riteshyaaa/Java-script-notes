const sayTimeout = function(){
    console.log('Hello from timeout');
}
setTimeout(sayTimeout,2000)



// setInterval(function (){
//     console.log('Hello from Interval',date.now())
// },2000)

const changeText =  function(){
    document.querySelector('h1').innerHTML = "Best js series "
}
const changeMe = setTimeout(changeText,2000)
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout("changeMe")
})
function countDown(time){
    console.log(time);
    let timer = setInterval(function(){
        time --; //countdown 1
        if(time <=0){ //when finished
            clearInterval(timer);
            console.log('Ignition');
        }
        else{
            console.log(time);
        }
    }, 1000)
}

function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }
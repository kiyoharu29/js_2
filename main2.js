document.addEventListener('click',function(event){
  
  if (event.target.matches('#eq')) { 
    var calcResult = eval(document.getElementById('display').innerText);
    document.getElementById('display').innerText = calcResult;
    //console.log(calcResult);
    return; 
  }
  
  if (event.target.matches('.clear')) { //trueの場合のみ実行
    document.getElementById('display').innerText = ''; //空にする
    return; //returnで返して終了させ、この下のコードは実行させない
  }
  
  if (!event.target.matches('.number')) return;
  
  var clickNumber = event.target.innerText;
  
  var beforeClickNumber = document.getElementById('display').innerText;
  
   if(beforeClickNumber == 0) {
      document.getElementById('display').innerText = clickNumber;
    } else {
      document.getElementById('display').innerText = beforeClickNumber + clickNumber;
    }
  })

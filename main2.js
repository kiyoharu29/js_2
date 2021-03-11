document.addEventListener('click',function(event){
  
  //変更点
   const zero = document.getElementById('zero');
  if (event.target.matches('#zero')) {
    if(clickNumber.innerText.slice(-1) === '0') {
        return;
      }
    }
  //変更点
  
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
  
  var x = 2*3;
  //console.log(x);
  
  
  
  document.getElementById('display').innerText = beforeClickNumber + clickNumber; //表示結果をすべて表示させる
})

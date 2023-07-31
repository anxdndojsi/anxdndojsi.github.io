function janken(player) {
    
  // player = 自分の手  // computer = コンピューターの手

  // player  1=グー   2=チョキ    3=パー

  // computer  0=グー  1=チョキ  2=パー

  let random = Math.random() *100;
  random = Math.floor(random %3);
  computer=random
  console.log(random);



  let message = '';


   // 自分がグーを出したとき
   if (player === 1) {
      if(computer===0){
          message = '相手もグーなのであいこ';
      }
      else if(computer===1){
        message = '相手はチョキなので勝ち';
      }
      else if(computer===2){
          message = '相手はパーなので負け';
      }
    }

    // 自分がチョキを出したとき

      else if (player === 2) {
      if(computer===0){
          message = '相手はグーなので負け';
      }
      else if(computer===1){
          message = '相手もチョキなのであいこ';
      }
      else if(computer===2){
          message = '相手はパーなので勝ち';
      }
    }

    // 自分がパーを出したとき
      else if (player === 3) {
      if(computer===0){
          message = '相手はグーなので勝ち';
      }
      else if(computer===1){
          message = '相手はチョキなので負け';
      }
      else if(computer===2){
          message = '相手もパーなのであいこ';
      }
    }

    console.log(message);

  const p_hello = document.querySelector('#kekka');

    p_hello.textContent = message;

  }

  function attimuite(player) {
  
    // player 4=上 5=右 6=左 7=下
    // computer 0=上 1=右 2=左 3=下
    
      let random = Math.random() *100;
      random = Math.floor(random %4);
      computer=random
      console.log(random);
    
    
    
      let message = '';
    
    // 自分が右をさした時
    if (player === 4) {
      if(computer===0){
          message = '相手も上を向いたのであなたの勝ち';
      }
      else if(computer===1){
        message = '相手は右を向いたのでもう一度！';
      }
      else if(computer===2){
          message = '相手は左を向いたのでもう一度！';
      }
      else if(computer===3)
          message = '相手は下を向いたのでもう一度！'
    }

    // 自分が右をさした時
   else if (player === 5) {
      if(computer===0){
          message = '相手は上を向いたのでもう一度！';
      }
      else if(computer===1){
        message = '相手も右を向いたのであなたの勝ち';
      }
      else if(computer===2){
          message = '相手は左を向いたのでもう一度！';
      }
      else if(computer===3)
          message = '相手は下を向いたのでもう一度！'
    }

    // 自分が左をさした時
    else if (player === 6) {
      if(computer===0){
          message = '相手は上を向いたのでもう一度！';
      }
      else if(computer===1){
        message = '相手は右を向いたのでもう一度！';
      }
      else if(computer===2){
          message = '相手も左を向いたのであなたの勝ち';
      }
      else if(computer===3)
          message = '相手は下を向いたのでもう一度！'
    }

    // 自分が下をさした時
    else if (player === 7) {
      if(computer===0){
          message = '相手は上を向いたのでもう一度！';
      }
      else if(computer===1){
        message = '相手は右を向いたのでもう一度！';
      }
      else if(computer===2){
          message = '相手は左を向いたのでもう一度！';
      }
      else if(computer===3)
          message = '相手も下を向いたのであなたの勝ち'

    }
    console.log(message);

  const p_hello = document.querySelector('#hoi');

    p_hello.textContent = message;

  }



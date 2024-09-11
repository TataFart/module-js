'use strict';
(() => {
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getCompFigure = () => {
        const compFigure = FIGURES_RUS[getRandomIntInclusive(0, 2)];
        return compFigure;
    }

    const getUserFigure = () => {
        const userFigure = prompt("Камень,ножницы, бумага?");

        if(userFigure === null) {
            const exit = confirm(`Вы действительно хотите покинуть игру?`);
            if(exit) {
                return;
            } else {
                return getUserFigure();
            }                                 
        }

        userFigure.toLowerCase();
     
        switch (true) {                         
                      
            case userFigure === 'камень' || userFigure === 'к' || userFigure === 'кам' || userFigure === 'камен':
                return 'камень';
            case userFigure === 'ножницы' || userFigure === 'н' || userFigure === 'нож' || userFigure === 'ножнцы':
                return 'ножницы';
            case userFigure === 'бумага' || userFigure === 'б' || userFigure === 'бум' || userFigure === 'бумга':
                return 'бумага';
            default:
                alert("Неверный ввод. Попробуйте еще раз.");
                return getUserFigure();
        }
    };

    const game = () => {
        const result = {
            player: 0,
            computer: 0,
            
            checkWinner(userFigure, compFigure) {

                if (userFigure ===  compFigure) {
                    alert(`Ваша фигура - ${userFigure}, компьютер показал - ${compFigure}. Ничья!`);
                  } else if (
                    (userFigure === 'камень' &&  compFigure === 'ножницы') ||
                    (userFigure === 'бумага' &&  compFigure === 'камень') ||
                    (userFigure === 'ножницы' &&  compFigure === 'бумага')
                  ) {
                    this.player += 1;
                    alert (`Ваша фигура - ${userFigure}, компьютер показал - ${compFigure}. Победа за вами!` );
                  } else {
                    this.computer += 1;
                    alert (`Ваша фигура - ${userFigure}, компьютер показал - ${compFigure}. Победил компьютер!` );
                  }               
                const  playAgain = confirm('Сыграем ещё?');
                
                    if (playAgain){
                        start()
                                         
                    } else {                
                            const exit = confirm(`Компьютер набрал: ${result.computer} Ваши очки: ${result.player}. Вы действительно хотите покинуть игру?`);
                          
                            if(exit) {
                                return;
                            } else {
                                return start();
                            }  
                                                       
                    }
                } 
               
            }
            function start() {
                const userFigure = getUserFigure();

        
                if(userFigure)  {
                    const compFigure = getCompFigure();
                    result.checkWinner(userFigure, compFigure);
                }  else {
                    
                } 
        }           
        

        return start;
    };

    window.RPS = game();
})();

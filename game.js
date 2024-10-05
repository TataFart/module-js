'use strict';
(() => {
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
 

    const getCompFigure = () => {
        const compFigure = getRandomIntInclusive(0, 2);        
        return compFigure;
    }
    const playAgain = (res, rej) => {
        
        while (!confirm("Сыграем ещё?")){
            
            if (confirm(`Хотите выйти?`)&& confirm("Вы уверены?")) {
               
                return rej();
            }
        }
        return res();
    }

  
     const getUserFigure = () => {
       
       
        const userInput = prompt(`${FIGURES_RUS[0]}, ${FIGURES_RUS[1]}, ${FIGURES_RUS[2]}?`);
           
        if  (userInput === null) {
           
            playAgain(()=>getUserFigure(),()=>alert("Пока"))
            return undefined
           
        }
           
        while  (userInput === '') {
                console.log("Пустой ввод, начнем сначала.");
                return getUserFigure();
        }

        const userFigure = userInput.toLowerCase().trim();
        console.log(userFigure);

            
        if (FIGURES_RUS.includes(userFigure)) {
            console.log(FIGURES_RUS.indexOf(userFigure));
            return FIGURES_RUS.indexOf(userFigure);
        } else {
            alert('Неверный ввод, попробуйте снова.');
            return getUserFigure();
            }
        }    
        const game = () => {
            const result = {
                player: 0,
                computer: 0,
         
            checkWinner(userFigure, compFigure) {
                    if(userFigure === compFigure) {
                        return alert(`Ваша фигура - ${FIGURES_RUS[userFigure]}, компьютер показал - ${FIGURES_RUS[compFigure]}. Ничья!`);  
                    }
                    if ((userFigure + 1) % 3 === compFigure ) {
                        this.player += 1;
                        return alert(`Ваша фигура - ${FIGURES_RUS[userFigure]}, компьютер показал - ${FIGURES_RUS[compFigure]}. Победа за вами!`);
                      } else{
                        this.computer += 1;
                        return alert(`Ваша фигура - ${FIGURES_RUS[userFigure]}, компьютер показал - ${FIGURES_RUS[compFigure]}. Победил компьютер!`);
                      }
                      
                    }       
                              
            }

    
   

            function start() {
                
                const userFigure = getUserFigure();

                if (userFigure !== undefined) {
                    const compFig = getCompFigure();
              
                    console.log(compFig);
                   console.log("дальше");
                    result.checkWinner(userFigure, compFig);
    
    
                    playAgain(()=>start(), ()=>alert(`Компьютер набрал: ${result.computer} Ваши очки: ${result.player}.`) )     
                }
                     

                           
                        
        
            }           
        

        return start;
    };

    window.RPS = game();
})();

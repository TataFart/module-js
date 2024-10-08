'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getCompFigure = () => { 
    return Math.floor(Math.random() * FIGURES_RUS.length); 
  };

  const getUserFigure = () => {
    const userInput = prompt(`${FIGURES_RUS.join(", ")}?`);

    if (userInput === null) {
      if (confirm("Вы уререны, что хотите выйти?")){
        alert("Bye");
        return null;
      }
      return getUserFigure();
    }  
    
    const userFigure = userInput.toLowerCase().trim();

    if (FIGURES_RUS.includes(userFigure)) {
      return FIGURES_RUS.indexOf(userFigure);
    } else {
      alert('Неверный ввод, попробуйте снова.');
      return getUserFigure();
    }
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    function checkWinner(userFigure, compFigure) {
      const results = `Ваша фигура - ${FIGURES_RUS[userFigure]}, компьютер показал - ${FIGURES_RUS[compFigure]}.`;
      if (userFigure === compFigure) {
        alert(`${results} Ничья!`);
      } else if ((userFigure + 1) % 3 === compFigure) {
        result.player += 1;
        alert(`${results} Победа за вами!`);
      } else {
        result.computer += 1;
        alert(`${results} Победил компьютер!`);
      }
    };

    const playAgain = (res, rej) => {
      while (!confirm('Сыграем ещё?')) {
        if (confirm(`Компьютер набрал: ${result.computer} Ваши очки: ${result.player}. Хотите выйти?`)) {
          return rej();
        }
      }
      return res();
    };  

    function start() {
      const userFigure = getUserFigure();

      if (userFigure !== null) {
        const compFig = getCompFigure();       
        checkWinner(userFigure, compFig);

        playAgain(() => start(), () => alert(`Компьютер набрал: ${result.computer} Ваши очки: ${result.player}.`));
      }       
    }

    return start;
  };

  window.RPS = game();
})();

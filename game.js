'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getCompFigure = () => {
    const compFigure = Math.floor(Math.random() * ((FIGURES_RUS.length - 1) - 0 + 1) + 0); ;
    return compFigure;
  };
  const playAgain = (res, rej) => {
    while (!confirm('Сыграем ещё?')) {
      if (confirm(`Хотите выйти?`) && confirm('Вы уверены?')) {
        return rej();
      }
    }
    return res();
  };


  const getUserFigure = () => {
    const userInput = prompt(`${FIGURES_RUS[0]}, ${FIGURES_RUS[1]}, ${FIGURES_RUS[2]}?`);

    if (userInput === null) {
      playAgain(getUserFigure(), () => alert('Пока'));
      return undefined;
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
      }
      if ((userFigure + 1) % 3 === compFigure) {
        result.player += 1;
        alert(`${results} Победа за вами!`);
      } else {
        result.computer += 1;
        alert(`${results} Победил компьютер!`);
      }
    };

    function start() {
      const userFigure = getUserFigure();

      if (userFigure !== undefined) {
        const compFig = getCompFigure();

        console.log(compFig);
        checkWinner(userFigure, compFig);


        playAgain(start(), () => alert(`Компьютер набрал: ${result.computer} Ваши очки: ${result.player}.`));
      }
    }

    return start;
  };

  window.RPS = game();
})();

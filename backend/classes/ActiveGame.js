class ActiveGame {
  gamePlan;
  gameStartTime;
  gameEndTime;
  players = [];

  constructor(gamePlan) {
    this.gamePlan = gamePlan;
  }

  set players(player) {
    this.players = () => {
      this.players.push(player);
    };
  }

  setGameStartTime() {
    this.gameStartTime = Date.now.toISOString;
  }

  setGameEndTime(time) {
    this.gameEndTime = time.toISOString;
  }

  getRemainingTime() {
    return this.gameEndTime - this.gameStartTime;
  }

  //add getters for player stats here
}

export default ActiveGame;

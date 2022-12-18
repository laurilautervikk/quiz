import crypto from "crypto";

class ActiveGame {
  gamePlan; //object
  activeGameId;
  players = []; //array of ids
  isStarted = false; //boolean

  constructor(gamePlan) {
    this.gamePlan = gamePlan;
    this.activeGameId = crypto.randomUUID();
  }
  // Getters to check quiz answers from gameplan
  get area() {
    return this.calcArea();
  }

  get isGameActivated() {
    return this.isGameActivated;
  }

  get activeGameId() {
    return this.activeGameId;
  }

  set activateGame(boolean) {
    this.isStarted = boolean;
  }
  // Method
  generateInvitation() {
    return; //some uuid link //make a custom endpoint to accept these requests;
  }
}

export default ActiveGame;

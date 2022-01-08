const BowlingScore = require('./bowlingScore.js')

class Bowling {
  constructor(score) {
    this.turn = 1;
    this.frame = 1;
    this.score = score;
  }
  roll(pins) {
    this.score.totalScore += pins;
    this.changeTurn();
  }
  getTurn() {
    return this.turn;
  }
  changeTurn() {
    if(this.turn === 1) { this.turn = 2}
    else if(this.turn === 2) { 
      this.turn = 1
      this.changeFrame()
    };
  }
  changeFrame() {
    this.frame += 1
  }
  getFrame() {
    return this.frame;
  }
}

module.exports = Bowling
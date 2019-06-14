// All code should be written in this file.

let 
playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue,
playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue,
playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue

function setPlayerMoves(player, m1t, m1v, m2t, m2v, m3t, m3v){
  if(!m1t || !m1v || !m2t || !m2v || !m3t || !m3v) {
    return new Error('Check Your Values')
  }

  if(player !== 'Player One' || player !== 'Player Two'){
    return new Error('Please Enter Player One or Player Two')
  }


}

function getRoundWinner(round){

}

function getGameWinner(){

}
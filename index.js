alert("Space Battle, a console log game!");
let countShip = 0;
let humanShip ={
    hull : 20,
    firepower: 5,
    accuracy: .7
}
class Space {
    constructor() {
      this.hull = Math.floor(Math.random() * 3) + 3.5;
      this.firepower = Math.floor(Math.random() * (4-2) + 2.5); 
      this.accuracy = Math.random();
      };
    }

    let alienShip = [];
        for (let i= 0; i < 6; i++){
            alienShip.push(new Space(i));
        }
            //console.log(alienShip);

    function humanAttack () {
       if (humanShip.accuracy <= .7){
            alienShip[countShip].hull -= humanShip.firepower;
            console.log("Aliens have been hit!");
            console.log("Your attack hits for " + humanShip.firepower);
        if (alienShip[countShip].hull <= 0){
            console.log("Alienship down!");

            countShip++;
        }
        }
    };
    
    function alienAttack(){
        if (humanShip.hull <= 0){
            console.log("You're dead!");
            game === true;
        }
        if (alienShip[countShip].accuracy >= .6 && alienShip[countShip].accuracy <= .8) {
            humanShip.hull -= alienShip.firepower;
            console.log("Human have been hit");
            console.log("You've been hit for " + alienShip[countShip].firepower);
        }    
    };

    let game = false;
    
    function begin(){
        while(countShip < 6 && humanShip.hull > 0 && game == false){
        let action = prompt("Are you going to attack or retreat?");
            if (action.toLowerCase() === "attack"){
            humanAttack();
            gameWon();
            if(game === true){
                return;
            }
            alienAttack();
            gameWon();
            } else if (action.toLowerCase() === 'retreat') {
                console.log('Game Over You Are A QUITTER!');
                countShip = 6;
                
            }
        }
    }
        function gameWon () {
            if (humanShip.hull <= 0 && game === true){
            console.log('Aliens win!');
        }
           else if(countShip === 6) {
            console.log('Game over you win!');
            game === true;
        }   
           
    };
             
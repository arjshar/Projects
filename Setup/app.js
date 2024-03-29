new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        max: 10
    },
    methods: {
    startGame: function(){
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
    },
    attack: function () {
        this.monsterHealth -= this.calculateDamage(10, 3);
        
        if (this.checkWin()) {
            return;
        }
    
        this.monsterAttacks();
    },
    specialAttack: function () {
        this.monsterHealth -= this.calculateDamage(10, 20);
        if (this.checkWin()) {
            return;
        }
        this.monsterAttacks();

    },
    monsterAttacks: function(){
        this.playerHealth -= this.calculateDamage(12, 5); 
        this.checkWin();
    },
    heal: function () {
        if (this.playerHealth <= 90) {
            this.playerHealth += 10;
        } else {
            this.playerHealth = 100;
        }
        
        this.monsterAttacks();
    },
    giveUp: function () {
        this.gameIsRunning = false;
    },
    calculateDamage: function(max, min) {
        return damage = Math.max(Math.floor(Math.random()* max)+ 1, min)
    },
    checkWin: function() {
        if (this.monsterHealth <= 0){
            if (confirm('You Won! Play Again?')){
                this.startGame();
            }
            else{
                this.gameIsRunning = false;
            }
            return true;
        }
        else if (this.playerHealth <= 0) {
            if (confirm('You lost! New Game?')) {
                this.startGame();
            } else {
                this.gameIsRunning = false;
            }
            return true;
        }
        return false;
    }
}
});
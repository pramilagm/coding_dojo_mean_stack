function coinChange(coins) {
    var change_coin = {

        dollars: Math.floor(coins / 100),
        quarters: Math.floor((coins % 100) / 25),
        dimes: Math.floor((coins % 25) / 10),
        nickels: Math.floor((coins % 10) / 5),
        pennies: Math.floor(coins % 5)
    }
    console.log(change_coin);



}
coinChange(312);
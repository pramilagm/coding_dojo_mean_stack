module.exports = class MyMath {
    constructor() {
        return {
            add: function (num1, num2) {
                console.log("The sum is : ", num1 + num2)
            },
            multiply: function (num1, num2) {
                console.log("The output is :", num1 * num2)
            },
            square: function (num) {
                console.log("The output is :", num * num)

            },
            random: function (num1, num2) {
                console.log("The random number is ", Math.random() * (num2 - num1) + num1);
            }
        }
    }

}
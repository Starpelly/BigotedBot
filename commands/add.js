module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: `you're lower-class lmaoooo try again when you make at least 18$ an hour`,
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.reply(`${num1 + num2}`)
    },
    permissions: [],
    requiredRoles: [],
}
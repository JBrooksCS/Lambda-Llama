const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
    //console.log(`Randomizer output : ${randomizer}`)
    var namer = function () {
        var suffix = " the Llama"
        var name = possibleNames[randomizer]
        return (name + suffix)
    }

    return namer
}

nameMaker = llamaNamer()
console.log(nameMaker())
import inquirer from "inquirer";

let questions = [
    {
        type: "input",
        name: "name",
        message: "What is your dog's name?"
    },
]


const question_time = async () => {
    let response = await inquirer.prompt(questions)
    return response.name    
}

const stats =  {
    name: await question_time (),
    age: 1,
    energy: 10,
    food: 10,
    water: 10,
    toilet: 10,
    sleep: 10
}


const game_loop = () => {  
    console.log(`Keep ${stats.name}'s stats above 0 but below 20`)
    console.table(stats)
    if (stats.age > 10){
        console.log(`${stats.name} has died of old age. ${stats.name} was a happy dog.`)
        console.log("Game Over")
        return
    }
    else if (stats.energy < 0){
        console.log(`${stats.name} died of exhaustion`)
        console.log("Game Over")
        return
    }
    else if (stats.energy > 20){
        console.log(`${stats.name} died of a heart attack`)
        console.log("Game Over")
        return
    }
    else if (stats.food < 0){
        console.log(`${stats.name} died of starvation`)
        console.log("Game Over")
        return
    }
    else if (stats.food > 20){
        console.log(`${stats.name} died of obesity`)
        console.log("Game Over")
        return
    }
    else if (stats.water < 0){
        console.log(`${stats.name} died of dehydration`)
        console.log("Game Over")
        return
    }
    else if (stats.water > 20){
        console.log(`${stats.name} died of overhydration`)
        console.log("Game Over")
        return
    }
    else if (stats.toilet < 0){
        console.log(`${stats.name} died of constipation`)
        console.log("Game Over")
        return
    }
    else if (stats.sleep < 0){
        console.log(`${stats.name} died of insomnia`)
        console.log("Game Over")
        return
    }

    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: `What would you like ${stats.name} to do`,
          choices: ["Play", "Eat", "Drink", "Toilet", "Sleep"],
        },
      ])
      .then((answers) => {
          if (answers.action == "Eat") {
            console.log(`${stats.name} is eating`)
            stats.energy = stats.energy + 1
            stats.food = stats.food + 3
            stats.water = stats.water + 0
            stats.toilet = stats.toilet - 2
            stats.sleep = stats.sleep - 1
          }
          else if (answers.action == "Drink") {
            console.log(`${stats.name} is drinking`)
            stats.energy = stats.energy + 1
            stats.food = stats.food + 0
            stats.water = stats.water + 3
            stats.toilet = stats.toilet - 3
            stats.sleep = stats.sleep + 0
          }
          else if (answers.action == "Play") {
            console.log(`${stats.name} is playing`)
            stats.energy = stats.energy - 3
            stats.food = stats.food - 3
            stats.water = stats.water - 2
            stats.toilet = stats.toilet - 0
            stats.sleep = stats.sleep - 3
          }
          else if (answers.action == "Toilet") {
            console.log(`${stats.name} is using the toilet`)
            stats.energy = stats.energy + 0
            stats.food = stats.food + 0
            stats.water = stats.water + 0
            stats.toilet = 10
            stats.sleep = stats.sleep - 0
          }
          else if (answers.action == "Sleep") {
            console.log(`${stats.name} is sleeping`)
            stats.age = stats.age + 1
            stats.energy = stats.energy + 2
            stats.food = stats.food - 1
            stats.water = stats.water - 1
            stats.toilet = stats.toilet - 2
            stats.sleep = 10
          }
      })
      .then(() => game_loop())
  }

  

  game_loop()

  
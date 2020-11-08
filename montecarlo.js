let items = [
    {
        name: "Enchanted Book",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0118,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Iron Boots",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0189,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Iron Nuggets",
        min_quantity: 9,
        max_quantity: 36,
        drop_probability: 0.0236,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Splash Potion",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0236,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Potion",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0236,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Nether Quartz",
        min_quantity: 8,
        max_quantity: 16,
        drop_probability: 0.0473,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0

    },
    {
        name: "Glowstone Dust",
        min_quantity: 5,
        max_quantity: 12,
        drop_probability: 0.0473,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Magma Cream",
        min_quantity: 2,
        max_quantity: 6,
        drop_probability: 0.0473,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0

    },
    {
        name: "Ender Pearl",
        min_quantity: 4,
        max_quantity: 8,
        drop_probability: 0.0473,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "String",
        min_quantity: 8,
        max_quantity: 24,
        drop_probability: 0.0473,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Fire Charge",
        min_quantity: 1,
        max_quantity: 5,
        drop_probability: 0.0946,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Gravel",
        min_quantity: 8,
        max_quantity: 16,
        drop_probability: 0.0946,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Leather",
        min_quantity: 4,
        max_quantity: 10,
        drop_probability: 0.0946,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Nether Brick",
        min_quantity: 4,
        max_quantity: 16,
        drop_probability: 0.0946,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Obsidian",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0946,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Crying Obsidian",
        min_quantity: 1,
        max_quantity: 3,
        drop_probability: 0.0946,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    },
    {
        name: "Soul Sand",
        min_quantity: 4,
        max_quantity: 16,
        drop_probability: 0.0946,
        current_drops: 0,
        average_drops: 0,
        total_drops: 0,
        desired_successes: 0,
        min_assigned_probability: 0,
        max_assigned_probability: 0
    }
]

function barter() {
    let random = getBarteringRandom()
    for(let i=0; i<items.length; i++) {
        let item = items[i]
        if (random >= item.min_assigned_probability && random < item.max_assigned_probability) {
            let drop_amount = getRandomInt(item.min_quantity, item.max_quantity)
            item.current_drops += drop_amount
            item.total_drops += drop_amount
        }
    }
}

function distributeProbabilities() {
    let max_probability = 1
    for (let i=0; i<items.length; i++) {
        let item = items[i]
        item.max_assigned_probability = max_probability
        item.min_assigned_probability = max_probability - item.drop_probability
        max_probability = item.min_assigned_probability
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getItems() {
    return items
}

function getBarteringRandom() {
    let random = 0
    while (random == 0 || random == 1) {
        random = Math.random()
    }
    return random
}

function calculateAverageDrops(simulations) {
    for (let i=0; i<items.length; i++) {
        let item = items[i]
        item.average_drops = (item.total_drops / simulations).toFixed(2)
    }
}

function checkDesiredSuccess(desired_item, desired_amount) {
    for (let i=0; i<items.length; i++) {
        let item = items[i]
        if (desired_item == item.name && item.current_drops >= desired_amount) {
            item.desired_successes += 1
        }
    }
}

function getDesiredSuccesses(desired_item) {
    for (let i=0; i<items.length; i++) {
        let item = items[i]
        if (desired_item == item.name) {
            return item.desired_successes
        }
    }
    return undefined
}

function reset() {
    for (let i=0; i<items.length; i++) {
        let item = items[i]
        item.current_drops = 0
        item.average_drops = 0
        item.total_drops = 0
        item.desired_successes = 0
    }
}

function resetCurrentDrops() {
    for (let i=0; i<items.length; i++) {
        let item = items[i]
        item.current_drops = 0
    }
}

function runSimulations(simulations, gold, desired_item, desired_amount) {
    let probability = undefined
    let successes = undefined

    reset()
    distributeProbabilities()    

    if (desired_item && desired_amount && desired_item != "Choose a desired item") {
        successes = 0
    }


    total_item_drops = 0

    for(let i=0; i<simulations; i++) {

        for(let j=0; j<gold; j++) {
            barter()
        }    

        checkDesiredSuccess(desired_item, desired_amount)
        resetCurrentDrops()
    }
    
    calculateAverageDrops(simulations)
    successes = getDesiredSuccesses(desired_item)
    
    if (successes != undefined) {
        probability = {
            desired_item: desired_item,
            desired_amount: desired_amount,
            simulations: simulations,
            successes: successes,
            gold: gold,
            percentage: ((successes / simulations) * 100).toFixed(2)
        }
    }

    return {
        items: items,
        probability: probability
    }
}
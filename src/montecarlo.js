let items = [
    {
        name: "Enchanted Book",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0118,
        average_drops: 0
    },
    {
        name: "Iron Boots",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0189,
        average_drops: 0
    },
    {
        name: "Iron Nuggets",
        min_quantity: 9,
        max_quantity: 36,
        drop_probability: 0.0236,
        average_drops: 0
    },
    {
        name: "Splash Potion",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0236,
        average_drops: 0
    },
    {
        name: "Potion",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0236,
        average_drops: 0
    },
    {
        name: "Nether Quartz",
        min_quantity: 8,
        max_quantity: 16,
        drop_probability: 0.0473,
        average_drops: 0

    },
    {
        name: "Glowstone Dust",
        min_quantity: 5,
        max_quantity: 12,
        drop_probability: 0.0473,
        average_drops: 0
    },
    {
        name: "Magma Cream",
        min_quantity: 2,
        max_quantity: 6,
        drop_probability: 0.0473,
        average_drops: 0

    },
    {
        name: "Ender Pearl",
        min_quantity: 4,
        max_quantity: 8,
        drop_probability: 0.0473,
        average_drops: 0
    },
    {
        name: "String",
        min_quantity: 8,
        max_quantity: 24,
        drop_probability: 0.0473,
        average_drops: 0
    },
    {
        name: "Fire Charge",
        min_quantity: 1,
        max_quantity: 5,
        drop_probability: 0.0946,
        average_drops: 0
    },
    {
        name: "Gravel",
        min_quantity: 8,
        max_quantity: 16,
        drop_probability: 0.0946,
        average_drops: 0
    },
    {
        name: "Leather",
        min_quantity: 4,
        max_quantity: 10,
        drop_probability: 0.0946,
        average_drops: 0
    },
    {
        name: "Nether Brick",
        min_quantity: 4,
        max_quantity: 16,
        drop_probability: 0.0946,
        average_drops: 0
    },
    {
        name: "Obsidian",
        min_quantity: 1,
        max_quantity: 1,
        drop_probability: 0.0946,
        average_drops: 0
    },
    {
        name: "Crying Obsidian",
        min_quantity: 1,
        max_quantity: 3,
        drop_probability: 0.0946,
        average_drops: 0
    },
    {
        name: "Soul Sand",
        min_quantity: 4,
        max_quantity: 16,
        drop_probability: 0.0946,
        average_drops: 0
    }
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getItems() {
    return items
}

function runSimulations(simulations, gold, desired_item, desired_amount) {
    let successes = undefined
    let probability = undefined

    if (desired_item && desired_amount && desired_item != "Choose a desired item") {
        successes = 0
    }

    for(let i=0; i<items.length; i++) {
        let item = items[i]

        total_item_drops = 0
    
        for(let i=0; i<simulations; i++) {
            item_drops = 0
    
            for(let j=0; j<gold; j++) {
                if (Math.random() < item.drop_probability) {
                    item_drops += getRandomInt(item.min_quantity, item.max_quantity)
                }
                    
            }    

            if (successes != undefined && item_drops > desired_amount && desired_item == item.name) {
                successes = successes + 1
            }

            total_item_drops += item_drops
        }
    
        item.average_drops = (total_item_drops / simulations).toFixed(2)
    }

    if (successes != undefined) {
        probability = {
            desired_item: desired_item,
            desired_amount: desired_amount,
            simulations: simulations,
            successes: successes,
            gold: gold,
            percentage: (successes / simulations).toFixed(4) * 100
        }
    }

    return {
        items: items,
        probability: probability
    }
}
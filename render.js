let DEFAULT = {
    items: [
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
}

function renderDropDown(json) {
    var template = document.getElementById('select-template').innerHTML;
    var rendered = Mustache.render(template, json);
    
    document.getElementById('target-select').innerHTML = rendered;
}

function renderTable(json) {
    var template = document.getElementById('table-template').innerHTML;
    var rendered = Mustache.render(template, json);
    
    document.getElementById('target-table').innerHTML = rendered;
}

function renderSuccessProbability(json) {
    var template = document.getElementById('probability-template').innerHTML;
    var rendered = Mustache.render(template, json);
    
    document.getElementById('target-probability').innerHTML = rendered;
}

function renderInit(json) {
    renderDropDown(json)
    renderTable(json)
}

function renderSimulation(json) {
    renderTable(json)
    renderSuccessProbability(json)
}

$(document).ready(function() {
    renderInit(DEFAULT)
});

$("#simulate").click(function() {
    let simulations = parseInt($("#simulations").val())
    let gold = parseInt($("#gold").val())
    let desired_item = $("#target-select").val()
    let desired_amount = parseInt($("#desired-amount").val())
    let res = runSimulations(simulations, gold, desired_item, desired_amount)

    console.log(res)
    renderSimulation(res)
});
const mongoose = require("mongoose");
const Organization = require("./models/org");

const data = [
    {
        name: "P.S.L. (Party of Socialism and Liberation)",
        image: "/images/PSLlogo-large-with-letters3.png",
        description: "P.S.L is an organized party fighting for BLM, the end of capitalism and its devastating products (racism, poverty, gender-based prejudice, homophobia, ableism, imperialism). PSL centers Black voices first and foremost. Follow them on Facebook at PSL-Denver or pslweb.org.",
        credible: true,
    },
    {
        name: "BLM5280",
        image: "/images/blm5280.png",
        description: "BLM5280 is Colorado's BLM chapter that is part of the national movement that aligns all Black people in love, power, and liberation. This chapter works to expose and eradicate structures and systems of oppression in Colorado, and uses a holistic racial justice approach to strengthen individual and community health. Follow their Facebook and Instagram @blm5280 for more information.",
        credible: true,
    },
    {
        name: "AfroLiberationFront",
        image: "/images/alfco.jpg",
        description: "AfroLiberationFront fights to end private prisons in Colorado, defund the police, house the homeless, remove police presence in schools state-wide, and more. Their peaceful occupational protest encampment (co-organized with WeThePeople303) was met with excessive police force on July 1st, but they are continuing their fight and ask for your physical support and encourage donations for food, medical supplies, trash receptables, legal aid, etc. Follow their Instagram and Twitter @afroliberationfron or support them financially on Venmo @AfroFrontCO.",
        credible: true,
    },
    {
        name: "W.A.L.D. (We Are Love Denver",
        image: "/images/wald.jpg",
        description: "W.A.L.D. has been allegedly exposed for working with the police and mayor of Denver. If you are protesting against police brutality, remain attentive about joining these marches as they are allegedly collaborating with the police.",
        credible: false,
    }
]

function seedDB(){
    //Remove all groups
    Organization.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed groups!");
        //add a few groups
        data.forEach(function(seed){
            Organization.create(seed, function(err, organization){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a group");
                }
            });
        });
    });
}

module.exports = seedDB;
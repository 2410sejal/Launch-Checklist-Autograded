// Write your JavaScript code here!

const helper = require("./scriptHelper");
// const  { addDestinationInfo } = require("./scriptHelper");
// const { pickPlanet } = require("./scriptHelper");
// const { myFetch }  = require("./scriptHelper");


window.addEventListener("load", function() {

    let form = document.queryselector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel =document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    
        helper.formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       
    });

    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = helper.myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanet= helper.pickPlanet(listedPlanets);
       let name = randomPlanet.name;
       let diameter = randomPlanet.diameter;
       let star = randomPlanet.star;
       let distance = randomPlanet.distance;
       let moons = randomPlanet.moons;
       let imageUrl = randomPlanet.image;
     helper.addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
                
    })
    
 });
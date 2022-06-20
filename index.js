const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'
];

function findMatching(drivers, name){
    return drivers.filter(function (driversName){
        return driversName.toLowerCase() === name.toLowerCase();
    })
};

function fuzzyMatch(drivers, name){
    return drivers.filter(function(driversName){
    return driversName.startsWith(name);
    })
};

const driverAndTown =  [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
      {
        name: 'Sammy',
        hometown: 'New York' } ,
      {
        name: 'Sally',
        hometown: 'Cleveland' },
      {
        name: 'Annette',
        hometown: 'Los Angeles' },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay' }
]

function matchName(driverAndTown, name){
    return driverAndTown.filter(function(driver){
        return driver.name === name
    })
}

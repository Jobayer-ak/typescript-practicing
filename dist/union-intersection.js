"use strict";
// enum type (enum type using is not best practice. we should avoid using enum type )
var Level;
(function (Level) {
    Level["Junior"] = "Junior";
    Level["Mid"] = "Mid";
    Level["Senior"] = "Senior";
})(Level || (Level = {}));
// union type
const newDeveloper = {
    name: 'Monjurul Islam',
    expertise: 'Javascript',
    experience: 1,
};
// intersection type
const developer = {
    name: 'Next Vai',
    expertise: 'TypeScript',
    experience: 2,
    leadershipExperience: 1,
    level: 'Junior',
};

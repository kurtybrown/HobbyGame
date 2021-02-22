"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (experienceYears) {
        this.experienceYears = experienceYears;
    };
    Person.prototype.samePerson = function (name) {
        if (this.name == name) {
            return true;
        }
        else {
            return false;
        }
    };
    Person.prototype.showAttributesConsole = function () {
        console.log(this.name + "\n" + this.nationality + "\n" + this.profession + "\n" + this.experienceYears);
    };
    Person.prototype.showAttributes = function () {
        console.log("Name: " + this.name + " \nNationality: " + this.nationality + " \nProfession: " + this.profession + " \nYears of Experience: " + this.experienceYears);
    };
    return Person;
}());
exports.Person = Person;

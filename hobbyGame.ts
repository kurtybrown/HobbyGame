export class Person
{
    private name:string;
    private nationality:string;
    private profession:string;
    private experienceYears:number;

    constructor(name:string, nationality:string, profession:string, experienceYears:number)
    {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }

    getName():string
    {
        return this.name
    }
    setName(name:string)
    {
        this.name = name;
    }
    getNationality():string
    {
        return this.nationality
    }
    setNationality(nationality:string)
    {
        this.nationality = nationality;
    }
    getProfession():string
    {
        return this.profession
    }
    setProfession(profession:string)
    {
        this.profession = profession;
    }
    getExperienceYears():number
    {
        return this.experienceYears
    }
    setExperienceYears(experienceYears:number)
    {
        this.experienceYears = experienceYears;
    }
    samePerson(name):boolean
    {
        if(this.name == name)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    showAttributesConsole()
    {
        console.log(this.name +"\n" + this.nationality +"\n"+ this.profession +"\n" + this.experienceYears)
    }
    showAttributes()
    {
        console.log(`Name: ${this.name} \nNationality: ${this.nationality} \nProfession: ${this.profession} \nYears of Experience: ${this.experienceYears}`)
    }

}
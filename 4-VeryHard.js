
// VERY HARD:------->>>>>>>>>>>>>>>>>>>>>

class Person {
    //PROPERTIESS
    constructor(name, age, job, music) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.music = music;

    }
    //METHODS
    exercise() {
        // console.log(this.name, this.age, this.job);
        console.log(`I love to listen to ${this.music}!!`) //THIS IS NUMBER 2 FROM VERY HARD
    }
    fetchJob() {
        console.log(`This is ${this.name} and they are a ${this.job}.`)
    }
}
let person1 = new Person("Jose", 24, "Coding Student", "Mac Demarco");
let person2 = new Person("Darlene", 24, "Beauty Advisor");
person1.exercise();
person1.fetchJob();
person2.fetchJob();
//^^^^PARTS 1-3


//PARTS 4 -8 

class Programmer {
    //Properties
    constructor(name, age, job, languages) {

        this.name = name;
        this.age = age;
        this.job = job;
        this.languages = [languages];
        this.busy = true;
    }
    completeTask() {
        return this.busy = false;
    }
    acceptNewTask() {
        return this.busy = true;
    }
    offerNewTask() {
        console.log(this.busy = false ? `${this.name} can accept new tasks right now` : `${this.name} cannot recieve tasks right now`)
    }
    learnLanguages(languages) {
        this.languages.push(languages);
        console.log();
    }
    listLanguage() {
        console.log(`${this.name} knows how to speak ${this.languages.toString()}.`);
    }
}

let programmer1 = new Programmer(person1.name, person1.age, person1.job, "English, Spanish");
console.log(programmer1);
programmer1.completeTask();
programmer1.offerNewTask();
programmer1.learnLanguages(" French, Japanese, Portugese");
programmer1.listLanguage();


//Practice 1

var Girlyn = {
    favTVshow: "Breaking Bad",
    favMovie: "Dark Knight"
}

var Person = Girlyn;
Person.favTVshow = "Game of Thrones";
console.log(Girlyn.favTVshow); //will display Game of Thrones

//Practice 2

var a = [1,2,3];
var b = [1,2,3];
var c = a;

var ab_eq = (a === b); //will return false
var ac_eq = (a === c); //will return true

console.log("ab_ed: " + ab_eq);
console.log("ac_ed: " + ac_eq);

//Practice 3
var Gi = {
    printFirstName:function (){
        console.log("My Name is Gi");
        console.log(this === Gi);//will display true
    }
}

Gi.printFirstName();

function doSomthing(){
    console.log("Function is global: ");
    console.log(this === global);
}

doSomthing();

//Practice 3 Prototyping

function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var user1 = new User();
var user2 = new User();

user1.name = "user1";
user2.name = "user2";

user1.giveLife(user2);
console.log("user1: " + user1.life);
console.log("user2: " + user2.life);


//You can add function to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + "just uppercutted " + targetPlayer.name);
}

user2.uppercut(user1);
console.log("user1: " + user1.life);
console.log("user2: " + user2.life);

//You can add properties to all objects
User.prototype.magic = 60;
console.log("user1 magic: " + user1.magic);
console.log("user2 magic: " + user2.magic);

//Practice 4 importing modules
var movies = require('./movies');
movies.printGOT();
movies.printBB();

console.log(movies.favMovie);


////Practice 5 importing more modules


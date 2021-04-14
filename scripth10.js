  let animal1 = {
    name: "Aki",
    type: "Dog",
    age: 5,
    race: "Shiba Inu",
    speak: "Bark! Bark! Bark!",
    details: function(){
      return this.type + " " + this.name + " " + this.age + " " + this.race;
    },
    howOldAmI: function(){
      return "I am" + " " + this.age + " " + "years old.";
    }
  }

  let animal2 = {
    name: "Biiiird",
    type: "Parrot",
    age: 1,
    race: "Lovebird",
    friend: function(){
      return animal1;
    },
    myFriendIs: function(){
      return this.friend.name;
    },
    amIYoungerThanFriend: function(){
      if(this.age < animal1.age){
        console.log("True");
      }
      else{
        console.log("False");
      }
    }
  }

  /* speak() : Va printa "Bark! Bark! Bark!"
  
  details() : Va printa "Type:{type} Name:{name} Age:{age} Race:{race}"

  howOldAmI(): Va printa varsta animal1
  */


/* pentru animal1 */

  console.log(animal1.speak);
  console.log(animal1.details());
  console.log(animal1.howOldAmI());

/* friend : proprietate cu valoarea primului obiect (animal1) 
   myFriendIs() : Va printa numele obiectului prorietii friend 
   amIYoungerThanFriend() : Va prinda "True" daca (vreau sa folosim un if) varsta este mai mica decat
   varsta proprietii friend altfel vom printa "False"
*/


  /* pentru animal2 */
  
  console.log(animal2.friend());
  console.log(animal2.myFriendIs());
  console.log(animal2.amIYoungerThanFriend());
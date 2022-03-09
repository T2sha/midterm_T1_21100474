// Mid Term Assessment: Classes & Constructors 
// Assessment Duration: 45 Min
// Assessment Total: 100
// DV200: Assessment A

// Instructions: 
// Using Classes and the basic principles of OOP, refactor the below procedural code into Object Oriented Code. 

// PART ONE: Super Class 
// 1. Using the information provided below, convert the following variables and functions into a class template called USER. 
// 2. Using the principle of Abstraction, ensure the setSystemId method and sci_id property, are set private
// 3. The setSciId method must run automatically when the constructor function is invoked.
// The super class should also contain the onDuty function, which will be set to Public

//PART TWO: Class Inheritance 
// 4. Create a New Class that inherits from your Super class, call this new sub-class 'ScienceHeads'
// 5. The constructor method must include 4 Parameters, 'first', 'last', 'department' and 'sector'
// 6. Dont forget to use the super(); function in gain access to the super class properties.  
// 7. Take a look at SNIPPET ONE, include the Method in the sub-class as a public method.

//PART THREE: Final Instance  
// 8. Create a New Class that inherits from your ScienceHeads class, call this new sub-class 'Intern'
// 9. The constructor must take three parameters, 'first', 'last' and 'securityClearance'
// 10. Ensure you are inherting 'first' & 'last' and assigning 'securityClearance' to the Intern Class
// 10. Take a look at SNIPPET TWO, include the Method in the sub-class as a public method.

//PART FOUR: Invoking Constructors 

// 11. Assign a let variable called userEx and create a new instance of the USER class.
// 12. Assign a let variable called divHead and create a new instance of the DivisionHead class.
// 13. Assign a let variable called internOne and create a new instance of the Intern class.
// 14. Invoke the assignHead Method from internOne


var first = "Bob"; 
var last = "Oppenheimer";
var username = "CastleBravo"; 
var email = "atom@breakers.com"
var sci_id = "";
var dutyStatus = false; 

function setSciId(){
    sys_id = Math.round(Math.random() * 100000);
    alert(first + " " + last + " has been assigned system id: " + sys_id);
}

function onDuty(){
    if(!dutyStatus){
        dutyStatus = true;
        message = "On"
        alert( first + " " + last + " is now " + message + " duty...");
    } else {
        dutyStatus = false;
        message = "Off"
        alert( first + " " + last + " is now " + message + " duty...");
    }
}

//Part One 
class User{
    constructor (first,last,username,email,sci_id,dutyStatus){
        this.first=first;
        this.last=last;
        this.username=username;
        this.email=email;
        this.sci_id=sci_id;
        this.dutyStatus=dutyStatus;

        let setSystemId= function(){
            console.log(this.sci_id + "has been limited access")
        }
    }
  
  
}

//Part Two 
class ScienceHeads extends User{
    constructor(first,last,department,sector){
        super()
        var first=first;
        var last=last;
        var department=department;
        var sector=sector;
    }

    setCondition(condition){
        this.condition= condition;
    }
}

//Part three
class Intern extends ScienceHeads{
    constructor(first,last,securityClearance){
        super(first,last);
        this.securityClearance= securityClearance;
    }

        setPermissions(){
            this.setPermissions = "Bob";
            console.log("This user has moderate access")
        }
    }

    //Part 4 
    let userEx = new User("Bob","Oppenheimer","CastleBravo","atoms@breakers.com");
    let divHead = new ScienceHead ("Bob", "Oppenheimer", department,sector);
    let internOne = new Intern ("Bob","Oppenheimer",securityClearance);


// SNIPPET ONE: class ScienceHeads public method: 

// updateSector(){
//     const sectors = ['','Sector A', 'Sector B', 'Sector C', 'Sector X'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = sectors[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }

// SNIPPET TWO: class Intern public method: 
// assignHead(){
//     const divHeads = ['','Michael Scott', 'Pam Beesly', 'Jim Helpert', 'Creed Baton'];
//     let value = Math.round(Math.random() * 4);
//     this.sector = divHeads[value];
//     alert(this.first + " " + this.last + " has been assigned to " + this.sector);
// }

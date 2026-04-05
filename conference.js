//Conference Class 

class Conference {

    //Static properties to keep track of total conferences and available slots

    static totalConferences = 0;
    static availableSlots = 10;

    constructor(eventId, title) { 
        this.eventId = eventId;
        this.title = title; 
        Conference.totalConferences++;
}

    static registerSlot() {
        if (Conference.availableSlots > 0) {
            Conference.availableSlots--;
            console.log(`Slot registered successfully. Remaining slots: ${Conference.availableSlots}`);
        } else {
            console.log("Sorry, no available slots for this conference.");
        }
    }
    
    static cancelSlot() {
    Conference.availableSlots++;
    console.log(`Slot cancelled successfully. Available slots: ${Conference.availableSlots}`);
}



}

//Delegate Class

class Delegate {

    //Static property to keep track of total delegates

    static totalDelegates = 0;

    constructor(delegatesId, name) {
        this.delegatesId = delegatesId;
        this.name = name;
        Delegate.totalDelegates++;
    }

    // Method to register for the conference

    register() {
        console.log(`${this.name} (with ID Number:${this.delegatesId}) is being registered for the conference.`);
        Conference.registerSlot();
        console.log("------------------------------");
    }

    bookConference() {
        console.log(`${this.name} has booked a slot for the conference.`);
    }

}

const conference1 = new Conference("C001", "Learnable Tech Conference April 2026");
const delegate1 = new Delegate("D001", "Snr. Dev. Ini - Tech Boss");
const delegate2 = new Delegate("D002", "Dev. Bellgam - Tech Enthusiast");
const delegate3 = new Delegate("D003", "Dev. Geoffrey - Tech Geek");
const delegate4 = new Delegate("D004", "Dev. Bright - Tech Guru");
const delegate5 = new Delegate("D005", "Dev. Topcy - Tech Wizard");
const delegate6 = new Delegate("D006", "Dev. Promise - Tech Prodigy");

console.log(" ------------------------------ WELCOME TO DEV INI'S CONFERENCE TICKETING SYSTEM ------------------------------");

delegate1.bookConference();
delegate1.register();

delegate2.bookConference();
delegate2.register();

delegate3.bookConference();
delegate3.register();

delegate4.bookConference();
delegate4.register();

delegate5.bookConference();
delegate5.register();

delegate6.bookConference();
delegate6.register();

console.log("------------------------------");

console.log(`Total Conferences Slated: ${Conference.totalConferences}`);
console.log(`Available Slots: ${Conference.availableSlots}`);
console.log(`Total Delegates Registered: ${Delegate.totalDelegates}`);

console.log("------------------------------");
console.log("------------------------------");

Conference.cancelSlot();

console.log("------------------------------");


# Conference-Ticketing-System

## 📌 **Title: Conference Ticketing System**

📖 ## Description

The *Conference Ticketing System* is a simple real-world application designed to manage conference registrations efficiently.
This system allows users to:
Browse available conferences
Register for conference slots
Cancel registrations when necessary
It ensures that slot availability is updated in real time as bookings are made or cancelled.

🎯 *Objectives*
To manage conference events and available slots
To track delegate (attendee) registrations
To prevent overbooking by enforcing slot limits
To provide a simple system for booking and cancellation

🧩 *System Components*
1. Conference Class
Represents a conference event.
Attributes:
eventId (String): Unique identifier for the conference
title (String): Name of the conference
availableSlots (Number, static): Total available slots
Methods:
registerSlot() (static): Registers a slot if available
cancelSlot() (static): Restores a slot when a booking is cancelled

2. Attendee Class
Represents a user registering for a conference.
Attributes:
attendeeId (String): Unique ID of the attendee
name (String): Name of the attendee
Methods:
register() : Registers the attendee for a conference
cancelRegistration() : Cancels the attendee’s booking

🚀 *Features*
Real-time slot tracking
Simple registration and cancellation process
Prevents overbooking
Easy to extend for larger systems

📝 *Conclusion*
The Conference Ticketing System demonstrates how object-oriented programming concepts like classes, attributes, methods, and static properties can be used to solve real-world problems such as event management and booking systems.

## UML Class Diagram

![UML Diagram](UML Diagram For Conference Ticketing System.drawio (1).png)

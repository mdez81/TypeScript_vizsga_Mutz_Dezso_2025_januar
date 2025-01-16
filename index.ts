import { EventHandler} from "./src/services/eventHandler";
import { Workshop, Category } from './src/models/category';
import { SportEvent} from "./src/models/category";
import { Event } from './src/models/event';
import { Participant } from './src/models/participant';


const myEvent = new EventHandler();

const workshopCategory = new Workshop("name", "description");
const sportEventCategory = new SportEvent("name1", "description1");




const event1: Event = { 
  id: 1, 
  name: "php worksop", 
  location: "Main stree t 1", 
  time: "2025-1-21 10:00:00" ,
  participants: workshopCategory
};




const Participant1: Participant = { id: 1, name: "John Doe" , email:"test@mail.com"};
const Participant2: Participant = { id: 2, name: "John Smith" , email:"test2@mail.com"};



myEvent.addEvent(event1);

myEvent.addParticipant(Participant1);
myEvent.addParticipant(Participant2);



myEvent.createEvent(1,1);


console.log("események:");
//library.listBorrowedBooks().forEach(book => console.log(`- ${book.title} by ${book.author}`));



myEvent.returnEvent(1);
console.log("Visszavitel után kölcsönzött könyvek:");

/*library.listBorrowedBooks().forEach(book => console.log(`- ${book.title} by ${book.author}`));


console.log("Keresés 'War' címszóra:");

library.findBooksByTitle("War").forEach(book => console.log(`- ${book.title} by ${book.author}`));


console.log("Kölcsönző adatai (ID: 1):");
const borrowerDetails = library.getBorrowerDetails(1);
if (borrowerDetails) {
  console.log(`Név: ${borrowerDetails.name}`);
}*/
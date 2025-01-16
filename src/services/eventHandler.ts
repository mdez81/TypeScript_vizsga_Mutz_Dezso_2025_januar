import {Event} from "../models/event"
import { Participant } from "../models/participant";
import { isEvent, isParticipent } from "../utils/eventType";
import { EventManager } from './eventManager';

export class EventHandler {

    private events:  Map<number, Event> = new Map();
    private participants:  Map<number, Participant> = new Map();
    private eventCase:  EventManager<Event> = new EventManager<Event>();
    
    addEvent(event: Event): void {
        this.events.set(event.id, event);
      }
    
      addParticipant(participant: Participant): void {
        this.participants.set(participant.id, participant);
      }
    
      removeEvent(eventId: number): void {
        this.events.delete(eventId);
        this.eventCase.deleteitem(eventId);
      }
    
      listEvents(): Event[] {
        return Array.from(this.events.values());
      }
    
      createEvent(eventId: number, participantId: number): void {
        const event = this.events.get(eventId);
        const participant = this.participants.get(participantId);
    
        if (isEvent(event) && isParticipent(participant) && !this.eventCase.listItems().find(ev => ev.id === eventId)) {
          this.eventCase.additem(event);
          console.log(`Event ${event.name} borrowed by ${participant.name}`);
        } else {
          console.log(`Cannot create event: ${event ? event.name : 'event not found'} or already borrowed`);
        }
      }
    
      returnEvent(eventId: number): void {
        if (this.eventCase.listItems().find(event => event.id === eventId)) {
          this.eventCase.deleteitem(eventId);
          console.log(`Book returned`);
        } else {
          console.log('Book was not borrowed or does not exist');
        }
      }
    
      listEvent(): Event[] {
        return this.eventCase.listItems();
      }
    
      finEventsByTitle(location: string): Event[] {
        return Array.from(this.events.values()).filter(event => event.location.toLowerCase().includes(location.toLowerCase()));
      }
    
      getParticipantDetails(participantId: number): Participant | undefined {
        return this.participants.get(participantId);
      }

}
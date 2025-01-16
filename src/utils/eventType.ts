import { Event} from "../models/event"
import { Participants } from "../models/participant";

export function isEvent(obj: any): obj is Event{
    return obj && typeof(obj.id ="number") && typeof(obj.name ="string") && typeof(obj.location ="string") && typeof(obj.time ="string")  ;
}

export function isParticipent(obj: any): obj is Participants{
    return obj && typeof(obj.id ="number") && typeof(obj.name ="string") && typeof(obj.email ="string") ;
}
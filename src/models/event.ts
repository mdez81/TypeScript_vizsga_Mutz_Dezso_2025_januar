import { Participant } from "./participant";

export interface Event {
    id: number;
    name: string;
    location: string;
    time: string;
    participants: Participant;
}
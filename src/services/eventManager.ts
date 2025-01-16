
export class EventManager<T extends { id: number}>{

    private items: Map<number, T> = new Map();

    additem(item: T): void{
        this.items.set(item.id, item);
    }

    deleteitem(itemId: number): void{
        this.items.delete(itemId);
        console.log(`Item deleted successfuly with ${itemId}`);
    }

    listItems():T[] {
        return Array.from(this.items.values());
    }
}
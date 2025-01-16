export class Category {

    constructor(public name: string) {
    }
}

export class Workshop extends Category{

    constructor(public name: string, public description:string){
        super(name);
    }
}

export class SportEvent extends Category{

    constructor(name: string, public description:string){
        super(name);
    }
}
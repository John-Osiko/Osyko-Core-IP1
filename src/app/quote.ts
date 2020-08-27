export class Quote {
    showDescription:boolean;
    constructor(public id: number, public title: string, public name: string, public description: string, public poster: string, public submitDate:Date){
        this.showDescription = false;
    }
    
}

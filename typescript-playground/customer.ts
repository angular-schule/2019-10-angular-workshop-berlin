export class Customer {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    foobar(): string {

        setTimeout(() => {
            console.log('ID ist ' + this.id);
        }, 2000);

        return '';
    }
}
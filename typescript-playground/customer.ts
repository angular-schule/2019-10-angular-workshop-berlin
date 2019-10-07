export class Customer {

    constructor(public id: number) {}

    foobar(): string {
        setTimeout(() => {
            console.log('ID ist ' + this.id);
        }, 2000);

        return '';
    }
}
import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    isChildCalled = 'false';
    eventName;

    sayHelloToChild() {
        this.template.querySelector('c-child-component').childMethod();

        //Getter call to make upper case
        this.template.querySelector('c-child-component').itemName();
    }

    

    //call
    page = 1;
    previousHandler(event) {
        eventName = event.target.name;
        if (this.page > 1) {
            this.page = this.page - 1;
        }
    }

    nextHandler() {
        this.page = this.page + 1;
    }
}
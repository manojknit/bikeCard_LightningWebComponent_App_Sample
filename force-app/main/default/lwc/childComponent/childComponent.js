import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    message = '';
    //public variable
    @api childName; 

    //public method
    @api
    childMethod() {
        message = 'parent called child!';
        itemName(message);
    }

    //Getter Setter
    uppercaseItemName;
    @api
    get itemName() {
        return this.uppercaseItemName;
    }

    set itemName(value) {
        this.uppercaseItemName = value.toUpperCase();
    }

    //Event dispatcher for paginator
    previousDispatcher() {
        this.dispatchEvent(new CustomEvent('previous', {detail: 'previousButton'}));
    }

    nextDispatcher() {
        this.dispatchEvent(new CustomEvent('next'));
    }
}
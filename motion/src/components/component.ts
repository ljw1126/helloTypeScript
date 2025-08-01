export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
    attach(component: Component, position?: InsertPosition): void;
    registerEventListener<K extends keyof HTMLElementEventMap>(
        type: K,
        listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any
    ):void;
}

// Encapsulate the HTML element creation
export class BaseComponent<T extends HTMLElement> implements Component {
    protected readonly element: T;
    
    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        console.log(parent);
        console.log(`position : ${position}`);
        parent.insertAdjacentElement(position, this.element);
    }

    removeFrom(parent: HTMLElement) {
        if(parent !== this.element.parentElement) {
            throw new Error('parent mismatch.');
        }

        parent.removeChild(this.element);
    }

    attach(component: Component, position?: InsertPosition): void {
        component.attachTo(this.element, position);
    }

    registerEventListener<K extends keyof HTMLElementEventMap>(
        type: K, 
        listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): void {
        this.element.addEventListener(type, listener);
    }
}

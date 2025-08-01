import {BaseComponent} from "../../component.js";
import {TextData} from "../../../app.js";

export class TextSectionInput extends BaseComponent<HTMLElement> implements TextData{
    constructor() {
        super(`<div>
                <div class="form__container">
                    <label for="title">Title</label>
                    <input type="text" id="title"/>
                </div>
                <div class="form__container">
                    <label for="body">Body</label>
                    <textarea type="text" id="body" row="3"></textarea>
                </div>
            </div>`);
    }

    get title(): string {
        const element = this.element.querySelector('#title')! as HTMLInputElement;
        return element.value;
    }

    get body(): string {
        const element = this.element.querySelector('#body')! as HTMLInputElement;
        return element.value;
    }
}

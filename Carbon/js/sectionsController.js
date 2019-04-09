import SectionsView from './sectionsView.js'
import Sections from './sections.js'

export default class SectionsController {
    constructor(parent){
        this.parent = parent;
        this.parentElement = null;
        this.sections = new Sections();
        this.sectionsView = new SectionsView();
    }

    async init(){
        this.parentElement = document.querySelector(this.parent);
        await this.getSections();
        this.buttonListeners();
    }

    async getSections(){
        //set Loading message
        this.parentElement.innerHTML = 'Loading...';

        const sectionsList = await this.sections.getSections();
        this.sectionsView.renderSectionsList(sectionsList, this.parentElement);
    }

    async buttonListeners(){
        var i = 0;
        var buttons = []

        while(document.getElementById("Button" + i)){
            await buttons.push(document.getElementById("Button" + i));
            i++;
        }

        for (var j = 0; j <= buttons.length - 1; j++){
            //console.log(buttons[j]);
            buttons[j].addEventListener("touchend", this.switchPage);
        }
    }

    async switchPage(event){
        window.location.href = event.target.dataset.href;
    }
}
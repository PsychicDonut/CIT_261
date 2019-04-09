import SectionsController from './sectionsController.js'
import Sections from './sections.js'


const sections = new Sections();
sections.getSections();

const sectionsController = new SectionsController('#sections');
sectionsController.init();
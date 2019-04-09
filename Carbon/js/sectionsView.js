export default

class SectionsView {
    renderSectionsList(sectionsList, listElement) {
        var content = '';
        var i = 0;
        while (sectionsList.id[i]){
            content += "<button class='blueButton font' data-href='" + sectionsList.id[i].link + "' id='Button" + i + "'>" + 
            sectionsList.id[i].title + "<br/>- " + sectionsList.id[i].description + 
            " -</button><br/><br/>";
            i++;
        };
        listElement.innerHTML = content;
    }
    render
}
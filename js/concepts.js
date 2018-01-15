function showCircleSectionContent(cid) {
    // Declare all variables
    var i, sectionContent;

    // Get all elements with class="sectionContent" and hide them
    sectionContent = document.getElementsByClassName('sectionContent');
    for (i = 0; i < sectionContent.length; i++) {
        sectionContent[i].style.display = "none";
    }

    // Show the clicked circle's associated information
    document.getElementById(cid).style.display = "block";

}



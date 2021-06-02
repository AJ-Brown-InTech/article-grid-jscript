function onTechLinkClicked(event) {
    // prevents page from refreshing when the anchor is clicked
    event.preventDefault();
    
    let targetElement = event.target;
    targetElement.classList.add("active");
    }
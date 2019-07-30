$(function () {
    populateButtons(searchArray, 'searchButton', `#buttonsArea`);
    console.log("Page is Loaded");
})

var searchArray = [`Dog`, `Cat`, `Bird`];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $(`<button>`);
        a.addClass(classToAdd);
        a.attr(`data-type`, searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
}
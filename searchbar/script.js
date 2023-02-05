var animals = [
    { "animal": "dog"},
    { "animal": 'cat'},
    { "animal": 'mouse'},
    { "animal": 'lion'},
    { "animal": 'tiger'},
    { "animal": 'elephant'},
    { "animal": 'shark'},
    { "animal": 'seahorse'},
    { "animal": 'whale'},
    { "animal": 'bird'},
    { "animal": 'pinguin'},
    { "animal": 'octapus'},
    { "animal": 'turtle'},
    { "animal": 'zebra'},
    { "animal": 'camel'},
    { "animal": 'hippopotamus'},
    { "animal": 'rhinoceros'},
    { "animal": 'rat'},
    { "animal": 'oyster'},
    { "animal": 'mussel'},
    { "animal": 'panda'},
    { "animal": 'panther'},
    { "animal": 'rabbit'},
    { "animal": 'monkey'},
    { "animal": 'cow'},
    { "animal": 'pig'},
]

var render = function(data) {
    var app = document.getElementById('app');
    var animalsHTMLString = '<ul>' +
        data.map(function(animalOne){
            return "<li>" +
                "<strong>Animal: </strong>" + animalOne.animal + "<br/>" +
                "</li>";
    }).join ('');
    + "</ul>";

    app.innerHTML = animalsHTMLString;
}
render(animals);


var handleSearch = function(event) {
    event.preventDefault();

    var searchTerm = event.target.elements['search'].value;

    var tokens = searchTerm
        .toLowerCase ()
        .split(' ')
        .filter (function(token){
            return token.trim () !== '';
        });
    
    if(tokens.length) {
        var searchTermRegex = new RegExp(tokens.join('|'), 'gim');

        var filteredList = animals.filter(function(animalOne){
            var animalOneString = '';
            for(var key in animalOne) {
                if(animalOne.hasOwnProperty(key) && animalOne[key] !== '') {
                    animalOneString += animalOne[key].toString().toLowerCase().trim() + '';
                }
            }
            return animalOneString.match(searchTermRegex);
        });
        render(filteredList);
    }
};

document.addEventListener('submit', handleSearch);
document.addEventListener('reset', function(event){
    event.preventDefault();
    render(animals);
})



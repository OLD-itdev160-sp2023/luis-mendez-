(function () {

    var data = [ 
        { name: 'emmet',
        description: ' Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2534,
        price: 10.50,
        selector: 'p1'

    },
    {
        name: 'atom-beautify',
        description: ' the atom-beautify  package will clean up your code, and make it more readable .',
        author: 'glavin001',
        url: 'https://atom.io/packages/atom-beautify ',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'
    }
  ];

  function Package(data){
      this.name = data.name;
      this.description = data.description;
      this.author = data.author;
      this.url =data.url;
      this.downloads = data.downloads;
      this.stars = data.stars;
      this.selector = data.selector;

      this.getFormattedDownloads =function (){
        return this.downloads.getFormattedDownloads();
      };

      this.getFormattedStars =function (){
        return this.stars.getFormattedStars();
      };
    }
      
    function getTodaysDate() {
        var today = new Date();
        return today.toDateString();
    }


var getEl = function (id) {
return document.getElementById(id);
}


/** 

 @param 
  @return 
*/


var writePackageInfo = function(package) {
// Get reference to DOM elements
var selector = package. selector,
nameEl = getEl(selector + '-name'),
descEl = getEl(selector + '-description'),
authEl = getEl(selector + '-author'),
downloadEl = getEl(selector + '-downloads'),
starsel = getEl(selector + '-stars');
// Write package data to DOM elements
nameEl.textContent = package.name;
descEl.textContent = package.description;
authEl.textContent = package.author;
downloadEl.textContent = package.getFormattedDownloads();
starsEl.textContent = package.getFormattedStars();
}

dataEl = getEl('date');
dataEL.textContent = getTodaysDate();


var emmet = new package(data[0]);
writePackageInfo(emmet);

var beautify = new package(data[1]);
writePackageInfo(beautify);





 }()); 
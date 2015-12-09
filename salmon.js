//********************************
//Generate Table with CONSTRUCTORS

var hours = ["10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
var stores = [];

function createTable(){

  var sectEl = document.getElementById('data');
  var tblEl = document.createElement('table');
  tblEl.id = 'datatable';
  var thEl = document.createElement ('th');
  var trEl = document.createElement('tr');

  thEl.textContent = "LOCATION";
  trEl.appendChild(thEl);
  tblEl.appendChild(trEl);
  sectEl.appendChild(tblEl);

  var thEl = document.createElement ('th');
  thEl.textContent = "TOTAL";
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    var thEl = document.createElement ('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };
}
createTable();

function Store(name,min,max,avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = [];
  this.dailyCookies = 0;
  stores.push(this)
  Store.prototype.randCustomer = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  };
  Store.prototype.generateHourly = function(){
    for(var i=0; i<hours.length; i++){
      var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
      this.hourlyCookies.push(cookies);
      this.dailyCookies += this.hourlyCookies[i];
    };
  };

  Store.prototype.render = function(){
      this.generateHourly();
            var sectEl = document.getElementById('data');
            var tblEl = document.getElementById('datatable');
            var thEl = document.createElement ('th');
            var trEl = document.createElement('tr');
            var tdEl = document.createElement ('td');

            trEl.appendChild(thEl);
            tdEl.textContent = this.name;
            thEl.appendChild(tdEl);

            var tdEl = document.createElement ('td');
            tdEl.textContent = this.dailyCookies;
            trEl.appendChild(tdEl);

            for (var i = 0; i < hours.length; i++){
              var tdEl = document.createElement ('td');
              tdEl.textContent = this.hourlyCookies[i];
              trEl.appendChild(tdEl);
              tblEl.appendChild(trEl);
            }
          }
this.render();
};

var PikePlace = new Store('Pike Place Market',17,18,5.2);
var SeaTac = new Store('SeaTac Airport', 6,44,1.2);
var SouthCenter = new Store('South Center', 11,38,1.9);
var Bellevue = new Store('Bellevue', 20,48,3.3);
var Alki = new Store('Alki',3,24,2.6);

//************************************
//USER FORM

// var Input  = function(LocName, MinCm, MaxCm, AvgCm) {
//   this.LocName = LocName;
//   this.MinCm = MinCm;
//   this.MaxCm = MaxCm;
//   this.AvgCm = AvgCm
// };
//
// Input.prototype.render = function() {
// if ((this.LocName).toLowerCase() == (this.name).toLowerCase()){
//   this.name = this.LocName;
//   this.min = this.MinCm;
//   this.max = this.MaxCm;
//   this.avg = this.AvgCm;
// } else {
//   Store(this.LocName, this.MinCm, this.MaxCm, this.AvgCm);
// }
// };

// This is a global function to render all of the new instances
// var renderAllComments = function() {
//   comments.innerHTML = '';
//   commentData.forEach(function(comment) {
//     comments.appendChild(comment.render());
//   });
// };

// Setting up variables for DOM access
// var LocName = document.getElementById('LocName');
// console.log(LocName);
// var MinCm = document.getElementById('MinCm');
// console.log(MinCm);
// var MaxCm = document.getElementById('MaxCm');
// console.log(MaxCm);
// var AvgCm = document.getElementById('AvgCm');
// console.log(AvgCm);

// Event handler - handles the submission of comments
function handleInputSubmit (submit){
    submit.preventDefault();
//preventDefault prevents refreshing the page

   if (!event.target.LocName.value || !event.target.MinCm.value || !event.target.MaxCm.value || !event.target.AvgCm.value) {
    return alert('Fields cannot be empty!');
   }
    var LocName = event.target.LocName.value;
    var MinCm = event.target.MinCm.value;
    var MaxCm = event.target.MaxCm.value;
    var AvgCm = event.target.AvgCm.value;
    console.log(LocName,MinCm,MaxCm,AvgCm);

var match = false;
if ((event.target.LocName.value).toLowerCase() == (this.name).toLowerCase()){
  this.min = event.target.MinCm.value;
  this.max = event.target.MaxCm.value;
  this.avg = event.target.AvgCm.value;
} else {
  var newStore = new Store(LocName, MinCm, MaxCm, AvgCm);
}

 }

 // Event listener for comment submission button
 var UserForm = document.getElementById('user-form');
 UserForm.addEventListener('submit', handleInputSubmit);

var ClearComments = document.getElementById('clear');
 ClearComments.addEventListener('click', function(){
   document.getElementById("user-form").reset();
   alert("Fields cleared!");
});


//********************************************
// CONSTRUCTOR for each store  >>>working code

// function Store(name,min,max,avg){
//   this.name = name;
//   this.min = min;
//   this.max = max;
//   this.avg = avg;
//   this.hourlyCookies = [];
//   this.dailyCookies = 0;
//   Store.prototype.randCustomer = function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
//   };
//   Store.prototype.generateHourly = function(){
//     for(var i=0; i<hours.length; i++){
//       var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
//       this.hourlyCookies.push(cookies);
//       this.dailyCookies += this.hourlyCookies[i];
//     };
//   };
//
//   Store.prototype.render = function(){
//       this.generateHourly();
//       var ulStoreEl = document.createElement('ul');
//       ulStoreEl.appendChild(document.createTextNode(this.name));
//       var StoreEl = document.getElementById('data');
//
//       for (var i = 0; i < hours.length; i++){
//         var liHourlyEl = document.createElement('li');
//         liHourlyEl.textContent = hours[i] + ': ' + this.hourlyCookies[i];
//         ulStoreEl.appendChild(liHourlyEl);
//       };
//       StoreEl.appendChild(ulStoreEl);
//       var liDailyEl = document.createElement('li');
//       liDailyEl.textContent = 'Total: ' + this.dailyCookies;
//       ulStoreEl.appendChild(liDailyEl);
//     };
//     this.render();
// };
//
// var PikePlace = new Store('Pike Place Market',17,18,5.2);
// var SeaTac = new Store('SeaTac Airport', 6,44,1.2);
// var SouthCenter = new Store('South Center', 11,38,1.9);
// var Bellevue = new Store('Bellevue', 20,48,3.3);
// var Alki = new Store('Alki',3,24,2.6);

// OBJECT LITERAL for each store >>> working code

// var PikePlace = {
//   min:17,
//   max:88,
//   avg:5.2,
//   hourlyCookies:[],
//   dailyCookies: 0,
//   randCustomer: function(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   generateHourly: function() {
//     for(var i=0; i<hours.length; i++){
//       var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
//       this.hourlyCookies.push(cookies);
//       this.dailyCookies += this.hourlyCookies[i];
//     }
//   },
//   render: function(){
//       this.generateHourly();
//       var ulStoreEl = document.createElement('ul');
//       ulStoreEl.appendChild(document.createTextNode('PikePlace'));
//       var StoreEl = document.getElementById('data');
//
//       for (var i = 0; i < hours.length; i++){
//         var liHourlyEl = document.createElement('li');
//         liHourlyEl.textContent = hours[i] + ': ' + this.hourlyCookies[i];
//         ulStoreEl.appendChild(liHourlyEl);
//       }
//       StoreEl.appendChild(ulStoreEl);
//       var liDailyEl = document.createElement('li');
//       liDailyEl.textContent = 'Total: ' + this.dailyCookies;
//       ulStoreEl.appendChild(liDailyEl);
//     }
//
// };
//
// PikePlace.render();

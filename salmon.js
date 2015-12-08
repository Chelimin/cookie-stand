
//creat ul for months
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var ulEl = document.createElement ('ul');
// var monthsEl = document.getElementById('months');
//
// for (var i=0; i <months.length; i++){
//   var liEl = document.createElement ('li');
//   liEl.textContent = months[i];
//   ulEl.appendChild(liEl);
// }
//
// function renderMonths(){
//   ulEl.appendChild(document.createTextNode('months'));
// }
//
// renderMonths();

// function renderMonths() {
//   // Create an array of Months
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   // Get the 'months' element from index.html and assign it to monthsEl variable
//   var monthsEl = document.getElementById('months');
//   // Create a new UL element <ul></ul>
//   var ulEl = document.createElement('ul');
//   ulEl.appendChild(document.createTextNode('Months'));

//   // Loop through the months array, one index at a time
//   for (var i = 0; i < months.length; i++) {
//     // For each iteration of the loop; Create an LI element <li></li>
//     var liEl = document.createElement('li');
//     // For each LI element; Assign the contents of the array[i] to the LI's text content
//     liEl.textContent = months[i];
//     // Append the populated LI element back to the UL as a Child
//     ulEl.appendChild(liEl);
//   }
//   // Append the completely populated UL to the monthsEl element in index.html
//   monthsEl.appendChild(ulEl);
// }
// // Call the renderMonths function
// // renderMonths();

// An array of hours for your stores

var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Object Literal for each store

var PikePlace = {
  min:17,
  max:88,
  avg:5.2,
  hourlyCookies:[],
  dailyCookies: 0,
  randCustomer: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateHourly: function() {
    for(var i=0; i<hours.length; i++){
      var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
      this.hourlyCookies.push(cookies);
      this.dailyCookies += this.hourlyCookies[i];
    }
  },
  render: function(){
      this.generateHourly();
      var ulStoreEl = document.createElement('ul');
      ulStoreEl.appendChild(document.createTextNode('PikePlace'));
      var StoreEl = document.getElementById('data');


      for (var i = 0; i < hours.length; i++){
        var liHourlyEl = document.createElement('li');
        liHourlyEl.textContent = hours[i] + ': ' + this.hourlyCookies[i];
        console.log(liHourlyEl);
        ulStoreEl.appendChild(liHourlyEl);
      }
      StoreEl.appendChild(ulStoreEl);
      var liDailyEl = document.createElement('li');
      console.log(this.dailyCookies);
      liDailyEl.textContent = 'Total: ' + this.dailyCookies;
      ulStoreEl.appendChild(liDailyEl);
    }
};

PikePlace.render();

var SeaTac = {
  min:6,
  max:44,
  avg:1.2,
  hourlyCookies:[],
  dailyCookies: 0,
  randCustomer: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateHourly: function() {
    for(var i=0; i<hours.length; i++){
      var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
      this.hourlyCookies.push(cookies);
      this.dailyCookies += this.hourlyCookies[i];
    }
  },
  render: function(){
      this.generateHourly();
      var ulStoreEl = document.createElement('ul');
      ulStoreEl.appendChild(document.createTextNode('SeaTac'));
      var StoreEl = document.getElementById('data');


      for (var i = 0; i < hours.length; i++){
        var liHourlyEl = document.createElement('li');
        liHourlyEl.textContent = hours[i] + ': ' + this.hourlyCookies[i];
        console.log(liHourlyEl);
        ulStoreEl.appendChild(liHourlyEl);
      }
      StoreEl.appendChild(ulStoreEl);
      var liDailyEl = document.createElement('li');
      console.log(this.dailyCookies);
      liDailyEl.textContent = 'Total: ' + this.dailyCookies;
      ulStoreEl.appendChild(liDailyEl);
    }
};

SeaTac.render();

var SouthCenter = {
  min:11,
  max:38,
  avg:1.9,
  hourlyCookies:[],
  dailyCookies: 0,
  randCustomer: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateHourly: function() {
    for(var i=0; i<hours.length; i++){
      var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
      this.hourlyCookies.push(cookies);
      this.dailyCookies += this.hourlyCookies[i];
    }
  },
  render: function(){
      this.generateHourly();
      var ulStoreEl = document.createElement('ul');
      ulStoreEl.appendChild(document.createTextNode('SouthCenter'));
      var StoreEl = document.getElementById('data');


      for (var i = 0; i < hours.length; i++){
        var liHourlyEl = document.createElement('li');
        liHourlyEl.textContent = hours[i] + ': ' + this.hourlyCookies[i];
        console.log(liHourlyEl);
        ulStoreEl.appendChild(liHourlyEl);
      }
      StoreEl.appendChild(ulStoreEl);
      var liDailyEl = document.createElement('li');
      console.log(this.dailyCookies);
      liDailyEl.textContent = 'Total: ' + this.dailyCookies;
      ulStoreEl.appendChild(liDailyEl);
    }
};

SouthCenter.render();

var BelleVue = {
  min:20,
  max:48,
  avg:3.3,
  hourlyCookies:[],
  dailyCookies: 0,
  randCustomer: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateHourly: function() {
    for(var i=0; i<hours.length; i++){
      var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
      this.hourlyCookies.push(cookies);
      this.dailyCookies += this.hourlyCookies[i];
    }
  },
  render: function(){
      this.generateHourly();
      var ulStoreEl = document.createElement('ul');
      ulStoreEl.appendChild(document.createTextNode('BelleVue'));
      var StoreEl = document.getElementById('data');


      for (var i = 0; i < hours.length; i++){
        var liHourlyEl = document.createElement('li');
        liHourlyEl.textContent = hours[i] + ': ' + this.hourlyCookies[i];
        console.log(liHourlyEl);
        ulStoreEl.appendChild(liHourlyEl);
      }
      StoreEl.appendChild(ulStoreEl);
      var liDailyEl = document.createElement('li');
      console.log(this.dailyCookies);
      liDailyEl.textContent = 'Total: ' + this.dailyCookies;
      ulStoreEl.appendChild(liDailyEl);
    }
};

BelleVue.render();

var Alki = {
  min:17,
  max:88,
  avg:5.2,
  hourlyCookies:[],
  dailyCookies: 0,
  randCustomer: function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateHourly: function() {
    for(var i=0; i<hours.length; i++){
      var cookies = Math.floor(this.avg * this.randCustomer(this.min,this.max));
      this.hourlyCookies.push(cookies);
      this.dailyCookies += this.hourlyCookies[i];
    }
  },
  render: function(){
      this.generateHourly();
      var ulStoreEl = document.createElement('ul');
      ulStoreEl.appendChild(document.createTextNode('Alki'));
      var StoreEl = document.getElementById('data');

      for (var i = 0; i < hours.length; i++){
        var liHourlyEl = document.createElement('li');
        liHourlyEl.textContent = hours[i] + ': ' + this.hourlyCookies[i];
        console.log(liHourlyEl);
        ulStoreEl.appendChild(liHourlyEl);
      }
      StoreEl.appendChild(ulStoreEl);
      var liDailyEl = document.createElement('li');
      console.log(this.dailyCookies);
      liDailyEl.textContent = 'Total: ' + this.dailyCookies;
      ulStoreEl.appendChild(liDailyEl);
    }
};

Alki.render();

//  Method generateHourly
//   generateHourly: function() {     >>>Method is a function of an object, so it has to be inside the object!
//     // For each index in the hours array:
//       // Generate a random amount of cookies (avg * random num)
//       // Push the value to the hourly cookies array
//       // Add the value to the daily cookie total
//   },
//

// Method render
//   render: function() {
//     // Create a UL Element
//     // Append a textNode to the UL element that will display the name of the store
//     // Assign the store_data element to a variable; document.getElementById
//     // Append the Ul element to your HTML document

    // For each index in the hours array:
      // Create an LI element
      // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
      // Append the LI element to the UL element as a Child
    // Create an LI element
    // Assign the content of your stores Daily Total to the LI element
    // Append the LI element to the UL as a Child
//   }
// };
// Call your render function

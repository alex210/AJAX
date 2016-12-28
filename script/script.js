function GoogleCallback (data) {
  for (var i = 0; i < data.items.length; i++) {
    $('.searchExtradition').append('<a class="displayLink" href="' + data.items[i].link + '">' + data.items[i].title + '</a>');
    $('.searchExtradition').append('<p class="formattedUrl">' + data.items[i].formattedUrl + '</p>');
    $('.searchExtradition').append('<p class="htmlSnippet">' + data.items[i].htmlSnippet + '</p>');
  }
}

$(function() {
  $('button').click(inquiry);
  $('input').keydown(function(eventObject) {
    if (event.keyCode == 13) {
      inquiry();
      return false;
    };
  });

  function inquiry() {
    $('.displayLink').remove();
    $('.formattedUrl').remove();
    $('.htmlSnippet').remove();
    var input = escape($('input').val());
    $.ajax({
      url:'https://www.googleapis.com/customsearch/v1?key=AIzaSyC05riv6daRisjV3KOI4HLEBH5nbmHC5Rk&cx=002539840563688942870:buaxnqaphuy&q='+ input +'&num=10&googlehost=google.ru&alt=json&callback=GoogleCallback&context=?',
      dataType: 'jsonp'
    });
  };

});

function Human() {
  this.name = 'Bill';
  this.age = 25;
  this.gender = 'male';
  this.height = 170;
  this.weight = 65;
};

var newHuman = new Human();

function Worker() {
  this.placeWork = 'office';
  this.salary = 1000;
  this.work = function() {
    alert('to work');
  };
};
Worker.prototype = newHuman;

function Student() {
  this.placeStudy = 'university';
  this.scholarship = 500;
  this.watchTV = function() {
    alert('to watch TV');
  };
};
Student.prototype = newHuman;

var newWorker1 = new Worker();
var newWorker2 = new Worker();
var newWorker3 = new Worker();

var newStudent1 = new Student();
var newStudent2 = new Student();
var newStudent3 = new Student();

console.log(newWorker1);
console.log(newWorker2);
console.log(newWorker3);

console.log(newStudent1);
console.log(newStudent2);
console.log(newStudent3);

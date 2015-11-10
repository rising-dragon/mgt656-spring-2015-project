'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var now = new Date();
  var contextData = {
    'title':'MGT 656',
    'tagline': 'You are doomed (just kidding)',
<<<<<<< HEAD
    'events': events.all
=======
    'events': []
>>>>>>> 70035b593407cefbf8e46b8db014e2fcc925f6ed
  };
  for(var i = 0; i < events.all.length; i++){
    var event = events.all[i];
    if(event.date > now){
      contextData.events.push(event);
    }
  }
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};

// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  messages: {}
};
app.init = function () {
  
};

app.send = function () {
  
};

app.fetch = function () {
  
};
app.clearMessages = function () {
  
};
app.renderMessage = function () {
  
};
app.renderRoom = function () {
  
};
app.handleUserNameClick = function () {
  
};
app.handleSubmit = function () {
  
};

var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  type: 'GET',
  success: function (data) {
    console.log('chatterbox: Message received');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to receive message', data);
  }
});

$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});

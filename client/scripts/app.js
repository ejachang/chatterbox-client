// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  messages: {}
};
app.init = function () {
 
};


app.send = function (message) {
  $.ajax({
    url: app.server,
    type: 'POST',
    data: message,
    contentType: 'application/json',
    datatype: 'JSON',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function () {
  $.ajax({
    url: app.server,
    type: 'GET',
    success: function (data) {
      console.log('chatterbox: Message received');
    },
    error: function (data) {
      console.error('chatterbox: Failed to receive message', data);
    }
  });
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


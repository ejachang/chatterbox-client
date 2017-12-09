// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  messages: []
};
app.init = function () {
 
};


app.send = function (message) {
  $.ajax({
    url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
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
    url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
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
  $('#chats').children().remove();
};
app.renderMessage = function (message) {
  $('#chats').append('<p>' + message.text + '</p>');

};
app.renderRoom = function () {
  
};
app.handleUserNameClick = function () {
  
};
app.handleSubmit = function () {
  
};
app.send();
app.fetch();

// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  messages: [],
  username: ''
};
app.init = function () {
  app.handleUsernameClick();
  app.handleSubmit();
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
app.renderRoom = function (room) {
  $('#roomSelect').append('<p>' + room.text + '</p>');
};
app.handleUsernameClick = function () {
  $('.username').on('click', function () {
    $('#main').append('.username');
  });
};
app.handleSubmit = function (message) {
  $('#submit').on('click', function () {
    app.send(message);
  });
};
app.send();
app.fetch();
app.init();





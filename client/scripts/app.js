// YOUR CODE HERE:
$('document').ready(function() {
  console.log('doc is readyyyy');
});
var app = {
  server: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  messages: {},
  storage: [],
  username: ''
};
app.init = function () {
  app.handleUsernameClick();
  app.handleSubmit();
  // $('.send-button').on('click', function () {
  //   app.send(message);
  // });
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
    data: {'order': '-createdAt'},
    success: function (data) {
      console.log('chatterbox: Message received');
      app.renderMessage(data);
      // console.log('fetch', data);
    },
    error: function (data) {
      console.error('chatterbox: Failed to receive message', data);
    }
  });

};
app.clearMessages = function () {
  $('#chats').children().remove();
};
app.renderMessage = function (data) {
  app.messages.username = [];
  for (var i = 0; i < data.results.length; i++) {
    if (data.results[i].username !== undefined) {
      $('#chats').append('<p>' + data.results[i].username + ' ' + data.results[i].text + ' ' + data.results[i].roomname + ' ' + data.results[i].createdAt + '</p>');  
      app.messages.username.push(data.results[i].username);
    }
  }
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
  app.messages.submittedMessage = [];
  $('.submit-button').on('click', function () {
    app.messages.submittedMessage.push(message);
    app.send(app.messages.submittedMessage);
  });
};

app.send(app.messages.ex);

app.fetch();
app.init();





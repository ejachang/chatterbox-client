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
  $('#sendButton').on('click', function () {
    console.log('message', message);
    app.send(message);
  });
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
      // app.renderMessage(data);
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
      app.renderMessage(data);
     
      
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
  for (var i = 0; i < data.results.length; i++) {
    // app.messages[data.results[i].username] = data.results[i].username;
    // console.log(data.results[i].username);
    $('#chats').append('<p>' + data.results[i].username + ' ' + data.results[i].text + ' ' + data.results[i].roomname + ' ' + data.results[i].createdAt + '</p>');  
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
  $('#submit').on('click', function () {
    app.send(message);
  });
};
app.send();
app.fetch();
app.init();





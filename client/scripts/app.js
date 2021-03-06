// YOUR CODE HERE:

var app = {
  server: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
  messages: {},
  friends: [],
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
    data: JSON.stringify(message),
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
    },
    error: function (data) {
      console.error('chatterbox: Failed to receive message', data);
    }
  });

};

app.sendFriends = function (message) {
  $.ajax({
    url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    datatype: 'JSON',
    success: function (data) {
      console.log('chatterbox: Friends list posted');
    },
    error: function (data) {
      console.error('chatterbox: Failed to post friends list', data);
    }
  });
};

app.clearMessages = function () {
  $('#chats').children().remove();
};
app.renderMessage = function (data) {
  for (var i = 0; i < data.results.length; i++) {
    if (data.results[i].username !== undefined) {
      $('#chats').append('<p>' + '<span class = "userstyle">' + data.results[i].username + '</span>' + ' ' + data.results[i].text + ' ' + data.results[i].roomname + ' ' + data.results[i].createdAt.slice(11, 19) + '</p>');  
      
    }
  }
};

app.renderRoom = function (room) {
  $('#roomSelect').append('<p>' + room.text + '</p>');
};
app.handleUsernameClick = function () {
  $('.userstyle').on('click', function () {
    app.friends.push($('.userstyle').val());
    console.log(app.friends);
  });
};
app.handleSubmit = function (message) {
};

app.send();
app.sendFriends();
app.fetch();
app.init();

$('document').ready(function() {
  $('.submitbutton').on('click', function () {
    var messageObj = {
      username: $('#user').val(),
      text: $('#message').val(),
      roomname: $('#room').val(),
    };
    messageObj = messageObj;
    app.send(messageObj);
    app.clearMessages();
    app.fetch();
  });

  $('.latest-messages').on('click', function () {
    app.clearMessages();
    app.fetch();
  });
});


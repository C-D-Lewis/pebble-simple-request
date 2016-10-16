function request(url, type, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);

  if(data === null) {
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send('');
  } else {
    var type = (typeof data).toLowerCase();
    if(type === 'object') {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    } else if(type === 'string') {
      xhr.setRequestHeader('Content-Type', 'text/plain');
      xhr.send(data);
    }
  }
}

function get(url, body, callback) {
  request(url, 'GET', body, callback);
}

function post(url, body, callback) {
  request(url, 'POST', body, callback);
}

exports.get = get;
exports.post = post;

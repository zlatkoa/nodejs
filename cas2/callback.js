const axios = require('axios');


var xhr = new XMLHttpRequest();
xhr.open("POST", "google.com", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: value
}));
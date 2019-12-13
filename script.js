
function kmAdded() {
          var numberkm = document.getElementById('numberkm');
          var text = numberkm.value;

          var transport = document.getElementById('transport');
          var transportation = transport.value;

          var item = document.createElement('li');
          var label = document.createTextNode(text + 'km by ' + transportation);
          item.appendChild(label);
          document.getElementById('myList').appendChild(item);
     }

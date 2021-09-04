// native
// let loadButton = document.getElementById('loadButton')
// loadButton.onclick = loadAJAX
// loadButton.onclick = function loadAJAX() {
// // for(let i = 0; i < 100; i++) {
//   let request;
//   if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
//   } else {
//     request = new ActiveXObject('Microsoft.XMLHTTP')
//   }
// // request.open('GET', 'data.txt')
// // request.open('GET', 'data.xml')
//   request.open('GET', 'data.json')
//   request.onreadystatechange = function () {
//     if ((request.readyState === 4) && (request.status === 200)) {
//
//       // txt
//       // console.log(request)
//       // document.writeln(request.responseText)
//       // let modify = document.getElementsByTagName('li')
//       // for (let i = 0; i < modify.length; i++) {
//       //   modify[i].innerHTML = request.responseText
//       // }
//       // console.log(request.responseXML.getElementsByTagName('name')[1].childNodes[0])
//
//       //xml
//       // console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue)
//       // let items = request.responseXML.getElementsByTagName('name')
//       // let output = '<ul>'
//       // for (let i = 0; i < items.length; i++) {
//       //   output += '<li>' +
//       //     items[i].firstChild.nodeValue +
//       //     '</li>'
//       // }
//       // output += '</ul>'
//       // document.getElementById('update').innerHTML = output;
//
//       //json
//       let items = JSON.parse(request.responseText)
//       // console.log(items)
//       let output = '<ul>'
//       for (let key in items) {
//         output += '<li>' + items[key].name + '</li>'
//       }
//       output += '</ul>'
//       document.getElementById('update').innerHTML = output;
//     }
//   }
//   request.send()
// // }
// }

//jQuery
$(function () {
  // $('.update:first').load('data.txt')
  // $('.update:even').load('data.txt')
  
  $('#search').keyup(function () {
    let searchField = $('#search').val()
    // console.log(searchField)
    let searchExp = new RegExp(searchField, 'i')
    $.getJSON('data.json', function (data) {
      // console.log(data)
      // let output = '<ul>'
      // $.each(data, function (key, val) {
      //   output += '<li>' + val.name + '</li>'
      // })
      // output += '</ul>'
      // // $('#update').html(output)
      // $('#update').append(output)
      let output = "<ul class='searchResult'>"
      $.each(data, function (key, val) {
        if ((val.name.search(searchExp) !== -1) || (val.bio.search(searchExp) !== -1)) {
          output += '<li>'
          output += '<h2>' + val.name + '</h2>'
          output += '<img src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '"/>'
          output += '<p>' + val.bio + '</p>'
          output += '</li>'
        }
      })
      output += '</ul>'
      $('#update').html(output)
    })
  })
})


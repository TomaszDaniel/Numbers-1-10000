 let a = 10000;
 let b = 1;
 let myNumber = Math.floor(Math.random() * (a - b + 1) + b);
 let lessDiv;
 let moreDiv;
 let myNumbers = [];

 function addToHTML(element) {
     if (myNumbers.indexOf(element.text) == -1) {
         if (element.id == "1") {
             lessDiv = document.createElement('div');
             $(lessDiv).text(element.text);
             $('body').append(lessDiv);
             $(lessDiv).addClass('one');
             $(lessDiv).css("animation-duration", `${Math.floor(Math.random() * 11)+5}s`);
             lessDiv.style.left = `${Math.floor(Math.random() * 96)}vw`
             b = myNumber
         } else if (element.id == "2") {
             moreDiv = document.createElement('div');
             $(moreDiv).text(element.text);
             $('body').append(moreDiv);
             $(moreDiv).addClass('two');
             $(moreDiv).css("animation-duration", `${Math.floor(Math.random() * 11)+5}s`);
             moreDiv.style.left = `${Math.floor(Math.random() * 96)}vw`
             a = myNumber
         } else {
             numberDiv = document.createElement('div')
             $('body').append(numberDiv);
             $(numberDiv).addClass('numberDiv');
             setTimeout(function () {
                 $(numberDiv).text(element.text);
             }, 6000);
             clearInterval(intervalId);
         }
     }
     myNumbers.push(myNumber)
     myNumber = Math.floor(Math.random() * (a - b + 1) + b)
 };

 const intervalId = setInterval(function () {
     $.ajax({
         type: 'POST',
         url: "",
         data: {
             myNumber
         }
     }).done(function (res) {
         addToHTML(res);
     }).fail(function () {
         console.log('failure');
     })
 }, 500);
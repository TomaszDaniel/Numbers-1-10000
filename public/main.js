       const main = $('.numberDiv');
       const less = $('.less');
       const more = $('.more');
       let a = 10000;
       let b = 1;
       let myNumber = Math.floor(Math.random() * (a - b + 1) + b);
       let lessDiv;
       let moreDiv;
       let myNumbers = [];


       function addToHTML(element) {
           console.log(myNumber);
           if (myNumbers.indexOf(element.text) == -1) {
               if (element.id == "1") {
                   lessDiv = document.createElement('div');
                   $(lessDiv).text(element.text);
                   less.append(lessDiv);
                   $(lessDiv).addClass('one');
                   b = myNumber
               } else if (element.id == "2") {
                   moreDiv = document.createElement('div');
                   $(moreDiv).text(element.text);
                   more.append(moreDiv);
                   $(moreDiv).addClass('two');
                   a = myNumber
               } else {
                   main.text(element.text);
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
       }, 100);
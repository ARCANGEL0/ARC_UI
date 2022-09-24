// set typing speed and wait times
var timeInit = 1000;     // initial wait before typing first line
var timeGap = 1000;      // wait time between each line
var timeChar = 40;       // time until next letter

var cursorChar = '&#9608;';

var originId = ['linha1', 'linha2', 'linha3', 'linha4'];
var originText = new Array();
for (var i = 0; i < originId.length; i++) {
  originText.push(document.getElementById(originId[i]).innerHTML);
}

var cursorLine = document.getElementById('cursor-line');

var currentTimeout;
var showCursor;

var typeWriter = function (index) {
  var loc = document.getElementById(originId[index]);
  var fullText = originText[index];
  var letterCount = 0;

  // this function spits out one letter per call, then calls the subsequent typeLetter()
  var typeLetter = function () {
    currentTimeout = setTimeout(function () {
      loc.className = 'visible';
      letterCount += 1;
      var showText = fullText.substring(0, letterCount);

      // stops the function from self-calling when all letters are typed
      if (letterCount === fullText.length) {
        loc.innerHTML = '' + showText;
      } else {
        loc.innerHTML = '' + showText + '<span class="typed-cursor">' + cursorChar + '</span>';
        typeLetter();
      }
    }, timeChar);
  };

  typeLetter();

  // show cursor on next line
  var totalTime = fullText.length * timeChar + timeChar;
  showCursor = setTimeout(function () {
    document.getElementById('cursor-line').className = 'visible';
  }, totalTime);
};

// calculated time delays
var delayTime = [timeInit];
var cumulativeDelayTime = [timeInit];
for (var i = 0; i < originId.length; i++) {
  var elapsedTimeLine = originText[i].length * timeChar + timeGap + timeChar * 2;
  delayTime.push(elapsedTimeLine);
  var sum = 0;
  for (var j = 0; j < delayTime.length; j++) {
    sum += delayTime[j];
  };
  cumulativeDelayTime.push(sum);
};

// calls setTimeout for each line
var typeLineTimeout = new Array();
for (var i = 0; i < originId.length; i++) {
  typeLineTimeout[i] = setTimeout((function (index) {
    return function () {
      cursorLine.className = 'hidden';
      typeWriter(index);
    }
  })(i), cumulativeDelayTime[i]);

};

// stops all timeouts
var skip = function () {
  clearTimeout(currentTimeout);
  clearTimeout(showCursor);
  for (var i = 0; i < typeLineTimeout.length; i++) {
    clearTimeout(typeLineTimeout[i]);
  };
};

// rewrite text with value stored on page load

// var rewriteText = function(index) {
//   var loc = document.getElementById(originId[index]);
//   loc.innerHTML = '' + originText[index];
//   loc.className = 'visible';
// };

var rewriteText = function (element, index, array) {
  var loc = document.getElementById(element);
  loc.innerHTML = '' + originText[index];
  loc.className = 'visible';
};


// trigger skip and rewrite on pressing enter or spacebar
window.onkeydown = function (key) {
  if (key.which === 13 || key.which === 32) {
    skip();
    originId.forEach(rewriteText);
    document.getElementById('cursor-line').className = 'visible';
  }
};




///





var originId2 = ['line1', 'line2', 'line3', 'line4'];
var originText2 = new Array();
for (var i = 0; i < originId2.length; i++) {
  originText2.push(document.getElementById(originId2[i]).innerHTML);
}

var cursorLine2 = document.getElementById('cursor-line2');

var currentTimeout2;
var showCursor2;

var typeWriter2 = function (index) {
  var loc2 = document.getElementById(originId2[index]);
  var fullText2 = originText2[index];
  var letterCount2 = 0;

  // this function spits out one letter per call, then calls the subsequent typeletter2()
  var typeletter2 = function () {
    currentTimeout2 = setTimeout(function () {
      loc2.className = 'visible';
      letterCount2 += 1;
      var showText = fullText2.substring(0, letterCount2);

      // stops the function from self-calling when all letters are typed
      if (letterCount2 === fullText2.length) {
        loc2.innerHTML = '' + showText;
      } else {
        loc2.innerHTML = '' + showText + '<span class="typed-cursor">' + cursorChar + '</span>';
        typeletter2();
      }
    }, timeChar);
  };

  typeletter2();

  // show cursor on next line
  var totalTime2 = fullText2.length * timeChar + timeChar;
  showCursor2 = setTimeout(function () {
    document.getElementById('cursor-line2').className = 'visible';
  }, totalTime2);
};

// calculated time delays
var delayTime2 = [timeInit];
var cumulativeDelayTime2 = [timeInit];
for (var i = 0; i < originId2.length; i++) {
  var elapsed2 = originText2[i].length * timeChar + timeGap + timeChar * 2;
  delayTime2.push(elapsed2);
  var sum2 = 0;
  for (var j = 0; j < delayTime2.length; j++) {
    sum2 += delayTime2[j];
  };
  cumulativeDelayTime2.push(sum2);
};

// calls setTimeout for each line
var typeLineTimeout2 = new Array();
for (var i = 0; i < originId2.length; i++) {
  typeLineTimeout2[i] = setTimeout((function (index) {
    return function () {
      cursorLine2.className = 'hidden';
      typeWriter2(index);
    }
  })(i), cumulativeDelayTime2[i]);

};

// stops all timeouts
var skip2 = function () {
  clearTimeout(currentTimeout2);
  clearTimeout(showCursor2);
  for (var i = 0; i < typeLineTimeout2.length; i++) {
    clearTimeout(typeLineTimeout2[i]);
  };
};

// rewrite text with value stored on page load

// var rewriteText2 = function(index) {
//   var loc2 = document.getElementById(originId2[index]);
//   loc2.innerHTML = '' + originText2[index];
//   loc2.className = 'visible';
// };

var rewriteText2 = function (element, index, array) {
  var loc2 = document.getElementById(element);
  loc2.innerHTML = '' + originText2[index];
  loc2.className = 'visible';
};


// trigger skip2 and rewrite on pressing enter or spacebar
window.onkeydown = function (key) {
  if (key.which === 13 || key.which === 32) {
    skip2();
    originId2.forEach(rewriteText2);
    document.getElementById('cursor-line2').className = 'visible';
  }
};



////




var originId3 = ['lina1', 'lina2', 'lina3', 'lina4'];
var originText3 = new Array();
for (var i = 0; i < originId3.length; i++) {
  originText3.push(document.getElementById(originId3[i]).innerHTML);
}

var cursorLine3 = document.getElementById('cursor-line3');

var currentTimeout3;
var showCursor3;

var typeWriter3 = function (index) {
  var loc3 = document.getElementById(originId3[index]);
  var fullText3 = originText3[index];
  var letterCount3 = 0;

  // this function spits out one letter per call, then calls the subsequent typeLetter3()
  var typeLetter3 = function () {
    currentTimeout3 = setTimeout(function () {
      loc3.className = 'visible';
      letterCount3 += 1;
      var showText = fullText3.substring(0, letterCount3);

      // stops the function from self-calling when all letters are typed
      if (letterCount3 === fullText3.length) {
        loc3.innerHTML = '' + showText;
      } else {
        loc3.innerHTML = '' + showText + '<span class="typed-cursor">' + cursorChar + '</span>';
        typeLetter3();
      }
    }, timeChar);
  };

  typeLetter3();

  // show cursor on next line
  var totalTime = fullText3.length * timeChar + timeChar;
  showCursor3 = setTimeout(function () {
    document.getElementById('cursor-line3').className = 'visible';
  }, totalTime);
};

// calculated time delays
var delayTime3 = [timeInit];
var cumulativeDelayTime3 = [timeInit];
for (var i = 0; i < originId3.length; i++) {
  var elapsedTimeLine3 = originText3[i].length * timeChar + timeGap + timeChar * 2;
  delayTime3.push(elapsedTimeLine3);
  var sum3 = 0;
  for (var j = 0; j < delayTime3.length; j++) {
    sum3 += delayTime3[j];
  };
  cumulativeDelayTime3.push(sum3);
};

// calls setTimeout for each line
var typeLineTimeout3 = new Array();
for (var i = 0; i < originId3.length; i++) {
  typeLineTimeout3[i] = setTimeout((function (index) {
    return function () {
      cursorLine3.className = 'hidden';
      typeWriter3(index);
    }
  })(i), cumulativeDelayTime3[i]);

};

// stops all timeouts
var skip3 = function () {
  clearTimeout(currentTimeout3);
  clearTimeout(showCursor3);
  for (var i = 0; i < typeLineTimeout3.length; i++) {
    clearTimeout(typeLineTimeout3[i]);
  };
};

// rewrite text with value stored on page load

// var rewriteText3 = function(index) {
//   var loc3 = document.getElementById(originId3[index]);
//   loc3.innerHTML = '' + originText3[index];
//   loc3.className = 'visible';
// };

var rewriteText3 = function (element, index, array) {
  var loc3 = document.getElementById(element);
  loc3.innerHTML = '' + originText3[index];
  loc3.className = 'visible';
};


// trigger skip3 and rewrite on pressing enter or spacebar
window.onkeydown = function (key) {
  if (key.which === 13 || key.which === 32) {
    skip3();
    originId3.forEach(rewriteText3);
    document.getElementById('cursor-line3').className = 'visible';
  }
};




///




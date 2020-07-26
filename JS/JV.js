function calc() {
    var n = document.getElementById('n').value;
    var a = -1;
    var b = 1;
    var result = '<ul>';
    var c = a + b;
    while (c < n) {
      a = b;
      b = c;
      result = result + '<li class="fib-class">' + c + '</li>';
      c = a + b;
    }
    result = result + '</ul>';
    document.getElementById('fibb').innerHTML = result;
  }
  
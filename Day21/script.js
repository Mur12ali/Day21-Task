window.onload = function() {
    var a = document.createElement('div')
    a.setAttribute('id', 'div')
    a.setAttribute('onload', 'fun()')
    document.body.appendChild(a)
    var i = 10
    var img = new Image();
    var x = (f) => {
        setTimeout(() => {
            if (i >= 1) {
                a.classList.add('container','text-center', 'text-light','fw-bold', 'fs-1')
                a.innerText = i
            }
            if (i == 0) {
                a.classList.add('container','text-center', 'text-secondary','fw-bold','fs-1')
                a.innerText = "Happy Independence Day !"
                img.onload = function(){
                  div.appendChild(img);
                };
                img.src= "https://www.newdelhiairport.in/media/1201/independence-2019-small.jpg";
                return
            }
            i--
            f(x)

        }, 1000)

    }
    var b = (f) => {
        f(b)
    }
     x(b)
  } 
window.onload = function() {
    // GLOBAL VAR
    doc = document

    // FUNCTIONS DECLARATION
    function menu() {
        var menu = doc.getElementsByClassName('floater-menu')[0]
        var lines = doc.getElementsByClassName('line-menu')
        var close = doc.createElement('span')
        var wrapper = doc.getElementById('lines')
        var content = doc.getElementById('content-text');
        var item = doc.getElementsByClassName('item')
        close.textContent = 'x'
        wrapper.onclick = function() {
            content.style.display = 'block';
            close.classList.add('close-menu')
            menu.classList.add('expanded-menu')
            menu.appendChild(close)
            close.classList.add('show-close-btn')
            wrapper.setAttribute('style', 'display:none')
            setTimeout(function() {
                try{
                    for(var i = 0; i < item.length; i++) {
                        item[i].setAttribute('style', 'transform: translateY(-45%); transition-duration: .5s;')
                    }
                } catch(e) {
                    console.warn(e);
                }
            }, 700)
        }
        close.onclick = function() {
            try{
                for(var i = 0; i < item.length; i++) {
                    item[i].removeAttribute('style')
                }
            } catch(e) {
                console.warn(e);
            }
            setTimeout(function() {
                if(menu.classList.contains('expanded-menu')) {
                    menu.classList.remove('expanded-menu')
                }
                content.style.display = 'none';
                menu.removeChild(menu.children[2])
                wrapper.removeAttribute('style','display:none')
            }, 600)
        }
    }

    menu()
}
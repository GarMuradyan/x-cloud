function renderButton(className,text,classList,data) {
    var buttonBox = el('button',className)

    buttonBox.textContent = text
    buttonBox.classList.add(classList)

    buttonBox.onclick = function () {
        buttonClick(this,data)
    }

    return buttonBox
}

function buttonClick(elem,data) {
    if (elem.classList.contains('login-button')) {
        loginButtonClick(elem)

    }

    if (elem.classList.contains('play')) {
        console.log('play',data);
        playButtonClick(data)
    }
}

function playButtonClick(data) {
    cardInfo = data
    if (data.episodes) {
        
    }else {
        document.querySelector('.movies-card-info-page').classList.add('popup-display')
        document.getElementById('root').append(renderMoviesVideoOnPlaying())
        controls.select = controls.moviesVideoLoad
        document.getElementById('root').append(renderMoviesVideo(data))
    }
}

function loginButtonClick(elem) {
    if (document.querySelector('.login-load')) {
        document.querySelector('.login-load').remove()
    }
    var loginLoad = el('div','login-load')
    
    loginLoad.append(renderLoading())

    elem.append(loginLoad)

    removeLoginPageInputsActive()
    
    if (document.querySelector('.keyboard-box')) {
        document.querySelector('.keyboard-box').remove()
    }
    
    if (controls.privius === controls.login) {
        controls.select = controls.privius
        controls.select.addActive()
    }

    var elems = document.getElementsByClassName('content-inputs-items-box')

    if (elems[0].value === "") {
        if (elems[1].value === "") {
            if (elems[2].value === '') {
                localStorage.setItem('page','menu')
                controls.select = controls.menu
                setTimeout(() => {
                    document.getElementById('root').innerHTML = ''
                    document.getElementById('root').append(renderMenu())
                    controls.select.index = 0
                    controls.select.addActive()
                }, 4000);

                return

            }
        }
    }
    loginError()
}

function loginError() {
    if (document.querySelector('.error')) {
        document.querySelector('.error').remove()
    }
    var error = el('div','error')
    error.textContent = 'invalid login or password'

    document.querySelector('.inputs-parent-box').append(error) 

    setTimeout(() => {
        if (document.querySelector('.login-load')) {
            document.querySelector('.login-load').remove()
        }
        
    }, 1500);

    setTimeout(() => {
        if (document.querySelector('.error')) {
            document.querySelector('.error').remove()
        }
    }, 4000);
    
}
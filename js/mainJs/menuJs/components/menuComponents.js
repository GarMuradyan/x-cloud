function renderHeaderComponents(name,index) {
    var headerComponentsBox = el('div','header-components-box')
    
    headerComponentsBox.textContent = name
    headerComponentsBox.setAttribute('index',index)

    headerComponentsBox.onclick = clickHeaderComponents
        

    return headerComponentsBox
}

function renderListsCardBox(data,array) {
    var contentRowsListsCardBox = el('div','content-rows-lists-card-box')
    var cardImageBox = el('div','card-image-box')
    var cardNameBox = el('div','card-name-box')

    if (array.locked) {
        contentRowsListsCardBox.append(renderMoviesPageLockBox())
    }

    cardImageBox.style.backgroundImage = 'url(' + data.poster + ')'
    cardNameBox.textContent = data.name

    contentRowsListsCardBox.onclick = function () {
        clickListsCard(data,array)
    }

    contentRowsListsCardBox.append(cardImageBox)
    contentRowsListsCardBox.append(cardNameBox)

    return contentRowsListsCardBox

}

function renderMenuesSearchBox() {
    var searchPageContentSearchBox = el('div','search-page-content-search-box')
    var searchPageContentSearchInput = el('input','search-page-content-search-input')
    var searchInputIcon = el('span','material-symbols-outlined')

    searchInputIcon.textContent = 'search'

    searchPageContentSearchBox.append(searchInputIcon)
    searchPageContentSearchBox.append(searchPageContentSearchInput)

    return searchPageContentSearchBox
}

function clickHeaderComponents() {
    controls.select.removeClass()
    controls.select = controls.moviesLists
    controls.select.rowsIndex = this.getAttribute('index')
    controls.select.index = document.getElementsByClassName('content-rows-lists-box')[controls.select.rowsIndex].getAttribute('position')
    controls.select.addActive()
    controls.select.listTransY()
    controls.select.listTransX()
}

function clickListsCard(data,array) {
    if (array.locked) {
        console.log('locked-true');
        controls.privius = controls.select
        document.getElementById('root').innerHTML = ''
        document.getElementById('root').append(renderMoviesCardInfo(data))
        controls.select = controls.playBuuton
        controls.select.addActive()
    }else {
        console.log('locked-false');
        controls.privius = controls.select
        document.getElementById('root').innerHTML = ''
        document.getElementById('root').append(renderMoviesCardInfo(data))
        controls.select = controls.playBuuton
        controls.select.addActive()
    }
}

function renderMoviesPageLockBox() {
    var moviesPageLockBox = el('div','movies-page-lock-box')

    moviesPageLockBox.append(renderLockIcon())

    return moviesPageLockBox
}
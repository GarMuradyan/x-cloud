function renderLoadingPage() {
    var loadingPageBox = el('div','loading-page-box')
    var loadingPageLogoBox = el('div','loading-page-logo-box')
    var loadingPageContentBox = el('div','loading-page-content-box')
    var loadingPageLoadingBox = el('div','loading-page-loading-box')


    loadingPageLogoBox.append(renderLogo())
    loadingPageLoadingBox.append(renderLoading())

    loadingPageContentBox.append(loadingPageLogoBox)
    loadingPageContentBox.append(loadingPageLoadingBox)

    loadingPageBox.append(loadingPageContentBox)

    setTimeout(() => {
        document.getElementById('root').innerHTML = ''
        document.getElementById('root').append(renderLogin())
        controls.select = controls.login
        controls.select.index = 0
        controls.select.addActive()
    }, 3500);


    return loadingPageBox
}
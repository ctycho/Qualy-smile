const setColorForSafari = (color: string) => {
    let nodes = document.querySelectorAll('meta[name="theme-color"]')
    nodes.forEach(item => {
        item.remove()
    })
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.content = color
    document.getElementsByTagName('head')[0]?.appendChild(meta)
}

export default setColorForSafari
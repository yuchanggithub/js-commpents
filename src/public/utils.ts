export function strToDom(htmlStr: string) {
    let div = document.createElement('div')
    div.innerHTML = htmlStr;
    return div.firstChild;
}
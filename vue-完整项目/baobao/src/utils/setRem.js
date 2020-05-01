function setHtmlFontSize() {
    // 一加载页面计算字体大小
    const clientWidth = window.innerWidth;
    const htmlDom = document.documentElement;
    htmlDom.style.fontSize = clientWidth / 20 + "px";
}
setHtmlFontSize();
window.onresize = setHtmlFontSize;
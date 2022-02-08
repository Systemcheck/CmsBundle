$('#saveskincss').on('click', function() {
    let css = $('style[id^="less:"]').text()
    console.log(css)
})

let imgPack = document.querySelector('.image-package');
let html = '<a target="_blank" class="check-original-image" data-pop-btn="1" href="./images/business-class-seat.jpg" >查看原图</a><div data-pop-layer="1" style="position: fixed; left: 0px; right: 0px; top: 0px; bottom: 0px; height: 100%; width: 100%; z-index: 9999; background: rgb(255, 255, 255) none repeat scroll 0% 0%; opacity: 0.8;"></div>';
let img = document.querySelector('.image-view img');

imgPack.onclick = function () {
    html += '<img data-original-src=' + img.getAttribute("src") + ' data-original-width=' + img.parentElement.getAttribute("data-width") + ' data-original-height=' + img.parentElement.getAttribute("data-height") + '   style="cursor: zoom-out; position: fixed; width: ' + img.getAttribute("data-original-width") + 'px; height: ' + img.getAttribute("data-original-height") + 'px; left: 50%; top: 0px;margin-left:-' + img.getAttribute("data-original-width") / 2 + 'px; z-index: 10000;"  class="" src=' + img.getAttribute("data-original-src") + ' data-pop-img="1">';

    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imageDiv");
    imgDiv.setAttribute("onclick", "closeImage(this)");
    imgDiv.innerHTML = html;
    document.getElementsByTagName("body")[0].appendChild(imgDiv);
    //   document.getElementsByTagName("body")[0].style = 'overflow:hidden;';
}

function closeImage(ths) {
    document.getElementsByTagName("body")[0].removeChild(ths);
}
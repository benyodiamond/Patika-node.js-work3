//Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
//module.exports yöntemi ile fonksiyonları oluştururken export ediniz.


function circleArea(r){
    const area=Math.PI*(r*r)
    console.log(area)
}

function circleCircumference(r){
    const circumference =2*Math.PI*r
    console.log(circumference)
}

module.exports = { circleArea, circleCircumference }
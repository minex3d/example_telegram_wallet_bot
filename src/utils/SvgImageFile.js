'use strict';
const svgToImg = require("svg-to-img");


const svgTemplate = (width, height) => {
    const svg = 
    '<svg' +
        ' xmlns:dc="http://purl.org/dc/elements/1.1/"' +
        ' xmlns:cc="http://creativecommons.org/ns#"' +
        ' xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' +
        ' xmlns:svg="http://www.w3.org/2000/svg"' +
        ' xmlns="http://www.w3.org/2000/svg"' +
        ' width=\"' + `${width}` + '\"' +
        ' height=\"' + `${height}` + '\"' +
        ' viewBox="0 0 ' + `${width}` + `${height}` + '\"' + 
        ' id="svg2"' +
        ' version="1.1" >' +
        '   <defs' +
        ' id="defs4"/>' +
        ' <metadata' +
        ' id="metadata7">' +
        ' <rdf:RDF>' +
        ' <cc:Work' +
        ' rdf:about="">' +
        ' <dc:format>image/svg+xml</dc:format >' +
        ' <dc:type' +
        ' rdf:resource="http://purl.org/dc/dcmitype/StillImage" />' +
        '  <dc:title></dc:title >' +
        '  </cc:Work >' +
        '  </rdf:RDF >' +
        '  </metadata>' +
        ' <g' +
        '  id="layer1"' +
        '  transform="translate(0,-452.36216)">'
        ;
    return svg;
}

const buildSvgFile = (yCoordinate, tokenName, tokenValuePercision, tokenValeDecimal, tokenSymbol) => {

    let rowValue = ' <text'+
    ' style="font-style:normal;font-weight:normal;font-size:20px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:transparent;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"'+
    ' x = \"36\"'+
    ' y = \"'+ `${yCoordinate}`+'\"'+
    ' id = \"'+`${tokenSymbol}` +'\O1" >'+
    ' <tspan'+
        ' id=\"'+`${tokenSymbol}` +'\O2"'+
        ' x=\"36\"'+
        ' y=\"'+ `${yCoordinate}` +'\"'+
        '  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:\\\'Droid Sans\\\';-inkscape-font-specification:\\\'Droid Sans\\\'">' + `${tokenName}` +'</tspan></text>'+
            '  <text'+
                 ' id=\"'+`${tokenSymbol}` +'\O3"'+
                 ' y = \"'+`${yCoordinate}`+'\"'+
                ' x=\"436\"'+
                ' style="font-style:normal;font-weight:normal;font-size:20px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:transparent;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"'+
                '><tspan'+
                '  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:\\\'Droid Sans\\\';-inkscape-font-specification:\\\'Droid Sans\\\'"'+
                ' y = \"'+`${yCoordinate}`+'\"'+
                ' x=\"436\"'+
                ' text-anchor=\"end\"'+
                ' id=\"' + `${tokenSymbol}` + '\O4"> ' + `${tokenValuePercision}` +'</tspan></text>'+
                '  <text' +
                ' id=\"' + `${tokenSymbol}` + '\O5"' +
                ' y = \"' + `${yCoordinate}` + '\"' +
                ' x=\"437\"' +
                ' style="font-style:normal;font-weight:normal;font-size:20px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:transparent;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"' +
                '><tspan' +
                '  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:\\\'Droid Sans\\\';-inkscape-font-specification:\\\'Droid Sans\\\'"' +
                ' y = \"' + `${yCoordinate}` + '\"' +
                ' x=\"437\"' +
                ' text-anchor=\"start\"' +
                ' id=\"' + `${tokenSymbol}` + '\O6"> ' + `${tokenValeDecimal}` + '</tspan></text>' +
            ' <text'+
                ' style="font-style:normal;font-weight:normal;font-size:20px;line-height:125%;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:transparent;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"'+
                ' x=\"600\"'+
                 ' y = \"'+`${yCoordinate}`+'\"'+
                 ' id=\"'+`${tokenSymbol}` +'\O7"><tspan'+
                     ' id=\"'+`${tokenSymbol}` +'\O8"'+
                    ' x=\"600\"'+
                     ' y = \"'+`${yCoordinate}`+'\"'+
                    '  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:\\\'Droid Sans\\\';-inkscape-font-specification:\\\'Droid Sans\\\'">'+`${tokenSymbol}`+'</tspan></text>';
    return rowValue;
};

const convertSvg2Png = async(svgFile) => {
    try{
        return await svgToImg.from(svgFile).toPng();
    }
    catch (err) {
        console.log(err);
    }
};



module.exports = {
    svgTemplate,
    buildSvgFile,
    convertSvg2Png,
};
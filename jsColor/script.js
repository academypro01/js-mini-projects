const myDialog = document.getElementById("myDialog");
let selectedPolygon;

function changeColor(x) {
    myDialog.show();
    selectedPolygon = x;
}

function closeMyDialog() {
    myDialog.close();
}

function addColor() {
    let color = document.getElementById("colorInput").value;
    selectedPolygon.style.fill = color;
    console.log(selectedPolygon.style.fill);
    myDialog.close();
}

function resetColor() {
    let polygons = document.querySelectorAll('polygon');
    polygons.forEach((element) => {
        element.style.fill = 'transparent';
    });
}

// jscolor.js
var colorPicker = new JSColor(
    '#colorInput',
    {
        format: 'hex'
    }
);

colorPicker.option('previewSize', 50);
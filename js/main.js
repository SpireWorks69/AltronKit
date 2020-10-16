const area = new Canvas(document.getElementById('area'));

let vector = "";
let value = "";

function clearArea() {
  area.clear();
  vector = "";
  value = "";
  document.getElementById('input').value = "";
}

function remember() {
  if (!isResultExists && vector == "") {
    if (!is_mouse_down) {
      value = document.getElementById('input').value;
      if(value != "") {
          vector = area.calculate(true);
          isResultExists = true;
      } else {
        alert("Введите значение");
      }
    } else {
      alert("Закончите рисовать");
    }
  } else {
    alert("Очитите лист");
  }
}

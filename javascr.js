//использовать отладку, функцию console.log//
console.log("Hello World")


//создать массив объектов товаров вида//
product = [
    { name: "apple", count: 5, price: 70 },
    { name: "orange", count: 10, price: 90 }
]

//с помощью цикла посчитать общую стоимость товаров - вывести результат в консоль//
summ = 0
product.forEach(function (entry) {
    summ = summ + (entry.price)
});
console.log("Сумма продуктов: ", summ)

//создайте новый объект, содержащий исходный массив данных и результат подсчета//
newObj = {
    bill: product,
    result: summ
}

//выведите результат в консоль при помощи набора функций console.log(JSON.stringify(object))//
console.log(JSON.stringify(newObj))

//выведите текущую дату/время при помощи объекта Date//
Data = new Date();
Hour = Data.getHours();
Minutes = Data.getMinutes();
Seconds = Data.getSeconds();
console.log("Текущее время: " + Hour + ":" + Minutes + ":" + Seconds);







//Создать на html-странице произвольный список UL в виде меню и абзац <P> с текстом//
//Написать скрипт, который при нажатии на кнопку (изображение или другой элемент) копировал текст всех пунктов меню в конец абзаца.//

const btn = document.querySelector("#mybutton")
const items = document.querySelectorAll("#copy")
const par = document.querySelector("#p")

function adding() {
    let clearArr = [];

    items.forEach(function (item) {
        clearArr.push(item.innerText)
    });

    var str = clearArr.join(' ')
    p.append(str + ' ')
}
btn.onclick = adding;

//Написать скрипт, который будет изменять определенный стиль всех элементов одного класса//
const btn2 = document.querySelector("#mybutton2")
function izm_class() {
    const class_li = document.getElementsByClassName("izm")[0].style = " border: 2px solid #f80000; color: #f80000;;"
}
btn2.onclick = izm_class;

// Написать скрипт, который выполняет поиск строки в пунктах меню (реализовать в виде поля ввода input type="text" с подсветкой найденных результатов)//
var input, search, pr, result, result_arr, locale_HTML, result_store;
locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)
function FindOnPage(name, status) {
    input = document.getElementById(name).value; //получаем значение из поля в html
    if (input.length < 3 && status == true) {
        alert('Для поиска вы должны ввести три или более символов');
        function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
    }
    if (input.length >= 3) {
        function FindOnPageGo() {
            search = '/' + input + '/g';  //делаем из строки регуярное выражение
            pr = document.body.innerHTML;   // сохраняем в переменную весь body
            result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
            result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

            for (var i = 0; i < result.length; i++) {
                result_arr[i] = result[i].replace(eval(search), '<span style="background-color:rgb(146, 20, 157);">' + input + '</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
            }
            for (var i = 0; i < result.length; i++) {
                pr = pr.replace(result[i], result_arr[i])  //заменяем в переменной с html текст на новый из новогом массива
            }
            document.body.innerHTML = pr;  //заменяем html код
        }
    }
    function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
    if (status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
    if (!status) { FindOnPageBack(); } //Снимаем выделение
}
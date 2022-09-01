"use strict";
// Comment
// alert('Hallo World!');

/* Comment */
// let a = 'Nikolai', b = 'Nikitenok';
// alert(a, b);
// alert(b);

// let str1 = 'hello';
// let str2 = ' world';
// alert(str1.length + str2);

// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt  = `aaa ${str1} bbb ${str2} ccc`;
// alert(txt) ;

// let str = `a
// b
// c`;
// alert(str);

// alert('abc'*'cde');
// alert(1/0);
// console.log(-1/0);

// const PI = 3.14;
// let r = 10;
// console.log(2 * PI * r);

// let a = '5' * '1' + '2' * '1';
// alert(a);

// let a = '2', b = '3';
// alert(a + b);

// let a = '2', b = '3';
// console.log(Number(a) + Number(b));

// console.log( '2' + Number('3') );

// let a = '5.5px', b = '6.25px';
// console.log(parseFloat(a) + parseFloat(b) + 'px');

// let num1 = 123, num2 = 345;
// let sum = (String(num1) + String(num2));
// console.log(sum.length);

// let test = (3 * 'abc');
// alert(test);

// костыльный метод переворота строки
// let str = "abcde";
// let new_str = str[4] + str[3] + str[2] + str[1] + str[0];
// alert(new_str);

// Вывод символа с номером переменной
// let str = "asdfgh";
// let num = 3;
// alert(str[num]);

// Вывод последнего символа
// let str = 'asdfghjlk';
// console.log(str[str.length - 1]);

// let a = 'asdfghjklkjhgfxcvbnm';
// alert(a[a.length - 2]);

// let b = '12345';
// alert(Number(b[0]) + Number(b[1]) + Number(b[2]) + Number(b[3]) + Number(b[4]));

// let a = 12345;
// let str = String(a);
// console.log(Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]));

// let a = 12345;
// let str = String(a);
// console.log(str[0] * str[1] * str[2] * str[3] * str[4]);

// let a = 12345;
// let str = String(a);
// console.log(Number(str[4] + str[3] + str[2] + str[1] + str[0]));
// alert(Number(str[4] + str[3] + str[2] + str[1] + str[0]));

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// let num = 10;
// num++;
// num++;
// num--;
// alert(num);

// let num1 = 0;
// let num2 = ++num1; // в переменную num2 запишется 1 
// alert(num2); // выведет 1
// alert(num1);

// let num1 = 3;
// let num2 = num1++;
// alert(num1); //4
// alert(num2); //3

// let num1 = 3;
// let num2 = --num1;
// alert(num1); //2
// alert(num2); //2

// let a = (0.1 * 0.2);
// console.log(+a.toFixed(2))

// alert(0.3 - 0.1);

// let a = prompt('Your age? ');
// alert('Your age: ' + a);

// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));

// alert(num1 + num2); // сложит числа как строки

// let a = Number(prompt('Сторона квадрата: '));
// alert('Площадь квадрата: ' + a * a);

// let a = Number(prompt('Сторона прямоугольника: '));
// let b = Number(prompt('Вторая сторона прямоугольника: '));
// alert("Площадь прямоугольника: " + a * b);

// document.write(123);

// document.write('text');

// document.write('<b>text</b>');

// let str = 'text';
// document.write(str);

// let str = 'text';
// document.write('<b>' + str + '</b>'); 

// document.write('text <br> text');

// document.write('text1<br>');
// document.write('text2<br>');
// document.write('text3<br>');

// document.write('text');
// document.write('<br>');
// document.write('text');

// document.write('<i>Textik</i>')

// document.write('1<br>')
// document.write('2<br>')
// document.write('3<br>')
// document.write('4<br>')
// document.write('5<br>')

// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ', num1 + num2);

// let a = 1;
// let b = 2;
// console.log(a + b);

// let num = '123';
// let sum = +num[0] + +num[1] + +num[2];
// console.log(sum);

// let num = '123';
// console.log(num[0]);

// let a = 0;
// console.log(++a);

// let num = '123';
// console.log(num.length);

// let a = 24 * 60 * 60;
// console.log(a);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);

// console.log(s);

// let aaa = 1;
// let bbb = 2;
// let ccc = 3;

// console.log(aaa + bbb + ccc);

// console.log(24*60*365);

// console.log(1024*1024);

let r = +prompt('Введи радиус: ');
let PI = 3.14;
alert('Площадь круга = ' + 2 * PI * r);


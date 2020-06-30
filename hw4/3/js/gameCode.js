console.log(event);
var event = 1, ok, end = false;
console.log(event);
do {
    switch (event) {
        case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            do { //Выводим первый вопрос
                ok = false;
                event = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                } else {
                    ok = isAnswer(works.a0, event, works.a5);
                }
                console.log(ok);
                if (ok == false) {
                    end = true;
                    ok = true;
                    event = -1;
                }
            } while (!ok);
            event = 2;
            break;
        case 2: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
            do {
                ok = false;
                event = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                } else {
                    ok = isAnswer(works.b0, event, works.b5)
                }
                if (ok == false) {
                    end = true;
                    ok = true;
                    event = -1;
                }
            } while (!ok);
            event = 3;
            break;
        case 3: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
            do {
                ok = false;
                event = +prompt(works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                } else {
                    ok = isAnswer(works.c0, event, works.c5);
                }
                if (ok == false) {
                    end = true;
                    ok = true;
                    event = -1;
                }
            } while (!ok);
            event = 4;
            break;
        case 4: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
            do {
                ok = false;
                event = +prompt(works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - Выход из игры');
                if (event == -1) {
                    break;
                } else {
                    ok = isAnswer(works.d0, event, works.d5);
                }
                if (ok == false) {
                    end = true;
                    ok = true;
                    event = -1;
                }
            } while (!ok);
            event = -1;
        break;
        case -1: // Первое действие
            end == true;
            break;
        default:
            alert('Ошибка');
    }
}
    while (end == false);
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event, b) {
    if (Number.isNaN(event) || !Number.isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event != q) {
        alert('Ответ не правильный. Правильный ответ - ' + q);
        return false;
    } else if (event == q) {
        alert('Ответ правильный. В банке - ' + b);
        return true;
    }

}
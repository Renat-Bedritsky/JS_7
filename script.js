// Калькулятор

let Calc = function() {
    this.get = function() {
        this.stream = confirm('Включить калькулятор?')

        if(this.stream == true) {

            this.a = prompt('Введите первое число');
            while(!this.a.trim() || !Number.isInteger(Number(this.a)) || Number(this.a) < 1) {
                this.a = prompt('Корректно введите первое число');
            }
            
            this.b = prompt('Введите второе число');
            while(!this.b.trim() || !Number.isInteger(Number(this.b)) || Number(this.b) < 1) {
                this.b = prompt('Корректно введите второе число');
            }
            
            this.oper = prompt('Введите операцию ( + , - , * , / )');
            while(`${this.oper}` != `-` && `${this.oper}` != '+' && `${this.oper}` != '*' && `${this.oper}` != '/') {
                this.oper = prompt('Корректно введите операцию ( + , - , * , / )');
            }
            this.operation();
        }
        else {
            alert('Калькулятор выключен.')
        }
    };

    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = Number(this.a) + Number(this.b);
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }

        this.show();
    };

    this.show = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    };
};

let calc = new Calc();
calc.get();

// Вроде работает...


// Расчёт затрат на электроэнергию

let Lamp = function() {
    this.get = function() {
        this.stream = confirm('Включить лампочку?')

        if(this.stream == true) {

            this.a = prompt('Введите мощность лампочки (Вт)');
            while(!this.a.trim() || !Number.isInteger(Number(this.a)) || Number(this.a) < 1) {
                this.a = prompt('Корректно введите мощность лампочки (Вт)');
            }

            this.b = prompt('Введите стоимость электроэнергии (X копеек за кВт)');
            while(!this.b.trim() || !Number.isInteger(Number(this.b)) || Number(this.b) < 1) {
                this.b = prompt('Корректно введите стомость электроэнергии (X копеек за кВт)');
            }

            this.c = prompt('Введите время действия лампочки (в часах)');
            while(!this.c.trim() || !Number.isInteger(Number(this.c)) || Number(this.c) < 1) {
                this.c = prompt('Корректно введите время действия лампочки (в часах)');
            }
            this.operation();

        }

        else {
            ('Лампочка не включена')
        }
    }

    this.operation = function() {
        if(this.a * this.c >= 1000) {          // расчёт в киловаттах
            if(this.a * this.b * this.c >= 100000) {
                this.result = this.a * this.b * this.c / 100000 + ' рублей за ' + this.a * this.c / 1000 + ' кВт';          // расчёт в рублях
            }
            else {
                this.result = this.a * this.b * this.c / 1000 + ' копеек за ' + this.a * this.c / 1000 + ' кВт';          // расчёт в копейках
            }
        }
        else {                                 // расчёт в ваттах
            if(this.a * this.b * this.c >= 100000) {
                this.result = this.a * this.b * this.c / 100000 + ' рублей за ' + this.a * this.c + ' Вт';          // расчёт в рублях
            }
            else {
                this.result = this.a * this.b * this.c / 1000 + ' копеек за ' + this.a * this.c + ' Вт';          // расчёт в копейках
            }
        }

        this.show();
    }

    this.show = function() {
        alert('Мощность: ' + this.a + ' Вт; ' +
              ' Цена: ' + this.b + ' копеек за кВт; ' +
              ' Время: ' + this.c + ' часов; ' +
              ' Итог: ' + this.result);
    }
}

let lamp = new Lamp();
lamp.get();

// Это вроде тоже работает...
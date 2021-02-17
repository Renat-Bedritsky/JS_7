// Калькулятор. Показ результата расчёта

let Calc = function() {
    this.get = function() {
        this.stream = confirm('Включить калькулятор?')

        if(this.stream == true) {

            this.one = prompt('Введите первое число');
            while(!this.one.trim() || !Number.isInteger(Number(this.one)) || Number(this.one) < 1) {
                this.one = prompt('Корректно введите первое число');
            }
            
            this.two = prompt('Введите второе число');
            while(!this.two.trim() || !Number.isInteger(Number(this.two)) || Number(this.two) < 1) {
                this.two = prompt('Корректно введите второе число');
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
                this.result = Number(this.one) + Number(this.two);
            break;
            case '-':
                this.result = this.one - this.two;
            break;
            case '*':
                this.result = this.one * this.two;
            break;
            case '/':
                this.result = this.one / this.two;
            break;
            default: this.result = 0;
        }

        this.show();
    };

    this.show = function() {
        alert(this.one + ' ' + this.oper + ' ' + this.two + ' = ' + this.result);
    };
};

let calc = new Calc();
calc.get();


// Лампочка. Расчёт затрат на электроэнергию

let Lamp = function() {
    this.get = function() {
        this.stream = confirm('Включить лампочку?')

        if(this.stream == true) {

            this.power = prompt('Введите мощность лампочки (Вт)');
            while(!this.power.trim() || !Number.isInteger(Number(this.power)) || Number(this.power) < 1) {
                this.power = prompt('Корректно введите мощность лампочки (Вт)');
            }

            this.price = prompt('Введите стоимость электроэнергии (X копеек за кВт)');
            while(!this.price.trim() || !Number.isInteger(Number(this.price)) || Number(this.price) < 1) {
                this.price = prompt('Корректно введите стомость электроэнергии (X копеек за кВт)');
            }

            this.time = prompt('Введите время действия лампочки (в часах)');
            while(!this.time.trim() || !Number.isInteger(Number(this.time)) || Number(this.time) < 1) {
                this.time = prompt('Корректно введите время действия лампочки (в часах)');
            }
            this.operation();

        }

        else {
            alert('Лампочка выключена');
        }
    }

    this.operation = function() {
        if(this.power * this.time >= 1000) {                                                                       // выведет расчёт в киловаттах, если X Ватт >= 1000
            if(this.power * this.price * this.time / 1000 >= 100) {                                                    // выведет расчёт в рублях и копейках, если X коп. >= 100
                this.ruble = Math.floor(this.power * this.price * this.time / 100000);                                     // количество рублей (округление)
                this.penny = Math.round(this.power * this.price * this.time / 1000 - (this.ruble * 100));                  // количество копеек (округление)
                this.kWt = Math.floor(this.power * this.time / 1000);                                                      // количество кВт (округление)
                this.Wt = Math.round(this.power * this.time - (this.kWt * 1000));                                          // количество Вт (округление)

                this.result = this.ruble + ' рублей ' + this.penny + ' копеек за ' + this.kWt + ' кВт ' + this.Wt + ' Вт'; // итог в рублях и копейках за X кВт и X Вт
            }
            else {                                                                                                     // выведет расчёт в копейках, если X коп. < 100
                this.penny = Math.round(this.power * this.price * this.time / 1000);                                       // количество копеек (округление)
                this.kWt = Math.round(this.power * this.time / 1000);                                                      // количество кВт (округление)
                this.Wt = Math.round(this.power * this.time - (this.kWt * 1000));                                          // количество Вт (округление)

                this.result = this.penny + ' копеек за ' + this.kWt + ' кВт ' + this.Wt + " Вт";                           // итог в копейках за X кВт и X Вт
            }
        }
        else {                                                                                                     // выведет расчёт в ваттах, если X Ватт < 1000
            if(this.power * this.price * this.time / 1000 >= 100) {                                                    // выведет расчёт в рублях и копейках, если X коп. >= 100
                this.ruble = Math.floor(this.power * this.price * this.time / 100000);                                     // количество рублей (округление)
                this.penny = Math.round(this.power * this.price * this.time / 1000 - (this.ruble * 100));                  // количество копеек (округление)
                this.Wt = Math.round(this.power * this.time);                                                              // количество Вт (округление)

                this.result = this.ruble + ' рублей ' + this.penny + ' копеек за ' + this.Wt + ' Вт';                      // итог в рублях и копейках за X Вт
            }
            else {                                                                                                     // выведет расчёт в копейках, если X коп. < 100
                this.penny = Math.round(this.power * this.price * this.time / 1000);                                       // количество копеек (округление)
                this.Wt = Math.round(this.power * this.time);                                                              // количество Вт (округление)

                this.result = this.penny + ' копеек за ' + this.Wt + " Вт";                                                // итог в копейках за и X Вт
            }
        }

        this.show();
    }

    this.show = function() {
        alert('Мощность: ' + this.power + ' Вт; ' +
              ' Цена: ' + this.price + ' копеек за кВт; ' +
              ' Время: ' + this.time + ' часов; ' +
              ' Итог: ' + this.result);
    }
}

let lamp = new Lamp();
lamp.get();


// Чайник. Расчёт времени закипания воды

let Kettle = function() {
    this.get = function() {
        this.stream = confirm('Включить чайник?');

        if(this.stream == true) {

            this.power = prompt('Введите мощность чайника ( Например: 2000 )');
            while(!this.power.trim() || !Number.isInteger(Number(this.power)) || Number(this.power) < 1) {
                this.power = prompt('Корректно введите мощность чайника ( Например: 2000 )')
            }

            this.volume = prompt('Введите объём воды (в литрах)');
            while(!this.volume.trim() || !Number.isInteger(Number(this.volume)) || Number(this.volume) < 1) {
                this.volume = prompt('Корректно введите объём воды (в литрах)');
            }

            this.temperature = prompt('Введите температуру воды (от 1 C до 100 C)');
            while(!this.temperature.trim() || !Number.isInteger(Number(this.temperature)) || Number(this.temperature) < 1 || Number(this.temperature) > 100) {
                this.temperature = prompt('Коректно введите температуру воды (от 1 C до 100 C)');
            }
            this.operation();

        }

        else {
            alert('Чайник выключен')
        }
        
    }

    this.operation = function() {
        if(this.volume * 4200 * (100 - this.temperature) / this.power >= 60) {                                     // Расчёт в минутах и секундах, если X с >= 60
            this.minute = Math.floor(this.volume * 4200 * (100 - this.temperature) / this.power / 60);                 // Количество минут (округление)
            this.second = Math.round(this.volume * 4200 * (100 - this.temperature) / this.power - (this.minute * 60)); // Количество секунд (округление)

            this.result = this.minute + ' минуты ' + this.second + ' секунд';                                          // Итог в минутах и секундах

            // 4200 Дж/(кг*C) - удельная теплоёмкость воды
            // 100 - температура кипения воды
        }
        else {                                                                                                     // Расчёт в секундах, если X с < 60
            this.second = Math.round(this.volume * 4200 * (100 - this.temperature) / this.power);                      // Количество секунд (округление)

            this.result = this.second + ' секунд';                                                                     // Итог в секундах
        }

        this.show();
    }

    this.show = function() {
        alert('Мощность: ' + this.power + ' Вт; ' +
              ' Объём: ' + this.volume + 'Л; ' +
              ' Температура: ' + this.temperature + ' C; ' +
              ' Итог: ' + this.result);
    }
}

let kettle = new Kettle();
kettle.get();


// Автомобиль. Расчёт пройденных километров

let Car = function() {
    this.get = function() {
        model = prompt('Введите марку автомобиля');
        while(model == Number(model) || model.length < 2) {
            model = prompt('Корректно введите марку автомобиля');
        }
        motor = confirm('Запустить двигатель?');

        if(motor == true) {
            transmissionOn();
            function transmissionOn() {
                transmission = prompt('Положение передачи? (D - вперёд, R - назад, N - Нейтральная)');

                if(transmission === 'D') {
                    speed = prompt('С какой скоростью вы едите? (км/ч)');
                    time = prompt('Время поездки? (в минутах)');
                }
                else if(transmission === 'R') {
                    alert('Вы сбили мусорный бак');
                    transmissionOn();
                }
                else if(transmission === 'N') {
                    alert('Двигатель работает. Передача нейтральная. ' + model + ' стоит на месте');
                    transmissionOn();
                }
                else {
                    transmissionOn();
                }
            }
            this.operation();
        }
        else {
            alert('Двигатель заглушен. ' + model + ' стоит на месте');
        }
    }

    this.operation = function() {
        if(time >= 60) {                                                       // Вывод в часах, если t >= 60 минут
            result_Km = Math.floor(speed * (time / 60));                               // Количество Км (округление)
            result_M = Math.round(speed * time - (result_Km * 60));                    // Количество М (округление)

            time_Hour = Math.floor(time / 60);                                         // Количество часов (округление)
            time_Min = Math.round(time - (time_Hour * 60));                            // Количество минут (округление)

            result = result_Km + ' километров ' + result_M + ' метров';                // Пройденное растояние
            result_T = time_Hour + ' часов ' + time_Min + ' минут';                    // Затраченое время в часах и минутах
        }
        else {                                                                 // Вывод в минутах, если t < 60
            if(speed * (time / 60) >= 1) {                                         // Вывод в Км, если проедено >= 1 Км
                result_Km = Math.floor(speed * (time / 60));                           // Количество Км (округление)
                result_M = Math.round(speed * time - (result_Km * 60));                // Количество М (округление)

                result = result_Km + ' километров ' + result_M + ' метров';            // Пройденное растояние
                result_T = time + ' минут';                                            // Затраченое время в минутах
            }
            else {                                                                 // Вывод в Км, если проедено < 1 Км
                result_M = Math.round(speed * (time / 60) * 1000);                     // Количество М (округление)

                result = result_M + ' метров';                                         // Пройденное растояние
                result_T = time + ' минут';                                            // Затраченое время в минутах
            }
        }

        this.show();
    }

    this.show = function() {
        alert('За ' + result_T + ' Вы проехали ' + result);
    }
}

let car = new Car();
car.get();


// Контакты. Вывод информации. Не доделано

let allContacts = {name: 'Josip', surname: 'Broz', patronymic: 'Tito', age: 21, phone: '+34 7 56-45-7', email: 'Josip_Broz@gmail.com'};

let Contact = function() {
    this.get = function() {

        nameOne = prompt('Введите Имя контакта');
        while(!nameOne.trim() || nameOne == Number(nameOne) || nameOne.length < 2) {
            nameOne = prompt('Корректно введите Имя контакта');
        }

        nameTwo = prompt('Введите Фамилию контакта');
        while(!nameTwo.trim() || nameTwo == Number(nameTwo) || nameTwo.length < 2) {
            nameTwo = prompt('Корректно введите Фамилию контакта');
        }

        nameThree = prompt('Введите Отчество контакта');
        while(!nameThree.trim() || nameThree == Number(nameThree) || nameThree.length < 2) {
            nameThree = prompt('Корректно введите Отчество контакта');
        }

        age = prompt('Введите возраст контакта');
        while(!age.trim() || !Number.isInteger(Number(age)) || age < 18) {
            age = prompt('Корректно введите возраст контакта');
        }
        let regexp_5 = /[+]{1}[0-9]{1,3}[ ]{1}[0-9]{1,3}[ ]{1}[0-9]{2,3}[ -]{1}[0-9]{2,3}[ -]{1}[0-9]{2,3}/;

        function check_5() {
            phone = prompt('Введите номер в фомате: +(код страны) (код города) (xx-xx-xx)');
            if(regexp_5.test(phone) == false) {
                alert('Неверный формат!');
                check_5();
            };
        }
        check_5();

        let regexp_6 = /^[a-z]{1}[a-z0-9]{2,20}@[a-z._-]{2,10}.[a-z]{2,11}$/i;

        function check_6() {
            email = prompt('Введите email в формате: John@mail.en');
            if(regexp_6.test(email) == false) {
                alert('Неверный формат!');
                check_6();
            }
        }
        check_6();

        this.show();
    }

    this.show = function() {

        allContacts.name = nameOne;
        allContacts.surname = nameTwo;
        allContacts.patronymic = nameThree;
        allContacts.age = age;
        allContacts.phone = phone;
        allContacts.email = email;

        alert('Вывод в консоле');
        console.log(allContacts);

        /*newContact = confirm('Добавить ещё контакт?');
        if(newContact == true) {
            contact.get();
        }*/

    }
}

let contact = new Contact();
contact.get();
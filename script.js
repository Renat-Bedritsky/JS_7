// Калькулятор

let Calc = function() {
    this.get = function() {
        this.stream = confirm('Включить калькулятор?')

        if(this.stream == true) {

            this.a = prompt('Введите число а');
            while(!this.a.trim() || !Number.isInteger(Number(this.a)) || Number(this.a) < 1) {
                this.a = prompt('Введите число а');
            }
            
            this.b = prompt('Введите число b');
            while(!this.b.trim() || !Number.isInteger(Number(this.b)) || Number(this.b) < 1) {
                this.b = prompt('Введите число b');
            }
            
            this.oper = prompt('Введите операцию: +, -, *, /');
            while(`${this.oper}` != `-` && `${this.oper}` != '+' && `${this.oper}` != '*' && `${this.oper}` != '/') {
                this.oper = prompt('Введите операцию: +, -, *, /');
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
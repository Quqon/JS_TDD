const Calculator = require('../calculator');

describe('Calculator', () => {
    let cal;
    beforeEach(() => {
        cal = new Calculator();
    });

    it('inits with 0', () => {
        expect(cal.value).toBe(0);
    });

    it('sets', () => {
        cal.set(2);
        expect(cal.value).toBe(2);
    });

    it('clear', () => {
        cal.set(2);
        cal.clear();
        expect(cal.value).toBe(0);
    })

    it('adds', () => {
        cal.set(1);
        cal.add(2);
        expect(cal.value).toBe(3);
    })

    it('add should throw an error if value is greater than 100', () => {
        expect(() => {
            cal.add(101);
        }).toThrow('Value can not be greater than 100');
    })

    it('subtracts', () => {
        cal.set(5);
        cal.subtract(2);
        expect(cal.value).toBe(3);
    })

    it('multiplies', () => {
        cal.set(5);
        cal.multiply(2);
        expect(cal.value).toBe(10);
    })

    describe('divides', () => {
        it(' 0 / 0 === NaN', () => {
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        })

        it('0 / 0 === Infity', () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });

        it('4 / 2 === 2', () => {
            cal.set(4);
            cal.divide(2);
            expect(cal.value).toBe(2);
        });
    });
});

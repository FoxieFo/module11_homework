import { countDown } from '../index.js';

describe('tests for countDown function', () => {
  const optionOne = 3;
  const optionTwo = 7;
  const optionThree = 5;

  //успешное выполнение
  it('should count down from 3', () => {
    expect(countDown(optionOne)).toBe("3, 2, 1")
  }),
  it('should count down from 7', () => {
    expect(countDown(optionTwo)).toBe("7, 6, 5, 4, 3, 2, 1")
  }),
  it('should count down from 5', () => {
    expect(countDown(optionThree)).toBe("5, 4, 3, 2, 1")
  })

  //неуспешное выполнение
  it('should round off the number', () => {
    expect(countDown(3.4)).toBe('3');
});

  //корнер-кейс
  it('should handle very large numbers', () => {
    expect(countDown(1000000)).toBe('1000000, 999999, ...');
});
})
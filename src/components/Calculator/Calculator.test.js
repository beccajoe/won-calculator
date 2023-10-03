import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('계산기 컴포넌트를 렌더링합니다', () => {
    render(<Calculator />);
    const titleElement = screen.getByText('WON CALCULATOR');
    expect(titleElement).toBeInTheDocument();
});

// test('디스플레이 업데이트', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     fireEvent.click(screen.getByText('1'));
//     expect(displayElement).toHaveTextContent('1');
//
//     fireEvent.click(screen.getByText('2'));
//     expect(displayElement).toHaveTextContent('12');
//
//     fireEvent.click(screen.getByText('3'));
//     expect(displayElement).toHaveTextContent('123');
// });

//
// test('덧셈 수행', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     fireEvent.click(screen.getByText('5')); // 입력: 5
//     fireEvent.click(screen.getByText('+')); // 입력: 5 +
//     fireEvent.click(screen.getByText('3')); // 입력: 5 + 3
//     fireEvent.click(screen.getByText('=')); // 계산: 5 + 3 = 8
//
//     expect(displayElement).toHaveTextContent('8');
// });
//
// test('뺄셈 수행', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     fireEvent.click(screen.getByText('8')); // 입력: 8
//     fireEvent.click(screen.getByText('-')); // 입력: 8 -
//     fireEvent.click(screen.getByText('4')); // 입력: 8 - 4
//     fireEvent.click(screen.getByText('=')); // 계산: 8 - 4 = 4
//
//     expect(displayElement).toHaveTextContent('4');
// });
//
// test('곱셈 수행', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     fireEvent.click(screen.getByText('6')); // 입력: 6
//     fireEvent.click(screen.getByText('x')); // 입력: 6 x
//     fireEvent.click(screen.getByText('7')); // 입력: 6 x 7
//     fireEvent.click(screen.getByText('=')); // 계산: 6 x 7 = 42
//
//     expect(displayElement).toHaveTextContent('42');
// });
//
// test('나눗셈 수행', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     fireEvent.click(screen.getByText('9')); // 입력: 9
//     fireEvent.click(screen.getByText('/')); // 입력: 9 /
//     fireEvent.click(screen.getByText('3')); // 입력: 9 / 3
//     fireEvent.click(screen.getByText('=')); // 계산: 9 / 3 = 3
//
//     expect(displayElement).toHaveTextContent('3');
// });
//
// test('표시 값 형식', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     // 1000 입력
//     fireEvent.click(screen.getByText('1'));
//     fireEvent.click(screen.getByText('0'));
//     fireEvent.click(screen.getByText('0'));
//     fireEvent.click(screen.getByText('0'));
//
//     // 결과: 1,000
//     expect(displayElement).toHaveTextContent('1,000');
// });
//
// test('결과에서 소수점 제거', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     // 10을 3으로 나눈 결과 (소수점이 있는 경우)
//     fireEvent.click(screen.getByText('1'));
//     fireEvent.click(screen.getByText('0'));
//     fireEvent.click(screen.getByText('/'));
//     fireEvent.click(screen.getByText('3'));
//     fireEvent.click(screen.getByText('='));
//
//     // 결과: 3.3333333333333335 → 소수점이 제거된 결과: 3
//     expect(displayElement).toHaveTextContent('3');
// });
//
// test('최대 10 자리 숫자 입력', () => {
//     render(<Calculator />);
//     const displayElement = screen.getByText('0');
//
//     // 10 자리 이상의 숫자 입력
//     fireEvent.click(screen.getByText('1'));
//     fireEvent.click(screen.getByText('2'));
//     fireEvent.click(screen.getByText('3'));
//     fireEvent.click(screen.getByText('4'));
//     fireEvent.click(screen.getByText('5'));
//     fireEvent.click(screen.getByText('6'));
//     fireEvent.click(screen.getByText('7'));
//     fireEvent.click(screen.getByText('8'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('0'));
//     fireEvent.click(screen.getByText('1')); // 11 번째 숫자 입력 시도
//
//     // 입력이 10 자리 이상이 되면 더 이상 입력되지 않아야 함
//     expect(displayElement).toHaveTextContent('1234567890');
// });
//
// test('결과가 10 자리 이상인 경우, 표시 값이 "Infinity"', () => {
//     render(<Calculator />);
//
//     // 9 자리 숫자와 곱하기 연산자를 입력
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('9'));
//     fireEvent.click(screen.getByText('x'));
//
//     // 9 자리 숫자와 곱하기 연산자를 10 번 입력하여 100 자리 이상의 결과를 생성하려고 함
//     fireEvent.click(screen.getByText('9'));
//
//     // 결과가 "Infinity"
//     const displayElement = screen.getByText('Infinity');
//     expect(displayElement).toBeInTheDocument();
// });
//
// test('하나의 숫자와 연산자만 입력하고 "="를 누를 경우 alert 표시', () => {
//     render(<Calculator />);
//
//     // 숫자 5와 더하기 연산자를 입력
//     fireEvent.click(screen.getByText('5'));
//     fireEvent.click(screen.getByText('+'));
//
//     // "="를 누르면 경고 메시지 표시
//     window.alert = jest.fn();
//     fireEvent.click(screen.getByText('='));
//     expect(window.alert).toHaveBeenCalledWith('Invalid expression (올바른 수식이 아닙니다)');
// });
//
// test('연속으로 여러 연산자를 입력하면 마지막 연산자가 연산자로 설정', () => {
//     render(<Calculator />);
//
//     // 더하기와 빼기 연산자를 연속으로 입력
//     fireEvent.click(screen.getByText('+'));
//     fireEvent.click(screen.getByText('-'));
//     fireEvent.click(screen.getByText('x'));
//
//     // 현재 연산자는 'x'
//     const currentOperatorDisplay = screen.getByText('x');
//     expect(currentOperatorDisplay).toBeInTheDocument();
// });
//
// test('AC 버튼을 클릭하면 모든 입력이 초기화', () => {
//     render(<Calculator />);
//
//     // 숫자 입력 후 AC 버튼 클릭
//     fireEvent.click(screen.getByText('1'));
//     fireEvent.click(screen.getByText('2'));
//     fireEvent.click(screen.getByText('3'));
//     fireEvent.click(screen.getByText('AC'));
//
//     // 표시값은 '0'으로 초기화
//     const displayValueElement = screen.getByText('0');
//     expect(displayValueElement).toBeInTheDocument();
//
//     // 사용자 입력 기록, 현재 연산자 및 현재 계산이 초기화
//     const paperTrailElement = screen.getByText('');
//     const currentOperatorElement = screen.getByText('');
//     const currentCalculationElement = screen.getByText('');
//
//     expect(paperTrailElement).toBeInTheDocument();
//     expect(currentOperatorElement).toBeInTheDocument();
//     expect(currentCalculationElement).toBeInTheDocument();
// });
//
// test('C 버튼을 클릭하면 마지막 문자가 제거', () => {
//     render(<Calculator />);
//
//     // 숫자 입력 후 C 버튼 클릭
//     fireEvent.click(screen.getByText('4'));
//     fireEvent.click(screen.getByText('C'));
//
//     // 표시값은 '0'으로 초기화
//     const displayValueElement = screen.getByText('0');
//     expect(displayValueElement).toBeInTheDocument();
//
//     // 사용자 입력 기록, 현재 연산자 및 현재 계산의 마지막 문자가 제거
//     const paperTrailElement = screen.getByText('');
//     const currentOperatorElement = screen.getByText('');
//     const currentCalculationElement = screen.getByText('');
//
//     expect(paperTrailElement).toBeInTheDocument();
//     expect(currentOperatorElement).toBeInTheDocument();
//     expect(currentCalculationElement).toBeInTheDocument();
// });
//
// test('0를 0으로 나눌 때 "Invalid input (숫자가 아닙니다)" 표시', () => {
//     render(<Calculator />);
//
//     // 숫자 0 입력 후 나누기 연산자와 0 입력
//     fireEvent.click(screen.getByText('0'));
//     fireEvent.click(screen.getByText('/'));
//     fireEvent.click(screen.getByText('0'));
//     fireEvent.click(screen.getByText('='));
//
//     // 표시값은 "Invalid input (숫자가 아닙니다)"로 설정
//     const displayValueElement = screen.getByText('Invalid input (숫자가 아닙니다)');
//     expect(displayValueElement).toBeInTheDocument();
// });
//
// test('여러 연산자가 포함된 수식을 계산', () => {
//     render(<Calculator />);
//
//     // 수식 "3 + 4 x 2 - 5 / 1" 입력 후 '=' 버튼 클릭
//     fireEvent.click(screen.getByText('3'));
//     fireEvent.click(screen.getByText('+'));
//     fireEvent.click(screen.getByText('4'));
//     fireEvent.click(screen.getByText('x'));
//     fireEvent.click(screen.getByText('2'));
//     fireEvent.click(screen.getByText('-'));
//     fireEvent.click(screen.getByText('5'));
//     fireEvent.click(screen.getByText('/'));
//     fireEvent.click(screen.getByText('1'));
//     fireEvent.click(screen.getByText('='));
//
//     // 표시값은 계산된 결과 "9"로 설정
//     const displayValueElement = screen.getByText('9');
//     expect(displayValueElement).toBeInTheDocument();
// });

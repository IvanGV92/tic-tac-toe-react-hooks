
import '@testing-library/jest-dom';
import { calculateWinner } from '../helpers';




describe("Calculate winner X", () => {

    it("should declare X as a winner line 1", () => {
      const squares = [
        'X', 'X', 'X',
        'O', 'O', null,
        null, null, null
      ];

      const winner = calculateWinner(squares);

      expect(winner).toEqual('X');


  });

  it("should declare X as a winner line 2", () => {
    const squares = [
      null, 'O', null,
      'X', 'X', 'X',
      'O', null, null
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('X');


  });

  it("should declare X as a winner line 3", () => {
    const squares = [
      null, 'O', null,
      null, 'O', null,
      'X', 'X', 'X',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('X');


  });

  it("should declare X as a winner line 4", () => {
    const squares = [
      'X', 'O', null,
      'X', 'O', null,
      'X', null, null,
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('X');


  });

  it("should declare X as a winner line 5", () => {
    const squares = [
      'O', 'X', null,
      'O', 'X', null,
      null, 'X', null,
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('X');


  });

  it("should declare X as a winner line 6", () => {
    const squares = [
      'O', 'O', 'X',
      null, null, 'X',
      null, null, 'X',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('X');


  });

  it("should declare X as a winner line 7", () => {
    const squares = [
      null, 'O', 'X',
      null, 'X', null,
      'X', null, 'O',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('X');


  });

  it("should declare X as a winner line 8", () => {
    const squares = [
      'X', 'O', null,
      null, 'X', null,
      'O', null, 'X',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('X');


  });
});


describe("Calculate winner O", () => {

  it("should declare O as a winner line 1", () => {
    const squares = [
      'O', 'O', 'O',
      'X', 'X', null,
      'X', null, 'X'
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

  it("should declare O as a winner line 2", () => {
    const squares = [
      'X', 'X', null,
      'O', 'O', 'O',
      'X', null, 'X'
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

  it("should declare O as a winner line 3", () => {
    const squares = [
      null, 'X', 'X',
      'X', 'X', null,
      'O', 'O', 'O',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

  it("should declare O as a winner line 4", () => {
    const squares = [
      'O', 'X', 'X',
      'O', 'X', null,
      'O', null, 'X',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

  it("should declare O as a winner line 5", () => {
    const squares = [
      'X', 'O', 'X',
      'X', 'O', null,
      null, 'O', 'X',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

  it("should declare O as a winner line 6", () => {
    const squares = [
      'X', 'X', 'O',
      null, 'X', 'O',
      'X', null, 'O',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

  it("should declare O as a winner line 7", () => {
    const squares = [
      'X', 'X', 'O',
      'X', 'O', null,
      'O', null, 'X',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

  it("should declare O as a winner line 8", () => {
    const squares = [
      'O', 'X', 'X',
      'X', 'O', null,
      'X', null, 'O',
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual('O');


  });

});

describe("Calculate a tie", () => {

  it("should declare a tie", () => {
    const squares = [
      'O', 'X', 'X',
      'X', 'O', 'O',
      'X', 'O', 'X'
    ];

    const winner = calculateWinner(squares);

    expect(winner).toEqual(null);


  });


});

import React from 'react';
import '@testing-library/jest-dom';

import { shallow, mount} from 'enzyme';

import Square from '../components/Square';
import Board from '../components/Board';
import Game from '../components/Game';



describe("App",()=>{
  describe("Testing Board",()=>{
    it("should render a Square correctly",()=>{
      const value = null;
      const onClick = jest.fn();

      const wrapper = shallow(
      <Square
        value={value}
        onClick={onClick}
      />);

      expect(wrapper).toMatchSnapshot();

    });


    it("should render the Board correctly", () => {
      const squares = [Array(9).fill(null)][0];
      const onClick = jest.fn();

      const wrapper = shallow(
        <Board
          squares={squares}
          onClick={onClick}
        />);

      expect(wrapper).toMatchSnapshot();

    });

    it("should render next player label correctly", () => {


      const textLabel = "Next Player: X";
      const wrapper = shallow(
        <Game/>);


      const nextPlayerLabel = wrapper.find('p').text();

      expect(nextPlayerLabel).toBe(textLabel);

    });
    it("should render rewind button", () => {


      const buttonLabel = "Rewind";
      const wrapper = shallow(
        <Game />);


      const RewindButtonLabel = wrapper.find('button').at(0).props().children;

      expect(RewindButtonLabel).toEqual(buttonLabel);


    });

    it("should render reset button", () => {


      const buttonLabel = "Reset";
      const wrapper = shallow( <Game />);


      const ResetButtonLabel = wrapper.find('button').at(1).props().children;



      expect(ResetButtonLabel).toEqual(buttonLabel);


    });

  });

  describe("Testing Game", () => {


    describe('Reset', () => {
      const wrapperGame = shallow(<Game />);




      it('resets game', () => {

        const squares = [Array(9).fill(null)][0];
        const onClick = jest.fn();
        const wrapperBoard = shallow(
          <Board
            squares={squares}
            onClick={onClick}
          />);

        const btn = wrapperGame.find('button').at(1);

        btn.simulate('click');

        const board = wrapperGame.find('Board').html();



        expect(board).toBe(wrapperBoard.html());

      });
    });



  });





});
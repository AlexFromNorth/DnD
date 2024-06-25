import React, { useState } from "react";
import '../App.css';

const Board = ({
  board,
  currentBoard,
  currentItem,
  setCurrentBoard,
  setCurrentItem,
  boards,
  setBoards
}) => {
  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className.includes("item")) {
      e.target.className = "item hold";
    }
  }

  function dragLeaveHandler(e) {
    if (e.target.className === "item hold") {
      e.target.className = "item";
    }
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    if (e.target.className === "item hold") {
      e.target.className = "item";
    }
  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.cards.indexOf(currentItem);
    currentBoard.cards.splice(currentIndex, 1);

    if (item) {
      const dropIndex = board.cards.indexOf(item);
      board.cards.splice(dropIndex + 1, 0, currentItem);
    } else {
      board.cards.push(currentItem);
    }

    setBoards(boards.map((b) => (b.id === board.id ? board : b)));
    setBoards(boards.map((b) => (b.id === currentBoard.id ? currentBoard : b)));
  }

  function dropCardHandler(e, board, position) {
    e.preventDefault();
    if (!board.cards.includes(currentItem)) {
      if (position === 'start') {
        board.cards.unshift(currentItem);
      } else if (position === 'end') {
        board.cards.push(currentItem);
      }

      const currentIndex = currentBoard.cards.indexOf(currentItem);
      currentBoard.cards.splice(currentIndex, 1);
      setBoards(boards.map((b) => (b.id === board.id ? board : b)));
      setBoards(boards.map((b) => (b.id === currentBoard.id ? currentBoard : b)));
    }
  }

  return (
    <div className="board">
      <div
        className="board__drop-zone"
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropCardHandler(e, board, 'start')}
        style={{ height: '20px', background: 'lightgrey', marginBottom: '5px' }}
      ></div>
      <div className="board__title">{board.title}</div>
      {board.cards.map((item, index) => (
        <div
          className="item"
          key={item.id}
          draggable={true}
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragStart={(e) => dragStartHandler(e, board, item)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDrop={(e) => dropHandler(e, board, item)}
        >
          <div className="board__card-title">{item.title}</div>
          <div className="board__card-description">{item.description}</div>
        </div>
      ))}
      <div
        className="board__drop-zone"
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropCardHandler(e, board, 'end')}
        style={{ height: '20px', background: 'lightgrey', marginTop: '5px' }}
      ></div>
    </div>
  );
};

export default Board;

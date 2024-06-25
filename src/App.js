import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'Сделать',
      cards: [
        {
          id: 1,
          title: 'Card 1',
          description: 'Description for Card 1'
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'Description for Card 2'
        }
      ]
    },
    {
      id: 2,
      title: 'Проверить',
      cards: [
        {
          id: 3,
          title: 'Card 3',
          description: 'Description for Card 3'
        },
        {
          id: 4,
          title: 'Card 4',
          description: 'Description for Card 4'
        }
      ]
    },
    {
      id: 3,
      title: 'Готово',
      cards: [
        {
          id: 5,
          title: 'Card 5',
          description: 'Description for Card 5'
        },
        {
          id: 6,
          title: 'Card 6',
          description: 'Description for Card 6'
        }
      ]
    }
  ]);

  return (
    <div className="App">
      {boards.map((board) => (
        <Board
          key={board.id}
          board={board}
          boards={boards}
          setBoards={setBoards}
          currentBoard={currentBoard}
          currentItem={currentItem}
          setCurrentBoard={setCurrentBoard}
          setCurrentItem={setCurrentItem}
        />
      ))}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { MdOutlineSimCard } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import './memorygame.css';

const pokemons = [
  'bulbasaur', 'charmander', 'squirtle', 'pikachu',
  'jigglypuff', 'meowth', 'psyduck', 'snorlax',
  'eevee', 'magikarp', 'charizard', 'blastoise'
];

const difficulties = {
  easy: 5,
  medium: 8,
  hard: 12
};

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [completedCards, setCompletedCards] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const cardCount = getCardCount(difficulty);
    const shuffledCards = shuffleArray([...pokemons.slice(0, cardCount), ...pokemons.slice(0, cardCount)]);
    setCards(shuffledCards);
  }, [difficulty]);

  useEffect(() => {
    if (completedCards.length === getCardCount(difficulty)) {
      alert('Parabéns! Você é um mestre Pokémon!');
    }
  }, [completedCards, difficulty]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 1) {
      if (flippedCards.includes(index)) return;
      setFlippedCards([...flippedCards, index]);
      const firstCard = cards[flippedCards[0]];
      const secondCard = cards[index];
      if (firstCard === secondCard) {
        setCompletedCards([...completedCards, firstCard]);
        setScore((prevScore) => prevScore + 1);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    } else {
      setFlippedCards([index]);
    }
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const resetGame = () => {
    setScore(0);
    setCompletedCards([]);
    setFlippedCards([]);
    const cardCount = getCardCount(difficulty);
    const shuffledCards = shuffleArray([...pokemons.slice(0, cardCount), ...pokemons.slice(0, cardCount)]);
    setCards(shuffledCards);
  };

  const renderCard = (index) => {
    const card = cards[index];
    const isFlipped = flippedCards.includes(index);
    const isCompleted = completedCards.includes(card);

    return (
      <div
        key={index}
        className={`card ${isFlipped ? 'flipped' : ''} ${isCompleted ? 'completed' : ''}`}
        onClick={() => handleCardClick(index)}
      >
        <div className="card-inner">
          <div className="card-front">
            <BsFillQuestionCircleFill size={40} />
          </div>
          <div className="card-back">
            {isFlipped || isCompleted ? (
              <img src={`/images/${card}.png`} alt={card} className="card-image" />
            ) : (
              <MdOutlineSimCard size={40} />
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCards = () => {
    return cards.map((_, index) => renderCard(index));
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getCardCount = (difficulty) => {
    return difficulties[difficulty];
  };

  return (
    <div className="app app-pokemon">
      <h1>Pokémon</h1>
      <div className="score">Points: {score}</div>
      <div className="game-container">
        {renderCards()}
      </div>
      <div className="controls">
        <h3>Select Dificulty:</h3>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medim</option>
          <option value="hard">Hard</option>
        </select>
        <br /><br />
        <button onClick={resetGame} className="buttonjm">Restart</button>
        <br /><br />
      </div>
    </div>
  );
};

export default MemoryGame;

import React, { useState } from 'react';
import homem from '../../Images/homem.png';
import mulher from '../../Images/mulher.png';
import restart from '../../Images/restart.png';


function MyButton() {
    const [countMen, setCountMen] = useState(0);
    const [countGirl, setCountGirl] = useState(0);

    function countMenSum() {
        setCountMen(countMen + 1);
    }

    function countMenSub() {
        if (countMen > 0) {
            setCountMen(countMen - 1);
        }
    }

    function countGirlSum() {
        setCountGirl(countGirl + 1);
    }

    function countGirlSub() {
        if (countGirl > 0) {
            setCountGirl(countGirl - 1);
        }
    }

    function restartCount() {
        setCountGirl(0);
        setCountMen(0);
    }

    const total = countMen + countGirl;
    const disableSubtraction = total <= 0;

    return (
        <div className='show'>
            <div className='view'>

                <div className='count'>

                    <div className='textTotal'>
                        <p>Total</p>
                    </div>

                    <div>
                        <button className='restart' onClick={restartCount}>
                            <img className='imgRestart'
                                src={restart}
                            />
                        </button>
                    </div>
                </div>

                <p className='totalCount'>
                    {total}
                </p>
                <div className='buttons'>
                    <div className='div'>
                        <img src={homem} alt="Minha imagem" />
                        <div className='divFlex'>
                            <button className='buttonAdd' onClick={countMenSum}>+</button>
                            <button className='buttonSub' onClick={countMenSub} disabled={disableSubtraction}>-</button>
                        </div>
                        <div className='result'>
                            <p>Homens</p>
                            <p className='totalCount'>{countMen}</p>
                        </div>
                    </div>
                    <div className='div'>
                        <img src={mulher} alt="Minha imagem" />
                        <div className='divFlex'>
                            <button className='buttonAdd' onClick={countGirlSum}>+</button>
                            <button className='buttonSub' onClick={countGirlSub} disabled={disableSubtraction}>-</button>
                        </div>
                        <div className='result'>
                            <p>Mulher</p>
                            <p className='totalCount'>
                                {countGirl}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyButton;

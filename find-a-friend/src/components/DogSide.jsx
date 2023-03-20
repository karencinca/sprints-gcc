import './DogSide.css'
import Dog from '../assets/dog.png'

export function DogSide() {
    return (
        <div className='right-side'>
            <div className='dog-rect'>
                <img src={Dog} alt="dog" />
                <button type='button' className='mobile-btn'>
                    Acesse agora
                </button>
            </div>
            <div className='btn-rect'>
                <button type='button'>Acesse agora</button>
            </div>
            <div className='rect-two'></div>
            <div className='rect-three'></div>
            <div className='rect-four'></div>
        </div>
    )
}
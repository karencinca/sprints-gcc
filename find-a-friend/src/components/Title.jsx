import './Title.css'
import Pet1 from '../assets/pet1.png'
import Pet2 from '../assets/pet2.png'
import Pet3 from '../assets/pet3.png'
import Pet4 from '../assets/pet4.png'

export function Title() {
    return (
        <div className='left-container'>
            <div className="near-friends">
                <div className='friends-pics'>
                    <img src={Pet1} alt="pet 1" />
                    <img src={Pet2} alt="pet 2" />
                    <img src={Pet3} alt="pet 3" />
                    <img src={Pet4} alt="pet 4" />
                </div>
                <span><strong>324 amigos</strong> na sua cidade</span>
            </div>

            <h1>Leve a felicidade para o seu lar</h1>

            <h3>Encontre o animal de estimação ideal para seu estilo de vida!</h3>
        </div>
    )
}
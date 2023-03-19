import './Details.css'
import PetOne from '../assets/littlepet1.png'
import PetTwo from '../assets/littlepet2.png'
import PetThree from '../assets/littlepet3.png'
import AppScreen from '../assets/app-screen-bg.svg'


export function Details() {
    return (
        <div className='container'>
            <h2>Um app não, uma caixinha de amigos...</h2>

            <div className="cards">
                <div className="card card-one">
                    <img src={PetOne} alt="ícone de um cachorro" />
                    <div className="text">
                        <p>O <strong>FindAFriend</strong> é um produto desenvolvido para você encontrar o animal de estimação ideal ao seu estilo de vida!</p>
                    </div>
                </div>
                <div className="card card-two">
                    <img src={PetTwo} alt="ícone de um gato" />
                    <div className="text">
                        <p><strong>ONGs</strong> cadastram os bichinhos disponíveis para adoção informando características como: porte, nível de energia, nível de independência, sociabilidade e gênero.</p>
                    </div>
                </div>
                <div className="card card-three">
                    <img src={PetThree} alt="ícone de um cachorro" />
                    <div className="text">
                        <p><strong>Filtre os bichinhos</strong> de acordo com suas preferências e lifestyle. Depois é só entrar em contato com a ONG para agendar uma visita e conhecer pessoalmente seu <strong>match perfeito!</strong></p>
                    </div>
                </div>
                <div className="card card-four">
                        <img className='screen1' src={AppScreen} alt="" />
                        <img className='screen2' src={AppScreen} alt="" />
                </div>
            </div>
        </div>
    )
}
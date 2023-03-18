import { DogSide } from './DogSide'
import './MainContent.css'
import { Title } from './Title'

export function MainContent() {
    return (
        <div className='main-content-container'>
            <div className="left">
                <Title />
            </div>
            <div className="right">
                <DogSide />
            </div>
        </div>
    )
}
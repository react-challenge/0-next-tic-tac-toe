
import './game.scss'

export default function Game() {
    const list = new Array(9).fill(null).map((index, item) => {
        return <div className="square" key={index}></div>
    })
    return (
        <div className="main">
            {list}
        </div>
    )
}
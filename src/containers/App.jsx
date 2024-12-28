import { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import '../index.css'

export default function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter((robot) => {
        return robot.name
            .toLowerCase()
            .includes(searchfield.toLowerCase())
    })
    
    return !robots.length ?
    <h1>Loading</h1> :
    (
        <div className="min-h-screen bg-gradient-to-b from-cyan-800 to-green-400">
            <div className="sticky top-0 z-10 justify-items-center pt-12 pb-4">
                <h1 className="mb-4 text-5xl text-center text-green-200 text-stroke-3 text-stroke-green-600 font-sega md:text-6xl">
                    RobotBros
                </h1>
                <div className="flex flex-row gap-1 justify-center items-center px-4 md:gap-4">
                    <button onClick={() =>setCount(count + 1)} className="px-5 py-2 max-h-14 text-lg text-green-200 bg-green-600 rounded-full border-2 border-green-600 hover:text-green-600 hover:bg-green-200">
                        Click me {count}
                    </button>
                    <SearchBox searchChange={onSearchChange} />
                </div> 
            </div>
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    )
}

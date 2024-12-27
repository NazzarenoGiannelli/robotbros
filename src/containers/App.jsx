import { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import '../index.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state
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
                    <SearchBox searchChange={this.onSearchChange} />
                </div>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App

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
                <div className="sticky top-0 z-10 pt-12 pb-4 justify-items-center">
                    <h1 className="font-sega text-5xl md:text-6xl text-center text-cyan-200 mb-4">
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

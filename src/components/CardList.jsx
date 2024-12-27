import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {robots.map((user) => {
                return (
                    <Card
                        className="w-full"
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                    />
                )
            })}
        </div>
    )
}

export default CardList

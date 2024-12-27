const Card = ({ name, email, id }) => {
    return (
        <div className="bg-green-200 rounded-3xl text-center p-4 transform hover:scale-105 transition duration-300 border-2 border-green-400">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div className="pt-2">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="font-bold">{email}</p>
            </div>
        </div>
    )
}

export default Card

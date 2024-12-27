const Card = ({ name, email, id }) => {
    return (
        <div className="p-4 text-center bg-green-200 rounded-3xl border-2 border-green-600 transition duration-300 transform hover:scale-105">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div className="pt-2">
                <h2 className="text-2xl font-bold text-green-800">{name}</h2>
                <p className="font-bold text-green-800">{email}</p>
            </div>
        </div>
    )
}

export default Card

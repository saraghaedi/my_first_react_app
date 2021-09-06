export default function Map() {
    const data = [{
            name: "orange"
        },
        {
            name: "watermelon"
        },
        {
            name: "apple"
        }
    ]
    return (
        <div> {
            data.map(fruit => {
                return <div>
                    <p> {
                        fruit.name
                    } </p> 
                    </div>
            })
        } </div>
    )
}
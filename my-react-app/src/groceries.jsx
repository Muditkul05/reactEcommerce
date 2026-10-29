import { useState } from 'react';
import { useEffect } from 'react';
function Groceries() {
    const [groceries, setGroceries] = useState([]);
    useEffect(() => {
        const fetchGrocery = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/groceries');
                const data = await response.json();
                if (response.ok) {
                    const groceryArray = Array.isArray(data) ? data : data.rows;
                    setGroceries(groceryArray);
                } else {
                    console.error('Data received is not an array', data)
                }
            } catch (error) {
                console.error('failed to load image', error);
            }
        };
        fetchGrocery();
    }, []);
    return (
        <div>
            {groceries.map((index, grocery) => (
                <div key={grocery.id || index}>
                    <div>
                        <img src={grocery.image_url} alt={index} />
                    </div>
                    <div>
                        <h3>{grocery.name}</h3>
                    </div>
                    <div>
                        <h3>{grocery.description}</h3>
                    </div>
                    <div>
                        <h3>{grocery.price}</h3>
                    </div>
                    <div>
                        <h3>stock:</h3>
                        <h3>{grocery.stock}</h3>
                    </div>
                </div>
            )
            )}
        </div>

    )
}
export default Groceries;
import { useState } from 'react';
import { useEffect } from 'react';
function Clothes() {
    const [clothes, setClothes] = useState([]);
    useEffect(() => {
        const fetchCloth = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/clothes');
                const data = await response.json();
                if (response.ok) {
                    const clothArray = Array.isArray(data) ? data : data.rows;
                    setClothes(clothArray);
                } else {
                    console.error('Data received is not an array', data)
                }
            } catch (error) {
                console.error('failed to load image', error);
            }
        };
        fetchCloth();
    }, []);
    return (
        <div>
            {clothes.map((index, cloth) => (
                <div key={cloth.id || index}>
                    <div>
                        <img src={cloth.image_url} alt={index} />
                    </div>
                    <div>
                        <h3>{cloth.name}</h3>
                    </div>
                    <div>
                        <h3>{cloth.description}</h3>
                    </div>
                    <div>
                        <h3>{cloth.price}</h3>
                    </div>
                    <div>
                        <h3>stock:</h3>
                        <h3>{cloth.stock}</h3>
                    </div>
                </div>
            )
            )}
        </div>

    )
}
export default Clothes;
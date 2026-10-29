import { useState } from 'react';
import { useEffect } from 'react';
function Electronics() {
    const [elec, setElec] = useState([]);
    useEffect(() => {
        const fetchElec = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/electronics');
                const data = await response.json();
                if (response.ok) {
                    const elecArray = Array.isArray(data) ? data : data.rows;
                    setElec(elecArray);
                } else {
                    console.error('Data received is not an array', data)
                }
            } catch (error) {
                console.error('failed to load image', error);
            }
        };
        fetchElec();
    }, []);
    return (
        <div>
            {elec.map((index, electro) => (
                <div key={electro.id || index}>
                    <div>
                        <img src={electro.image_url} alt={index} />
                    </div>
                    <div>
                        <h3>{electro.name}</h3>
                    </div>
                    <div>
                        <h3>{electro.description}</h3>
                    </div>
                    <div>
                        <h3>{electro.price}</h3>
                    </div>
                    <div>
                        <h3>stock:</h3>
                        <h3>{electro.stock}</h3>
                    </div>
                </div>
            )
            )}
        </div>

    )
}
export default Electronics;
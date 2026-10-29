import { useState, useEffect } from "react";
import './shoes.css';
function Shoes() {

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const response = await fetch('http://localhost:3000/products/shoes');

                const data = await response.json();

                if (response.ok) {
                    const shoeArray = Array.isArray(data) ? data : data.rows;
                    if (shoeArray && Array.isArray(shoeArray)) {
                        setShoes(shoeArray);
                    } else {
                        console.error('Data received is not an array:', data);
                    }
                }
            } catch (error) {
                console.error('failed to load image', error);
            }
        };


        fetchShoes();
    }, []);

    return (
        <div className="shoe-container">
            <table>
                <tbody>
                    {shoes.map((shoe, index) => (
                        <tr key={shoe.id||index}>
                            <td>
                                <img src={shoe.image_url} alt={`Shoe ${index}`} className="image" />
                            </td>
                            <td>
                                <h3>{shoe.name}</h3>
                            </td>
                            <td>
                                <h3>{shoe.description}</h3>
                            </td>
                            <td>
                                <h3>{shoe.price}</h3>
                            </td>
                            <td>
                                <h3>stock:</h3>
                                <h3>{shoe.stock}</h3>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Shoes;
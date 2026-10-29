import { useState } from 'react'
function Register () {
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [message ,setMessage] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
             const response = await fetch('http://localhost:3000/users/register' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,email,password }),
    });
    const data = await response.json();
    if (response.ok){
        setMessage('Registration successful')
        setName('');
        setEmail('');
        setPassword('');
    }else{
        setMessage(data.error || 'Registration failed')
    }
        }catch(error){
            console.error('Error:',error);
            setMessage('Could not connect to server');
        }
};
return(
    <div className ="form-container">
        <form className='register' onSubmit={handleSubmit}>
            <table>
            <tr>
                <td>
                    Username :
                </td>
                <td>
                    <input type="text" 
                    className='uname' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                </td>
            </tr>
            <tr>
                <td>
                    Email :
                </td>
                <td>
                    <input type="email" className='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required/>
                </td>
            </tr>
            <tr>
                <td> 
                    Password : 
                </td>
                <td>
                    <input type="text" className='pass'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required/>
                </td>
            </tr>
            <tr>
                <td>
                    <button type='submit'>Sign Up</button>
                </td>
            </tr>
            </table>
        </form>
        {message && <p style={{ textAlign: 'center', marginTop: '10px' }}>{message}</p>}
    </div>
)
}
export default Register
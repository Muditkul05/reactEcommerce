import './Login.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Login (){
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError] = useState('');
    const [ isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        setError('');

        if(!email || !password){
            setError('Please fill both the fields!!')
            return;
        }
    
    try{
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/users/login',{
            method : 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({email,password}),
        });
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || 'Invalid Credentials');
        }
        localStorage.setItem('token', data.token);
        console.log('Logging in with:', {email,password});
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate('/home');
    }
    catch(err){
        setError('Invalid Credentials');
    }finally{
        setIsLoading(false);
    }
};

    return(
        
        <form onSubmit={handleLogin}>
            {error && <div className="error-message">{error}</div>}
        <table className='Login-table' >
            <tbody>
            <tr>
            <td>Email :</td>
            <td><input type = "email" 
                className='text-Uname'
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}/></td>
            </tr>
            <tr>
            <td>Password:</td>
            <td><input type = "password"
                className='text-pass'
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}/></td>
            </tr>
            <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                <button className = "Login-button" type = 'submit' disabled = {isLoading}> {isLoading ? 'Logging in' : 'Login'}</button>
            </td>
            </tr>
            </tbody>
        </table>
        </form>
        
        
    );
}

export default Login;
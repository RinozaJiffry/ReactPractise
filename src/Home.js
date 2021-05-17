import {useState} from 'react';

const Home = () => {
    //let name = 'Rinoza';
    const [name, setName] = useState('Rinoza');

    const handleClick = () => {
      setName('Lucy');
    }

    return (  
        <div className = "home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick = {handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;
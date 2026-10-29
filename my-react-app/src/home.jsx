import Topbar from './Top_bar.jsx';
import './home.css';
import Carousel  from './carousel.jsx';
import Category from './category.jsx';
function Home(){
    return(
        <>
        <Topbar/>
        <Carousel/>
        <Category/>
        </>
    );
}
export default Home;
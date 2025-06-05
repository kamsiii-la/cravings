import './CSS/App.css'
import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import NavBar from "./components/NavBar.jsx";
import Favorites from "./pages/Favorites.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx"

function App() {

    const [favoriteFoods, setFavoriteFoods] = useState([]);

    useEffect(() => {
        const storedFoods = localStorage.getItem("craveFoods");

        if(storedFoods){
            setFavoriteFoods(JSON.parse(storedFoods))
        }
    }, []);

    useEffect(() => {
            localStorage.setItem("craveFoods", JSON.stringify(favoriteFoods))
    }, [favoriteFoods]);


    const removeFood = (indexFood) =>{
        setFavoriteFoods(prev => prev.filter((_, index) => index != indexFood))
    }



    function clearCravings(){
        setFavoriteFoods([])
    }

  return (
      <>
          <NavBar/>
          <main className="main-content">
              <Routes>
                  <Route path="/" element={<Home setFavoriteFoods={setFavoriteFoods}/>} />
                  <Route path="/favorites" element={
                  <Favorites
                      favoriteFoods={favoriteFoods}
                      clearCravings ={clearCravings}
                      removeFood = {removeFood}/>
                  }/>
                  <Route path="/about" element={<About/>} />
                  <Route path="/contacts" element={<Contacts/>}/>
              </Routes>
          </main>

      </>
  );
}

export default App

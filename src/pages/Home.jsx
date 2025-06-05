import {useState} from "react";
import "../CSS/Home.css"

function Home({setFavoriteFoods}){

    const [inputFoods, setInputFoods] = useState("");
    const [message, setMessage] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    function addFoodsHandler(e){
        e.preventDefault();
        if(inputFoods.trim() === "") return

        setFavoriteFoods(prev => [...prev, inputFoods]);
        setInputFoods("");
        setMessage("Thank you for adding! Check the Cravings tab.");
        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    }

    return(
        <div className="home">
            <form onSubmit={addFoodsHandler}>
                <input
                    type="text"
                    placeholder="Add your crave foods..."
                    className="food-input"
                    value={inputFoods}
                    onChange={(e) => setInputFoods(e.target.value)}
                />
            <button type="submit" className="add-btn">Add</button>
            </form>

            <p className={`thanks-message ${showMessage ? 'visible' : ''}`}>
                {message}
            </p>

        </div>

    );

}

export default Home;
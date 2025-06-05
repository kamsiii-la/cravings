import "../CSS/Favorites.css"

function Favorites({favoriteFoods, clearCravings, removeFood}){

    const handleClearAll = () => {
            clearCravings();
    };


    return(
      <div className="favorites">
            <h2>{favoriteFoods.length === 0 ? "Your cravings are empty" : "Your Cravings"}</h2>

          <div className="foods-container">
              {favoriteFoods.map((food, index) =>(
                      <div className="index-food" key={index}>{food}
                        <button
                            className="remove-food"
                            onClick={() => removeFood(index)}>x
                        </button>
                      </div>
              ))}
          </div>

          <div className="clear-all-container">
              {favoriteFoods.length > 0 && (
                  <button  className="clear-btn" onClick={handleClearAll}>
                      Clear All
                  </button>
              )}
          </div>
      </div>
    );
}

export default Favorites;
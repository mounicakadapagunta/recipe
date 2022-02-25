
import './App.css';

export default function App() {

  return (
    <div className="App">
      <RecipeList />
    </div>
  );
}
function RecipeList() {
  const recipes = [


  ];
  return (
    <div className="recipe-list-container">
      {recipes.map((recipe, index) => (
        <Recipe recipe={recipe} id={index} />

      ))}
    </div>

  )
}
function Recipe({ recipe, id }) {
  return (
    <div key={id} className="recipe-container">
      <img className="recipe-image" src={recipe.image} alt={recipe.name} />
      <p className="recipe-name">{recipe.name}</p>
    </div>
  );
}


 //breaking down into parent and child is called HOC higher order components
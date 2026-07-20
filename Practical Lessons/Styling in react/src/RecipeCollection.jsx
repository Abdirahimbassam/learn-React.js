
// import React , {useState} from 'react'

// const RecipeCollection = () => {

//     const categories = ['all', 'breakfast', 'lunch', 'dinner', 'dessert'];

//     const [ selectCategories , setSelectedCategories ] = useState("all")

//     const recipes = [
//     {
//       id: 1,
//       title: 'Pancakes',
//       category: 'breakfast',
//       time: '20 min',
//       difficulty: 'easy',
//       image: '🥞',
//       ingredients: ['flour', 'eggs', 'milk', 'butter']
//     },
//     {
//       id: 2,
//       title: 'Pasta Carbonara',
//       category: 'dinner',
//       time: '30 min',
//       difficulty: 'medium',
//       image: '🍝',
//       ingredients: ['pasta', 'eggs', 'cheese', 'bacon']
//     },
//     {
//       id: 3,
//       title: 'Caesar Salad',
//       category: 'lunch',
//       time: '15 min',
//       difficulty: 'easy',
//       image: '🥗',
//       ingredients: ['lettuce', 'croutons', 'parmesan', 'chicken']
//     },
//     {
//       id: 4,
//       title: 'Chocolate Cake',
//       category: 'lunch',
//       time: '45 min',
//       difficulty: 'medium',
//       image: '🍰',
//       ingredients: ['flour', 'cocoa', 'sugar', 'eggs']
//     }
//   ];

//     const filteredRecipe = selectCategories == "all" ? recipes : recipes.filter(recipe => recipe.category === selectCategories)

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//         case "easy" :
//             return " text-green-600 bg-green-100 "
//         case "medium" :
//             return " text-yellow-600 bg-yellow-100 "
//         case "hard" :
//             return " text-red-600 bg-red-100 "
//         case "default" :
//             return " text-gray-600 bg-gray-100 "
//     }
//   }



//   return (

//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4">
        
//         <div className='max-w-4xl mx-auto'>
//             {/* header */}
//             <div className='text-center mb-12'>
//                 <h1 className='text-3xl font-bold text-gray-800'>My Recipe Collection</h1>
//                 <p className='text-gray-600'>Find your favorite recipes and start cooking! </p>
//             </div>

//                {/* categories */}

//             <div className='flex justify-center gap-4 mb-8 flex-wrap'>

//                 {
//                     categories.map((category) => (
//                         <button 
//                             key={category}
//                             className={`px-4 py-2 rounded-full capitalize cursor-pointer ${ selectCategories === category ? "bg-orange-500 text-white " : "bg-white text-gray-600 hover:bg-orange-100 "} `}
//                             onClick={()=> setSelectedCategories(category)}
//                         >
//                         {category}
//                         </button>
//                     ))
//                 }

//             </div>

//             {/* recipw grid */}
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>

//                 {
//                     filteredRecipe.map(recipe => (
//                         // main card div
//                     <div 
//                         key={recipe.id}
//                         className='bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-shadow'
//                         >
//                             {/* recip header */}
//                             <div className='p-6'>
//                                 <div className='flex justify-between items-center'>
//                                     <h2 className='text-xl text-gray-800 font-semibold'>{recipe.title}</h2>
//                                     <span className='text-4xl'>{recipe.image}</span>
//                                 </div>

//                                  {/* recipe details */}
//                                 <div className='flex gap-4 mb-4'>
//                                     <span className='text-gray-500 text-sm flex items-center'>⏰{recipe.time}</span>
//                                     <span className={`text-sm px-2 ppy-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>{recipe.difficulty}</span>
//                                 </div>

//                                 {/* ingredients */}
//                                 <div>
//                                     <h3 className='text-sm font-medium text-gray-700 mb-3'>Ingredients:</h3>
//                                     <div className='flex flex-wrap'>
//                                         {
//                                             recipe.ingredients.map((ingredient , index) => (
//                                                 <span key={index} className='px-2 py-1 bg-gray-100 rounded-full text-gray-600 text-sm'>{ingredient}</span>
//                                             )) 
//                                         }
//                                     </div>
                                 
//                                 </div>

//                             </div>

//                     </div>
//                     ))
//                 }

//             </div>

//             {/* empty */}
//             {
//                 filteredRecipe.length === 0 && (
//                     <div className='text-center py-12'>
//                         <p className='text-gray-500'>
//                             No recipes found in this category
//                         </p>
//                     </div>
//                 )
//             }

//         </div>

//     </div>

//   )
// }

// export default RecipeCollection
import ReactDOM from "react-dom/client";
import { restaurants } from "../mock/mock.js";
import { App } from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App data={restaurants}/>)

// root.render(
//   <ul>
//     <li id={restaurants[0].id}>
//       <h2> {restaurants[0].name}</h2>

//       <h3>Меню</h3>
//       <ul>
//         <li id={restaurants[0].menu[0].id}>
//           {" "}
//           {restaurants[0].menu[0].name}
//           <ul>
//             <li>Цена: {restaurants[0].menu[0].price}</li>
//             <li>
//               Ингридиенты: {restaurants[0].menu[0].ingredients[0]},{" "}
//               {restaurants[0].menu[0].ingredients[1]}
//             </li>
//           </ul>
//         </li>
//         <li id={restaurants[0].menu[1].id}>
//           {" "}
//           {restaurants[0].menu[1].name}
//           <ul>
//             <li>Цена: {restaurants[0].menu[1].price}</li>
//             <li>Ингридиенты: {restaurants[0].menu[1].ingredients[0]}</li>
//           </ul>
//         </li>
//         <li id={restaurants[0].menu[2].id}>
//           {" "}
//           {restaurants[0].menu[2].name}
//           <ul>
//             <li>Цена: {restaurants[0].menu[2].price}</li>
//             <li>
//               Ингридиенты: {restaurants[0].menu[2].ingredients[0]},{" "}
//               {restaurants[0].menu[2].ingredients[1]}
//             </li>
//           </ul>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li id={restaurants[0].reviews[0].id}>
//           {restaurants[0].reviews[0].user}
//           <ul>
//             <li>{restaurants[0].reviews[0].text}</li>
//             <li>{restaurants[0].reviews[0].rating}</li>
//           </ul>
//         </li>
//         <li id={restaurants[0].reviews[1].id}>
//           {restaurants[0].reviews[1].user}
//           <ul>
//             <li>{restaurants[0].reviews[1].text}</li>
//             <li>{restaurants[0].reviews[1].rating}</li>
//           </ul>
//         </li>
//       </ul>
//     </li>

//     <li id={restaurants[1].id}>
//       <h2> {restaurants[1].name} </h2>

//       <h3>Меню</h3>
//       <ul>
//         <li id={restaurants[1].menu[0].id}>
//           {" "}
//           {restaurants[1].menu[0].name}
//           <ul>
//             <li>Цена: {restaurants[1].menu[0].price}</li>
//             <li>
//               Ингридиенты: {restaurants[1].menu[0].ingredients[0]},{" "}
//               {restaurants[1].menu[0].ingredients[1]},{" "}
//               {restaurants[1].menu[0].ingredients[2]}
//             </li>
//           </ul>
//         </li>
//         <li id={restaurants[1].menu[1].id}>
//           {" "}
//           {restaurants[1].menu[1].name}
//           <ul>
//             <li>Цена: {restaurants[1].menu[1].price}</li>
//             <li>
//               Ингридиенты: {restaurants[1].menu[1].ingredients[0]},{" "}
//               {restaurants[1].menu[1].ingredients[1]},{" "}
//               {restaurants[1].menu[1].ingredients[2]},{" "}
//               {restaurants[1].menu[1].ingredients[3]}{" "}
//             </li>
//           </ul>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li id={restaurants[1].reviews[0].id}>
//           {restaurants[1].reviews[0].user}
//           <ul>
//             <li>{restaurants[1].reviews[0].text}</li>
//             <li>{restaurants[1].reviews[0].rating}</li>
//           </ul>
//         </li>
//         <li id={restaurants[1].reviews[1].id}>
//           {restaurants[1].reviews[1].user}
//           <ul>
//             <li>{restaurants[1].reviews[1].text}</li>
//             <li>{restaurants[1].reviews[1].rating}</li>
//           </ul>
//         </li>
//         <li id={restaurants[1].reviews[2].id}>
//           {restaurants[1].reviews[2].user}
//           <ul>
//             <li>{restaurants[1].reviews[2].text}</li>
//             <li>{restaurants[1].reviews[2].rating}</li>
//           </ul>
//         </li>
//       </ul>
//     </li>

//     <li id={restaurants[2].id}>
//       <h2> {restaurants[2].name} </h2>

//       <h3>Меню</h3>
//       <ul>
//         <li id={restaurants[2].menu[0].id}>
//           {" "}
//           {restaurants[2].menu[0].name}
//           <ul>
//             <li>Цена: {restaurants[2].menu[0].price}</li>
//             <li>Ингридиенты: {restaurants[2].menu[0].ingredients[0]}</li>
//           </ul>
//         </li>
//         <li id={restaurants[2].menu[1].id}>
//           {" "}
//           {restaurants[2].menu[1].name}
//           <ul>
//             <li>Цена: {restaurants[2].menu[1].price}</li>
//             <li>
//               Ингридиенты: {restaurants[2].menu[1].ingredients[0]},{" "}
//               {restaurants[2].menu[1].ingredients[1]}{" "}
//             </li>
//           </ul>
//         </li>

//         <li id={restaurants[2].menu[2].id}>
//           {" "}
//           {restaurants[2].menu[2].name}
//           <ul>
//             <li>Цена: {restaurants[2].menu[2].price}</li>
//             <li>Ингридиенты: {restaurants[2].menu[2].ingredients[0]} </li>
//           </ul>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li id={restaurants[2].reviews[0].id}>
//           {restaurants[2].reviews[0].user}
//           <ul>
//             <li>{restaurants[2].reviews[0].text}</li>
//             <li>{restaurants[2].reviews[0].rating}</li>
//           </ul>
//         </li>
//       </ul>
//     </li>

//     <li id={restaurants[3].id}>
//       <h2> {restaurants[3].name} </h2>

//       <h3>Меню</h3>
//       <ul>
//         <li id={restaurants[3].menu[0].id}>
//           {" "}
//           {restaurants[3].menu[0].name}
//           <ul>
//             <li>Цена: {restaurants[3].menu[0].price}</li>
//             <li>Ингридиенты: {restaurants[3].menu[0].ingredients[0]}</li>
//           </ul>
//         </li>
//         <li id={restaurants[3].menu[1].id}>
//           {" "}
//           {restaurants[3].menu[1].name}
//           <ul>
//             <li>Цена: {restaurants[3].menu[1].price}</li>
//             <li>
//               Ингридиенты: {restaurants[3].menu[1].ingredients[0]},{" "}
//               {restaurants[3].menu[1].ingredients[1]}{" "}
//             </li>
//           </ul>
//         </li>
//       </ul>
//       <h3>Отзывы</h3>
//       <ul>
//         <li id={restaurants[3].reviews[0].id}>
//           {restaurants[3].reviews[0].user}
//           <ul>
//             <li>{restaurants[3].reviews[0].text}</li>
//             <li>{restaurants[3].reviews[0].rating}</li>
//           </ul>
//         </li>
//         <li id={restaurants[3].reviews[0].id}>
//           {restaurants[3].reviews[1].user}
//           <ul>
//             <li>{restaurants[3].reviews[1].text}</li>
//             <li>{restaurants[3].reviews[1].rating}</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//   </ul>
// );

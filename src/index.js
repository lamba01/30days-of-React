// index.js

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")}>
//         Blue
//       </button>
//     </>
//   );
// }

// useState
// function App() {
//   // declaring state
//   const [state, setState] = useState(0);
//   const [color, Setcolor] = useState("red");

//   const backgroundColor = {
//     color,
//   };
//   return (
//     <div style={backgroundColor} className="App">
//       <h1>{state} </h1>
//       <button onClick={() => setState(state + 1)}>add</button>
//       <button onClick={() => setState(state - 1)}>minus</button>
//       <button onClick={() => Setcolor("blue")}>color change</button>
//     </div>
//   );
// }

// forms
// function MyForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   );
// }

// textarea
// function MyForm() {
//   const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//   );

//   const handleChange = (event) => {
//     setTextarea(event.target.value);
//   };

//   return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   );
// }

// select form element
// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value);
//   };

//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   );
// }

// React hooks
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <div>
//       <h1>My favorite color is {color}!</h1>
//       <button type="button" onClick={() => setColor("blue")}>
//         Blue
//       </button>
//       <button type="button" onClick={() => setColor("red")}>
//         Red
//       </button>
//       <button type="button" onClick={() => setColor("pink")}>
//         Pink
//       </button>
//       <button type="button" onClick={() => setColor("green")}>
//         Green
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(<FavoriteColor />, document.getElementById("root"));

// useEffect
// import { useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<Counter />);

// event handlers
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         padding: "20px",
//         backgroundColor: isHovered ? "lightgray" : "white",
//       }}
//     >
//       {isHovered ? "Mouse is over!" : "Mouse is out!"}
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// getting data from input
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const [firstName, setFirstName] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setFirstName(value);
//   };

//   return (
//     <div className="App">
//       <label htmlFor="firstName">First Name: </label>
//       <input
//         type="text"
//         id="firstName"
//         name="firstName"
//         placeholder="First Name"
//         value={firstName}
//         onChange={handleChange}
//       />
//       <h1>{firstName}</h1>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     country: "",
//     title: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Here is where you could connect to a backend API to send the data to the database
//   };

//   const { firstName, lastName, title, country } = formData;

//   return (
//     <div className="App">
//       <h3>Add Student</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="country"
//             placeholder="Country"
//             value={country}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={title}
//             onChange={handleChange}
//           />
//         </div>

//         <button className="btn btn-success">Submit</button>
//       </form>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// index.js
// import React, { Component } from "react";
// import {createRoot} from "react-dom/client";

// const options = [
//   {
//     value: "",
//     label: "-- Select Country--",
//   },
//   {
//     value: "Finland",
//     label: "Finland",
//   },
//   {
//     value: "Sweden",
//     label: "Sweden",
//   },
//   {
//     value: "Norway",
//     label: "Norway",
//   },
//   {
//     value: "Denmark",
//     label: "Denmark",
//   },
//   {
//     value: "Belarus",
//     label: "Belarus",
//   },
// ];

// // mapping the options to list(array) of JSX options

// const selectOptions = options.map(({ value, label }) => (
//   <option value={value}> {label}</option>
// ));

// class App extends Component {
//   // declaring state
//   state = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     tel: "",
//     dateOfBirth: "",
//     favoriteColor: "",
//     weight: "",
//     gender: "",
//     file: "",
//     bio: "",
//     skills: {
//       html: false,
//       css: false,
//       javascript: false,
//     },
//     touched: {
//       firstName: false,
//       lastName: false,
//     },
//   };
//   handleChange = (e) => {
//     /*
//      we can get the name and value like: e.target.name, e.target.value
//     Wwe can also destructure name and value from e.target
//     const name = e.target.name
//     const value = e.target.value
//     */
//     const { name, value, type, checked } = e.target;
//     /*
//     [variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
//     */

//     if (type === "checkbox") {
//       this.setState({
//         skills: { ...this.state.skills, [name]: checked },
//       });
//     } else if (type === "file") {
//       this.setState({ [name]: e.target.files[0] });
//     } else {
//       this.setState({ [name]: value });
//     }
//   };
//   handleBlur = (e) => {
//     const { name } = e.target;
//     this.setState({ touched: { ...this.state.touched, [name]: true } });
//   };
//   validate = () => {
//     // Object to collect error feedback and to display on the form
//     const errors = {
//       firstName: "",
//     };

//     if (
//       (this.state.touched.firstName && this.state.firstName.length < 3) ||
//       (this.state.touched.firstName && this.state.firstName.length > 12)
//     ) {
//       errors.firstName = "First name must be between 2 and 12";
//     }
//     return errors;
//   };
//   handleSubmit = (e) => {
//     /*
//       e.preventDefault()
//       stops the default behavior of form element
//       specifically refreshing of page
//       */
//     e.preventDefault();

//     const {
//       firstName,
//       lastName,
//       email,
//       country,
//       gender,
//       tel,
//       dateOfBirth,
//       favoriteColor,
//       weight,
//       bio,
//       file,
//       skills,
//     } = this.state;

//     const formattedSkills = [];
//     for (const key in skills) {
//       console.log(key);
//       if (skills[key]) {
//         formattedSkills.push(key.toUpperCase());
//       }
//     }
//     const data = {
//       firstName,
//       lastName,
//       email,
//       country,
//       gender,
//       tel,
//       dateOfBirth,
//       favoriteColor,
//       weight,
//       bio,
//       file,
//       skills: formattedSkills,
//     };
//     /*
//      the is the place where we connect backend api
//       to send the data to the database
//       */
//     console.log(data);
//   };

//   render() {
//     // accessing the state value by destrutcturing the state
//     // the noValidate attribute on the form is to stop the HTML5 built-in validation

//     const { firstName } = this.validate();
//     return (
//       <div className="App">
//         <h3>Add Student</h3>
//         <form onSubmit={this.handleSubmit} noValidate>
//           <div className="row">
//             <div className="form-group">
//               <label htmlFor="firstName">First Name </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={this.state.firstName}
//                 onChange={this.handleChange}
//                 onBlur={this.handleBlur}
//                 placeholder="First Name"
//               />{" "}
//               <br />
//               <small>{firstName}</small>
//             </div>
//             <div className="form-group">
//               <label htmlFor="lastName">Last Name </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={this.state.lastName}
//                 onChange={this.handleChange}
//                 placeholder="Last Name"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//                 placeholder="Email"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="tel">Telephone </label>
//             <input
//               type="tel"
//               name="tel"
//               value={this.state.tel}
//               onChange={this.handleChange}
//               placeholder="Tel"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="dateOfBirth">Date of birth </label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={this.state.dateOfBirth}
//               onChange={this.handleChange}
//               placeholder="Date of Birth"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="favoriteColor">Favorite Color</label>
//             <input
//               type="color"
//               id="favoriteColor"
//               name="favoriteColor"
//               value={this.state.favoriteColor}
//               onChange={this.handleChange}
//               placeholder="Favorite Color"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="weight">Weight </label>
//             <input
//               type="number"
//               id="weight"
//               name="weight"
//               value={this.state.weight}
//               onChange={this.handleChange}
//               placeholder="Weight in Kg"
//             />
//           </div>
//           <div>
//             <label htmlFor="country">Country</label> <br />
//             <select name="country" onChange={this.handleChange} id="country">
//               {selectOptions}
//             </select>
//           </div>

//           <div>
//             <p>Gender</p>
//             <div>
//               <input
//                 type="radio"
//                 id="female"
//                 name="gender"
//                 value="Female"
//                 onChange={this.handleChange}
//                 checked={this.state.gender === "Female"}
//               />
//               <label htmlFor="female">Female</label>
//             </div>
//             <div>
//               <input
//                 id="male"
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 onChange={this.handleChange}
//                 checked={this.state.gender === "Male"}
//               />
//               <label htmlFor="male">Male</label>
//             </div>
//             <div>
//               <input
//                 id="other"
//                 type="radio"
//                 name="gender"
//                 value="Other"
//                 onChange={this.handleChange}
//                 checked={this.state.gender === "Other"}
//               />
//               <label htmlFor="other">Other</label>
//             </div>
//           </div>

//           <div>
//             <p>Select your skills</p>
//             <div>
//               <input
//                 type="checkbox"
//                 id="html"
//                 name="html"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="html">HTML</label>
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 id="css"
//                 name="css"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="css">CSS</label>
//             </div>
//             <div>
//               <input
//                 type="checkbox"
//                 id="javascript"
//                 name="javascript"
//                 onChange={this.handleChange}
//               />
//               <label htmlFor="javascript">JavaScript</label>
//             </div>
//           </div>
//           <div>
//             <label htmlFor="bio">Bio</label> <br />
//             <textarea
//               id="bio"
//               name="bio"
//               value={this.state.bio}
//               onChange={this.handleChange}
//               cols="120"
//               rows="10"
//               placeholder="Write about yourself ..."
//             />
//           </div>

//           <div>
//             <input type="file" name="file" onChange={this.handleChange} />
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//         <h1>{firstName}</h1>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// Fetch API Axios
// import React, { useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const API_URL = "https://restcountries.com/v3.1/all";
//     axios
//       .get(API_URL)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const renderCountries = () => {
//     return data.map((country) => {
//       console.log(country);
//       console.log(country);
//       return (
//         <div>
//           <div>
//             <img src={country.flags.png} alt={country.name.common} />
//           </div>
//           <div>
//             <h1>{country.name.common}</h1>
//             <p>Capital: {country.capital}</p>
//             <p>Population: {country.population}</p>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Fetching Data Using Axios</h1>
//       <div>
//         <p>There are {data.length} countries in the API</p>
//         <div className="countries-wrapper">{renderCountries()}</div>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

// import React, { Component } from "react";
// import axios from "axios";
// import ReactDOM from "react-dom";
// import moment from "moment";
// import {
//   TiSocialLinkedinCircular,
//   TiSocialGithubCircular,
//   TiSocialTwitterCircular,
// } from "react-icons/ti";

// const Footer = () => (
//   <footer>
//     <h3>30 Days Of React</h3>
//     <div>
//       <TiSocialLinkedinCircular />
//       <TiSocialGithubCircular />
//       <TiSocialTwitterCircular />
//     </div>
//     <div>
//       <small> Copyright &copy; {new Date().getFullYear()} </small>
//     </div>
//   </footer>
// );

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Welcome to the world of Icons</h1>
//         <Footer />
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// importing react icons
// import React from "react";
// // import axios from "axios";
// import ReactDOM from "react-dom";
// // import moment from "moment";
// import {
//   TiSocialLinkedinCircular,
//   TiSocialGithubCircular,
//   TiSocialTwitterCircular,
// } from "react-icons/ti";

// const Footer = () => (
//   <footer>
//     <h3>30 Days Of React</h3>
//     <div>
//       <TiSocialLinkedinCircular />
//       <TiSocialGithubCircular />
//       <TiSocialTwitterCircular />
//     </div>
//     <div>
//       <small> Copyright &copy; {new Date().getFullYear()} </small>
//     </div>
//   </footer>
// );

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Welcome to the world of Icons</h1>
//       <Footer />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// moment importing for dates
// import React from "react";
// import { createRoot } from "react-dom/client";
// import moment from "moment";
// const App = () => {
//   return (
//     <div className="App">
//       <h1>How to use moment</h1>
//       <p>This challenge was started {moment("2020-10-01").fromNow()}</p>
//       <p>The challenge will be over in {moment("2020-10-30").fromNow()}</p>
//       <p>Today is {moment(new Date()).format("MMMM DD, YYYY HH:mm")}</p>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

// routers in react
// import React from "react";
// import {
//   BrowserRouter,
//   Route,
//   NavLink,
//   Switch,
//   Redirect,
//   Prompt,
//   withRouter,
// } from "react-router-dom";

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <h1>React Router DOM</h1>
//       </div>
//     </Router>
//   );
// };

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/layout";
// import Home from "./pages/home";
// import Blogs from "./pages/blog";
// import Contact from "./pages/contact";
// import NoPage from "./pages/nopage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

// Fetch API Axios
// import React, { useState, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const API_URL = "https://api.thecatapi.com/v1/breeds";
//     axios
//       .get(API_URL)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const renderCats = () => {
//     return data.map((cat) => {
//       console.log(cat);
//       return (
//         <div>
//           <div>
//             <h1>{cat.name}</h1>
//             <p>Description: {cat.description}</p>
//             <p>Origin: {cat.origin}</p>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Fetching Data Using Axios</h1>
//       <div>
//         <p>There are {data.length} cats in the API</p>
//         <div className="countries-wrapper">{renderCats()}</div>
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

// React hooks
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   // Declaring new state variable
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <h1>{count} </h1>
//       <button onClick={() => setCount(count + 1)}>Add One</button>
//       <button onClick={() => setCount(count - 1)}>Remove One</button>
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   // Declaring new state variable
//   const [count, setCount] = useState(0);
//   const addOne = () => {
//     let value = count + 1;
//     setCount(value);
//   };
//   const minusOne = () => {
//     let value = count - 1;
//     setCount(value);
//   };
//   return (
//     <div className="App">
//       <h1>{count} </h1>
//       <button onClick={addOne}>Add One</button>{" "}
//       <button onClick={minusOne}>Minus One</button>
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// const App = () => {
//   // declaring state
//   const url =
//     "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";

//   const [image, setImage] = useState(url);

//   const changeAnimal = () => {
//     let dogURL =
//       "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
//     let catURL =
//       "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
//     let result = image === catURL ? dogURL : catURL;
//     setImage(result);
//   };

//   return (
//     <div className="App">
//       <h1>30 Days Of React</h1>
//       <div className="animal">
//         <img src={image} alt="animal" />
//       </div>

//       <button onClick={changeAnimal} class="btn btn-add">
//         Change
//       </button>
//     </div>
//   );
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red",
//   });

//   const updateColor = () => {
//     setCar((previousState) => {
//       return { ...previousState, color: "blue" };
//     });
//   };
//   const updateYear = () => {
//     setCar((previousState) => {
//       return { ...previousState, year: 2000 };
//     });
//   };

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button type="button" onClick={updateColor}>
//         Blue
//       </button>
//       <button onClick={updateYear}>Update year</button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer />);

// context hook
// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component1 />);

// to get input from form
// import React, { useRef } from "react";
// import ReactDOM from "react-dom";

// const App = (props) => {
//   const ref = useRef(null);
//   const onClick = () => {
//     let value = ref.current.value;
//     alert(value);
//   };
//   return (
//     <div className="App">
//       <h1>How to use data from uncontrolled input using useRef</h1>
//       <input type="text" ref={ref} />
//       <br />
//       <button onClick={onClick}>Get Input Data</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// import React, { useRef } from "react";
// import { createRoot } from "react-dom/client";

// const App = () => {
//   const ref = useRef(null);

//   const onClick = () => {
//     let value = ref.current.value;
//     alert(value);
//   };

//   return (
//     <div className="App">
//       <h1>How to use data from uncontrolled input using useRef</h1>
//       <input type="text" ref={ref} />
//       <br />
//       <button onClick={onClick}>Get Input Data</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

import React, { useRef } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const ref = useRef(null);
  const onClick = () => {
    let content = ref.current.textContent;
    alert(content);
    console.log(content);
  };
  return (
    <div className="App">
      <h1 ref={ref}>How to getting content from the DOM tree</h1>
      <button onClick={onClick}>Getting Content</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

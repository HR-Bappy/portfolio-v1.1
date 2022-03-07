import Layout from "./Components/Layout";
import './assets/css/hr.css'
import './assets/css/page.css'
// ..
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

function App() {


  useEffect(() => {
    const cursor = document.querySelector(".cursor");

// Attaching Event listner to follow cursor
document.addEventListener("mousemove", (e) => {
	cursor.setAttribute("style", "top: "+(e.pageY - 40)+"px; left:"+(e.pageX - 40)+"px;");
});


// ON CLICK ADD/REMOVE CLASS ".expend"
document.addEventListener("click", () => {
	cursor.classList.add("expend");
	setTimeout(() => {
		cursor.classList.remove("expend");
	}, 500);
});
  },[])

  return (
    <Router>
      <div class="cursor"></div>
      <Layout></Layout>
    </Router>
  );
}

export default App;

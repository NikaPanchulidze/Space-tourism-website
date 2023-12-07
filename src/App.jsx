import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Destination from "./pages/Destination"
import PlanetItem from "./components/PlanetItem"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="destination" element={<Destination />}>
          <Route index element={<Navigate replace to="moon" />} />
          <Route path=":name" element={<PlanetItem />} />
        </Route>
        <Route path="crew" element={
            <>
              <Navigate replace to="?index=0" />
              <Crew />
            </>
          } />
        <Route path="technology" element={
            <>
              <Navigate replace to="?index=0" />
              <Technology />
            </>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
import CartContainer from "./Component/CartContainer";
import GlobalContext from "./Component/Context";
import Navbar from "./Component/Navbar";

const App = () => {

  return (
    <GlobalContext>
      <Navbar />
      <CartContainer />
    </GlobalContext>
  )
}

export default App;
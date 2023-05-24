import { Provider } from "react-redux";
import Layout from "./components/Layout";
import { store } from "./store/store";
import { AppTheme } from "./theme/AppTheme";


function App() {

  return (
    <AppTheme>
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    </AppTheme>
  )
}

export default App;

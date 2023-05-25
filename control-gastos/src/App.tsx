import Layout from "./modules/core/layout/Layout"
import AppTheme from "./modules/core/theme/AppTheme"
import { Provider } from 'react-redux';
import { store } from "./modules/shared/store/store";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <AppTheme>
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    </AppTheme>
  )
}

export default App

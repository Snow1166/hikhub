import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { connect, Provider } from "react-redux";
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Monitoring from './Components/Monitoring/Monitoring'
import store from './redux/store'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <section>
              <Routes>
                <Route exact path="/" element={<Navigate to="/monitoring" />} />
                <Route path='/profile/*' element={<Monitoring />} />
                <Route path='/monitoring/*' element={<Monitoring />} />
                <Route path='/setting-device/*' element={<Monitoring />} />
                <Route path='/setting/*' element={<Monitoring />} />
                <Route path='*' element={<div>404 NOT FOUND</div>} />
              </Routes>
            </section>
          </div>
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;

{/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */}
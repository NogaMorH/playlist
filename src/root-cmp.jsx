import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./cmps/app-header";
import routes from './routes'
import './assets/styles/main.scss'

function App() {
    return (
        <div className='app'>
            <AppHeader />
            <main className='container'>
                <Routes>
                    {routes.map(route => {
                        const nestedRoute = route.nestedRoute

                        return (
                            <Route key={route.path} exact={true}
                                element={route.component} path={route.path} >

                                {nestedRoute &&
                                    <Route key={nestedRoute.path} exact={true}
                                        element={nestedRoute.component} path={nestedRoute.path} />
                                }
                            </Route>)
                    })}
                </Routes>
            </main>
        </div>
    )
}

export default App;

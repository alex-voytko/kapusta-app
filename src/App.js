import AppBar from './components/AppBar';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const AuthorizationView = lazy(() => import('./views/AuthorizationView'));
const HomeView = lazy(() => import('./views/HomeView'));
const ReportsView = lazy(() => import('./views/ReportsView'));
function App() {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<p>...Loading</p>}>
                <Switch>
                    <Route exact path="/home">
                        <HomeView />
                    </Route>

                    <Route path="/authorization">
                        <AuthorizationView />
                    </Route>
                    <Route path="/reports">
                        <ReportsView />
                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
}
export default App;

import AppBar from './components/AppBar';
import { useSelector, useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { authSelectors, authOperations } from './redux/auth';

const AuthorizationView = lazy(() => import('./views/AuthorizationView'));
const HomeView = lazy(() => import('./views/HomeView'));
const ReportsView = lazy(() => import('./views/ReportsView'));
function App() {
    const isAuth = useSelector(authSelectors.getIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);
    return (
        <div>
            <AppBar />
            <Suspense fallback={<p>...Loading</p>}>
                {isAuth ? (
                    <Switch>
                        <Route exact path="/home">
                            <HomeView />
                        </Route>
                        <Route path="/reports">
                            <ReportsView />
                        </Route>
                        <Redirect to="/home" />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/authorization">
                            <AuthorizationView />
                        </Route>
                        <Redirect to="/authorization" />
                    </Switch>
                )}
            </Suspense>
        </div>
    );
}
export default App;

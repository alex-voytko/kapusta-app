import AppBar from './components/AppBar';
import Container from './components/Container';
import AuthorizationView from './views/AuthorizationView';
import HomeView from './views/HomeView';
import ReportsView from './views/ReportsView';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <AppBar />
            <Container>
                <AuthorizationView />
            </Container>
        </>
    );
};

export default App;

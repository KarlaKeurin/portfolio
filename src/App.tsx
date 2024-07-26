import './App.scss';
import {
  Header,
  HomePage,
  AboutPage,
  ProjectsPage,
  ContactPage,
} from './pages';

function App() {
  return (
    <main>
      <Header />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}

export default App;

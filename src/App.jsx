import Header from './components/Header';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Header />
      <main>
        <Hero />
        <MenuBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;

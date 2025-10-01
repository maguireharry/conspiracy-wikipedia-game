import React from 'react';
import Header from './components/Header';
import TheoryGenerator from './components/TheoryGenerator';
import EducationalSidebar from './components/EducationalSidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black matrix-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 order-2 lg:order-1">
            <TheoryGenerator />
          </div>
          <aside className="lg:sticky lg:top-24 lg:h-fit order-1 lg:order-2 lg:w-80">
            <EducationalSidebar />
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
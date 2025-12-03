import { useState } from "react";
import Home from "./Home";
import CloneDetail from "./CloneDetail";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'detail'>('home');
  const [selectedCloneId, setSelectedCloneId] = useState<string | null>(null);

  const handleSelectClone = (id: string) => {
    setSelectedCloneId(id);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedCloneId(null);
  };

  return (
    <>
      {currentView === 'home' ? (
        <Home onSelectClone={handleSelectClone} />
      ) : (
        selectedCloneId && <CloneDetail cloneId={selectedCloneId} onBack={handleBack} />
      )}
    </>
  );
}
import { useState } from "react";
import Home from "./Home";
import CloneDetail from "./CloneDetail";
import CognitiveMapPage from "./CognitiveMapPage";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'cognitive-map'>('home');
  const [selectedCloneId, setSelectedCloneId] = useState<string | null>(null);

  const handleSelectClone = (id: string) => {
    setSelectedCloneId(id);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };

  const handleViewCognitiveMap = (id: string) => {
    setSelectedCloneId(id);
    setCurrentView('cognitive-map');
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedCloneId(null);
  };

  const handleBackToDetail = () => {
    setCurrentView('detail');
  };

  return (
    <>
      {currentView === 'home' ? (
        <Home onSelectClone={handleSelectClone} />
      ) : currentView === 'detail' ? (
        selectedCloneId && (
          <CloneDetail
            cloneId={selectedCloneId}
            onBack={handleBack}
            onViewCognitiveMap={handleViewCognitiveMap}
          />
        )
      ) : currentView === 'cognitive-map' ? (
        selectedCloneId && (
          <CognitiveMapPage
            cloneId={selectedCloneId}
            onBack={handleBackToDetail}
          />
        )
      ) : null}
    </>
  );
}
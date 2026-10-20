import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { HeritageMap } from './components/HeritageMap';
import { HeritageListView } from './components/HeritageListView';
import { HeritageDetailView } from './components/HeritageDetailView';
import { QRCodeKitView } from './components/QRCodeKitView';
import { QuizView } from './components/QuizView';
import { ProjectMethodologyView } from './components/ProjectMethodologyView';
import { SourcesView } from './components/SourcesView';
import { HERITAGE_SITES } from './data/heritageData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedSiteId, setSelectedSiteId] = useState<string | null>(null);

  // Check URL parameters for direct deep-link or QR code scan (e.g. ?site=DS01)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const siteParam = params.get('site');
    if (siteParam) {
      const found = HERITAGE_SITES.find(s => s.id.toUpperCase() === siteParam.toUpperCase());
      if (found) {
        setSelectedSiteId(found.id);
        setCurrentTab('sites');
      }
    }
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    if (tab !== 'sites') {
      setSelectedSiteId(null);
    }
    // Update browser URL query without reload
    const url = new URL(window.location.href);
    url.searchParams.delete('site');
    window.history.pushState({}, '', url.toString());
  };

  const handleSelectSite = (siteId: string) => {
    setSelectedSiteId(siteId);
    setCurrentTab('sites');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL so sharing/QR linking works
    const url = new URL(window.location.href);
    url.searchParams.set('site', siteId);
    window.history.pushState({}, '', url.toString());
  };

  const handleOpenMapWithSite = (siteId: string) => {
    setSelectedSiteId(siteId);
    setCurrentTab('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F3] text-[#202A31] font-sans">
      <Navbar 
        currentTab={currentTab} 
        onSelectTab={handleSelectTab} 
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView 
            onSelectTab={handleSelectTab} 
            onSelectSite={handleSelectSite} 
          />
        )}

        {currentTab === 'map' && (
          <HeritageMap 
            onSelectSite={handleSelectSite}
            selectedSiteId={selectedSiteId}
          />
        )}

        {currentTab === 'sites' && (
          selectedSiteId ? (
            <HeritageDetailView
              siteId={selectedSiteId}
              onBackToMap={() => {
                setSelectedSiteId(null);
                setCurrentTab('map');
              }}
              onSelectSite={handleSelectSite}
            />
          ) : (
            <HeritageListView
              onSelectSite={handleSelectSite}
              onOpenMapWithSite={handleOpenMapWithSite}
            />
          )
        )}

        {currentTab === 'qr-kit' && (
          <QRCodeKitView onSelectSite={handleSelectSite} />
        )}

        {currentTab === 'quiz' && (
          <QuizView onSelectSite={handleSelectSite} />
        )}

        {currentTab === 'project' && (
          <ProjectMethodologyView />
        )}

        {currentTab === 'sources' && (
          <SourcesView />
        )}
      </main>

      <Footer 
        onSelectTab={handleSelectTab} 
        onSelectSite={handleSelectSite} 
      />
    </div>
  );
}

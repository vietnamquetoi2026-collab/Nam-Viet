import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  BookOpen, 
  QrCode, 
  Award, 
  FileText, 
  Menu, 
  X, 
  GraduationCap
} from 'lucide-react';

export type NavTab = 'home' | 'map' | 'sites' | 'qr-kit' | 'quiz' | 'project' | 'sources';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onSelectSite?: (siteId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Trang chủ', icon: <Compass className="w-4 h-4" /> },
    { id: 'map', label: 'Bản đồ số', icon: <MapPin className="w-4 h-4" /> },
    { id: 'sites', label: 'Hồ sơ di sản', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'qr-kit', label: 'Bộ mã QR', icon: <QrCode className="w-4 h-4" /> },
    { id: 'quiz', label: 'Trắc nghiệm', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'project', label: 'Phương pháp KHKT', icon: <Award className="w-4 h-4" /> },
    { id: 'sources', label: 'Nguồn tư liệu', icon: <FileText className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#123B56] text-white shadow-md border-b border-[#204e6e]">
      {/* Top Banner Notice */}
      <div className="bg-[#0b273b] text-xs py-1 px-4 text-center text-[#DDECF2] border-b border-[#1c4767] flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#D5A85C] animate-pulse"></span>
        <span>Dự án Khoa học Kỹ thuật Học sinh Trung học: Khám phá Lịch sử - Địa lý Hải Phòng bằng Công nghệ số</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#D5A85C] text-[#123B56] flex items-center justify-center shadow-md font-serif font-black text-xl group-hover:scale-105 transition-transform">
              HP
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider text-[#D5A85C] uppercase">
                Bản đồ Di sản số
              </div>
              <div className="text-base font-extrabold tracking-tight text-white group-hover:text-[#DDECF2] transition-colors leading-tight">
                HẢI PHÒNG HERITAGE
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#D5A85C] text-[#123B56] shadow font-semibold'
                      : 'text-gray-200 hover:text-white hover:bg-[#1a4a6c]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick('map')}
              className="bg-[#D5A85C] hover:bg-[#c4984d] text-[#123B56] font-semibold text-xs px-3.5 py-2 rounded-md shadow flex items-center gap-1.5 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Mở Bản đồ</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#1a4a6c] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d2e43] border-t border-[#1a4a6c] px-4 pt-2 pb-4 space-y-1 shadow-xl">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#D5A85C] text-[#123B56] font-semibold'
                    : 'text-gray-200 hover:text-white hover:bg-[#1a4a6c]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

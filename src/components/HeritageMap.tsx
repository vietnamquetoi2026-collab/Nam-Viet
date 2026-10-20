import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { HERITAGE_SITES, CATEGORIES, HeritageSite } from '../data/heritageData';
import { 
  MapPin, 
  Layers, 
  Navigation, 
  ArrowRight, 
  Download, 
  Search, 
  ExternalLink, 
  HelpCircle,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface HeritageMapProps {
  onSelectSite: (siteId: string) => void;
  selectedSiteId?: string | null;
}

export const HeritageMap: React.FC<HeritageMapProps> = ({ onSelectSite, selectedSiteId }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapLayer, setMapLayer] = useState<'streets' | 'satellite'>('streets');
  const [activeSite, setActiveSite] = useState<HeritageSite | null>(
    selectedSiteId ? HERITAGE_SITES.find(s => s.id === selectedSiteId) || null : HERITAGE_SITES[0]
  );
  const [showGuide, setShowGuide] = useState(false);

  // Filtered sites
  const filteredSites = HERITAGE_SITES.filter(site => {
    const matchCategory = activeCategory === 'all' || site.category === activeCategory;
    const matchSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Tile layers
  const tileLayers = {
    streets: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  };

  const tileAttributions = {
    streets: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    satellite: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Center of Hai Phong region (covering city center to Cat Ba & Thuy Nguyen)
      const map = L.map(mapContainerRef.current, {
        center: [20.85, 106.78],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      const baseLayer = L.tileLayer(tileLayers[mapLayer], {
        attribution: tileAttributions[mapLayer],
        maxZoom: 18,
      }).addTo(map);

      mapInstanceRef.current = map;
      (map as any)._baseLayer = baseLayer;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Handle Layer change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;
    if ((map as any)._baseLayer) {
      map.removeLayer((map as any)._baseLayer);
    }
    const newLayer = L.tileLayer(tileLayers[mapLayer], {
      attribution: tileAttributions[mapLayer],
      maxZoom: 18,
    }).addTo(map);
    (map as any)._baseLayer = newLayer;
  }, [mapLayer]);

  // Update Markers
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    filteredSites.forEach(site => {
      // Determine color
      let markerColor = '#123B56';
      if (site.category === 'architecture') markerColor = '#B45309';
      if (site.category === 'history') markerColor = '#B91C1C';
      if (site.category === 'religious') markerColor = '#047857';
      if (site.category === 'nature') markerColor = '#0E7490';

      const isCurrentActive = activeSite?.id === site.id;

      // Custom icon
      const customIcon = L.divIcon({
        className: 'custom-heritage-marker',
        html: `
          <div style="
            background-color: ${isCurrentActive ? '#D5A85C' : markerColor};
            color: ${isCurrentActive ? '#123B56' : '#ffffff'};
            width: ${isCurrentActive ? '38px' : '32px'};
            height: ${isCurrentActive ? '38px' : '32px'};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 11px;
            font-family: monospace;
            border: 3px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.35);
            transition: all 0.2s ease;
            transform: translate(-50%, -50%);
          ">
            ${site.id}
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -20]
      });

      const marker = L.marker([site.coordinates.lat, site.coordinates.lng], { icon: customIcon })
        .addTo(map);

      // Popup
      const popupContent = `
        <div style="font-family: system-ui, sans-serif; min-width: 200px; padding: 4px;">
          <div style="font-size: 11px; font-weight: 700; color: #D5A85C; text-transform: uppercase; margin-bottom: 2px;">
            ${site.id} &bull; ${site.categoryLabel}
          </div>
          <div style="font-size: 14px; font-weight: bold; color: #123B56; margin-bottom: 6px; line-height: 1.3;">
            ${site.name}
          </div>
          <div style="font-size: 12px; color: #555; margin-bottom: 8px;">
            ${site.district}
          </div>
          <div style="margin-bottom: 8px; border-radius: 4px; overflow: hidden; height: 90px;">
            <img src="${site.thumbnail}" alt="${site.name}" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
          <div style="display: flex; gap: 6px;">
            <a href="${site.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="
              display: inline-block;
              font-size: 11px;
              padding: 4px 8px;
              background-color: #DDECF2;
              color: #123B56;
              border-radius: 4px;
              text-decoration: none;
              font-weight: 600;
            ">Chỉ đường</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);

      marker.on('click', () => {
        setActiveSite(site);
      });

      markersRef.current[site.id] = marker;
    });
  }, [filteredSites, activeSite]);

  // Center on site click
  const focusOnSite = (site: HeritageSite) => {
    setActiveSite(site);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([site.coordinates.lat, site.coordinates.lng], 14, {
        duration: 1.2
      });
      const marker = markersRef.current[site.id];
      if (marker) {
        marker.openPopup();
      }
    }
  };

  // Export Map Data
  const exportCSV = () => {
    const headers = ['Mã di sản', 'Tên di sản', 'Phân loại', 'Xếp hạng', 'Địa chỉ', 'Quận huyện', 'Vĩ độ', 'Kinh độ', 'Liên kết Google Maps'];
    const rows = HERITAGE_SITES.map(s => [
      `"${s.id}"`,
      `"${s.name}"`,
      `"${s.categoryLabel}"`,
      `"${s.recognition}"`,
      `"${s.address}"`,
      `"${s.district}"`,
      s.coordinates.lat,
      s.coordinates.lng,
      `"${s.googleMapsUrl}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Ban_do_di_san_so_Hai_Phong_WGS84.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportGeoJSON = () => {
    const geojson = {
      type: 'FeatureCollection',
      features: HERITAGE_SITES.map(s => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [s.coordinates.lng, s.coordinates.lat]
        },
        properties: {
          id: s.id,
          name: s.name,
          category: s.categoryLabel,
          recognition: s.recognition,
          address: s.address,
          district: s.district
        }
      }))
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(geojson, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', 'Ban_do_di_san_so_Hai_Phong.geojson');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header & Description */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D5A85C] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Sản phẩm 1 của Dự án
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123B56] mt-1 font-serif">
              Bản đồ Di sản số TP. Hải Phòng
            </h1>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Hệ thống thông tin địa lý (GIS) số hóa 6 không gian lịch sử, văn hóa và thiên nhiên tiêu biểu trên địa bàn thành phố Hải Phòng.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="text-xs font-medium px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-1.5 shadow-sm"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#123B56]" />
              <span>Hướng dẫn dùng bản đồ</span>
            </button>
            <button
              onClick={exportCSV}
              className="text-xs font-medium px-3 py-2 rounded-lg bg-[#DDECF2] text-[#123B56] hover:bg-[#cde4ee] flex items-center gap-1.5"
              title="Tải tệp CSV phục vụ học tập môn Địa lý"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải CSV (GIS)</span>
            </button>
          </div>
        </div>

        {/* Guide banner */}
        {showGuide && (
          <div className="mt-4 p-4 rounded-xl bg-[#DDECF2] border border-[#bcdde9] text-xs text-[#123B56] grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <strong>1. Khám phá điểm ghim:</strong> Nhấp vào bất kỳ mã di sản (DS01–DS06) trên bản đồ để xem ảnh và thông tin vắn tắt.
            </div>
            <div>
              <strong>2. Đổi góc nhìn:</strong> Sử dụng nút "Vệ tinh" hoặc "Bản đồ đường" ở góc trên bản đồ để quan sát địa hình thực tế.
            </div>
            <div>
              <strong>3. Thực hành Địa lý:</strong> Sử dụng nút "Tải CSV" hoặc "GeoJSON" để nhập vào Google My Maps hoặc QGIS trong giờ học.
            </div>
          </div>
        )}
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 mb-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Categories Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-thin">
          {CATEGORIES.map(cat => {
            const isCatActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${
                  isCatActive
                    ? 'bg-[#123B56] text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Layer switch */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-56">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm theo tên hoặc quận..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#123B56]"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg p-0.5 border border-gray-200 shrink-0">
            <button
              onClick={() => setMapLayer('streets')}
              className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                mapLayer === 'streets' ? 'bg-white text-[#123B56] shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Phố
            </button>
            <button
              onClick={() => setMapLayer('satellite')}
              className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                mapLayer === 'satellite' ? 'bg-white text-[#123B56] shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Vệ tinh
            </button>
          </div>
        </div>
      </div>

      {/* Main Map & Detail Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Map Container */}
        <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative">
          {/* Map canvas */}
          <div 
            ref={mapContainerRef} 
            className="w-full h-[520px] sm:h-[580px] z-10"
            style={{ minHeight: '480px' }}
          />

          {/* Map Footer Note */}
          <div className="p-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Tọa độ chuẩn:</span>
              <span>WGS-84 (GPS Quốc tế) &bull; Dữ liệu cập nhật 18/10/2026</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={exportGeoJSON}
                className="text-[#123B56] hover:underline flex items-center gap-1 font-medium"
              >
                <Download className="w-3 h-3" /> Xuất GeoJSON
              </button>
              <a
                href="https://www.google.com/maps/d/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#123B56] hover:underline flex items-center gap-1 font-medium"
              >
                <ExternalLink className="w-3 h-3" /> Mở My Maps
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar: Selected Site Card & Site List */}
        <div className="lg:col-span-4 space-y-4">
          {/* Active Site Spotlight Card */}
          {activeSite && (
            <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-[#D5A85C] relative">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#123B56] text-white">
                  {activeSite.id}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#DDECF2] text-[#123B56]">
                  {activeSite.categoryLabel}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#123B56] leading-tight mb-1">
                {activeSite.name}
              </h3>
              <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D5A85C]" />
                {activeSite.address}
              </p>

              <div className="h-36 rounded-xl overflow-hidden mb-3 relative group">
                <img 
                  src={activeSite.thumbnail} 
                  alt={activeSite.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2.5">
                  <span className="text-white text-xs font-medium">
                    {activeSite.district} &bull; {activeSite.recognitionRank}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                {activeSite.brief}
              </p>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectSite(activeSite.id)}
                  className="w-full bg-[#123B56] hover:bg-[#0e2f45] text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D5A85C]" />
                  <span>Xem Hồ Sơ Chi Tiết</span>
                </button>
                <a
                  href={activeSite.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-[#123B56] text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-gray-200"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Chỉ đường</span>
                </a>
              </div>
            </div>
          )}

          {/* Quick List of All Filtered Sites */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center justify-between">
              <span>Danh sách di sản ({filteredSites.length})</span>
              <span className="text-gray-400 font-normal">Nhấp để định vị</span>
            </div>

            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredSites.map(site => {
                const isSelected = activeSite?.id === site.id;
                return (
                  <button
                    key={site.id}
                    onClick={() => focusOnSite(site)}
                    className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#F7F7F3] border-[#123B56] shadow-xs'
                        : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                      <img src={site.thumbnail} alt={site.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-gray-200 text-gray-800">
                          {site.id}
                        </span>
                        <h4 className="text-xs font-bold text-gray-800 truncate">
                          {site.name}
                        </h4>
                      </div>
                      <div className="text-[11px] text-gray-500 truncate mt-0.5">
                        {site.district}
                      </div>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#D5A85C]' : 'text-gray-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

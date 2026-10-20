import React, { useState } from 'react';
import { HERITAGE_SITES, CATEGORIES, HeritageSite } from '../data/heritageData';
import { 
  BookOpen, 
  MapPin, 
  Search, 
  ArrowRight, 
  Compass, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface HeritageListViewProps {
  onSelectSite: (siteId: string) => void;
  onOpenMapWithSite: (siteId: string) => void;
}

export const HeritageListView: React.FC<HeritageListViewProps> = ({ 
  onSelectSite, 
  onOpenMapWithSite 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [query, setQuery] = useState<string>('');

  const filtered = HERITAGE_SITES.filter(s => {
    const matchCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchText = s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.district.toLowerCase().includes(query.toLowerCase()) ||
      s.id.toLowerCase().includes(query.toLowerCase()) ||
      s.brief.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchText;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
        <div className="text-xs font-bold uppercase tracking-wider text-[#D5A85C] flex items-center gap-1.5 mb-2">
          <BookOpen className="w-4 h-4" /> Danh Mục Hồ Sơ Số
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#123B56]">
          Kho Lưu Trữ 6 Di Sản Tiêu Biểu Hải Phòng
        </h1>
        <p className="text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
          Mỗi hồ sơ di sản bao gồm đầy đủ 9 phần theo cấu trúc chuẩn: Tiêu đề nhận diện, Lịch sử dấu mốc, Giá trị nổi bật, Hình ảnh tư liệu, Vị trí tọa độ, Thông tin tham quan, Câu hỏi gợi mở học tập, Nguồn tham khảo và Mã QR tra cứu.
        </p>

        {/* Filter controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-thin">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`text-xs px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === c.id
                    ? 'bg-[#123B56] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, quận huyện..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3.5 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#123B56]"
            />
          </div>
        </div>
      </div>

      {/* Grid of Dossier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(site => (
          <div
            key={site.id}
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
          >
            {/* Thumbnail */}
            <div className="h-52 overflow-hidden relative">
              <img
                src={site.thumbnail}
                alt={site.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="font-mono font-black text-xs px-2.5 py-1 rounded bg-[#123B56] text-white shadow">
                  {site.id}
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-white/90 text-[#123B56] backdrop-blur-xs shadow-xs">
                  {site.categoryLabel}
                </span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-400 text-[#123B56] shadow">
                  {site.recognitionRank}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#123B56] group-hover:text-amber-800 transition-colors leading-snug">
                  {site.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#D5A85C] shrink-0" />
                  <span>{site.district}</span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                  {site.brief}
                </p>

                {/* Values snippets */}
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-[11px] text-gray-600 space-y-1">
                  <div><strong>Tọa độ:</strong> {site.coordinates.lat.toFixed(4)}°N, {site.coordinates.lng.toFixed(4)}°E</div>
                  <div className="truncate"><strong>Xếp hạng:</strong> {site.recognition}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectSite(site.id)}
                  className="bg-[#123B56] hover:bg-[#0c283b] text-white text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Mở Hồ Sơ</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D5A85C]" />
                </button>
                <button
                  onClick={() => onOpenMapWithSite(site.id)}
                  className="bg-[#DDECF2] hover:bg-[#cde4ee] text-[#123B56] text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Xem Trên Bản Đồ</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

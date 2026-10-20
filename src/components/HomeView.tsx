import React, { useState } from 'react';
import { NavTab } from './Navbar';
import { HERITAGE_SITES, CATEGORIES, HeritageSite } from '../data/heritageData';
import { 
  Compass, 
  MapPin, 
  BookOpen, 
  QrCode, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  ExternalLink,
  Search,
  CheckCircle2,
  Share2
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onSelectSite: (siteId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, onSelectSite }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchKey, setSearchKey] = useState<string>('');

  const displayedSites = HERITAGE_SITES.filter(site => {
    const matchCat = filterCategory === 'all' || site.category === filterCategory;
    const matchText = site.name.toLowerCase().includes(searchKey.toLowerCase()) ||
      site.district.toLowerCase().includes(searchKey.toLowerCase()) ||
      site.id.toLowerCase().includes(searchKey.toLowerCase());
    return matchCat && matchText;
  });

  return (
    <div className="space-y-16 pb-12">
      {/* HERO SECTION */}
      <section className="relative bg-[#123B56] text-white overflow-hidden py-16 sm:py-24">
        {/* Decorative background grid & glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D5A85C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D5A85C]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0E7490]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDECF2]/15 border border-[#DDECF2]/30 text-[#D5A85C] text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#D5A85C]" />
              Dự án Khoa học Kỹ thuật Học sinh THPT
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight text-white leading-tight">
              Bản Đồ Di Sản Số <br />
              <span className="text-[#D5A85C]">Thành Phố Hải Phòng</span>
            </h1>

            {/* Subtitle / Core Motto */}
            <p className="mt-6 text-lg sm:text-xl text-[#DDECF2] font-medium italic leading-relaxed border-l-4 border-[#D5A85C] pl-4">
              “Mỗi địa danh là một câu chuyện. Mỗi hành trình khám phá là một cách để hiểu hơn về Hải Phòng.”
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              Khám phá không gian lịch sử, văn hóa và thiên nhiên Đất Cảng thông qua bản đồ số GIS tương tác, bộ hồ sơ khoa học đa phương tiện và hệ sinh thái mã QR tra cứu học đường.
            </p>

            {/* 2 Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectTab('map')}
                className="bg-[#D5A85C] hover:bg-[#c2964a] text-[#123B56] font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
              >
                <MapPin className="w-5 h-5 text-[#123B56]" />
                <span>Khám Phá Bản Đồ Số</span>
              </button>

              <button
                onClick={() => onSelectTab('sites')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl backdrop-blur-xs flex items-center gap-2.5 transition-all"
              >
                <BookOpen className="w-5 h-5 text-[#D5A85C]" />
                <span>Hồ Sơ 6 Di Sản Tiêu Biểu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="mt-14 border-t border-white/10 bg-[#0a2333]/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D5A85C] font-mono">06</div>
                <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider font-medium">Di sản số hóa chuẩn</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DDECF2] font-mono">04</div>
                <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider font-medium">Nhóm phân loại không gian</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">01</div>
                <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider font-medium">Di sản Thiên nhiên Thế giới (UNESCO)</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
                <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider font-medium">Mã QR & Tọa độ thực địa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Featured Heritage Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D5A85C] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Không gian Di sản
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#123B56] mt-1">
              Các Địa Điểm Di Sản Tiêu Biểu
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Hồ sơ số hóa khoa học gồm 6 địa danh đại diện cho chiều sâu lịch sử kháng chiến, tinh hoa kiến trúc và kỳ quan thiên nhiên thế giới tại Hải Phòng.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectTab('qr-kit')}
              className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-[#DDECF2] text-[#123B56] hover:bg-[#cde4ee] flex items-center gap-1.5 transition-colors"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Xem trọn bộ Mã QR</span>
            </button>
          </div>
        </div>

        {/* Filter and Search controls */}
        <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-thin">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setFilterCategory(c.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors whitespace-nowrap ${
                  filterCategory === c.id
                    ? 'bg-[#123B56] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm di sản..."
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#123B56]"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={site.thumbnail}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="font-mono font-extrabold text-xs px-2.5 py-1 rounded-md bg-[#123B56] text-white shadow">
                    {site.id}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/90 text-gray-800 backdrop-blur-xs shadow-xs">
                    {site.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-400 text-[#123B56] shadow">
                    {site.recognitionRank}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#123B56] group-hover:text-amber-800 transition-colors leading-snug">
                    {site.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#D5A85C] shrink-0" />
                    <span className="truncate">{site.district}</span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {site.brief}
                  </p>
                </div>

                {/* Footer Buttons */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectSite(site.id)}
                    className="flex-1 bg-[#123B56] hover:bg-[#0c283b] text-white text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <span>Xem Hồ Sơ Chi Tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D5A85C]" />
                  </button>
                  <a
                    href={site.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Mở trên Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Project Objectives & Pedagogical Value */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D5A85C] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Mục Tiêu Nghiên Cứu
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#123B56] leading-tight">
                Ứng Dụng Công Nghệ Số Trong Giáo Dục Di Sản Địa Phương
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dự án được xây dựng bởi nhóm học sinh lớp 10 Sử - Trường THPT Chuyên Trần Phú nhằm giải quyết khoảng cách giữa sách vở và thực địa, mang đến công cụ học tập trực quan cho các môn học <strong>Lịch sử</strong>, <strong>Địa lý</strong> và <strong>Giáo dục địa phương</strong>.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Bản đồ số hóa GIS chuẩn xác</h4>
                    <p className="text-xs text-gray-600">Định vị tọa độ thực địa, tích hợp các lớp bản đồ đường phố và vệ tinh trực quan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Hồ sơ di sản đa phương tiện</h4>
                    <p className="text-xs text-gray-600">Đối chiếu lịch sử, hình ảnh tư liệu, hướng dẫn tham quan và thuyết minh âm thanh.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Hạ tầng mã QR tra cứu di động</h4>
                    <p className="text-xs text-gray-600">Cho phép quét nhanh tại trường học, thư viện và di tích mà không cần cài đặt thêm ứng dụng.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => onSelectTab('project')}
                  className="bg-[#123B56] hover:bg-[#0c283b] text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <span>Xem Báo Cáo KHKT Chi Tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D5A85C]" />
                </button>
                <button
                  onClick={() => onSelectTab('quiz')}
                  className="bg-[#DDECF2] hover:bg-[#cde4ee] text-[#123B56] text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Làm Trắc Nghiệm Di Sản</span>
                </button>
              </div>
            </div>

            {/* How to use steps card */}
            <div className="lg:col-span-6 bg-[#F7F7F3] p-6 sm:p-8 rounded-3xl border border-gray-200">
              <h3 className="text-lg font-bold font-serif text-[#123B56] mb-4">
                Hướng Dẫn Sử Dụng Nền Tảng
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#123B56] text-[#D5A85C] font-bold text-sm flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Chọn di sản trên Bản đồ số</div>
                    <div className="text-xs text-gray-600 mt-0.5">
                      Xem vị trí địa lý, khoảng cách và mối liên hệ không gian giữa nội thành và các huyện đảo.
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#123B56] text-[#D5A85C] font-bold text-sm flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Đọc & Nghe thuyết minh hồ sơ</div>
                    <div className="text-xs text-gray-600 mt-0.5">
                      Khám phá các giá trị văn hóa, kiến trúc, mốc lịch sử và trả lời câu hỏi gợi mở của bài học.
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#123B56] text-[#D5A85C] font-bold text-sm flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Quét & Chia sẻ mã QR</div>
                    <div className="text-xs text-gray-600 mt-0.5">
                      In bộ mã QR để dán tại bảng tin câu lạc bộ lịch sử hoặc chia sẻ cho các bạn trong lớp.
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer footer */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D5A85C] shrink-0 mt-0.5" />
                <span>
                  <strong>Lưu ý học đường:</strong> Website được phát triển phục vụ học tập và nghiên cứu KHKT; không chứa quảng cáo thương mại hoặc thu thập dữ liệu cá nhân.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

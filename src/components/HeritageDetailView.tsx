import React, { useState, useEffect } from 'react';
import { HeritageSite, HERITAGE_SITES } from '../data/heritageData';
import { generateQRCodeDataUrl } from '../utils/qrCode';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Clock, 
  Ticket, 
  Compass, 
  HelpCircle, 
  BookOpen, 
  Share2, 
  Download, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  ShieldCheck, 
  Info, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  Printer
} from 'lucide-react';

interface HeritageDetailViewProps {
  siteId: string;
  onBackToMap: () => void;
  onSelectSite: (siteId: string) => void;
}

export const HeritageDetailView: React.FC<HeritageDetailViewProps> = ({ 
  siteId, 
  onBackToMap, 
  onSelectSite 
}) => {
  const site = HERITAGE_SITES.find(s => s.id === siteId) || HERITAGE_SITES[0];
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Generate QR Code for this site URL
  useEffect(() => {
    const siteUrl = `${window.location.origin}?site=${site.id}`;
    generateQRCodeDataUrl(siteUrl).then(url => {
      setQrCodeUrl(url);
    });
  }, [site.id]);

  // Handle Speech Narration (Audio Guide)
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [site.id]);

  const toggleAudioNarration = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ tính năng đọc âm thanh tự động.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      const speechText = `${site.name}. Mã hồ sơ ${site.id}. ${site.brief}. Về giá trị lịch sử: ${site.notableValues.historical}. Về giá trị kiến trúc và cảnh quan: ${site.notableValues.architectural}`;
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;

      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}?site=${site.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };

  const handleDownloadQR = () => {
    if (!qrCodeUrl) return;
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `Ma_QR_${site.id}_${site.name.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Find related sites
  const relatedSites = HERITAGE_SITES.filter(s => site.relatedSiteIds.includes(s.id));

  return (
    <div className="bg-[#F7F7F3] min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={onBackToMap}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-gray-200 text-[#123B56] text-sm font-semibold hover:bg-gray-50 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Bản đồ</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleAudioNarration}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors ${
                isPlayingAudio
                  ? 'bg-amber-600 text-white animate-pulse'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
              title="Nghe thuyết minh audio guide tự động"
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D5A85C]" />}
              <span>{isPlayingAudio ? 'Dừng đọc Audio' : 'Audio Guide'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50 shadow-xs transition-colors"
              title="Sao chép liên kết hồ sơ"
            >
              {copySuccess ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-[#123B56]" />}
              <span>{copySuccess ? 'Đã sao chép!' : 'Chia sẻ'}</span>
            </button>
          </div>
        </div>

        {/* SECTION A: Title & Identification */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          {/* Banner Hero */}
          <div className="relative h-64 sm:h-96 w-full">
            <img 
              src={site.bannerImage} 
              alt={site.name} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123B56] via-[#123B56]/50 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono font-black text-xs px-2.5 py-1 rounded bg-[#D5A85C] text-[#123B56]">
                  {site.id}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-white/20 backdrop-blur-xs text-white">
                  {site.categoryLabel}
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-400 text-[#123B56]">
                  {site.recognitionRank}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
                {site.name}
              </h1>
              {site.alternateName && (
                <p className="text-sm sm:text-base text-gray-200 italic mt-1">
                  Tên gọi khác: {site.alternateName}
                </p>
              )}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 mt-3">
                <MapPin className="w-4 h-4 text-[#D5A85C] shrink-0" />
                <span>{site.address}</span>
              </div>
            </div>
          </div>

          {/* Brief Summary & Quick Actions */}
          <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Khái lược nhận diện
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              {site.brief}
            </p>
            <div className="mt-4 p-3.5 rounded-xl bg-[#DDECF2] border border-[#b8d9e7] text-xs text-[#123B56] flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#123B56]" />
                <span><strong>Tình trạng xếp hạng:</strong> {site.recognition}</span>
              </div>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#123B56] hover:underline"
              >
                <span>Mở tọa độ GPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Content Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content: Sections B, C, D */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SECTION B: History & Timeline */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#123B56] text-[#D5A85C] flex items-center justify-center font-bold text-sm">
                  B
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#123B56] font-serif">
                    Lịch Sử Hình Thành & Dấu Mốc
                  </h2>
                  <p className="text-xs text-gray-500">Các giai đoạn phát triển đã được đối chiếu tư liệu</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-[#DDECF2] space-y-6">
                {site.historyTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#123B56] border-2 border-white group-hover:scale-125 transition-transform"></div>
                    <div className="inline-block text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#DDECF2] text-[#123B56] mb-1.5">
                      {item.period}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.event}
                    </p>
                    <div className="text-xs text-gray-400 mt-1 italic flex items-center gap-1">
                      <span>Nguồn đối chiếu:</span>
                      <span className="text-gray-600">{item.sourceNote}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION C: Notable Values */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#123B56] text-[#D5A85C] flex items-center justify-center font-bold text-sm">
                  C
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#123B56] font-serif">
                    Các Giá Trị Nổi Bật Của Di Sản
                  </h2>
                  <p className="text-xs text-gray-500">Đánh giá đa chiều theo tiêu chí di sản học</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    Giá trị Lịch sử
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {site.notableValues.historical}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Giá trị Kiến trúc - Nghệ thuật
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {site.notableValues.architectural}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Giá trị Văn hóa - Tín ngưỡng
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {site.notableValues.cultural}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-200/60">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-900 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                    Giá trị Địa lý - Cảnh quan & Sinh thái
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {site.notableValues.geographical}
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION D: Documentary Gallery */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#123B56] text-[#D5A85C] flex items-center justify-center font-bold text-sm">
                  D
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#123B56] font-serif">
                    Hình Ảnh Tư Liệu & Thực Địa
                  </h2>
                  <p className="text-xs text-gray-500">Tư liệu có ghi công nguồn và chú thích ảnh</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {site.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="group border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-gray-50 hover:shadow-md transition-shadow"
                    onClick={() => setSelectedImage(img.url)}
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={img.url} 
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                        Phóng to ảnh
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium text-gray-800 line-clamp-2">
                        {img.caption}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1 italic truncate">
                        Nguồn: {img.source}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION G: Learning Prompts for Students */}
            <div className="bg-gradient-to-br from-[#123B56] to-[#0c283b] text-white rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#D5A85C] text-[#123B56] flex items-center justify-center font-bold text-sm">
                  G
                </div>
                <div>
                  <h2 className="text-xl font-bold font-serif text-[#D5A85C]">
                    Câu Hỏi Gợi Mở Học Tập
                  </h2>
                  <p className="text-xs text-[#DDECF2]">Gợi ý nghiên cứu bài học môn Lịch sử - Địa lý địa phương</p>
                </div>
              </div>

              <div className="space-y-3">
                {site.learningPrompts.map((prompt, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/10 border border-white/15 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#D5A85C] text-[#123B56] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-100 leading-relaxed">
                      {prompt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION H: Verified Reference Sources */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#123B56] text-[#D5A85C] flex items-center justify-center font-bold text-sm">
                  H
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#123B56] font-serif">
                    Nguồn Tư Liệu Tham Khảo
                  </h2>
                  <p className="text-xs text-gray-500">Minh bạch hồ sơ lưu trữ và cơ quan thẩm quyền</p>
                </div>
              </div>

              <div className="space-y-3">
                {site.sources.map((src, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-800">
                        {src.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Cơ quan phát hành: <span className="font-medium text-gray-700">{src.publisher}</span> &bull; Ngày truy cập: {src.accessDate}
                      </p>
                    </div>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#123B56] hover:underline flex items-center gap-1 shrink-0 p-1.5 rounded-md hover:bg-gray-100"
                    >
                      <span>Mở link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Sections E, F, I + QR Code Kit */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* PRODUCT 3: Dynamic QR Code Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-[#D5A85C] text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold mb-3">
                <Sparkles className="w-3 h-3 text-[#D5A85C]" />
                SẢN PHẨM 3: MÃ QR DI SẢN
              </div>
              <h3 className="text-base font-bold text-[#123B56] mb-1">
                Quét Mã Tra Cứu Số
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Mã QR chuẩn W3C liên kết trực tiếp tới hồ sơ số {site.id}
              </p>

              {/* QR Image */}
              <div className="w-48 h-48 mx-auto bg-white p-2 rounded-xl border border-gray-200 shadow-inner flex items-center justify-center mb-4">
                {qrCodeUrl ? (
                  <img src={qrCodeUrl} alt={`QR Code ${site.name}`} className="w-full h-full object-contain" />
                ) : (
                  <div className="text-xs text-gray-400">Đang tạo mã QR...</div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleDownloadQR}
                  className="w-full bg-[#123B56] hover:bg-[#0c283b] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#D5A85C]" />
                  <span>Tải Ảnh Mã QR (In Ấn)</span>
                </button>
                <div className="text-[11px] text-gray-400">
                  Dành cho trường học in thẻ mica đặt tại di tích
                </div>
              </div>
            </div>

            {/* SECTION E: Spatial & Coordinates */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100 mb-4">
                <div className="w-6 h-6 rounded bg-[#123B56] text-white flex items-center justify-center text-xs font-bold">
                  E
                </div>
                <h3 className="text-base font-bold text-[#123B56]">
                  Vị Trí & Không Gian Địa Lý
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-gray-400 block mb-0.5">Địa chỉ hành chính:</span>
                  <span className="font-medium text-gray-800">{site.address}</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Tọa độ GPS (WGS-84):</span>
                  <span className="font-mono font-bold text-[#123B56]">
                    {site.coordinates.lat.toFixed(4)}°N, {site.coordinates.lng.toFixed(4)}°E
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5">Không gian kết nối:</span>
                  <span className="text-gray-600 leading-relaxed">
                    Thuộc {site.district}, trung tâm kết nối văn hóa và du lịch trọng điểm.
                  </span>
                </div>
              </div>

              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-[#DDECF2] hover:bg-[#cde3ed] text-[#123B56] text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Mở Google Maps Dẫn Đường</span>
              </a>
            </div>

            {/* SECTION F: Visiting Guidelines */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100 mb-4">
                <div className="w-6 h-6 rounded bg-[#123B56] text-white flex items-center justify-center text-xs font-bold">
                  F
                </div>
                <h3 className="text-base font-bold text-[#123B56]">
                  Thông Tin Khảo Sát & Tham Quan
                </h3>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800 block">Thời gian mở cửa:</span>
                    <span className="text-gray-600">{site.visitingInfo.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Ticket className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800 block">Giá vé tham khảo:</span>
                    <span className="text-gray-600">{site.visitingInfo.ticketPrice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-800 block">Phương tiện tiếp cận:</span>
                    <span className="text-gray-600">{site.visitingInfo.transportation}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <span className="font-bold text-gray-800 block mb-1.5">Quy tắc ứng xử khi viếng thăm:</span>
                  <ul className="space-y-1 text-gray-600">
                    {site.visitingInfo.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#D5A85C] font-bold">&bull;</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-[11px] text-gray-400 italic">
                  Ngày đối soát thực địa: {site.visitingInfo.verificationDate}
                </div>
              </div>
            </div>

            {/* SECTION I: Project Metadata */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-xs space-y-2">
              <div className="font-bold text-gray-700 flex items-center justify-between">
                <span>Hồ Sơ Kỹ Thuật (Nhóm Nghiên Cứu)</span>
                <span className="font-mono text-[#D5A85C] font-black">{site.id}</span>
              </div>
              <div className="text-gray-500">Ngày cập nhật: {site.lastUpdated}</div>
              <div className="text-gray-500">Mã hóa GIS: EPSG:4326 (WGS 84)</div>
              <div className="text-emerald-700 font-medium flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nội dung đã kiểm tra chéo nguồn văn bản</span>
              </div>
            </div>

            {/* Related Heritage Sites */}
            {relatedSites.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Di Sản Liên Quan Gần Kề
                </h4>
                <div className="space-y-2">
                  {relatedSites.map(rel => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectSite(rel.id)}
                      className="w-full text-left p-2.5 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-700">
                          {rel.id}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-gray-800 group-hover:text-[#123B56]">
                            {rel.name}
                          </div>
                          <div className="text-[11px] text-gray-400">{rel.district}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#D5A85C]" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-[90vh] relative">
              <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 px-3 py-1 bg-black/60 text-white rounded-md text-xs font-bold hover:bg-black"
              >
                Đóng [Esc]
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

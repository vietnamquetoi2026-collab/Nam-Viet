import React, { useState, useEffect } from 'react';
import { HERITAGE_SITES, HeritageSite } from '../data/heritageData';
import { generateQRCodeDataUrl } from '../utils/qrCode';
import { 
  QrCode, 
  Download, 
  Printer, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

interface QRCodeKitViewProps {
  onSelectSite: (siteId: string) => void;
}

export const QRCodeKitView: React.FC<QRCodeKitViewProps> = ({ onSelectSite }) => {
  const [qrMap, setQrMap] = useState<{ [siteId: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadAllQRs() {
      setIsLoading(true);
      const results: { [siteId: string]: string } = {};
      for (const site of HERITAGE_SITES) {
        const url = `${window.location.origin}?site=${site.id}`;
        results[site.id] = await generateQRCodeDataUrl(url);
      }
      setQrMap(results);
      setIsLoading(false);
    }
    loadAllQRs();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSingle = (site: HeritageSite) => {
    const dataUrl = qrMap[site.id];
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `QR_${site.id}_${site.name.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D5A85C]" />
            SẢN PHẨM 3 CỦA DỰ ÁN KHOA HỌC KỸ THUẬT
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#123B56]">
            Bộ Ấn Phẩm Mã QR Di Sản Số Hải Phòng
          </h1>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Hạ tầng liên kết số hóa kết nối hiện trường thực địa với hồ sơ di sản. Mỗi mã QR được mã hóa theo chuẩn W3C, cho phép bất kỳ điện thoại thông minh nào quét và truy cập hồ sơ tức thì mà không cần cài thêm phần mềm.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <button
            onClick={handlePrint}
            className="bg-[#123B56] hover:bg-[#0c283b] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4 text-[#D5A85C]" />
            <span>In Toàn Bộ Thẻ QR</span>
          </button>
        </div>
      </div>

      {/* Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 text-xs">
          <div className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Ứng dụng tại Trường THPT
          </div>
          <p className="text-gray-600 leading-relaxed">
            In ấn làm bảng tin CLB Lịch sử - Địa lý, góc học tập chuyên đề hoặc góc trải nghiệm văn hóa địa phương.
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 text-xs">
          <div className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            Ứng dụng trong Chuyến đi Khảo sát
          </div>
          <p className="text-gray-600 leading-relaxed">
            Học sinh mang theo bản in hoặc quét trực tiếp tại điểm dừng chân để làm bài thu hoạch môn học.
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 text-xs">
          <div className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            Trưng bày tại Gian hàng KHKT
          </div>
          <p className="text-gray-600 leading-relaxed">
            Giúp Ban giám khảo cuộc thi dùng điện thoại cá nhân quét trải nghiệm ngay tại bàn báo cáo.
          </p>
        </div>
      </div>

      {/* Grid of Printable QR Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HERITAGE_SITES.map((site) => {
          const qrDataUrl = qrMap[site.id];
          return (
            <div
              key={site.id}
              className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group p-6 text-center relative"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono font-black text-xs px-2.5 py-1 rounded bg-[#123B56] text-white">
                  {site.id}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#DDECF2] text-[#123B56]">
                  {site.categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#123B56] line-clamp-1 mb-1">
                {site.name}
              </h3>
              <p className="text-xs text-gray-500 mb-4 truncate">
                {site.district} &bull; {site.recognitionRank}
              </p>

              {/* QR Code Container */}
              <div className="w-48 h-48 mx-auto bg-gray-50 p-2.5 rounded-2xl border border-gray-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt={`Mã QR ${site.name}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-xs text-gray-400">Đang khởi tạo mã QR...</div>
                )}
              </div>

              <div className="text-[11px] font-mono text-gray-500 bg-gray-50 py-1.5 px-3 rounded-lg border border-gray-100 mb-5 truncate">
                {`${window.location.origin}?site=${site.id}`}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <button
                  onClick={() => handleDownloadSingle(site)}
                  className="bg-[#DDECF2] hover:bg-[#cde3ee] text-[#123B56] text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải ảnh PNG</span>
                </button>
                <button
                  onClick={() => onSelectSite(site.id)}
                  className="bg-[#123B56] hover:bg-[#0c283b] text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Mở Hồ Sơ</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D5A85C]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

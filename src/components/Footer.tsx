import React from 'react';
import { NavTab } from './Navbar';
import { HERITAGE_SITES } from '../data/heritageData';
import { MapPin, ShieldCheck, Mail, BookOpen, ExternalLink } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onSelectSite: (siteId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onSelectSite }) => {
  return (
    <footer className="bg-[#123B56] text-[#DDECF2] border-t border-[#1c4c6e] mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#D5A85C] text-[#123B56] font-bold font-serif flex items-center justify-center text-lg">
                HP
              </div>
              <span className="font-bold text-white text-base tracking-wide">
                BẢN ĐỒ DI SẢN SỐ HẢI PHÒNG
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#c3dbe6]">
              Dự án nghiên cứu Khoa học Kỹ thuật của nhóm học sinh lớp 10 Sử - Trường THPT Chuyên Trần Phú: Số hóa không gian lịch sử, văn hóa và thiên nhiên thành phố Hải Phòng phục vụ giáo dục địa phương.
            </p>
            <div className="p-3 bg-[#0d2a3e] rounded-lg border border-[#1b4a6b] text-xs text-amber-200 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D5A85C] shrink-0 mt-0.5" />
              <span>
                <strong>Tuyên bố trách nhiệm:</strong> Đây là sản phẩm học tập phi thương mại của học sinh THPT, không thay thế cổng thông tin chính thức của cơ quan quản lý di sản.
              </span>
            </div>
          </div>

          {/* Col 2: Heritage Sites */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D5A85C] mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> 6 Điểm Di sản Số
            </h4>
            <ul className="space-y-2 text-sm">
              {HERITAGE_SITES.map((site) => (
                <li key={site.id}>
                  <button
                    onClick={() => onSelectSite(site.id)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#1c4767] text-[#D5A85C] group-hover:bg-[#D5A85C] group-hover:text-[#123B56] transition-colors">
                      {site.id}
                    </span>
                    <span className="truncate">{site.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D5A85C] mb-4 flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Điều hướng Nhanh
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('map')}
                  className="hover:text-white transition-colors"
                >
                  Bản đồ tương tác GIS Hải Phòng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('qr-kit')}
                  className="hover:text-white transition-colors"
                >
                  Bộ ấn phẩm mã QR tra cứu (Sản phẩm 3)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('quiz')}
                  className="hover:text-white transition-colors"
                >
                  Trắc nghiệm kiến thức lịch sử - địa lý
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('project')}
                  className="hover:text-white transition-colors"
                >
                  Báo cáo phương pháp nghiên cứu KHKT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('sources')}
                  className="hover:text-white transition-colors"
                >
                  Thư mục nguồn tư liệu và quy chuẩn trích dẫn
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Project Info & Verification */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D5A85C] mb-4 flex items-center gap-1.5">
              <Mail className="w-4 h-4" /> Đóng góp & Kiểm chứng
            </h4>
            <p className="text-xs text-[#c3dbe6] leading-relaxed mb-3">
              Mọi góp ý về số liệu lịch sử, tọa độ hoặc tài liệu hình ảnh bổ sung xin vui lòng gửi về hòm thư nhóm nghiên cứu học sinh:
            </p>
            <div className="bg-[#0b273b] p-3 rounded text-xs font-mono text-[#D5A85C] break-all border border-[#1b4a6b] mb-3">
              vietnamquetoi2026@gmail.com
            </div>
            <div className="text-xs text-[#a0c5d6] space-y-1">
              <div>Đợt đối soát dữ liệu gần nhất: <strong>18/10/2026</strong></div>
              <div>Hệ quy chiếu: WGS-84 / VN-2000</div>
              <div>Nền tảng xuất bản số: AI Web Application</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#184463] bg-[#0c293d] py-4 text-xs text-center text-[#9bbecf]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2026 Dự án Khoa học Kỹ thuật Học sinh THPT: Bản đồ Di sản số Hải Phòng. Giấy phép Học thuật Mở (Creative Commons BY-NC 4.0).
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => onSelectTab('project')} className="hover:text-white underline">
              Quy trình nghiên cứu
            </button>
            <button onClick={() => onSelectTab('sources')} className="hover:text-white underline">
              Nguồn tư liệu
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

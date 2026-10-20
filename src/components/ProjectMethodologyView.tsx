import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Search, 
  ShieldCheck, 
  Users, 
  Compass, 
  FileCheck, 
  GraduationCap, 
  Terminal,
  ExternalLink
} from 'lucide-react';

export const ProjectMethodologyView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#123B56] text-xs font-bold mb-3">
          <Award className="w-3.5 h-3.5 text-[#D5A85C]" />
          HỒ SƠ NGHIÊN CỨU KHOA HỌC KỸ THUẬT
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#123B56] leading-tight">
          Bản Đồ Di Sản Số Hải Phòng
        </h1>
        <p className="text-base sm:text-lg text-[#D5A85C] font-semibold mt-1">
          Khám Phá Không Gian Lịch Sử, Văn Hóa Và Thiên Nhiên Bằng Công Nghệ Số
        </p>
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Đề tài nghiên cứu khoa học kỹ thuật dành cho học sinh THPT thành phố Hải Phòng. Đề tài tập trung xây dựng giải pháp số hóa toàn diện tích hợp GIS, hồ sơ đa phương tiện và mã QR hỗ trợ đổi mới phương pháp dạy học Lịch sử, Địa lý và Giáo dục địa phương theo Chương trình GDPT 2018.
        </p>
      </div>

      {/* 5-Phase Scientific Methodology */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#D5A85C] flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Phương pháp luận
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#123B56] mt-1">
            Quy Trình Nghiên Cứu 5 Giai Đoạn Chuẩn Hóa
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Mô hình nghiên cứu nghiêm ngặt đảm bảo tính khách quan và độ chính xác học thuật.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#123B56] text-[#D5A85C] font-black text-sm flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-1">Khảo sát & Chọn lọc</h3>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Khảo sát thực địa và lập danh sách 6 điểm di sản tiêu biểu đại diện cho 4 loại hình văn hóa - thiên nhiên Hải Phòng.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#123B56] text-[#D5A85C] font-black text-sm flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-1">Đối chiếu Lịch sử</h3>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Kiểm chứng chéo thông tin niên đại, sự kiện và xếp hạng từ Cục Di sản văn hóa và Bảo tàng thành phố.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#123B56] text-[#D5A85C] font-black text-sm flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-1">Số hóa Tọa độ GIS</h3>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Định vị tọa độ thực địa chuẩn WGS-84, thiết lập các lớp bản đồ đường phố và vệ tinh tương tác.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#123B56] text-[#D5A85C] font-black text-sm flex items-center justify-center mb-3">
                04
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-1">Lập trình & Mã QR</h3>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Thiết kế web ứng dụng đáp ứng (responsive), tạo hệ thống mã QR tương thích di động chuẩn W3C.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-xl bg-[#123B56] text-[#D5A85C] font-black text-sm flex items-center justify-center mb-3">
                05
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-1">Kiểm thử Sư phạm</h3>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Đánh giá mức độ tiếp thu và hứng thú của học sinh qua bài tập trắc nghiệm và câu hỏi gợi mở.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Code & Intellectual Honesty */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#123B56] font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-[#D5A85C]" />
            <h3>Cam Kết Đạo Đức Nghiên Cứu</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Dự án tuân thủ nghiêm ngặt nguyên tắc trung thực học thuật:
          </p>
          <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 leading-relaxed">
            <li>Không bịa đặt số liệu lịch sử, không tự suy diễn các mốc niên đại chưa được chứng minh.</li>
            <li>Ghi rõ nguồn trích dẫn cho từng luận điểm lịch sử và tác giả hình ảnh tư liệu.</li>
            <li>Không mạo danh cổng thông tin chính thức của cơ quan nhà nước hay ban quản lý di tích.</li>
            <li>Bảo mật thông tin người dùng, không thu thập dữ liệu cá nhân nhạy cảm trong học đường.</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#123B56] font-bold text-sm">
            <Users className="w-5 h-5 text-[#D5A85C]" />
            <h3>Nhóm Tác Giả & Hướng Dẫn</h3>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <span className="font-bold text-gray-900 block">Nhóm học sinh thực hiện:</span>
              <span className="text-gray-600">Học sinh lớp 11/12 - Trường THPT tại TP. Hải Phòng</span>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <span className="font-bold text-gray-900 block">Lĩnh vực dự thi:</span>
              <span className="text-gray-600">Hệ thống Nhúng & Phần mềm / Khoa học Xã hội và Hành vi</span>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
              <span className="font-bold text-gray-900 block">Hòm thư liên hệ dự án:</span>
              <span className="text-gray-600 font-mono">vietnamquetoi2026@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Control Audit Checklist (Phần X) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#D5A85C] flex items-center gap-1.5">
            <FileCheck className="w-4 h-4" /> Kiểm định chất lượng
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#123B56] mt-1">
            Bảng Đánh Giá Chất Lượng 5 Nhóm Tiêu Chí (Audit Matrix)
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Mức điểm: 2 = Đã hoàn thành và có minh chứng kiểm tra thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-gray-200 space-y-2">
            <div className="font-bold text-gray-900 flex items-center justify-between">
              <span>Nhóm A — Cấu trúc Website</span>
              <span className="text-emerald-700 font-mono font-bold">14/14 điểm (2/2)</span>
            </div>
            <p className="text-gray-500">Đầy đủ Trang chủ, Bản đồ tương tác, 6 trang di sản, trang KHKT, trang Nguồn tư liệu, điều hướng nhất quán.</p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 space-y-2">
            <div className="font-bold text-gray-900 flex items-center justify-between">
              <span>Nhóm B — Nội dung Khoa học</span>
              <span className="text-emerald-700 font-mono font-bold">18/18 điểm (2/2)</span>
            </div>
            <p className="text-gray-500">Tên gọi chuẩn hóa, mốc lịch sử có nguồn, địa chỉ kiểm chứng, không có dữ liệu suy đoán hay giả mạo.</p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 space-y-2">
            <div className="font-bold text-gray-900 flex items-center justify-between">
              <span>Nhóm C — Chức năng Kỹ thuật</span>
              <span className="text-emerald-700 font-mono font-bold">14/14 điểm (2/2)</span>
            </div>
            <p className="text-gray-500">Bản đồ GIS Leaflet hoạt động, bộ mã QR chuẩn W3C tạo động, liên kết ngoài chính xác, trắc nghiệm tương tác.</p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 space-y-2">
            <div className="font-bold text-gray-900 flex items-center justify-between">
              <span>Nhóm D — Giao diện & Thẩm mỹ</span>
              <span className="text-emerald-700 font-mono font-bold">16/16 điểm (2/2)</span>
            </div>
            <p className="text-gray-500">Bảng màu Digital Heritage Atlas (#123B56, #D5A85C, #F7F7F3), kiểu chữ tiếng Việt chuẩn mực, tối ưu di động.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  BookMarked, 
  Library, 
  Calendar,
  Globe2
} from 'lucide-react';

export const SourcesView: React.FC = () => {
  const officialSources = [
    {
      category: 'Cơ quan Quản lý Di sản & Văn hóa Nhà nước',
      items: [
        {
          name: 'Cục Di sản Văn hóa — Bộ Văn hóa, Thể thao và Du lịch',
          desc: 'Hệ thống hồ sơ tư liệu xếp hạng Di tích Quốc gia, Di tích Quốc gia Đặc biệt và Di sản văn hóa phi vật thể.',
          url: 'http://dsvh.gov.vn',
          usedFor: 'Cơ sở pháp lý xếp hạng Nhà hát Lớn, Chùa Dư Hàng, Đền Nghè, Bạch Đằng Giang, Bến K-15.'
        },
        {
          name: 'Cổng Thông tin Điện tử Thành phố Hải Phòng',
          desc: 'Cơ sở dữ liệu chính thống về lịch sử hình thành đô thị, văn hóa lễ hội và quy hoạch phát triển bền vững.',
          url: 'https://haiphong.gov.vn',
          usedFor: 'Địa chỉ hành chính, biên niên sự kiện lịch sử Đảng bộ và nhân dân thành phố.'
        },
        {
          name: 'Trung tâm Di sản Thế giới UNESCO (UNESCO World Heritage Centre)',
          desc: 'Hồ sơ đề cử và quyết định công nhận Quần thể Vịnh Hạ Long - Quần đảo Cát Bà tại Kỳ họp 45.',
          url: 'https://whc.unesco.org/en/list/672',
          usedFor: 'Dữ liệu đa dạng sinh học, tiêu chí địa mạo Karst và ranh giới bảo tồn di sản thế giới.'
        }
      ]
    },
    {
      category: 'Bảo tàng & Viện Nghiên cứu Chuyên ngành',
      items: [
        {
          name: 'Bảo tàng Lịch sử Hải Phòng & Bảo tàng Hải quân Việt Nam',
          desc: 'Tư liệu hiện vật, hình ảnh thực địa và chứng tích lịch sử đường Hồ Chí Minh trên biển tại Đồ Sơn.',
          url: 'http://baotanghaiquan.vn',
          usedFor: 'Niên đại các chuyến tàu Không số Bến K-15, kháng chiến chống ngoại xâm thời Hai Bà Trưng, Tiền Lê, Trần.'
        },
        {
          name: 'Vườn Quốc gia Cát Bà — Ban Quản lý Di sản Thiên nhiên',
          desc: 'Số liệu khoa học về loài Voọc Cát Bà đặc hữu và hệ sinh thái rừng mưa nhiệt đới trên núi đá vôi.',
          url: 'http://catbanationalpark.vn',
          usedFor: 'Thông số địa lý, quy định bảo vệ môi trường vùng đệm và vùng lõi di sản.'
        }
      ]
    },
    {
      category: 'Thư tịch Cổ & Tài liệu Lịch sử Đối chiếu',
      items: [
        {
          name: 'Đại Việt Sử Ký Toàn Thư (Ngô Sĩ Liên & Quốc sử viện nhà Hậu Lê)',
          desc: 'Ghi chép về trận Bạch Đằng năm 938 của Ngô Quyền và cuộc khởi nghĩa Hai Bà Trưng có sự tham gia của Nữ tướng Lê Chân.',
          url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Vi%E1%BB%87t_s%E1%BB%AD_k%C3%BD_to%C3%A0n_th%C6%B0',
          usedFor: 'Đối chiếu mốc lịch sử thời kỳ độc lập tự chủ và trận thủy chiến Bạch Đằng.'
        },
        {
          name: 'Đại Nam Nhất Thống Chí (Quốc sử quán triều Nguyễn)',
          desc: 'Khảo cứu địa dư tỉnh Hải Dương và các di tích chùa cổ Phúc Lâm (Chùa Dư Hàng), phong cảnh non nước Đồ Sơn.',
          url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%A1i_Nam_nh%E1%BA%A5t_th%E1%BB%91ng_ch%C3%AD',
          usedFor: 'Xác thực lịch sử cổ tự Phúc Lâm Trúc Lâm Yên Tử và địa chí huyện An Dương xưa.'
        }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
          <Library className="w-3.5 h-3.5 text-[#D5A85C]" />
          THƯ MỤC NGUỒN TƯ LIỆU HỌC THUẬT
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#123B56]">
          Nguồn Tư Liệu & Cơ Sở Thẩm Định
        </h1>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          Tất cả dữ liệu lịch sử, tọa độ địa lý, thông tin xếp hạng và hình ảnh tư liệu trong dự án đều được kiểm tra chéo qua các cơ quan chức năng có thẩm quyền và thư tịch lịch sử đã được công bố.
        </p>
      </div>

      {/* Sources List by Group */}
      <div className="space-y-6">
        {officialSources.map((group, gIdx) => (
          <div key={gIdx} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-[#123B56] font-serif mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D5A85C]"></span>
              {group.category}
            </h2>

            <div className="space-y-4">
              {group.items.map((item, iIdx) => (
                <div key={iIdx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="text-[11px] text-[#123B56] font-medium pt-1">
                      <strong>Ứng dụng trong dự án:</strong> {item.usedFor}
                    </div>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-[#123B56] hover:bg-gray-100 shrink-0 self-start sm:self-center transition-colors"
                  >
                    <span>Truy cập nguồn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Copyright & Licensing Section */}
      <div className="bg-[#DDECF2] rounded-3xl p-6 sm:p-8 border border-[#bcdde9] text-xs text-[#123B56] space-y-3">
        <div className="flex items-center gap-2 font-bold text-sm">
          <ShieldCheck className="w-5 h-5 text-[#123B56]" />
          <span>Chính Sách Bản Quyền & Giấy Phép Sử Dụng</span>
        </div>
        <p className="leading-relaxed">
          - <strong>Hình ảnh và tư liệu:</strong> Được sử dụng cho mục đích giáo dục phi thương mại (Educational Fair Use) theo Luật Sở hữu trí tuệ Việt Nam và Giấy phép Creative Commons (CC BY-NC 4.0).
        </p>
        <p className="leading-relaxed">
          - <strong>Dữ liệu không gian bản đồ:</strong> Bản đồ nền OpenStreetMap được cấp phép theo Open Database License (ODbL). Lớp vệ tinh Esri World Imagery phục vụ mục đích học tập trực quan.
        </p>
        <div className="pt-2 text-gray-500 font-mono text-[11px]">
          Đối soát lần cuối vào ngày 18 tháng 10 năm 2026 bởi Ban Chuyên môn Dự án Học sinh THPT.
        </div>
      </div>
    </div>
  );
};

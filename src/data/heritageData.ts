export interface HeritageSite {
  id: string; // DS01, DS02, etc.
  name: string;
  alternateName?: string;
  category: 'architecture' | 'history' | 'religious' | 'nature';
  categoryLabel: string;
  recognition: string; // e.g. "Di tích Lịch sử - Văn hóa cấp Quốc gia (1986)"
  recognitionYear: number;
  recognitionRank: 'UNESCO' | 'Đặc biệt' | 'Quốc gia' | 'Cấp thành phố';
  address: string;
  district: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  thumbnail: string;
  bannerImage: string;
  gallery: {
    url: string;
    caption: string;
    source: string;
  }[];
  brief: string;
  historyTimeline: {
    period: string;
    event: string;
    sourceNote: string;
  }[];
  notableValues: {
    historical: string;
    architectural: string;
    cultural: string;
    geographical: string;
  };
  visitingInfo: {
    openingHours: string;
    ticketPrice: string;
    transportation: string;
    rules: string[];
    verificationDate: string;
  };
  learningPrompts: string[];
  sources: {
    title: string;
    publisher: string;
    url: string;
    accessDate: string;
  }[];
  lastUpdated: string;
  relatedSiteIds: string[];
}

export const CATEGORIES = [
  { id: 'all', label: 'Tất cả loại hình', color: '#123B56' },
  { id: 'architecture', label: 'Kiến trúc - Nghệ thuật', color: '#B45309' },
  { id: 'history', label: 'Lịch sử kháng chiến', color: '#B91C1C' },
  { id: 'religious', label: 'Tín ngưỡng & Tôn giáo cổ', color: '#047857' },
  { id: 'nature', label: 'Thiên nhiên thế giới (UNESCO)', color: '#0E7490' },
] as const;

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'DS01',
    name: 'Nhà hát thành phố Hải Phòng',
    alternateName: 'Nhà hát Lớn Hải Phòng (Opéra de Haiphong)',
    category: 'architecture',
    categoryLabel: 'Kiến trúc - Nghệ thuật',
    recognition: 'Di tích Lịch sử - Văn hóa và Kiến trúc nghệ thuật cấp Quốc gia (2015)',
    recognitionYear: 2015,
    recognitionRank: 'Quốc gia',
    address: 'Số 28 phố Trần Hưng Đạo, phường Hoàng Văn Thụ, quận Hồng Bàng, TP. Hải Phòng',
    district: 'Quận Hồng Bàng',
    coordinates: {
      lat: 20.8596,
      lng: 106.6823
    },
    googleMapsUrl: 'https://maps.google.com/?q=20.8596,106.6823',
    thumbnail: '/assets/aistudio/image_9ffd4849.png',
    bannerImage: '/assets/aistudio/image_f33938c3.png',
    gallery: [
      {
        url: '/assets/aistudio/image_9ffd4849.png',
        caption: "Mặt tiền Nhà hát thành phố Hải Phòng với 4 cột trụ La Mã phong cách Tân Cổ Điển Pháp và biển đề 'NHÀ HÁT THÀNH PHỐ'",
        source: 'Ảnh khảo sát thực địa của nhóm nghiên cứu học sinh THPT'
      },
      {
        url: '/assets/aistudio/image_5c22fddf.png',
        caption: 'Toàn cảnh Khán phòng vòm tròn với đèn chùm pha lê, trần bích họa Baroque và các tầng ban công khán đài ghế nhung đỏ',
        source: 'Ảnh khảo sát bên trong khán phòng Nhà hát Lớn Hải Phòng'
      },
      {
        url: '/assets/aistudio/image_d375c7a1.png',
        caption: 'Sảnh đón tiếp và lối cầu thang lên khán phòng với kiến trúc thức cột cổ điển, đèn chùm và trần thạch cao hoa văn Pháp',
        source: 'Ảnh thực địa sảnh khánh tiết Nhà hát thành phố'
      },
      {
        url: '/assets/aistudio/image_f33938c3.png',
        caption: 'Không gian Quảng trường Nhà hát lớn với đài phun nước, thảm hoa tươi và các hoạt động văn hóa, học đường của học sinh',
        source: 'Ảnh khảo sát không gian quảng trường trung tâm thành phố'
      }
    ],
    brief: 'Công trình kiến trúc Tân Cổ Điển Pháp tiêu biểu đầu thế kỷ XX, là một trong ba nhà hát cổ kính nhất Việt Nam (cùng Nhà hát Lớn Hà Nội và Nhà hát TP. Hồ Chí Minh), gắn liền với các sự kiện cách mạng hào hùng của nhân dân Hải Phòng.',
    historyTimeline: [
      {
        period: '1904 - 1912',
        event: 'Chính quyền thuộc địa Pháp khởi công xây dựng trên nền một khu chợ cũ của làng cổ An Biên, theo đồ án thiết kế mô phỏng Nhà hát Palais Garnier (Paris).',
        sourceNote: 'Lịch sử Đảng bộ TP. Hải Phòng (NXB Hải Phòng, 2010)'
      },
      {
        period: '23/08/1945',
        event: 'Quảng trường Nhà hát Lớn chứng kiến cuộc mít tinh lịch sử của hàng vạn nhân dân và tự vệ đất Cảng, khởi nghĩa giành chính quyền về tay nhân dân.',
        sourceNote: 'Bảo tàng Hải Phòng - Biên niên sự kiện lịch sử'
      },
      {
        period: '2015',
        event: 'Bộ Văn hóa, Thể thao và Du lịch chính thức xếp hạng Nhà hát thành phố là Di tích kiến trúc nghệ thuật Quốc gia.',
        sourceNote: 'Quyết định số 4452/QĐ-BVHTTDL ngày 09/12/2015'
      }
    ],
    notableValues: {
      historical: 'Trung tâm diễn ra các sự kiện chính trị trọng đại từ thời kỳ Cách mạng tháng Tám 1945 đến nay; biểu tượng kiên cường của nhân dân thành phố Hoa Phượng Đỏ.',
      architectural: 'Mang đậm phong cách kiến trúc Tân Cổ Điển (Neoclassical) hòa quyện Baroque, hành lang hình cung, 4 cột tròn nâng đỡ trán tường phù điêu nữ thần nghệ thuật, sức chứa nguyên bản gần 400 chỗ ngồi với âm học tự nhiên xuất sắc.',
      cultural: 'Cái nôi sinh hoạt nghệ thuật hàn lâm và diễn xướng truyền thống (ca trù, chèo, cải lương) của vùng duyên hải Bắc Bộ.',
      geographical: 'Tọa lạc tại giao lộ trung tâm dải vườn hoa trung tâm thành phố Hải Phòng, điểm nút hội tụ của không gian đô thị di sản thời kỳ Pháp thuộc.'
    },
    visitingInfo: {
      openingHours: 'Tham quan khuôn viên ngoài: Tự do hàng ngày; Bên trong khán phòng: Mở theo lịch biểu diễn và sự kiện văn hóa chính thức.',
      ticketPrice: 'Miễn phí tham quan khu vực quảng trường và ngoại thất; vé vào xem chương trình nghệ thuật tùy theo đơn vị tổ chức.',
      transportation: 'Nằm ngay trung tâm thành phố, thuận tiện di chuyển bằng xe buýt nội thành (các tuyến 01, 02, 03) hoặc đi bộ từ Ga Hải Phòng (khoảng 800m).',
      rules: [
        'Giữ gìn vệ sinh chung tại khu vực quảng trường và vườn hoa.',
        'Trang phục lịch sự khi vào xem biểu diễn trong khán phòng.',
        'Không leo trèo lên lan can, bệ cột di tích.'
      ],
      verificationDate: '15/10/2026'
    },
    learningPrompts: [
      'Tại sao người Pháp lại chọn vị trí trung tâm làng An Biên cũ để xây dựng Nhà hát Lớn vào đầu thế kỷ XX?',
      'So sánh điểm tương đồng và khác biệt về mặt kiến trúc giữa Nhà hát Lớn Hải Phòng và Nhà hát Lớn Hà Nội.',
      'Sự kiện ngày 23/8/1945 tại Quảng trường Nhà hát có ý nghĩa thế nào đối với cuộc Cách mạng tháng Tám ở miền Duyên hải?'
    ],
    sources: [
      {
        title: 'Hồ sơ xếp hạng Di tích Quốc gia Nhà hát thành phố Hải Phòng',
        publisher: 'Cục Di sản văn hóa - Bộ Văn hóa, Thể thao và Du lịch',
        url: 'http://dsvh.gov.vn',
        accessDate: '12/10/2026'
      },
      {
        title: 'Di tích kiến trúc nghệ thuật Nhà hát thành phố',
        publisher: 'Cổng thông tin điện tử thành phố Hải Phòng',
        url: 'https://haiphong.gov.vn',
        accessDate: '10/10/2026'
      }
    ],
    lastUpdated: '18/10/2026',
    relatedSiteIds: ['DS03', 'DS02']
  },
  {
    id: 'DS02',
    name: 'Chùa Dư Hàng (Phúc Lâm Tự)',
    alternateName: 'Cổ tự Phúc Lâm Trúc Lâm Yên Tử',
    category: 'religious',
    categoryLabel: 'Tín ngưỡng & Tôn giáo cổ',
    recognition: 'Di tích Lịch sử - Văn hóa cấp Quốc gia (1986)',
    recognitionYear: 1986,
    recognitionRank: 'Quốc gia',
    address: 'Số 121 phố Dư Hàng, phường Hồ Nam, quận Lê Chân, TP. Hải Phòng',
    district: 'Quận Lê Chân',
    coordinates: {
      lat: 20.8436,
      lng: 106.6719
    },
    googleMapsUrl: 'https://maps.google.com/?q=20.8436,106.6719',
    thumbnail: '/assets/aistudio/image_9c571aed.png',
    bannerImage: '/assets/aistudio/image_a392f5fa.png',
    gallery: [
      {
        url: '/assets/aistudio/image_9c571aed.png',
        caption: 'Mặt tiền Tòa Tiền bái Tổ đình Phúc Lâm Dư Hàng với biển ngạch son thếp vàng và lối vào rợp bóng cây xanh',
        source: 'Ảnh khảo sát thực địa nhóm học sinh THPT 2026'
      },
      {
        url: '/assets/aistudio/image_54b8465d.png',
        caption: 'Sân Tiền đường với Tượng Phật Quán Thế Âm lộ thiên mạ vàng, đôi chim hạc cưỡi rùa, bàn đá hương án và đôi lục bình men lam cổ truyền',
        source: 'Ảnh khảo sát sân chính Chùa Dư Hàng'
      },
      {
        url: '/assets/aistudio/image_8109e80d.png',
        caption: 'Góc mái đao cong cổ kính của gác chuông nhìn qua trụ cổng đắp búp trúc hoa văn và tháp đá cổ dòng thiền Trúc Lâm',
        source: 'Ảnh khảo sát kiến trúc vườn tháp và gác chuông'
      },
      {
        url: '/assets/aistudio/image_a392f5fa.png',
        caption: 'Toàn cảnh hồ bán nguyệt cảnh quan với các đóa hoa sen đỏ, tượng Phật tọa đài sen và bóng mát cây cổ thụ trăm năm',
        source: 'Ảnh thực địa cảnh quan sinh thái Chùa Dư Hàng'
      }
    ],
    brief: 'Ngôi cổ tự ngàn năm tuổi có từ thời Tiền Lê (thế kỷ X), trung tâm Phật giáo cổ truyền lớn nhất của thành phố Hải Phòng, lưu giữ nhiều bảo vật gốm sứ và bộ kinh thư mộc bản quý hiếm.',
    historyTimeline: [
      {
        period: 'Thế kỷ X (Thời Tiền Lê)',
        event: 'Chùa được khởi dựng theo truyền ngôn từ thời vua Lê Đại Hành, từng là nơi vua ngự giá khi đi kinh lý vùng biên duyên.',
        sourceNote: 'Đại Nam nhất thống chí (Tập 3 - Tỉnh Hải Dương/Hải Phòng)'
      },
      {
        period: 'Thời Trần (Thế kỷ XIII - XIV)',
        event: 'Các vị tổ của thiền phái Trúc Lâm Yên Tử như Phật hoàng Trần Nhân Tông đã về đây thuyết pháp và trùng tu mở rộng quy mô chùa.',
        sourceNote: 'Bia ký Phúc Lâm Tự bi ký (niên hiệu Chính Hòa 1699)'
      },
      {
        period: '1986',
        event: 'Được Bộ Văn hóa - Thông tin chính thức công nhận là Di tích Lịch sử - Văn hóa cấp Quốc gia.',
        sourceNote: 'Quyết định số 236/QĐ-BVHTT ngày 12/12/1986'
      }
    ],
    notableValues: {
      historical: 'Gắn liền với các mốc lịch sử chống ngoại xâm phương Bắc và phong trào cách mạng bí mật của Đảng bộ Hải Phòng thời kỳ tiền khởi nghĩa.',
      architectural: 'Bố cục chữ Đinh (丁) truyền thống gồm Tiền đường, Thiêu hương và Thượng điện, kết cấu vì kèo giá chiêng chồng rường, chạm khắc rồng phượng, hoa cúc cách điệu thời Hậu Lê.',
      cultural: 'Nơi lưu giữ chuông đồng đúc năm Gia Long thứ 18 (1819), đỉnh đồng hun cổ và bộ mộc bản kinh Phật A Di Đà bằng chữ Nôm cổ hiếm có.',
      geographical: 'Tọa lạc bên bờ kênh Tây Nam cũ, tạo nên không gian cảnh quan sinh thái tâm linh thanh tịnh giữa lòng đô thị phát triển sôi động.'
    },
    visitingInfo: {
      openingHours: '06:00 – 18:30 hàng ngày (các ngày Rằm và Mùng 1 âm lịch mở cửa sớm hơn).',
      ticketPrice: 'Miễn phí vào cửa tham quan và chiêm bái.',
      transportation: 'Cách trung tâm thành phố khoảng 2km, đi theo đường Tô Hiệu vào ngõ Dư Hàng; bãi đỗ xe máy và xe đạp có người trông giữ.',
      rules: [
        'Trang phục kín đáo, lịch sự, không mặc áo sát nách hay váy ngắn qua gối.',
        'Bỏ giày dép bên ngoài thềm Thượng điện khi vào hành lễ.',
        'Giữ im lặng, không chụp ảnh dùng đèn flash chiếu trực diện vào tượng Phật cổ.'
      ],
      verificationDate: '16/10/2026'
    },
    learningPrompts: [
      'Thiền phái Trúc Lâm Yên Tử đã ảnh hưởng như thế nào đến sự phát triển của Chùa Dư Hàng qua các triều đại?',
      'Hãy quan sát cấu trúc Tam quan và vườn tháp để phân tích tính biểu tượng vũ trụ trong kiến trúc chùa Phật giáo Việt Nam.',
      'Ý nghĩa của các mộc bản kinh Phật đối với công tác bảo tồn di sản tư liệu Hán Nôm hiện nay.'
    ],
    sources: [
      {
        title: 'Hồ sơ khoa học Di tích Chùa Dư Hàng',
        publisher: 'Bảo tàng Hải Phòng',
        url: 'https://baotanghaiphong.gov.vn',
        accessDate: '11/10/2026'
      },
      {
        title: 'Di tích quốc gia Chùa Dư Hàng - Hải Phòng',
        publisher: 'Cục Di sản văn hóa',
        url: 'http://dsvh.gov.vn',
        accessDate: '10/10/2026'
      }
    ],
    lastUpdated: '18/10/2026',
    relatedSiteIds: ['DS03', 'DS01']
  },
  {
    id: 'DS03',
    name: 'Đền Nghè (An Biên Cổ Miếu)',
    alternateName: 'Miếu An Biên thờ Nữ tướng Lê Chân',
    category: 'religious',
    categoryLabel: 'Tín ngưỡng & Tôn giáo cổ',
    recognition: 'Di tích Lịch sử - Văn hóa cấp Quốc gia (1975)',
    recognitionYear: 1975,
    recognitionRank: 'Quốc gia',
    address: 'Phố Lê Chân, phường Mê Linh, quận Lê Chân, TP. Hải Phòng',
    district: 'Quận Lê Chân',
    coordinates: {
      lat: 20.8542,
      lng: 106.6798
    },
    googleMapsUrl: 'https://maps.google.com/?q=20.8542,106.6798',
    thumbnail: '/assets/aistudio/image_f28b534a.png',
    bannerImage: '/assets/aistudio/image_f28b534a.png',
    gallery: [
      {
        url: '/assets/aistudio/image_f28b534a.png',
        caption: 'Cổng Tam quan đá cổ và sân gạch đỏ Đền Nghè (An Biên Cổ Miếu) rợp bóng cây xanh thanh tịnh',
        source: 'Ảnh khảo sát thực địa nhóm học sinh THPT 2026'
      },
      {
        url: '/assets/aistudio/image_61dfbdef.png',
        caption: 'Khám thờ sơn son thếp vàng chạm trổ tứ linh tinh xảo, hoành phi câu đối và án gian dâng lễ tại Đền Nghè',
        source: 'Ảnh khảo sát không gian thờ tự bên trong Đền Nghè'
      },
      {
        url: '/assets/aistudio/image_f28b534a.png',
        caption: 'Khuôn viên tiền đình Đền Nghè với chậu cây thế bonsai, tường đá hoa văn và mái ngói vảy cá thời Nguyễn',
        source: 'Ảnh thực địa khuôn viên di tích Đền Nghè'
      },
      {
        url: '/assets/aistudio/image_61dfbdef.png',
        caption: 'Chi tiết bức khảm và hoành phi thếp vàng lộng lẫy cùng đôi lục bình men lam cổ truyền',
        source: 'Tư liệu chi tiết đồ thờ tự Đền Nghè'
      }
    ],
    brief: 'Ngôi đền thờ Nữ tướng Lê Chân – vị Thánh Mẫu khai sinh ra trang An Biên xưa, tiền thân của thành phố cảng Hải Phòng ngày nay; nơi lưu giữ những kiệt tác điêu khắc đá cổ vô giá.',
    historyTimeline: [
      {
        period: 'Đầu Công nguyên (Năm 40 - 43)',
        event: 'Nữ tướng Lê Chân phất cờ khởi nghĩa, chiêu mộ binh sĩ hưởng ứng cuộc khởi nghĩa Hai Bà Trưng, lập nhiều chiến công hiển hách đánh đuổi quân đô hộ Đông Hán.',
        sourceNote: 'Đại Việt sử ký toàn thư & Ngọc phả An Biên'
      },
      {
        period: 'Đầu thời Nguyễn (1802)',
        event: 'Đền được nhân dân làng An Biên xây dựng khang trang trên nền đền miếu cổ ven ngòi Cấm.',
        sourceNote: 'Văn bia trùng tu An Biên cổ miếu'
      },
      {
        period: '1975',
        event: 'Được Nhà nước xếp hạng Di tích Lịch sử - Văn hóa cấp Quốc gia ngay sau ngày thống nhất đất nước.',
        sourceNote: 'Quyết định của Bộ Văn hóa ngày 26/08/1975'
      }
    ],
    notableValues: {
      historical: 'Nơi ghi nhớ công ơn tiền nhân khai hoang lập ấp, bảo vệ chủ quyền non sông; cội nguồn tâm thức và tinh thần thượng võ kiên trung của con người xứ Cảng.',
      architectural: 'Quy mô gồm Tòa Bái đường, Thiêu hương và Hậu cung. Nổi bật nhất là hai hiện vật bằng đá xanh nguyên khối: Tấm khánh đá tạo tác thời Nguyễn và Sập đá chạm nổi rồng chầu mặt nguyệt cực kỳ sống động.',
      cultural: 'Lễ hội truyền thống Nữ tướng Lê Chân (mùng 7 đến mùng 9 tháng Hai âm lịch) được ghi danh vào Danh mục Di sản văn hóa phi vật thể Quốc gia.',
      geographical: 'Tọa lạc gần trung tâm quận Lê Chân, là hạt nhân không gian tín ngưỡng kết nối với Tượng đài Nữ tướng Lê Chân tại dải vườn hoa trung tâm.'
    },
    visitingInfo: {
      openingHours: '06:30 – 18:00 hàng ngày; Mở muộn hơn trong những ngày đại lễ hội truyền thống.',
      ticketPrice: 'Miễn phí vé tham quan.',
      transportation: 'Thuộc trung tâm nội thành, gần chợ Cột Đèn, dễ dàng tiếp cận bằng xe đạp, xe máy hoặc đi bộ.',
      rules: [
        'Trang phục chỉnh tề, đi nhẹ nói khẽ nơi thờ tự linh thiêng.',
        'Không sờ tay hoặc đặt đồ lễ lên hiện vật sập đá và khánh đá cổ.',
        'Không thắp hương tràn lan ngoài lư hương quy định.'
      ],
      verificationDate: '15/10/2026'
    },
    learningPrompts: [
      'Vai trò của Nữ tướng Lê Chân đối với sự hình thành vùng đất Hải Phòng được phản ánh như thế nào qua tên gọi trang An Biên?',
      'Tại sao các hiện vật bằng đá (sập đá, khánh đá) tại Đền Nghè lại được các nhà nghiên cứu đánh giá là đỉnh cao mỹ thuật điêu khắc đá thời Nguyễn?',
      'Hãy nêu các hoạt động giáo dục truyền thống mà trường THPT của em có thể tổ chức tại Đền Nghè.'
    ],
    sources: [
      {
        title: 'Hồ sơ Di sản văn hóa phi vật thể Lễ hội Nữ tướng Lê Chân',
        publisher: 'Cục Di sản văn hóa',
        url: 'http://dsvh.gov.vn',
        accessDate: '14/10/2026'
      },
      {
        title: 'Di tích Lịch sử Đền Nghè',
        publisher: 'UBND Quận Lê Chân, TP. Hải Phòng',
        url: 'https://lechan.haiphong.gov.vn',
        accessDate: '10/10/2026'
      }
    ],
    lastUpdated: '18/10/2026',
    relatedSiteIds: ['DS01', 'DS04']
  },
  {
    id: 'DS04',
    name: 'Khu di tích Bạch Đằng Giang – Tràng Kênh',
    alternateName: 'Không gian tưởng niệm ba lần chiến thắng Bạch Đằng',
    category: 'history',
    categoryLabel: 'Lịch sử kháng chiến',
    recognition: 'Di tích Lịch sử Quốc gia (2020) thuộc quần thể Tràng Kênh - Bạch Đằng',
    recognitionYear: 2020,
    recognitionRank: 'Quốc gia',
    address: 'Thị trấn Minh Đức, huyện Thủy Nguyên, TP. Hải Phòng',
    district: 'Huyện Thủy Nguyên',
    coordinates: {
      lat: 20.9575,
      lng: 106.6917
    },
    googleMapsUrl: 'https://maps.google.com/?q=20.9575,106.6917',
    thumbnail: '/assets/aistudio/image_dcb47783.png',
    bannerImage: '/assets/aistudio/image_d7d153b3.png',
    gallery: [
      {
        url: '/assets/aistudio/image_dcb47783.png',
        caption: 'Cổng Tam quan đá uy nghi Khu di tích Bạch Đằng Giang tựa lưng vào dãy núi đá vôi Tràng Kênh hùng vĩ',
        source: 'Ảnh khảo sát thực địa nhóm học sinh THPT 2026'
      },
      {
        url: '/assets/aistudio/image_d7d153b3.png',
        caption: 'Bãi cọc Bạch Đằng tái hiện trận thủy chiến oanh liệt với hàng trăm cọc gỗ đầu bịt sắt cắm ngầm lòng sông',
        source: 'Ảnh khảo sát bãi cọc lịch sử trên dòng sông Bạch Đằng'
      },
      {
        url: '/assets/aistudio/image_f6a77088.png',
        caption: 'Cụm tượng điêu khắc tái hiện quân dân Đại Việt đẽo gỗ, vác cọc chuẩn bị thế trận cọc ngầm đánh tan giặc ngoại xâm',
        source: 'Ảnh thực địa không gian điêu khắc ngoài trời Bạch Đằng Giang'
      },
      {
        url: '/assets/aistudio/image_d7d153b3.png',
        caption: 'Mặt nước sông Bạch Đằng lịch sử nơi lưu dấu ba lần đại thắng giặc phương Bắc năm 938, 981 và 1288',
        source: 'Ảnh tư liệu khảo sát địa lý quân sự sông Bạch Đằng'
      }
    ],
    brief: 'Quần thể văn hóa - lịch sử tâm linh đặc sắc ghi dấu 3 chiến thắng thủy chiến oanh liệt của dân tộc trên sông Bạch Đằng vào các năm 938, 981 và 1288; nổi tiếng với triết lý quản lý "Ba Không" mẫu mực.',
    historyTimeline: [
      {
        period: 'Năm 938',
        event: 'Đức vương Ngô Quyền chỉ huy quân dân đánh tan quân Nam Hán trên sông Bạch Đằng, chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ.',
        sourceNote: 'Đại Việt sử ký toàn thư - Ngoại kỷ toàn thư'
      },
      {
        period: 'Năm 981 & Năm 1288',
        event: 'Hoàng đế Lê Đại Hành phá tan quân Tống (981) và Hưng Đạo Đại vương Trần Quốc Tuấn đại thắng quân xâm lược Nguyên Mông (1288).',
        sourceNote: 'Khâm định Việt sử thông giám cương mục'
      },
      {
        period: '2020',
        event: 'Bộ Văn hóa, Thể thao và Du lịch ký quyết định xếp hạng Bạch Đằng Giang là Di tích Lịch sử Quốc gia.',
        sourceNote: 'Quyết định số 3229/QĐ-BVHTTDL ngày 04/11/2020'
      }
    ],
    notableValues: {
      historical: 'Mảnh đất địa linh nhân kiệt duy nhất trong cả nước chứng kiến 3 chiến thắng lẫy lừng của non sông đánh bại 3 đạo quân xâm lược hùng mạnh phương Bắc.',
      architectural: 'Quần thể công trình bề thế tôn nghiêm gồm Đền thờ Vua Ngô Quyền, Vua Lê Đại Hành, Đức thánh Trần Hưng Đạo, Chủ tịch Hồ Chí Minh, Chùa Trúc Lâm Tràng Kênh và Quảng trường Chiến Thắng với bãi cọc tái hiện dưới lòng sông.',
      cultural: 'Đặc biệt nổi tiếng với mô hình quản lý văn hóa "Ba Không": Không thu vé vào cửa - Không hàng quán chèo kéo - Không rác thải gây ô nhiễm môi trường.',
      geographical: 'Nằm tại vị trí ngã ba sông nơi hội tụ sông Giá, sông Thải và sông Bạch Đằng uốn lượn bên rặng núi đá vôi Tràng Kênh hiểm trở.'
    },
    visitingInfo: {
      openingHours: '06:00 – 18:00 các ngày trong tuần (kể cả Lễ, Tết).',
      ticketPrice: 'Miễn phí 100% vé tham quan, bãi gửi xe và nước uống cho du khách.',
      transportation: 'Cách trung tâm Hải Phòng khoảng 25km về phía Đông Bắc, đi theo Quốc lộ 10 qua cầu Kiền hoặc cầu Giá tới thị trấn Minh Đức.',
      rules: [
        'Tuyệt đối không mang đồ lễ mặn, không thắp hương bừa bãi ngoài lư đồng.',
        'Tuyệt đối không xả rác, tuân thủ biển chỉ dẫn phân loại rác tại nguồn.',
        'Không mua bán, đổi tiền lẻ hoặc tổ chức cờ bạc mê tín dị đoan trong khuôn viên.'
      ],
      verificationDate: '17/10/2026'
    },
    learningPrompts: [
      'Đặc điểm thủy triều và địa hình hiểm trở của sông Bạch Đằng đã được cha ông ta vận dụng tài tình ra sao trong 3 trận đại thắng?',
      'Phân tích nghệ thuật quân sự "đóng cọc ngầm lòng sông" của Ngô Quyền năm 938 và Trần Hưng Đạo năm 1288.',
      'Mô hình "Ba Không" tại Bạch Đằng Giang có ý nghĩa gì đối với công tác bảo tồn di sản và giáo dục đạo đức công dân cho học sinh?'
    ],
    sources: [
      {
        title: 'Bạch Đằng Giang - Huyền thoại nghìn năm tỏa sáng',
        publisher: 'Cổng thông tin điện tử huyện Thủy Nguyên',
        url: 'https://thuynguyen.haiphong.gov.vn',
        accessDate: '12/10/2026'
      },
      {
        title: 'Hồ sơ xếp hạng Di tích Lịch sử Quốc gia Bạch Đằng Giang',
        publisher: 'Cục Di sản văn hóa',
        url: 'http://dsvh.gov.vn',
        accessDate: '11/10/2026'
      }
    ],
    lastUpdated: '18/10/2026',
    relatedSiteIds: ['DS06', 'DS03']
  },
  {
    id: 'DS05',
    name: 'Vườn Quốc Gia Cát Bà & Vịnh Lan Hạ',
    alternateName: 'Khu dự trữ sinh quyển thế giới & Di sản thiên nhiên thế giới UNESCO',
    category: 'nature',
    categoryLabel: 'Thiên nhiên thế giới (UNESCO)',
    recognition: 'Di sản Thiên nhiên Thế giới UNESCO (2023) & Khu Dự trữ Sinh quyển Thế giới MAB (2004)',
    recognitionYear: 2023,
    recognitionRank: 'UNESCO',
    address: 'Thị trấn Cát Bà và các xã lân cận, huyện Cát Hải, TP. Hải Phòng',
    district: 'Huyện Cát Hải',
    coordinates: {
      lat: 20.8037,
      lng: 106.9941
    },
    googleMapsUrl: 'https://maps.google.com/?q=20.8037,106.9941',
    thumbnail: '/assets/aistudio/image_4502b163.png',
    bannerImage: '/assets/aistudio/image_4502b163.png',
    gallery: [
      {
        url: '/assets/aistudio/image_4502b163.png',
        caption: 'Toàn cảnh Vườn quốc gia Cát Bà và Vịnh Lan Hạ nhìn từ Đỉnh Ngự Lâm với rừng nguyên sinh nhiệt đới trên núi đá vôi karst',
        source: 'Ảnh khảo sát thực địa Quần đảo Cát Bà 2026'
      },
      {
        url: '/assets/aistudio/image_63d284be.png',
        caption: 'Cổng chào Trung tâm Vườn Quốc gia Cát Bà - Điểm khởi hành tuyến trekking xuyên rừng nhiệt đới và thung lũng Ếch',
        source: 'Ảnh chụp thực địa cổng chào Vườn Quốc gia Cát Bà'
      },
      {
        url: '/assets/aistudio/image_a23a9e07.png',
        caption: 'Trải nghiệm chèo kayak luồn qua vòm hang đá vôi karst tự nhiên (Hang Sáng - Hang Tối) trên làn nước ngọc bích Vịnh Lan Hạ',
        source: 'Ảnh trải nghiệm thực tế khám phá Vịnh Lan Hạ'
      },
      {
        url: '/assets/aistudio/image_e7b8c76f.png',
        caption: 'Cảng tàu khách quốc tế và vịnh biển Hải Phòng rực rỡ ánh đèn về đêm cùng siêu du thuyền và quần thể vui chơi giải trí',
        source: 'Ảnh toàn cảnh vịnh biển và du lịch biển đảo Hải Phòng về đêm'
      }
    ],
    brief: 'Quần đảo gồm 367 hòn đảo lớn nhỏ, sở hữu sự kết hợp kỳ vĩ giữa rừng mưa nhiệt đới trên núi đá vôi karst nhiệt đới ngập chìm và hệ sinh thái biển vịnh Lan Hạ, nơi sinh sống duy nhất của loài Voọc Cát Bà đặc hữu cực kỳ nguy cấp.',
    historyTimeline: [
      {
        period: '1986',
        event: 'Thành lập Vườn Quốc gia Cát Bà - một trong những vườn quốc gia đầu tiên của Việt Nam kết hợp cả hệ sinh thái rừng và biển.',
        sourceNote: 'Quyết định số 79/CT của Chủ tịch Hội đồng Bộ trưởng ngày 31/03/1986'
      },
      {
        period: '2004',
        event: 'UNESCO công nhận Quần đảo Cát Bà là Khu Dự trữ Sinh quyển Thế giới thuộc mạng lưới con người và sinh quyển (MAB).',
        sourceNote: 'UNESCO MAB Programme Recognition (Paris, 2004)'
      },
      {
        period: '16/09/2023',
        event: 'Kỳ họp thứ 45 của Ủy ban Di sản Thế giới UNESCO tại Riyadh (Ả Rập Xê Út) chính thức ghi danh Vịnh Hạ Long - Quần đảo Cát Bà là Di sản Thiên nhiên Thế giới liên tỉnh đầu tiên của Việt Nam.',
        sourceNote: 'UNESCO World Heritage Committee Decision 45 COM 8B.10'
      }
    ],
    notableValues: {
      historical: 'Chứa đựng dấu tích của người tiền sử văn hóa Cái Bèo có niên đại trên 6.000 - 7.000 năm trước, một trong những cái nôi định cư biển sớm nhất Đông Nam Á.',
      architectural: 'Cảnh quan thiên nhiên karst phong hóa nhiệt đới với tháp karst và chóp karst (Fengcong và Fengling) sừng sững giữa biển xanh mênh mông.',
      cultural: 'Đời sống văn hóa sông nước của ngư dân vạn chài cổ truyền gắn kết hài hòa với thiên nhiên.',
      geographical: 'Độ đa dạng sinh học cao nhất miền Bắc với hơn 4.000 loài động thực vật, trong đó có Voọc Cát Bà (Trachypithecus poliocephalus) - loài linh trưởng nằm trong top 25 loài nguy cấp nhất hành tinh.'
    },
    visitingInfo: {
      openingHours: 'Trung tâm Vườn Quốc gia: 07:30 – 17:00; Các tour khám phá vịnh Lan Hạ: từ 07:00 – 18:00.',
      ticketPrice: 'Vé vào cổng Vườn Quốc gia: 80.000đ/người lớn, 40.000đ/học sinh, sinh viên; Vé tham quan vịnh Lan Hạ: 80.000đ/lượt.',
      transportation: 'Từ bến Bính hoặc đảo Vũ Yên đi tàu cao tốc sang Cát Bà, hoặc đi cáp treo vượt biển Cát Hải - Phù Long, hoặc phà Đồng Bài.',
      rules: [
        'Tuyệt đối không mang đồ nhựa dùng một lần vào vùng lõi di sản thế giới.',
        'Không cho động vật hoang dã ăn hoặc săn bắt, ngắt cành hoa, bẻ san hô.',
        'Tuân thủ mặc áo phao cứu hộ khi tham gia các hoạt động chèo thuyền kayak và tắm biển.'
      ],
      verificationDate: '16/10/2026'
    },
    learningPrompts: [
      'Quá trình kiến tạo địa chất Karst ngập chìm của Quần đảo Cát Bà diễn ra qua những giai đoạn biển tiến nào trong kỷ Đệ Tứ?',
      'Tại sao việc ghi danh liên tỉnh Vịnh Hạ Long - Quần đảo Cát Bà là Di sản Thế giới lại đánh dấu bước tiến quan trọng về tư duy bảo tồn sinh thái theo ranh giới tự nhiên?',
      'Đề xuất các giải pháp du lịch sinh thái bền vững để vừa phát triển kinh tế vừa bảo vệ loài Voọc Cát Bà quý hiếm.'
    ],
    sources: [
      {
        title: 'Ha Long Bay - Cat Ba Archipelago World Heritage Nomination Dossier',
        publisher: 'UNESCO World Heritage Centre',
        url: 'https://whc.unesco.org/en/list/672',
        accessDate: '15/10/2026'
      },
      {
        title: 'Thông tin bảo tồn đa dạng sinh học Quần đảo Cát Bà',
        publisher: 'Ban Quản lý Vườn Quốc gia Cát Bà',
        url: 'http://catbanationalpark.vn',
        accessDate: '12/10/2026'
      }
    ],
    lastUpdated: '18/10/2026',
    relatedSiteIds: ['DS06', 'DS04']
  },
  {
    id: 'DS06',
    name: 'Bến K-15 Đồ Sơn (Bến Tàu Không Số)',
    alternateName: 'Điểm khởi đầu đường Hồ Chí Minh trên biển huyền thoại',
    category: 'history',
    categoryLabel: 'Lịch sử kháng chiến',
    recognition: 'Di tích Quốc gia Đặc biệt (thuộc hệ thống Di tích Đường Hồ Chí Minh trên biển)',
    recognitionYear: 2008,
    recognitionRank: 'Đặc biệt',
    address: 'Dưới chân đồi Vạn Hoa, phường Vạn Hương, quận Đồ Sơn, TP. Hải Phòng',
    district: 'Quận Đồ Sơn',
    coordinates: {
      lat: 20.6972,
      lng: 106.8042
    },
    googleMapsUrl: 'https://maps.google.com/?q=20.6972,106.8042',
    thumbnail: '/assets/aistudio/image_977eb8c8.png',
    bannerImage: '/assets/aistudio/image_977eb8c8.png',
    gallery: [
      {
        url: '/assets/aistudio/image_977eb8c8.png',
        caption: 'Bia đá nguyên khối Di tích Quốc gia Đặc biệt Bến K15 - Điểm xuất phát của tuyến Đường Hồ Chí Minh trên biển huyền thoại',
        source: 'Ảnh khảo sát thực địa nhóm học sinh THPT 2026'
      },
      {
        url: '/assets/aistudio/image_7e4a305b.png',
        caption: 'Tượng đài kỷ niệm Bến K15 hình tượng cánh buồm vươn khơi với bia đá ghi công các chiến sĩ Đoàn tàu Không số',
        source: 'Ảnh thực địa tượng đài Bến K15 Đồ Sơn'
      },
      {
        url: '/assets/aistudio/image_977eb8c8.png',
        caption: 'Quảng trường di tích với hàng cột trụ biểu bằng đá xanh nguyên khối chạm khắc hoa văn nhìn ra biển Đông',
        source: 'Ảnh khảo sát không gian quảng trường Bến K15'
      },
      {
        url: '/assets/aistudio/image_7e4a305b.png',
        caption: 'Chi tiết bệ đài trang trí vô lăng lái tàu, mỏ neo hải quân và bia tưởng niệm chiến công hiển hách',
        source: 'Tư liệu chi tiết tượng đài Đường Hồ Chí Minh trên biển'
      }
    ],
    brief: 'Di tích lịch sử quân sự thiêng liêng, nơi xuất phát của những chuyến "Tàu Không số" chở vũ khí, khí tài và cán bộ chi viện bí mật cho chiến trường miền Nam trong cuộc kháng chiến chống Mỹ cứu nước.',
    historyTimeline: [
      {
        period: '23/10/1961',
        event: 'Bộ Tổng Tư lệnh Quân đội nhân dân Việt Nam ra quyết định thành lập Đoàn 759 (tiền thân Đoàn 125 Hải quân) với mật danh "Đoàn tàu Không số", chọn thung lũng Vạn Hoa làm căn cứ mật K15.',
        sourceNote: 'Lịch sử Hải quân nhân dân Việt Nam (NXB Quân đội nhân dân)'
      },
      {
        period: '11/10/1962',
        event: 'Con tàu vỏ gỗ đầu tiên mang tên Phương Đông 1 do thuyền trưởng Lê Văn Một chỉ huy rời bến K-15 chở 30 tấn vũ khí cập bến Vàm Lũng (Cà Mau) an toàn tuyệt đối.',
        sourceNote: 'Kỷ yếu 60 năm Đường Hồ Chí Minh trên biển'
      },
      {
        period: '2008',
        event: 'Bộ Văn hóa, Thể thao và Du lịch ký quyết định xếp hạng Bến K-15 là Di tích Lịch sử Quốc gia.',
        sourceNote: 'Quyết định số 52/2008/QĐ-BVHTTDL ngày 18/08/2008'
      }
    ],
    notableValues: {
      historical: 'Điểm khởi đầu của thiên anh hùng ca "Đường Hồ Chí Minh trên biển", minh chứng cho lòng quả cảm vô song, trí thông minh và ý chí quyết tâm thống nhất đất nước của quân dân ta.',
      architectural: 'Khu di tích gồm các cọc cầu tàu bằng bê tông cốt thép đã nhuốm màu rêu phong theo năm tháng, Tượng đài kỷ niệm chiến công và nhà bia tưởng niệm các anh hùng liệt sĩ Hải quân.',
      cultural: 'Địa chỉ đỏ giáo dục lý tưởng cách mạng, lòng tự hào dân tộc và tình yêu biển đảo quê hương sâu sắc cho thế hệ trẻ học sinh, sinh viên.',
      geographical: 'Vị trí địa lý đắc địa tại mũi nam bán đảo Đồ Sơn, được bao bọc bởi dãy núi Vạn Hoa kín gió, che chở tàu bè ngụy trang tránh khỏi sự do thám của máy bay và tàu chiến địch.'
    },
    visitingInfo: {
      openingHours: '07:00 – 17:30 tất cả các ngày trong tuần.',
      ticketPrice: 'Miễn phí vé tham quan di tích lịch sử.',
      transportation: 'Nằm cuối khu 3 Đồ Sơn, cách trung tâm Hải Phòng khoảng 22km; có đường nhựa ven biển đi thẳng đến chân tượng đài.',
      rules: [
        'Giữ gìn sự trang nghiêm nơi đài tưởng niệm các anh hùng liệt sĩ.',
        'Không vẽ bậy, khắc tên lên các trụ cầu cảng và bia đá di tích.',
        'Cẩn thận trơn trượt khi di chuyển gần mép nước biển mùa thủy triều dâng.'
      ],
      verificationDate: '15/10/2026'
    },
    learningPrompts: [
      'Tại sao vị trí địa lý đồi Vạn Hoa - Bến K-15 lại được Bộ Tổng Tư lệnh lựa chọn làm bến cảng bí mật khởi đầu đường Hồ Chí Minh trên biển?',
      'Ý nghĩa chiến lược của những chuyến tàu Không số đối với thắng lợi của cuộc kháng chiến chống Mỹ cứu nước.',
      'Thế hệ học sinh THPT ngày nay cần làm gì để phát huy truyền thống yêu nước và bảo vệ chủ quyền biển đảo Tổ quốc?'
    ],
    sources: [
      {
        title: 'Hồ sơ Di tích Lịch sử Quốc gia Bến K15',
        publisher: 'Cục Di sản văn hóa',
        url: 'http://dsvh.gov.vn',
        accessDate: '12/10/2026'
      },
      {
        title: 'Huyền thoại Bến K15 và Đường Hồ Chí Minh trên biển',
        publisher: 'Bảo tàng Hải quân Việt Nam',
        url: 'http://baotanghaiquan.vn',
        accessDate: '10/10/2026'
      }
    ],
    lastUpdated: '18/10/2026',
    relatedSiteIds: ['DS04', 'DS05']
  }
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  siteId: string;
  subjectTag: 'Lịch sử' | 'Địa lý' | 'Giáo dục địa phương';
}

export const EDUCATIONAL_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Nhà hát lớn Hải Phòng khánh thành năm nào và chịu ảnh hưởng kiến trúc từ trường phái nào?',
    options: [
      'Khánh thành năm 1912, kiến trúc Tân Cổ Điển Pháp (mô phỏng Nhà hát Palais Garnier)',
      'Khánh thành năm 1945, kiến trúc hiện đại Xô Viết',
      'Khánh thành năm 1888, kiến trúc Gothic thời Trung Cổ',
      'Khánh thành năm 1930, kiến trúc Art Deco phương Tây'
    ],
    correctIndex: 0,
    explanation: 'Nhà hát Lớn Hải Phòng được xây dựng từ năm 1904 đến 1912 trên nền chợ cũ làng An Biên, theo đồ án mô phỏng Nhà hát Palais Garnier ở Paris, phong cách Tân Cổ Điển kết hợp Baroque.',
    siteId: 'DS01',
    subjectTag: 'Lịch sử'
  },
  {
    id: 2,
    question: 'Chùa Dư Hàng (Phúc Lâm Tự) gắn liền với thiền phái Phật giáo cổ truyền nào của Việt Nam?',
    options: [
      'Thiền phái Trúc Lâm Yên Tử do Phật hoàng Trần Nhân Tông sáng lập',
      'Thiền phái Tỳ-ni-đa-lưu-chi thời Bắc thuộc',
      'Thiền phái Vô Ngôn Thông thời nhà Lý',
      'Phái Thiền Tào Động du nhập từ phương Bắc'
    ],
    correctIndex: 0,
    explanation: 'Chùa Dư Hàng có từ thời Tiền Lê và phát triển mạnh mẽ vào thời Trần, gắn liền với các đời tổ của thiền phái Trúc Lâm Yên Tử về thuyết pháp và truyền đạo.',
    siteId: 'DS02',
    subjectTag: 'Giáo dục địa phương'
  },
  {
    id: 3,
    question: 'Nữ tướng Lê Chân - vị nhân vật lịch sử được thờ tại Đền Nghè (An Biên Cổ Miếu) - có công lao gì đối với vùng đất Hải Phòng?',
    options: [
      'Khai hoang lập ấp trang An Biên (tiền thân Hải Phòng) và lập nhiều chiến công trong khởi nghĩa Hai Bà Trưng',
      'Đại phá quân Nam Hán trên sông Bạch Đằng năm 938',
      'Xây dựng thương cảng Vạn Ninh thế kỷ XVII',
      'Khởi xướng phong trào Cần Vương chống Pháp tại miền duyên hải'
    ],
    correctIndex: 0,
    explanation: 'Nữ tướng Lê Chân quê gốc Đông Triều đã về vùng đất ven sông Cấm lập nên trang An Biên xưa, chiêu mộ quân sĩ và tham gia cuộc khởi nghĩa Hai Bà Trưng (năm 40 - 43).',
    siteId: 'DS03',
    subjectTag: 'Lịch sử'
  },
  {
    id: 4,
    question: 'Quần thể Bạch Đằng Giang – Tràng Kênh (Thủy Nguyên) ghi dấu bao nhiêu lần đại thắng giặc ngoại xâm trên dòng sông Bạch Đằng?',
    options: [
      '3 lần (Năm 938 - Ngô Quyền; Năm 981 - Lê Hoàn; Năm 1288 - Trần Hưng Đạo)',
      '1 lần duy nhất vào năm 1288 của quân dân nhà Trần',
      '2 lần vào năm 938 và năm 1288',
      '4 lần kéo dài từ thời Lý đến thời Tây Sơn'
    ],
    correctIndex: 0,
    explanation: 'Sông Bạch Đằng lưu danh muôn thuở với 3 chiến thắng oanh liệt: Năm 938 Ngô Quyền phá tan quân Nam Hán; Năm 981 Lê Đại Hành đánh bại quân Tống; Năm 1288 Trần Quốc Tuấn đại thắng quân Nguyên Mông.',
    siteId: 'DS04',
    subjectTag: 'Lịch sử'
  },
  {
    id: 5,
    question: 'Vịnh Hạ Long - Quần đảo Cát Bà được UNESCO chính thức ghi danh là Di sản Thiên nhiên Thế giới vào thời gian nào?',
    options: [
      'Tháng 09 năm 2023 (Kỳ họp thứ 45 Ủy ban Di sản Thế giới UNESCO tại Riyadh)',
      'Năm 2004 cùng với Khu dự trữ sinh quyển thế giới',
      'Năm 1994 trong đợt công nhận đầu tiên',
      'Tháng 05 năm 2018 tại Pháp'
    ],
    correctIndex: 0,
    explanation: 'Ngày 16/09/2023, tại kỳ họp thứ 45 ở Riyadh (Ả Rập Xê Út), UNESCO đã chính thức công nhận Vịnh Hạ Long - Quần đảo Cát Bà là Di sản Thiên nhiên Thế giới liên tỉnh đầu tiên của Việt Nam.',
    siteId: 'DS05',
    subjectTag: 'Địa lý'
  },
  {
    id: 6,
    question: 'Bến K-15 Đồ Sơn có vai trò lịch sử đặc biệt quan trọng nào trong cuộc kháng chiến chống Mỹ cứu nước?',
    options: [
      'Điểm xuất phát của những chuyến Tàu Không số mở đầu tuyến Đường Hồ Chí Minh trên biển huyền thoại',
      'Nơi bắt giữ tàu khu trục Maddox trong sự kiện vịnh Bắc Bộ',
      'Căn cứ đóng quân đầu tiên của lực lượng tàu ngầm Hải quân',
      'Trạm tiếp nhận hàng viện trợ quốc tế từ các nước xã hội chủ nghĩa'
    ],
    correctIndex: 0,
    explanation: 'Bến K-15 dưới chân đồi Vạn Hoa (Đồ Sơn) là điểm xuất phát của Đoàn tàu Không số (Đoàn 759 - Đoàn 125 Hải quân), chuyến tàu đầu tiên xuất phát đêm 11/10/1962 chi viện vũ khí cho chiến trường miền Nam.',
    siteId: 'DS06',
    subjectTag: 'Lịch sử'
  }
];

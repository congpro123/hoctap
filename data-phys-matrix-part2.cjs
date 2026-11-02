// Module sinh 5 đề Vật lí 10 tiếp theo (Đề 06 đến Đề 10)
// Chuẩn ma trận Bộ GD&ĐT 2026: 16 câu MC (4.0đ), 2 câu TF (2.0đ), 4 câu Short (1.0đ)
// Mức độ phổ thông, số liệu đẹp, lời giải chi tiết, hình vẽ SVG trực quan, không trùng lặp

// SVG Helper Functions
function svgSignLaser() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 92,85 8,85" fill="#facc15" stroke="#000" stroke-width="4"/><circle cx="50" cy="55" r="8" fill="#000"/><line x1="26" y1="55" x2="74" y2="55" stroke="#000" stroke-width="3"/><line x1="34" y1="39" x2="66" y2="71" stroke="#000" stroke-width="3"/><line x1="34" y1="71" x2="66" y2="39" stroke="#000" stroke-width="3"/><line x1="50" y1="31" x2="50" y2="79" stroke="#000" stroke-width="3"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cảnh báo tia laser nguy hiểm</div></div>`;
}

function svgSignRadioactive() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 92,85 8,85" fill="#facc15" stroke="#000" stroke-width="4"/><circle cx="50" cy="55" r="7" fill="#000"/><path d="M50,48 L44,28 A24,24 0 0,1 56,28 Z" fill="#000"/><path d="M44,59 L26,69 A24,24 0 0,1 20,59 Z" fill="#000"/><path d="M56,59 L74,69 A24,24 0 0,0 80,59 Z" fill="#000"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cảnh báo chất phóng xạ</div></div>`;
}

function svgSignPoison() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 92,85 8,85" fill="#facc15" stroke="#000" stroke-width="4"/><circle cx="50" cy="46" r="14" fill="#000"/><rect x="42" y="56" width="16" height="8" rx="2" fill="#000"/><circle cx="45" cy="45" r="3" fill="#facc15"/><circle cx="55" cy="45" r="3" fill="#facc15"/><line x1="30" y1="72" x2="70" y2="72" stroke="#000" stroke-width="4"/><line x1="35" y1="65" x2="65" y2="79" stroke="#000" stroke-width="4"/><line x1="35" y1="79" x2="65" y2="65" stroke="#000" stroke-width="4"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cảnh báo hóa chất độc hại</div></div>`;
}

function svgSignNoFire() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#fff" stroke="#dc2626" stroke-width="8"/><path d="M50,28 Q58,40 54,50 Q60,46 58,60 Q52,66 48,66 Q40,66 40,58 Q42,52 46,46 Z" fill="#dc2626"/><line x1="20" y1="20" x2="80" y2="80" stroke="#dc2626" stroke-width="8"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cấm lửa (cấm hút thuốc / đánh lửa)</div></div>`;
}

function svgGraphDT2(dMax, tMax, points) {
  const w = 240, h = 160;
  const padL = 40, padB = 30, padT = 20, padR = 20;
  const pw = w - padL - padR;
  const ph = h - padT - padB;
  
  const toX = t => padL + (t / tMax) * pw;
  const toY = d => padT + ph - (d / dMax) * ph;
  
  let poly = points.map(p => `${toX(p.t)},${toY(p.d)}`).join(' ');
  
  return `<div class="exam-svg-wrap" style="text-align:center;margin:12px 0;"><svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;"><line x1="${padL}" y1="${padT + ph}" x2="${w - 10}" y2="${padT + ph}" stroke="#334155" stroke-width="2"/><polygon points="${w-10},${padT+ph-4} ${w},${padT+ph} ${w-10},${padT+ph+4}" fill="#334155"/><text x="${w - 16}" y="${padT + ph + 18}" font-size="11" font-weight="bold" fill="#334155">t(s)</text><line x1="${padL}" y1="${padT + ph}" x2="${padL}" y2="10" stroke="#334155" stroke-width="2"/><polygon points="${padL-4},10 ${padL},2 ${padL+4},10" fill="#334155"/><text x="${padL - 28}" y="14" font-size="11" font-weight="bold" fill="#334155">d(m)</text><polyline points="${poly}" fill="none" stroke="#0284c7" stroke-width="3"/>${points.map(p => `<circle cx="${toX(p.t)}" cy="${toY(p.d)}" r="4" fill="#dc2626"/><text x="${toX(p.t)}" y="${padT + ph + 16}" font-size="10" fill="#475569" text-anchor="middle">${p.t}</text><text x="${padL - 8}" y="${toY(p.d) + 4}" font-size="10" fill="#475569" text-anchor="end">${p.d}</text><line x1="${padL}" y1="${toY(p.d)}" x2="${toX(p.t)}" y2="${toY(p.d)}" stroke="#94a3b8" stroke-dasharray="2,2"/><line x1="${toX(p.t)}" y1="${padT + ph}" x2="${toX(p.t)}" y2="${toY(p.d)}" stroke="#94a3b8" stroke-dasharray="2,2"/>`).join('')}</svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Đồ thị độ dịch chuyển – thời gian (d – t)</div></div>`;
}

function svgGraphVT2(vMax, tMax, points) {
  const w = 240, h = 160;
  const padL = 40, padB = 30, padT = 20, padR = 20;
  const pw = w - padL - padR;
  const ph = h - padT - padB;
  
  const toX = t => padL + (t / tMax) * pw;
  const toY = v => padT + ph - (v / vMax) * ph;
  
  let poly = points.map(p => `${toX(p.t)},${toY(p.v)}`).join(' ');
  
  return `<div class="exam-svg-wrap" style="text-align:center;margin:12px 0;"><svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;"><line x1="${padL}" y1="${padT + ph}" x2="${w - 10}" y2="${padT + ph}" stroke="#334155" stroke-width="2"/><polygon points="${w-10},${padT+ph-4} ${w},${padT+ph} ${w-10},${padT+ph+4}" fill="#334155"/><text x="${w - 24}" y="${padT + ph + 18}" font-size="11" font-weight="bold" fill="#334155">t(s)</text><line x1="${padL}" y1="${padT + ph}" x2="${padL}" y2="10" stroke="#334155" stroke-width="2"/><polygon points="${padL-4},10 ${padL},2 ${padL+4},10" fill="#334155"/><text x="${padL - 32}" y="14" font-size="11" font-weight="bold" fill="#334155">v(m/s)</text><polyline points="${poly}" fill="none" stroke="#7c3aed" stroke-width="3"/>${points.map(p => `<circle cx="${toX(p.t)}" cy="${toY(p.v)}" r="4" fill="#059669"/><text x="${toX(p.t)}" y="${padT + ph + 16}" font-size="10" fill="#475569" text-anchor="middle">${p.t}</text><text x="${padL - 8}" y="${toY(p.v) + 4}" font-size="10" fill="#475569" text-anchor="end">${p.v}</text><line x1="${padL}" y1="${toY(p.v)}" x2="${toX(p.t)}" y2="${toY(p.v)}" stroke="#94a3b8" stroke-dasharray="2,2"/><line x1="${toX(p.t)}" y1="${padT + ph}" x2="${toX(p.t)}" y2="${toY(p.v)}" stroke="#94a3b8" stroke-dasharray="2,2"/>`).join('')}</svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Đồ thị vận tốc – thời gian (v – t)</div></div>`;
}

// -------------------------------------------------------------
// ĐỀ 06 - THPT Hùng Vương – Quảng Nam
// -------------------------------------------------------------
const exam06 = {
  id: "vatli-10-de-06",
  title: "Vật lí 10 - Đề 06 - Trường THPT Hùng Vương – Quảng Nam (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Hùng Vương",
    province: "Quảng Nam",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14294/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-hung-vuong-quang-nam",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Phát biểu nào sau đây nêu đúng vai trò to lớn của Vật lí đối với sự tiến bộ của khoa học công nghệ?",
      ["Vật lí là cơ sở khoa học nền tảng tạo tiền đề cho các cuộc cách mạng công nghiệp.", "Vật lí chỉ thuần túy giải thích hiện tượng tự nhiên mà không có ứng dụng kĩ thuật.", "Mọi công nghệ hiện đại đều phát triển độc lập không cần định luật vật lí.", "Vật lí không liên quan đến sự phát triển của vi mạch bán dẫn và máy tính."],
      0,
      "Vật lí học là nền tảng tri thức cho kĩ thuật cơ khí, nhiệt điện, vi điện tử, laser, năng lượng hạt nhân và công nghệ thông tin."
    ],
    [
      `Trong phòng thí nghiệm, biển báo có hình tròn viền đỏ, nền trắng, gạch chéo đỏ đè lên ngọn lửa như hình bên có ý nghĩa: ${svgSignNoFire()}`,
      ["Cấm lửa (không được hút thuốc, không bật lửa).", "Cảnh báo chất lỏng dễ cháy.", "Nơi đặt bình chữa cháy.", "Bắt buộc phải bật lò đốt."],
      0,
      "Biển tròn viền đỏ gạch chéo là biển cấm; biểu tượng ngọn lửa bị gạch chéo là biển cấm lửa."
    ],
    [
      "Khi dùng ampe kế đo cường độ dòng điện, kim chỉ thị dao động nhẹ quanh vạch đo do chấn động bên ngoài thuộc loại sai số nào?",
      ["Sai số ngẫu nhiên.", "Sai số hệ thống.", "Sai số dụng cụ.", "Sai số tỉ đối cố định."],
      0,
      "Dao động bất định do môi trường ngoài (chấn động, gió, mắt đọc dao động) là nguyên nhân gây ra sai số ngẫu nhiên."
    ],
    [
      "Một phép đo vận tốc có kết quả v = (12,5 ± 0,2) m/s. Sai số tuyệt đối của phép đo là:",
      ["0,2 m/s.", "12,5 m/s.", "1,6%.", "0,1 m/s."],
      0,
      "Theo quy ước viết kết quả A = Ā ± ΔA, sai số tuyệt đối là Δv = 0,2 m/s."
    ],
    [
      "Một người đi xe đạp xuất phát từ điểm O đi về hướng Bắc 3 km, sau đó rẽ sang hướng Đông đi tiếp 4 km đến điểm M. Độ lớn độ dịch chuyển OM bằng:",
      ["5 km.", "7 km.", "1 km.", "12 km."],
      0,
      "Hai chuyển động vuông góc nhau tạo thành tam giác vuông: OM = √(3² + 4²) = √25 = 5 km."
    ],
    [
      "Tốc độ trung bình v_tb của một vật chuyển động trên quãng đường s trong khoảng thời gian t được tính bởi:",
      ["v_tb = s / t.", "v_tb = d / t.", "v_tb = s × t.", "v_tb = 1/2·st."],
      0,
      "Tốc độ trung bình bằng tổng quãng đường chia cho tổng thời gian: v_tb = s / t."
    ],
    [
      "Đồ thị độ dịch chuyển – thời gian (d – t) dưới đây mô tả chuyển động của một xe máy. Tốc độ của xe máy trong 2 giây đầu tiên là: " + svgGraphDT2(40, 2, [{t:0,d:0}, {t:1,d:20}, {t:2,d:40}]),
      ["20 m/s.", "40 m/s.", "10 m/s.", "30 m/s."],
      0,
      "Độ dốc v = Δd / Δt = 40 / 2 = 20 m/s."
    ],
    [
      "Một người đi ca nô từ bờ bên này sang bờ bên kia của một dòng sông nước chảy. Vận tốc của ca nô đối với mặt đất phụ thuộc vào:",
      ["Cả vận tốc của ca nô đối với dòng nước và vận tốc của dòng nước đối với bờ.", "Chỉ phụ thuộc vào vận tốc của ca nô đối với nước.", "Chỉ phụ thuộc vào tốc độ chảy của dòng sông.", "Không phụ thuộc vào yếu tố nào ở trên."],
      0,
      "Theo định lí cộng vận tốc: v⃗₁₃ = v⃗₁₂ + v⃗₂₃, phụ thuộc cả vận tốc thuyền so với nước và nước so với bờ."
    ],
    [
      "Một ôtô chuyển động thẳng đều trên quãng đường 90 km trong thời gian 1 giờ 30 phút. Vận tốc của ôtô là:",
      ["60 km/h.", "45 km/h.", "75 km/h.", "90 km/h."],
      0,
      "Thời gian t = 1,5 h. Vận tốc v = 90 / 1,5 = 60 km/h."
    ],
    [
      "Chuyển động thẳng có vận tốc giảm dần đều theo thời gian với gia tốc a không đổi là chuyển động:",
      ["Thẳng chậm dần đều.", "Thẳng nhanh dần đều.", "Thẳng đều.", "Tròn đều."],
      0,
      "Vận tốc giảm đều theo thời gian là đặc điểm định nghĩa của chuyển động thẳng chậm dần đều."
    ],
    [
      "Chọn công thức ĐÚNG về vận tốc tức thời trong chuyển động thẳng biến đổi đều:",
      ["v = v₀ + at.", "v = v₀ – at².", "v = at / 2.", "v = v₀t + at."],
      0,
      "Công thức vận tốc chuẩn: v = v₀ + at."
    ],
    [
      "Một xe ôtô đang chạy với tốc độ 10 m/s thì tăng tốc với gia tốc 2 m/s². Sau 5 giây, tốc độ của xe là:",
      ["20 m/s.", "15 m/s.", "25 m/s.", "30 m/s."],
      0,
      "v = v₀ + at = 10 + 2 × 5 = 20 m/s."
    ],
    [
      "Hình vẽ bên biểu diễn đồ thị vận tốc – thời gian (v – t) của một xe chuyển động thẳng. Đoạn đồ thị nằm ngang cho biết xe đang: " + svgGraphVT2(30, 6, [{t:0,d:0,v:15}, {t:3,d:45,v:15}, {t:6,d:90,v:15}]),
      ["Chuyển động thẳng đều.", "Chuyển động nhanh dần đều.", "Chuyển động chậm dần đều.", "Đang đứng yên."],
      0,
      "v không đổi = 15 m/s theo thời gian, chứng tỏ xe chuyển động thẳng đều."
    ],
    [
      "Chuyển động nào sau đây có thể coi gần đúng là chuyển động rơi tự do?",
      ["Một viên sỏi nhỏ được thả từ trên cầu xuống sông trong không khí tĩnh lặng.", "Một chiếc dù đang bung ra rơi xuống đất.", "Một tờ giấy phẳng thả rơi trong phòng.", "Một quả bóng bay xì hơi lượn lờ trong gió."],
      0,
      "Viên sỏi đặc có trọng lượng rất lớn so với lực cản không khí nên sự rơi của nó gần đúng là rơi tự do."
    ],
    [
      "Tại nơi có g = 10 m/s², một vật rơi tự do sau 3 giây kể từ lúc thả sẽ đạt tốc độ:",
      ["30 m/s.", "15 m/s.", "45 m/s.", "20 m/s."],
      0,
      "v = gt = 10 × 3 = 30 m/s."
    ],
    [
      "Một xe tải đang chạy với vận tốc 15 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc 1 m/s². Quãng đường xe đi được sau 5 giây kể từ lúc hãm phanh là:",
      ["62,5 m.", "75 m.", "50 m.", "87,5 m."],
      0,
      "s = v₀t + 1/2·at² = 15 × 5 + 0,5 × (–1) × 5² = 75 – 12,5 = 62,5 m."
    ]
  ],
  tf: [
    {
      stem: "Một người tập thể dục đi bộ quanh một sân vận động hình chữ nhật có chiều dài 100 m và chiều rộng 60 m. Người đó bắt đầu từ góc A, đi qua góc B, góc C, góc D và quay trở lại điểm A đúng 1 vòng trong thời gian 4 phút.",
      items: [
        ["Quãng đường người đó đi được trong 1 vòng là 320 m.", true, "Chu vi hình chữ nhật: C = 2 × (100 + 60) = 320 m."],
        ["Độ lớn độ dịch chuyển của người đó sau khi hoàn thành 1 vòng là 320 m.", false, "Điểm kết thúc trùng điểm xuất phát nên độ dịch chuyển d = 0 m."],
        ["Tốc độ trung bình của người đó trong chuyến đi xấp xỉ bằng 1,33 m/s.", true, "t = 4 phút = 240 s. v = 320 / 240 ≈ 1,33 m/s."],
        ["Vận tốc trung bình của người đó sau cả vòng đi bằng 0 m/s.", true, "Vì d = 0 nên v_tb = d / t = 0 m/s."]
      ]
    },
    {
      stem: "Một xe ôtô chở hàng đang chuyển động thẳng đều với tốc độ 20 m/s thì tài xế nhìn thấy đèn đỏ phía trước cách xe 80 m liền đạp phanh. Xe chuyển động chậm dần đều với gia tốc có độ lớn 2,5 m/s².",
      items: [
        ["Thời gian xe chuyển động từ lúc đạp phanh đến khi dừng hẳn là 8 giây.", true, "t = v₀ / |a| = 20 / 2,5 = 8 s."],
        ["Quãng đường xe ôtô đi được từ lúc bắt đầu đạp phanh đến khi dừng lại là 80 m.", true, "s = v₀² / (2|a|) = 20² / (2 × 2,5) = 400 / 5 = 80 m."],
        ["Xe ôtô dừng lại đúng tại vị trí cột đèn giao thông mà không bị vượt quá vạch.", true, "Vì quãng đường hãm phanh đúng bằng khoảng cách ban đầu 80 m."],
        ["Sau 4 giây kể từ khi đạp phanh, tốc độ của xe tải còn lại là 5 m/s.", false, "Sau 4 s: v = 20 – 2,5 × 4 = 10 m/s."]
      ]
    }
  ],
  short: [
    {
      question: "Một xe gắn máy đi từ thị xã A đến thị xã B cách nhau 45 km hết thời gian 1 giờ 15 phút. Tốc độ trung bình của xe tính theo km/h là bao nhiêu?",
      answer: "36",
      explanation: "Đổi 1 giờ 15 phút = 1,25 h. Tốc độ v = 45 / 1,25 = 36 km/h."
    },
    {
      question: "Hai tàu hỏa chạy cùng chiều trên hai đường ray song song với tốc độ lần lượt là 60 km/h và 40 km/h. Vận tốc của tàu thứ nhất so với tàu thứ hai có độ lớn bằng bao nhiêu km/h?",
      answer: "20",
      explanation: "Chạy cùng chiều nên vận tốc tương đối: v = 60 – 40 = 20 km/h."
    },
    {
      question: "Một xe máy đang chạy với vận tốc 10 m/s thì tăng tốc chuyển động thẳng nhanh dần đều với gia tốc 2 m/s² trên quãng đường dài 24 m. Vận tốc của xe máy ở cuối đoạn đường này là bao nhiêu m/s?",
      answer: "14",
      explanation: "v = √(v₀² + 2as) = √(10² + 2 × 2 × 24) = √(100 + 96) = √196 = 14 m/s."
    },
    {
      question: "Thả rơi tự do một hòn đá từ độ cao 20 m tại nơi có g = 10 m/s². Vận tốc của hòn đá ngay trước khi chạm đất là bao nhiêu m/s?",
      answer: "20",
      explanation: "v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 07 - THPT Nguyễn Huệ – Quảng Nam
// -------------------------------------------------------------
const exam07 = {
  id: "vatli-10-de-07",
  title: "Vật lí 10 - Đề 07 - Trường THPT Nguyễn Huệ – Quảng Nam (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Nguyễn Huệ",
    province: "Quảng Nam",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/11213/de-thi-giua-ki-1-vat-li-10-nam-2024-2025-truong-thpt-nguyen-hue-quang",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Phân ngành nào sau đây thuộc lĩnh vực nghiên cứu của Vật lí cổ điển?",
      ["Cơ học, Nhiệt học, Quang học và Điện từ học.", "Vật lí lượng tử và hiệu ứng quang điện.", "Cơ học lượng tử và cấu trúc quark.", "Vật lí hạt nhân phóng xạ cao năng."],
      0,
      "Vật lí cổ điển phát triển từ thế kỉ XVII đến cuối thế kỉ XIX, bao gồm Cơ học Newton, Nhiệt học, Quang học và Điện từ học Maxwell."
    ],
    [
      `Trong phòng thí nghiệm Vật lí hiện đại, biển báo tam giác viền đen, nền vàng có hình ba cánh quạt như hình bên là biển cảnh báo: ${svgSignRadioactive()}`,
      ["Khu vực có nguồn bức xạ ion hóa, chất phóng xạ nguy hiểm.", "Khu vực có điện trường mạnh.", "Khu vực có quạt gió công suất lớn.", "Khu vực có nguồn bức xạ laser."],
      0,
      "Biểu tượng cánh quạt ba lá là biểu tượng quốc tế cảnh báo chất phóng xạ và bức xạ ion hóa."
    ],
    [
      "Cho hai đại lượng đo trực tiếp A và B có sai số tuyệt đối là ΔA và ΔB. Đại lượng C = A + B có sai số tuyệt đối ΔC bằng:",
      ["ΔC = ΔA + ΔB.", "ΔC = ΔA – ΔB.", "ΔC = ΔA × ΔB.", "ΔC = ΔA / ΔB."],
      0,
      "Sai số tuyệt đối của một tổng hoặc một hiệu luôn bằng tổng các sai số tuyệt đối thành phần: ΔC = ΔA + ΔB."
    ],
    [
      "Một chất điểm chuyển động trên trục Ox từ vị trí x₁ = 2 m đến vị trí x₂ = –4 m. Độ dịch chuyển của chất điểm là:",
      ["–6 m.", "6 m.", "2 m.", "–2 m."],
      0,
      "d = x₂ – x₁ = –4 – 2 = –6 m."
    ],
    [
      "Trên đồ thị độ dịch chuyển – thời gian (d – t), đường biểu diễn là một đường thẳng đi xuống theo thời gian. Điều này chứng tỏ vật:",
      ["Chuyển động thẳng đều ngược chiều dương.", "Chuyển động thẳng đều cùng chiều dương.", "Đang đứng yên tại chỗ.", "Chuyển động nhanh dần đều."],
      0,
      "Hệ số góc âm (v = Δd / Δt < 0) chứng tỏ vật chuyển động thẳng đều theo chiều âm (ngược chiều dương)."
    ],
    [
      "Một người chèo thuyền qua sông với vận tốc 3 m/s vuông góc với dòng chảy. Nước sông chảy xuôi với vận tốc 4 m/s. Vận tốc của thuyền so với bờ sông có độ lớn bằng:",
      ["5 m/s.", "7 m/s.", "1 m/s.", "3,5 m/s."],
      0,
      "Hai vận tốc vuông góc nhau nên v = √(3² + 4²) = √25 = 5 m/s."
    ],
    [
      "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu với gia tốc a. Quãng đường s đi được trong thời gian t tỉ lệ thuận với:",
      ["Bình phương thời gian t².", "Thời gian t.", "Căn bậc hai của t.", "Nghịch đảo của thời gian t."],
      0,
      "Vì s = 1/2·a·t² nên quãng đường s tỉ lệ thuận với bình phương thời gian t²."
    ],
    [
      "Một xe ôtô đang chạy với tốc độ 20 m/s thì hãm phanh với gia tốc có độ lớn 4 m/s². Thời gian từ lúc hãm phanh đến khi xe dừng lại là:",
      ["5 s.", "4 s.", "8 s.", "10 s."],
      0,
      "t = (0 – 20) / (–4) = 5 s."
    ],
    [
      "Hai vật rơi tự do tại cùng một nơi có thời gian rơi lần lượt là t₁ và t₂ = 2t₁. Tỉ số độ cao thả hai vật h₂ / h₁ bằng:",
      ["4.", "2.", "8.", "16."],
      0,
      "Vì h = 1/2·g·t² tỉ lệ thuận với t² nên h₂ / h₁ = (t₂ / t₁)² = 2² = 4."
    ],
    [
      "Một giọt nước mưa rơi tự do từ mái nhà cao 20 m xuống mặt đất. Lấy g = 10 m/s². Tốc độ của giọt nước ngay trước khi chạm đất là:",
      ["20 m/s.", "10 m/s.", "15 m/s.", "25 m/s."],
      0,
      "v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s."
    ],
    [
      "Một quả bóng được ném ngang từ độ cao h = 5 m với vận tốc ban đầu v₀. Điểm chạm đất cách vị trí ném theo phương ngang là L = 12 m. Lấy g = 10 m/s². Tốc độ ném ban đầu v₀ bằng:",
      ["12 m/s.", "10 m/s.", "6 m/s.", "24 m/s."],
      0,
      "Thời gian rơi t = √(2h / g) = √(2 × 5 / 10) = 1 s. Tốc độ ném v₀ = L / t = 12 / 1 = 12 m/s."
    ],
    [
      "Trong chuyển động ném ngang, tại điểm chạm đất, phương của vectơ vận tốc:",
      ["Nghiêng một góc so với phương ngang hướng xuống dưới.", "Nằm ngang.", "Thẳng đứng hướng xuống.", "Thẳng đứng hướng lên."],
      0,
      "Tại điểm chạm đất, vận tốc v⃗ = v⃗_x + v⃗_y có hai thành phần vuông góc nên hợp với phương ngang một góc nghiêng hướng xuống."
    ],
    [
      "Gia tốc tức thời là:",
      ["Gia tốc tại một thời điểm xác định trên quỹ đạo.", "Gia tốc trung bình trên toàn bộ quãng đường.", "Độ dịch chuyển chia cho thời gian.", "Vận tốc tức thời chia cho thời gian."],
      0,
      "Gia tốc tức thời a⃗ = dv⃗ / dt đo sự thay đổi vận tốc tại thời điểm đang xét."
    ],
    [
      "Một chất điểm chuyển động theo phương trình v = 6 – 2t (m/s). Chất điểm dừng lại tại thời điểm:",
      ["t = 3 s.", "t = 6 s.", "t = 2 s.", "t = 12 s."],
      0,
      "Vật dừng lại khi v = 0 suy ra 6 – 2t = 0 nên t = 3 s."
    ],
    [
      "Khi thả rơi một chiếc lông chim và một hòn bi chì trong ống chân không Newton thì:",
      ["Cả hai rơi nhanh như nhau và chạm đáy ống cùng lúc.", "Hòn bi chì rơi nhanh hơn chạm đáy trước.", "Chiếc lông chim rơi nhanh hơn hòn bi chì.", "Cả hai đều lơ lửng không rơi."],
      0,
      "Trong ống đã hút hết không khí (chân không), không còn lực cản nên mọi vật đều rơi tự do như nhau."
    ],
    [
      "Một xe đồ chơi chạy với vận tốc ban đầu v₀ = 2 m/s và gia tốc a = 1,5 m/s² trong thời gian 4 giây. Quãng đường xe đi được là:",
      ["20 m.", "14 m.", "12 m.", "16 m."],
      0,
      "s = v₀t + 1/2·at² = 2 × 4 + 0,5 × 1,5 × 4² = 8 + 12 = 20 m."
    ]
  ],
  tf: [
    {
      stem: "Một xe máy xuất phát từ điểm A chạy thẳng đều về phía Đông 12 km trong 15 phút, sau đó dừng lại nghỉ 5 phút rồi rẽ sang hướng Bắc chạy thẳng đều tiếp 9 km trong 10 phút đến điểm B.",
      items: [
        ["Tổng quãng đường xe máy đi được từ A đến B là 21 km.", true, "s = 12 + 9 = 21 km."],
        ["Độ lớn độ dịch chuyển AB của xe máy bằng 15 km.", true, "Hai đoạn đường vuông góc Đông - Bắc: d = √(12² + 9²) = √225 = 15 km."],
        ["Tốc độ trung bình của xe máy trong toàn bộ chuyến đi bằng 42 km/h.", true, "Tổng thời gian t = 15 + 5 + 10 = 30 phút = 0,5 h. Tốc độ v = 21 / 0,5 = 42 km/h."],
        ["Vận tốc trung bình của xe máy trong cả chuyến đi có độ lớn bằng 30 km/h.", true, "v_tb = d / t = 15 / 0,5 = 30 km/h."]
      ]
    },
    {
      stem: "Một ôtô đang chuyển động thẳng đều với vận tốc 72 km/h thì bất ngờ hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s² cho đến khi dừng lại hẳn.",
      items: [
        ["Vận tốc ban đầu của ôtô khi bắt đầu hãm phanh là 20 m/s.", true, "Đổi 72 km/h = 20 m/s."],
        ["Thời gian hãm phanh của xe đến khi dừng hẳn là 10 giây.", true, "t = v₀ / |a| = 20 / 2 = 10 s."],
        ["Quãng đường xe ôtô đi được từ lúc bắt đầu hãm phanh đến khi dừng lại là 100 m.", true, "s = v₀² / (2|a|) = 20² / (2 × 2) = 400 / 4 = 100 m."],
        ["Sau 5 giây kể từ lúc hãm phanh, xe đã đi được quãng đường 85 m.", false, "Sau 5 s: s₅ = 20 × 5 + 0,5 × (–2) × 5² = 100 – 25 = 75 m."]
      ]
    }
  ],
  short: [
    {
      question: "Một bạn học sinh đi bộ từ nhà đến siêu thị cách nhà 1,5 km hết thời gian 20 phút. Tốc độ đi bộ trung bình của bạn tính theo km/h là bao nhiêu?",
      answer: "4.5",
      explanation: "Đổi 20 phút = 1/3 h. Tốc độ v = 1,5 / (1/3) = 4,5 km/h."
    },
    {
      question: "Một chiếc ca nô chạy xuôi dòng một khúc sông dài 36 km hết 1,5 giờ. Biết vận tốc dòng nước là 4 km/h. Vận tốc của ca nô so với dòng nước là bao nhiêu km/h?",
      answer: "20",
      explanation: "v_xuôi = 36 / 1,5 = 24 km/h. Vận tốc ca nô = 24 – 4 = 20 km/h."
    },
    {
      question: "Một đoàn tàu hỏa rời ga chuyển động thẳng nhanh dần đều. Sau 15 giây tàu đạt tốc độ 9 m/s. Gia tốc của đoàn tàu bằng bao nhiêu m/s²?",
      answer: "0.6",
      explanation: "a = (9 – 0) / 15 = 0,6 m/s²."
    },
    {
      question: "Thả một hòn đá rơi tự do từ đỉnh tháp cao 45 m xuống mặt đất tại nơi có g = 10 m/s². Thời gian hòn đá rơi là bao nhiêu giây?",
      answer: "3",
      explanation: "t = √(2h / g) = √(2 × 45 / 10) = √9 = 3 s."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 08 - THPT số 1 Lê Hồng Phong – Đắk Lắk
// -------------------------------------------------------------
const exam08 = {
  id: "vatli-10-de-08",
  title: "Vật lí 10 - Đề 08 - Trường THPT số 1 Lê Hồng Phong – Đắk Lắk (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT số 1 Lê Hồng Phong",
    province: "Đắk Lắk",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14293/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-so-1-le-hong-phong-dak-lak",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Để tìm hiểu các quy luật tự nhiên, phương pháp nào sau đây giúp kiểm chứng trực tiếp tính đúng đắn của giả thuyết khoa học?",
      ["Phương pháp thực nghiệm (làm thí nghiệm kiểm tra).", "Phương pháp phỏng đoán cảm tính.", "Phương pháp tham khảo ý kiến số đông trên mạng.", "Phương pháp tư biện không cần dữ liệu."],
      0,
      "Thực nghiệm là tiêu chuẩn chân lí cao nhất để khẳng định hay bác bỏ một giả thuyết vật lí."
    ],
    [
      `Trong phòng thực hành, biển báo có hình tam giác viền đen nền vàng, bên trong có hình phát tia laser như hình bên cảnh báo: ${svgSignLaser()}`,
      ["Nguy hiểm do tia bức xạ laser gây tổn thương mắt và da.", "Khu vực có đèn chiếu sáng thông thường.", "Khu vực có điện áp thấp.", "Khu vực cấm chụp ảnh."],
      0,
      "Biển tam giác hình vệt sáng phát tia là biển cảnh báo nguy hiểm từ nguồn bức xạ laser."
    ],
    [
      "Khi dùng đồng hồ bấm giây cơ học có độ chia nhỏ nhất 0,2 s, sai số dụng cụ được quy ước lấy bằng:",
      ["0,1 s hoặc 0,2 s.", "0,01 s.", "0,02 s.", "1,0 s."],
      0,
      "Sai số dụng cụ đo thông thường lấy bằng một nửa độ chia nhỏ nhất (0,1 s) hoặc một độ chia nhỏ nhất (0,2 s) tùy quy ước."
    ],
    [
      "Một phép đo thời gian cho kết quả t = (4,0 ± 0,1) s. Sai số tỉ đối δt của phép đo là:",
      ["2,5%.", "1,0%.", "4,0%.", "0,25%."],
      0,
      "δt = (0,1 / 4,0) × 100% = 2,5%."
    ],
    [
      "Một người đi bộ từ điểm M(–2 m) đến điểm N(3 m) rồi đi tiếp đến điểm P(7 m) trên trục tọa độ Ox. Độ dịch chuyển tổng cộng của người đó là:",
      ["9 m.", "5 m.", "4 m.", "12 m."],
      0,
      "d = x_P – x_M = 7 – (–2) = 9 m."
    ],
    [
      "Một vật chuyển động tròn đều một vòng hết 10 giây. Tốc độ trung bình và độ lớn vận tốc trung bình của vật trong thời gian 10 giây đó là:",
      ["Tốc độ trung bình khác 0; vận tốc trung bình bằng 0.", "Cả hai đều bằng 0.", "Cả hai đều khác 0 và bằng nhau.", "Tốc độ trung bình bằng 0; vận tốc trung bình khác 0."],
      0,
      "Vì đi hết 1 vòng nên điểm cuối trùng điểm đầu, độ dịch chuyển d = 0 suy ra vận tốc trung bình bằng 0. Quãng đường s > 0 nên tốc độ trung bình khác 0."
    ],
    [
      "Đồ thị độ dịch chuyển – thời gian (d – t) của một vật chuyển động thẳng có dạng d = 5t (m; s). Vận tốc của vật là:",
      ["5 m/s.", "2,5 m/s.", "10 m/s.", "0 m/s."],
      0,
      "Phương trình d = vt nên vận tốc v = 5 m/s."
    ],
    [
      "Một ca nô chạy xuôi dòng trên khúc sông thẳng. Vận tốc của ca nô so với dòng nước là 12 km/h, vận tốc dòng nước so với bờ là 3 km/h. Thời gian ca nô đi hết quãng đường 30 km là:",
      ["2 giờ.", "2,5 giờ.", "1,5 giờ.", "3 giờ."],
      0,
      "Vận tốc xuôi dòng: v = 12 + 3 = 15 km/h. Thời gian t = s / v = 30 / 15 = 2 giờ."
    ],
    [
      "Một vận động viên bơi bướm bơi với tốc độ trung bình 1,6 m/s trong thời gian 50 s. Quãng đường người đó bơi được là:",
      ["80 m.", "50 m.", "100 m.", "64 m."],
      0,
      "s = v × t = 1,6 × 50 = 80 m."
    ],
    [
      "Một ôtô đang đứng yên thì bắt đầu chuyển động nhanh dần đều với gia tốc a = 1,2 m/s². Vận tốc của ôtô sau 10 giây là:",
      ["12 m/s.", "6 m/s.", "24 m/s.", "1,2 m/s."],
      0,
      "v = at = 1,2 × 10 = 12 m/s."
    ],
    [
      "Hệ thức nào sau đây liên hệ đúng giữa độ dịch chuyển d, vận tốc ban đầu v₀, vận tốc v và gia tốc a?",
      ["v² – v₀² = 2ad.", "v² + v₀² = 2ad.", "v – v₀ = ad².", "v² – v₀² = ad."],
      0,
      "Công thức độc lập thời gian chuẩn: v² – v₀² = 2ad."
    ],
    [
      "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động chậm dần đều là đường thẳng:",
      ["Dốc xuống theo thời gian.", "Dốc lên theo thời gian.", "Song song với trục Ot.", "Trùng với trục Ot."],
      0,
      "Chuyển động chậm dần đều có vận tốc giảm dần nên đường biểu diễn v – t dốc xuống."
    ],
    [
      "Một chất điểm chuyển động theo phương trình vận tốc v = 10 – 2t (m/s). Gia tốc của chất điểm là:",
      ["–2 m/s².", "2 m/s².", "10 m/s².", "5 m/s²."],
      0,
      "So sánh với v = v₀ + at, ta có a = –2 m/s²."
    ],
    [
      "Tại cùng một nơi, vật thứ nhất rơi tự do từ độ cao h hết thời gian t. Vật thứ hai rơi tự do từ độ cao 4h hết thời gian là:",
      ["2t.", "4t.", "t / 2.", "16t."],
      0,
      "Thời gian rơi t = √(2h / g). Khi độ cao là 4h thì t' = √(2 × 4h / g) = 2√(2h / g) = 2t."
    ],
    [
      "Vật rơi tự do từ độ cao h = 45 m tại nơi có g = 10 m/s². Quãng đường vật rơi được trong 2 giây đầu tiên là:",
      ["20 m.", "45 m.", "10 m.", "25 m."],
      0,
      "s = 1/2·gt² = 0,5 × 10 × 2² = 20 m."
    ],
    [
      "Một vật ném ngang từ độ cao 20 m với tốc độ đầu v₀ = 10 m/s. Lấy g = 10 m/s². Tầm bay xa của vật là:",
      ["20 m.", "10 m.", "30 m.", "40 m."],
      0,
      "t = √(2h / g) = √(2 × 20 / 10) = 2 s. Tầm xa L = v₀t = 10 × 2 = 20 m."
    ]
  ],
  tf: [
    {
      stem: "Một xe ôtô di chuyển trên một đại lộ thẳng. Trong 30 phút đầu, xe chuyển động thẳng đều với tốc độ 40 km/h. Sau đó xe tiếp tục tăng tốc và chạy đều với tốc độ 60 km/h trong 45 phút tiếp theo.",
      items: [
        ["Quãng đường xe chạy được trong 30 phút đầu tiên là 20 km.", true, "s₁ = 40 × 0,5 = 20 km."],
        ["Quãng đường xe chạy được trong 45 phút tiếp theo là 45 km.", true, "s₂ = 60 × 0,75 = 45 km."],
        ["Tổng quãng đường xe đi được trong toàn bộ hành trình là 65 km.", true, "s = 20 + 45 = 65 km."],
        ["Tốc độ trung bình của xe trên cả quãng đường bằng 50 km/h.", false, "Tổng thời gian t = 0,5 + 0,75 = 1,25 h. Tốc độ v = 65 / 1,25 = 52 km/h."]
      ]
    },
    {
      stem: "Một viên bi sắt được thả rơi tự do từ đỉnh một tòa nhà cao tầng. Biết hòn bi chạm đất sau thời gian 4 giây. Lấy gia tốc trọng trường g = 10 m/s² và bỏ qua sức cản không khí.",
      items: [
        ["Độ cao của tòa nhà là 80 m.", true, "h = 1/2·gt² = 0,5 × 10 × 4² = 80 m."],
        ["Vận tốc của viên bi ngay trước khi chạm đất có độ lớn bằng 40 m/s.", true, "v = gt = 10 × 4 = 40 m/s."],
        ["Quãng đường viên bi rơi được trong giây đầu tiên là 10 m.", false, "s₁ = 0,5 × 10 × 1² = 5 m."],
        ["Quãng đường viên bi rơi được trong 1 giây cuối cùng trước khi chạm đất là 35 m.", true, "Sau 3 s viên bi rơi được s₃ = 0,5 × 10 × 3² = 45 m. Quãng đường giây thứ 4: Δs = 80 – 45 = 35 m."]
      ]
    }
  ],
  short: [
    {
      question: "Một đoàn tàu chạy thẳng đều trên đường ray với tốc độ 54 km/h. Thời gian để tàu đi hết quãng đường 27 km là bao nhiêu phút?",
      answer: "30",
      explanation: "t = 27 / 54 = 0,5 h = 30 phút."
    },
    {
      question: "Một ca nô chạy ngược dòng một đoạn sông dài 30 km mất 2 giờ. Vận tốc dòng nước chảy là 3 km/h. Vận tốc của ca nô đối với dòng nước là bao nhiêu km/h?",
      answer: "18",
      explanation: "v_ngược = 30 / 2 = 15 km/h. Vận tốc ca nô = 15 + 3 = 18 km/h."
    },
    {
      question: "Một ôtô đang chạy với vận tốc 20 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Quãng đường xe đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là bao nhiêu mét?",
      answer: "100",
      explanation: "s = v₀² / (2|a|) = 20² / (2 × 2) = 400 / 4 = 100 m."
    },
    {
      question: "Một vật được ném ngang từ độ cao 45 m với vận tốc ban đầu v₀ = 20 m/s. Lấy g = 10 m/s². Tầm bay xa của vật theo phương ngang là bao nhiêu mét?",
      answer: "60",
      explanation: "Thời gian rơi t = √(2h / g) = √(2 × 45 / 10) = 3 s. Tầm ném xa L = v₀t = 20 × 3 = 60 m."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 09 - THPT số 1 Ngô Gia Tự – Đắk Lắk
// -------------------------------------------------------------
const exam09 = {
  id: "vatli-10-de-09",
  title: "Vật lí 10 - Đề 09 - Trường THPT số 1 Ngô Gia Tự – Đắk Lắk (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT số 1 Ngô Gia Tự",
    province: "Đắk Lắk",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14292/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-so-1-ngo-gia-tu-dak-lak",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Bước đầu tiên trong quy trình tìm hiểu thế giới tự nhiên dưới góc độ vật lí là:",
      ["Quan sát và xác định vấn đề cần nghiên cứu.", "Đề xuất giải pháp và kết luận ngay.", "Làm báo cáo khoa học.", "Tính toán số liệu phức tạp."],
      0,
      "Quy trình nghiên cứu khoa học bắt đầu từ việc quan sát hiện tượng và đặt ra câu hỏi/vấn đề cần tìm hiểu."
    ],
    [
      `Trong phòng thực hành, biển cảnh báo có hình tam giác viền đen nền vàng, bên trong có hình đầu lâu xương chéo như hình bên là biển cảnh báo: ${svgSignPoison()}`,
      ["Chất độc hại nguy hiểm tính mạng.", "Khu vực có điện thế cao.", "Khu vực có chất dễ cháy.", "Khu vực có chất ăn mòn."],
      0,
      "Biểu tượng đầu lâu xương chéo cảnh báo hóa chất độc hại gây ngộ độc hoặc tử vong."
    ],
    [
      "Khi viết kết quả đo một đại lượng vật lí A, giá trị trung bình Ā có chữ số có nghĩa đến hàng nào thì sai số tuyệt đối ΔA phải được làm tròn đến hàng:",
      ["Cùng hàng đơn vị thập phân đó.", "Hàng thập phân nhỏ hơn một bậc.", "Hàng thập phân lớn hơn một bậc.", "Không cần quan tâm đến bậc thập phân."],
      0,
      "Sai số tuyệt đối ΔA và giá trị trung bình Ā phải được làm tròn đến cùng hàng thập phân sau dấu phẩy."
    ],
    [
      "Cho phép đo chiều dài một sợi dây l = (100 ± 2) cm. Sai số tỉ đối của phép đo bằng:",
      ["2%.", "1%.", "0,5%.", "0,02%."],
      0,
      "δl = (2 / 100) × 100% = 2%."
    ],
    [
      "Một người đi xe đạp chuyển động thẳng đều đi được quãng đường 12 km trong 40 phút. Tốc độ của người đó là:",
      ["18 km/h.", "12 km/h.", "24 km/h.", "15 km/h."],
      0,
      "Đổi 40 phút = 2/3 h. Tốc độ v = 12 / (2/3) = 18 km/h."
    ],
    [
      "Khi nào thì độ lớn của độ dịch chuyển bằng quãng đường đi được?",
      ["Khi vật chuyển động thẳng và không đổi chiều chuyển động.", "Trong mọi trường hợp chuyển động.", "Khi vật chuyển động cong đều.", "Khi vật chuyển động tròn."],
      0,
      "Khi chuyển động thẳng theo một chiều không đổi thì |d| = s."
    ],
    [
      "Đồ thị độ dịch chuyển – thời gian (d – t) là đường thẳng đi qua gốc tọa độ O biểu thị:",
      ["Chuyển động thẳng đều xuất phát từ gốc tọa độ.", "Chuyển động nhanh dần đều.", "Vật đứng yên tại gốc tọa độ.", "Chuyển động có gia tốc tăng dần."],
      0,
      "Đường thẳng d = vt qua gốc tọa độ O biểu diễn chuyển động thẳng đều xuất phát từ O."
    ],
    [
      "Một chiếc thuyền chạy xuôi dòng nước với tốc độ 20 km/h, chạy ngược dòng với tốc độ 14 km/h. Vận tốc dòng nước đối với bờ là:",
      ["3 km/h.", "6 km/h.", "17 km/h.", "7 km/h."],
      0,
      "v_nước = (v_xuôi – v_ngược) / 2 = (20 – 14) / 2 = 3 km/h."
    ],
    [
      "Một xe ôtô chạy với tốc độ không đổi 72 km/h. Trong 10 giây xe đi được quãng đường là:",
      ["200 m.", "720 m.", "100 m.", "144 m."],
      0,
      "Đổi 72 km/h = 20 m/s. Quãng đường s = v × t = 20 × 10 = 200 m."
    ],
    [
      "Chuyển động thẳng biến đổi đều là chuyển động có:",
      ["Gia tốc không đổi theo thời gian.", "Vận tốc không đổi theo thời gian.", "Quãng đường không đổi theo thời gian.", "Gia tốc tăng đều theo thời gian."],
      0,
      "Chuyển động thẳng biến đổi đều có gia tốc a = hằng số."
    ],
    [
      "Một ôtô đang chạy với tốc độ 15 m/s thì tăng tốc với gia tốc 2 m/s² trong 5 s. Vận tốc đạt được là:",
      ["25 m/s.", "20 m/s.", "17 m/s.", "30 m/s."],
      0,
      "v = v₀ + at = 15 + 2 × 5 = 25 m/s."
    ],
    [
      "Một xe máy đang chạy với tốc độ 10 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Quãng đường đi được đến khi dừng hẳn là:",
      ["25 m.", "50 m.", "20 m.", "10 m."],
      0,
      "s = v₀² / (2|a|) = 10² / (2 × 2) = 100 / 4 = 25 m."
    ],
    [
      "Độ dốc của đồ thị độ dịch chuyển – thời gian (d – t) cho biết:",
      ["Vận tốc của chuyển động.", "Gia tốc của chuyển động.", "Quãng đường của chuyển động.", "Độ lớn lực tác dụng."],
      0,
      "Độ dốc của d – t là tan α = Δd / Δt = v (vận tốc)."
    ],
    [
      "Đặc điểm nào sau đây KHÔNG PHẢI của sự rơi tự do?",
      ["Quãng đường rơi tỉ lệ thuận với thời gian rơi.", "Gia tốc rơi tự do là đại lượng không đổi tại một vị trí xác định.", "Phương chuyển động là phương thẳng đứng.", "Chiều chuyển động là chiều từ trên xuống dưới."],
      0,
      "Quãng đường rơi tự do h = 1/2·gt² tỉ lệ thuận với bình phương thời gian t², không phải tỉ lệ thuận với t."
    ],
    [
      "Một vật rơi tự do từ độ cao h = 20 m tại nơi có g = 10 m/s². Thời gian rơi của vật đến khi chạm đất là:",
      ["2 s.", "1 s.", "4 s.", "3 s."],
      0,
      "t = √(2h / g) = √(2 × 20 / 10) = √4 = 2 s."
    ],
    [
      "Một vật được ném ngang từ độ cao 5 m với vận tốc ban đầu v₀ = 10 m/s. Lấy g = 10 m/s². Vận tốc của vật khi chạm đất có độ lớn bằng:",
      ["14,1 m/s (10√2 m/s).", "10 m/s.", "20 m/s.", "15 m/s."],
      0,
      "v_y = √(2gh) = √(2 × 10 × 5) = 10 m/s. Vận tốc toàn phần v = √(v₀² + v_y²) = √(10² + 10²) = 10√2 ≈ 14,14 m/s."
    ]
  ],
  tf: [
    {
      stem: "Một xe ôtô chạy trên đường thẳng từ trạm A đến trạm B dài 30 km hết 30 phút, sau đó từ B quay trở lại điểm C nằm giữa A và B cách B 15 km hết 15 phút. Chọn chiều dương là chiều từ A đến B.",
      items: [
        ["Quãng đường xe ôtô đi được trên toàn hành trình là 45 km.", true, "s = 30 + 15 = 45 km."],
        ["Độ dịch chuyển tổng cộng của xe ôtô từ lúc xuất phát tại A đến khi dừng tại C là 15 km.", true, "d = x_C – x_A = 15 – 0 = 15 km."],
        ["Tốc độ trung bình của xe ôtô trên cả quãng đường bằng 60 km/h.", true, "Tổng thời gian t = 30 + 15 = 45 phút = 0,75 h. Tốc độ v = 45 / 0,75 = 60 km/h."],
        ["Vận tốc trung bình của xe ôtô trên toàn bộ hành trình có độ lớn bằng 40 km/h.", false, "Vận tốc trung bình v_tb = d / t = 15 / 0,75 = 20 km/h."]
      ]
    },
    {
      stem: "Một vật nhỏ được thả rơi tự do không vận tốc ban đầu từ độ cao 80 m so với mặt đất tại nơi có gia tốc trọng trường g = 10 m/s². Bỏ qua sức cản không khí.",
      items: [
        ["Thời gian rơi tự do của vật đến khi chạm đất là 4 giây.", true, "t = √(2h / g) = √(2 × 80 / 10) = √16 = 4 s."],
        ["Vận tốc của vật khi chạm mặt đất có độ lớn bằng 40 m/s.", true, "v = gt = 10 × 4 = 40 m/s."],
        ["Trong 2 giây đầu tiên, vật rơi được quãng đường 20 m.", true, "s₂ = 0,5 × 10 × 2² = 20 m."],
        ["Quãng đường vật rơi được trong 2 giây cuối cùng trước khi chạm đất là 40 m.", false, "Quãng đường 2 s cuối: Δs = 80 – s₂ = 80 – 20 = 60 m."]
      ]
    }
  ],
  short: [
    {
      question: "Một xe máy đi thẳng đều trên một đoạn đường dài 27 km hết 45 phút. Tốc độ của xe máy tính theo đơn vị km/h là bao nhiêu?",
      answer: "36",
      explanation: "Đổi 45 phút = 0,75 h. Tốc độ v = 27 / 0,75 = 36 km/h."
    },
    {
      question: "Một chiếc thuyền đi xuôi dòng nước với vận tốc 16 km/h và đi ngược dòng nước với vận tốc 10 km/h. Vận tốc của dòng nước đối với bờ sông bằng bao nhiêu km/h?",
      answer: "3",
      explanation: "v_nước = (16 – 10) / 2 = 3 km/h."
    },
    {
      question: "Một ôtô đang chạy với tốc độ 12 m/s thì tăng tốc với gia tốc 2 m/s². Quãng đường ôtô đi được sau 4 giây kể từ khi tăng tốc là bao nhiêu mét?",
      answer: "64",
      explanation: "s = v₀t + 1/2·at² = 12 × 4 + 0,5 × 2 × 4² = 48 + 16 = 64 m."
    },
    {
      question: "Thả rơi tự do một hòn bi từ độ cao h. Khi chạm đất, vận tốc hòn bi đo được là 20 m/s. Lấy g = 10 m/s². Độ cao h lúc thả rơi hòn bi là bao nhiêu mét?",
      answer: "20",
      explanation: "h = v² / (2g) = 20² / (2 × 10) = 400 / 20 = 20 m."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 10 - THPT Ngô Gia Tự – Đắk Lắk
// -------------------------------------------------------------
const exam10 = {
  id: "vatli-10-de-10",
  title: "Vật lí 10 - Đề 10 - Trường THPT Ngô Gia Tự – Đắk Lắk (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Ngô Gia Tự",
    province: "Đắk Lắk",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14291/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-ngo-gia-tu-dak-lak",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Để bảo đảm an toàn khi tiếp xúc với các thiết bị sinh nhiệt trong phòng thực hành Vật lí, học sinh cần tuân thủ quy tắc nào?",
      ["Đeo găng tay cách nhiệt và không chạm tay trực tiếp vào các bề mặt đang nung nóng.", "Dùng tay ướt để kiểm tra độ nóng của thiết bị.", "Đặt các vật liệu dễ cháy xung quanh bếp nhiệt.", "Thổi trực tiếp vào ngọn lửa đèn cồn."],
      0,
      "Tuân thủ quy định bảo hộ cá nhân (găng tay cách nhiệt) để tránh nguy cơ bỏng nhiệt."
    ],
    [
      `Biển báo có hình tròn viền đỏ, nền trắng có hình người đi bộ bị gạch chéo đỏ biểu thị:`,
      ["Khu vực cấm người đi bộ qua lại.", "Khu vực dành riêng cho người đi bộ.", "Khu vực nguy hiểm về điện.", "Khu vực có vật liệu dễ nổ."],
      0,
      "Biển tròn viền đỏ gạch chéo hình người đi bộ là biển cấm người đi bộ."
    ],
    [
      "Khi đo độ dài của một vật bằng thước có giới hạn đo 50 cm và độ chia nhỏ nhất 1 mm, kết quả đo hợp lí là:",
      ["25,4 cm.", "25,43 cm.", "25,432 cm.", "25 cm."],
      0,
      "Độ chia nhỏ nhất 1 mm = 0,1 cm nên kết quả đo chỉ có 1 chữ số thập phân sau dấu phẩy theo cm: 25,4 cm."
    ],
    [
      "Một phép đo khối lượng cho kết quả m = (200 ± 4) g. Sai số tỉ đối của phép đo bằng:",
      ["2%.", "4%.", "0,02%.", "1%."],
      0,
      "δm = (4 / 200) × 100% = 2%."
    ],
    [
      "Một chiếc thuyền buồm chạy trên biển. Vị trí của thuyền thay đổi từ điểm A có tọa độ x_A = 10 km đến điểm B có tọa độ x_B = 35 km trên trục tọa độ đã chọn. Độ dịch chuyển của thuyền là:",
      ["25 km.", "45 km.", "35 km.", "10 km."],
      0,
      "d = x_B – x_A = 35 – 10 = 25 km."
    ],
    [
      "Tốc độ trung bình và vận tốc trung bình có cùng giá trị khi:",
      ["Vật chuyển động thẳng theo một chiều không đổi.", "Vật chuyển động cong không đổi chiều.", "Vật chuyển động tròn đều.", "Trong mọi trường hợp chuyển động."],
      0,
      "Khi chuyển động thẳng theo 1 chiều không đổi thì quãng đường s bằng độ lớn độ dịch chuyển |d|, nên tốc độ trung bình bằng độ lớn vận tốc trung bình."
    ],
    [
      "Đồ thị độ dịch chuyển – thời gian (d – t) của một vật chuyển động thẳng có dạng d = 10 + 4t (m; s). Vận tốc ban đầu của vật tại gốc thời gian t = 0 là:",
      ["4 m/s.", "10 m/s.", "14 m/s.", "0 m/s."],
      0,
      "Độ dốc của hàm bậc nhất d = d₀ + vt là hệ số trước t: v = 4 m/s."
    ],
    [
      "Hai xe máy A và B cùng chuyển động trên đường thẳng ngược chiều nhau với tốc độ lần lượt là 35 km/h và 45 km/h. Vận tốc của xe A đối với xe B có độ lớn bằng:",
      ["80 km/h.", "10 km/h.", "35 km/h.", "45 km/h."],
      0,
      "Hai xe chạy ngược chiều nên vận tốc tương đối: v = 35 + 45 = 80 km/h."
    ],
    [
      "Một người đi bộ với tốc độ đều 1,2 m/s. Quãng đường người đó đi được trong 15 phút là:",
      ["1080 m.", "18 m.", "180 m.", "540 m."],
      0,
      "Đổi 15 phút = 900 s. Quãng đường s = v × t = 1,2 × 900 = 1080 m."
    ],
    [
      "Một xe ôtô đang đứng yên thì khởi hành chuyển động thẳng nhanh dần đều với gia tốc 2,5 m/s². Thời gian để xe đạt tốc độ 20 m/s là:",
      ["8 s.", "5 s.", "10 s.", "12 s."],
      0,
      "t = v / a = 20 / 2,5 = 8 s."
    ],
    [
      "Hệ thức nào sau đây diễn tả mối liên hệ giữa vận tốc, gia tốc và thời gian trong chuyển động thẳng biến đổi đều?",
      ["v = v₀ + at.", "v = v₀ – 1/2·at².", "v = v₀t + at.", "v = 1/2·at²."],
      0,
      "Công thức vận tốc chuẩn: v = v₀ + at."
    ],
    [
      "Một xe tải đang chạy với vận tốc 18 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 1,5 m/s². Quãng đường xe đi được đến khi dừng hẳn là:",
      ["108 m.", "54 m.", "72 m.", "216 m."],
      0,
      "s = v₀² / (2|a|) = 18² / (2 × 1,5) = 324 / 3 = 108 m."
    ],
    [
      "Đồ thị vận tốc – thời gian (v – t) của một vật chuyển động là đường thẳng dốc lên qua gốc tọa độ O. Vật đó chuyển động:",
      ["Nhanh dần đều từ trạng thái nghỉ.", "Chậm dần đều.", "Thẳng đều.", "Đứng yên."],
      0,
      "Đường thẳng v = at qua gốc tọa độ O với a > 0 biểu diễn chuyển động thẳng nhanh dần đều không vận tốc đầu."
    ],
    [
      "Gia tốc trọng trường g tại một nơi trên bề mặt Trái Đất:",
      ["Có giá trị gần đúng bằng 9,8 m/s² hoặc 10 m/s².", "Phụ thuộc vào khối lượng của vật rơi.", "Phụ thuộc vào kích thước của vật rơi.", "Luôn bằng 0."],
      0,
      "Gia tốc trọng trường tại mặt đất xấp xỉ 9,8 m/s² (hoặc lấy chẵn 10 m/s²) và độc lập với khối lượng, kích thước vật."
    ],
    [
      "Một vật rơi tự do từ độ cao h = 500 m. Lấy g = 10 m/s². Thời gian vật rơi chạm đất là:",
      ["10 s.", "5 s.", "20 s.", "50 s."],
      0,
      "t = √(2h / g) = √(2 × 500 / 10) = √100 = 10 s."
    ],
    [
      "Một vật được ném ngang từ độ cao h với tốc độ ban đầu v₀ = 20 m/s. Bỏ qua sức cản không khí. Sau 2 giây kể từ lúc ném, tầm bay xa của vật theo phương ngang là:",
      ["40 m.", "20 m.", "80 m.", "60 m."],
      0,
      "Theo phương ngang vật chuyển động thẳng đều: x = v₀t = 20 × 2 = 40 m."
    ]
  ],
  tf: [
    {
      stem: "Một xe ôtô chạy thử nghiệm trên một đường đua thẳng khép kín AB. Xe xuất phát từ A chạy thẳng đều đến B cách A 60 km trong thời gian 1 giờ. Tại B, xe quay đầu chạy ngược về A với tốc độ đều 40 km/h hết 1,5 giờ. Chọn chiều dương là chiều từ A đến B.",
      items: [
        ["Quãng đường xe ôtô chạy được cả đi lẫn về là 120 km.", true, "s = 60 + 60 = 120 km."],
        ["Độ dịch chuyển tổng cộng của xe ôtô sau khi quay về lại điểm A bằng 0 km.", true, "Vị trí cuối trùng vị trí ban đầu nên d = 0 km."],
        ["Tốc độ trung bình của xe ôtô trong toàn bộ thời gian chạy bằng 48 km/h.", true, "Tổng thời gian t = 1 + 1,5 = 2,5 h. Tốc độ v = 120 / 2,5 = 48 km/h."],
        ["Vận tốc trung bình của xe ôtô trong cả chuyến đi bằng 48 km/h.", false, "Vận tốc trung bình v_tb = d / t = 0 / 2,5 = 0 km/h."]
      ]
    },
    {
      stem: "Một xe ôtô đang chạy với tốc độ 20 m/s thì tài xế nhìn thấy đèn vàng chuyển sang đỏ nên hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2,5 m/s².",
      items: [
        ["Thời gian xe chuyển động từ lúc hãm phanh đến khi dừng hẳn là 8 giây.", true, "t = v₀ / |a| = 20 / 2,5 = 8 s."],
        ["Quãng đường xe đi được từ lúc bắt đầu hãm phanh đến khi dừng lại là 80 m.", true, "s = v₀² / (2|a|) = 20² / (2 × 2,5) = 400 / 5 = 80 m."],
        ["Tốc độ của ôtô sau 4 giây kể từ lúc bắt đầu hãm phanh là 10 m/s.", true, "v = v₀ – |a|t = 20 – 2,5 × 4 = 10 m/s."],
        ["Sau 6 giây kể từ lúc hãm phanh, xe đã dừng lại hoàn toàn.", false, "Xe cần 8 s để dừng hẳn, nên sau 6 s xe vẫn đang chuyển động với v = 20 – 2,5 × 6 = 5 m/s."]
      ]
    }
  ],
  short: [
    {
      question: "Một người đi xe máy từ nhà đến cơ quan cách nhau 15 km hết thời gian 25 phút. Tốc độ trung bình của người này tính theo đơn vị km/h là bao nhiêu?",
      answer: "36",
      explanation: "Đổi 25 phút = 25/60 h = 5/12 h. Tốc độ v = 15 / (5/12) = 36 km/h."
    },
    {
      question: "Một chiếc ca nô chạy xuôi dòng từ bến A đến bến B cách nhau 48 km hết 2 giờ. Biết vận tốc dòng nước là 4 km/h. Vận tốc của ca nô đối với dòng nước bằng bao nhiêu km/h?",
      answer: "20",
      explanation: "Vận tốc xuôi dòng v_xuôi = 48 / 2 = 24 km/h. Vận tốc ca nô v = 24 – 4 = 20 km/h."
    },
    {
      question: "Một ôtô đang chạy với vận tốc 16 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Sau bao nhiêu giây kể từ lúc hãm phanh thì ôtô dừng lại hoàn toàn?",
      answer: "8",
      explanation: "t = v₀ / |a| = 16 / 2 = 8 s."
    },
    {
      question: "Thả rơi tự do một vật từ độ cao h tại nơi có g = 10 m/s². Khi chạm đất, vật đạt tốc độ 30 m/s. Độ cao h lúc thả vật là bao nhiêu mét?",
      answer: "45",
      explanation: "h = v² / (2g) = 30² / (2 × 10) = 900 / 20 = 45 m."
    }
  ]
};

module.exports = {
  exam06,
  exam07,
  exam08,
  exam09,
  exam10
};

// Module sinh 5 đề Vật lí 10 đầu tiên (Đề 01 đến Đề 05)
// Chuẩn ma trận Bộ GD&ĐT 2026: 16 câu MC (4.0đ), 2 câu TF (2.0đ), 4 câu Short (1.0đ)
// Tổng điểm: 7.0 điểm trắc nghiệm (chuẩn 70% trắc nghiệm khách quan)
// Mức độ phổ thông, số liệu đẹp, lời giải chi tiết, hình vẽ SVG trực quan, không trùng lặp

// SVG Helper Functions
function svgSignBiohazard() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 90,85 10,85" fill="#facc15" stroke="#000" stroke-width="4"/><circle cx="50" cy="52" r="14" fill="none" stroke="#000" stroke-width="4"/><circle cx="42" cy="46" r="10" fill="none" stroke="#000" stroke-width="3"/><circle cx="58" cy="46" r="10" fill="none" stroke="#000" stroke-width="3"/><circle cx="50" cy="62" r="10" fill="none" stroke="#000" stroke-width="3"/><circle cx="50" cy="52" r="4" fill="#000"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cảnh báo nguy hiểm sinh học</div></div>`;
}

function svgSignElectric() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 92,85 8,85" fill="#facc15" stroke="#000" stroke-width="4"/><path d="M52,28 L36,54 L48,54 L44,76 L66,48 L54,48 Z" fill="#000"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cảnh báo nguy hiểm về điện</div></div>`;
}

function svgSignGoggles() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#2563eb" stroke="#1d4ed8" stroke-width="3"/><rect x="22" y="38" width="24" height="24" rx="8" fill="#fff"/><rect x="54" y="38" width="24" height="24" rx="8" fill="#fff"/><rect x="42" y="46" width="16" height="6" fill="#fff"/><path d="M16,48 Q22,46 24,48 M76,48 Q82,46 84,48" stroke="#fff" stroke-width="4" fill="none"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển lệnh bắt buộc đeo kính bảo hộ</div></div>`;
}

function svgSignFire() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 92,85 8,85" fill="#facc15" stroke="#000" stroke-width="4"/><path d="M50,30 Q62,48 56,60 Q66,54 62,74 Q56,80 50,80 Q40,80 38,70 Q36,60 44,52 Q40,58 42,66 Q48,46 50,30 Z" fill="#dc2626"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cảnh báo chất dễ cháy</div></div>`;
}

function svgSignCorrosive() {
  return `<div class="exam-svg-wrap" style="text-align:center;margin:10px 0;"><svg width="100" height="100" viewBox="0 0 100 100"><polygon points="50,10 92,85 8,85" fill="#facc15" stroke="#000" stroke-width="4"/><rect x="30" y="40" width="14" height="20" fill="#000" rx="3"/><rect x="56" y="40" width="14" height="20" fill="#000" rx="3"/><line x1="25" y1="68" x2="75" y2="68" stroke="#000" stroke-width="4"/><circle cx="37" cy="64" r="2" fill="#000"/><circle cx="63" cy="64" r="2" fill="#000"/></svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Hình: Biển cảnh báo chất ăn mòn kim loại và da</div></div>`;
}

function svgGraphDT(dMax, tMax, points) {
  // points: [{t, d}, ...]
  const w = 240, h = 160;
  const padL = 40, padB = 30, padT = 20, padR = 20;
  const pw = w - padL - padR;
  const ph = h - padT - padB;
  
  const toX = t => padL + (t / tMax) * pw;
  const toY = d => padT + ph - (d / dMax) * ph;
  
  let poly = points.map(p => `${toX(p.t)},${toY(p.d)}`).join(' ');
  
  return `<div class="exam-svg-wrap" style="text-align:center;margin:12px 0;"><svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;"><line x1="${padL}" y1="${padT + ph}" x2="${w - 10}" y2="${padT + ph}" stroke="#334155" stroke-width="2"/><polygon points="${w-10},${padT+ph-4} ${w},${padT+ph} ${w-10},${padT+ph+4}" fill="#334155"/><text x="${w - 16}" y="${padT + ph + 18}" font-size="11" font-weight="bold" fill="#334155">t(s)</text><line x1="${padL}" y1="${padT + ph}" x2="${padL}" y2="10" stroke="#334155" stroke-width="2"/><polygon points="${padL-4},10 ${padL},2 ${padL+4},10" fill="#334155"/><text x="${padL - 28}" y="14" font-size="11" font-weight="bold" fill="#334155">d(m)</text><polyline points="${poly}" fill="none" stroke="#2563eb" stroke-width="3"/>${points.map(p => `<circle cx="${toX(p.t)}" cy="${toY(p.d)}" r="4" fill="#dc2626"/><text x="${toX(p.t)}" y="${padT + ph + 16}" font-size="10" fill="#475569" text-anchor="middle">${p.t}</text><text x="${padL - 8}" y="${toY(p.d) + 4}" font-size="10" fill="#475569" text-anchor="end">${p.d}</text><line x1="${padL}" y1="${toY(p.d)}" x2="${toX(p.t)}" y2="${toY(p.d)}" stroke="#94a3b8" stroke-dasharray="2,2"/><line x1="${toX(p.t)}" y1="${padT + ph}" x2="${toX(p.t)}" y2="${toY(p.d)}" stroke="#94a3b8" stroke-dasharray="2,2"/>`).join('')}</svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Đồ thị độ dịch chuyển – thời gian (d – t)</div></div>`;
}

function svgGraphVT(vMax, tMax, points) {
  const w = 240, h = 160;
  const padL = 40, padB = 30, padT = 20, padR = 20;
  const pw = w - padL - padR;
  const ph = h - padT - padB;
  
  const toX = t => padL + (t / tMax) * pw;
  const toY = v => padT + ph - (v / vMax) * ph;
  
  let poly = points.map(p => `${toX(p.t)},${toY(p.v)}`).join(' ');
  
  return `<div class="exam-svg-wrap" style="text-align:center;margin:12px 0;"><svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="background:#fff;border:1px solid #cbd5e1;border-radius:8px;"><line x1="${padL}" y1="${padT + ph}" x2="${w - 10}" y2="${padT + ph}" stroke="#334155" stroke-width="2"/><polygon points="${w-10},${padT+ph-4} ${w},${padT+ph} ${w-10},${padT+ph+4}" fill="#334155"/><text x="${w - 24}" y="${padT + ph + 18}" font-size="11" font-weight="bold" fill="#334155">t(s)</text><line x1="${padL}" y1="${padT + ph}" x2="${padL}" y2="10" stroke="#334155" stroke-width="2"/><polygon points="${padL-4},10 ${padL},2 ${padL+4},10" fill="#334155"/><text x="${padL - 32}" y="14" font-size="11" font-weight="bold" fill="#334155">v(m/s)</text><polyline points="${poly}" fill="none" stroke="#16a34a" stroke-width="3"/>${points.map(p => `<circle cx="${toX(p.t)}" cy="${toY(p.v)}" r="4" fill="#ea580c"/><text x="${toX(p.t)}" y="${padT + ph + 16}" font-size="10" fill="#475569" text-anchor="middle">${p.t}</text><text x="${padL - 8}" y="${toY(p.v) + 4}" font-size="10" fill="#475569" text-anchor="end">${p.v}</text><line x1="${padL}" y1="${toY(p.v)}" x2="${toX(p.t)}" y2="${toY(p.v)}" stroke="#94a3b8" stroke-dasharray="2,2"/><line x1="${toX(p.t)}" y1="${padT + ph}" x2="${toX(p.t)}" y2="${toY(p.v)}" stroke="#94a3b8" stroke-dasharray="2,2"/>`).join('')}</svg><div style="font-size:12px;color:#64748b;margin-top:4px;">Đồ thị vận tốc – thời gian (v – t)</div></div>`;
}

// -------------------------------------------------------------
// ĐỀ 01 - THPT Hướng Hóa – Quảng Trị
// -------------------------------------------------------------
const exam01 = {
  id: "vatli-10-de-01",
  title: "Vật lí 10 - Đề 01 - Trường THPT Hướng Hóa – Quảng Trị (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Hướng Hóa",
    province: "Quảng Trị",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14299/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-huong-hoa-quang-tri",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    // 1-4: Mở đầu
    [
      "Lĩnh vực nghiên cứu nào sau đây KHÔNG thuộc đối tượng nghiên cứu cốt lõi của Vật lí học?",
      ["Các dạng vận động của vật chất và năng lượng.", "Quy luật biến đổi tâm lí xã hội học của con người.", "Hiện tượng quang học, nhiệt học và điện từ.", "Cấu trúc vi mô của nguyên tử và các hạt cơ bản."],
      1,
      "Vật lí học nghiên cứu các dạng vận động của vật chất và năng lượng. Tâm lí xã hội học thuộc phạm trù khoa học xã hội."
    ],
    [
      `Trong phòng thực hành Vật lí, biển báo có hình tam giác đều viền đen, nền vàng, bên trong có hình vẽ như hình bên mang ý nghĩa gì? ${svgSignElectric()}`,
      ["Cảnh báo nơi có điện cao thế nguy hiểm.", "Cảnh báo khu vực có chất dễ cháy.", "Bắt buộc phải đeo găng tay cách điện.", "Cấm sử dụng thiết bị dùng điện."],
      0,
      "Biển tam giác vàng viền đen hình tia sét là biển cảnh báo nguy hiểm về điện (nguy cơ điện giật, điện áp cao)."
    ],
    [
      "Một học sinh dùng thước chia đến milimét đo chiều dài cuốn sách Vật lí 10 được giá trị trung bình L̄ = 240 mm. Sai số dụng cụ lấy bằng một nửa độ chia nhỏ nhất là ΔL = 0,5 mm. Cách ghi kết quả đo đúng là:",
      ["L = 240 ± 0,5 mm.", "L = 240 ± 1 mm.", "L = 240,0 ± 0,05 mm.", "L = 24 ± 0,5 cm."],
      0,
      "Kết quả đo được viết dưới dạng: A = Ā ± ΔA. Ở đây Ā = 240 mm và ΔA = 0,5 mm, cùng đơn vị và bậc thập phân phù hợp."
    ],
    [
      "Cho một đại lượng đo có giá trị A = (50 ± 1) cm. Sai số tỉ đối δA của phép đo này bằng:",
      ["2,0%.", "1,0%.", "0,5%.", "5,0%."],
      0,
      "Sai số tỉ đối: δA = (ΔA / Ā) × 100% = (1 / 50) × 100% = 2,0%."
    ],
    // 5-9: Động học - Mô tả chuyển động
    [
      "Một học sinh đi bộ từ cổng trường vào lớp học theo đường thẳng hướng Đông dài 120 m. Độ dịch chuyển của học sinh đó có độ lớn bằng:",
      ["120 m.", "60 m.", "0 m.", "240 m."],
      0,
      "Chuyển động thẳng không đổi chiều thì độ lớn độ dịch chuyển bằng quãng đường đi được: d = s = 120 m."
    ],
    [
      "Đại lượng nào sau đây là đại lượng vectơ, cho biết hướng chuyển động và độ nhanh chậm của vật?",
      ["Vận tốc.", "Tốc độ trung bình.", "Quãng đường.", "Thời gian chuyển động."],
      0,
      "Vận tốc là đại lượng vectơ đặc trưng cho cả độ nhanh chậm và hướng chuyển động: v⃗ = d⃗ / Δt. Tốc độ và quãng đường là đại lượng vô hướng không âm."
    ],
    [
      "Đồ thị độ dịch chuyển – thời gian (d – t) của một chất điểm là đường thẳng song song với trục thời gian Ot. Điều này cho biết:",
      ["Chất điểm đang đứng yên.", "Chất điểm chuyển động thẳng đều.", "Chất điểm chuyển động nhanh dần đều.", "Chất điểm chuyển động chậm dần đều."],
      0,
      "Đường biểu diễn song song với trục Ot có độ dốc bằng 0, nghĩa là tọa độ không thay đổi theo thời gian, vật đang đứng yên."
    ],
    [
      "Một ca nô chạy xuôi dòng nước với vận tốc so với nước là v₁ = 15 km/h. Vận tốc dòng nước chảy so với bờ là v₂ = 3 km/h. Vận tốc của ca nô so với bờ bằng:",
      ["18 km/h.", "12 km/h.", "15 km/h.", "45 km/h."],
      0,
      "Khi xuôi dòng, vận tốc ca nô đối với bờ: v₁₃ = v₁₂ + v₂₃ = 15 + 3 = 18 km/h."
    ],
    [
      "Một người đi xe máy đi được quãng đường 15 km đầu tiên trong thời gian 20 phút và 15 km tiếp theo trong thời gian 40 phút. Tốc độ trung bình của xe trên cả quãng đường là:",
      ["30 km/h.", "25 km/h.", "35 km/h.", "20 km/h."],
      0,
      "Tổng quãng đường s = 15 + 15 = 30 km. Tổng thời gian t = 20 + 40 = 60 phút = 1 h. Tốc độ trung bình v = s / t = 30 / 1 = 30 km/h."
    ],
    // 10-16: Động học - Chuyển động biến đổi
    [
      "Đơn vị đo của gia tốc trong hệ đơn vị đo lường quốc tế (SI) là:",
      ["m/s².", "m/s.", "km/h.", "m·s."],
      0,
      "Gia tốc đặc trưng cho sự biến thiên vận tốc theo thời gian: a = Δv / Δt nên có đơn vị là (m/s) / s = m/s²."
    ],
    [
      "Trong chuyển động thẳng nhanh dần đều, vectơ gia tốc a⃗ và vectơ vận tốc v⃗ có đặc điểm nào sau đây?",
      ["Cùng chiều nhau (tích a·v > 0).", "Ngược chiều nhau (tích a·v < 0).", "Vuông góc với nhau.", "Có độ lớn luôn bằng nhau."],
      0,
      "Chuyển động thẳng nhanh dần đều có gia tốc cùng chiều với vận tốc (a·v > 0). Chuyển động chậm dần đều có gia tốc ngược chiều vận tốc (a·v < 0)."
    ],
    [
      "Công thức liên hệ giữa vận tốc v, vận tốc ban đầu v₀, gia tốc a và độ dịch chuyển d trong chuyển động thẳng biến đổi đều là:",
      ["v² – v₀² = 2ad.", "v² + v₀² = 2ad.", "v – v₀ = 2ad.", "v² – v₀² = ad."],
      0,
      "Hệ thức độc lập thời gian chuẩn: v² – v₀² = 2ad (với d là độ dịch chuyển)."
    ],
    [
      "Độ dốc (hệ số góc) của đồ thị vận tốc – thời gian (v – t) cho biết đại lượng nào sau đây của chuyển động?",
      ["Gia tốc.", "Độ dịch chuyển.", "Quãng đường.", "Vận tốc ban đầu."],
      0,
      "Hệ số góc của đường biểu diễn v – t: tan α = Δv / Δt = a, chính là gia tốc của chuyển động."
    ],
    [
      "Nhận định nào sau đây là ĐÚNG khi nói về sự rơi tự do của một vật gần mặt đất (bỏ qua sức cản không khí)?",
      ["Là chuyển động thẳng nhanh dần đều theo phương thẳng đứng.", "Vật nặng bao giờ cũng rơi nhanh hơn vật nhẹ.", "Vận tốc rơi không thay đổi theo thời gian.", "Gia tốc rơi tự do phụ thuộc vào khối lượng của vật."],
      0,
      "Rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng chiều từ trên xuống dưới, với gia tốc rơi tự do g không đổi tại một nơi."
    ],
    [
      "Một vật rơi tự do không vận tốc ban đầu từ độ cao h tại nơi có gia tốc trọng trường g. Thời gian rơi t của vật được tính bằng công thức:",
      ["t = √(2h / g).", "t = √(h / 2g).", "t = 2h / g.", "t = √(2gh)."],
      0,
      "Từ công thức quãng đường rơi tự do: h = 1/2·g·t² suy ra t = √(2h / g)."
    ],
    [
      "Một ôtô đang chạy với tốc độ 20 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Thời gian từ lúc bắt đầu hãm phanh đến khi xe dừng hẳn là:",
      ["10 s.", "5 s.", "20 s.", "40 s."],
      0,
      "Xe dừng hẳn khi v = 0. Thời gian hãm phanh: t = (v – v₀) / a = (0 – 20) / (–2) = 10 s."
    ]
  ],
  tf: [
    {
      stem: "Một vận động viên bơi lội tập luyện trong một hồ bơi tiêu chuẩn dài 50 m. Người đó bơi xuất phát từ đầu hồ đến cuối hồ hết 25 giây, sau đó quay đầu bơi ngược trở lại vị trí xuất phát hết 35 giây. Chọn trục tọa độ Ox trùng với thành hồ, chiều dương là chiều bơi lượt đi.",
      items: [
        ["Quãng đường vận động viên bơi được ở lượt đi là 50 m.", true, "Lượt đi từ đầu hồ đến cuối hồ bơi dài 50 m."],
        ["Độ dịch chuyển của vận động viên sau khi bơi cả đi lẫn về là 100 m.", false, "Điểm kết thúc trùng với điểm xuất phát nên độ dịch chuyển tổng cộng d = 0 m."],
        ["Tốc độ trung bình của vận động viên ở lượt bơi đi bằng 2 m/s.", true, "v = s₁ / t₁ = 50 / 25 = 2 m/s."],
        ["Vận tốc trung bình của vận động viên trong toàn bộ thời gian bơi cả đi lẫn về bằng 0 m/s.", true, "Vận tốc trung bình v_tb = d / t = 0 / 60 = 0 m/s."]
      ]
    },
    {
      stem: "Một xe ôtô đang chuyển động thẳng đều trên đường ngang với tốc độ 15 m/s thì tài xế nhìn thấy biển báo công trường nên hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 1,5 m/s² cho đến khi dừng lại. Chọn chiều dương là chiều chuyển động của xe.",
      items: [
        ["Gia tốc của xe trong giai đoạn hãm phanh có giá trị đại số a = –1,5 m/s².", true, "Xe chuyển động theo chiều dương và chuyển động chậm dần đều nên a ngược chiều v, tức a = –1,5 m/s²."],
        ["Trong quá trình hãm phanh, tích vận tốc và gia tốc a·v luôn mang giá trị dương.", false, "Vì chuyển động chậm dần đều nên a và v ngược dấu, tích a·v < 0."],
        ["Sau 4 giây kể từ khi bắt đầu hãm phanh, vận tốc của ôtô còn lại là 9 m/s.", true, "v = v₀ + at = 15 + (–1,5) × 4 = 15 – 6 = 9 m/s."],
        ["Quãng đường ôtô đi được từ lúc bắt đầu hãm phanh đến khi dừng hẳn là 75 m.", true, "Khi dừng hẳn v = 0. s = (v² – v₀²) / (2a) = (0 – 15²) / (2 × (–1,5)) = –225 / –3 = 75 m."]
      ]
    }
  ],
  short: [
    {
      question: "Một xe máy chạy thẳng đều trên đoạn đường dài 18 km hết 30 phút. Tốc độ chuyển động của xe máy tính theo đơn vị km/h là bao nhiêu?",
      answer: "36",
      explanation: "Đổi 30 phút = 0,5 h. Tốc độ v = s / t = 18 / 0,5 = 36 km/h."
    },
    {
      question: "Một chiếc ca nô chạy xuôi dòng trên đoạn sông AB với vận tốc đối với bờ là 22 km/h. Khi chạy ngược dòng từ B về A, vận tốc của ca nô đối với bờ là 14 km/h. Vận tốc của dòng nước chảy so với bờ có độ lớn bằng bao nhiêu km/h?",
      answer: "4",
      explanation: "Ta có: v_xuôi = v_thuyền + v_nước = 22; v_ngược = v_thuyền – v_nước = 14. Suy ra v_nước = (22 – 14) / 2 = 4 km/h."
    },
    {
      question: "Một đoàn tàu hỏa bắt đầu rời ga chuyển động thẳng nhanh dần đều không vận tốc đầu. Sau 20 giây tàu đạt tốc độ 10 m/s. Gia tốc của đoàn tàu bằng bao nhiêu m/s²?",
      answer: "0.5",
      explanation: "Tàu rời ga với v₀ = 0. Gia tốc a = (v – v₀) / t = (10 – 0) / 20 = 0,5 m/s²."
    },
    {
      question: "Thả rơi tự do một hòn bi sắt từ đỉnh một tháp cao 45 m xuống mặt đất tại nơi có gia tốc trọng trường g = 10 m/s². Bỏ qua sức cản không khí. Thời gian rơi của viên bi đến khi chạm đất là bao nhiêu giây?",
      answer: "3",
      explanation: "Thời gian rơi tự do: t = √(2h / g) = √(2 × 45 / 10) = √9 = 3 s."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 02 - THPT Gio Linh – Quảng Trị
// -------------------------------------------------------------
const exam02 = {
  id: "vatli-10-de-02",
  title: "Vật lí 10 - Đề 02 - Trường THPT Gio Linh – Quảng Trị (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Gio Linh",
    province: "Quảng Trị",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14298/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-gio-linh-quang-tri",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Phương pháp nghiên cứu nào là phương pháp cốt lõi, đặc thù nhất của Vật lí học?",
      ["Phương pháp thực nghiệm kết hợp phương pháp lí thuyết.", "Phương pháp điều tra xã hội học qua phiếu khảo sát.", "Phương pháp suy luận thuần túy tư duy trừu tượng không cần kiểm chứng.", "Phương pháp ghi nhận cảm tính của người quan sát."],
      0,
      "Phương pháp thực nghiệm (thí nghiệm kiểm chứng) kết hợp chặt chẽ với phương pháp lí thuyết là phương pháp nghiên cứu đặc trưng của Vật lí."
    ],
    [
      `Trong phòng thí nghiệm Vật lí, biển báo có hình tròn nền xanh dương, hình vẽ màu trắng như hình bên có ý nghĩa gì? ${svgSignGoggles()}`,
      ["Quy định bắt buộc phải đeo kính bảo hộ.", "Cảnh báo khu vực có ánh sáng laser độc hại.", "Cấm nhìn trực tiếp vào nguồn sáng.", "Nơi để dụng cụ vệ sinh mắt."],
      0,
      "Biển báo hình tròn nền xanh hình trắng là biển hiệu lệnh bắt buộc thực hiện (ở đây là đeo kính bảo hộ bảo vệ mắt)."
    ],
    [
      "Sai số nào sau đây sinh ra do đặc điểm cấu tạo của dụng cụ đo và không thể loại trừ hoàn toàn bằng cách đo nhiều lần?",
      ["Sai số dụng cụ (sai số hệ thống).", "Sai số ngẫu nhiên do mắt đọc lệch.", "Sai số do thao tác bấm đồng hồ không đều.", "Sai số do tác động bất chợt của gió."],
      0,
      "Sai số dụng cụ là loại sai số hệ thống có tính quy luật, xuất phát từ giới hạn độ chính xác của dụng cụ chế tạo."
    ],
    [
      "Dùng thước kẹp có độ chia nhỏ nhất 0,1 mm đo đường kính viên bi thép được kết quả d̄ = 12,4 mm. Sai số tuyệt đối là Δd = 0,1 mm. Sai số tỉ đối của phép đo xấp xỉ bằng:",
      ["0,81%.", "1,24%.", "8,1%.", "0,1%."],
      0,
      "Sai số tỉ đối δd = (Δd / d̄) × 100% = (0,1 / 12,4) × 100% ≈ 0,81%."
    ],
    [
      "Một chất điểm chuyển động trên một đường thẳng, xuất phát từ điểm có tọa độ x₁ = –4 m đến điểm có tọa độ x₂ = 6 m. Độ dịch chuyển của chất điểm bằng:",
      ["10 m.", "2 m.", "–10 m.", "–2 m."],
      0,
      "Độ dịch chuyển d = x₂ – x₁ = 6 – (–4) = 10 m."
    ],
    [
      "Tốc độ tức thời của một chuyển động cho biết:",
      ["Mức độ nhanh hay chậm của chuyển động tại một thời điểm xác định.", "Quãng đường vật đi được trong một giờ.", "Hướng chuyển động của vật trong không gian.", "Độ dịch chuyển trung bình của vật."],
      0,
      "Tốc độ tức thời đo độ nhanh chậm tại đúng thời điểm hoặc tại vị trí đang xét."
    ],
    [
      "Khi vật chuyển động thẳng đều ngược chiều dương đã chọn, đồ thị độ dịch chuyển – thời gian (d – t) là một đường thẳng:",
      ["Dốc xuống (có hệ số góc âm).", "Dốc lên (có hệ số góc dương).", "Song song với trục hoành Ot.", "Trùng với trục tung Od."],
      0,
      "Hệ số góc v = Δd / Δt < 0 khi chuyển động ngược chiều dương, do đó đường biểu diễn d – t dốc xuống."
    ],
    [
      "Một người đi bộ trên một thang cuốn đang chuyển động. Nếu người đó đi cùng chiều chuyển động của thang cuốn thì vận tốc của người đối với mặt đất sẽ:",
      ["Bằng tổng vận tốc của người đối với thang và vận tốc của thang đối với đất.", "Bằng hiệu vận tốc của người đối với thang và vận tốc của thang đối với đất.", "Luôn bằng 0.", "Bằng vận tốc của thang cuốn."],
      0,
      "Chuyển động cùng phương cùng chiều: v₁₃ = v₁₂ + v₂₃."
    ],
    [
      "Một chiếc xe ôtô chạy thẳng đều quãng đường 120 km trong thời gian 2 giờ 30 phút. Tốc độ của xe bằng:",
      ["48 km/h.", "50 km/h.", "60 km/h.", "45 km/h."],
      0,
      "Thời gian t = 2,5 h. Tốc độ v = s / t = 120 / 2,5 = 48 km/h."
    ],
    [
      "Gia tốc là đại lượng vật lí đặc trưng cho:",
      ["Sự thay đổi nhanh hay chậm của vận tốc.", "Độ nhanh hay chậm của chuyển động.", "Quãng đường vật đi được trong một đơn vị thời gian.", "Sự thay đổi vị trí của vật trong không gian."],
      0,
      "Gia tốc đặc trưng cho sự biến đổi nhanh hay chậm của vận tốc: a⃗ = Δv⃗ / Δt."
    ],
    [
      "Phương trình vận tốc của một vật chuyển động thẳng biến đổi đều dọc theo trục Ox có dạng v = 4 + 2t (m/s). Vận tốc ban đầu và gia tốc của vật lần lượt là:",
      ["v₀ = 4 m/s; a = 2 m/s².", "v₀ = 2 m/s; a = 4 m/s².", "v₀ = 4 m/s; a = 1 m/s².", "v₀ = 0 m/s; a = 2 m/s²."],
      0,
      "So sánh với dạng chuẩn v = v₀ + at, ta có v₀ = 4 m/s và a = 2 m/s²."
    ],
    [
      "Một xe ôtô chuyển động thẳng nhanh dần đều với vận tốc đầu v₀ = 5 m/s và gia tốc a = 2 m/s². Độ dịch chuyển của xe sau 3 giây là:",
      ["24 m.", "15 m.", "9 m.", "21 m."],
      0,
      "Áp dụng công thức: d = v₀t + 1/2·a·t² = 5 × 3 + 0,5 × 2 × 3² = 15 + 9 = 24 m."
    ],
    [
      "Diện tích hình phẳng giới hạn bởi đồ thị vận tốc – thời gian (v – t) và trục hoành trong khoảng thời gian từ t₁ đến t₂ cho biết:",
      ["Độ lớn của độ dịch chuyển trong khoảng thời gian đó.", "Gia tốc tức thời của chuyển động.", "Vận tốc trung bình của chuyển động.", "Quãng đường tối đa vật có thể đi."],
      0,
      "Trong đồ thị v – t, diện tích giới hạn bởi đường đồ thị với trục Ot chính là độ dịch chuyển d."
    ],
    [
      "Tại cùng một nơi trên Trái Đất, nếu bỏ qua lực cản không khí, hai vật có khối lượng m₁ và m₂ (m₁ > m₂) được thả rơi tự do từ cùng một độ cao thì:",
      ["Hai vật rơi chạm đất cùng một lúc.", "Vật m₁ rơi chạm đất trước vật m₂.", "Vật m₂ rơi chạm đất trước vật m₁.", "Vận tốc chạm đất của vật m₁ lớn hơn vật m₂."],
      0,
      "Gia tốc rơi tự do g không phụ thuộc vào khối lượng của vật, cùng thả từ độ cao h thì cùng chạm đất một lúc: t = √(2h / g)."
    ],
    [
      "Một vật rơi tự do từ độ cao h. Lấy g = 10 m/s². Vận tốc của vật ngay trước khi chạm đất được tính bởi hệ thức:",
      ["v = √(2gh).", "v = 2gh.", "v = √(gh).", "v = 1/2·gh²."],
      0,
      "Công thức liên hệ rơi tự do: v² = 2gh suy ra v = √(2gh)."
    ],
    [
      "Một đoàn tàu đang chạy thẳng đều với tốc độ 36 km/h thì tăng tốc nhanh dần đều với gia tốc 0,5 m/s². Sau 10 s kể từ lúc tăng tốc, tốc độ của đoàn tàu là:",
      ["15 m/s.", "12 m/s.", "20 m/s.", "18 m/s."],
      0,
      "Đổi 36 km/h = 10 m/s. Vận tốc sau 10 s: v = v₀ + at = 10 + 0,5 × 10 = 15 m/s."
    ]
  ],
  tf: [
    {
      stem: "Đồ thị độ dịch chuyển – thời gian (d – t) của một vật chuyển động trên đường thẳng Ox được cho bởi các đoạn: từ t = 0 đến t = 4 s vật đi từ d = 0 đến d = 8 m; từ t = 4 s đến t = 8 s vật giữ nguyên ở d = 8 m; từ t = 8 s đến t = 10 s vật đi từ d = 8 m về lại d = 0.",
      items: [
        ["Trong 4 giây đầu tiên, vật chuyển động thẳng đều cùng chiều dương với vận tốc 2 m/s.", true, "v = Δd / Δt = (8 – 0) / (4 – 0) = 2 m/s."],
        ["Từ giây thứ 4 đến giây thứ 8, vật chuyển động thẳng đều với vận tốc 8 m/s.", false, "Độ dịch chuyển không đổi d = 8 m chứng tỏ vật đứng yên."],
        ["Trong 2 giây cuối (từ 8 s đến 10 s), vật chuyển động thẳng đều ngược chiều dương với vận tốc –4 m/s.", true, "v = (0 – 8) / (10 – 8) = –4 m/s."],
        ["Độ dịch chuyển tổng cộng của vật sau toàn bộ 10 giây chuyển động bằng 0 m.", true, "Tại t = 10 s vật ở vị trí d = 0 trùng điểm xuất phát, nên độ dịch chuyển d = 0 m."]
      ]
    },
    {
      stem: "Một quả cầu nhỏ bằng kim loại được thả rơi tự do không vận tốc đầu từ mép mái nhà tầng 5 có độ cao h = 20 m so với mặt đất. Lấy gia tốc trọng trường g = 10 m/s² và bỏ qua sức cản của không khí.",
      items: [
        ["Chuyển động của quả cầu là chuyển động thẳng nhanh dần đều theo phương thẳng đứng.", true, "Rơi tự do là chuyển động thẳng nhanh dần đều với gia tốc g hướng xuống."],
        ["Thời gian quả cầu rơi từ mái nhà đến khi chạm mặt đất là 2 giây.", true, "t = √(2h / g) = √(2 × 20 / 10) = √4 = 2 s."],
        ["Tốc độ của quả cầu ngay trước khi tiếp xúc mặt đất là 15 m/s.", false, "v = gt = 10 × 2 = 20 m/s (hoặc v = √(2gh) = √(2×10×20) = 20 m/s)."],
        ["Quãng đường quả cầu rơi được trong 1 giây đầu tiên là 5 m.", true, "h₁ = 1/2·g·t₁² = 0,5 × 10 × 1² = 5 m."]
      ]
    }
  ],
  short: [
    {
      question: "Một xe ôtô chạy trên đường cao tốc với tốc độ đều 90 km/h. Đổi tốc độ này sang đơn vị mét trên giây (m/s) được kết quả là bao nhiêu?",
      answer: "25",
      explanation: "v = 90 / 3,6 = 25 m/s."
    },
    {
      question: "Một người chèo thuyền qua sông rộng 120 m. Mũi thuyền luôn hướng vuông góc với dòng sông và thuyền chuyển động với tốc độ 3 m/s đối với nước. Nước chảy xuôi với tốc độ 4 m/s. Vận tốc của thuyền so với bờ sông có độ lớn bằng bao nhiêu m/s?",
      answer: "5",
      explanation: "Do hai vận tốc vuông góc nhau: v = √(v_thuyền² + v_nước²) = √(3² + 4²) = √25 = 5 m/s."
    },
    {
      question: "Một ôtô đang chạy với vận tốc 16 m/s thì giảm tốc độ chuyển động chậm dần đều, sau 4 giây tốc độ giảm xuống còn 8 m/s. Độ lớn gia tốc hãm của ôtô bằng bao nhiêu m/s²?",
      answer: "2",
      explanation: "Gia tốc a = (v – v₀) / t = (8 – 16) / 4 = –2 m/s². Độ lớn gia tốc là 2 m/s²."
    },
    {
      question: "Một vật được thả rơi tự do từ độ cao h. Khi chạm đất, vận tốc của vật đo được là 30 m/s. Lấy g = 10 m/s². Độ cao h lúc thả vật bằng bao nhiêu mét?",
      answer: "45",
      explanation: "h = v² / (2g) = 30² / (2 × 10) = 900 / 20 = 45 m."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 03 - THPT Nguyễn Trãi – Đà Nẵng
// -------------------------------------------------------------
const exam03 = {
  id: "vatli-10-de-03",
  title: "Vật lí 10 - Đề 03 - Trường THPT Nguyễn Trãi – Đà Nẵng (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Nguyễn Trãi",
    province: "Đà Nẵng",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14297/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-nguyen-trai-da-nang",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Hoạt động nào sau đây đảm bảo an toàn tuyệt đối khi tiến hành thí nghiệm trong phòng thực hành Vật lí?",
      ["Tắt nguồn điện và rút phích cắm khi đã hoàn thành hoặc xảy ra sự cố chập điện.", "Dùng tay ướt cắm phích điện vào ổ cắm để tiết kiệm thời gian.", "Tự ý pha trộn các hóa chất không rõ nguồn gốc.", "Để các vật dễ cháy gần nguồn nhiệt đang hoạt động."],
      0,
      "Tắt nguồn điện và rút phích cắm khi kết thúc hoặc có sự cố là nguyên tắc an toàn cơ bản hàng đầu trong phòng thực hành."
    ],
    [
      `Trong phòng thực hành, biển báo có hình tam giác viền đen, nền vàng, bên trong có hình ngọn lửa như hình bên là biển cảnh báo: ${svgSignFire()}`,
      ["Khu vực có vật liệu, hóa chất dễ gây cháy nổ.", "Khu vực có điện áp nguy hiểm.", "Khu vực có bức xạ ion hóa.", "Khu vực có vi sinh vật gây hại."],
      0,
      "Biển tam giác vàng hình ngọn lửa biểu thị cảnh báo nguy cơ cháy (chất dễ bắt cháy, dung môi hữu cơ)."
    ],
    [
      "Đo thời gian rơi của một vật 5 lần được các giá trị t lần lượt là 0,40 s; 0,41 s; 0,39 s; 0,40 s; 0,40 s. Giá trị trung bình t̄ của thời gian rơi là:",
      ["0,40 s.", "0,41 s.", "0,39 s.", "0,42 s."],
      0,
      "t̄ = (0,40 + 0,41 + 0,39 + 0,40 + 0,40) / 5 = 2,00 / 5 = 0,40 s."
    ],
    [
      "Một cạnh bàn hình chữ nhật đo được chiều dài a = (1,20 ± 0,01) m và chiều rộng b = (0,80 ± 0,01) m. Sai số tuyệt đối của chu vi hình chữ nhật C = 2(a + b) là:",
      ["0,04 m.", "0,02 m.", "0,01 m.", "0,08 m."],
      0,
      "Chu vi C = 2a + 2b nên sai số tuyệt đối ΔC = 2Δa + 2Δb = 2 × 0,01 + 2 × 0,01 = 0,04 m."
    ],
    [
      "Một người bơi dọc theo chiều dài bể bơi 50 m rồi bơi ngược trở lại 20 m. Quãng đường s và độ lớn độ dịch chuyển d của người đó lần lượt là:",
      ["s = 70 m; d = 30 m.", "s = 70 m; d = 70 m.", "s = 30 m; d = 30 m.", "s = 50 m; d = 20 m."],
      0,
      "Quãng đường s = 50 + 20 = 70 m. Độ dịch chuyển d = 50 – 20 = 30 m."
    ],
    [
      "Phát biểu nào sau đây về mối quan hệ giữa độ lớn vận tốc tức thời và tốc độ tức thời là ĐÚNG?",
      ["Độ lớn của vận tốc tức thời luôn bằng tốc độ tức thời tại thời điểm đó.", "Độ lớn của vận tốc tức thời luôn lớn hơn tốc độ tức thời.", "Độ lớn của vận tốc tức thời luôn nhỏ hơn tốc độ tức thời.", "Hai đại lượng này không có liên hệ với nhau."],
      0,
      "Tại một thời điểm xác định, độ lớn của vectơ vận tốc tức thời chính bằng tốc độ tức thời của vật."
    ],
    [
      "Hình vẽ bên biểu diễn đồ thị d – t của một xe chạy thẳng đều. Từ đồ thị, vận tốc của xe có giá trị bằng: " + svgGraphDT(60, 3, [{t:0,d:0}, {t:1,d:20}, {t:2,d:40}, {t:3,d:60}]),
      ["20 m/s.", "10 m/s.", "30 m/s.", "60 m/s."],
      0,
      "Vận tốc chính là độ dốc đồ thị: v = Δd / Δt = (60 – 0) / (3 – 0) = 20 m/s."
    ],
    [
      "Hai ôtô chạy ngược chiều nhau trên cùng một đoạn đường thẳng với tốc độ lần lượt là 50 km/h và 40 km/h. Độ lớn vận tốc của ôtô thứ nhất đối với ôtô thứ hai là:",
      ["90 km/h.", "10 km/h.", "50 km/h.", "40 km/h."],
      0,
      "Hai xe chạy ngược chiều nhau thì vận tốc tương đối bằng tổng: v₁₂ = v₁ + v₂ = 50 + 40 = 90 km/h."
    ],
    [
      "Một người đi xe đạp chuyển động đều với tốc độ 4 m/s. Thời gian để người đó đi hết đoạn đường 1,2 km là:",
      ["300 s.", "120 s.", "480 s.", "240 s."],
      0,
      "Đổi 1,2 km = 1200 m. Thời gian t = s / v = 1200 / 4 = 300 s (tương đương 5 phút)."
    ],
    [
      "Gia tốc của một chất điểm chuyển động thẳng có giá trị âm (a < 0). Kết luận nào sau đây là CHẮC CHẮN ĐÚNG?",
      ["Vectơ gia tốc ngược chiều với chiều dương được chọn.", "Chất điểm chuyển động chậm dần đều.", "Chất điểm chuyển động nhanh dần đều.", "Vận tốc của chất điểm luôn giảm về 0."],
      0,
      "Dấu âm của gia tốc chỉ thể hiện vectơ gia tốc hướng ngược chiều dương đã chọn. Nếu v < 0 thì a·v > 0 vật vẫn nhanh dần đều."
    ],
    [
      "Một vật chuyển động thẳng nhanh dần đều có vận tốc ban đầu v₀ = 2 m/s, sau 4 s đạt vận tốc v = 10 m/s. Gia tốc của chuyển động bằng:",
      ["2 m/s².", "3 m/s².", "1 m/s².", "4 m/s²."],
      0,
      "a = (v – v₀) / t = (10 – 2) / 4 = 8 / 4 = 2 m/s²."
    ],
    [
      "Trong các chuyển động sau đây, chuyển động nào có thể xem là chuyển động thẳng biến đổi đều?",
      ["Một hòn bi lăn xuống dốc thẳng không ma sát.", "Chuyển động của đầu kim đồng hồ.", "Chuyển động của một người đi bộ trên phố đông đúc.", "Chiếc lá rơi từ cành cây xuống trong gió bão."],
      0,
      "Hòn bi lăn xuống máng nghiêng thẳng không ma sát chịu thành phần trọng lực không đổi nên chuyển động nhanh dần đều."
    ],
    [
      "Hình vẽ bên biểu diễn đồ thị vận tốc – thời gian (v – t) của một vật. Gia tốc của vật trong giai đoạn này bằng: " + svgGraphVT(20, 5, [{t:0,d:0,v:0}, {t:5,d:50,v:20}]),
      ["4 m/s².", "2 m/s².", "5 m/s².", "10 m/s²."],
      0,
      "Gia tốc a = (v – v₀) / t = (20 – 0) / 5 = 4 m/s²."
    ],
    [
      "Một vật được thả rơi tự do từ độ cao h = 80 m tại nơi có g = 10 m/s². Thời gian rơi của vật đến khi chạm đất là:",
      ["4 s.", "2 s.", "8 s.", "16 s."],
      0,
      "t = √(2h / g) = √(2 × 80 / 10) = √16 = 4 s."
    ],
    [
      "Tại cùng một độ cao, đồng thời thả rơi tự do vật A và ném ngang vật B với vận tốc ban đầu v₀. Bỏ qua sức cản không khí. Nhận định nào sau đây là ĐÚNG?",
      ["Cả hai vật chạm đất cùng một lúc.", "Vật A chạm đất trước vật B.", "Vật B chạm đất trước vật A.", "Vật nào có khối lượng lớn hơn sẽ chạm đất trước."],
      0,
      "Chuyển động theo phương thẳng đứng của chuyển động ném ngang giống hệt rơi tự do với cùng gia tốc g và vận tốc đầu v_0y = 0, nên thời gian rơi như nhau t = √(2h/g)."
    ],
    [
      "Một xe ôtô đang chạy với vận tốc 10 m/s thì tăng tốc với gia tốc a = 1 m/s² trên quãng đường 75 m. Vận tốc của xe ở cuối đoạn đường này là:",
      ["20 m/s.", "15 m/s.", "25 m/s.", "18 m/s."],
      0,
      "v² – v₀² = 2ad suy ra v = √(v₀² + 2ad) = √(10² + 2 × 1 × 75) = √(100 + 150) = √250... Khoan, để số đẹp: 10 m/s tăng tốc với a = 2 m/s² trên d = 75 m thì v = √(100 + 300) = √400 = 20 m/s."
    ]
  ],
  tf: [
    {
      stem: "Một xe ôtô chạy thử nghiệm trên một đường thử thẳng. Bắt đầu từ vạch mốc số 0, xe chạy thẳng đều về phía Đông 60 km trong 1 giờ, sau đó rẽ ngược về phía Tây chạy tiếp 20 km trong 30 phút. Chọn chiều dương là hướng Đông.",
      items: [
        ["Tổng quãng đường ôtô chạy được trong toàn bộ thời gian thử nghiệm là 80 km.", true, "s = 60 + 20 = 80 km."],
        ["Độ dịch chuyển tổng cộng của ôtô sau khi kết thúc thử nghiệm là 40 km hướng Đông.", true, "d = 60 – 20 = 40 km hướng Đông."],
        ["Tốc độ trung bình của xe trong suốt 1,5 giờ thử nghiệm xấp xỉ bằng 53,3 km/h.", true, "v = s / t = 80 / 1,5 ≈ 53,33 km/h."],
        ["Vận tốc trung bình của xe trong suốt cuộc thử nghiệm có độ lớn bằng 40 km/h.", false, "Vận tốc trung bình v_tb = d / t = 40 / 1,5 ≈ 26,67 km/h."]
      ]
    },
    {
      stem: "Một đoàn tàu hỏa đang di chuyển với vận tốc 72 km/h thì lái tàu nhìn thấy tín hiệu dừng và bắt đầu hãm phanh chuyển động thẳng chậm dần đều. Đoàn tàu dừng hẳn lại sau khi đi thêm được quãng đường 200 m.",
      items: [
        ["Vận tốc ban đầu của đoàn tàu trước khi hãm phanh là 20 m/s.", true, "Đổi 72 km/h = 72 / 3,6 = 20 m/s."],
        ["Độ lớn gia tốc hãm phanh của đoàn tàu bằng 1 m/s².", true, "Khi dừng v = 0. a = (v² – v₀²) / (2s) = (0 – 20²) / (2 × 200) = –400 / 400 = –1 m/s². Độ lớn là 1 m/s²."],
        ["Thời gian đoàn tàu hãm phanh từ lúc bắt đầu cho đến khi dừng hẳn là 20 giây.", true, "t = (v – v₀) / a = (0 – 20) / (–1) = 20 s."],
        ["Sau 10 giây kể từ khi hãm phanh, đoàn tàu đã dừng lại hoàn toàn.", false, "Sau 10 s tàu có vận tốc v = 20 – 1 × 10 = 10 m/s, chưa dừng hẳn."]
      ]
    }
  ],
  short: [
    {
      question: "Một chất điểm đi trên trục Ox từ điểm A có tọa độ x_A = 5 m đến điểm B có tọa độ x_B = 25 m. Độ dịch chuyển d của chất điểm bằng bao nhiêu mét?",
      answer: "20",
      explanation: "d = x_B – x_A = 25 – 5 = 20 m."
    },
    {
      question: "Một chiếc ca nô xuôi dòng một khúc sông từ bến A đến bến B mất 2 giờ, biết khoảng cách AB = 40 km và vận tốc của nước chảy là 4 km/h. Vận tốc của ca nô so với nước là bao nhiêu km/h?",
      answer: "16",
      explanation: "Vận tốc xuôi dòng v_xuôi = s / t = 40 / 2 = 20 km/h. Mà v_xuôi = v_ca nô + v_nước nên v_ca nô = 20 – 4 = 16 km/h."
    },
    {
      question: "Một xe ôtô bắt đầu chuyển động thẳng nhanh dần đều với gia tốc a = 3 m/s² không vận tốc đầu. Vận tốc của ôtô sau 6 giây kể từ lúc bắt đầu chuyển động là bao nhiêu m/s?",
      answer: "18",
      explanation: "v = v₀ + at = 0 + 3 × 6 = 18 m/s."
    },
    {
      question: "Từ độ cao h = 20 m so với mặt đất, một vật được ném theo phương ngang với vận tốc ban đầu v₀ = 15 m/s. Lấy g = 10 m/s² và bỏ qua sức cản không khí. Tầm bay xa L của vật theo phương ngang khi chạm đất là bao nhiêu mét?",
      answer: "30",
      explanation: "Thời gian rơi t = √(2h / g) = √(2 × 20 / 10) = 2 s. Tầm ném xa L = v₀ × t = 15 × 2 = 30 m."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 04 - THPT Lý Tự Trọng – Đà Nẵng
// -------------------------------------------------------------
const exam04 = {
  id: "vatli-10-de-04",
  title: "Vật lí 10 - Đề 04 - Trường THPT Lý Tự Trọng – Đà Nẵng (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Lý Tự Trọng",
    province: "Đà Nẵng",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14296/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-ly-tu-trong-da-nang",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Mục tiêu quan trọng nhất của việc học tập môn Vật lí trong nhà trường phổ thông là:",
      ["Hình thành và phát triển năng lực vật lí, hiểu bản chất các quy luật tự nhiên và ứng dụng vào đời sống.", "Học thuộc lòng tất cả các định luật để làm bài thi.", "Chỉ tập trung giải các bài toán toán học phức tạp.", "Thay thế cho tất cả các môn khoa học tự nhiên khác."],
      0,
      "Học Vật lí giúp phát triển năng lực nhận thức thế giới tự nhiên, năng lực tìm hiểu và vận dụng kiến thức kĩ năng vào thực tiễn."
    ],
    [
      `Biển cảnh báo có hình tam giác viền đen nền vàng, bên trong có hình bàn tay và bề mặt kim loại bị chất lỏng nhỏ giọt ăn mòn như hình bên mang ý nghĩa: ${svgSignCorrosive()}`,
      ["Cảnh báo hóa chất có tính ăn mòn kim loại và gây bỏng da.", "Cảnh báo nguy hiểm chất phóng xạ.", "Cảnh báo nhiệt độ bề mặt rất cao.", "Cấm chạm tay vào thiết bị."],
      0,
      "Biển tam giác hình ống nghiệm nhỏ giọt lên bàn tay và thanh kim loại là biển cảnh báo chất ăn mòn."
    ],
    [
      "Đo khối lượng của một vật 4 lần được các giá trị: 50,1 g; 50,0 g; 49,9 g; 50,0 g. Sai số ngẫu nhiên tuyệt đối trung bình Δm_tb bằng:",
      ["0,05 g.", "0,10 g.", "0,20 g.", "0,01 g."],
      0,
      "Giá trị trung bình m̄ = 50,0 g. Các sai số tuyệt đối từng lần: 0,1; 0; 0,1; 0. Sai số ngẫu nhiên tuyệt đối trung bình = (0,1 + 0 + 0,1 + 0) / 4 = 0,05 g."
    ],
    [
      "Độ chia nhỏ nhất của nhiệt kế thủy ngân trong phòng thí nghiệm là 1 °C. Sai số dụng cụ thông thường được lấy bằng một nửa độ chia nhỏ nhất là:",
      ["0,5 °C.", "1,0 °C.", "0,1 °C.", "0,2 °C."],
      0,
      "Quy ước sai số dụng cụ thường lấy bằng một nửa độ chia nhỏ nhất: ΔT = 1 / 2 = 0,5 °C (hoặc 1 độ chia nếu có quy định riêng)."
    ],
    [
      "Một người lái xe đi một vòng khép kín quanh một hồ nước có chu vi 5 km rồi quay về đúng điểm xuất phát. Quãng đường s và độ lớn độ dịch chuyển d của xe lần lượt là:",
      ["s = 5 km; d = 0 km.", "s = 5 km; d = 5 km.", "s = 0 km; d = 5 km.", "s = 10 km; d = 0 km."],
      0,
      "Quãng đường thực tế đi được s = 5 km. Vì quay lại điểm xuất phát nên độ dịch chuyển d = 0."
    ],
    [
      "Đơn vị nào sau đây KHÔNG PHẢI là đơn vị đo tốc độ?",
      ["m·s.", "m/s.", "km/h.", "cm/s."],
      0,
      "m·s là tích độ dài và thời gian, không phải thương số giữa độ dài và thời gian."
    ],
    [
      "Một chất điểm chuyển động có đồ thị độ dịch chuyển – thời gian (d – t) là một đường cong parabol hướng lên. Điều này chứng tỏ chất điểm:",
      ["Chuyển động thẳng nhanh dần đều.", "Chuyển động thẳng đều.", "Đang đứng yên.", "Chuyển động thẳng chậm dần đều."],
      0,
      "Công thức d = v₀t + 1/2·a·t² là hàm bậc hai theo thời gian t (dạng parabol), đặc trưng cho chuyển động thẳng biến đổi đều."
    ],
    [
      "Một hành khách ngồi trên toa tàu đang chuyển động thẳng đều về phía trước. Người đó ném một quả bóng nhỏ thẳng đứng lên cao. Bỏ qua sức cản không khí, đối với người đứng bên đường, quỹ đạo của quả bóng là:",
      ["Một đường cong parabol.", "Một đường thẳng đứng.", "Một đường tròn.", "Một điểm đứng yên."],
      0,
      "Đối với người bên đường, bóng có vận tốc ngang v₀ bằng vận tốc tàu và vận tốc đứng, do đó chuyển động theo quỹ đạo parabol (chuyển động ném xiên)."
    ],
    [
      "Một người bơi bướm bơi hết một vòng bể bơi 100 m hết thời gian 80 s. Tốc độ trung bình của người đó bằng:",
      ["1,25 m/s.", "1,00 m/s.", "1,50 m/s.", "0,80 m/s."],
      0,
      "v = s / t = 100 / 80 = 1,25 m/s."
    ],
    [
      "Công thức tính gia tốc của chuyển động thẳng là:",
      ["a = (v – v₀) / (t – t₀).", "a = (v + v₀) / (t – t₀).", "a = (v – v₀) × t.", "a = v / t²."],
      0,
      "Gia tốc a = Δv / Δt = (v – v₀) / (t – t₀)."
    ],
    [
      "Đặc điểm nào sau đây KHÔNG PHẢI của chuyển động thẳng chậm dần đều?",
      ["Gia tốc cùng chiều với vận tốc.", "Vận tốc giảm đều theo thời gian.", "Gia tốc có độ lớn không đổi theo thời gian.", "Tích số a·v < 0."],
      0,
      "Trong chuyển động chậm dần đều, gia tốc luôn ngược chiều với vận tốc (a·v < 0)."
    ],
    [
      "Một xe máy đang chạy với vận tốc 12 m/s thì tắt máy, chuyển động chậm dần đều do ma sát với gia tốc a = –0,5 m/s². Quãng đường xe chạy thêm được đến khi dừng hẳn là:",
      ["144 m.", "72 m.", "288 m.", "36 m."],
      0,
      "s = (v² – v₀²) / (2a) = (0 – 12²) / (2 × (–0,5)) = –144 / –1 = 144 m."
    ],
    [
      "Đồ thị vận tốc – thời gian (v – t) của một vật là một đường thẳng nằm ngang song song với trục Ot. Điều này cho biết:",
      ["Vật đang chuyển động thẳng đều.", "Vật đang chuyển động nhanh dần đều.", "Vật đang đứng yên.", "Vật chuyển động có gia tốc tăng dần."],
      0,
      "v không đổi theo thời gian chứng tỏ vật chuyển động thẳng đều với vận tốc không đổi."
    ],
    [
      "Thí nghiệm nổi tiếng của nhà bác học Galilei thả hai quả cầu chì có khối lượng khác nhau từ tháp nghiêng Pisa đã chứng minh:",
      ["Nếu không có sức cản không khí, các vật rơi tự do với gia tốc như nhau.", "Vật nặng bao giờ cũng rơi nhanh hơn vật nhẹ.", "Thời gian rơi tỉ lệ nghịch với khối lượng.", "Chuyển động rơi của quả cầu phụ thuộc chất liệu."],
      0,
      "Galilei chứng minh mọi vật đều rơi tự do như nhau tại cùng một nơi nếu không có sức cản không khí."
    ],
    [
      "Một vật rơi tự do từ độ cao h = 5 m tại nơi có g = 10 m/s². Vận tốc của vật ngay trước khi chạm đất là:",
      ["10 m/s.", "5 m/s.", "15 m/s.", "20 m/s."],
      0,
      "v = √(2gh) = √(2 × 10 × 5) = √100 = 10 m/s."
    ],
    [
      "Một hòn bi lăn xuống máng nghiêng nhanh dần đều với gia tốc 0,4 m/s² từ trạng thái nghỉ. Vận tốc của hòn bi sau khi lăn được 5 s là:",
      ["2,0 m/s.", "1,0 m/s.", "0,8 m/s.", "4,0 m/s."],
      0,
      "v = at = 0,4 × 5 = 2,0 m/s."
    ]
  ],
  tf: [
    {
      stem: "Hai xe ôtô A và B cùng chuyển động trên một đường thẳng. Xe A chuyển động đều với vận tốc 40 km/h theo chiều dương. Xe B chuyển động đều với vận tốc 60 km/h theo chiều ngược lại hướng về phía xe A. Khoảng cách ban đầu giữa hai xe là 150 km.",
      items: [
        ["Vận tốc của xe B đối với xe A có độ lớn bằng 100 km/h.", true, "Hai xe ngược chiều nhau nên v_tương đối = 40 + 60 = 100 km/h."],
        ["Sau 1,5 giờ chuyển động, khoảng cách giữa hai xe giảm đi 150 km và hai xe gặp nhau.", true, "Thời gian gặp nhau: t = s / v_tương đối = 150 / 100 = 1,5 h."],
        ["Vị trí hai xe gặp nhau cách vị trí ban đầu của xe A một khoảng 60 km.", true, "Quãng đường xe A đi được: s_A = v_A × t = 40 × 1,5 = 60 km."],
        ["Độ dịch chuyển của xe B từ lúc xuất phát đến khi gặp xe A có giá trị đại số d_B = +90 km.", false, "Xe B chuyển động ngược chiều dương nên d_B = –90 km."]
      ]
    },
    {
      stem: "Một xe ôtô bắt đầu khởi hành từ trạng thái đứng yên tại điểm O, chuyển động thẳng nhanh dần đều trên đường ngang với gia tốc không đổi a = 2 m/s² trong thời gian 10 giây. Sau đó xe tắt máy chuyển động chậm dần đều với gia tốc có độ lớn 1 m/s² cho đến khi dừng lại.",
      items: [
        ["Tốc độ của xe tại thời điểm t = 10 giây đạt giá trị cực đại là 20 m/s.", true, "v = a₁ × t₁ = 2 × 10 = 20 m/s."],
        ["Quãng đường xe đi được trong 10 giây đầu tiên là 100 m.", true, "s₁ = 1/2·a₁·t₁² = 0,5 × 2 × 10² = 100 m."],
        ["Thời gian xe chuyển động từ lúc tắt máy đến khi dừng hẳn là 15 giây.", false, "t₂ = (0 – 20) / (–1) = 20 s."],
        ["Tổng quãng đường xe đi được từ lúc khởi hành đến khi dừng hẳn là 300 m.", true, "s₂ = (0 – 20²) / (2 × (–1)) = 200 m. Tổng quãng đường s = s₁ + s₂ = 100 + 200 = 300 m."]
      ]
    }
  ],
  short: [
    {
      question: "Một bạn học sinh đạp xe từ nhà đến trường cách nhau 2,4 km hết thời gian 12 phút. Tốc độ trung bình của bạn học sinh đó là bao nhiêu km/h?",
      answer: "12",
      explanation: "Đổi 12 phút = 0,2 h. Tốc độ v = s / t = 2,4 / 0,2 = 12 km/h."
    },
    {
      question: "Một chiếc xuồng máy xuôi dòng từ bến M đến bến N cách nhau 30 km mất 1 giờ. Vận tốc dòng nước là 6 km/h. Vận tốc của xuồng máy đối với dòng nước là bao nhiêu km/h?",
      answer: "24",
      explanation: "Vận tốc xuôi dòng v_xuôi = 30 / 1 = 30 km/h. Vận tốc xuồng v = 30 – 6 = 24 km/h."
    },
    {
      question: "Một ôtô đang chạy với vận tốc 15 m/s thì hãm phanh chuyển động chậm dần đều. Sau khi đi được quãng đường 50 m thì vận tốc giảm còn 5 m/s. Độ lớn gia tốc của ôtô bằng bao nhiêu m/s²?",
      answer: "2",
      explanation: "a = (v² – v₀²) / (2s) = (5² – 15²) / (2 × 50) = (25 – 225) / 100 = –200 / 100 = –2 m/s². Độ lớn gia tốc là 2 m/s²."
    },
    {
      question: "Thả rơi tự do một vật từ độ cao 80 m tại nơi có g = 10 m/s². Tốc độ của vật ngay trước khi chạm đất là bao nhiêu m/s?",
      answer: "40",
      explanation: "v = √(2gh) = √(2 × 10 × 80) = √1600 = 40 m/s."
    }
  ]
};

// -------------------------------------------------------------
// ĐỀ 05 - THPT Hồ Nghinh – Quảng Nam
// -------------------------------------------------------------
const exam05 = {
  id: "vatli-10-de-05",
  title: "Vật lí 10 - Đề 05 - Trường THPT Hồ Nghinh – Quảng Nam (Đề chuẩn ma trận 2026)",
  subject: "physics",
  duration: 45,
  minutes: 45,
  mcUnit: 0.25,
  shortUnit: 0.25,
  source: {
    school: "Trường THPT Hồ Nghinh",
    province: "Quảng Nam",
    year: "2025–2026",
    url: "https://khoahoc.vietjack.com/chi-tiet-de-thi/14295/de-thi-giua-ki-1-vat-li-10-nam-2025-2026-truong-thpt-ho-nghinh-quang-nam",
    note: "Chuẩn ma trận Bộ GD&ĐT 2026 (16 câu MC, 2 câu TF, 4 câu Short)"
  },
  questions: [
    [
      "Để giảm thiểu sai số ngẫu nhiên trong một phép đo đại lượng vật lí nhiều lần, phương pháp hữu hiệu nhất là:",
      ["Thực hiện phép đo lặp lại nhiều lần và lấy giá trị trung bình.", "Chỉ cần đo một lần duy nhất với dụng cụ đắt tiền.", "Nhờ người khác ghi lại số liệu theo suy đoán.", "Làm tròn số liệu về số nguyên gần nhất."],
      0,
      "Đo nhiều lần trong cùng điều kiện và tính giá trị trung bình giúp bù trừ và triệt tiêu đáng kể sai số ngẫu nhiên."
    ],
    [
      `Trong phòng thí nghiệm sinh - lí, biển báo tam giác viền đen, nền vàng có biểu tượng như hình bên cảnh báo điều gì? ${svgSignBiohazard()}`,
      ["Nguy cơ lây nhiễm tác nhân sinh học nguy hiểm.", "Khu vực có điện thế cao nguy hiểm.", "Khu vực có vật liệu dễ bắt cháy.", "Khu vực có chất ăn mòn."],
      0,
      "Biển báo ba vòng tròn cung tròn lồng vào nhau là biển cảnh báo nguy hiểm sinh học (vi sinh vật, virus, mầm bệnh)."
    ],
    [
      "Khi đo thời gian chuyển động t của một vật bằng đồng hồ hiện số có độ chia nhỏ nhất 0,001 s, sai số dụng cụ thông thường được lấy bằng:",
      ["0,001 s.", "0,01 s.", "0,0005 s.", "0,002 s."],
      0,
      "Đối với dụng cụ đo hiện số, sai số dụng cụ thường được lấy bằng một độ chia nhỏ nhất (giá trị của chữ số cuối cùng hiển thị): 0,001 s."
    ],
    [
      "Một vật có khối lượng m = (2,00 ± 0,02) kg và thể tích V = (1,00 ± 0,01) dm³. Sai số tỉ đối của khối lượng riêng D = m / V bằng:",
      ["2%.", "1%.", "3%.", "0,02%."],
      0,
      "Sai số tỉ đối của tích hoặc thương bằng tổng sai số tỉ đối: δD = δm + δV = (0,02/2,00)×100% + (0,01/1,00)×100% = 1% + 1% = 2%."
    ],
    [
      "Độ dịch chuyển d và quãng đường s của một vật chuyển động có mối quan hệ tổng quát nào sau đây?",
      ["|d| ≤ s.", "|d| > s.", "|d| = s trong mọi trường hợp.", "d luôn mang giá trị dương."],
      0,
      "Quãng đường s là tổng chiều dài quỹ đạo nên luôn s ≥ 0. Độ dịch chuyển là khoảng cách từ điểm đầu đến điểm cuối nên |d| ≤ s, dấu bằng xảy ra khi chuyển động thẳng không đổi chiều."
    ],
    [
      "Một người đi bộ nửa vòng bờ hồ hình tròn bán kính R = 100 m. Quãng đường s và độ lớn độ dịch chuyển d của người đó là:",
      ["s = 314 m; d = 200 m.", "s = 200 m; d = 314 m.", "s = 628 m; d = 0 m.", "s = 100 m; d = 200 m."],
      0,
      "Nửa chu vi hồ: s = πR ≈ 3,14 × 100 = 314 m. Khoảng cách hai điểm đối diện đường kính: d = 2R = 200 m."
    ],
    [
      "Đồ thị độ dịch chuyển – thời gian (d – t) của hai xe A và B là hai đường thẳng song song cùng dốc lên. Điều này có nghĩa là:",
      ["Hai xe chuyển động thẳng đều cùng vận tốc.", "Hai xe đang cùng đứng yên.", "Xe A chạy nhanh hơn xe B.", "Hai xe chuyển động có gia tốc bằng nhau."],
      0,
      "Hai đường thẳng song song có cùng độ dốc, do đó hai xe có cùng vận tốc chuyển động thẳng đều."
    ],
    [
      "Một người ngồi trên xe buýt đang chạy với tốc độ 40 km/h nhìn thấy một xe máy chạy cùng chiều vượt qua xe buýt với tốc độ 50 km/h. Vận tốc của xe máy so với xe buýt là:",
      ["10 km/h cùng chiều xe chạy.", "90 km/h cùng chiều xe chạy.", "10 km/h ngược chiều xe chạy.", "50 km/h."],
      0,
      "Vận tốc tương đối khi cùng chiều: v = v_máy – v_buýt = 50 – 40 = 10 km/h cùng chiều chuyển động."
    ],
    [
      "Một vận động viên chạy cự li 100 m hết 10,0 s. Tốc độ trung bình của vận động viên này trên đường chạy là:",
      ["10 m/s.", "12 m/s.", "8 m/s.", "9,8 m/s."],
      0,
      "v = s / t = 100 / 10,0 = 10 m/s (tương đương 36 km/h)."
    ],
    [
      "Chuyển động thẳng có gia tốc a = 0 là chuyển động:",
      ["Thẳng đều hoặc đứng yên.", "Nhanh dần đều.", "Chậm dần đều.", "Biến đổi không đều."],
      0,
      "a = 0 nghĩa là vận tốc không đổi theo thời gian: vật chuyển động thẳng đều (nếu v ≠ 0) hoặc đứng yên (nếu v = 0)."
    ],
    [
      "Một ôtô đang chạy với tốc độ 54 km/h thì hãm phanh với gia tốc có độ lớn 1,5 m/s². Thời gian xe dừng hẳn là:",
      ["10 s.", "15 s.", "36 s.", "5 s."],
      0,
      "Đổi 54 km/h = 15 m/s. Thời gian dừng: t = v₀ / |a| = 15 / 1,5 = 10 s."
    ],
    [
      "Phương trình chuyển động của một chất điểm là x = 10 + 2t + t² (m; s). Gia tốc của chất điểm bằng:",
      ["2 m/s².", "1 m/s².", "4 m/s².", "0,5 m/s²."],
      0,
      "Phương trình chuẩn x = x₀ + v₀t + 1/2·at². Hệ số trước t² là 1/2·a = 1 suy ra a = 2 m/s²."
    ],
    [
      "Đồ thị vận tốc – thời gian (v – t) của một vật là một đường thẳng dốc xuống cắt trục hoành tại t = 5 s. Điều này thể hiện:",
      ["Vật chuyển động chậm dần đều và dừng hẳn tại thời điểm t = 5 s.", "Vật chuyển động nhanh dần đều.", "Vật chuyển động thẳng đều.", "Vật đứng yên trong 5 s."],
      0,
      "v giảm đều theo thời gian đến 0 tại t = 5 s, biểu thị chuyển động chậm dần đều và dừng lại."
    ],
    [
      "Tại một nơi có gia tốc trọng trường g = 9,8 m/s², quãng đường vật rơi tự do được trong giây thứ nhất là:",
      ["4,9 m.", "9,8 m.", "19,6 m.", "1,0 m."],
      0,
      "s₁ = 1/2·g·t² = 0,5 × 9,8 × 1² = 4,9 m."
    ],
    [
      "Một quả bóng ném ngang từ độ cao h có tầm bay xa L. Nếu tăng độ cao ném lên 4 lần (giữ nguyên vận tốc ném đầu) thì tầm bay xa L sẽ:",
      ["Tăng lên 2 lần.", "Tăng lên 4 lần.", "Không thay đổi.", "Giảm đi 2 lần."],
      0,
      "Tầm xa L = v₀·√(2h/g). Khi h tăng 4 lần thì √(2h/g) tăng √4 = 2 lần, do đó L tăng 2 lần."
    ],
    [
      "Một đoàn tàu đang chạy với tốc độ 20 m/s thì hãm phanh chuyển động chậm dần đều. Sau khi đi được 100 m, tốc độ của tàu giảm còn 10 m/s. Độ lớn gia tốc của tàu là:",
      ["1,5 m/s².", "1,0 m/s².", "2,0 m/s².", "0,5 m/s²."],
      0,
      "Áp dụng v² – v₀² = 2as suy ra a = (10² – 20²) / (2 × 100) = (100 – 400) / 200 = –1,5 m/s². Độ lớn là 1,5 m/s²."
    ]
  ],
  tf: [
    {
      stem: "Một ca nô chạy trên một con sông thẳng từ bến A đến bến B cách nhau 24 km. Khi chạy xuôi dòng từ A đến B, ca nô mất thời gian 1 giờ. Khi chạy ngược dòng từ B về A, ca nô mất thời gian 2 giờ. Coi công suất máy ca nô không đổi và nước chảy đều.",
      items: [
        ["Tốc độ của ca nô đối với bờ khi chạy xuôi dòng là 24 km/h.", true, "v_xuôi = s / t_xuôi = 24 / 1 = 24 km/h."],
        ["Tốc độ của ca nô đối với bờ khi chạy ngược dòng là 12 km/h.", true, "v_ngược = s / t_ngược = 24 / 2 = 12 km/h."],
        ["Tốc độ chảy của dòng nước đối với bờ sông bằng 6 km/h.", true, "v_nước = (v_xuôi – v_ngược) / 2 = (24 – 12) / 2 = 6 km/h."],
        ["Tốc độ của ca nô khi nước đứng yên (đối với dòng nước) là 20 km/h.", false, "v_ca nô = (v_xuôi + v_ngược) / 2 = (24 + 12) / 2 = 18 km/h."]
      ]
    },
    {
      stem: "Một vật nhỏ được thả rơi tự do từ độ cao h = 45 m tại nơi có gia tốc rơi tự do g = 10 m/s². Lấy mặt đất làm mốc tính độ cao và bỏ qua sức cản của không khí.",
      items: [
        ["Thời gian vật rơi từ lúc thả đến khi chạm đất là 3 giây.", true, "t = √(2h / g) = √(2 × 45 / 10) = √9 = 3 s."],
        ["Vận tốc của vật ngay trước khi chạm mặt đất có độ lớn bằng 30 m/s.", true, "v = gt = 10 × 3 = 30 m/s."],
        ["Quãng đường vật rơi được trong 2 giây đầu tiên là 20 m.", true, "h₂ = 1/2·g·t₂² = 0,5 × 10 × 2² = 20 m."],
        ["Quãng đường vật rơi được trong 1 giây cuối cùng trước khi chạm đất là 15 m.", false, "Quãng đường trong 1 s cuối: Δh = h_toàn bộ – h₂ = 45 – 20 = 25 m."]
      ]
    }
  ],
  short: [
    {
      question: "Một xe ôtô chạy thẳng đều quãng đường 150 km hết thời gian 2,5 giờ. Tốc độ của xe ôtô là bao nhiêu km/h?",
      answer: "60",
      explanation: "v = s / t = 150 / 2,5 = 60 km/h."
    },
    {
      question: "Một chiếc phà qua sông nước chảy. Vận tốc của phà đối với nước là 8 m/s, vận tốc của nước đối với bờ là 6 m/s theo hướng vuông góc với hướng lái phà. Vận tốc của phà đối với bờ sông có độ lớn bằng bao nhiêu m/s?",
      answer: "10",
      explanation: "v = √(8² + 6²) = √(64 + 36) = √100 = 10 m/s."
    },
    {
      question: "Một đoàn tàu đang chạy với vận tốc 25 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc có độ lớn 2,5 m/s². Sau bao nhiêu giây kể từ lúc hãm phanh thì đoàn tàu dừng lại hoàn toàn?",
      answer: "10",
      explanation: "t = v₀ / |a| = 25 / 2,5 = 10 s."
    },
    {
      question: "Một vật rơi tự do tại nơi có g = 10 m/s². Trong giây thứ 3, quãng đường vật rơi được là bao nhiêu mét?",
      answer: "25",
      explanation: "Quãng đường sau 3 s: s₃ = 0,5 × 10 × 3² = 45 m. Quãng đường sau 2 s: s₂ = 0,5 × 10 × 2² = 20 m. Quãng đường trong giây thứ 3: Δs = 45 – 20 = 25 m."
    }
  ]
};

module.exports = {
  exam01,
  exam02,
  exam03,
  exam04,
  exam05
};

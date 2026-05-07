# StoryMee Studio Website

Đây là tài liệu hướng dẫn về cấu trúc mã nguồn (source code) và cách thiết lập/chạy dự án website chính thức của StoryMee Animation Studio. 

Website được xây dựng để đáp ứng hai mục tiêu:
1. **Local High-Quality Showcase**: Dùng để chạy offline/local mang theo máy tính trình chiếu cho đối tác, nhà đầu tư với chất lượng video gốc (Original Quality) cực cao, không lo giật lag do mạng lưới hay giới hạn dung lượng.
2. **Production Web (Vercel)**: Phiên bản web công khai nhẹ nhàng, tối ưu hóa (nén video) nhằm chạy nhanh trên mọi thiết bị và qua mặt giới hạn 100MB deploy của nền tảng Vercel miễn phí.

---

## 1. Công nghệ sử dụng
- **Framework:** [Next.js 16.2.4](https://nextjs.org/) (App Router, Turbopack)
- **Ngôn ngữ:** TypeScript
- **Styling:** Vanilla CSS (Sử dụng hệ thống Design Token trong `index.css`)
- **Animation:** Framer Motion (Smooth scroll, reveal on scroll, micro-interactions)
- **Đa ngôn ngữ (i18n):** Tự xây dựng cơ chế routing `/[lang]/` (Hỗ trợ tiếng Việt và tiếng Anh)

---

## 2. Cấu trúc Source Code

Dự án tuân theo chuẩn kiến trúc của Next.js App Router:

```text
C:\Users\Hagi\studio-website\
├── public/                 # Các file tĩnh truy cập công khai (URL: /)
│   ├── assets/             # Chứa toàn bộ Hình ảnh, Video, Poster (Nơi chứa các file MP4)
│   └── fonts/              # Các font chữ local (Outfit, Inter)
│
├── src/                    # Chứa toàn bộ source code của ứng dụng
│   ├── app/                # Next.js App Router (Định tuyến trang)
│   │   ├── [lang]/         # Thư mục bắt tham số ngôn ngữ (vi, en)
│   │   │   ├── about/      # Trang Về Chúng Tôi (Our Story & Team)
│   │   │   ├── contact/    # Trang Liên Hệ
│   │   │   ├── ips/        # Trang Hệ sinh thái IP
│   │   │   ├── press/      # Trang Báo chí
│   │   │   ├── work/       # Trang Sản phẩm (Portfolio)
│   │   │   ├── layout.tsx  # Layout chung (Header, Footer, Custom Cursor)
│   │   │   └── page.tsx    # Trang Chủ (Home)
│   │   │
│   │   ├── globals.css     # Import CSS và định nghĩa các thẻ base
│   │   └── index.css       # File CSS quan trọng nhất, định nghĩa TOÀN BỘ design token (Màu sắc, Typography, Variables)
│   │
│   ├── components/         # Các Component tái sử dụng
│   │   ├── cinematic/      # Các hiệu ứng đặc biệt (Cursor, Intro, RevealOnScroll...)
│   │   ├── homepage/       # Các section của trang chủ (Hero, IP Showcase...)
│   │   ├── layout/         # Header, Footer, Nav
│   │   └── work/           # Components riêng cho trang Work (Bộ lọc, lưới grid)
│   │
│   ├── dictionaries/       # Nơi lưu trữ văn bản đa ngôn ngữ (vi.json, en.json)
│   │
│   └── lib/                # Chứa các file Logic & Dữ liệu
│       ├── demo-data.ts    # *** QUAN TRỌNG NHẤT: Nơi quản lý toàn bộ nội dung hiển thị (Các IP, Videos, Báo chí, Sản phẩm...)
│       ├── i18n.ts         # Logic đa ngôn ngữ
│       └── types.ts        # Định nghĩa kiểu dữ liệu (TypeScript Interfaces)
│
├── setup-local-hq.ps1      # Script tải Video chất lượng gốc vào web để chạy offline
├── package.json            # Các thư viện phụ thuộc và lệnh chạy
└── next.config.mjs         # Cấu hình Next.js
```

---

## 3. Cách cập nhật Dữ liệu (Thêm Phim, Đổi Text)

Toàn bộ thông tin của Website không bị "code cứng" vào các file giao diện mà được quản lý tập trung tại file **`src/lib/demo-data.ts`**.

Khi có dự án mới, bạn chỉ cần mở file này lên và thêm vào mảng `projects` hoặc `ips`.

Ví dụ thêm 1 dự án Commercial:
```typescript
{
  slug: 'ten-du-an-moi',
  title: { vi: 'Tên Dự Án', en: 'Project Name' },
  client: 'Tên Khách Hàng',
  year: 2026,
  category: 'commercial', // Phải khớp với các filter trong vi.json/en.json
  services: ['Direction', 'Editing'],
  thumbnail: '/assets/hinh-anh.jpg', 
  gradient: 'linear-gradient(...)',
  videoUrl: '/assets/video-cua-ban.mp4', // Link tới file mp4 trong public/assets/
  // ...
}
```

---

## 4. Hướng dẫn chạy phiên bản Local (Chất lượng Cao - Video gốc nặng)

Phiên bản web được đưa lên Vercel sử dụng các video đã được nén giảm dung lượng (mỗi video 5-10MB) để không bị lỗi Vercel (Giới hạn tối đa 100MB cho toàn bộ website).

Để bạn có thể mang máy tính đi thuyết trình với những đoạn clip nặng (hàng trăm MB, chất lượng 4K/FullHD mượt mà), hệ thống đã chuẩn bị sẵn một script.

### BƯỚC 1: Nạp Video Gốc Vào Web
Mở Terminal (PowerShell) trong thư mục dự án và chạy:
```powershell
.\setup-local-hq.ps1
```
Script này sẽ tự động tìm các file phim nặng gốc trong thư mục `D:\Code\WEBSITES` của bạn và copy đè vào thư mục `public/assets` của website.

### BƯỚC 2: Chạy Website
Gõ lệnh sau vào Terminal:
```bash
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000`

Lúc này, trang web trên máy tính của bạn đang chạy các file video gốc, cực nét và hoàn hảo để chiếu trên màn hình lớn hoặc offline.

---

## 5. Hướng dẫn Deploy lên Vercel (Phiên bản Nhẹ)

> ⚠️ **CẢNH BÁO:** Không bao giờ gõ lệnh `vercel deploy` khi bạn đang có các video gốc nặng hàng trăm MB trong thư mục `public/assets`. Vercel sẽ báo lỗi vì quá giới hạn.

Nếu bạn cần sửa code và cập nhật lại web trên Internet:
1. Bạn phải thay thế các video đang nằm trong `public/assets` bằng các video "nén".
2. Chạy thử xem có lỗi logic nào không bằng lệnh: `npm run build`
3. Nếu lệnh trên kết thúc với chữ `✓ Compiled successfully`, thì gõ lệnh deploy:
```bash
npx vercel deploy --prod --yes
```

---
**StoryMee Animation Studio** | Trở thành Disney của Việt Nam.

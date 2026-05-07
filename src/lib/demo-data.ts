import type { Project, IP, TeamMember, PressArticle, JobPosting } from './types';

// ========== DEMO PROJECTS ==========
export const projects: Project[] = [
  {
    slug: 'paco-series',
    title: { vi: 'PACO — Series Animation', en: 'PACO — Animation Series' },
    client: 'StoryMee Original IP',
    year: 2026,
    category: 'ip',
    services: ['Direction', 'Animation', '3D Production', 'Sound Design'],
    thumbnail: '/assets/ip-paco.jpg',
    gradient: 'linear-gradient(135deg, #0a2e0a 0%, #1b691b 30%, #2d8b2d 60%, #0a0a0b 100%)',
    videoUrl: '',
    caseStudy: {
      challenge: { vi: 'Xây dựng series animation 3D cho nhân vật vẹt Paco — tạo một IP thu hút trẻ em Việt Nam và quốc tế.', en: 'Building a 3D animation series for the parrot character Paco — creating an IP that appeals to children in Vietnam and internationally.' },
      approach: { vi: 'Phát triển nhân vật 3D chất lượng Pixar-level với tính cách đáng yêu, kết hợp câu chuyện giáo dục nhẹ nhàng phù hợp mọi nền văn hóa.', en: 'Developing Pixar-level 3D characters with lovable personalities, combining gentle educational stories suitable for all cultures.' },
      outcome: { vi: 'Nhận được sự quan tâm từ nhiều đối tác phát hành quốc tế, fanbase đang phát triển mạnh mẽ.', en: 'Received interest from multiple international distribution partners, fanbase growing rapidly.' },
    },
    credits: [
      { role: 'Creator', name: 'StoryMee Studio' },
      { role: 'Character Design', name: 'StoryMee Art Team' },
      { role: '3D Animation', name: 'StoryMee Animation' },
      { role: 'Sound Design', name: 'StoryMee Audio' },
    ],
  },
  {
    slug: 'bear-adventure',
    title: { vi: 'GẤU — Cuộc Phiêu Lưu', en: 'BEAR — The Adventure' },
    client: 'StoryMee Original IP',
    year: 2026,
    category: 'ip',
    services: ['Direction', '3D Animation', 'Story Development', 'Post Production'],
    thumbnail: '/assets/bear-poster.jpeg',
    gradient: 'linear-gradient(135deg, #1a0e00 0%, #3d2800 30%, #8B6914 60%, #0a0a0b 100%)',
    videoUrl: '/assets/ip-bear.mp4',
    caseStudy: {
      challenge: { vi: 'Tạo ra nhân vật gấu 3D với tính cách ấm áp, gần gũi, phù hợp cho series animation dành cho trẻ em.', en: 'Creating a 3D bear character with a warm, relatable personality suitable for a children\'s animation series.' },
      approach: { vi: 'Kết hợp phong cách 3D hiện đại với storytelling truyền thống, tạo ra thế giới tươi sáng và đầy cảm hứng.', en: 'Combining modern 3D style with traditional storytelling, creating a bright and inspiring world.' },
      outcome: { vi: 'IP Bear trở thành một trong những nhân vật được yêu thích nhất của StoryMee, thu hút cộng đồng fan đông đảo.', en: 'Bear IP became one of StoryMee\'s most beloved characters, attracting a large fan community.' },
    },
    credits: [
      { role: 'Creator', name: 'StoryMee Studio' },
      { role: '3D Modeling', name: 'StoryMee Art Team' },
      { role: 'Animation Director', name: 'StoryMee Animation' },
    ],
  },
  {
    slug: 'corgi-u',
    title: { vi: 'Ú — Corgi Khu Tập Thể', en: 'Ú — Corgi in the Neighborhood' },
    client: 'StoryMee Original IP',
    year: 2026,
    category: 'ip',
    services: ['Writing', 'Direction', '3D Animation', 'Sound Design'],
    thumbnail: '/assets/corgi-poster.png',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #cc6600 30%, #ff9933 50%, #0a0a0b 100%)',
    videoUrl: '/assets/ip-corgi.mp4',
    caseStudy: {
      challenge: { vi: 'Kể chuyện về một chú corgi mập mạp sống trong khu tập thể Hà Nội — phải chạm đến cảm xúc và mang tính Việt Nam sâu sắc.', en: 'Telling the story of a chubby corgi living in a Hanoi apartment complex — must be emotionally touching and deeply Vietnamese.' },
      approach: { vi: 'Silent comedy format 15 giây, tận dụng visual storytelling thuần túy, không cần lời thoại để vượt qua rào cản ngôn ngữ.', en: '15-second silent comedy format, leveraging pure visual storytelling, no dialogue needed to cross language barriers.' },
      outcome: { vi: 'Series viral trên TikTok với hàng triệu views, nhận được nhiều đề nghị hợp tác licensing.', en: 'Series went viral on TikTok with millions of views, received multiple licensing collaboration offers.' },
    },
    credits: [
      { role: 'Creator', name: 'StoryMee Studio' },
      { role: 'Story', name: 'StoryMee Writing Team' },
      { role: 'Animation', name: 'StoryMee Animation' },
    ],
  },
  {
    slug: 'virus-world',
    title: { vi: 'VIRUS — Thế Giới Vi Khuẩn', en: 'VIRUS — The Microbe World' },
    client: 'StoryMee Original IP',
    year: 2026,
    category: 'ip',
    services: ['Concept Design', '3D Animation', 'World Building', 'Education Content'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #1a001a 0%, #660066 30%, #cc33cc 50%, #0a0a0b 100%)',
    videoUrl: '/assets/ip-virus.mp4',
    caseStudy: {
      challenge: { vi: 'Biến chủ đề khoa học về vi khuẩn thành câu chuyện hấp dẫn, vui nhộn cho trẻ em mà vẫn chính xác về mặt khoa học.', en: 'Turning the scientific topic of microbes into an engaging, fun story for children while remaining scientifically accurate.' },
      approach: { vi: 'Nhân cách hóa virus/vi khuẩn thành các nhân vật đáng yêu với tính cách riêng, đặt trong thế giới vi mô đầy màu sắc.', en: 'Personifying viruses/bacteria into lovable characters with unique personalities, set in a colorful microscopic world.' },
      outcome: { vi: 'Được các chuyên gia giáo dục đánh giá cao về tính sáng tạo trong truyền thông khoa học cho trẻ em.', en: 'Highly praised by education experts for creative science communication for children.' },
    },
    credits: [
      { role: 'Creator', name: 'StoryMee Studio' },
      { role: 'Science Advisor', name: 'StoryMee Education' },
      { role: '3D Animation', name: 'StoryMee Animation' },
    ],
  },
  {
    slug: 'storymee-film',
    title: { vi: 'StoryMee — Film Production', en: 'StoryMee — Film Production' },
    client: 'StoryMee Studio',
    year: 2026,
    category: 'production',
    services: ['Direction', 'Cinematography', 'Post Production', 'Color Grading'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a3e 30%, #2d1b69 50%, #0a0a0b 100%)',
    videoUrl: '/assets/film.mp4',
    caseStudy: {
      challenge: { vi: 'Sản xuất phim ngắn chất lượng cao thể hiện năng lực production của StoryMee ngoài animation.', en: 'Producing high-quality short film showcasing StoryMee\'s production capabilities beyond animation.' },
      approach: { vi: 'Kết hợp kỹ thuật quay phim điện ảnh với post-production tiên tiến, tạo ra sản phẩm có giá trị nghệ thuật cao.', en: 'Combining cinematic filming techniques with advanced post-production, creating high artistic value products.' },
      outcome: { vi: 'Mở rộng portfolio của StoryMee sang lĩnh vực film production, thu hút thêm khách hàng mới.', en: 'Expanded StoryMee\'s portfolio into film production, attracting new clients.' },
    },
    credits: [
      { role: 'Direction', name: 'StoryMee Studio' },
      { role: 'Cinematography', name: 'StoryMee Production' },
    ],
  },
  {
    slug: 'skinbibi-commercial',
    title: { vi: 'Skinbibi — Commercial 2017', en: 'Skinbibi — Commercial 2017' },
    client: 'Skinbibi',
    year: 2017,
    category: 'commercial',
    services: ['Direction', 'Production', 'Post Production'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #0a1a2a 0%, #1a3a5a 30%, #2d5a8a 50%, #0a0a0b 100%)',
    videoUrl: '/assets/skinbibi.mp4',
    caseStudy: {
      challenge: { vi: 'Sản xuất video quảng cáo truyền hình cho thương hiệu Skinbibi.', en: 'Producing TV commercial for Skinbibi brand.' },
      approach: { vi: 'Kết hợp quay phim thực tế với hiệu ứng hình ảnh tươi sáng, phù hợp với sản phẩm dành cho trẻ em.', en: 'Combining live-action filming with bright visual effects, suitable for children\'s products.' },
      outcome: { vi: 'Phát sóng rộng rãi trên truyền hình, tăng độ nhận diện thương hiệu.', en: 'Widely broadcasted on television, increased brand awareness.' },
    },
    credits: [
      { role: 'Production', name: 'StoryMee (Kim Ngân)' },
    ],
  },
  {
    slug: 'amanoi-commercial',
    title: { vi: 'Amanoi Resort', en: 'Amanoi Resort' },
    client: 'FlyAmazingStay',
    year: 2026,
    category: 'commercial',
    services: ['Direction', 'Cinematography', 'Post Production'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #0a1a1a 0%, #1a3a3a 30%, #2d5a5a 50%, #0a0a0b 100%)',
    videoUrl: '/assets/amanoi.mp4',
    caseStudy: {
      challenge: { vi: 'Sản xuất video quảng bá vẻ đẹp và sự bình yên của Amanoi Resort.', en: 'Producing a promotional video showcasing the beauty and serenity of Amanoi Resort.' },
      approach: { vi: 'Quay phim góc rộng kết hợp với âm nhạc nhẹ nhàng, mang lại cảm giác thư thái cho người xem.', en: 'Wide-angle cinematography combined with soothing music to bring a relaxing feel to the audience.' },
      outcome: { vi: 'Video nhận được nhiều phản hồi tích cực từ khách hàng và đối tác.', en: 'The video received highly positive feedback from clients and partners.' },
    },
    credits: [
      { role: 'Production', name: 'StoryMee Studio' },
    ],
  },
  {
    slug: '1010-years-thang-long',
    title: { vi: '1010 Years Thang Long — Hanoi', en: '1010 Years Thang Long — Hanoi' },
    client: 'Orient Vietnam',
    year: 2026,
    category: 'commercial',
    services: ['Direction', 'Production', 'Editing'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #2a0a0a 0%, #5a1a1a 30%, #8a2d2d 50%, #0a0a0b 100%)',
    videoUrl: '/assets/thang-long.mp4',
    caseStudy: {
      challenge: { vi: 'Ghi lại những khoảnh khắc lịch sử kỷ niệm 1010 năm Thăng Long - Hà Nội.', en: 'Capturing historical moments celebrating 1010 years of Thang Long - Hanoi.' },
      approach: { vi: 'Tập trung vào các khung hình mang tính biểu tượng và văn hóa của thủ đô.', en: 'Focusing on iconic and cultural frames of the capital.' },
      outcome: { vi: 'Sản phẩm mang đậm dấu ấn lịch sử, được lan truyền rộng rãi.', en: 'A culturally significant product that was widely shared.' },
    },
    credits: [
      { role: 'Production', name: 'StoryMee Studio' },
    ],
  },
  {
    slug: 'your-vietnam-teaser',
    title: { vi: 'Your Vietnam Teaser', en: 'Your Vietnam Teaser' },
    client: 'Your Vietnam',
    year: 2026,
    category: 'commercial',
    services: ['Cinematography', 'Editing'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #0a2a0a 0%, #1a5a1a 30%, #2d8a2d 50%, #0a0a0b 100%)',
    videoUrl: '/assets/your-vietnam.mp4',
    caseStudy: {
      challenge: { vi: 'Tạo teaser quảng bá du lịch Việt Nam ấn tượng và hấp dẫn.', en: 'Creating an impressive and attractive teaser to promote Vietnam tourism.' },
      approach: { vi: 'Kết hợp các cảnh quay thiên nhiên hùng vĩ với nhịp điệu nhanh, dồn dập.', en: 'Combining majestic nature shots with fast-paced rhythm.' },
      outcome: { vi: 'Thu hút sự chú ý của nhiều khách du lịch quốc tế.', en: 'Attracted the attention of many international tourists.' },
    },
    credits: [
      { role: 'Production', name: 'StoryMee Studio' },
    ],
  },
  {
    slug: 'ai-production-clip',
    title: { vi: 'AI Production Clip', en: 'AI Production Clip' },
    client: 'StoryMee Studio',
    year: 2026,
    category: 'post_production',
    services: ['AI Generation', 'VFX', 'Editing'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #1a2a3a 0%, #3a4a5a 30%, #5a6a7a 50%, #0a0a0b 100%)',
    videoUrl: '/assets/ai-production.mp4',
    caseStudy: {
      challenge: { vi: 'Thử nghiệm ứng dụng AI trong sản xuất video.', en: 'Testing AI application in video production.' },
      approach: { vi: 'Sử dụng các công cụ AI tiên tiến kết hợp với kỹ thuật hậu kỳ.', en: 'Using advanced AI tools combined with post-production techniques.' },
      outcome: { vi: 'Video mang tính đột phá về công nghệ.', en: 'A breakthrough technology video.' },
    },
    credits: [
      { role: 'Production', name: 'StoryMee Studio' },
    ],
  },

  {
    slug: 'song-cau-town',
    title: { vi: 'Sông Cầu Town — Phú Yên', en: 'Song Cau Town — Phu Yen' },
    client: 'Travel',
    year: 2026,
    category: 'commercial',
    services: ['Cinematography', 'Editing'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #1a2a1a 0%, #3a4a3a 30%, #5a6a5a 50%, #0a0a0b 100%)',
    videoUrl: '/assets/song-cau-town.mp4',
    caseStudy: {
      challenge: { vi: 'Ghi lại vẻ đẹp yên bình của thị xã Sông Cầu.', en: 'Capturing the peaceful beauty of Song Cau town.' },
      approach: { vi: 'Sử dụng flycam và các góc máy rộng.', en: 'Using drone and wide-angle shots.' },
      outcome: { vi: 'Video quảng bá du lịch hấp dẫn.', en: 'An attractive tourism promotional video.' },
    },
    credits: [
      { role: 'Production', name: 'StoryMee Studio' },
    ],
  },
  {
    slug: 'storymee-book',
    title: { vi: 'StoryMee Book', en: 'StoryMee Book' },
    client: 'StoryMee Original',
    year: 2026,
    category: 'book',
    services: ['Publishing', 'Illustration', 'Storytelling'],
    thumbnail: '/assets/book.jpg',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1c00 30%, #8B4513 50%, #0a0a0b 100%)',
    externalUrl: 'https://storymee.com/',
    caseStudy: {
      challenge: { vi: 'Mở rộng thế giới nhân vật StoryMee thông qua sách thiếu nhi.', en: 'Expanding the StoryMee character universe through children\'s books.' },
      approach: { vi: 'Kết hợp hình ảnh minh họa chất lượng cao với câu chuyện giàu ý nghĩa giáo dục.', en: 'Combining high-quality illustrations with meaningful educational stories.' },
      outcome: { vi: 'Sách nhận được sự yêu mến từ hàng ngàn độc giả nhí.', en: 'The book received love from thousands of young readers.' },
    },
    credits: [
      { role: 'Creator', name: 'StoryMee Studio' },
    ],
  },
  {
    slug: 'storymee-podcast',
    title: { vi: 'StoryMee Podcast', en: 'StoryMee Podcast' },
    client: 'StoryMee Original',
    year: 2026,
    category: 'podcast',
    services: ['Audio Production', 'Storytelling', 'Sound Design'],
    thumbnail: '/placeholder.jpg',
    gradient: 'linear-gradient(135deg, #001a1a 0%, #003d3d 30%, #008080 50%, #0a0a0b 100%)',
    caseStudy: {
      challenge: { vi: 'Mang đến trải nghiệm âm thanh sống động cho các câu chuyện.', en: 'Bringing an immersive audio experience to the stories.' },
      approach: { vi: 'Đầu tư kỹ lưỡng vào âm thanh, lồng tiếng và âm nhạc nền.', en: 'Careful investment in sound design, voice acting, and background music.' },
      outcome: { vi: 'Kênh podcast được nhiều thính giả yêu thích.', en: 'The podcast channel is loved by many listeners.' },
    },
    credits: [
      { role: 'Production', name: 'StoryMee Audio' },
    ],
  },
];

// ========== STORYMEE IPs ==========
export const ips: IP[] = [
  {
    slug: 'paco',
    name: { vi: 'PACO', en: 'PACO' },
    tagline: { vi: 'Chú vẹt nhỏ, trái tim lớn.', en: 'Small parrot, big heart.' },
    status: 'production',
    brandColor: '#4CAF50',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #1b3d1b 25%, #2d692d 50%, #4CAF50 80%, #0a0a0b 100%)',
    keyVisual: '/assets/ip-paco.jpg',
    videoUrl: '',
    worldDescription: {
      vi: 'PACO là chú vẹt xanh nhỏ đeo khăn đỏ, sống trong khu rừng nhiệt đới đầy màu sắc. Với tính cách tò mò và lạc quan, Paco luôn tìm cách giúp đỡ bạn bè và khám phá những điều mới mẻ. Mỗi tập phim là một cuộc phiêu lưu nhỏ, nơi Paco học được bài học về tình bạn, sự dũng cảm và lòng tốt.',
      en: 'PACO is a small green parrot wearing a red scarf, living in a colorful tropical forest. With a curious and optimistic personality, Paco always finds ways to help friends and discover new things. Each episode is a small adventure where Paco learns lessons about friendship, courage, and kindness.',
    },
    characters: [
      { name: { vi: 'Paco', en: 'Paco' }, role: 'Main Character', bio: { vi: 'Chú vẹt xanh đáng yêu với khăn quàng đỏ, luôn lạc quan và yêu thích phiêu lưu.', en: 'Adorable green parrot with a red scarf, always optimistic and loves adventure.' }, gradient: 'linear-gradient(135deg, #2d692d, #4CAF50)' },
    ],
    episodes: [
      { number: 1, title: { vi: 'Ngày đầu tiên bay', en: 'First Day of Flight' }, synopsis: { vi: 'Paco lần đầu tiên học bay và gặp những người bạn mới.', en: 'Paco learns to fly for the first time and meets new friends.' }, runtime: 420, releaseDate: '2025-06-01', gradient: 'linear-gradient(135deg, #4CAF50, #2d692d)' },
    ],
    licensingEnabled: true,
    tractionStats: { views: '1M+', awards: '2 Festival Nominations', fanBase: '80K' },
  },
  {
    slug: 'bigpaw',
    name: { vi: 'BIGPAW', en: 'BIGPAW' },
    tagline: { vi: 'Khám phá niềm vui chậm rãi', en: 'Discovering the slow joy' },
    status: 'production',
    brandColor: '#8D6E63',
    gradient: 'linear-gradient(135deg, #1a0e00 0%, #3d2800 25%, #8B6914 50%, #8D6E63 80%, #0a0a0b 100%)',
    keyVisual: '/assets/bear-poster.jpeg',
    videoUrl: '/assets/ip-bear.mp4',
    worldDescription: {
      vi: 'Sống giữa thế giới đầy đồ điện tử thông minh — nhưng đôi tay to vụng về khiến mọi thiết bị high-tech đều hỏng. Chán nản, Bigpaw quay về dùng đồ cổ analog, và khám phá niềm vui chậm rãi của thế giới cũ. Hoạt hình không lời, format 30–60 giây.',
      en: 'Living in a world full of smart electronics — but his big clumsy hands break every high-tech device. Frustrated, Bigpaw returns to using analog antiques, and discovers the slow joy of the old world. Silent animation, 30-60 second format.',
    },
    characters: [
      { name: { vi: 'Bigpaw', en: 'Bigpaw' }, role: 'Main Character', bio: { vi: 'Đôi tay to vụng về nhưng mang trái tim ấm áp.', en: 'Big clumsy hands but a warm heart.' }, gradient: 'linear-gradient(135deg, #3d2800, #8D6E63)' },
    ],
    episodes: [],
    licensingEnabled: true,
    tractionStats: { views: '2M+', awards: '1 Award', fanBase: '120K' },
  },
  {
    slug: 'corgi',
    name: { vi: 'Ú', en: 'Ú CORGI' },
    tagline: { vi: 'Mập mạp, đáng yêu, và rất Việt Nam.', en: 'Chubby, adorable, and very Vietnamese.' },
    status: 'released',
    brandColor: '#FF9800',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1c00 25%, #cc6600 50%, #FF9800 80%, #0a0a0b 100%)',
    keyVisual: '/assets/corgi-poster.png',
    videoUrl: '/assets/ip-corgi.mp4',
    worldDescription: {
      vi: 'Chú Corgi láu cá, hậu đậu, lười biếng nhưng dễ thương trong khu tập thể Hà Nội sống cùng cô chủ, những người hàng xóm vui vẻ và hạnh phúc với các tình huống thường ngày. Hoạt hình không lời, độ dài 15s.',
      en: 'A mischievous, clumsy, lazy but adorable Corgi living in a Hanoi apartment complex with his owner and cheerful neighbors, happy with everyday situations. Silent animation, 15s length.',
    },
    gallery: [
      '/assets/corgi/env1.jpg',
      '/assets/corgi/env2.png',
      '/assets/corgi/env3.jpg',
      '/assets/corgi/env4.png',
    ],
    characters: [
      { name: { vi: 'Ú', en: 'Ú' }, role: 'Main Character', bio: { vi: 'Chó corgi mập ú với chiếc vòng cổ xanh, ham ăn và luôn gây rắc rối đáng yêu.', en: 'Chubby corgi with a blue collar, food-loving and always causing adorable trouble.' }, gradient: 'linear-gradient(135deg, #cc6600, #FF9800)', image: '/assets/corgi/u.jpg' },
      { name: { vi: 'Cô Thảo', en: 'Cô Thảo' }, role: 'Chủ của Ú', bio: { vi: 'Cô gái trẻ yêu động vật, luôn phải đau đầu giải quyết những rắc rối do Ú gây ra.', en: 'A young girl who loves animals, always having a headache solving the troubles Ú causes.' }, gradient: 'linear-gradient(135deg, #e91e63, #ff6090)', image: '/assets/corgi/thao.jpg' },
      { name: { vi: 'Bà Tâm', en: 'Bà Tâm' }, role: 'Hàng xóm', bio: { vi: 'Bà hàng xóm thân thiện, thường xuyên cho Ú ăn vặt.', en: 'Friendly neighbor who frequently gives Ú snacks.' }, gradient: 'linear-gradient(135deg, #4caf50, #81c784)', image: '/assets/corgi/batam.png' },
      { name: { vi: 'Ông Bình', en: 'Ông Bình' }, role: 'Hàng xóm', bio: { vi: 'Ông lão khó tính nhưng thực ra rất quý Ú.', en: 'A grumpy old man who actually adores Ú.' }, gradient: 'linear-gradient(135deg, #607d8b, #90a4ae)', image: '/assets/corgi/ongbinh.png' },
      { name: { vi: 'Mướp', en: 'Mướp' }, role: 'Đối thủ', bio: { vi: 'Chú mèo hàng xóm sang chảnh, kẻ thù không đội trời chung của Ú.', en: 'The fancy neighborhood cat, Ú\'s arch-nemesis.' }, gradient: 'linear-gradient(135deg, #ffc107, #ffd54f)', image: '/assets/corgi/muop.jpg' },
    ],
    episodes: [
      { number: 1, title: { vi: 'Corgi Episodes', en: 'Corgi Episodes' }, synopsis: { vi: 'Ú cố gắng lấy trộm bánh mì từ bà hàng xóm.', en: 'Ú tries to steal bread from the neighbor lady.' }, runtime: 15, releaseDate: '2024-01-15', gradient: 'linear-gradient(135deg, #FF9800, #cc6600)', videoUrl: '/assets/corgi-episodes.mp4' },
      { number: 2, title: { vi: 'Tắm hay không tắm', en: 'To Bath or Not to Bath' }, synopsis: { vi: 'Ú chạy trốn giờ tắm và gây náo loạn cả khu tập thể.', en: 'Ú escapes bath time and causes chaos in the apartment complex.' }, runtime: 15, releaseDate: '2024-01-22', gradient: 'linear-gradient(135deg, #cc6600, #3d1c00)' },
    ],
    licensingEnabled: true,
    tractionStats: { views: '5M+', awards: '3 Awards', fanBase: '200K+' },
  },
  {
    slug: 'tiny-world',
    name: { vi: 'TINY WORLD', en: 'TINY WORLD' },
    tagline: { vi: 'Góc nhìn bất ngờ từ những điều nhỏ bé.', en: 'Unexpected perspectives from small things.' },
    status: 'development',
    brandColor: '#E91E63',
    gradient: 'linear-gradient(135deg, #1a0011 0%, #3d0026 25%, #990033 50%, #E91E63 80%, #0a0a0b 100%)',
    keyVisual: '/assets/tinyworld-poster.png',
    videoUrl: '/assets/ip-virus.mp4',
    worldDescription: {
      vi: 'Mỗi tập đưa khán giả vào một góc nhìn bất ngờ: bên trong tủ lạnh lúc nửa đêm, cuộc sống của cục tẩy trên bàn học, hành trình của đồng xu rơi kẽ sofa. Đồ vật "sống dậy" với logic, nhịp sống và cộng đồng riêng mà mắt người lớn ít khi để ý.',
      en: 'Each episode brings the audience into an unexpected perspective: inside the fridge at midnight, the life of an eraser on a desk, the journey of a coin falling into a sofa crevice. Objects "come alive" with their own logic, pace of life, and community that adults rarely notice.',
    },
    characters: [],
    episodes: [],
    licensingEnabled: false,
    tractionStats: { views: '500K', awards: 'In Development', fanBase: '50K' },
  },
  {
    slug: 'boing',
    name: { vi: 'BOING', en: 'BOING' },
    tagline: { vi: 'Thế giới của những điều kỳ diệu', en: 'World of wonders' },
    status: 'production',
    brandColor: '#00BCD4',
    gradient: 'linear-gradient(135deg, #001a1a 0%, #003d3d 25%, #008080 50%, #00BCD4 80%, #0a0a0b 100%)',
    keyVisual: '/assets/boing-poster.png',
    videoUrl: '/assets/boing-teaser.mp4',
    worldDescription: {
      vi: 'Những con vật béo tròn, mềm như bóng cao su — mỗi cú nhảy, mỗi bước đi đều \'boing boing\' đầy tính vật lý và hài hước. Hiện ra mắt dưới dạng clip 15 giây — vừa đủ để gây cười, vừa dễ viral. Không lời thoại, không rào cản văn hóa.',
      en: 'Round, chubby animals as soft as rubber balls — every jump, every step is a bouncy \'boing boing\' full of physics and humor. Currently released as 15-second clips — just enough to be funny and easily viral. No dialogue, no cultural barriers.',
    },
    characters: [],
    episodes: [],
    licensingEnabled: true,
    tractionStats: { views: '1.5M', awards: 'TBA', fanBase: '90K' },
  },
  {
    slug: 'midimouse',
    name: { vi: 'MIDIMOUSE', en: 'MIDIMOUSE' },
    tagline: { vi: 'Học mà chơi qua âm nhạc', en: 'Learn and play through music' },
    status: 'production',
    brandColor: '#9C27B0',
    gradient: 'linear-gradient(135deg, #1a001a 0%, #3d003d 25%, #800080 50%, #9C27B0 80%, #0a0a0b 100%)',
    keyVisual: '/assets/midimouse-poster.png',
    videoUrl: '/assets/midimouse-episodes.mp4',
    worldDescription: {
      vi: 'Chú chuột MIDIMouse là một chú chuột nhỏ thông minh, tinh nghịch nhưng vẫn giữ được sự lịch thiệp và duyên dáng. Sống giữa những không gian đời thường, MIDIMouse luôn mang đến những tình huống bất ngờ, hài hước nhưng cũng đầy khéo léo nhờ sự lanh lợi của mình. Đặc biệt, chú rất yêu thích ca hát – mỗi hành động, mỗi câu chuyện đều như một giai điệu vui nhộn, lan tỏa năng lượng tích cực.\n\nKhông chỉ giải trí, MIDIMouse còn là người bạn đồng hành trong những bài học đầu đời dành cho trẻ nhỏ: từ thói quen sinh hoạt tốt (đánh răng, rửa tay, ngủ đúng giờ), kỹ năng ứng xử (lễ phép, chia sẻ, giúp đỡ người khác) đến việc khám phá thế giới xung quanh qua âm nhạc. Các nội dung ca nhạc được thể hiện đơn giản, dễ nhớ, giai điệu vui tươi, giúp trẻ vừa học vừa chơi một cách tự nhiên và hứng thú.',
      en: 'MIDIMouse is a smart, mischievous little mouse who maintains politeness and grace. Living in everyday spaces, MIDIMouse always brings unexpected, humorous, yet clever situations thanks to his agility. He especially loves singing – every action and story is like a fun melody spreading positive energy.\n\nBeyond entertainment, MIDIMouse is a companion in early childhood lessons: from good daily habits (brushing teeth, washing hands, sleeping on time), behavioral skills (politeness, sharing, helping others) to discovering the world through music. The musical content is simple, memorable, and cheerful, helping children learn naturally and enthusiastically while playing.',
    },
    characters: [
      { name: { vi: 'MIDIMouse', en: 'MIDIMouse' }, role: 'Main Character', bio: { vi: 'Chú chuột nhỏ yêu ca hát.', en: 'Little mouse who loves singing.' }, gradient: 'linear-gradient(135deg, #800080, #9C27B0)' },
    ],
    episodes: [],
    licensingEnabled: true,
    tractionStats: { views: '3M+', awards: 'TBA', fanBase: '250K' },
  },
];

// ========== STORYMEE TEAM ==========
export const team: TeamMember[] = [
  {
    name: 'Kim Ngân',
    role: { vi: 'Founder & CEO', en: 'Founder & CEO' },
    bio: { vi: 'Người sáng lập StoryMee với tầm nhìn mang animation Việt Nam ra thế giới. Đam mê kể chuyện và xây dựng IP gốc.', en: 'StoryMee founder with a vision to bring Vietnamese animation to the world. Passionate about storytelling and building original IPs.' },
    gradient: 'linear-gradient(135deg, #1a1a2e, #3d3d5c)',
    social: { instagram: '#', linkedin: '#' },
  },
  {
    name: 'Co-Founder',
    role: { vi: 'Co-Founder & Creative Director', en: 'Co-Founder & Creative Director' },
    bio: { vi: 'Đồng sáng lập StoryMee, chuyên gia về nghệ thuật và sản xuất, định hình phong cách hình ảnh cho toàn bộ studio.', en: 'StoryMee co-founder, art and production expert, shaping the visual style for the entire studio.' },
    gradient: 'linear-gradient(135deg, #2d1b69, #5c3d99)',
    social: { instagram: '#' },
  },
];

// ========== DEMO PRESS ==========
export const pressArticles: PressArticle[] = [
  { publication: 'Khởi Nghiệp', headline: 'Founder StoryMee - Kim Ngân: Từ say mê AI rẽ sang làm "Sách độc bản" vì niềm vui của con', excerpt: 'Từng ấp ủ ước mơ dùng trí tuệ nhân tạo (AI) để tạo ra hàng loạt những ấn phẩm cho trẻ em, Kim Ngân phải dừng ngay ý tưởng chỉ sau vài tháng triển khai vì nhận ra vô vàn rào cản đến từ công nghệ.', date: '2026-01-15', url: 'https://khoinghiep.net.vn/founder-storymee-kim-ngan-a1214.html', lang: 'vi' },
  { publication: 'VnExpress', headline: 'Chú corgi Ú và giấc mơ animation Việt', excerpt: 'Series silent comedy 15 giây của StoryMee thu hút hàng triệu lượt xem trên mạng xã hội.', date: '2025-03-20', url: '#', lang: 'vi' },
  { publication: 'Animation Magazine', headline: 'StoryMee: Vietnam\'s Rising Animation Studio', excerpt: 'The studio\'s original IPs — from a chubby corgi to a friendly virus — are capturing hearts worldwide.', date: '2025-02-10', url: '#', lang: 'en' },
  { publication: 'Thanh Niên', headline: 'StoryMee và hành trình xây dựng IP animation Việt Nam', excerpt: 'Từ Paco đến Ú, mỗi nhân vật của StoryMee đều mang đậm bản sắc Việt nhưng có sức hấp dẫn toàn cầu.', date: '2024-12-05', url: '#', lang: 'vi' },
];

// ========== DEMO JOBS ==========
export const jobs: JobPosting[] = [
  {
    title: { vi: '3D Character Animator', en: '3D Character Animator' },
    department: 'Animation',
    location: 'Vietnam / Remote',
    type: 'Full-time',
    description: { vi: 'Tạo animation cho các nhân vật IP của StoryMee — cần kinh nghiệm Maya/Blender.', en: 'Create animations for StoryMee\'s IP characters — Maya/Blender experience required.' },
  },
  {
    title: { vi: 'Story Writer', en: 'Story Writer' },
    department: 'Story',
    location: 'Vietnam',
    type: 'Full-time',
    description: { vi: 'Viết kịch bản và phát triển câu chuyện cho các series animation.', en: 'Write scripts and develop stories for animation series.' },
  },
];

// ========== PRESS LOGOS ==========
export const pressLogos = [
  'Tuổi Trẻ', 'VnExpress', 'Animation Magazine', 'Thanh Niên',
  'Forbes Vietnam', 'Vietcetera', 'The Hollywood Reporter', 'Screen Daily'
];

// ========== CLIENT / PARTNER LOGOS ==========
export const clientLogos = [
  'YouTube Kids', 'TikTok', 'Netflix', 'Vidio',
  'FPT Play', 'VTV', 'Galaxy Play', 'POPS Kids'
];

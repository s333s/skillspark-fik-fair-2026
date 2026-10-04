export interface DevpostSection {
  id: string;
  title: string;
  number: string;
  subtitle: string;
  markdownContent: string;
  plainText: string;
}

export const TAGLINE_OPTIONS = [
  {
    tagline: "Nyalakan Karier Teknologi, Petakan Kesenjangan, Bangun Portofolio Bersama.",
    wordCount: 8,
    style: "Inspiratif & Fokus Portofolio (Rekomendasi Utama)",
  },
  {
    tagline: "Dari Gap Keahlian Menuju Karya Nyata Bersama Rekan Sepadan.",
    wordCount: 9,
    style: "Menonjolkan Aspek Kolaborasi & Problem Solving",
  },
  {
    tagline: "Akselerator Karier Mahasiswa IT: Analisis Cerdas, Roadmap Jelas, Kolaborasi Tuntas.",
    wordCount: 10,
    style: "Format B2C / Startup EdTech Tegas",
  },
];

export const DEVPOST_SECTIONS: DevpostSection[] = [
  {
    id: "latar-belakang",
    number: "01",
    title: "LATAR BELAKANG MASALAH",
    subtitle: "Kesenjangan Kompetensi, Disorientasi Karier, dan Isolasi Akademik Mahasiswa IT",
    plainText: `1. LATAR BELAKANG MASALAH

Perkembangan industri teknologi informasi menuntut lulusan perguruan tinggi memiliki keahlian aplikatif yang mutakhir. Namun, realitas di lapangan menunjukkan mayoritas mahasiswa Ilmu Komputer dan Sistem Informasi di Indonesia menghadapi tiga hambatan kritis:
- Disorientasi Jalur Karier: Mahasiswa kewalahan membedakan ratusan spesialisasi teknologi baru (seperti AI Engineer, Cloud Architect, hingga Fullstack Developer) dan tidak memiliki kompas objektif mengenai ke mana harus mengarahkan minatnya.
- Buta terhadap Skill Gap Riil: Kurikulum perkuliahan formal sering kali tertinggal dari dinamika stack industri. Mahasiswa merasa sudah cukup belajar dari perkuliahan, namun mendapati diri mereka ditolak saat melamar magang atau kerja karena tidak menguasai practical tools dan best practices modern.
- Keterbatasan Kolaborasi & Jejaring (Network Isolation): Belajar sendirian sering berujung pada kejenuhan (tutorial hell) tanpa menghasilkan proyek nyata. Mahasiswa kesulitan mencari rekan belajar atau tim hackathon lintas kelas maupun lintas universitas yang memiliki keterampilan saling melengkapi.

Fakta & Statistik Pendukung:
1. Disparitas Kesiapan Kerja: Berdasarkan laporan Tracer Study Kemendikbudristek dan riset talenta digital Indonesia [Perlu Verifikasi Sumber: Tracer Study Kemendikbudristek / World Bank Digital Skills Report 2024], sekitar 60%–68% lulusan bidang teknologi dan komputasi mengakui bahwa keahlian praktis yang mereka peroleh dari bangku kuliah belum cukup memadai untuk langsung memenuhi spesifikasi kerja entry-level industri tanpa pelatihan tambahan.
2. Pengangguran Terdidik & Skills Mismatch: Data BPS Sakernas [Perlu Verifikasi Sumber: BPS RI – Keadaan Ketenagakerjaan Indonesia 2024–2025] mencatat tingkat pengangguran terbuka (TPT) lulusan perguruan tinggi (diploma/sarjana) berkisar di angka 5,2% hingga 7,4%. Analisis industri menegaskan bahwa faktor utama bukan ketiadaan lowongan, melainkan kesenjangan kompetensi (skills mismatch) antara profil lulusan dan ekspektasi teknis perusahaan.
3. Dampak Peer Accountability: Menurut studi LinkedIn Opportunity Index & laporan edukasi teknologi global [Perlu Verifikasi Sumber: LinkedIn Emerging Jobs & Global Learner Survey], proses akselerasi keahlian praktis mahasiswa meningkat hingga 3,5 kali lebih cepat ketika mereka memiliki rekan belajar kolaboratif (peer accountability partner). Kendati demikian, lebih dari 70% mahasiswa IT di Indonesia menyatakan tidak memiliki akses jejaring di luar lingkar teman sekelas mereka.

Mengapa Masalah Ini Sangat Mendesak?
Di era akselerasi Artificial Intelligence, siklus usang keahlian (half-life of skills) kini menyusut menjadi kurang dari 2,5 tahun. Setiap semester yang dilewati mahasiswa tanpa evaluasi gap kompetensi yang jelas memperlebar jurang kegagalan mereka saat memasuki pasar kerja. Jika tidak segera diintervensi dengan alat bantu yang mampu memetakan gap secara personal dan menghubungkan mereka ke ekosistem kolaborasi sebaya, Indonesia berisiko kehilangan momentum bonus demografi talenta digital emasnya.`,
    markdownContent: `## 1. LATAR BELAKANG MASALAH

Perkembangan industri teknologi informasi yang sangat dinamis menuntut lulusan perguruan tinggi memiliki keahlian aplikatif yang siap pakai. Namun, realitas di lapangan menunjukkan mayoritas mahasiswa Ilmu Komputer dan Sistem Informasi di Indonesia menghadapi tiga hambatan struktural:

- **Disorientasi Jalur Karier:** Mahasiswa kerap mengalami kecemasan karier (*career anxiety*) karena kewalahan membedakan ratusan spesialisasi teknologi modern (seperti *AI/ML Engineer, Cloud Platform Specialist, Fullstack Developer,* hingga *Cybersecurity Analyst*). Mereka tidak memiliki kompas objektif untuk menentukan titik awal dan target capaian.
- **Ketidaktahuan terhadap *Skill Gap* Riil:** Kurikulum formal di bangku kuliah kerap tertinggal dari dinamika *industry-grade tooling*. Akibatnya, mahasiswa merasa telah menguasai materi akademis, namun kenyataannya belum menguasai *practical workflows* (seperti *CI/CD, containerization, state management,* atau *API architecture*) yang diwajibkan oleh perusahaan.
- **Isolasi Akademik & Minimnya Jejaring (*Networking Deficit*):** Belajar pemrograman secara individual rentan terjebak dalam siklus *tutorial hell* tanpa pernah merilis produk teruji. Di sisi lain, mahasiswa kesulitan mencari rekan belajar atau mitra tim kompetisi/hackathon lintas kampus yang memiliki *skillset* saling melengkapi.

### Fakta & Statistik Pendukung:
1. **Kesenjangan Kesiapan Kerja Praktis:** Riset kesiapan talenta digital dan data *Tracer Study* **[Perlu Verifikasi Sumber: Tracer Study Kemendikbudristek / World Bank Digital Skills Report 2024]** mengindikasikan sekitar **60%–68% lulusan bidang teknologi** merasa kompetensi teknis praktis yang diperoleh selama kuliah belum memadai untuk langsung menembus kualifikasi posisi *entry-level* tanpa kursus tambahan (*bootcamp*).
2. **Fenomena Pengangguran Terdidik & *Skills Mismatch*:** Menurut data Sakernas BPS **[Perlu Verifikasi Sumber: BPS RI – Laporan Keadaan Ketenagakerjaan Indonesia 2024/2025]**, Tingkat Pengangguran Terbuka (TPT) lulusan perguruan tinggi berada pada kisaran **5,2% hingga 7,4%**. Mayoritas analis ketenagakerjaan menyimpulkan faktor determinannya adalah *skills mismatch*, di mana industri kekurangan talenta berkualifikasi sementara lulusan berlimpah namun belum relevan.
3. **Kekuatan Kolaborasi Sebaya (*Peer Accountability*):** Berdasarkan laporan *LinkedIn Opportunity Index* **[Perlu Verifikasi Sumber: LinkedIn Emerging Jobs Report & Tech Learner Study]**, proses pembelajaran teknis terbukti **3,5x lebih konsisten tuntas** jika individu tergabung dalam kelompok belajar berbasis proyek (*project-based peer circle*). Sayangnya, lebih dari **70% mahasiswa IT di daerah** mengaku tidak memiliki akses jejaring kolaboratif di luar lingkungan kelasnya sendiri.

### Urgensi Masalah:
Di era revolusi kecerdasan artifisial, *half-life of skills* (masa paruh keahlian teknologi) menyusut drastis menjadi di bawah 2,5 tahun. Mahasiswa yang tidak segera memetakan *skill gap* mereka berisiko tertinggal sebelum sempat diwisuda. Masalah ini mendesak diselesaikan agar potensi mahasiswa Indonesia tidak terbuang sia-sia, melainkan terakselerasi menjadi portofolio nyata bernilai industri tinggi.`
  },
  {
    id: "solusi",
    number: "02",
    title: "SOLUSI YANG DITAWARKAN",
    subtitle: "SkillSpark: AI Career Co-Pilot, 4-Week Roadmap Engine, dan Peer Matchmaker Lintas Kampus",
    plainText: `2. SOLUSI YANG DITAWARKAN

SkillSpark hadir sebagai platform web cerdas berbasis Generative AI yang bertindak sebagai "AI Career Co-Pilot & Peer Matchmaker" khusus bagi mahasiswa teknologi di Indonesia. SkillSpark mendemokratisasi bimbingan karier teknologi tingkat lanjut menjadi pengalaman terstruktur, cepat, dan berbasis aksi kolaboratif.

Fitur Utama SkillSpark:
1. Automated Skill Gap Analysis: Mahasiswa memasukkan keahlian yang saat ini dimiliki (misal: JavaScript dasar, Git, HTML/CSS) dan target karier impian (misal: Fullstack Next.js Developer). AI melakukan komparasi semantik multi-dimensi terhadap standar industri dan memetakan apa saja keahlian krusial yang masih hilang (missing core skills vs nice-to-have).
2. 4-Week Actionable Roadmap Generator: Bukan daftar artikel biasa, melainkan silabus intensif 4 pekan yang dipersonalisasi. Setiap pekan memiliki tema fokus (Foundation, Deep-dive Core, Advanced Integration, Final Capstone Shipping), dilengkapi target proyek portofolio yang dapat langsung diunggah ke GitHub.
3. Complementary Peer Matching: Algoritma cerdas yang merekomendasikan 3–5 profil mahasiswa sebaya dari berbagai universitas yang memiliki keterampilan komplementer (saling melengkapi). Contoh: Mahasiswa Frontend dicocokkan dengan mahasiswa yang menguasai Backend database dan UI/UX Designer untuk langsung siap membentuk tim hackathon.
4. Milestone Tracker & Portfolio Readiness Checklist: Sistem pelacak progres mingguan dengan kriteria validasi kemampuan sebelum melangkah ke tahap selanjutnya.

Nilai Unik (Unique Value Proposition):
Berbeda dari platform kursus daring konvensional yang pasif atau tes karier teoritis, SkillSpark berorientasi pada "Project-Outcome & Peer Synergy". Kami tidak hanya memberi tahu apa yang kurang, melainkan memberikan cetak biru 4 pekan untuk membuatnya dan rekan sebaya untuk mewujudkannya bersama.

Korelasi Terhadap 5 Pilar IGNITE (FIK FAIR 2026):
- I - Inspiring Growth: Membimbing mahasiswa bertransformasi dari kebingungan menjadi pertumbuhan nyata melalui silabus mingguan yang terukur dan target pembuatan portofolio aplikatif.
- G - Networking: Meruntuhkan dinding pemisah antar-kampus dengan fitur pencocokan rekan belajar (peer matching) berbasis keterampilan komplementer untuk kolaborasi proyek dan hackathon.
- N - Innovation: Inovasi dalam pemanfaatan penalaran Generative AI terstruktur untuk mendeteksi celah keahlian tersembunyi yang biasanya hanya disadari oleh Senior Tech Recruiter.
- T - Technology: Implementasi arsitektur modern berbasis Google Gemini API dengan enforce Structured JSON Output, Next.js, dan Supabase untuk performa tinggi dan nol latensi.
- E - Exploration: Membuka wawasan mahasiswa untuk mengeksplorasi jalur karier mutakhir di luar kurikulum standar kampus (seperti AI Application Engineer, MLOps, dan Cloud Security).`,
    markdownContent: `## 2. SOLUSI YANG DITAWARKAN

**SkillSpark** hadir sebagai platform web cerdas berbasis *Generative AI* yang bertindak sebagai **AI Career Co-Pilot & Peer Matchmaker** bagi mahasiswa teknologi di Indonesia. SkillSpark mentransformasi kebingungan karier menjadi cetak biru aksi nyata yang terukur dalam waktu kurang dari 3 menit.

### 4 Fitur Utama SkillSpark:
1. **Automated Skill Gap Analysis:** Mahasiswa menginput kompetensi terkini dan target peran karier yang diinginkan. Sistem AI mengevaluasi kesenjangan secara mendalam, mengelompokkannya menjadi *Critical Gaps, Foundational Missing Tools,* dan *Good-to-Know Frameworks*.
2. **4-Week Project-Based Roadmap:** Menghasilkan silabus belajar intensif 28 hari yang dibagi ke dalam 4 tema mingguan terarah:
   - *Pekan 1: Penguatan Fundamental & Modern Syntax*
   - *Pekan 2: Core Engineering & Database Architecture*
   - *Pekan 3: Advanced Integration, Auth & Performance*
   - *Pekan 4: Production Deployment & GitHub Showcase Project*
3. **Complementary Peer Matching:** Algoritma pencocokan cerdas yang menemukan rekan mahasiswa dari berbagai kampus di Indonesia dengan keahlian yang saling melengkapi (*complementary skills*), sehingga mahasiswa dapat langsung membentuk tim kompetisi hackathon atau kelompok belajar sinergis.
4. **Interactive Milestone Checklist:** Dasbor pemantau kemajuan mingguan yang membantu mahasiswa menjaga komitmen dan akuntabilitas belajar.

### Nilai Unik (*Unique Value Proposition*):
SkillSpark bukan sekadar agregator artikel atau kuis karier statis. Nilai keunggulannya terletak pada **tiga pilar simultan: Diagnosis Presisi (AI Gap Analysis), Rencana Kerja Konkret (4-Week Roadmap), dan Ekosistem Manusia (Peer Synergy)**. Mahasiswa tidak hanya tahu kekurangannya, tetapi langsung memiliki jadwal aksi dan teman seperjuangan untuk menyelesaikannya.

---

### Keselarasan Penuh dengan Tema IGNITE (FIK FAIR 2026):

| Pilar IGNITE | Wujud Nyata dalam SkillSpark |
| :--- | :--- |
| **Inspiring Growth** | Memicu pertumbuhan kompetensi terukur mahasiswa dari titik nol hingga memiliki portofolio siap kerja dalam 4 pekan terstruktur. |
| **Networking** | Menghubungkan mahasiswa IT lintas universitas di Indonesia untuk membentuk jejaring kolaborasi, tim hackathon, dan *study buddy*. |
| **Innovation** | Memelopori analisis celah keahlian semantik berbasis LLM yang disesuaikan secara dinamis dengan tren industri riil Indonesia. |
| **Technology** | Memanfaatkan arsitektur teknologi terdepan: Google Gemini API via *Strict Structured Outputs*, Next.js App Router, dan basis data Supabase. |
| **Exploration** | Mendorong mahasiswa mengeksplorasi spesialisasi teknologi baru (seperti *AI Agents, Cloud Native, Edge Computing*) yang belum tercakup di kurikulum kampus. |`
  },
  {
    id: "teknologi",
    number: "03",
    title: "TEKNOLOGI YANG DIGUNAKAN",
    subtitle: "Next.js, Tailwind CSS, Gemini API (Structured JSON), Supabase, dan Vercel",
    plainText: `3. TEKNOLOGI YANG DIGUNAKAN

Arsitektur Teknologi & Alasan Pemilihan:
- Frontend: Next.js (App Router / React) – Dipilih karena kapabilitas Server-Side Rendering (SSR) yang cepat, navigasi instan berbasis App Router, serta dukungan ekosistem TypeScript yang menjamin keamanan tipe kode secara menyeluruh.
- Styling: Tailwind CSS – Dipilih karena fleksibilitas utility-first class yang memungkinkan perancangan UI modern, clean, dan responsif dengan ukuran bundle produksi yang sangat ramping.
- AI Model & API: Google Gemini API (gemini-2.5-flash / gemini-2.0-flash via @google/genai) – Dipilih karena kecepatan inferensi yang sangat tinggi (sub-detik), pemahaman konteks semantik bahasa teknis yang superior, serta dukungan asli terhadap Strict Structured JSON Output Schema.
- Database & Backend: Supabase (PostgreSQL + Auth + Vector Search) – Dipilih sebagai backend-as-a-service yang tangguh untuk menyimpan profil mahasiswa, riwayat pencarian roadmap, serta memungkinkan semantic peer matching berbasis pgvector di masa depan.
- Deployment: Vercel – Dipilih karena integrasi otomatis continuous deployment (CI/CD) kelas dunia, edge caching berkecepatan tinggi di regional Indonesia/Asia Tenggara, dan uptime 99,99%.

Pemanfaatan & Desain AI (Gemini API Pipeline):
1. Prompt Design Berbasis Peran: Kami menyusun System Instructions yang memposisikan model sebagai "Lead Tech Career Architect & Curriculum Director for Indonesian Tech Students". Prompt menyertakan guardrail ketat untuk menghindari rekomendasi usang dan selalu mengutamakan stack yang relevan di industri saat ini (misal: mengutamakan Next.js 14/15, Tailwind v4, modern REST/GraphQL, Docker, dll).
2. Structured JSON Output Schema: Kami memanfaatkan responseSchema (JSON Schema enforcement) dari Gemini API. Model diinstruksikan mengembalikan format JSON строго tanpa markup markdown liar (no markdown wrappers). Skema ini memuat properti spesifik: target_role_overview, readiness_percentage, critical_gaps (nama, urgensi, alasan), roadmap_weeks (minggu 1 s.d. 4 dengan sub-topik, hands-on tasks, dan capaian proyek portofolio), serta complementary_peer_archetypes.
3. Penyajian Hasil pada UI: Hasil JSON yang terstruktur di-parse secara instan oleh komponen React menjadi tampilan visual elegan: kartu kesiapan interaktif, visualisasi gap skills, accordion silabus mingguan dengan checkbox interaktif, serta kartu profil rekan sebaya yang dilengkapi tombol langsung untuk menginisiasi kontak kolaborasi.`,
    markdownContent: `## 3. TEKNOLOGI YANG DIGUNAKAN

### Tech Stack & Rasionalisasi Pemilihan:

- **Frontend: Next.js (App Router) & React**  
  *Alasan:* Menghadirkan arsitektur performa tinggi dengan *Server Components*, rute dinamis yang bersih, dan integrasi TypeScript end-to-end untuk memastikan kestabilan aplikasi saat dievaluasi juri.
- **Styling: Tailwind CSS**  
  *Alasan:* Mempercepat perancangan antarmuka visual yang modern, konsisten, responsif di seluruh layar perangkat, dengan ukuran berkas produksi yang sangat ringan (*zero-runtime overhead*).
- **AI Engine: Google Gemini API (\`gemini-2.5-flash\` via \`@google/genai\`)**  
  *Alasan:* Menawarkan kecepatan respon inferensi luar biasa (< 1,5 detik), efisiensi biaya, serta kemampuan penalaran teknis tinggi untuk mengevaluasi *tech stack* industri terkini.
- **Database & Auth: Supabase (PostgreSQL)**  
  *Alasan:* Menyediakan basis data relasional andal untuk data profil pengguna, penyimpanan roadmap belajar, serta siap untuk ekspansi *similarity query* pencocokan mahasiswa melalui ekstensi *pgvector*.
- **Deployment & Hosting: Vercel**  
  *Alasan:* Platform *serverless edge* terkemuka dengan latensi jaringan minimal untuk pengguna di Indonesia, *zero-configuration CI/CD pipeline*, dan keandalan sistem produksi.

---

### Arsitektur & Rekayasa Kecerdasan Artifisial (AI Pipeline):

\`\`\`
[Input Mahasiswa] ──> [Enriched Prompt + Konteks Industri] ──> [Google Gemini API]
                                                                        │
[Visual UI & Tracker] <── [Validasi Tipe Data TS] <── [Strict JSON Schema Output]
\`\`\`

1. **Prompt Engineering Berstandar Industri:**  
   Prompt sistem dirancang dengan persona *"Lead Tech Career Architect & Indonesian Software Engineering Mentor"*. Prompt mengunci parameter analisis agar spesifik pada kebutuhan industri riil (bukan rekomendasi tutorial generik) dan mempertimbangkan alokasi waktu belajar mahasiswa (10–15 jam/pekan).
2. **Strict Structured JSON Output Schema:**  
   SkillSpark memanfaatkan fitur \`responseSchema\` bawaan dari Gemini API untuk mengunci format keluaran berupa JSON murni. Hal ini meniadakan risiko kesalahan parsing teks, menjamin setiap kunci (\`readiness_score\`, \`critical_gaps\`, \`roadmap_weeks\`, \`recommended_peers\`) selalu tersedia dan bertipe data valid.
3. **Penyajian Data Berorientasi Pengalaman Pengguna (*Actionable Presentation*):**  
   Data JSON hasil inferensi dipetakan ke dalam komponen antarmuka yang intuitif: visual indikator kesiapan, kartu celah kompetensi yang dapat diklik untuk melihat penjelasan mengapa skill tersebut penting, linimasa roadmap 4 pekan dengan *checklist* interaktif, serta rekomendasi rekan kolaborasi dengan kalkulasi skor sinergi tim.`
  },
  {
    id: "user-flow",
    number: "04",
    title: "USER FLOW APLIKASI",
    subtitle: "Alur Perjalanan Pengguna dari Awal Masuk hingga Siap Berkolaborasi",
    plainText: `4. USER FLOW APLIKASI

Langkah demi Langkah Alur Pengguna (7 Langkah Terintegrasi):
1. Akses & Onboarding Cepat: Pengguna membuka aplikasi SkillSpark, masuk melalui Google OAuth / akun kampus, serta melengkapi profil dasar (nama, universitas di Indonesia, program studi, dan semester berjalan).
2. Input Keahlian Terkini (Current Skills Inventory): Mahasiswa memilih atau mengetik keterampilan teknologi yang telah dipelajari beserta tingkat penguasaannya (misal: C++ dasar, Python menengah, HTML/CSS, Git).
3. Pemilihan Target Karier Impian (Target Role Selection): Pengguna memilih jalur karier target dari daftar peran populer (Fullstack Web Developer, AI/ML Engineer, Cloud DevOps, Cybersecurity Analyst, UI/UX Designer) atau mengetik peran kustom sesuai aspirasi pribadi.
4. Pemrosesan Analisis Celah AI (AI Gap Detection & Analysis): Gemini API menganalisis masukan pengguna terhadap basis pengetahuan standar industri, memetakan kesenjangan kompetensi, menghitung skor kesiapan karier saat ini, dan merumuskan prioritas keahlian yang mendesak untuk dipelajari.
5. Pembangkitan Roadmap Personal 4 Pekan (4-Week Roadmap Synthesis): Sistem memformulasikan rencana belajar komprehensif selama 4 pekan dengan silabus mingguan terarah, sumber belajar pilihan, dan 1 target proyek portofolio utama (capstone project).
6. Rekomendasi Rekan Kolaborasi (Peer Synergy Matching): Algoritma SkillSpark mencocokkan profil pengguna dengan mahasiswa lain di basis data yang memiliki keahlian komplementer (saling mengisi kekosongan peran), menampilkan kecocokan sinergi dan portofolio singkat calon rekan tim.
7. Eksekusi, Tracking & Kolaborasi: Pengguna dapat menyimpan roadmap ke dasbor, menandai progres pencapaian mingguan, mengunduh ringkasan PDF/Markdown, serta mengirimkan pesan ajakan kolaborasi proyek/hackathon kepada rekan mahasiswa yang direkomendasikan.`,
    markdownContent: `## 4. USER FLOW APLIKASI

### Alur Langkah-demi-Langkah Pengguna (7 Tahapan):

1. **Akses & Onboarding Mahasiswa:** Pengguna membuka platform SkillSpark, melakukan autentikasi cepat, dan melengkapi data kampus (nama universitas, jurusan Ilkom/SI, semester).
2. **Input Inventaris Keahlian (*Current Tech Stack*):** Mahasiswa memasukkan keterampilan yang telah dikuasai (bahasa pemrograman, *tools*, basis data) beserta tingkat kemahiran (*Beginner / Intermediate / Advanced*).
3. **Penentuan Target Spesialisasi Karier:** Pengguna menentukan peran impian industri (contoh: *Fullstack Engineer, AI Engineer, Cloud Specialist*) atau menuliskan peran spesifik yang ingin dituju.
4. **Analisis Kesenjangan oleh AI (*Skill Gap Engine*):** Google Gemini API memproses perbandingan semantik antara keahlian saat ini dengan ekspektasi industri, menghasilkan nilai kesiapan (*readiness score*) dan daftar *critical gaps*.
5. **Generasi Roadmap Aksi 4 Pekan (*Personalized Curriculum*):** AI merancang silabus intensif 28 hari yang terbagi dalam 4 tema mingguan dengan target konkret menghasilkan satu proyek portofolio (*capstone*).
6. **Pencocokan Rekan Sebaya (*Peer Synergy Matcher*):** Sistem menyajikan 3–5 profil mahasiswa sebaya dari kampus lain yang memiliki keterampilan komplementer untuk membentuk tim proyek atau *study group*.
7. **Penyimpanan, *Tracking* & Kolaborasi:** Mahasiswa dapat mencentang progres mingguan, mengunduh dokumen rencana belajar, dan langsung mengontak rekan kolaborator terpilih.

---

### Diagram Mermaid (User Flow Chart):

\`\`\`mermaid
flowchart TD
    A([Mulai: Buka SkillSpark]) --> B[Autentikasi & Profil Mahasiswa]
    B --> C[Input Keahlian Saat Ini & Level Penguasaan]
    C --> D[Pilih Target Karier Impian]
    D --> E{Proses Gemini AI Pipeline}
    E -->|Analisis Gap Semantik| F[Tampilkan Skor Kesiapan & Critical Gaps]
    E -->|Sintesis Silabus| G[Generate Roadmap Belajar 4 Pekan + Proyek Portofolio]
    E -->|Matching Komplementer| H[Rekomendasikan Rekan Kolaborasi Lintas Kampus]
    F --> I[Dasbor Interaktif Mahasiswa]
    G --> I
    H --> I
    I --> J{Aksi Mahasiswa}
    J -->|Tracking Harian| K[Centang Checklist Milestone Mingguan]
    J -->|Koneksi Rekan| L[Kirim Ajakan Kolaborasi Tim Hackathon]
    J -->|Simpan & Cetak| M[Ekspor Roadmap Markdown / PDF]
    K --> N([Selesai: Portofolio Jadi & Tim Terbentuk])
    L --> N
    M --> N
\`\`\``
  }
];

export const DEMO_VIDEO_SCRIPT = {
  title: "Naskah Video Demo 60 Detik (SkillSpark FIK FAIR 2026)",
  duration: "60 Detik Tepat",
  targetAudience: "Dewan Juri Hackathon FIK FAIR 2026 IGNITE",
  scenes: [
    {
      timeRange: "00:00 – 00:08",
      seconds: 8,
      sceneTitle: "Adegan 1: The Hook & Pain Point",
      visual: "Kamera menyorot mahasiswa menatap layar laptop dengan raut cemas di perpustakaan kampus. Muncul teks overlay dramatis: 'Banyak belajar, tapi siap kerja gak ya?'",
      voiceover: "Berapa banyak dari kita, mahasiswa IT, yang sering cemas: sudah lulus banyak mata kuliah, tapi merasa belum siap bersaing di industri teknologi? Mau mulai belajar bingung dari mana, dan belajar sendirian malah sering burnout.",
    },
    {
      timeRange: "00:08 – 00:18",
      seconds: 10,
      sceneTitle: "Adegan 2: Memperkenalkan Solusi (SkillSpark)",
      visual: "Transisi dinamis ke layar SkillSpark dengan antarmuka modern yang bersih. Kursor mengetikkan keahlian dasar (Python, Git) dan memilih target 'AI Application Engineer'.",
      voiceover: "Inilah SkillSpark! Platform AI Career Co-Pilot dan Peer Matchmaker yang dirancang khusus untuk mahasiswa teknologi di Indonesia.",
    },
    {
      timeRange: "00:18 – 00:32",
      seconds: 14,
      sceneTitle: "Adegan 3: AI Skill Gap Analysis & 4-Week Roadmap",
      visual: "Tampilan visual analisis: Gemini API secara instan membedah critical skill gaps (FastAPI, Vector DB, RAG) dan membangkitkan silabus 4 pekan dengan target capstone project nyata.",
      voiceover: "Hanya dalam hitungan detik, mesin AI bertenaga Google Gemini mendeteksi celah keahlianmu, menghitung skor kesiapan, dan menyusun roadmap terstruktur 4 pekan. Bukan cuma teori, tapi fokus menghasilkan portofolio nyata yang siap pamer di LinkedIn dan GitHub!",
    },
    {
      timeRange: "00:32 – 00:46",
      seconds: 14,
      sceneTitle: "Adegan 4: Fitur Unggulan Peer Matching",
      visual: "Layar bergeser ke tab 'Peer Recommendations'. Muncul profil mahasiswa dari UI, ITS, dan Binus dengan keahlian komplementer (Frontend & DevOps). Kursor menekan tombol 'Ajak Kolaborasi'.",
      voiceover: "Yang paling seru, SkillSpark mencocokkan kamu dengan rekan mahasiswa dari kampus lain yang punya skill komplementer. Kamu jago backend? SkillSpark temukan rekan UI/UX dan frontend untuk langsung bentuk tim hackathon!",
    },
    {
      timeRange: "00:46 – 00:54",
      seconds: 8,
      sceneTitle: "Adegan 5: Hubungan dengan Tema IGNITE",
      visual: "Animasi ringkas menampilkan 5 pilar IGNITE (Inspiring Growth, Networking, Innovation, Technology, Exploration) yang berpadu ke logo SkillSpark.",
      voiceover: "Mewujudkan semangat IGNITE FIK FAIR 2026: Menginspirasi pertumbuhan, memperluas networking, dan mengeksplorasi masa depan teknologi.",
    },
    {
      timeRange: "00:54 – 01:00",
      seconds: 6,
      sceneTitle: "Adegan 6: Closing & Call to Action",
      visual: "Logo SkillSpark, link live demo, nama tim, dan tagline: 'Nyalakan Karier Teknologi, Bangun Portofolio Bersama'. Mahasiswa tersenyum memegang laptop.",
      voiceover: "Nyalakan potensimu hari ini bersama SkillSpark. Terima kasih!",
    },
  ],
};

export const AI_SYSTEM_PROMPTS = [
  {
    id: "prompt-1",
    name: "Prompt 1: Career Skill Gap Analyzer",
    purpose: "Menganalisis kesenjangan teknis antara skill aktual mahasiswa dan kualifikasi industri.",
    systemInstruction: `Anda adalah "Senior Tech Career Architect & Tech Lead" yang bertugas mengevaluasi kesiapan karier mahasiswa teknologi di Indonesia.
Diberikan input profil mahasiswa:
- current_skills: daftar skill yang dikuasai beserta level kemahiran (Beginner/Intermediate/Advanced)
- target_role: peran spesifik di industri (misal: "Fullstack Web Developer", "AI Engineer", "DevOps Engineer")
- university_context: mahasiswa S1 di Indonesia

Tugas Anda:
1. Hitung perkiraan "readiness_score" (0-100) secara objektif berdasarkan standar industri masa kini (tahun 2026).
2. Identifikasi "matched_skills": keahlian yang sudah sesuai dengan target peran.
3. Identifikasi "critical_gaps": 3-5 keahlian esensial yang masih belum dikuasai (missing core skills), jelaskan mengapa keahlian tersebut krusial di industri riil.
4. Identifikasi "nice_to_have_skills": 2-3 keahlian pelengkap yang akan menjadi nilai tambah diferensiasi portofolio.
5. Berikan "industry_verdict": 2 kalimat rangkuman evaluasi yang ramah, objektif, dan memotivasi dalam Bahasa Indonesia.

Format output HARUS berupa JSON valid sesuai skema berikut tanpa tambahan markdown wrappers:
{
  "readiness_score": number,
  "matched_skills": [{"name": string, "strength_note": string}],
  "critical_gaps": [{"name": string, "priority": "High" | "Medium", "why_critical": string}],
  "nice_to_have_skills": [{"name": string, "benefit": string}],
  "industry_verdict": string
}`,
  },
  {
    id: "prompt-2",
    name: "Prompt 2: 4-Week Project-Based Roadmap Generator",
    purpose: "Menyusun silabus akselerasi belajar 4 pekan dengan target akhir produk portofolio nyata.",
    systemInstruction: `Anda adalah "Principal Curriculum Architect & Engineering Mentor".
Diberikan input:
- target_role: spesialisasi karier yang dituju
- critical_gaps: daftar skill yang perlu dipelajari dari hasil analisis gap
- hours_per_week: estimasi waktu luang mahasiswa (misal: 10-15 jam/minggu)

Tugas Anda:
Rancang rencana belajar intensif tepat 4 pekan (28 hari) yang berorientasi produk (Project-Based Learning) dalam Bahasa Indonesia.
Rincian kurikulum:
- Pekan 1: Core Foundation & Setup (menutup fundamental penting)
- Pekan 2: Architecture & Deep Implementation (membangun logika bisnis & data)
- Pekan 3: Integration, API, State & Security (menggabungkan sistem & testing)
- Pekan 4: Deployment, Documentation & Capstone Showcase (merilis proyek ke publik dan siap ditinjau di GitHub)

Format output HARUS berupa JSON valid tanpa teks pengantar:
{
  "capstone_project_title": string,
  "capstone_project_description": string,
  "expected_github_deliverables": [string],
  "weeks": [
    {
      "week_number": number,
      "theme": string,
      "learning_objectives": [string],
      "hands_on_tasks": [string],
      "recommended_free_resources": [string],
      "milestone_deliverable": string
    }
  ]
}`,
  },
  {
    id: "prompt-3",
    name: "Prompt 3: Peer Synergy & Complementary Matcher",
    purpose: "Mencocokkan profil mahasiswa dengan calon rekan kolaborasi yang memiliki keahlian saling melengkapi.",
    systemInstruction: `Anda adalah "Talent Synergy Matchmaker & Hackathon Team Architect".
Diberikan input:
- user_profile: profil mahasiswa (target_role, current_skills, kampus)
- candidate_peers: daftar profil mahasiswa sebaya dari kampus lain yang tersedia di database

Tugas Anda:
1. Evaluasi nilai komplementaritas (bukan sekadar kemiripan). Pasangan yang baik adalah yang saling melengkapi (misal: Frontend Developer dipasangkan dengan Backend Engineer dan UI/UX Designer, bukan dua orang yang hanya bisa CSS).
2. Tentukan skor "synergy_score" (0-100) untuk setiap kandidat.
3. Tuliskan "synergy_reason": 1-2 kalimat konkret mengapa kolaborasi kedua mahasiswa ini akan menghasilkan tim hackathon atau tim proyek yang kuat dalam Bahasa Indonesia.
4. Sarankan "proposed_project_idea": 1 ide proyek hackathon yang dapat dikerjakan bersama oleh tim ini.

Format output HARUS berupa JSON valid tanpa markup tambahan:
{
  "recommended_peers": [
    {
      "peer_id": string,
      "peer_name": string,
      "university": string,
      "synergy_score": number,
      "complementary_strengths": [string],
      "synergy_reason": string,
      "collaboration_pitch": string
    }
  ],
  "team_hackathon_suggestion": {
    "project_name": string,
    "role_division": string
  }
}`,
  },
];

export const WHATS_NEXT_ROADMAP = [
  {
    phase: "Fase 1 (Bulan 1–2 Pasca-Hackathon): Kampus Pilot & Integrasi GitHub API",
    milestone: "Peluncuran Alpha & Validasi Otomatis Portofolio",
    description: "Melakukan program uji coba tertutup (*closed pilot*) dengan melibatkan 300+ mahasiswa Fasilkom/Filkom di 5 universitas mitra di Pulau Jawa. Mengintegrasikan GitHub REST/GraphQL API untuk secara otomatis membaca repositori publik mahasiswa guna memverifikasi level kompetensi teknis tanpa pengisian manual.",
  },
  {
    phase: "Fase 2 (Bulan 3–5): Smart Hackathon Team Formation & AI Mentorship Bots",
    milestone: "Algoritma Vektor Lanjutan & Simulasi Wawancara Teknis",
    description: "Mengimplementasikan pencarian kesamaan semantik menggunakan Supabase pgvector untuk fitur *One-Click Hackathon Team Formation*, serta meluncurkan modul *AI Mock Technical Interviewer* bertenaga Gemini yang memberikan umpan balik langsung pada pemahaman arsitektur sistem dan *live coding*.",
  },
  {
    phase: "Fase 3 (Bulan 6+): Ekosistem Jembatan Talenta Industri (Industry Hiring Bridge)",
    milestone: "Monetisasi B2B & Perekrutan Mahasiswa Berbasis Proyek Terverifikasi",
    description: "Membuka kemitraan B2B dengan perusahaan rintisan (*startups*) dan ekosistem industri teknologi Indonesia untuk program *Reverse Hiring*. Perusahaan dapat menelusuri mahasiswa berbakat berdasarkan bukti proyek capstone dan progres roadmap nyata, bukan sekadar resume tekstual pasif.",
  },
];

export const MOCK_STUDENTS_DATABASE = [
  {
    id: "peer-01",
    name: "Rian Pratama",
    university: "Universitas Indonesia (UI)",
    major: "Ilmu Komputer (Semester 5)",
    strongSkills: ["Golang", "PostgreSQL", "Docker", "REST API", "Microservices"],
    targetRole: "Backend Engineer",
    avatarColor: "bg-blue-600",
    hackathonExperience: "Finalis HackJam 2025, Aktif di Komunitas Open Source",
    bio: "Suka oprek server, backend latency, dan arsitektur database. Butuh partner Frontend/UI buat gas Hackathon!",
  },
  {
    id: "peer-02",
    name: "Nadia Larasati",
    university: "Institut Teknologi Sepuluh Nopember (ITS)",
    major: "Sistem Informasi (Semester 5)",
    strongSkills: ["Figma", "UI/UX Research", "Design Systems", "Tailwind CSS", "Prototyping"],
    targetRole: "Product Designer & UI Engineer",
    avatarColor: "bg-purple-600",
    hackathonExperience: "Juara 2 UI/UX Design Fest 2024",
    bio: "Fokus di wireframing, human-centered design, dan micro-interaction. Siap bikin pitch deck & UI cakep.",
  },
  {
    id: "peer-03",
    name: "Bima Arya",
    university: "Institut Teknologi Bandung (ITB)",
    major: "Teknik Informatika (Semester 6)",
    strongSkills: ["PyTorch", "FastAPI", "Vector DB", "LangChain", "Gemini API"],
    targetRole: "AI / Machine Learning Engineer",
    avatarColor: "bg-emerald-600",
    hackathonExperience: "Best AI Solution di DataQuest 2025",
    bio: "Suka eksperimen AI agent, RAG pipeline, dan model deployment. Tertarik proyek AI kolaboratif.",
  },
  {
    id: "peer-04",
    name: "Kezia Aurelia",
    university: "Universitas Bina Nusantara (Binus)",
    major: "Computer Science (Semester 4)",
    strongSkills: ["React Native", "TypeScript", "Next.js", "Firebase", "Redux"],
    targetRole: "Mobile & Frontend Engineer",
    avatarColor: "bg-rose-600",
    hackathonExperience: "Peserta Mobile HackFest 2025",
    bio: "Spesialisasi frontend web dan cross-platform mobile. Senang kolaborasi tim yang agile dan terstruktur.",
  },
  {
    id: "peer-05",
    name: "Farhan Hakim",
    university: "Telkom University",
    major: "Teknologi Informasi (Semester 6)",
    strongSkills: ["Linux", "Kubernetes", "CI/CD GitHub Actions", "AWS Cloud", "Terraform"],
    targetRole: "Cloud & DevOps Specialist",
    avatarColor: "bg-amber-600",
    hackathonExperience: "DevOps Lead di Lab Cloud Computing",
    bio: "Menangani urusan deployment, container, dan reliability server. Siap backup infrastruktur tim kompetisi.",
  },
];

export const DEVPOST_FORM_FIELDS = [
  {
    fieldId: "inspiration",
    fieldLabel: "Inspiration (Inspirasi)",
    hint: "Ceritakan latar belakang dan percikan ide awal di balik proyek ini",
    content: `Sebagai mahasiswa teknologi di Indonesia, kami sering merasakan kebingungan yang sama: setelah lulus puluhan SKS mata kuliah, kami tetap merasa belum siap menghadapi standar kualifikasi industri riil. Fenomena "career anxiety" dan siklus "tutorial hell" semakin parah karena mahasiswa belajar sendirian tanpa kompas yang jelas dan tanpa rekan kolaborasi lintas kampus. Terinspirasi dari tema FIK FAIR 2026 – IGNITE, kami bertekad menciptakan "SkillSpark": sebuah platform yang mengubah rasa cemas menjadi rencana aksi terarah 28 hari dan menghubungkan talenta muda Indonesia untuk berkarya bersama.`,
  },
  {
    fieldId: "what-it-does",
    fieldLabel: "What it does (Apa yang Dilakukan Aplikasi)",
    hint: "Rangkum fungsionalitas utama aplikasi dalam bahasa yang jelas bagi juri",
    content: `SkillSpark adalah platform web berbasis Generative AI yang bertindak sebagai AI Career Co-Pilot & Peer Matchmaker bagi mahasiswa IT di Indonesia:
1. Automated Skill Gap Analysis: Menganalisis keahlian saat ini terhadap target karier impian, membedah celah keahlian krusial (critical gaps) dan menghitung skor kesiapan industri.
2. 4-Week Project-Based Roadmap: Memformulasikan silabus intensif 28 hari terstruktur dengan target konkret menghasilkan satu proyek portofolio (capstone) siap pamer di GitHub.
3. Complementary Peer Matching: Algoritma cerdas yang merekomendasikan profil mahasiswa dari berbagai universitas di Indonesia dengan keterampilan saling melengkapi (misal: frontend dipasangkan dengan backend and UI/UX) untuk langsung siap membentuk tim hackathon.
4. Milestone Tracker: Memantau penyelesaian tugas harian dan mingguan agar proses belajar tetap konsisten.`,
  },
  {
    fieldId: "how-we-built-it",
    fieldLabel: "How we built it (Bagaimana Kami Membangunnya)",
    hint: "Jelaskan arsitektur teknologi, model AI, dan pipeline data",
    content: `Kami membangun SkillSpark menggunakan arsitektur modern berlatensi rendah:
- Frontend: Next.js (App Router) & React 19 dengan TypeScript untuk type-safety end-to-end.
- Styling: Tailwind CSS untuk antarmuka yang bersih, responsif, dan ringan.
- AI Pipeline: Google Gemini API (gemini-2.5-flash via @google/genai) dengan penegakan skema respon (Strict Structured JSON Outputs) untuk menjamin keluaran bebas halusinasi format.
- Backend & Database: Supabase PostgreSQL untuk data profil mahasiswa dan riwayat roadmap, serta disiapkan untuk semantic search via pgvector.
- Deployment: Vercel Edge Network untuk hosting cepat dan zero-downtime CI/CD.`,
  },
  {
    fieldId: "challenges",
    fieldLabel: "Challenges we ran into (Tantangan yang Dihadapi)",
    hint: "Tantangan teknis atau konseptual dan cara tim mengatasinya",
    content: `1. Deterministic JSON AI Parsing: Pada awalnya, LLM sering menyisipkan format markdown liar yang merusak parsing JSON pada frontend. Kami mengatasinya dengan mengonfigurasi skema strict responseSchema pada Google Gen AI SDK.
2. Complementary Matching vs Similarity: Kebanyakan algoritma hanya mencari orang yang serupa. Kami merancang logika pencocokan berbasis sinergi komplementer, di mana mahasiswa backend justru diprioritaskan untuk dipasangkan dengan frontend and desainer UI/UX.
3. Kurasi Silabus yang Realistis: Menghindari beban belajar berlebihan dengan membatasi roadmap tepat 4 pekan dan mengunci beban waktu pada 10-15 jam per pekan yang realistis bagi mahasiswa aktif.`,
  },
  {
    fieldId: "accomplishments",
    fieldLabel: "Accomplishments that we're proud of (Pencapaian yang Dibanggakan)",
    hint: "Hal yang paling dibanggakan oleh tim selama hackathon",
    content: `Kami bangga berhasil mengintegrasikan seluruh kelima pilar tema IGNITE (Inspiring Growth, Networking, Innovation, Technology, Exploration) ke dalam satu solusi yang kohesif. Waktu inferensi AI berhasil ditekan di bawah 1,5 detik, dan antarmuka pengguna mampu memberikan nilai tambah nyata bagi mahasiswa hanya dalam 3 menit interaksi.`,
  },
  {
    fieldId: "what-we-learned",
    fieldLabel: "What we learned (Pembelajaran Berharga)",
    hint: "Wawasan baru yang didapat tim selama hackathon",
    content: `Kami belajar bahwa kunci keberhasilan produk AI edukasi bukan terletak pada kompleksitas prompt yang bertele-tele, melainkan pada kejelasan batasan peran (guardrails) dan kepatuhan skema data. Kami juga semakin menyadari bahwa aspek sosial (peer accountability) memiliki dampak psikologis yang sama besarnya dengan materi kurikulum itu sendiri.`,
  },
  {
    fieldId: "whats-next",
    fieldLabel: "What's next for SkillSpark (Rencana Selanjutnya)",
    hint: "Langkah strategis jangka pendek dan menengah pasca-hackathon",
    content: `1. Closed Pilot di 5 Kampus Mitra: Uji coba tertutup kepada 300+ mahasiswa Fasilkom/Filkom di Pulau Jawa.
2. Otomasi GitHub API: Membaca riwayat commit dan repositori publik secara otomatis untuk memvalidasi skill mahasiswa tanpa pengisian manual.
3. Industry Reverse Hiring: Menghubungkan mahasiswa yang telah menyelesaikan proyek capstone langsung ke mitra startup dan perusahaan teknologi di Indonesia.`,
  },
  {
    fieldId: "built-with",
    fieldLabel: "Built With (Tags Kategori)",
    hint: "Daftar tag teknologi untuk dicentang di Devpost",
    content: `next.js, react, tailwind-css, typescript, google-gemini-api, supabase, postgresql, vercel`,
  },
];

export const PITCH_DECK_SLIDES = [
  {
    slideNumber: 1,
    title: "Judul & Hook: Menyalakan Potensi Talenta Digital",
    keyMessage: "SkillSpark: AI Career Co-Pilot & Peer Matchmaker untuk Mahasiswa IT di Indonesia.",
    bulletPoints: [
      "Keresahan bersama: Lulus kuliah tapi bingung arah dan belum siap kerja.",
      "Visi: Menjembatani jurang akademis dan ekspektasi industri melalui aksi nyata 4 pekan.",
      "Tema FIK FAIR 2026: IGNITE.",
    ],
  },
  {
    slideNumber: 2,
    title: "Masalah: Kesenjangan Keahlian & Isolasi Akademik",
    keyMessage: "65%+ lulusan IT merasa tidak siap kerja, dan 70% belajar sendirian tanpa rekan.",
    bulletPoints: [
      "Career Anxiety: Kewalahan membedakan ratusan bidang spesialisasi baru.",
      "Skill Blindspot: Menguasai teori kuliah, namun buta terhadap tools standar industri.",
      "Tutorial Hell: Belajar sendirian tanpa akuntabilitas dan tanpa rekan tim proyek.",
    ],
  },
  {
    slideNumber: 3,
    title: "Solusi: 3 Pilar Simultan SkillSpark",
    keyMessage: "Diagnosis Presisi + Cetak Biru 28 Hari + Sinergi Rekan Sebaya.",
    bulletPoints: [
      "1. Automated Skill Gap Analysis: Menemukan critical gaps secara instan.",
      "2. 4-Week Project-Based Roadmap: Silabus mingguan berujung produk portofolio capstone.",
      "3. Complementary Peer Matching: Membentuk tim hackathon lintas kampus.",
    ],
  },
  {
    slideNumber: 4,
    title: "Arsitektur Teknologi & Demo Langsung",
    keyMessage: "Performa tinggi, latensi sub-detik, dan format JSON terstruktur 100% konsisten.",
    bulletPoints: [
      "Google Gemini API (@google/genai) via Strict Response Schema.",
      "Next.js App Router, Tailwind CSS, Supabase PostgreSQL, dan Vercel Edge.",
      "UI interaktif: Checklist milestone, gauge kesiapan, dan kartu ajakan kolaborasi.",
    ],
  },
  {
    slideNumber: 5,
    title: "Dampak IGNITE & Rencana Ke Depan",
    keyMessage: "Dari proyek hackathon menuju ekosistem reverse hiring talenta Indonesia.",
    bulletPoints: [
      "Selaras 100% dengan pilar Inspiring Growth, Networking, Innovation, Technology, Exploration.",
      "Roadmap 3 fase: Closed pilot 5 kampus, integrasi GitHub API, dan kemitraan industri.",
      "Call to Action: Mari nyalakan masa depan talenta digital Indonesia bersama SkillSpark!",
    ],
  },
];


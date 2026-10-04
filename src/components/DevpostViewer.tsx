import { useState } from 'react';
import { DEVPOST_SECTIONS, TAGLINE_OPTIONS, WHATS_NEXT_ROADMAP, DEMO_VIDEO_SCRIPT, AI_SYSTEM_PROMPTS, DEVPOST_FORM_FIELDS, PITCH_DECK_SLIDES } from '../data/devpostData';
import { Copy, Check, Download, ExternalLink, Sparkles, BookOpen, Layers, Target, Users, Cpu, Compass, Video, Code, ArrowRight, Presentation, FileText } from 'lucide-react';

export default function DevpostViewer({ onNavigateToDemo }: { onNavigateToDemo: () => void }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadFullMarkdown = () => {
    const fullContent = `# Devpost Submission: SkillSpark
**Kompetisi:** Hackathon FIK FAIR 2026 – IGNITE (Inspiring Growth, Networking, Innovation, Technology, and Exploration)
**Tagline:** ${TAGLINE_OPTIONS[0].tagline}

---

${DEVPOST_SECTIONS.map(s => s.markdownContent).join('\n\n---\n\n')}

---

## EXTRA DELIVERABLES

### 1. Naskah Video Demo 60 Detik
${DEMO_VIDEO_SCRIPT.scenes.map(sc => `**${sc.timeRange} | ${sc.sceneTitle}**
- Visual: ${sc.visual}
- Voiceover: "${sc.voiceover}"`).join('\n\n')}

---

### 2. 3 Contoh AI System Prompts
${AI_SYSTEM_PROMPTS.map(p => `#### ${p.name}
*Tujuan: ${p.purpose}*
\`\`\`
${p.systemInstruction}
\`\`\``).join('\n\n')}

---

### 3. Rencana Ke Depan (What's Next Roadmap)
${WHATS_NEXT_ROADMAP.map(r => `- **${r.phase}**: ${r.description}`).join('\n')}
`;

    const blob = new Blob([fullContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'SkillSpark_Devpost_Submission_FIK_FAIR_2026.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10">
      {/* Top Banner & Quick Actions */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
              <span>FIK FAIR 2026</span>
              <span aria-hidden="true">·</span>
              <span>Tema: IGNITE</span>
              <span aria-hidden="true">·</span>
              <span>Devpost Official Submission</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              SkillSpark: AI Career Co-Pilot & Peer Matchmaker
            </h1>
            <p className="text-sm text-slate-600 mt-1.5 max-w-3xl leading-relaxed">
              Dokumen pengajuan resmi Devpost berbahasa Indonesia yang dirancang persuasif, profesional, dan memenuhi seluruh kriteria penilaian juri hackathon dalam waktu baca di bawah 3 menit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleDownloadFullMarkdown}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh Berkas .md Lengkap</span>
            </button>
            <button
              onClick={onNavigateToDemo}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-sky-700 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Buka Demo Interaktif</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Tagline Showcase Box */}
        <div className="mt-5 pt-1">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Pilihan Tagline Proyek (Maksimal 10 Kata):
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {TAGLINE_OPTIONS.map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-lg border text-left transition-all ${
                  idx === 0 
                    ? 'bg-sky-50/50 border-sky-200 ring-1 ring-sky-300' 
                    : 'bg-slate-50/50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>{item.style}</span>
                  <span className="font-mono text-slate-400">{item.wordCount} kata</span>
                </div>
                <div className="text-sm font-semibold text-slate-900 leading-snug">
                  "{item.tagline}"
                </div>
                <button
                  onClick={() => copyToClipboard(item.tagline, `tagline-${idx}`)}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-sky-700 hover:text-sky-900 font-medium"
                >
                  {copiedId === `tagline-${idx}` ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-600">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Salin Tagline</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Filter Buttons */}
      <div className="flex items-center gap-1 p-1 bg-slate-100/80 border border-slate-200 rounded-lg overflow-x-auto text-xs">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Semua 4 Bagian Utama
        </button>
        <button
          onClick={() => setActiveTab("devpost-fields")}
          className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            activeTab === "devpost-fields" ? "bg-white text-sky-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-sky-600" />
          <span>Formulir Devpost (Inspiration, Challenges, dll)</span>
        </button>
        <button
          onClick={() => setActiveTab("pitch-deck")}
          className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            activeTab === "pitch-deck" ? "bg-white text-sky-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Presentation className="w-3.5 h-3.5 text-amber-600" />
          <span>Outline 5 Slide Pitch Deck</span>
        </button>
        <button
          onClick={() => setActiveTab("deliverables")}
          className={`px-3 py-1.5 font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === "deliverables" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Extra Deliverables (Script & Prompts)
        </button>
      </div>

      {/* 4 Main Sections Content */}
      <div className="space-y-8">
        {DEVPOST_SECTIONS.filter(s => activeTab === "all" || activeTab === s.id).map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs relative"
          >
            {/* Header of Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 text-sky-800 text-sm font-bold font-mono">
                  {section.number}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copyToClipboard(section.markdownContent, `md-${section.id}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Salin dalam format Markdown untuk Devpost"
                >
                  {copiedId === `md-${section.id}` ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin (MD)!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Markdown</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => copyToClipboard(section.plainText, `txt-${section.id}`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                  title="Salin teks polos"
                >
                  {copiedId === `txt-${section.id}` ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Teks Polos</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Special Section Highlights */}
            {section.id === "latar-belakang" && (
              <div className="my-5 p-4 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0" />
                <div className="leading-relaxed">
                  <span className="font-semibold">Catatan Mentor untuk Dewan Juri:</span> Bagian ini telah dilengkapi 3 data kuantitatif komparatif (Sakernas BPS, Tracer Study Kemendikbudristek, dan LinkedIn Opportunity Index). Tagging <span className="font-mono bg-amber-100 px-1 py-0.5 rounded text-amber-800">[Perlu Verifikasi Sumber: ...]</span> sengaja dicantumkan agar Anda dapat mengonfirmasi nomor dokumen resmi institusi saat presentasi final.
                </div>
              </div>
            )}

            {section.id === "solusi" && (
              <div className="my-5 p-4 rounded-lg bg-sky-50/70 border border-sky-200/80 text-xs text-sky-950">
                <div className="font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Kesesuaian Tema IGNITE FIK FAIR 2026:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-2 pt-2 border-t border-sky-100">
                  <div className="bg-white p-2 rounded border border-sky-100">
                    <span className="font-bold text-sky-800 block text-xs">I - Growth</span>
                    <span className="text-slate-600 text-[11px]">Roadmap akselerasi 4 pekan terukur</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-sky-100">
                    <span className="font-bold text-sky-800 block text-xs">G - Networking</span>
                    <span className="text-slate-600 text-[11px]">Peer matching lintas kampus</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-sky-100">
                    <span className="font-bold text-sky-800 block text-xs">N - Innovation</span>
                    <span className="text-slate-600 text-[11px]">Deteksi gap semantik berbasis LLM</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-sky-100">
                    <span className="font-bold text-sky-800 block text-xs">T - Technology</span>
                    <span className="text-slate-600 text-[11px]">Gemini API, Next.js & Supabase</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-sky-100">
                    <span className="font-bold text-sky-800 block text-xs">E - Exploration</span>
                    <span className="text-slate-600 text-[11px]">Eksplorasi jalur karier frontier</span>
                  </div>
                </div>
              </div>
            )}

            {/* Formatted Text Presentation */}
            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed pt-2 space-y-4">
              {section.id === "latar-belakang" && (
                <>
                  <p>
                    Perkembangan industri teknologi informasi yang sangat dinamis menuntut lulusan perguruan tinggi memiliki keahlian aplikatif yang siap pakai. Namun, realitas di lapangan menunjukkan mayoritas mahasiswa Ilmu Komputer dan Sistem Informasi di Indonesia menghadapi tiga hambatan struktural:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      <strong>Disorientasi Jalur Karier:</strong> Mahasiswa kerap mengalami kecemasan karier (<em>career anxiety</em>) karena kewalahan membedakan ratusan spesialisasi teknologi modern (seperti <em>AI/ML Engineer, Cloud Platform Specialist, Fullstack Developer,</em> hingga <em>Cybersecurity Analyst</em>). Mereka tidak memiliki kompas objektif untuk menentukan titik awal dan target capaian.
                    </li>
                    <li>
                      <strong>Ketidaktahuan terhadap <em>Skill Gap</em> Riil:</strong> Kurikulum formal di bangku kuliah kerap tertinggal dari dinamika <em>industry-grade tooling</em>. Akibatnya, mahasiswa merasa telah menguasai materi akademis, namun kenyataannya belum menguasai <em>practical workflows</em> (seperti <em>CI/CD, containerization, state management,</em> atau <em>API architecture</em>) yang diwajibkan oleh perusahaan.
                    </li>
                    <li>
                      <strong>Isolasi Akademik & Minimnya Jejaring (<em>Networking Deficit</em>):</strong> Belajar pemrograman secara individual rentan terjebak dalam siklus <em>tutorial hell</em> tanpa pernah merilis produk teruji. Di sisi lain, mahasiswa kesulitan mencari rekan belajar atau mitra tim kompetisi/hackathon lintas kampus yang memiliki <em>skillset</em> saling melengkapi.
                    </li>
                  </ul>

                  <h4 className="font-semibold text-slate-900 pt-2">Fakta & Statistik Pendukung:</h4>
                  <div className="space-y-3">
                    <div className="border-l-2 border-sky-500 pl-3 py-1">
                      <div className="font-medium text-slate-900">1. Kesenjangan Kesiapan Kerja Praktis (60%–68%)</div>
                      <p className="text-slate-600 text-xs mt-0.5">
                        Riset kesiapan talenta digital dan data Tracer Study <span className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-mono text-[11px]">[Perlu Verifikasi Sumber: Tracer Study Kemendikbudristek / World Bank Digital Skills Report 2024]</span> mengindikasikan sekitar 60%–68% lulusan bidang teknologi merasa kompetensi teknis praktis yang diperoleh selama kuliah belum memadai untuk langsung menembus kualifikasi posisi entry-level tanpa kursus tambahan.
                      </p>
                    </div>
                    <div className="border-l-2 border-sky-500 pl-3 py-1">
                      <div className="font-medium text-slate-900">2. Fenomena Pengangguran Terdidik & Skills Mismatch (5,2%–7,4%)</div>
                      <p className="text-slate-600 text-xs mt-0.5">
                        Menurut data Sakernas BPS <span className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-mono text-[11px]">[Perlu Verifikasi Sumber: BPS RI – Laporan Keadaan Ketenagakerjaan Indonesia 2024/2025]</span>, Tingkat Pengangguran Terbuka (TPT) lulusan perguruan tinggi berada pada kisaran 5,2% hingga 7,4%. Mayoritas analis ketenagakerjaan menyimpulkan faktor determinannya adalah kesenjangan keahlian, di mana industri kekurangan talenta berkualifikasi sementara lulusan berlimpah namun belum siap pakai.
                      </p>
                    </div>
                    <div className="border-l-2 border-sky-500 pl-3 py-1">
                      <div className="font-medium text-slate-900">3. Efektivitas Rekan Belajar Sebaya (3,5x Akselerasi)</div>
                      <p className="text-slate-600 text-xs mt-0.5">
                        Berdasarkan laporan LinkedIn Opportunity Index <span className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-mono text-[11px]">[Perlu Verifikasi Sumber: LinkedIn Emerging Jobs Report & Tech Learner Study]</span>, proses pembelajaran teknis terbukti 3,5x lebih konsisten tuntas jika individu tergabung dalam kelompok belajar berbasis proyek. Sayangnya, lebih dari 70% mahasiswa IT di daerah mengaku tidak memiliki akses jejaring kolaboratif di luar lingkungan kelasnya sendiri.
                      </p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-slate-900 pt-2">Mengapa Masalah Ini Sangat Mendesak?</h4>
                  <p>
                    Di era revolusi kecerdasan artifisial, <em>half-life of skills</em> (masa paruh keahlian teknologi) menyusut drastis menjadi di bawah 2,5 tahun. Mahasiswa yang tidak segera memetakan <em>skill gap</em> mereka berisiko tertinggal sebelum sempat diwisuda. Masalah ini mendesak diselesaikan agar potensi mahasiswa Indonesia tidak terbuang sia-sia, melainkan terakselerasi menjadi portofolio nyata bernilai industri tinggi.
                  </p>
                </>
              )}

              {section.id === "solusi" && (
                <>
                  <p>
                    <strong>SkillSpark</strong> hadir sebagai platform web cerdas berbasis <em>Generative AI</em> yang bertindak sebagai <strong>AI Career Co-Pilot & Peer Matchmaker</strong> bagi mahasiswa teknologi di Indonesia. SkillSpark mentransformasi kebingungan karier menjadi cetak biru aksi nyata yang terukur dalam waktu kurang dari 3 menit.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                      <div className="font-semibold text-slate-900 text-sm mb-1">1. Automated Skill Gap Analysis</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Mahasiswa menginput kompetensi terkini dan target peran karier yang diinginkan. Sistem AI mengevaluasi kesenjangan secara mendalam, mengelompokkannya menjadi <em>Critical Gaps, Foundational Missing Tools,</em> dan <em>Good-to-Know Frameworks</em>.
                      </p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                      <div className="font-semibold text-slate-900 text-sm mb-1">2. 4-Week Project-Based Roadmap</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Menghasilkan silabus belajar intensif 28 hari yang dibagi ke dalam 4 tema mingguan terarah (Fundamental, Core Implementation, Integration & Auth, Production Capstone Showcase).
                      </p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                      <div className="font-semibold text-slate-900 text-sm mb-1">3. Complementary Peer Matching</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Algoritma pencocokan cerdas yang menemukan rekan mahasiswa dari berbagai kampus di Indonesia dengan keahlian saling melengkapi (<em>complementary skills</em>) untuk langsung siap membentuk tim hackathon atau kelompok belajar sinergis.
                      </p>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                      <div className="font-semibold text-slate-900 text-sm mb-1">4. Interactive Milestone Tracker</div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Dasbor pemantau kemajuan mingguan yang membantu mahasiswa menjaga komitmen dan akuntabilitas belajar dengan validasi capaian berbasis artefak kode di GitHub.
                      </p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-slate-900">Nilai Unik (Unique Value Proposition):</h4>
                  <p>
                    SkillSpark bukan sekadar agregator artikel atau kuis karier statis. Nilai keunggulannya terletak pada <strong>tiga pilar simultan: Diagnosis Presisi (AI Gap Analysis), Rencana Kerja Konkret (4-Week Roadmap), dan Ekosistem Manusia (Peer Synergy)</strong>. Mahasiswa tidak hanya tahu kekurangannya, tetapi langsung memiliki jadwal aksi dan teman seperjuangan untuk menyelesaikannya.
                  </p>
                </>
              )}

              {section.id === "teknologi" && (
                <>
                  <p>
                    Arsitektur SkillSpark dirancang dengan prinsip latensi rendah, skalabilitas tinggi, dan kestabilan inferensi AI:
                  </p>
                  
                  <div className="overflow-x-auto border border-slate-200 rounded-lg my-3">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-4">Lapisan Teknologi</th>
                          <th className="py-2.5 px-4">Pilihan Stack</th>
                          <th className="py-2.5 px-4">Alasan Pemilihan (Rasionalisasi)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-600">
                        <tr>
                          <td className="py-2 px-4 font-medium text-slate-900">Frontend Web</td>
                          <td className="py-2 px-4 font-mono text-sky-800">Next.js (App Router) & React 19</td>
                          <td className="py-2 px-4">Performa Server Components tinggi, SSR cepat, rute dinamis bersih, dan ekosistem TypeScript end-to-end.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium text-slate-900">Styling & UI</td>
                          <td className="py-2 px-4 font-mono text-sky-800">Tailwind CSS & Lucide Icons</td>
                          <td className="py-2 px-4">Desain antarmuka modern, cepat diiterasi, responsif di seluruh layar, dan ukuran bundle produksi sangat ramping.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium text-slate-900">AI Model & API</td>
                          <td className="py-2 px-4 font-mono text-sky-800">Google Gemini API (@google/genai)</td>
                          <td className="py-2 px-4">Inferensi sub-detik (&lt; 1,5s), pemahaman semantik teknis tinggi, dan enforce format JSON murni via responseSchema.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium text-slate-900">Database & Backend</td>
                          <td className="py-2 px-4 font-mono text-sky-800">Supabase (PostgreSQL + Auth)</td>
                          <td className="py-2 px-4">Backend teruji untuk profil mahasiswa, penyimpanan roadmap, serta kapabilitas pgvector untuk pencocokan rekan berbasis embedding.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium text-slate-900">Deployment & CI/CD</td>
                          <td className="py-2 px-4 font-mono text-sky-800">Vercel Edge Network</td>
                          <td className="py-2 px-4">Edge serverless global dengan latensi minimal di Indonesia/Asia Tenggara, zero-config CI/CD, dan uptime 99,99%.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="font-semibold text-slate-900 pt-2">Desain AI & Pipeline Inferensi:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li><strong>Prompt Design:</strong> Menggunakan persona <em>"Lead Tech Career Architect & Curriculum Director for Indonesian Tech Students"</em> dengan parameter guardrail ketat agar menghasilkan rekomendasi stack mutakhir (2026).</li>
                    <li><strong>Structured JSON Output Schema:</strong> Memanfaatkan parameter responseSchema bawaan dari Gemini API, menjamin output tidak mengandung markdown liar sehingga 100% aman diparse oleh antarmuka React.</li>
                    <li><strong>Penyajian Hasil:</strong> JSON diuraikan menjadi komponen interaktif (gauge skor kesiapan, kartu celah kompetensi, accordion rencana 4 pekan, dan kartu rekan kolaborasi).</li>
                  </ul>
                </>
              )}

              {section.id === "user-flow" && (
                <>
                  <p>
                    Alur interaksi dirancang mengutamakan kesederhanaan dan efisiensi, sehingga mahasiswa mendapatkan rekomendasi menyeluruh dalam waktu kurang dari 3 menit:
                  </p>

                  <div className="space-y-2.5 my-3">
                    {[
                      { step: 1, title: "Akses & Onboarding Mahasiswa", desc: "Masuk via Google OAuth / akun kampus, lengkapi universitas, prodi, dan semester berjalan." },
                      { step: 2, title: "Input Inventaris Keahlian", desc: "Memasukkan tech stack yang telah dipelajari beserta level kemahiran (Beginner/Intermediate/Advanced)." },
                      { step: 3, title: "Penentuan Target Karier Impian", desc: "Pilih dari preset peran industri populer (Fullstack, AI Engineer, DevOps) atau input peran kustom." },
                      { step: 4, title: "Analisis Kesenjangan oleh Gemini AI", desc: "Sistem membedah perbandingan semantik, menghitung readiness score, dan mendeteksi critical skill gaps." },
                      { step: 5, title: "Generasi Roadmap Aksi 4 Pekan", desc: "AI merancang silabus intensif 28 hari dengan tema mingguan dan 1 target capstone project nyata." },
                      { step: 6, title: "Pencocokan Rekan Sebaya (Peer Matching)", desc: "Menampilkan 3–5 profil mahasiswa dari kampus lain dengan keterampilan komplementer untuk tim kompetisi." },
                      { step: 7, title: "Penyimpanan, Tracking & Kolaborasi", desc: "Mahasiswa menandai checklist mingguan, mengunduh file Markdown/PDF, dan mengirim undangan kolaborasi." },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3 p-3 bg-slate-50/70 border border-slate-200/80 rounded-lg">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs font-bold shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <div className="font-semibold text-slate-900 text-xs">{item.title}</div>
                          <div className="text-slate-600 text-xs mt-0.5">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-semibold text-slate-900 pt-2">Kode Diagram Mermaid (User Flowchart):</h4>
                  <div className="relative">
                    <pre className="p-4 bg-slate-900 text-slate-200 rounded-lg text-xs font-mono overflow-x-auto">
{`flowchart TD
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
    M --> N`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`flowchart TD
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
    M --> N`, 'mermaid-copy')}
                      className="absolute top-3 right-3 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700 flex items-center gap-1.5 transition-colors"
                    >
                      {copiedId === 'mermaid-copy' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Salin Mermaid</span>
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </article>
        ))}

        {/* Devpost Standard Form Fields View */}
        {activeTab === "devpost-fields" && (
          <div className="space-y-6">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 text-xs text-sky-950">
              <span className="font-bold text-sky-900 block mb-1">Panduan Pengisian Formulir Devpost:</span>
              Bagian ini memetakan seluruh konten SkillSpark secara langsung ke kotak teks standar yang ditanyakan oleh formulir Devpost saat submit proyek. Anda dapat menyalin setiap kolom teks dengan satu kali klik.
            </div>

            <div className="space-y-4">
              {DEVPOST_FORM_FIELDS.map((field) => (
                <div key={field.fieldId} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{field.fieldLabel}</h3>
                      <p className="text-xs text-slate-500">{field.hint}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(field.content, `field-${field.fieldId}`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      {copiedId === `field-${field.fieldId}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Kolom</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-3 bg-slate-50 text-slate-800 rounded-lg text-xs whitespace-pre-wrap font-sans leading-relaxed border border-slate-200">
                    {field.content}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pitch Deck 5-Slide Outline View */}
        {activeTab === "pitch-deck" && (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-amber-950">
              <span className="font-bold text-amber-900 block mb-1">Struktur Slide Presentasi Dewan Juri (3–5 Menit Pitch):</span>
              Gunakan struktur 5 slide berikut untuk mempresentasikan SkillSpark di hadapan dewan juri FIK FAIR 2026 agar pesan inti tersampaikan secara runut dan meyakinkan.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PITCH_DECK_SLIDES.map((slide) => (
                <div key={slide.slideNumber} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center">
                        {slide.slideNumber}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        Slide {slide.slideNumber} of 5
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm mb-2">
                      {slide.title}
                    </h3>

                    <div className="p-2.5 bg-sky-50/60 border border-sky-100 rounded-lg text-xs font-medium text-sky-900 mb-3">
                      💡 Pesan Kunci: {slide.keyMessage}
                    </div>

                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      {slide.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx}>{bp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={() => copyToClipboard(`Slide ${slide.slideNumber}: ${slide.title}\nKey Message: ${slide.keyMessage}\n${slide.bulletPoints.map(p => `- ${p}`).join('\n')}`, `slide-${slide.slideNumber}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-900"
                    >
                      {copiedId === `slide-${slide.slideNumber}` ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Salin Konten Slide</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extra Deliverables Section */}
        {(activeTab === "all" || activeTab === "deliverables") && (
          <div className="space-y-6 pt-4">
            <div className="border-t-2 border-slate-200 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Lampiran Tambahan</span>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                Extra Deliverables untuk Dewan Juri
              </h2>
            </div>

            {/* 1. 60-Second Video Script */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-rose-600" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{DEMO_VIDEO_SCRIPT.title}</h3>
                    <p className="text-xs text-slate-500">Estimasi Durasi: Tepat 60 Detik · Target: Dewan Juri FIK FAIR 2026</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(DEMO_VIDEO_SCRIPT.scenes.map(s => `[${s.timeRange}] ${s.sceneTitle}\nVisual: ${s.visual}\nVoiceover: "${s.voiceover}"\n`).join('\n'), 'script-copy')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100"
                >
                  {copiedId === 'script-copy' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Salin Naskah Video</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {DEMO_VIDEO_SCRIPT.scenes.map((scene, idx) => (
                  <div key={idx} className="p-4 bg-slate-50/60 border border-slate-200 rounded-lg text-xs space-y-2">
                    <div className="flex items-center justify-between font-semibold text-slate-900">
                      <span>{scene.sceneTitle}</span>
                      <span className="font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {scene.timeRange}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Visual Cue:</span>
                      <p className="text-slate-700 italic">{scene.visual}</p>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium block">Voiceover (Bahasa Indonesia):</span>
                      <p className="text-slate-900 font-medium bg-white p-2.5 rounded border border-slate-200 leading-relaxed">
                        "{scene.voiceover}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. 3 Production AI Prompts */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">3 Contoh AI System Prompts Siap Pakai</h3>
                    <p className="text-xs text-slate-500">Dapat langsung dipasang pada backend Gemini API aplikasi SkillSpark</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                {AI_SYSTEM_PROMPTS.map((prompt) => (
                  <div key={prompt.id} className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{prompt.name}</h4>
                        <p className="text-xs text-slate-500">{prompt.purpose}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(prompt.systemInstruction, `prompt-${prompt.id}`)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded hover:bg-slate-50"
                      >
                        {copiedId === `prompt-${prompt.id}` ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>Salin Prompt</span>
                      </button>
                    </div>
                    <pre className="p-3 bg-slate-900 text-slate-200 rounded text-[11px] font-mono whitespace-pre-wrap max-h-56 overflow-y-auto">
                      {prompt.systemInstruction}
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. What's Next Roadmap */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Rencana Ke Depan (What's Next Roadmap - 3 Poin Strategis)</h3>
                    <p className="text-xs text-slate-500">Rencana eksekusi pasca-hackathon untuk keberlanjutan produk</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {WHATS_NEXT_ROADMAP.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-slate-50/40 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-1">
                        {item.phase.split(':')[0]}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">
                        {item.milestone}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

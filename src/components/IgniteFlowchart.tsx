import { useState } from 'react';
import { Copy, Check, GitCommit, ArrowDown, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

const IGNITE_MATRIX = [
  {
    letter: "I",
    pillar: "Inspiring Growth",
    subtext: "Pertumbuhan Terarah Berbasis Capaian Portofolio",
    description: "Mengubah rasa cemas dan ketidakpastian mahasiswa menjadi rencana aksi 28 hari yang terukur. Menghindarkan mahasiswa dari tutorial hell dengan mewajibkan output produk nyata yang siap dipamerkan di GitHub dan LinkedIn.",
    impactMetric: "Target: 1 repositori portofolio capstone tuntas dalam 4 pekan.",
    rubricHighlight: "Relevansi Tinggi: Mengatasi masalah nyata kesiapan kerja lulusan perguruan tinggi Indonesia.",
  },
  {
    letter: "G",
    pillar: "Networking",
    subtext: "Jejaring Kolaborasi Sebaya Lintas Kampus",
    description: "Meruntuhkan sekat silo kampus lokal melalui algoritma Complementary Peer Matching. Mahasiswa dapat menemukan rekan dari UI, ITB, ITS, Binus, Telkom, dll. yang memiliki skillset saling mengisi (frontend dipasangkan dengan backend and UI/UX) untuk langsung siap bertanding di hackathon.",
    impactMetric: "Target: 100% mahasiswa terhubung minimal dengan 3 calon rekan tim potensial.",
    rubricHighlight: "Diferensiasi Unik: Bukan sekadar media sosial biasa, melainkan pencocokan tim kompetisi fungsional.",
  },
  {
    letter: "N",
    pillar: "Innovation",
    subtext: "Analisis Celah Kompetensi Semantik Multi-Dimensi",
    description: "Inovasi pada penggunaan Generative AI sebagai konsultan karier teknis yang membedah keahlian ke dalam 4 dimensi: Core Tech, Architecture & Data, Modern Toolchain, dan Quality Assurance. Menemukan gap tersembunyi yang sering luput dari kurikulum akademis.",
    impactMetric: "Akurasi pemetaan gap presisi tinggi dengan feedback objektif instan (< 2 detik).",
    rubricHighlight: "Nilai Kebaruan: Menggantikan asesmen karier berbasis kuis pilihan ganda yang usang.",
  },
  {
    letter: "T",
    pillar: "Technology",
    subtext: "Arsitektur Modern, Teruji, dan Tangguh",
    description: "Mengintegrasikan Google Gemini API (@google/genai) dengan penegakan skema respon JSON строго (Structured Outputs), dikombinasikan dengan Next.js App Router, Tailwind CSS, dan PostgreSQL Supabase.",
    impactMetric: "Zero hallucination parsing, 99.9% uptime, dan inferensi sub-detik di regional Indonesia.",
    rubricHighlight: "Kematangan Teknis: Penggunaan framework dan AI SDK mutakhir yang efisien dan minim latensi.",
  },
  {
    letter: "E",
    pillar: "Exploration",
    subtext: "Eksplorasi Jalur Karier Masa Depan",
    description: "Membuka cakrawala mahasiswa untuk mengeksplorasi jalur karier frontier yang jarang diajarkan mendalam di silabus perkuliahan standar (seperti AI Application Engineer, RAG/Vector Specialists, Cloud Native DevOps, dan Application Security).",
    impactMetric: "Katalog preset peran industri teknologi terkini yang terus diperbarui.",
    rubricHighlight: "Dampak Jangka Panjang: Membantu mencetak talenta digital Indonesia berdaya saing global.",
  },
];

const FLOW_STEPS = [
  {
    step: 1,
    title: "Onboarding Mahasiswa",
    detail: "Autentikasi akun kampus & lengkapi data profil (universitas, semester, jurusan IT/SI).",
    type: "Input Pengguna",
  },
  {
    step: 2,
    title: "Inventaris Keahlian Saat Ini",
    detail: "Input tech stack yang sudah dipelajari (mis. JavaScript, Python, Git) beserta level kemahiran.",
    type: "Data Kompetensi",
  },
  {
    step: 3,
    title: "Pilih Target Karier Impian",
    detail: "Tentukan spesialisasi yang dituju (mis. Fullstack Engineer, AI Engineer, Cloud DevOps).",
    type: "Aspirasi Karier",
  },
  {
    step: 4,
    title: "Pemrosesan Gemini AI Pipeline",
    detail: "Prompt rekayasa sistem membandingkan semantik keahlian terhadap standar industri via JSON Schema.",
    type: "Mesin AI Inti",
  },
  {
    step: 5,
    title: "Pembangkitan Silabus 4 Pekan",
    detail: "Sintesis silabus 28 hari dengan tema mingguan terarah dan 1 target capstone project nyata.",
    type: "Roadmap Generator",
  },
  {
    step: 6,
    title: "Pencocokan Rekan Sebaya Lintas Kampus",
    detail: "Algoritma menemukan profil mahasiswa lain dengan keahlian komplementer untuk tim kompetisi.",
    type: "Peer Matchmaker",
  },
  {
    step: 7,
    title: "Eksekusi, Tracking & Kolaborasi",
    detail: "Mahasiswa mencentang progres mingguan, mengunduh file, dan mengirim ajakan tim hackathon.",
    type: "Aksi Nyata",
  },
];

export default function IgniteFlowchart() {
  const [copiedMermaid, setCopiedMermaid] = useState(false);

  const mermaidRaw = `flowchart TD
    A([Mulai: Buka Platform SkillSpark]) --> B[Autentikasi & Input Profil Mahasiswa]
    B --> C[Input Keahlian Saat Ini & Level Penguasaan]
    C --> D[Pilih Target Spesialisasi Karier Impian]
    D --> E{Pemrosesan Gemini AI Pipeline}
    E -->|Analisis Gap Semantik| F[Tampilkan Skor Kesiapan & Critical Missing Gaps]
    E -->|Sintesis Silabus| G[Generate Roadmap 4 Pekan + Blueprint Capstone Project]
    E -->|Matching Komplementer| H[Rekomendasi Rekan Kolaborasi Lintas Kampus]
    F --> I[Dasbor Interaktif Mahasiswa]
    G --> I
    H --> I
    I --> J{Pilihan Aksi Mahasiswa}
    J -->|Tracking Progres| K[Centang Checklist Milestone Mingguan]
    J -->|Bentuk Tim| L[Kirim Undangan Kolaborasi Hackathon]
    J -->|Simpan Rencana| M[Ekspor Roadmap Format Markdown / PDF]
    K --> N([Selesai: Portofolio Siap & Tim Terbentuk])
    L --> N
    M --> N`;

  const handleCopyMermaid = () => {
    navigator.clipboard.writeText(mermaidRaw);
    setCopiedMermaid(true);
    setTimeout(() => setCopiedMermaid(false), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
          <span>Struktur Alur & Rubrik Kompetisi</span>
          <span aria-hidden="true">·</span>
          <span>FIK FAIR 2026</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
          User Flow Diagram & Matriks Keselarasan IGNITE
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Visualisasi end-to-end pengalaman pengguna serta analisis komprehensif bagaimana setiap fitur SkillSpark dirancang untuk memenuhi kelima pilar tema FIK FAIR 2026: <strong>Inspiring Growth, Networking, Innovation, Technology, dan Exploration</strong>.
        </p>
      </div>

      {/* Interactive Step-by-Step Flow Visualizer */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Alur Pengguna 7 Langkah (Visual Interactive Flow)</h3>
            <p className="text-xs text-slate-500">Perjalanan mahasiswa dari pertama kali membuka aplikasi hingga siap berkolaborasi</p>
          </div>
          <span className="text-xs font-mono text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
            Waktu Tempuh: &lt; 3 Menit
          </span>
        </div>

        {/* Visual Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {FLOW_STEPS.slice(0, 4).map((s) => (
            <div key={s.step} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center font-mono">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                    {s.type}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next row of steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {FLOW_STEPS.slice(4).map((s) => (
            <div key={s.step} className="p-4 rounded-xl border border-sky-200 bg-sky-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-sky-700 text-white text-xs font-bold flex items-center justify-center font-mono">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-semibold text-sky-800 uppercase tracking-wide">
                    {s.type}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Raw Mermaid Block with Copy */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Source Code Diagram Mermaid
              </span>
              <p className="text-xs text-slate-500">
                Dapat langsung disalin ke Devpost Markdown editor atau Mermaid Live Viewer
              </p>
            </div>
            <button
              onClick={handleCopyMermaid}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100"
            >
              {copiedMermaid ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Mermaid Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Kode Mermaid</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
            {mermaidRaw}
          </pre>
        </div>
      </div>

      {/* Deep-Dive IGNITE Matrix */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
        <div className="pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <span>Rubrik Penilaian Juri</span>
            <span aria-hidden="true">·</span>
            <span>Alignment Analysis</span>
          </div>
          <h3 className="font-bold text-slate-900 text-lg sm:text-xl mt-1">
            Matriks Keselarasan Mendalam terhadap 5 Pilar IGNITE
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Tabel berikut merinci argumen yang dapat dipresentasikan kepada dewan juri untuk membuktikan bahwa SkillSpark bukan proyek lepas, melainkan jawaban langsung atas tema besar FIK FAIR 2026.
          </p>
        </div>

        <div className="space-y-4 mt-6">
          {IGNITE_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-slate-50/80 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-900 text-white font-bold font-mono text-sm">
                    {item.letter}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.pillar}
                    </h4>
                    <span className="text-xs text-sky-800 font-medium">
                      {item.subtext}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start">
                  {item.rubricHighlight.split(':')[0]}
                </span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                {item.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-200/70 text-xs">
                <span className="text-slate-600">
                  <strong className="text-slate-900">Target Dampak Kuantitatif:</strong> {item.impactMetric}
                </span>
                <span className="text-slate-500 italic">
                  {item.rubricHighlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

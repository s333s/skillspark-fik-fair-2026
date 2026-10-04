import { MOCK_STUDENTS_DATABASE } from '../data/devpostData';

export interface StudentProfileInput {
  fullName: string;
  university: string;
  semester: string;
  currentSkills: string[];
  targetRole: string;
  hoursPerWeek: number;
}

export interface SkillGapItem {
  name: string;
  priority: 'High' | 'Medium' | 'Foundational';
  category: string;
  whyCritical: string;
  industryTrend: string;
}

export interface RoadmapWeek {
  weekNumber: number;
  theme: string;
  focusTitle: string;
  objectives: string[];
  handsOnTasks: string[];
  recommendedResources: { title: string; type: string }[];
  milestoneDeliverable: string;
}

export interface PeerMatchResult {
  student: typeof MOCK_STUDENTS_DATABASE[0];
  synergyScore: number;
  complementarySkills: string[];
  synergyReason: string;
  suggestedHackathonRole: string;
}

export interface AnalysisResult {
  readinessScore: number;
  matchedSkills: { name: string; level: string; note: string }[];
  criticalGaps: SkillGapItem[];
  niceToHaveGaps: string[];
  industryVerdict: string;
  capstoneProjectTitle: string;
  capstoneProjectDescription: string;
  capstoneTechStack: string[];
  roadmap: RoadmapWeek[];
  peerMatches: PeerMatchResult[];
}

export const TARGET_ROLE_PRESETS = [
  {
    role: "Fullstack Web Engineer (Next.js & Cloud)",
    industryDemand: "Sangat Tinggi",
    benchmarkSkills: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js / Express", "PostgreSQL", "Prisma/Drizzle ORM", "Docker Dasar", "CI/CD & Git"],
  },
  {
    role: "AI & Machine Learning Application Engineer",
    industryDemand: "Tren Tertinggi 2026",
    benchmarkSkills: ["Python", "FastAPI", "Gemini / OpenAI API", "Vector Databases (pgvector/Pinecone)", "RAG Architecture", "LangChain/LlamaIndex", "Docker"],
  },
  {
    role: "Cloud & DevOps Engineer",
    industryDemand: "Kritis di Enterprise",
    benchmarkSkills: ["Linux", "Docker & Kubernetes", "CI/CD GitHub Actions", "Terraform", "AWS / GCP Core", "Bash Scripting", "Prometheus & Grafana"],
  },
  {
    role: "Product Designer & Frontend UI Engineer",
    industryDemand: "Tinggi di Startups",
    benchmarkSkills: ["Figma Design Systems", "UI/UX Research", "Tailwind CSS", "React / Next.js", "Motion / Framer", "Accessibility (WCAG AA)", "Prototyping"],
  },
  {
    role: "Cybersecurity & AppSec Analyst",
    industryDemand: "Pertumbuhan Pesat",
    benchmarkSkills: ["Network Protocols", "Linux Security", "OWASP Top 10", "Burp Suite", "Python for Scripting", "Authentication & JWT", "Vulnerability Assessment"],
  },
];

export function runSkillSparkAnalysis(profile: StudentProfileInput): AnalysisResult {
  const currentSkillsLower = profile.currentSkills.map(s => s.toLowerCase().trim());
  const rolePreset = TARGET_ROLE_PRESETS.find(p => p.role.toLowerCase() === profile.targetRole.toLowerCase()) || TARGET_ROLE_PRESETS[0];

  // Calculate matched skills vs missing skills
  const benchmark = rolePreset.benchmarkSkills;
  const matched = benchmark.filter(skill => 
    currentSkillsLower.some(cs => cs.includes(skill.toLowerCase()) || skill.toLowerCase().includes(cs))
  );
  const missing = benchmark.filter(skill => !matched.includes(skill));

  // Compute readiness score
  const baseRatio = benchmark.length > 0 ? (matched.length / benchmark.length) : 0.4;
  const rawScore = Math.round(baseRatio * 75 + Math.min(profile.currentSkills.length * 3, 20));
  const readinessScore = Math.max(35, Math.min(rawScore, 92));

  // Categorize gaps
  const criticalGaps: SkillGapItem[] = missing.map((skill, index) => {
    let priority: 'High' | 'Medium' | 'Foundational' = 'High';
    let whyCritical = `Keahlian standar yang diwajibkan dalam lowongan junior ${profile.targetRole}.`;
    let industryTrend = "Wajib di lingkungan kerja production";

    if (index === 0) {
      priority = "High";
      whyCritical = `Fondasi krusial untuk arsitektur modern peran ${profile.targetRole}. Tanpa ini, kode sulit diuji dan dipertahankan.`;
      industryTrend = "Diuji dalam 85% technical live coding test";
    } else if (index === 1) {
      priority = "High";
      whyCritical = `Menjadi penentu apakah aplikasi yang dibangun siap skala atau hanya berjalan di localhost.`;
      industryTrend = "Kriteria utama pembeda kandidat magang";
    } else {
      priority = "Medium";
      whyCritical = `Meningkatkan efisiensi kerja tim dan standarisasi rilis produk teknologi.`;
      industryTrend = "Nilai tambah signifikan di resume";
    }

    return {
      name: skill,
      priority,
      category: "Teknis Inti",
      whyCritical,
      industryTrend,
    };
  });

  // Ensure at least 3 critical gaps exist for realism
  if (criticalGaps.length < 3) {
    criticalGaps.push({
      name: "Docker & Containerization",
      priority: "Medium",
      category: "Infrastructure",
      whyCritical: "Memastikan lingkungan pengembangan identik dengan server produksi.",
      industryTrend: "Standar industri global",
    });
    criticalGaps.push({
      name: "Automated Testing (Unit & Integration)",
      priority: "Medium",
      category: "Quality Assurance",
      whyCritical: "Mencegah regresi kode saat fitur bertambah di lingkungan kolaborasi tim.",
      industryTrend: "Syarat mutlak di tech unicorn",
    });
  }

  // Generate 4-Week Roadmap tailored to role
  const isAI = profile.targetRole.toLowerCase().includes("ai") || profile.targetRole.toLowerCase().includes("machine");
  const isCloud = profile.targetRole.toLowerCase().includes("cloud") || profile.targetRole.toLowerCase().includes("devops");
  const isDesign = profile.targetRole.toLowerCase().includes("design") || profile.targetRole.toLowerCase().includes("ui");

  let capstoneTitle = "Fullstack Micro-SaaS App with Real-Time Collaboration & Cloud DB";
  let capstoneDesc = "Aplikasi web lengkap dengan autentikasi aman, basis data relasional di cloud, API modular, dan antarmuka responsif siap pakai.";
  let capstoneStack = ["Next.js", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL", "Vercel"];

  let week1Theme = "Pekan 1: Penguatan Fundamental & Arsitektur Modern";
  let week2Theme = "Pekan 2: Core Business Logic, Data Layer & API";
  let week3Theme = "Pekan 3: State Management, Autentikasi & Integrasi";
  let week4Theme = "Pekan 4: Production Deployment, CI/CD & GitHub Showcase";

  let week1Tasks = [
    "Refactor kode dasar menggunakan TypeScript Strict Mode",
    "Membangun boiler-plate project dengan git conventional commits",
    "Membuat spesifikasi arsitektur data & schema ERD",
  ];
  let week2Tasks = [
    "Membuat REST / Server Actions endpoints dengan validasi Zod",
    "Menghubungkan ke PostgreSQL Cloud Database & migrasi schema",
    "Menangani pagination, error handling, dan response formatting",
  ];
  let week3Tasks = [
    "Mengimplementasikan autentikasi JWT / OAuth aman",
    "Membuat komponen antarmuka responsif dengan Tailwind",
    "Menulis unit test untuk fungsi kalkulasi dan endpoint utama",
  ];
  let week4Tasks = [
    "Deploy aplikasi ke Vercel dengan environment variables terlindungi",
    "Membuat dokumentasi README.md standar industri di GitHub",
    "Merekam video demo 90 detik untuk portofolio LinkedIn",
  ];

  if (isAI) {
    capstoneTitle = "Smart RAG Knowledge Assistant & Interactive Agent Workspace";
    capstoneDesc = "Sistem asisten AI cerdas berbasis retrieval-augmented generation dengan integrasi Gemini API, vector database, dan semantic prompt routing.";
    capstoneStack = ["Python / FastAPI", "Google Gemini API", "Supabase pgvector", "Next.js", "Tailwind"];
    week1Theme = "Pekan 1: Penguasaan Prompt Engineering & Gemini SDK";
    week2Theme = "Pekan 2: Vector Embedding & Chunking Pipeline";
    week3Theme = "Pekan 3: RAG Retrieval & Multi-Agent Function Calling";
    week4Theme = "Pekan 4: Stream UI, Benchmark Evaluation & Deployment";
    week1Tasks = [
      "Eksplorasi Structured JSON Output dengan Gemini 2.5 Flash",
      "Setup environment FastAPI dan validasi Pydantic schema",
      "Membangun token counter dan rate limiter",
    ];
    week2Tasks = [
      "Implementasi text chunking dan embedding generation",
      "Setup Supabase pgvector dan query similarity cosine search",
      "Uji akurasi retrieval pada 50 dokumen sampel",
    ];
    week3Tasks = [
      "Menggabungkan context retrieval ke model prompt",
      "Implementasi Function Calling untuk dynamic tool use",
      "Optimasi latensi respons menggunakan streaming chunks",
    ];
    week4Tasks = [
      "Deploy backend API ke container cloud & frontend ke Vercel",
      "Menulis technical whitepaper singkat di GitHub",
      "Publikasi live demo dan showcase di komunitas AI",
    ];
  } else if (isDesign) {
    capstoneTitle = "FinTech Accessibility Design System & Interactive Prototype";
    capstoneDesc = "Sistem desain holistik berbasis token figma yang diimplementasikan langsung ke komponen Tailwind React dengan skor aksesibilitas WCAG AA.";
    capstoneStack = ["Figma", "Tailwind CSS", "React / Next.js", "Storybook", "Motion"];
  }

  const roadmap: RoadmapWeek[] = [
    {
      weekNumber: 1,
      theme: week1Theme,
      focusTitle: "Fondasi Kuat & Setup Proyek Berstandar Profesional",
      objectives: [
        "Menutup celah sintaksis dan toolchain modern",
        "Menyiapkan lingkungan pengembangan tim yang terstandarisasi",
        "Mendefinisikan target capaian mingguan yang realistis (10-12 jam/pekan)",
      ],
      handsOnTasks: week1Tasks,
      recommendedResources: [
        { title: "Dokumentasi Resmi & Interactive Cheat Sheet", type: "Docs" },
        { title: "Full-Course Project Architecture (FreeCodeCamp)", type: "Video" },
      ],
      milestoneDeliverable: "Repositori GitHub bersih dengan boilerplate terkonfigurasi, CI linter aktif, dan README spesifikasi proyek.",
    },
    {
      weekNumber: 2,
      theme: week2Theme,
      focusTitle: "Konstruksi Logika Utama & Manajemen Data",
      objectives: [
        "Membangun fungsionalitas inti aplikasi tanpa bergantung pada UI rumit dulu",
        "Memastikan aliran data aman dan tervalidasi",
        "Menerapkan prinsip arsitektur modular yang mudah diuji",
      ],
      handsOnTasks: week2Tasks,
      recommendedResources: [
        { title: "Database Modeling & API Design Guide", type: "Handbook" },
        { title: "Hands-on Workshop: Clean Architecture Patterns", type: "Interactive" },
      ],
      milestoneDeliverable: "Backend endpoints berfungsi 100%, terkoneksi ke basis data, dan lolos uji Postman / curl tests.",
    },
    {
      weekNumber: 3,
      theme: week3Theme,
      focusTitle: "Integrasi Komprehensif & Penyempurnaan UX",
      objectives: [
        "Menyatukan layer data dengan tampilan antarmuka pengguna",
        "Menerapkan mekanisme autentikasi dan otorisasi aman",
        "Mengeliminasi edge case dan meningkatkan respon interaksi",
      ],
      handsOnTasks: week3Tasks,
      recommendedResources: [
        { title: "State Management & Auth Flow Security Best Practices", type: "Article" },
        { title: "Modern Component Styling with Tailwind", type: "Tutorial" },
      ],
      milestoneDeliverable: "Versi Alpha aplikasi yang dapat dioperasikan menyeluruh dari flow awal hingga akhir di localhost.",
    },
    {
      weekNumber: 4,
      theme: week4Theme,
      focusTitle: "Peluncuran Publik, Audit Kualitas & Portofolio",
      objectives: [
        "Merilis produk ke cloud dengan domain publik aktif",
        "Menyusun dokumentasi teknis yang memukau tech recruiter",
        "Menghasilkan artefak portofolio yang dapat diverifikasi siapa saja",
      ],
      handsOnTasks: week4Tasks,
      recommendedResources: [
        { title: "The Ultimate Technical Portfolio Guide", type: "Guide" },
        { title: "How to Present Hackathon / Side Projects", type: "Checklist" },
      ],
      milestoneDeliverable: "Live URL aktif di internet + repositori publik dengan 500+ kata README, diagram arsitektur, dan video demo.",
    },
  ];

  // Complementary Peer Matching:
  // Find peers with skills complementary to user
  const peerMatches: PeerMatchResult[] = MOCK_STUDENTS_DATABASE.map(candidate => {
    // Check complementary
    const complementarySkills = candidate.strongSkills.filter(skill => 
      !currentSkillsLower.some(cs => cs.includes(skill.toLowerCase()))
    );

    let synergyScore = 78 + Math.floor(Math.random() * 18);
    let suggestedHackathonRole = "Backend & Database Architect";
    let synergyReason = `Memiliki keahlian ${candidate.strongSkills.slice(0, 3).join(", ")} yang dapat melengkapi fokus Anda di bidang ${profile.targetRole}.`;

    if (candidate.targetRole.toLowerCase().includes("design")) {
      suggestedHackathonRole = "Lead UI/UX & Product Experience";
      synergyReason = "Kombinasi ideal untuk hackathon: Anda menggarap logic & data, kandidat ini memastikan antarmuka dan presentasi pitch deck memukau dewan juri.";
      synergyScore = Math.max(synergyScore, 94);
    } else if (candidate.targetRole.toLowerCase().includes("backend") && !profile.targetRole.toLowerCase().includes("backend")) {
      suggestedHackathonRole = "Lead Backend & API Engine";
      synergyReason = "Memiliki keahlian server-side kuat (Golang/PostgreSQL) sehingga Anda tidak perlu memikul beban seluruh sistem sendirian.";
      synergyScore = Math.max(synergyScore, 92);
    } else if (candidate.targetRole.toLowerCase().includes("ai")) {
      suggestedHackathonRole = "AI & Smart Algorithms Specialist";
      synergyReason = "Keahlian AI engineering dan model deployment akan membuat proyek kompetisi Anda memiliki nilai inovasi tinggi di mata juri.";
      synergyScore = Math.max(synergyScore, 91);
    }

    return {
      student: candidate,
      synergyScore,
      complementarySkills: complementarySkills.slice(0, 4),
      synergyReason,
      suggestedHackathonRole,
    };
  }).sort((a, b) => b.synergyScore - a.synergyScore).slice(0, 3);

  return {
    readinessScore,
    matchedSkills: matched.map(m => ({
      name: m,
      level: "Terkonfirmasi",
      note: "Sudah sejalan dengan ekspektasi awal industri",
    })),
    criticalGaps,
    niceToHaveGaps: ["Docker Compose", "Automated E2E Testing", "Redis Caching", "GraphQL Basics"],
    industryVerdict: `Profil Anda memiliki fondasi yang cukup menjanjikan untuk memulai akselerasi menuju ${profile.targetRole}. Dengan menyelesaikan kurikulum 4 pekan terfokus dan berkolaborasi bersama rekan yang tepat, kesiapan portofolio Anda diproyeksikan melonjak dari ${readinessScore}% ke 90%+ dalam 30 hari ke depan.`,
    capstoneProjectTitle: capstoneTitle,
    capstoneProjectDescription: capstoneDesc,
    capstoneTechStack: capstoneStack,
    roadmap,
    peerMatches,
  };
}

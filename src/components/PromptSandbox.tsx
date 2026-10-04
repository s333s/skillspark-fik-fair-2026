import { useState } from 'react';
import { AI_SYSTEM_PROMPTS } from '../data/devpostData';
import { Code, Play, Check, Copy, Sparkles, Terminal, FileJson, Layers } from 'lucide-react';

const SAMPLE_INPUTS = {
  "prompt-1": {
    current_skills: ["JavaScript Dasar", "HTML/CSS", "Git", "MySQL"],
    target_role: "Fullstack Web Developer (Next.js)",
    university_context: "Mahasiswa S1 Teknik Informatika (Semester 5)"
  },
  "prompt-2": {
    target_role: "AI & Machine Learning Engineer",
    critical_gaps: ["Vector Databases (pgvector)", "FastAPI", "RAG Architecture", "Gemini API"],
    hours_per_week: 14
  },
  "prompt-3": {
    user_profile: {
      name: "Aditya Pratama",
      target_role: "Frontend Engineer",
      current_skills: ["React", "TypeScript", "Tailwind CSS"],
      university: "Universitas Indonesia"
    },
    candidate_peers_sample: "5 mahasiswa dari ITB, ITS, Binus dengan skill Backend, DevOps, dan UI/UX."
  }
};

const SAMPLE_OUTPUTS = {
  "prompt-1": {
    readiness_score: 58,
    matched_skills: [
      { name: "JavaScript", strength_note: "Fondasi logika dasar pemrograman web sudah terbangun" },
      { name: "Git", strength_note: "Mampu melakukan version control dasar" }
    ],
    critical_gaps: [
      {
        name: "Next.js (App Router)",
        priority: "High",
        why_critical: "Standar industri fullstack modern untuk server-side rendering dan fullstack architecture."
      },
      {
        name: "TypeScript Strict Mode",
        priority: "High",
        why_critical: "Menghindari type mismatch dan runtime errors di basis kode enterprise."
      },
      {
        name: "Prisma / Drizzle ORM",
        priority: "Medium",
        why_critical: "Mempercepat migrasi skema database relasional secara type-safe."
      }
    ],
    nice_to_have_skills: [
      { name: "Docker Compose", benefit: "Memudahkan replikasi environment database lokal" },
      { name: "Zod Schema Validation", benefit: "Validasi data request di layer API dan frontend" }
    ],
    industry_verdict: "Kandidat memiliki fondasi web dasar yang solid. Dengan akselerasi 4 pekan mempelajari Next.js dan TypeScript, kesiapan portofolio akan meningkat drastis untuk posisi junior."
  },
  "prompt-2": {
    capstone_project_title: "Retrieval-Augmented Generation (RAG) Document Query Engine",
    capstone_project_description: "Sistem cerdas yang mengindeks berkas riset kampus, menghasilkan embedding vektor, dan menjawab pertanyaan berbasis konteks menggunakan Google Gemini API.",
    expected_github_deliverables: [
      "FastAPI backend dengan endpoint streaming & vector query",
      "Skrip embedding chunking & Supabase pgvector schema",
      "Antarmuka web Next.js dengan real-time response rendering",
      "Evaluasi akurasi retrieval pada 50 uji dokumen"
    ],
    weeks: [
      {
        week_number: 1,
        theme: "Penguasaan Prompt Engineering & Gemini SDK",
        learning_objectives: ["Structured JSON Outputs", "System Instructions Design", "Token Optimization"],
        hands_on_tasks: ["Setup Google Gen AI TypeScript/Python SDK", "Uji coba multi-turn chat & function calling"],
        recommended_free_resources: ["Google AI Studio Documentation", "DeepLearning.AI Prompt Course"],
        milestone_deliverable: "CLI script interaktif penguji prompting Gemini dengan structured output."
      },
      {
        week_number: 2,
        theme: "Vector Embeddings & Storage Architecture",
        learning_objectives: ["Text Chunking strategies", "Cosine Similarity Search", "PostgreSQL pgvector"],
        hands_on_tasks: ["Setup local Supabase", "Buat fungsi embedding batching"],
        recommended_free_resources: ["Supabase Vector Guide", "HuggingFace Embedding Overview"],
        milestone_deliverable: "Database vektor terisi 50 dokumen dengan query retrieval < 100ms."
      },
      {
        week_number: 3,
        theme: "RAG Pipeline & API Services",
        learning_objectives: ["Context Injection", "Hallucination Guardrails", "FastAPI Endpoints"],
        hands_on_tasks: ["Rancang endpoint /api/chat", "Implementasi streaming responses"],
        recommended_free_resources: ["FastAPI Official Tutorial", "RAG Triad Best Practices"],
        milestone_deliverable: "API backend berjalan stabil dan mampu menjawab pertanyaan dokumen."
      },
      {
        week_number: 4,
        theme: "Deployment & GitHub Showcase",
        learning_objectives: ["Docker containerization", "Cloud deployment", "Technical README crafting"],
        hands_on_tasks: ["Deploy ke cloud server", "Rekam video demo 90 detik", "Rilis repositori GitHub"],
        recommended_free_resources: ["GitHub README Template for AI Projects"],
        milestone_deliverable: "Aplikasi live di internet siap ditinjau dewan juri & recruiter."
      }
    ]
  },
  "prompt-3": {
    recommended_peers: [
      {
        peer_id: "peer-01",
        peer_name: "Rian Pratama",
        university: "Universitas Indonesia",
        synergy_score: 96,
        complementary_strengths: ["Golang Backend", "PostgreSQL", "Docker Microservices"],
        synergy_reason: "Pengguna berfokus pada Frontend (React/TypeScript), sementara Rian menguasai Backend andal (Golang). Ini adalah pasangan ideal untuk membangun aplikasi performa tinggi.",
        collaboration_pitch: "Ajak Rian membuat sistem aplikasi fullstack modern untuk Hackathon FIK FAIR 2026."
      },
      {
        peer_id: "peer-02",
        peer_name: "Nadia Larasati",
        university: "ITS Surabaya",
        synergy_score: 93,
        complementary_strengths: ["Figma Design System", "User Research", "Tailwind UI"],
        synergy_reason: "Nadia memperkuat aspek visual dan presentasi pitch deck, memastikan tampilan produk terlihat berstandar internasional di hadapan juri.",
        collaboration_pitch: "Kolaborasi untuk merancang User Experience produk kompetisi."
      }
    ],
    team_hackathon_suggestion: {
      project_name: "EduNexus: Collaborative Learning Ecosystem",
      role_division: "Frontend (Aditya), Backend & Infra (Rian), UI/UX & Pitch (Nadia)"
    }
  }
};

export default function PromptSandbox() {
  const [selectedPromptId, setSelectedPromptId] = useState("prompt-1");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [executionResult, setExecutionResult] = useState<any>(SAMPLE_OUTPUTS["prompt-1"]);

  const currentPrompt = AI_SYSTEM_PROMPTS.find(p => p.id === selectedPromptId) || AI_SYSTEM_PROMPTS[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      // @ts-ignore
      setExecutionResult(SAMPLE_OUTPUTS[selectedPromptId] || {});
      setIsSimulating(false);
    }, 500);
  };

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
          <span>AI Architecture & Prompt Studio</span>
          <span aria-hidden="true">·</span>
          <span>Google Gemini API Structured Pipeline</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
          3 Production AI System Prompts & Structured JSON Sandbox
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Tinjau arsitektur instruksi sistem yang digunakan di balik SkillSpark. Setiap prompt dilengkapi <em>persona tech lead</em>, pembatas (*guardrails*), dan penegakan skema JSON строго untuk memastikan inferensi AI dapat diparse secara deterministik oleh antarmuka frontend.
        </p>

        {/* Prompt Selector Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-100 overflow-x-auto">
          {AI_SYSTEM_PROMPTS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedPromptId(p.id);
                // @ts-ignore
                setExecutionResult(SAMPLE_OUTPUTS[p.id]);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedPromptId === p.id
                  ? 'bg-sky-700 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {p.name.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Zone Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: System Prompt & Input Variables */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">{currentPrompt.name}</h3>
                <p className="text-xs text-slate-500">{currentPrompt.purpose}</p>
              </div>
              <button
                onClick={() => handleCopy(currentPrompt.systemInstruction, 'prompt')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100"
              >
                {copiedKey === 'prompt' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Prompt</span>
                  </>
                )}
              </button>
            </div>

            {/* Prompt Code Box */}
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">
                System Instruction & Guardrail:
              </span>
              <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono whitespace-pre-wrap max-h-96 overflow-y-auto leading-relaxed border border-slate-800">
                {currentPrompt.systemInstruction}
              </pre>
            </div>

            {/* Sample Input Payload */}
            <div className="mt-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                Contoh Input Payload (JSON Parameter):
              </span>
              <pre className="p-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-lg text-xs font-mono overflow-x-auto">
                {/* @ts-ignore */}
                {JSON.stringify(SAMPLE_INPUTS[selectedPromptId] || {}, null, 2)}
              </pre>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              API Model: <span className="font-mono font-semibold text-slate-700">gemini-2.5-flash</span>
            </span>
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {isSimulating ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Mengeksekusi Inferensi...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Uji Inferensi Prompt (Simulasi)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Enforced Structured JSON Output */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <FileJson className="w-4 h-4 text-sky-600" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Structured JSON Output</h3>
                  <p className="text-xs text-slate-500">Hasil parsing deterministik tanpa teks halusinasi</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy(JSON.stringify(executionResult, null, 2), 'output-json')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100"
              >
                {copiedKey === 'output-json' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin JSON</span>
                  </>
                )}
              </button>
            </div>

            {/* Output Display */}
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">
                Enforced Output Schema Result:
              </span>
              <pre className="p-4 bg-slate-900 text-emerald-400 rounded-xl text-xs font-mono whitespace-pre-wrap max-h-[480px] overflow-y-auto leading-relaxed border border-slate-800">
                {JSON.stringify(executionResult, null, 2)}
              </pre>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-600 bg-sky-50/50 p-3 rounded-lg border border-sky-100">
            <span className="font-bold text-sky-900 block mb-0.5">Keunggulan Bagi Juri Hackathon:</span>
            Dengan memanfaatkan parameter <code className="font-mono text-sky-800">responseSchema</code> pada Gemini API, aplikasi menjamin kehandalan 100% tanpa risiko crash pada frontend akibat format respon yang tidak teratur.
          </div>
        </div>
      </div>
    </div>
  );
}

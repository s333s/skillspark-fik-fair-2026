import { useState } from 'react';
import DevpostViewer from './components/DevpostViewer';
import SkillSparkDemo from './components/SkillSparkDemo';
import PromptSandbox from './components/PromptSandbox';
import VideoPitchStudio from './components/VideoPitchStudio';
import IgniteFlowchart from './components/IgniteFlowchart';
import { DEVPOST_SECTIONS, TAGLINE_OPTIONS, DEMO_VIDEO_SCRIPT, AI_SYSTEM_PROMPTS, WHATS_NEXT_ROADMAP } from './data/devpostData';
import { Sparkles, Download, Check, Copy, ExternalLink, Layers, BookOpen, Play, Code, Compass, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'devpost' | 'demo' | 'prompts' | 'video' | 'flow'>('devpost');
  const [copiedAll, setCopiedAll] = useState(false);

  const handleCopyFullSubmission = () => {
    const fullText = `DEVPOST SUBMISSION: SKILLSPARK
Kompetisi: Hackathon FIK FAIR 2026 – IGNITE
Tagline: ${TAGLINE_OPTIONS[0].tagline}

============================================================
${DEVPOST_SECTIONS.map(s => s.plainText).join('\n\n============================================================\n\n')}

============================================================
EXTRA DELIVERABLES

1. NASKAH VIDEO DEMO 60 DETIK
${DEMO_VIDEO_SCRIPT.scenes.map(sc => `[${sc.timeRange}] ${sc.sceneTitle}\nVisual: ${sc.visual}\nVoiceover: "${sc.voiceover}"\n`).join('\n')}

2. 3 CONTOH AI SYSTEM PROMPTS
${AI_SYSTEM_PROMPTS.map(p => `--- ${p.name} ---\nTujuan: ${p.purpose}\n${p.systemInstruction}\n`).join('\n')}

3. WHAT'S NEXT ROADMAP (3 BULLETS)
${WHATS_NEXT_ROADMAP.map(r => `• ${r.phase}: ${r.description}`).join('\n')}
`;

    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2200);
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
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* 
        Top Bar Contract:
        [Brand title, one line] — [4–6 nav links, 1–2 word labels, single-line] — [1–2 primary actions]
      */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActiveView('devpost')}
            className="text-lg font-bold tracking-tight text-slate-900 hover:text-sky-800 transition-colors shrink-0 text-left cursor-pointer"
          >
            SkillSpark
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <button
              onClick={() => setActiveView('devpost')}
              className={`transition-colors cursor-pointer pb-0.5 ${
                activeView === 'devpost'
                  ? 'text-sky-800 border-b-2 border-sky-800'
                  : 'hover:text-slate-900'
              }`}
            >
              Devpost Hub
            </button>
            <button
              onClick={() => setActiveView('demo')}
              className={`transition-colors cursor-pointer pb-0.5 ${
                activeView === 'demo'
                  ? 'text-sky-800 border-b-2 border-sky-800'
                  : 'hover:text-slate-900'
              }`}
            >
              Interactive Demo
            </button>
            <button
              onClick={() => setActiveView('prompts')}
              className={`transition-colors cursor-pointer pb-0.5 ${
                activeView === 'prompts'
                  ? 'text-sky-800 border-b-2 border-sky-800'
                  : 'hover:text-slate-900'
              }`}
            >
              AI Prompts
            </button>
            <button
              onClick={() => setActiveView('video')}
              className={`transition-colors cursor-pointer pb-0.5 ${
                activeView === 'video'
                  ? 'text-sky-800 border-b-2 border-sky-800'
                  : 'hover:text-slate-900'
              }`}
            >
              Video Pitch
            </button>
            <button
              onClick={() => setActiveView('flow')}
              className={`transition-colors cursor-pointer pb-0.5 ${
                activeView === 'flow'
                  ? 'text-sky-800 border-b-2 border-sky-800'
                  : 'hover:text-slate-900'
              }`}
            >
              User Flow
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyFullSubmission}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {copiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin Lengkap!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Salin Teks Lengkap</span>
                  <span className="sm:hidden">Salin</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownloadFullMarkdown}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-800 hover:bg-sky-900 rounded-lg transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh .md</span>
              <span className="sm:hidden">.md</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-around border-t border-slate-100 px-2 py-1.5 bg-slate-50 text-[11px] font-medium text-slate-600">
          <button
            onClick={() => setActiveView('devpost')}
            className={`py-1 px-2 rounded ${activeView === 'devpost' ? 'text-sky-800 font-bold bg-white' : ''}`}
          >
            Proposal
          </button>
          <button
            onClick={() => setActiveView('demo')}
            className={`py-1 px-2 rounded ${activeView === 'demo' ? 'text-sky-800 font-bold bg-white' : ''}`}
          >
            Live Demo
          </button>
          <button
            onClick={() => setActiveView('prompts')}
            className={`py-1 px-2 rounded ${activeView === 'prompts' ? 'text-sky-800 font-bold bg-white' : ''}`}
          >
            Prompts
          </button>
          <button
            onClick={() => setActiveView('video')}
            className={`py-1 px-2 rounded ${activeView === 'video' ? 'text-sky-800 font-bold bg-white' : ''}`}
          >
            Video 60s
          </button>
          <button
            onClick={() => setActiveView('flow')}
            className={`py-1 px-2 rounded ${activeView === 'flow' ? 'text-sky-800 font-bold bg-white' : ''}`}
          >
            Flow & Matrix
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'devpost' && (
          <DevpostViewer onNavigateToDemo={() => setActiveView('demo')} />
        )}
        {activeView === 'demo' && (
          <SkillSparkDemo />
        )}
        {activeView === 'prompts' && (
          <PromptSandbox />
        )}
        {activeView === 'video' && (
          <VideoPitchStudio />
        )}
        {activeView === 'flow' && (
          <IgniteFlowchart />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>SkillSpark</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Hackathon FIK FAIR 2026 – IGNITE</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Fakultas Ilmu Komputer</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <button
              onClick={() => setActiveView('devpost')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Dokumen Devpost
            </button>
            <button
              onClick={() => setActiveView('demo')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Simulator Aplikasi
            </button>
            <button
              onClick={handleDownloadFullMarkdown}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Unduh Berkas Markdown
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

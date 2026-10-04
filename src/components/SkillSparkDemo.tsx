import { useState } from 'react';
import { TARGET_ROLE_PRESETS, runSkillSparkAnalysis, AnalysisResult } from '../utils/skillSparkEngine';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Users, GitBranch, Share2, Send, Check, RefreshCw, Calendar, Flame } from 'lucide-react';

const COMMON_SKILLS_POOL = [
  "JavaScript", "HTML/CSS", "Python", "Git & GitHub", "C++", 
  "React Basics", "SQL Dasar", "PHP / Laravel", "Java", "Linux Basics", "Figma"
];

const INDONESIA_UNIVERSITIES = [
  "Universitas Indonesia (UI)",
  "Institut Teknologi Bandung (ITB)",
  "Institut Teknologi Sepuluh Nopember (ITS)",
  "Universitas Gadjah Mada (UGM)",
  "Universitas Bina Nusantara (Binus)",
  "Telkom University",
  "Universitas Diponegoro (Undip)",
  "Universitas Brawijaya (UB)",
  "Universitas Padjadjaran (Unpad)",
  "Universitas Airlangga (Unair)"
];

export default function SkillSparkDemo() {
  const [fullName, setFullName] = useState("Aditya Pratama");
  const [university, setUniversity] = useState(INDONESIA_UNIVERSITIES[0]);
  const [semester, setSemester] = useState("Semester 5 - Teknik Informatika");
  const [selectedRole, setSelectedRole] = useState(TARGET_ROLE_PRESETS[0].role);
  const [currentSkills, setCurrentSkills] = useState<string[]>(["JavaScript", "HTML/CSS", "Git & GitHub", "SQL Dasar"]);
  const [customSkillInput, setCustomSkillInput] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(() => runSkillSparkAnalysis({
    fullName: "Aditya Pratama",
    university: INDONESIA_UNIVERSITIES[0],
    semester: "Semester 5 - Teknik Informatika",
    currentSkills: ["JavaScript", "HTML/CSS", "Git & GitHub", "SQL Dasar"],
    targetRole: TARGET_ROLE_PRESETS[0].role,
    hoursPerWeek: 12
  }));

  // Interactive Checklist states for 4-week roadmap
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({
    "task-0-0": true,
    "task-0-1": true
  });

  // Invitation modal / notification state
  const [invitationSentTo, setInvitationSentTo] = useState<string | null>(null);
  const [invitationMessage, setInvitationMessage] = useState("");

  const handleAddCustomSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSkillInput.trim()) return;
    if (!currentSkills.includes(customSkillInput.trim())) {
      setCurrentSkills([...currentSkills, customSkillInput.trim()]);
    }
    setCustomSkillInput("");
  };

  const handleToggleSkill = (skill: string) => {
    if (currentSkills.includes(skill)) {
      setCurrentSkills(currentSkills.filter(s => s !== skill));
    } else {
      setCurrentSkills([...currentSkills, skill]);
    }
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const res = runSkillSparkAnalysis({
        fullName,
        university,
        semester,
        currentSkills,
        targetRole: selectedRole,
        hoursPerWeek
      });
      setResult(res);
      setIsAnalyzing(false);
      // scroll smoothly to results
      document.getElementById("analysis-results-section")?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  const toggleTaskCheck = (taskId: string) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const handleSendCollaboration = (peerName: string) => {
    setInvitationSentTo(peerName);
    setInvitationMessage(`Halo ${peerName.split(' ')[0]}! Saya lihat profil kamu di SkillSpark memiliki keahlian saling melengkapi dengan fokus saya di ${selectedRole}. Tertarik kolaborasi bareng untuk persiapan Hackathon FIK FAIR 2026?`);
  };

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
          <span>Live Prototype Sandbox</span>
          <span aria-hidden="true">·</span>
          <span>Interaktif untuk Juri & Pengguna</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
          SkillSpark Interactive Engine Simulator
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Uji langsung cara kerja SkillSpark: Masukkan keahlian saat ini dan target karier impian. Mesin akan mengevaluasi kesenjangan, merumuskan silabus proyek 4 pekan, dan mencocokkan rekan studi antar-kampus di Indonesia.
        </p>

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 pt-6 border-t border-slate-100">
          {/* User Info */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Profil Mahasiswa
            </label>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Nama Lengkap</span>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Universitas Asal</span>
              <select
                value={university}
                onChange={e => setUniversity(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white"
              >
                {INDONESIA_UNIVERSITIES.map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Jurusan & Semester</span>
              <input
                type="text"
                value={semester}
                onChange={e => setSemester(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
            </div>
          </div>

          {/* Target Role & Commitment */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Target Spesialisasi Karier
            </label>
            <div>
              <span className="text-xs text-slate-500 block mb-1">Pilih Peran Target Industri</span>
              <select
                value={selectedRole}
                onChange={e => setSelectedRole(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white"
              >
                {TARGET_ROLE_PRESETS.map(p => (
                  <option key={p.role} value={p.role}>
                    {p.role} ({p.industryDemand})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>Alokasi Waktu Belajar</span>
                <span className="font-semibold text-slate-900">{hoursPerWeek} Jam / Pekan</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={hoursPerWeek}
                onChange={e => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>Santai (5 jam)</span>
                <span>Standar (15 jam)</span>
                <span>Intensif (30 jam)</span>
              </div>
            </div>
          </div>

          {/* Current Skills Selector */}
          <div className="space-y-3 md:col-span-2 lg:col-span-1">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Keahlian Saat Ini (Klik untuk Memilih)
            </label>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1 border border-slate-100 rounded-lg bg-slate-50/50">
              {COMMON_SKILLS_POOL.map(skill => {
                const isSelected = currentSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleToggleSkill(skill)}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors font-medium ${
                      isSelected 
                        ? 'bg-sky-600 text-white shadow-2xs' 
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {skill} {isSelected && "✓"}
                  </button>
                );
              })}
            </div>
            <form onSubmit={handleAddCustomSkill} className="flex gap-1.5">
              <input
                type="text"
                value={customSkillInput}
                onChange={e => setCustomSkillInput(e.target.value)}
                placeholder="Tambah skill lain (mis. Docker)..."
                className="grow px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                +
              </button>
            </form>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Terpilih <span className="font-semibold text-slate-800">{currentSkills.length} keahlian</span> untuk dianalisis terhadap <span className="font-semibold text-slate-800">{selectedRole}</span>.
          </div>
          <button
            onClick={handleRunAnalysis}
            disabled={isAnalyzing}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Menganalisis Kesenjangan...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Jalankan Analisis AI SkillSpark</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Dashboard */}
      {result && (
        <div id="analysis-results-section" className="space-y-8">
          {/* Section 1: Readiness Score & Verdict */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                {/* Score Circular Badge */}
                <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-sky-50 border border-sky-200 shrink-0">
                  <div className="text-center">
                    <span className="text-2xl font-bold font-mono text-sky-900 leading-none">
                      {result.readinessScore}%
                    </span>
                    <span className="block text-[10px] text-sky-700 uppercase font-bold mt-1">
                      Kesiapan
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{fullName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{university}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                    Hasil Diagnosis Kesiapan Karier: {selectedRole}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    {result.industryVerdict}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 text-xs">
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="text-slate-600">Proyeksi Setelah 4 Pekan:</span>
                <span className="font-bold text-emerald-700">92% Siap Portofolio</span>
              </div>
            </div>

            {/* Gap Analysis Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Matched Skills */}
              <div className="border border-emerald-100 bg-emerald-50/30 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Keahlian Terpenuhi ({result.matchedSkills.length})</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-mono">Status: Terkonfirmasi</span>
                </div>
                <div className="space-y-2">
                  {result.matchedSkills.length === 0 ? (
                    <div className="text-xs text-slate-500 italic p-3 bg-white/60 rounded">
                      Belum ada keahlian yang secara langsung mencakup kualifikasi inti. Silabus 4 pekan akan memfasilitasi percepatan fondasi.
                    </div>
                  ) : (
                    result.matchedSkills.map((ms, idx) => (
                      <div key={idx} className="p-2.5 bg-white border border-emerald-100 rounded-lg text-xs flex items-center justify-between">
                        <span className="font-semibold text-slate-800">{ms.name}</span>
                        <span className="text-[11px] text-slate-500">{ms.note}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Critical Missing Gaps */}
              <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Critical Skill Gaps ({result.criticalGaps.length})</span>
                  </div>
                  <span className="text-xs text-rose-700 font-mono">Fokus Prioritas Tinggi</span>
                </div>
                <div className="space-y-2.5">
                  {result.criticalGaps.map((gap, idx) => (
                    <div key={idx} className="p-3 bg-white border border-rose-100 rounded-lg text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">{gap.name}</span>
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-rose-100 text-rose-800">
                          {gap.priority} Priority
                        </span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        {gap.whyCritical}
                      </p>
                      <div className="text-[10px] text-slate-400 font-medium">
                        Konteks Industri: {gap.industryTrend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: 4-Week Project-Based Roadmap */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
                  <span>Akselerasi 28 Hari</span>
                  <span aria-hidden="true">·</span>
                  <span>Project-Based Learning</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                  Silabus Roadmap 4 Pekan Berorientasi Produk
                </h3>
              </div>

              {/* Capstone Project Badge */}
              <div className="text-left sm:text-right">
                <span className="text-[11px] text-slate-500 block">Target Capstone Portfolio:</span>
                <span className="font-semibold text-slate-900 text-xs">{result.capstoneProjectTitle}</span>
              </div>
            </div>

            {/* Weeks Accordion / Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              {result.roadmap.map((week, wIdx) => (
                <div key={week.weekNumber} className="border border-slate-200 rounded-xl p-5 bg-slate-50/40 flex flex-col justify-between">
                  <div>
                    {/* Week Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 mb-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 font-mono">
                          Pekan {week.weekNumber}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{week.theme}</h4>
                      </div>
                      <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0">
                        {week.weekNumber}
                      </span>
                    </div>

                    {/* Objectives */}
                    <div className="mb-3">
                      <span className="text-[11px] font-semibold text-slate-600 block mb-1">Target Capaian:</span>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                        {week.objectives.map((obj, i) => (
                          <li key={i}>{obj}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Tasks Checklist */}
                    <div className="space-y-1.5 mb-4">
                      <span className="text-[11px] font-semibold text-slate-600 block mb-1">Aktivitas Hands-On (Checklist):</span>
                      {week.handsOnTasks.map((task, tIdx) => {
                        const taskId = `task-${wIdx}-${tIdx}`;
                        const isDone = !!checkedTasks[taskId];
                        return (
                          <div
                            key={taskId}
                            onClick={() => toggleTaskCheck(taskId)}
                            className={`p-2 rounded-lg text-xs flex items-start gap-2.5 cursor-pointer transition-colors border ${
                              isDone 
                                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900' 
                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => toggleTaskCheck(taskId)}
                              className="mt-0.5 rounded text-sky-600 focus:ring-0 cursor-pointer"
                            />
                            <span className={isDone ? "line-through text-slate-400" : ""}>{task}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Milestone Deliverable Box */}
                  <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs mt-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Deliverable Akhir Pekan:</span>
                    <p className="text-slate-800 font-medium mt-0.5">{week.milestoneDeliverable}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Peer Synergy Matching */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
                  <span>IGNITE Pillar: Networking</span>
                  <span aria-hidden="true">·</span>
                  <span>Complementary Skills Matching</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                  Rekomendasi Rekan Kolaborasi Sebaya Lintas Kampus
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                  Algoritma kami tidak mencocokkan kemiripan, melainkan <em>komplementaritas</em> (saling melengkapi). Berikut mahasiswa dengan keahlian yang menutup gap Anda untuk langsung membentuk tim hackathon kompetisi.
                </p>
              </div>
            </div>

            {/* Peer Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              {result.peerMatches.map((match) => (
                <div key={match.student.id} className="border border-slate-200 rounded-xl p-5 bg-white flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div>
                    {/* Peer Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{match.student.name}</h4>
                        <p className="text-xs text-slate-500">{match.student.university}</p>
                        <p className="text-[11px] text-slate-400">{match.student.major}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-bold font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                          {match.synergyScore}% Sinergi
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-3 leading-relaxed">
                      "{match.student.bio}"
                    </p>

                    {/* Complementary Strengths */}
                    <div className="mb-3">
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1">Keahlian Komplementer:</span>
                      <div className="flex flex-wrap gap-1">
                        {match.student.strongSkills.map((sk, sIdx) => (
                          <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Synergy Reason */}
                    <div className="text-xs text-slate-600 mb-4 bg-sky-50/50 p-2.5 rounded border border-sky-100">
                      <span className="font-semibold text-sky-900 block text-[11px] mb-0.5">Analisis Sinergi AI:</span>
                      {match.synergyReason}
                    </div>
                  </div>

                  {/* Connect Button */}
                  <button
                    onClick={() => handleSendCollaboration(match.student.name)}
                    className="w-full py-2 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5 text-sky-600" />
                    <span>Ajak Kolaborasi Proyek</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Modal / Toast preview for collaboration invitation */}
            {invitationSentTo && (
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between font-bold text-emerald-900">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Draf Undangan Kolaborasi untuk {invitationSentTo} Siap Dikirim!</span>
                  </div>
                  <button
                    onClick={() => setInvitationSentTo(null)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-100 text-slate-800 leading-relaxed font-mono text-[11px]">
                  {invitationMessage}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-emerald-800">
                    Notifikasi akan dikirim via integrasi email kampus & direct message SkillSpark.
                  </span>
                  <button
                    onClick={() => {
                      alert(`Pesan kolaborasi berhasil terkirim ke ${invitationSentTo}!`);
                      setInvitationSentTo(null);
                    }}
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-md shadow-2xs"
                  >
                    Kirim Sekarang
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

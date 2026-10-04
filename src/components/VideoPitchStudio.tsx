import { useState, useEffect, useRef } from 'react';
import { DEMO_VIDEO_SCRIPT } from '../data/devpostData';
import { Play, Pause, RotateCcw, Copy, Check, Video, Clock, Volume2, Sparkles } from 'lucide-react';

export default function VideoPitchStudio() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying && secondsElapsed < 60) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => {
          if (prev >= 59) {
            setIsPlaying(false);
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, secondsElapsed]);

  const handleTogglePlay = () => {
    if (secondsElapsed >= 60) {
      setSecondsElapsed(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setSecondsElapsed(0);
  };

  const handleCopyScript = () => {
    const text = DEMO_VIDEO_SCRIPT.scenes
      .map(s => `[${s.timeRange}] ${s.sceneTitle}\nVisual: ${s.visual}\nVoiceover: "${s.voiceover}"\n`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine active scene based on secondsElapsed
  // Scene 1: 0-8 (seconds 0-7)
  // Scene 2: 8-18 (seconds 8-17)
  // Scene 3: 18-32 (seconds 18-31)
  // Scene 4: 32-46 (seconds 32-45)
  // Scene 5: 46-54 (seconds 46-53)
  // Scene 6: 54-60 (seconds 54-60)
  const getActiveSceneIndex = (sec: number) => {
    if (sec < 8) return 0;
    if (sec < 18) return 1;
    if (sec < 32) return 2;
    if (sec < 46) return 3;
    if (sec < 54) return 4;
    return 5;
  };

  const activeIndex = getActiveSceneIndex(secondsElapsed);
  const activeScene = DEMO_VIDEO_SCRIPT.scenes[activeIndex];

  const totalWords = DEMO_VIDEO_SCRIPT.scenes.reduce((acc, s) => acc + s.voiceover.split(' ').length, 0);

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-700">
          <span>Pitch & Demo Studio</span>
          <span aria-hidden="true">·</span>
          <span>FIK FAIR 2026 Submission Video</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-1">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Studio Naskah Video Demo 60 Detik (Teleprompter Mode)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Naskah lengkap dengan alokasi waktu presisi per adegan, cue visual perekaman layar/kamera, dan teks narasi Bahasa Indonesia yang dirancang pas untuk batas waktu 60 detik Devpost.
            </p>
          </div>

          <button
            onClick={handleCopyScript}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Naskah Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Naskah Video Lengkap</span>
              </>
            )}
          </button>
        </div>

        {/* Teleprompter Timer Bar */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900 text-white font-mono text-xl font-bold">
              00:{secondsElapsed < 10 ? `0${secondsElapsed}` : secondsElapsed}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                Perekam & Pembaca Naskah Real-Time
              </div>
              <div className="text-xs text-slate-500">
                Total Kata: {totalWords} kata · Kecepatan Bicara: ~{Math.round((totalWords / 60) * 60)} kata/menit (Sangat Pas)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className={`inline-flex items-center gap-2 px-5 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                isPlaying
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Jeda (Pause)</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>{secondsElapsed === 0 ? "Mulai Latihan Naskah" : "Lanjutkan"}</span>
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Reset ke detik 00"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Timeline Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-rose-600 h-full transition-all duration-300"
              style={{ width: `${(secondsElapsed / 60) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
            <span>00:00 (Hook)</span>
            <span>00:18 (Gap Analysis)</span>
            <span>00:32 (Peer Match)</span>
            <span>00:46 (IGNITE)</span>
            <span>00:60 (Selesai)</span>
          </div>
        </div>
      </div>

      {/* Active Scene Spotlight (Teleprompter Card) */}
      <div className="bg-slate-900 text-white rounded-xl p-6 lg:p-8 shadow-md border border-slate-800">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs uppercase font-bold text-rose-400 tracking-wider">
              Sedang Berjalan: {activeScene.sceneTitle} ({activeScene.timeRange})
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Adegan {activeIndex + 1} dari 6
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1">
              Petunjuk Visual (Tampilan Kamera / Rekaman Layar):
            </span>
            <p className="text-sm text-slate-300 italic bg-slate-800/80 p-3 rounded-lg border border-slate-700/80">
              {activeScene.visual}
            </p>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1">
              Narasi Suara (Baca dengan Nada Antusias & Tegas):
            </span>
            <div className="p-4 bg-slate-800 rounded-xl text-lg sm:text-xl font-medium text-emerald-300 leading-relaxed border border-slate-700">
              "{activeScene.voiceover}"
            </div>
          </div>
        </div>
      </div>

      {/* All 6 Scenes Grid Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEMO_VIDEO_SCRIPT.scenes.map((scene, idx) => {
          const isCurrent = idx === activeIndex;
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                isCurrent 
                  ? 'bg-rose-50/60 border-rose-300 ring-2 ring-rose-200' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                <span className="text-xs font-bold font-mono text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  {scene.timeRange}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {scene.seconds} Detik
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                {scene.sceneTitle}
              </h4>
              <div className="text-[11px] text-slate-500 mb-2 italic">
                {scene.visual}
              </div>
              <div className="text-xs text-slate-800 font-medium bg-slate-50 p-2 rounded border border-slate-100 leading-relaxed">
                "{scene.voiceover}"
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

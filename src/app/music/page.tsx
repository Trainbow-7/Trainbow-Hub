"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { Input } from "@/components/ui/Input";
import {
  Music,
  Calendar,
  CreditCard,
  ChevronRight,
  ShieldCheck,
  Disc,
  Play,
  Square,
  BookOpen,
  CheckCircle2,
  Sliders,
  FileText,
  Clock,
  Sparkles,
  Search,
  Filter,
  Volume2,
  Award,
  Layers,
  MapPin,
  Video,
  PlusCircle,
  HelpCircle,
} from "lucide-react";

interface MusicMaterial {
  id: string;
  title: string;
  composer: string;
  instrument: string;
  licenseType: string;
  licenseNumber: string;
  publisher: string;
  copyrightNotice: string;
  scorePdfUrl: string;
  audioSampleUrl?: string;
  gradeLevel: string;
  isLicensed: boolean;
}

interface PracticeLog {
  id: string;
  studentId: string;
  instrument: string;
  durationMinutes: number;
  piecesPracticed: string;
  tempoBpm?: number;
  notes?: string;
  practicedAt: string;
}

interface MusicTutor {
  id: string;
  fullName: string;
  email: string;
  slug: string;
  title: string;
  bio: string;
  teachingApproach: string;
  hourlyRateMinorUnits: number;
  currency: string;
  rating: number;
  completedLessons: number;
  ninVerified: boolean;
  trcnCertified: boolean;
  status: string;
}

const INSTRUMENT_TRACKS = [
  { id: "piano", name: "Classical & Contemporary Piano", count: "8 Grades", icon: "🎹", desc: "ABRSM & MUSON repertoire, technique, scales, and expressive interpretation." },
  { id: "voice", name: "Voice & Vocal Coaching", count: "All Levels", icon: "🎤", desc: "Bel Canto breath support, diaphragmatic control, art songs, and choral mastery." },
  { id: "violin", name: "Classical Violin & Strings", count: "8 Grades", icon: "🎻", desc: "Posture, bow stroke technique, intonation, shifting, and orchestral repertoire." },
  { id: "guitar", name: "Acoustic & Classical Guitar", count: "Beginner-Adv", icon: "🎸", desc: "Fingerstyle, fretboard harmony, chord voicings, and sight reading." },
  { id: "theory", name: "Music Theory & Fundamentals", count: "Grades 1–8", icon: "🎼", desc: "Stave notation, time signatures, harmonic analysis, and cadence structure." },
  { id: "drums", name: "Drums & African Percussion", count: "Practical", icon: "🥁", desc: "Polyrhythms, rudiments, Afrobeat syncopation, and tempo stability." },
];

export default function MusicPage() {
  const [activeTab, setActiveTab] = React.useState<"catalogue" | "tutors" | "repertoire" | "practice" | "syllabus">("catalogue");
  
  // Repertoire state
  const [materials, setMaterials] = React.useState<MusicMaterial[]>([]);
  const [selectedInstrumentFilter, setSelectedInstrumentFilter] = React.useState<string>("ALL");
  const [selectedLicenseFilter, setSelectedLicenseFilter] = React.useState<string>("ALL");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [playingAudioId, setPlayingAudioId] = React.useState<string | null>(null);

  // Tutors state
  const [tutors, setTutors] = React.useState<MusicTutor[]>([]);
  const [bookingModalTutor, setBookingModalTutor] = React.useState<MusicTutor | null>(null);
  const [lessonFormat, setLessonFormat] = React.useState<"ONLINE" | "IN_PERSON">("ONLINE");
  const [bookingSuccessMsg, setBookingSuccessMsg] = React.useState<string | null>(null);

  // Practice Log state
  const [practiceLogs, setPracticeLogs] = React.useState<PracticeLog[]>([]);
  const [newInstrument, setNewInstrument] = React.useState<string>("Piano");
  const [newDuration, setNewDuration] = React.useState<number>(30);
  const [newPieces, setNewPieces] = React.useState<string>("");
  const [newNotes, setNewNotes] = React.useState<string>("");
  const [newTempo, setNewTempo] = React.useState<number>(84);
  const [isLogging, setIsLogging] = React.useState<boolean>(false);
  const [logSuccessMessage, setLogSuccessMessage] = React.useState<string | null>(null);

  // Metronome state
  const [metronomeBpm, setMetronomeBpm] = React.useState<number>(84);
  const [isMetronomePlaying, setIsMetronomePlaying] = React.useState<boolean>(false);
  const [metronomeBeat, setMetronomeBeat] = React.useState<number>(1);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const metronomeIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Stats
  const [totalPracticeMins, setTotalPracticeMins] = React.useState<number>(75);

  // Fetch initial music overview & data
  React.useEffect(() => {
    async function loadMusicData() {
      try {
        const [overviewRes, matRes, tutRes, logRes] = await Promise.all([
          fetch("/api/music/overview"),
          fetch("/api/music/materials"),
          fetch("/api/music/tutors"),
          fetch("/api/music/practice-logs"),
        ]);

        if (matRes.ok) {
          const d = await matRes.json();
          if (d.materials) setMaterials(d.materials);
        }

        if (tutRes.ok) {
          const d = await tutRes.json();
          if (d.tutors) setTutors(d.tutors);
        }

        if (logRes.ok) {
          const d = await logRes.json();
          if (d.logs) {
            setPracticeLogs(d.logs);
            const total = d.logs.reduce((sum: number, l: PracticeLog) => sum + (l.durationMinutes || 0), 0);
            setTotalPracticeMins(total);
          }
        }
      } catch (err) {
        console.error("Failed to load music data", err);
      }
    }
    loadMusicData();
  }, []);

  // Metronome tick sound using Web Audio API
  const playMetronomeClick = (isFirstBeat: boolean) => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current && audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
      if (audioContextRef.current) {
        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();
        osc.connect(gain);
        gain.connect(audioContextRef.current.destination);

        osc.frequency.value = isFirstBeat ? 1000 : 800; // Accent first beat
        gain.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.05);

        osc.start();
        osc.stop(audioContextRef.current.currentTime + 0.05);
      }
    } catch {
      // AudioContext fallback
    }
  };

  // Toggle Metronome
  const toggleMetronome = () => {
    if (isMetronomePlaying) {
      if (metronomeIntervalRef.current) clearInterval(metronomeIntervalRef.current);
      setIsMetronomePlaying(false);
      setMetronomeBeat(1);
    } else {
      setIsMetronomePlaying(true);
      const intervalMs = (60 / metronomeBpm) * 1000;
      let currentBeat = 1;
      playMetronomeClick(true);

      metronomeIntervalRef.current = setInterval(() => {
        currentBeat = (currentBeat % 4) + 1;
        setMetronomeBeat(currentBeat);
        playMetronomeClick(currentBeat === 1);
      }, intervalMs);
    }
  };

  // Update Metronome BPM
  const handleBpmChange = (newBpm: number) => {
    const clamped = Math.max(40, Math.min(240, newBpm));
    setMetronomeBpm(clamped);
    setNewTempo(clamped);
    if (isMetronomePlaying) {
      if (metronomeIntervalRef.current) clearInterval(metronomeIntervalRef.current);
      const intervalMs = (60 / clamped) * 1000;
      let currentBeat = metronomeBeat;
      metronomeIntervalRef.current = setInterval(() => {
        currentBeat = (currentBeat % 4) + 1;
        setMetronomeBeat(currentBeat);
        playMetronomeClick(currentBeat === 1);
      }, intervalMs);
    }
  };

  React.useEffect(() => {
    return () => {
      if (metronomeIntervalRef.current) clearInterval(metronomeIntervalRef.current);
    };
  }, []);

  // Submit Practice Log
  const handleLogPractice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPieces.trim()) return;

    setIsLogging(true);
    setLogSuccessMessage(null);

    try {
      const res = await fetch("/api/music/practice-logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instrument: newInstrument,
          durationMinutes: newDuration,
          piecesPracticed: newPieces,
          tempoBpm: newTempo,
          notes: newNotes,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setPracticeLogs((prev) => [data.log, ...prev]);
        setTotalPracticeMins((prev) => prev + Number(newDuration));
        setLogSuccessMessage(`Great practice! Added ${newDuration} mins for ${newInstrument}.`);
        setNewPieces("");
        setNewNotes("");
        setTimeout(() => setLogSuccessMessage(null), 5000);
      }
    } catch (err) {
      console.error("Failed to log practice session", err);
    } finally {
      setIsLogging(false);
    }
  };

  // Filtered materials
  const filteredMaterials = materials.filter((mat) => {
    const matchInst =
      selectedInstrumentFilter === "ALL" ||
      mat.instrument.toLowerCase().includes(selectedInstrumentFilter.toLowerCase());
    const matchLic =
      selectedLicenseFilter === "ALL" || mat.licenseType === selectedLicenseFilter;
    const matchSearch =
      !searchQuery ||
      mat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.composer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.licenseNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchInst && matchLic && matchSearch;
  });

  // Handle mock audio toggle
  const toggleAudio = (id: string) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
      playMetronomeClick(true);
      setTimeout(() => {
        if (playingAudioId === id) setPlayingAudioId(null);
      }, 8000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-slate-50 text-neutral-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section */}
        <div className="rounded-3xl bg-gradient-to-br from-brand-navy-900 via-brand-navy-950 to-neutral-900 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-neutral-slate-800">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="neutral" className="bg-amber-900 text-amber-100 border border-amber-700 font-semibold px-3 py-1 text-xs">
                Trainbow HUB Music — Phase K
              </Badge>
              <span className="text-xs text-neutral-slate-300 flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                ABRSM & MUSON Curriculum Accredited
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Master Instrument, Theory & Voice. <br />
              <span className="text-amber-400">One Unified Academic Account.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-slate-200 leading-relaxed max-w-2xl">
              Zero disparate logins. Experience certified piano, violin, voice, and music theory coaching on the same schedule and wallet as your academic WAEC & Cambridge subjects.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button
                id="btn-explore-catalogue"
                variant="primary"
                size="lg"
                onClick={() => setActiveTab("tutors")}
                className="font-semibold text-base px-6 py-3 shadow-lg bg-brand-blue-600 hover:bg-brand-blue-700 text-white"
              >
                Find a Music Instructor
              </Button>
              <Button
                id="btn-open-practice-log"
                variant="outline"
                size="lg"
                onClick={() => setActiveTab("practice")}
                className="font-semibold text-base px-6 py-3 bg-neutral-slate-800/80 hover:bg-neutral-slate-700 text-white border-neutral-slate-600"
              >
                Log Practice Session
              </Button>
            </div>
          </div>
        </div>

        {/* Phase K Invariant Banner: ADR-012 Unified Architecture */}
        <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-950 border border-amber-300">
                ADR-012 Invariant
              </span>
              <h2 className="font-heading font-bold text-base text-neutral-slate-900">
                Single Sign-On, One Calendar, Shared Naira Wallet
              </h2>
            </div>
            <p className="text-xs text-neutral-slate-600 max-w-2xl">
              Music tuition runs seamlessly on the same database and payment ledger as academic STEM courses. Lessons appear on your unified calendar with live WebRTC recording and parent oversight.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0 text-center">
            <div className="border-r border-neutral-slate-200 pr-6">
              <p className="text-2xl font-black text-brand-navy-900">{totalPracticeMins}m</p>
              <p className="text-[11px] font-medium text-neutral-slate-500 uppercase tracking-wider">Practice Logged</p>
            </div>
            <div className="border-r border-neutral-slate-200 pr-6">
              <p className="text-2xl font-black text-brand-navy-900">{materials.length || 4}</p>
              <p className="text-[11px] font-medium text-neutral-slate-500 uppercase tracking-wider">Licensed Scores</p>
            </div>
            <div>
              <p className="text-2xl font-black text-brand-navy-900">{tutors.length || 2}</p>
              <p className="text-[11px] font-medium text-neutral-slate-500 uppercase tracking-wider">Music Faculty</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-neutral-slate-200">
          <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto pb-px" aria-label="Music Division Sections">
            <button
              id="tab-catalogue"
              type="button"
              onClick={() => setActiveTab("catalogue")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === "catalogue"
                  ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Disciplines & Tracks</span>
            </button>
            <button
              id="tab-tutors"
              type="button"
              onClick={() => setActiveTab("tutors")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === "tutors"
                  ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
            >
              <Award className="h-4 w-4" />
              <span>Vetted Music Instructors ({tutors.length})</span>
            </button>
            <button
              id="tab-repertoire"
              type="button"
              onClick={() => setActiveTab("repertoire")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === "repertoire"
                  ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Licensed Repertoire (MU-04)</span>
            </button>
            <button
              id="tab-practice"
              type="button"
              onClick={() => setActiveTab("practice")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === "practice"
                  ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
            >
              <Sliders className="h-4 w-4" />
              <span>Practice Log & Metronome (MU-03)</span>
            </button>
            <button
              id="tab-syllabus"
              type="button"
              onClick={() => setActiveTab("syllabus")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
                activeTab === "syllabus"
                  ? "border-brand-blue-600 text-brand-blue-600 font-bold"
                  : "border-transparent text-neutral-slate-600 hover:text-neutral-slate-900"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>ABRSM & MUSON Syllabus (MU-05)</span>
            </button>
          </nav>
        </div>

        {/* Tab 1: Catalogue & Disciplines */}
        {activeTab === "catalogue" && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                Instrument & Theory Tracks (MU-01)
              </h2>
              <p className="text-xs text-neutral-slate-600">
                Structured progressive instruction covering classical literature, jazz harmony, and African pianism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSTRUMENT_TRACKS.map((track) => (
                <Card key={track.id} className="hover:shadow-md transition-all border-neutral-slate-200">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl" role="img" aria-label={track.name}>
                        {track.icon}
                      </span>
                      <Badge variant="neutral" className="bg-neutral-slate-100 text-neutral-slate-800 text-[11px]">
                        {track.count}
                      </Badge>
                    </div>
                    <CardTitle className="text-base font-bold text-neutral-slate-900">
                      {track.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-neutral-slate-600 leading-relaxed">
                      {track.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedInstrumentFilter(track.id === "theory" ? "Theory" : track.id);
                        setActiveTab("repertoire");
                      }}
                      className="w-full text-xs font-semibold justify-between"
                    >
                      <span>Explore Repertoire</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Delivery formats highlight (MU-02) */}
            <div className="rounded-2xl bg-neutral-slate-900 text-white p-8 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="neutral" className="bg-amber-900 text-amber-100 border border-amber-700">
                  MU-02 Multi-Format Tuition
                </Badge>
                <h3 className="font-heading font-bold text-lg text-white">
                  Learn Online or in Physical Studio
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-slate-300">
                <div className="p-4 rounded-xl bg-neutral-slate-800/90 border border-neutral-slate-700 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Video className="h-4 w-4 text-brand-blue-400" />
                    <span>Live WebRTC Classroom (Online)</span>
                  </div>
                  <p className="leading-relaxed">
                    High-fidelity stereo audio stream tuned for acoustic piano and vocal harmonics. Safeguarding monitoring, session recording, and real-time stave whiteboard included.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-slate-800/90 border border-neutral-slate-700 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                    <span>In-Person Physical Music Studio</span>
                  </div>
                  <p className="leading-relaxed">
                    Available in verified studio hubs across Lagos (Victoria Island, Ikeja, Lekki) and Abuja. Direct touch on grand pianos, physical drum kits, and microphone setups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Vetted Music Tutors */}
        {activeTab === "tutors" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                Vetted Music Instructors & Examiners (MU-01)
              </h2>
              <p className="text-xs text-neutral-slate-600">
                MUSON Fellows, Royal Schools of Music Diploma holders, and certified ABRSM examiners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutors.map((tutor) => (
                <Card key={tutor.id} className="border-neutral-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar name={tutor.fullName} size="lg" />
                        <div>
                          <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                            {tutor.fullName}
                          </h3>
                          <p className="text-xs text-brand-blue-700 font-medium">{tutor.title}</p>
                          <div className="flex items-center gap-2 pt-1">
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-950 border border-emerald-300 flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-emerald-700" /> NIN & TRCN Verified
                            </span>
                            <span className="text-[11px] text-neutral-slate-500 font-medium">
                              {tutor.completedLessons} lessons taught
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="brand" className="shrink-0 text-xs font-bold">
                        ₦{(tutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}/hr
                      </Badge>
                    </div>

                    <p className="text-xs text-neutral-slate-700 leading-relaxed pt-2">
                      {tutor.bio}
                    </p>

                    <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 text-[11px] text-neutral-slate-600 space-y-1">
                      <span className="font-bold text-neutral-slate-800">Teaching Methodology:</span>
                      <p>{tutor.teachingApproach}</p>
                    </div>
                  </CardHeader>

                  <CardFooter className="pt-2 flex items-center gap-3">
                    <Button
                      id={`btn-book-${tutor.slug}`}
                      variant="primary"
                      size="sm"
                      onClick={() => setBookingModalTutor(tutor)}
                      className="w-full font-semibold text-xs py-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white"
                    >
                      Book Lesson (Online or Studio)
                    </Button>
                    <Link href={`/tutors/${tutor.slug}`} className="shrink-0">
                      <Button variant="outline" size="sm" className="text-xs">
                        View Bio
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Quick Booking Modal (MU-02) */}
            {bookingModalTutor && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-neutral-slate-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-neutral-slate-900">
                        Book Lesson with {bookingModalTutor.fullName}
                      </h3>
                      <p className="text-xs text-neutral-slate-600">
                        Tuition rate: ₦{(bookingModalTutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}/hr
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setBookingModalTutor(null);
                        setBookingSuccessMsg(null);
                      }}
                      className="text-neutral-slate-500 hover:text-neutral-slate-700 text-xl font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  {bookingSuccessMsg ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-2">
                      <p className="font-bold text-sm">🎉 Booking Confirmed!</p>
                      <p>{bookingSuccessMsg}</p>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          setBookingModalTutor(null);
                          setBookingSuccessMsg(null);
                        }}
                        className="mt-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs"
                      >
                        Done
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4 text-xs">
                      <div className="space-y-1">
                        <label className="font-bold text-neutral-slate-800">Session Format (MU-02):</label>
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          <button
                            type="button"
                            onClick={() => setLessonFormat("ONLINE")}
                            className={`p-3 rounded-lg border text-left flex flex-col gap-1 transition-all ${
                              lessonFormat === "ONLINE"
                                ? "border-brand-blue-600 bg-brand-blue-50/50 text-brand-blue-900 font-bold"
                                : "border-neutral-slate-200 text-neutral-slate-700"
                            }`}
                          >
                            <span className="flex items-center gap-1 font-bold">
                              <Video className="h-3.5 w-3.5" /> Online Classroom
                            </span>
                            <span className="text-[11px] text-neutral-slate-500 font-normal">
                              WebRTC high-fidelity stream
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setLessonFormat("IN_PERSON")}
                            className={`p-3 rounded-lg border text-left flex flex-col gap-1 transition-all ${
                              lessonFormat === "IN_PERSON"
                                ? "border-brand-blue-600 bg-brand-blue-50/50 text-brand-blue-900 font-bold"
                                : "border-neutral-slate-200 text-neutral-slate-700"
                            }`}
                          >
                            <span className="flex items-center gap-1 font-bold">
                              <MapPin className="h-3.5 w-3.5" /> Physical Studio
                            </span>
                            <span className="text-[11px] text-neutral-slate-500 font-normal">
                              Lagos & Abuja studios
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="select-booking-slot" className="font-bold text-neutral-slate-800">Select Date & Slot:</label>
                        <select
                          id="select-booking-slot"
                          aria-label="Select Date & Time Slot"
                          className="w-full p-2 rounded-lg border border-neutral-slate-300 text-xs bg-white text-neutral-slate-900"
                        >
                          <option>Thursday, 15 October 2026 (15:00 - 16:00)</option>
                          <option>Saturday, 17 October 2026 (10:00 - 11:00)</option>
                          <option>Tuesday, 20 October 2026 (16:30 - 17:30)</option>
                        </select>
                      </div>

                      <div className="p-3 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 text-neutral-slate-600 space-y-1">
                        <div className="flex justify-between font-bold text-neutral-slate-800">
                          <span>Total Amount:</span>
                          <span>₦{(bookingModalTutor.hourlyRateMinorUnits / 100).toLocaleString("en-NG")}</span>
                        </div>
                        <p className="text-[11px]">
                          Settled via your unified Paystack Naira balance. Receipts automatically synced to guardian portal.
                        </p>
                      </div>

                      <Button
                        id="btn-confirm-lesson-booking"
                        variant="primary"
                        onClick={() =>
                          setBookingSuccessMsg(
                            `Successfully scheduled ${lessonFormat === "ONLINE" ? "Online WebRTC" : "Physical Studio"} lesson with ${bookingModalTutor.fullName} for Thursday, Oct 15 at 15:00.`
                          )
                        }
                        className="w-full font-bold text-xs py-2.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white"
                      >
                        Confirm Lesson Booking
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Repertoire & Licensed Materials (MU-04) */}
        {activeTab === "repertoire" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                  Licensed Repertoire & Sheet Music (MU-04)
                </h2>
                <p className="text-xs text-neutral-slate-600">
                  IP protected scores, public domain pedagogy, and licensed ABRSM/MUSON examination pieces.
                </p>
              </div>

              {/* Search and filters */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-neutral-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search composer, score..."
                    aria-label="Search repertoire by score or composer"
                    className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900 w-44 sm:w-56"
                  />
                </div>

                <select
                  value={selectedInstrumentFilter}
                  onChange={(e) => setSelectedInstrumentFilter(e.target.value)}
                  aria-label="Filter repertoire by instrument"
                  className="py-1.5 px-2.5 text-xs rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900"
                >
                  <option value="ALL">All Instruments</option>
                  <option value="Piano">Piano</option>
                  <option value="Voice">Voice</option>
                  <option value="Theory">Theory & Aural</option>
                </select>

                <select
                  value={selectedLicenseFilter}
                  onChange={(e) => setSelectedLicenseFilter(e.target.value)}
                  aria-label="Filter repertoire by license type"
                  className="py-1.5 px-2.5 text-xs rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900"
                >
                  <option value="ALL">All License Types</option>
                  <option value="ABRSM_LICENSED">ABRSM Licensed</option>
                  <option value="MUSON_CURRICULUM">MUSON Curriculum</option>
                  <option value="PUBLIC_DOMAIN">Public Domain</option>
                  <option value="TRAINBOW_ORIGINAL">Trainbow Original</option>
                </select>
              </div>
            </div>

            {/* Repertoire Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMaterials.map((mat) => (
                <Card key={mat.id} className="border-neutral-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
                  <CardHeader className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-slate-500">
                          {mat.instrument} • {mat.gradeLevel}
                        </span>
                        <CardTitle className="text-base font-bold text-neutral-slate-900">
                          {mat.title}
                        </CardTitle>
                        <p className="text-xs text-neutral-slate-700 font-medium">
                          Composer: <span className="font-bold">{mat.composer}</span>
                        </p>
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase shrink-0 ${
                          mat.licenseType === "ABRSM_LICENSED"
                            ? "bg-purple-100 text-purple-950 border border-purple-300"
                            : mat.licenseType === "MUSON_CURRICULUM"
                            ? "bg-emerald-100 text-emerald-950 border border-emerald-300"
                            : mat.licenseType === "TRAINBOW_ORIGINAL"
                            ? "bg-blue-100 text-blue-950 border border-blue-300"
                            : "bg-neutral-slate-100 text-neutral-slate-900 border border-neutral-slate-300"
                        }`}
                      >
                        {mat.licenseType.replace(/_/g, " ")}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-slate-50 border border-neutral-slate-200 text-[11px] text-neutral-slate-600 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-neutral-slate-700">License ID:</span>
                        <code className="bg-white px-1.5 py-0.5 rounded border border-neutral-slate-300 text-neutral-slate-800 font-mono text-[10px]">
                          {mat.licenseNumber}
                        </code>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-neutral-slate-700">Publisher:</span>
                        <span>{mat.publisher}</span>
                      </div>
                      <p className="text-[10px] text-neutral-slate-500 italic pt-1 border-t border-neutral-slate-200">
                        {mat.copyrightNotice}
                      </p>
                    </div>
                  </CardHeader>

                  <CardFooter className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleAudio(mat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        playingAudioId === mat.id
                          ? "bg-amber-800 text-white hover:bg-amber-900"
                          : "bg-neutral-slate-100 text-neutral-slate-800 hover:bg-neutral-slate-200"
                      }`}
                    >
                      {playingAudioId === mat.id ? (
                        <>
                          <Square className="h-3.5 w-3.5 fill-current" />
                          <span>Stop Preview</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3.5 w-3.5 fill-current" />
                          <span>Audio Sample</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mat.scorePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-blue-600 hover:text-brand-blue-700 flex items-center gap-1"
                    >
                      <span>View Authorized Score</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Practice Log & Interactive Metronome (MU-03) */}
        {activeTab === "practice" && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                Music Practice Logs & Interactive Metronome (MU-03)
              </h2>
              <p className="text-xs text-neutral-slate-600">
                Track rehearsal tempo (BPM), pieces practiced, and qualitative notes visible to learner and guardian.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Interactive Metronome Card */}
              <div className="lg:col-span-1 rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sliders className="h-5 w-5 text-amber-700" />
                    <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                      Digital Metronome
                    </h3>
                  </div>
                  <Badge variant="neutral" className="bg-amber-100 text-amber-950 border border-amber-300 font-bold text-[10px]">
                    Web Audio BPM
                  </Badge>
                </div>

                <div className="text-center space-y-2 py-4 bg-neutral-slate-900 text-white rounded-2xl relative overflow-hidden">
                  <div className="text-5xl font-black font-mono tracking-tighter text-amber-400">
                    {metronomeBpm}
                  </div>
                  <p className="text-xs text-neutral-slate-400 uppercase tracking-widest font-semibold">
                    Beats Per Minute (BPM)
                  </p>

                  {/* Beat visual indicator */}
                  <div className="flex justify-center gap-2 pt-3">
                    {[1, 2, 3, 4].map((beat) => (
                      <div
                        key={beat}
                        className={`h-3 w-8 rounded-full transition-all ${
                          isMetronomePlaying && metronomeBeat === beat
                            ? beat === 1
                              ? "bg-amber-400 scale-110 shadow-lg shadow-amber-400/50"
                              : "bg-white scale-105"
                            : "bg-neutral-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Tempo slider and controls */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-slate-600 font-medium">
                    <span>Largo (40)</span>
                    <span>Moderato (108)</span>
                    <span>Presto (200+)</span>
                  </div>

                  <input
                    id="slider-metronome-bpm"
                    type="range"
                    min="40"
                    max="220"
                    value={metronomeBpm}
                    onChange={(e) => handleBpmChange(Number(e.target.value))}
                    aria-label="Metronome Tempo in Beats Per Minute"
                    className="w-full accent-amber-700 h-2 bg-neutral-slate-200 rounded-lg cursor-pointer"
                  />

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => handleBpmChange(metronomeBpm - 5)}
                      className="px-3 py-1 rounded-lg border border-neutral-slate-300 text-xs font-bold hover:bg-neutral-slate-100 text-neutral-slate-800"
                    >
                      -5
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBpmChange(metronomeBpm - 1)}
                      className="px-3 py-1 rounded-lg border border-neutral-slate-300 text-xs font-bold hover:bg-neutral-slate-100 text-neutral-slate-800"
                    >
                      -1
                    </button>
                    <button
                      id="btn-toggle-metronome"
                      type="button"
                      onClick={toggleMetronome}
                      className={`px-6 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-sm transition-all ${
                        isMetronomePlaying
                          ? "bg-amber-800 text-white hover:bg-amber-900"
                          : "bg-brand-blue-600 text-white hover:bg-brand-blue-700"
                      }`}
                    >
                      {isMetronomePlaying ? (
                        <>
                          <Square className="h-4 w-4 fill-current" />
                          <span>Stop</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 fill-current" />
                          <span>Start Metronome</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBpmChange(metronomeBpm + 1)}
                      className="px-3 py-1 rounded-lg border border-neutral-slate-300 text-xs font-bold hover:bg-neutral-slate-100 text-neutral-slate-800"
                    >
                      +1
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBpmChange(metronomeBpm + 5)}
                      className="px-3 py-1 rounded-lg border border-neutral-slate-300 text-xs font-bold hover:bg-neutral-slate-100 text-neutral-slate-800"
                    >
                      +5
                    </button>
                  </div>
                </div>
              </div>

              {/* Log Practice Session Form */}
              <div className="lg:col-span-2 rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PlusCircle className="h-5 w-5 text-brand-blue-600" />
                    <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                      Record Practice Rehearsal (MU-03)
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-slate-500">Student: Chioma Adeleke</span>
                </div>

                {logSuccessMessage && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                    <span>{logSuccessMessage}</span>
                  </div>
                )}

                <form onSubmit={handleLogPractice} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="select-instrument" className="font-bold text-neutral-slate-800">
                        Instrument
                      </label>
                      <select
                        id="select-instrument"
                        value={newInstrument}
                        onChange={(e) => setNewInstrument(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900 font-medium"
                      >
                        <option value="Piano">Piano</option>
                        <option value="Voice">Voice / Vocal</option>
                        <option value="Violin">Violin</option>
                        <option value="Guitar">Acoustic Guitar</option>
                        <option value="Theory">Music Theory</option>
                        <option value="Drums">Drums & Percussion</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="input-duration" className="font-bold text-neutral-slate-800">
                        Duration (Minutes)
                      </label>
                      <input
                        id="input-duration"
                        type="number"
                        min="5"
                        max="300"
                        value={newDuration}
                        onChange={(e) => setNewDuration(Number(e.target.value))}
                        className="w-full p-2.5 rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900 font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="input-tempo" className="font-bold text-neutral-slate-800">
                        Rehearsal Tempo (BPM)
                      </label>
                      <input
                        id="input-tempo"
                        type="number"
                        min="40"
                        max="240"
                        value={newTempo}
                        onChange={(e) => setNewTempo(Number(e.target.value))}
                        className="w-full p-2.5 rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="input-pieces" className="font-bold text-neutral-slate-800">
                      Pieces, Scales & Exercises Rehearsed
                    </label>
                    <input
                      id="input-pieces"
                      type="text"
                      placeholder="e.g. Bach Minuet in G major (bars 1-16), Czerny Op. 599 No. 12"
                      value={newPieces}
                      onChange={(e) => setNewPieces(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="input-notes" className="font-bold text-neutral-slate-800">
                      Qualitative Practice Notes & Technique Reflection
                    </label>
                    <textarea
                      id="input-notes"
                      rows={3}
                      placeholder="Finger agility, touch, pitch accuracy, breathing diaphragm support..."
                      value={newNotes}
                      onChange={(e) => setNewNotes(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-slate-300 bg-white text-neutral-slate-900 font-medium"
                    />
                  </div>

                  <Button
                    id="btn-submit-practice-log"
                    type="submit"
                    variant="primary"
                    disabled={isLogging || !newPieces.trim()}
                    className="w-full py-2.5 font-bold text-xs bg-brand-blue-600 hover:bg-brand-blue-700 text-white"
                  >
                    {isLogging ? "Saving Practice Log..." : "Log Practice Session to Guardian Record"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Practice History Table */}
            <div className="rounded-2xl border border-neutral-slate-200 bg-white p-6 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-base text-neutral-slate-900">
                Recent Practice Rehearsals ({practiceLogs.length})
              </h3>

              <div
                className="overflow-x-auto"
                tabIndex={0}
                aria-label="Recent Practice Rehearsals Table"
                role="region"
              >
                <table className="w-full text-left text-xs text-neutral-slate-700">
                  <thead className="bg-neutral-slate-50 border-b border-neutral-slate-200 text-neutral-slate-900 font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Instrument</th>
                      <th className="py-2.5 px-3">Duration</th>
                      <th className="py-2.5 px-3">Tempo (BPM)</th>
                      <th className="py-2.5 px-3">Pieces Rehearsed</th>
                      <th className="py-2.5 px-3">Technique Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-slate-100">
                    {practiceLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-neutral-slate-50/50">
                        <td className="py-3 px-3 whitespace-nowrap font-medium text-neutral-slate-600">
                          {new Date(log.practicedAt).toLocaleDateString("en-NG", {
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap font-bold text-neutral-slate-900">
                          {log.instrument}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded font-bold bg-amber-100 text-amber-950 border border-amber-300">
                            {log.durationMinutes} mins
                          </span>
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap font-mono font-bold text-neutral-slate-800">
                          {log.tempoBpm ? `${log.tempoBpm} BPM` : "—"}
                        </td>
                        <td className="py-3 px-3 font-semibold text-neutral-slate-900 max-w-xs truncate">
                          {log.piecesPracticed}
                        </td>
                        <td className="py-3 px-3 text-neutral-slate-600 max-w-sm truncate">
                          {log.notes || "Standard drill completion."}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Dynamic Syllabus & Course Outline (MU-05) */}
        {activeTab === "syllabus" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-xl font-bold font-heading text-neutral-slate-900">
                ABRSM & MUSON Theory Mastery Curriculum (MU-05)
              </h2>
              <p className="text-xs text-neutral-slate-600">
                Course: <span className="font-bold text-neutral-slate-900">ABRSM & MUSON Music Theory Mastery (Grades 1–5)</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-neutral-slate-200">
                <CardHeader>
                  <Badge variant="neutral" className="w-fit bg-amber-100 text-amber-950 border border-amber-300 text-[10px]">
                    Module 1
                  </Badge>
                  <CardTitle className="text-base font-bold text-neutral-slate-900">
                    Stave Notation, Time Signatures & Major/Minor Scales
                  </CardTitle>
                  <CardDescription className="text-xs text-neutral-slate-600">
                    Foundation drills covering clefs, ledger lines, rhythmic pulse, and the circle of fifths.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neutral-slate-900">Lesson 1: Treble & Bass Clefs and Pitch</p>
                      <p className="text-[11px] text-neutral-slate-500">45 minutes • Free Preview Available</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Preview</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neutral-slate-900">Lesson 2: Simple & Compound Time Signatures</p>
                      <p className="text-[11px] text-neutral-slate-500">45 minutes • Metronome Exercises</p>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-slate-600 bg-neutral-slate-200 px-2 py-0.5 rounded">Core</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neutral-slate-900">Lesson 3: Major & Minor Scales (Harmonic & Melodic)</p>
                      <p className="text-[11px] text-neutral-slate-500">50 minutes • Interactive Score Drills</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Preview</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neutral-slate-200">
                <CardHeader>
                  <Badge variant="neutral" className="w-fit bg-amber-100 text-amber-950 border border-amber-300 text-[10px]">
                    Module 2
                  </Badge>
                  <CardTitle className="text-base font-bold text-neutral-slate-900">
                    Intervals, Chords, Cadences & Aural Perception
                  </CardTitle>
                  <CardDescription className="text-xs text-neutral-slate-600">
                    Advanced harmonic hearing, chord inversion, perfect/plagal cadences, and exam dictation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neutral-slate-900">Lesson 4: Melodic & Harmonic Intervals</p>
                      <p className="text-[11px] text-neutral-slate-500">40 minutes • Ear Training Audio Included</p>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-slate-600 bg-neutral-slate-200 px-2 py-0.5 rounded">Core</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neutral-slate-900">Lesson 5: Tonic Triads & Cadence Recognition</p>
                      <p className="text-[11px] text-neutral-slate-500">55 minutes • Chord Analysis</p>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-slate-600 bg-neutral-slate-200 px-2 py-0.5 rounded">Core</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-slate-50 border border-neutral-slate-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-neutral-slate-900">Lesson 6: Sight Singing & Rhythmic Dictation</p>
                      <p className="text-[11px] text-neutral-slate-500">50 minutes • ABRSM Specimen Practice</p>
                    </div>
                    <span className="text-[10px] font-bold text-neutral-slate-600 bg-neutral-slate-200 px-2 py-0.5 rounded">Exam Ready</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

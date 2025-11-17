import { Stethoscope, Shield, QrCode, Bell } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-rose-50 via-sky-50 to-emerald-50 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            MaterGui
            <span className="block text-sky-600">Suivi national de la santé maternelle</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Une plateforme unifiée pour l'enrôlement, le suivi prénatal et postnatal,
            l'analyse en temps réel et la prise de décision sanitaire.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="px-5 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow hover:bg-sky-700 transition">
              Voir la démo
            </a>
            <a href="#features" className="px-5 py-3 rounded-lg bg-white text-gray-800 font-semibold shadow border hover:bg-gray-50 transition">
              Fonctionnalités
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Stethoscope className="w-5 h-5 text-emerald-600"/> Dossier médical numérique</div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-emerald-600"/> Sécurité & rôles</div>
            <div className="flex items-center gap-2"><QrCode className="w-5 h-5 text-emerald-600"/> Carte digitale QR</div>
            <div className="flex items-center gap-2"><Bell className="w-5 h-5 text-emerald-600"/> Alertes & rappels</div>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur rounded-2xl shadow-xl border p-6">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop" alt="Maternal care" className="rounded-lg object-cover w-full h-72"/>
        </div>
      </div>
    </section>
  );
}

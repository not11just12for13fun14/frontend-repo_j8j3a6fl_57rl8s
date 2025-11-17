import { Fingerprint, Activity, CalendarCheck, LineChart, ShieldCheck, Smartphone } from "lucide-react";

export default function Features(){
  const items = [
    {icon: Fingerprint, title: "Biométrie", desc: "Enrôlement visage/empreinte et authentification sécurisée."},
    {icon: Activity, title: "Suivi clinique", desc: "Historique des consultations, constantes et prescriptions."},
    {icon: CalendarCheck, title: "Rendez-vous", desc: "Planification, rappels et notifications automatiques."},
    {icon: LineChart, title: "Tableau de bord", desc: "Indicateurs nationaux en temps réel pour la décision."},
    {icon: ShieldCheck, title: "Sécurité", desc: "RBAC, journalisation, chiffrement et traçabilité."},
    {icon: Smartphone, title: "Multi-plateforme", desc: "Web, mobile, tablette et PWA pour l'accès terrain."},
  ];
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Fonctionnalités clés</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                <Icon className="w-5 h-5"/>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

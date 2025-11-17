import { useEffect, useState } from "react";

export default function Demo(){
  const [status, setStatus] = useState(null);
  const [patients, setPatients] = useState([]);
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function load(){
      try{
        const health = await fetch(`${backend}/test`).then(r=>r.json());
        setStatus(health);
        const list = await fetch(`${backend}/patients`).then(r=>r.json());
        setPatients(Array.isArray(list) ? list : []);
      }catch(e){
        setStatus({ backend: "❌", error: String(e) });
      }
    }
    if(backend){ load(); }
  }, [backend]);

  return (
    <section id="demo" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Démo en direct</h2>
        {!backend && (
          <p className="mt-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3">
            Configurez l'URL du backend via VITE_BACKEND_URL pour activer la démo.
          </p>
        )}
        {backend && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border shadow-sm">
              <h3 className="font-semibold text-gray-900">Statut du backend</h3>
              <pre className="mt-2 text-xs bg-gray-50 p-3 rounded overflow-auto">{JSON.stringify(status, null, 2)}</pre>
            </div>
            <div className="p-5 bg-white rounded-xl border shadow-sm">
              <h3 className="font-semibold text-gray-900">Patients (extraits)</h3>
              <pre className="mt-2 text-xs bg-gray-50 p-3 rounded overflow-auto">{JSON.stringify(patients.slice(0,5), null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

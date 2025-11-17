export default function Footer(){
  return (
    <footer className="py-8 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} MaterGui · République de Guinée</p>
        <div className="flex gap-4">
          <a href="#features" className="hover:text-gray-900">Fonctionnalités</a>
          <a href="#demo" className="hover:text-gray-900">Démo</a>
          <a href="#" className="hover:text-gray-900">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

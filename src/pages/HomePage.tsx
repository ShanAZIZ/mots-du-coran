import { Link } from "react-router";

export function HomePage() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center p-6">
      <div className="text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4">
          Révise le Vocabulaire du Coran
        </h1>
        <p className="text-lg opacity-80 mb-8">
          Accède rapidement aux mots essentiels et entraîne-toi avec des quiz
          adaptés.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <Link to="/mots" className="btn btn-primary w-full text-lg">
            📘 Accéder aux mots
          </Link>
          <Link to="/quizz" className="btn btn-secondary w-full text-lg">
            📝 Faire un quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

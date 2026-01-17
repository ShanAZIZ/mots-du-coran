import { Link } from "react-router";

export function HomePage() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col justify-center items-center p-6">
      <div className="text-center max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4">
          Le monde du Qur'an
        </h1>
        <p className="text-lg opacity-80 mb-8">
          Accède rapidement aux coran et aux mots essentiels et entraîne-toi avec des quiz
          adaptés.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <Link to="/coran" className="btn btn-accent w-full text-lg">
            📖 Le Saint Coran (Bêta)
          </Link>
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

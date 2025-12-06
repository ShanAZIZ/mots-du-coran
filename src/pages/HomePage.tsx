import { Link } from "react-router";

export function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Apprenez 80% des mots du Qur&apos;an
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/mots" className="btn btn-primary w-48 text-center">
          Mots :)
        </Link>
        <Link to="/quizz" className="btn btn-secondary w-48 text-center">
          Quizz !
        </Link>
      </div>
    </main>
  );
}

import { Link } from "react-router"

export interface QuizEndCardProps {
    score: number,
    totalQuestions: number,
    
}

export const QuizEndCard = (props: QuizEndCardProps) => {
    return (
        <div className="card shadow-xl max-w-md w-full mx-4">
          <div className="card-body text-center p-6 md:p-8">
            <h2 className="card-title text-2xl md:text-3xl font-bold justify-center mb-4">
              Quiz terminé !
            </h2>
            <p className="text-5xl md:text-6xl mb-6">🎉</p>
            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Votre score</div>
                <div className="stat-value text-primary">
                  {props.score} / {props.totalQuestions}
                </div>
                <div className="stat-desc">
                  {props.score === props.totalQuestions
                    ? "Parfait !"
                    : props.score >= props.totalQuestions / 2
                      ? "Bien joué !"
                      : "Continuez à pratiquer !"}
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mt-6">
              <Link to={"/"} className="btn btn-primary btn-lg">
                Terminer
              </Link>
            </div>
          </div>
        </div>
    )

}
type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};
export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="form-control w-full max-w-2xl">
      <div className="input-group">
        <span className="bg-base-200">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className="input input-bordered w-full"
          placeholder="Rechercher un mot en arabe, une traduction, un chapitre..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
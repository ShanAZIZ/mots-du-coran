type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};
export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="search"
        className="input input-bordered w-full max-w-md"
        placeholder="Rechercher un mot ou une traduction…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
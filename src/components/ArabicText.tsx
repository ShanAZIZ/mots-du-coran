export const ArabicText = ({ text }: { text: string }) => {
  return (
    <span dir="rtl" className="font-uthman-taha">
      {text}
    </span>
  );
};

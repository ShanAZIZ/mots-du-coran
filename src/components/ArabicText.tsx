export const ArabicText = ({ text }: { text: string }) => {
  return (
    <span dir="rtl" lang="ar" className="font-amiri-quran">
      {text}
    </span>
  );
};

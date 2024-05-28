export function loaderLine({ progress = 0 }) {
  return (
    <div className="w-full h-[12px] bg-gry-50">
      <div
        className="h-full bg-bl-100"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
}

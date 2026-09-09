export default function LazySection({ intrinsicHeight = "800px", children }) {
  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: intrinsicHeight,
      }}
    >
      {children}
    </div>
  );
}
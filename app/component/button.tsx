export default function Button({ disabled, children, className }: any) {
  return (
    <button type="button" disabled={disabled} className={className}>
      {children}
    </button>
  );
}

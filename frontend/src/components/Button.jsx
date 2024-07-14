function Button({
  children,
  btnPrimary,
  btnSecondary,
  btnTertiary,
  btnDanger,
  extraClass,
  ...rest
}) {
  return btnPrimary ? (
    <button
      {...rest}
      className={`px-4 py-2 bg-purple-600 text-white text-center text-xl rounded-md hover:bg-purple-800 active:translate-y-1 transition-all duration-100 ${extraClass}`}
    >
      {children}
    </button>
  ) : btnSecondary ? (
    <button
      {...rest}
      className={`px-4 py-2 bg-blue-600 text-white text-center text-xl rounded-md hover:to-blue-800 active:translate-y-1 transition-all duration-100 ${extraClass}`}
    >
      {children}
    </button>
  ) : btnTertiary ? (
    <button
      {...rest}
      className={`px-4 py-2 bg-green-600 text-white text-center text-xl rounded-md hover:bg-green-800 active:translate-y-1 transition-all duration-100 ${extraClass}`}
    >
      {children}
    </button>
  ) : btnDanger ? (
    <button
      {...rest}
      className={`px-4 py-2 bg-red-600 text-white text-center text-xl rounded-md hover:bg-red-800 active:translate-y-1 transition-all duration-100 ${extraClass}`}
    >
      {children}
    </button>
  ) : (
    <button
      {...rest}
      className={`px-4 py-2 text-center rounded-md ${extraClass}`}
    >
      {children}
    </button>
  );
}

export default Button;

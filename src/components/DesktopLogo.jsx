const DesktopLogo = () => {
  return (
    <div className="relative">
      <svg
        width="87"
        height="30"
        viewBox="0 0 87 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute max-sm:hidden top-6 left-[-2px]"
      >
        <path
          d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646"
          stroke="#605BFF"
          stroke-width="6"
        />
      </svg>
      <svg
        width="81"
        height="81"
        viewBox="0 0 81 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-sm:hidden"
      >
        <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
      </svg>
    </div>
  );
};

export default DesktopLogo;

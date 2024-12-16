const icons = [
  {
    id: 'light-mode-toggle',
    viewBox: '1 1 22 22',
    drawPath: [
      'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z',
    ],
  },
  {
    id: 'dark-mode-toggle',
    viewBox: '2.5 2.5 19 19',
    drawPath: [
      'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1',
    ],
  },
] as const;

export function ThemeToggle() {
  const padding = 'calc(var(--page-gutter) / 2)';
  const position = {
    position: 'absolute' as const,
    right: padding,
    top: padding,
  };
  return (
    <label
      aria-hidden={true}
      data-name={ThemeToggle.name}
      htmlFor="theme-toggle"
      style={{
        cursor: 'pointer',
        zIndex: 300,
        ...position,
      }}
      tabIndex={0}
    >
      {icons.map(({ id, drawPath, viewBox }) => (
        <svg
          className="icon"
          fill="currentColor"
          id={id}
          key={id}
          role="button"
          stroke="none"
          strokeWidth="0.5px"
          style={position}
          viewBox={viewBox}
        >
          {drawPath.map((d, index) => (
            <path d={d} key={index} />
          ))}
        </svg>
      ))}
    </label>
  );
}

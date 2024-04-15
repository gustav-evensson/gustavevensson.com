export default function GeIcon({ color = "currentColor", size = 24 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 19H34V26C34 28 35 29 37 29H64V33H0V29H27C29 29 30 28 30 26V19H0V7C0 3 3 0 7 0L27 0C31 0 32 2.5 32 2.5C32 2.5 33 0 37 0H57C61 0 64 3 64 7V19ZM4 15H30V7C30 5 29 4 27 4H7C5 4 4 5 4 7V15ZM60 15H34V7C34 5 35 4 37 4H57C59 4 60 5 60 7V15Z"
        fill={color}
      />
    </svg>
  );
}

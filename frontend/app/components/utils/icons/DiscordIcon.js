export default function DiscordIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19.54 5.24A16.3 16.3 0 0 0 15.5 4l-.5 1.03a15.1 15.1 0 0 0-6 0L8.5 4a16.3 16.3 0 0 0-4.04 1.24C1.9 9.1 1.2 12.9 1.55 16.65a16.4 16.4 0 0 0 4.95 2.5l1.2-1.65c-.66-.25-1.3-.56-1.9-.93l.47-.36c3.67 1.72 7.64 1.72 11.27 0l.48.36c-.6.37-1.24.68-1.9.93l1.2 1.65a16.4 16.4 0 0 0 4.95-2.5c.4-4.36-.68-8.12-2.73-11.41Z"
        fill="currentColor"
      />

      <circle
        cx="8.8"
        cy="12.5"
        r="1.3"
        fill="black"
      />

      <circle
        cx="15.2"
        cy="12.5"
        r="1.3"
        fill="black"
      />
    </svg>
  );
}
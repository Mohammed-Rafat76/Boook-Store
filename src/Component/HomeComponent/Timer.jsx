export default function Timer() {
  return (
    <div>
      {/* For TSX uncomment the commented types below */}
      <span className="countdown font-bold text-[26px] text-[#222222]">
        <span
          style={{ "--value": 30 } /* as React.CSSProperties */}
          aria-live="polite"
          aria-label="hours"
        >
          30
        </span>
        :
        <span
          style={{ "--value": 0 ,"--digits": 2 } /* as React.CSSProperties */}
          aria-live="polite"
          aria-label="minutes"
        >
          0
        </span>
        :
        <span
          style={{ "--value": 0, "--digits": 2 } /* as React.CSSProperties */}
          aria-live="polite"
          aria-label="seconds"
        >
          0
        </span>
      </span>
    </div>
  );
}

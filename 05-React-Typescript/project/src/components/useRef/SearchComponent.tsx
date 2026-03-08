import { useEffect, useRef } from "react";

export const SearchComponent = () => {
  //   const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // (inputRef.current as HTMLInputElement).focus();
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

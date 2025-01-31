import { useCallback, useEffect } from "react";

export default function useKeyDown(
  callback: (key: string) => void,
  validKeys: string[]
) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (validKeys.includes(key)) {
        callback(key);
      }
    },
    [callback, validKeys]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyDown);
    };
  }, [handleKeyDown]);
}

import { useEffect, useState } from "react";

/**
 * Cycles through an array of words, typing and deleting each one.
 * No external dependency needed for this.
 */
export default function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1500 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 0);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? currentWord.slice(0, t.length - 1) : currentWord.slice(0, t.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

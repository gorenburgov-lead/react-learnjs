import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "../progress-bar/progress-bar";
import styles from "./scroll-bar.module.css";
interface Props {
  children: React.ReactNode;
}

export const ScrollBar = ({ children }: Props) => {
  const [progress, setProgress] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current;
    if (!div) return;

    const handleScroll = (event: Event) => {
      const { scrollTop, scrollHeight, clientHeight } =
        event.target as HTMLDivElement;
      setProgress((scrollTop * 100) / (scrollHeight - clientHeight));
    };

    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={divRef} className={styles.scrollbar}>
      <ProgressBar progress={progress} />
      {children}
    </div>
  );
};

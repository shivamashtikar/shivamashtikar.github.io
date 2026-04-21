import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Typewriter({ words }) {
  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <span>
      {text}
      <Cursor cursorStyle="|" />
    </span>
  );
}

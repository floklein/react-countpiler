import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const context = createContext<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  count2: number;
  setCount2: Dispatch<SetStateAction<number>>;
}>({
  count: 0,
  setCount: () => {},
  count2: 0,
  setCount2: () => {},
});

function Header() {
  console.log("Header", Math.random());

  const { count2 } = useContext(context);

  return (
    <header>
      <h1>Count 2: {count2}</h1>
    </header>
  );
}

function Footer({ increment }: { increment: () => void }) {
  console.log("Footer", Math.random());

  useEffect(() => {
    increment();
  }, [increment]);

  return (
    <footer>
      <h2>Footer</h2>
      <button onClick={increment}>Increment 1</button>
    </footer>
  );
}

export function App() {
  console.log("App", Math.random());

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  return (
    <context.Provider value={{ count, setCount, count2, setCount2 }}>
      <Header />
      <main>
        <p>Count 1: {count}</p>
        <p>Count 2: {count2}</p>
        <button onClick={increment}>Increment 1</button>
      </main>
      <Footer increment={increment} />
    </context.Provider>
  );
}

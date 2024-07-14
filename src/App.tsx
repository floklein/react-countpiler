import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const context = createContext<{
  count1: number;
  setCount1: Dispatch<SetStateAction<number>>;
  count2: number;
  setCount2: Dispatch<SetStateAction<number>>;
}>({
  count1: 0,
  setCount1: () => {},
  count2: 0,
  setCount2: () => {},
});

function Header() {
  console.log("Header", Math.random());

  const { count2 } = useContext(context);

  return (
    <header>
      <h1>Header - count2: {count2}</h1>
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
      <button onClick={increment}>count1++</button>
    </footer>
  );
}

export function App() {
  console.log("App", Math.random());

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment() {
    setCount1((c) => c + 1);
  }

  return (
    <context.Provider value={{ count1, setCount1, count2, setCount2 }}>
      <Header />
      <main>
        <p>
          count1: {count1} <button onClick={increment}>count1++</button>
        </p>
        <p>count2: {count2}</p>
      </main>
      <Footer increment={increment} />
    </context.Provider>
  );
}

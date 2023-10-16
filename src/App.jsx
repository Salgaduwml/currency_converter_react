function App() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/close-up-five-rows-coins_1150-17749.jpg?w=1060&t=st=1697432506~exp=1697433106~hmac=65eaad188b35b0f580bcedd7e54780cbc8b1059a3f7c5268bdd43d66228fb3d5)`,
      }}
    >
      <div className="w-full max-w-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] p-6 rounded backdrop-blur-lg">
        <h1 className="font-bold text-xl">Currency Converter</h1>
      </div>
    </div>
  );
}

export default App;

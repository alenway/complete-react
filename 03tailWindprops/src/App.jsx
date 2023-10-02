import Card from "./components/Card";

function App() {
  let myobj = {
    username: "nitin",
    age: 20,
  };

  const newarray = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        hello world
      </h1>
      <Card coding="coding" myobj={myobj} array={newarray} />
      <Card btnText="visit me" />
    </>
  );
}

export default App;

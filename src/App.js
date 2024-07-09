function Header() {
  return (<h1>Kirby's React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Kirby.</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content color="purple" text="This is my first React Application!" />
      <Content color="orange" text="Wish me luck..." />
      <Content color="blue" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
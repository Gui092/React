import './App.css'

// 2 - CSS de componente
import MyComponent from './components/MyComponent'

// 6 - CSS modules
import Title from './components/Title';

function App() {
  // 4 - CSS inline dinâmico
  const n = 15;

  // 5 - classes dinâmicas
  const redTitle = true;

  return (
    <>
    <div className='App'>
      {/* 1 - css global */}
      <h1 className='title'>CSS no React</h1>

      {/* 2 - CSS de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>

      {/* 3 - inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>
        Este elemento tem estilos inline
      </p>

    {/* 4 - inline style dinâmico */}
    <h2 style={n > 10? {color: "purple"} : {color: "magenta"}}>
      CSS dinâmico
    </h2>
    <h2 style={n > 20? {color: "purple"} : {color: "magenta"}}>
      CSS dinâmico 2
    </h2>

    {/* 5 - classes dinâmicas */}
    <h2 className={redTitle ? "red-title" : "title"}>
      Este título vai ter uma classe
    </h2>

    {/* 6 - CSS modules */}
    <Title />
    </div>
    </>
  )
}

export default App

// 4 - template expression

const TemplateExpression = () => {
    const name = "Guilherme";

    const data = {
        age: 33,
        job: "Programador",
    }

  return (
    <div>TemplateExpression
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo, {name}</h3>
        <p>Sua idade é {data.age} anos e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression
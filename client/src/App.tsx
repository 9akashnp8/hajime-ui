import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState("");

  function stringToElement(stringElment: string) {
    const template = document.createElement('template');
    template.innerHTML = stringElment.trim();
    return template.content.firstChild;
  }

  function replaceElement(className: string, newElement: Node) {
    const originalElement = document.getElementsByClassName(className)[0];
    originalElement.replaceWith(newElement)
  }

  async function getModifiedElement(event: React.FormEvent<HTMLElement>) {
    event.preventDefault()
    const request = await fetch("http://localhost:8000/modify?mock=True", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ userInput })
    })
    const response = await request.json()
    const newElement = stringToElement(response['result']);
    replaceElement('generatedButton', newElement!)
  }

  async function generateElement(event: React.FormEvent<HTMLElement>) {
    event.preventDefault()
    const request = await fetch("http://localhost:8000/generate?mock=True", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ prompt: userInput })
    })
    const response = await request.json()
    console.log(response)
    const generatedELement = stringToElement(response['result'])
    document.getElementById('canvas')?.appendChild(generatedELement!)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <button className="generatedButton">
          Created Element
        </button>
        <form onSubmit={getModifiedElement}>
          <input type="text" id="userInput" name="userInput" value={userInput}  onChange={(e) => setUserInput(e.target.value)} />
          <button type="submit" >Modify</button>
        </form>
        <form onSubmit={generateElement}>
          <input type="text" name="newElement" id="newElement" value={userInput}  onChange={(e) => setUserInput(e.target.value)} />
          <button className="bg-slate-400 p-2 rounded hover:bg-slate-500">Generate</button>
        </form>
        <div id="canvas">
          
        </div>
      </div>
    </>
  )
}

export default App

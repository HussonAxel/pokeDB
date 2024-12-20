import { createLazyFileRoute } from '@tanstack/react-router'


export const Route = createLazyFileRoute('/')({
  component: App,
})

function App() {

  return (
    <>
      <h1>I'm working on it </h1>
    </>
  )
}

export default App

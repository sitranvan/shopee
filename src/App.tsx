import useRoutesElement from './routes/useRoutesElement'

function App() {
    const elementRoutes = useRoutesElement()
    return <main>{elementRoutes}</main>
}

export default App

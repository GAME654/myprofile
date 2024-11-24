  import LeftSection from "./sections/LeftSection"
import RightSection from "./sections/RightSection"


function App() {
  return (
    <div className='mt-14 mx-auto max-w-6xl grid lg:grid-cols-[30%_70%]'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default App

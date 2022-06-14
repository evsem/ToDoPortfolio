import React from "react"
import "antd/dist/antd.css"
import st from "./App.module.scss"

const App = () => {
  return (
    <div className={st.window}>
      <div className={st.box}>
        <header className={st.header}>
          <div className={st.header__container}></div>
        </header>
        <main className={st.main}>
          <div className={st.main__container}></div>
        </main>
      </div>
    </div>
  )
}

export default App

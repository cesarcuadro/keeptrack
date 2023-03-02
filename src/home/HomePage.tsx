import React from 'react'

const HomePage = () => {
  return (
    <>
    <div style={{
      backgroundImage: "url(assets/bgDream.png)",
      backgroundRepeat: "no-repeat",
        backgroundSize: "100%, 100%",
        objectFit: "cover",
        height: "100%",
        width: "100%",
        paddingTop: 6,
        textAlign: "center",
      }}>
      <h2>Welcome to Acme Co</h2>
      <p>Paragraph</p>
      </div>
    </>
  )
}

export default HomePage
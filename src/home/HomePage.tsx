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
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "10px",
          border: "solid",
          margin: '10px',
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}>
          <h2>Welcome to Acme Co</h2>
      </div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "10px",
          border: "solid",
          margin: '10px',
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          }}>
            <h3>About Us</h3>
          <p style={{margin: "50px"}}>Acme Co is a project management company specializing in commercial real estate. Our team of experienced professionals provides comprehensive project management services, including planning, budgeting, scheduling, and oversight, to ensure successful and timely completion of your commercial real estate projects. With a focus on quality, efficiency, and client satisfaction, we are committed to delivering exceptional results that meet your business objectives. Let us help you bring your commercial real estate projects to life.</p>
      </div>
      </div>
    </>
  )
}

export default HomePage
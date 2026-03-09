function Login() {
  return (
    <div className="container">

      <h2 className="title">Login</h2>

      <div className="form">
        <input type="email" placeholder="Enter Email" className="input"/>
        <br />

        <input type="password" placeholder="Enter Password" className="input"/>
        <br />

        <button className="btn">Login</button>
      </div>

    </div>
  );
}

export default Login;
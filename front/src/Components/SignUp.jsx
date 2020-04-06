import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond"
    };
  }

  updateEmailField = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    console.log(JSON.stringify(this.state, 1, 1));
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.updateEmailField}
          />
          <input type="password" name="password" value={this.state.password} />
          <input type="text" name="lastname" value={this.state.lastname} />
          <input type="text" name="name" value={this.state.name} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;

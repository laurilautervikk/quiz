<script>
  import axios from "axios";

  let email;
  let password;
  let message;

  async function loginUser() {
    console.log("email ", email);
    console.log("password ", password);

    try {
      const config = {
        headers: {
          header: "application/json",
        },
      };

      const data = {
        email: email,
        password: password,
      };

      const response = await axios.post("users/login", data, config);
      const responseData = response.data;
      message = responseData.message;
      console.log("data ", responseData.message);
    } catch (error) {
      message = error.response.data.error;
      console.log("error ", error);
    }
  }
</script>

<div class="row-container">
  <div class="column-container">
    <div class="login-form">
      <h2>Login here</h2>
      <form action="" method="post">
        <div class="container">
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            bind:value={email}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            bind:value={password}
            required
          />
          <button type="button" id="login-button" on:click={loginUser}
            >Login</button
          >
          <p>
            {#if message}
              {message}
            {/if}
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .row-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
  }

  .column-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-form {
    max-width: 300px;
  }
  /* Bordered form */
  /* form {
  border: 1px solid #f1f1f1;
  border-radius: 9px;
} */

  /* Full-width inputs */
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 9px;
  }

  /* Set a style for all buttons */
  button {
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 9px;
  }

  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }

  /* Add padding to containers */
  .container {
    padding: 16px;
  }
</style>

<script>
  import axios from "axios";

  let publicData = "textarea for publicdata";
  let userData = "textarea for userdata";
  let adminData = "textarea for admindata";

  async function getPublicData() {
    try {
      const response = await axios.get("users/publicdata");
      const responseData = response.data;
      publicData = responseData.message.data;
      console.log("data ", responseData.message.alert);
    } catch (error) {
      publicData = error.response.data.error;
      console.log("error ", error);
    }
  }

  async function getUserData() {
    try {
      const response = await axios.get("users/userdata");
      const responseData = response.data;
      userData = responseData.message.data;
      console.log("data ", responseData.message.alert);
    } catch (error) {
      userData = error.response.data.error;
      console.log("error ", error);
    }
  }
  async function getAdminData() {
    try {
      const response = await axios.get("users/admindata");
      const responseData = response.data;
      adminData = responseData.message.data;
      console.log("data ", responseData.message.alert);
    } catch (error) {
      adminData = error.response.data.error;
      console.log("error ", error);
    }
  }

  getPublicData();
  getUserData();
  getAdminData();
</script>

<div class="row-container">
  <div class="column-container">
    <h3>publicData</h3>
    <p>{publicData}</p>
    <h3>userData</h3>
    <p>{userData}</p>
    <h3>adminData</h3>
    <p>{adminData}</p>
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
</style>

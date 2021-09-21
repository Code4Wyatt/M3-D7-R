let names = []
  
window.onload = () => {
  fetchUsers()
}

async function fetchUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    // wait until the request completes
    console.log(data);
    console.log(data[2].address.street, data[2].address.suite, data[2].address.city,"(", data[2].address.zipcode,")")
    const table = document.querySelector('.table')
    table.innerHTML = ""
    data.forEach(user => {
      let userRow = document.createElement("tr")
      userRow = `<tr>
                  <th scope="row"></th>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} </td>
                </tr>`
      table.innerHTML += userRow
   })
  } catch(err) {
    console.log(err);
  }
}

function search(query) {
  const field = document.querySelector("select").value

  const filtered = usersList.filter(user => user[field].includes(query))
  



  async function fetchUsers() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users")
      let data = await response.json()
      // wait until the request completes
      console.log(data);
      if (query.length < 3) {
        filteredNames = names
        filteredNames()
        return
      }
      filteredNames = users.filter((user) => {
        user.name.toLowerCase().includes(query, toLowerCase())
      });
    } catch(err) {
      console.log(err)
    }
  }

 
  const url = "https://jsonplaceholder.typicode.com/users";

  const apiData = async () => {
    let fetchData = await fetch(url)
    let data = await fetchData.json()
    console.log("data:", data)
    //let apidata = data.data;
    let api = data;

    handleData(api)
    api.forEach((element) => {
      console.log(element.username)
    });
  };

  let selector = document.querySelector("#inputData")
  let button = document.getElementById("submit")
  const handleData = (data) => {
    data.forEach((element) => {
      button.addEventListener("click", () => {
        let userData = document.getElementById("userData");
        let div = document.createElement("div")
        if (selector.value === "name") {
          div.innerHTML = `<li>${element.name}</li>`;
          userData.appendChild(div)
        } else if (selector.value == "email") {
          div.innerText = ""
          div.innerHTML = `<li>${element.email}</li>`;
          userData.appendChild(div)
        } else if (selector.value == "username") {
          let div = document.createElement("div")

          div.innerHTML = `<li>${element.fullname}</li>`
          userData.appendChild(div)
        } else {
          div.innerHTML = `<li>Please enter Valid Data</li>`
          userData.appendChild(div)
        }
        console.log("inputValue:", selector.value)
      });
    });
  };
  apiData()
}

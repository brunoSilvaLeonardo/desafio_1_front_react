


async function createContact(contact) {
  console.log(contact);
  const conexao = await fetch("http://ec2-52-91-5-122.compute-1.amazonaws.com:8000/contact/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(contact)
  }).then((res) => {
    console.log(res);
  }).catch((error) => {
    console.log(error);
  });

}


export const apiConfig = {
  createContact
}
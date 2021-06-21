import { useAPI } from "../hooks/useApi";
const { post } = useAPI();

export async function sendForm(name, surname, adress) {
  try {
    let data = await post({
      endpoint: "Form",
      name,
      surname,
      adress,
    });
    //dummy data for test endpoint
    if (!data) {
      data = {};
      data["status"] = "1";
    }
    return data;
  } catch (err) {
    return err;
  }
}

import { createPost } from "../services/linkedin";
import { generateAuth } from "../services/pupp";
import { getLocalToken } from "./getLocalToken";

export const startProcess = () => {
  const tokenData = getLocalToken();

  if (tokenData?.access_token) {
    const tokenCreatedData = new Date(tokenData.created_at);
    const expireDate = new Date(
      tokenCreatedData.getTime() + Number(tokenData.expires_in)
    );

    console.log(expireDate < new Date());

    if (expireDate < new Date()) {
      const description = "Teste da regra";

      createPost(description, tokenData?.access_token);
    }
  } else {
    generateAuth()
      .then((good) => {
        startProcess();
      })
      .catch((err) => console.log(err));
  }
};

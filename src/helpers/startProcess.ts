import { generateDescription } from "../services/gpt3";
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

    if (expireDate < new Date()) {
      generateDescription(
        "a importancia da desacoplagem de dependencias nos projetos de forma resumida"
      )
        .then((response) => {
          const { data } = response || {};
          const { choices } = data || {};
          const { text } = choices[0] || {};
          let description = text.replace("\\n", "");
          description +=
            " Texto gerado através da integração linkedin + chatGpt";

          createPost(description, tokenData?.access_token);
        })
        .catch((err) => console.log("aqui"));
    }
  } else {
    generateAuth()
      .then((good) => {
        startProcess();
      })
      .catch((err) => console.log(err));
  }
};

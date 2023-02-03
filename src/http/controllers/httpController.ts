import { Request, Response, request, response } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { saveToken } from "../helpers/saveToken";
import { linkedinAuth } from "../../services/linkedin";

dotenv.config();
const env = process.env;

export const getAccessToken = async (req: Request, res: Response) => {
  const clientId = env.CLIENT_ID;
  const clientPass = env.CLIENT_SECRET;
  const redirectUri = `http://localhost:${env.PORT}/callback`;

  try {
    const code = req.query?.code;

    const accessToken = await linkedinAuth.post(
      `/accessToken?code=${code}&grant_type=authorization_code&client_id=${clientId}&client_secret=${clientPass}&redirect_uri=${redirectUri}`
    );
    
    res.sendStatus(200);
    saveToken(accessToken.data);
    return accessToken;
  } catch (err) {
    console.log(err);
  }
};

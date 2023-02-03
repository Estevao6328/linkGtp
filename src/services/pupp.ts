import pupp from "puppeteer";

const env = process.env;

export const generateAuth = async () => {
  const email = env.EMAIL || "";
  const pass = env.PASS || "";
  const redirectUri = "http://localhost:3000/callback";
  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${env.CLIENT_ID}&redirect_uri=${redirectUri}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;

  try {
    const browser = await pupp.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.type("#username", email);
    await page.type("#password", pass);
    await page.click(
      "#app__container > main > div.flavor > form > div.login__form_action_container.login__form_action_container--multiple-actions > button"
    );

    await page.waitForNavigation();

    try {
      await page.click("#oauth__auth-form__submit-btn");
      await page.waitForNavigation();
    } catch (err) {}
  } catch (err) {
    console.trace(err);
  }
};

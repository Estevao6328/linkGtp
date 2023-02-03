export class Post {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  getContent = () => {
    try {
      return {
        author: "urn:li:person:soBYKJ3NGf",
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: this.text,
            },
            shareMediaCategory: "NONE",
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      };
    } catch (err) {
      console.log(err);
    }
  };
}

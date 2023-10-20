import { rest } from "msw";

const baseURL = "https://react-api-p5-3222a1d91d69.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk:3,
        username:"Maya",
        email:"",
        first_name:"",
        last_name:"",
        profile_id:3,
        profile_image:
          "https://res.cloudinary.com/ddfiyhjgd/image/upload/v1/media/images/Screenshot_2023-07-29_at_19.01.06_msiqky"})
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
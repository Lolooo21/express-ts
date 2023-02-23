import express, { Request, Response } from "express";

import { client } from "../prisma";

export const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const user = await client.user.findFirst({
    where: {
      username: req.body.username,
    },
  });
  if (user) {
    const session = await client.session.create({
      data: {
        userId: user.id,
      },
    });
    res
      .cookie("sessionid", session.id, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json(user);
  } else {
    res.json({ message: "User doesn't exist..." });
  }
});

import { NextFunction, Request, Response } from "express";
import { client } from "../prisma";

export async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const sessionid = req.headers.cookie?.split("=")[1];
  if (sessionid) {
    const session = await client.session.findFirst({
      where: {
        id: sessionid,
      },
      include: {
        user: {
          select: {
            isAdmin: true,
          },
        },
      },
    });
    if (session) {
      next();
    } else {
      res.json({ message: "Not authenticated..." });
    }
  } else {
    res.json({ message: "Not authenticated..." });
  }
}

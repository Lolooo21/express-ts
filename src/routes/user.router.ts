import express from "express";
import { UserController } from "../controllers/user.controller";
import { isAuthenticated } from "../middlewares/session.middleware";

export const router = express.Router();

const userController = new UserController();

router.get("/", userController.getUsers);

router.get("/:id",  userController.getUserById);

router.post("/",  userController.createUser);

router.put("/:id",  userController.updateUser);

router.delete("/:id",userController.deleteUser);

router.put("/:id/toggle-status", userController.toggleStatus);

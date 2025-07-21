import { Router } from "express";
import { userController } from "../modules/user.module";

const UserRoutes = Router();

UserRoutes.post('/users', userController.createUser);
UserRoutes.get('/users/:id', userController.getUserById);
UserRoutes.put('/users/:id', userController.updateUser);
UserRoutes.delete('/users/:id', userController.deleteUser);

export { UserRoutes };
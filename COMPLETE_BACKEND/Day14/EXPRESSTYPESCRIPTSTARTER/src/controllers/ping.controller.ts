import type { Request, Response } from "express";

function pingController(req: Request, res: Response): void {
    res.status(200).json({ message: "pong" });
}

export default pingController;
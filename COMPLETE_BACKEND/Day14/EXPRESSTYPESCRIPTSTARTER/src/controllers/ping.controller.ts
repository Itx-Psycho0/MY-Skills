import type { Request, Response } from "express";

function pingController(req: Request, res: Response): void {
    console.log("req body", req.body);
    res.status(200).json({ message: "pong" });
}

export default pingController;
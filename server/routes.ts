import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

type UserRequest = Request & { user?: { id: string; username: string } };

// Middleware to check if user is authenticated
function authenticateUser(req: UserRequest, res: Response, next: NextFunction) {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: "Unauthorized - No user session" });
  }
  next();
}

// Middleware to authorize user access - ensures user can only access their own data
function authorizeUser(userId: string, req: UserRequest, res: Response): boolean {
  if (userId !== req.user?.id) {
    res.status(403).json({ error: "Forbidden - Cannot access other users data" });
    return false;
  }
  return true;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // All routes prefixed with /api
  
  // Example: Get current user's profile
  app.get("/api/user/profile", authenticateUser, (req: UserRequest, res: Response) => {
    const user = req.user!;
    res.json({ id: user.id, username: user.username });
  });

  // Example: Get specific user by ID - with authorization check
  app.get("/api/user/:userId", authenticateUser, (req: UserRequest, res: Response) => {
    const { userId } = req.params;
    
    // AUTHORIZATION CHECK - Prevent user impersonation
    if (!authorizeUser(userId, req, res)) {
      return;
    }

    // Proceed only if user is authorized
    res.json({ message: "User data access granted" });
  });

  // Note: Always include authorization checks like above for any route that:
  // - Accesses user-specific data
  // - Updates/deletes user data
  // - Returns sensitive user information
  // 
  // Pattern: Check if req.user.id === the userId being accessed

  return httpServer;
}

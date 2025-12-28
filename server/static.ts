import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static files with correct MIME types and aggressive caching
  app.use(express.static(distPath, {
    setHeaders: (res, filePath) => {
      res.removeHeader('Content-Disposition');
      
      if (filePath.endsWith('.html')) {
        // HTML files: no caching (always check for updates)
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Content-Disposition', 'inline');
      } else if (filePath.match(/\.[a-f0-9]{8}\.(js|css|woff2?|ttf|eot|svg|jpg|png|webp|gif)$/i)) {
        // Assets with hashes: long-term caching (1 year)
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        // Other files: moderate caching (1 day)
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    },
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Content-Disposition', 'inline');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

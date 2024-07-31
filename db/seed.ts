// seed.ts
import { db, Dongers } from 'astro:db';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use import.meta.url to get the current module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function() {
  const filePath = path.join(__dirname, 'dongers.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(rawData);

  // Transform data into the structure required for the database
const dongersArray: { id: number; flavor: string; donger: string; likes: number; metadata: {} }[] = [];
  let id = 1;
  
  for (const flavor in data) {
if (flavor in data) {
data[flavor].forEach((donger: string) => {
        dongersArray.push({
          id: id++,
          flavor: flavor,
          donger: donger,
          likes: 0, // Default likes to 0
          metadata: {} // Assuming metadata is empty
        });
      });
    }
  }

  // Insert the transformed data into the database
  await db.insert(Dongers).values(dongersArray);
}

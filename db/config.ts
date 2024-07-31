// config.ts
import { defineDb, defineTable, column } from 'astro:db';

const Dongers = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    flavor: column.text(),
    donger: column.text(),
    likes: column.number(),
    metadata: column.json(),
  }
})

export default defineDb({
  tables: { Dongers },
});

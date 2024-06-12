import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const Clase = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    teacher: column.text(),
    classCode: column.text(),
  },
});
const Tareas = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    dueHour: column.text(),
    dueDate: column.text(),
    createdBy: column.text(),
    description: column.text(),
    createdAt: column.text(),
    updatedAt: column.text(),
    classId: column.text({ references: () => Clase.columns.id }),
  },
});

export default defineDb({
  tables: { Clase, Tareas },
});

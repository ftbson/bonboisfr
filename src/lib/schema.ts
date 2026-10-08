// lib/schema.ts
import { sql } from "drizzle-orm";
import {
  sqliteTable,
  text,
  real,
  integer,
  index,
} from "drizzle-orm/sqlite-core";

// Table des commandes (Orders)
export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(), // Ex: ORD-17123456789
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  country: text("country").notNull(),
  streetAddress: text("street_address").notNull(),
  whatsapp: text("whatsapp").notNull(),
  email: text("email").notNull(),
  subtotal: real("subtotal").notNull(),
  shippingCost: real("shipping_cost").notNull(),
  grandTotal: real("grand_total").notNull(),
  status: text("status").default("pending"), // pending, paid, shipped, cancelled
  paymentMethod: text("payment_method").default("bank_transfer").notNull(),
  paymentStatus: text("payment_status").default("pending").notNull(),
  stripeSessionId: text("stripe_session_id"),
  createdAt: text("created_at").$defaultFn(() => new Date().toISOString()),
});

export const weroSettings = sqliteTable("wero_settings", {
  id: text("id").primaryKey(),
  recipientName: text("recipient_name").notNull().default(""),
  phoneNumber: text("phone_number").notNull().default(""),
  enabled: integer("enabled", { mode: "boolean" }).notNull().default(false),
  updatedAt: text("updated_at").$defaultFn(() => new Date().toISOString()),
});

export const bankTransferSettings = sqliteTable("bank_transfer_settings", {
  id: text("id").primaryKey(),
  accountName: text("account_name").notNull().default(""),
  iban: text("iban").notNull().default(""),
  bic: text("bic").notNull().default(""),
  enabled: integer("enabled", { mode: "boolean" }).notNull().default(false),
  updatedAt: text("updated_at").$defaultFn(() => new Date().toISOString()),
});

export const visits = sqliteTable(
  "visits",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    country: text("country").notNull().default("UNKNOWN"),
    visitedAt: text("visited_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("idx_visits_country").on(table.country),
    index("idx_visits_visited_at").on(table.visitedAt),
  ],
);

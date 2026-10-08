CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    country TEXT NOT NULL DEFAULT 'UNKNOWN',
    visited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_visits_country
ON visits(country);

CREATE INDEX IF NOT EXISTS idx_visits_visited_at
ON visits(visited_at);


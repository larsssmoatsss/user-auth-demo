const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:6cznSN%269Cxn9%23RG@db.apbnnemyipgbihqemxoh.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  },
  // Force IPv4
  options: '-c search_path=public'
});

module.exports = pool;
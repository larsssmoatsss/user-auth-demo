const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:6cznSN%269Cxn9%23RG@db.apbnnemyipgbihqemxoh.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
import sqlite3

DB_NAME = ""

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    return conn, cur



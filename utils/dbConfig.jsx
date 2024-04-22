import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://accounts:ypvN2ke3PGFE@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require');
export const db = drizzle(sql,{schema});
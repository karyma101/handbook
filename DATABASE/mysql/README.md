# mysql

Access a specific database using a username and password

```sql
mysql -u [username] -p [database];
```

Create a database with a specified name if it does not exist in database server

```sql
CREATE DATABASE [IF NOT EXISTS] database_name;
```

Use database or change current database to another database you are working with

```sql
USE database_name;
```

Drop a database with specified name permanently. All physical file associated with the database is no longer exists.

```sql
DROP DATABASE [IF EXISTS] database_name;
```

Show all available databases in the MySQL database server

```sql
show databases;
```

Lists all tables in a current database.

```sql
show tables;
```

Create a new table or a temporary table

```sql
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] table(
   key type(size) NOT NULL PRIMARY KEY AUTO_INCREMENT,
   c1 type(size) NOT NULL,
   c2 type(size) NULL,
   ...
);
```

Add a new column into a table

```sql
ALTER TABLE table ADD [COLUMN];
```

Drop an existing column in a table

```sql
ALTER TABLE table DROP [COLUMN];
```

Add primary key into a table.

```sql
ALTER TABLE table ADD PRIMARY KEY (column,...)
```

Remove primary key from a table.

```sql
ALTER TABLE table DROP PRIMARY KEY
```

Query all data from a table

```sql
SELECT * FROM table
```

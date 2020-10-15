DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL primary key,
    Name VARCHAR(127) NOT NULL,
    Age INT,
    Oscars INT
);

-- SELECT name FROM actors WHERE oscars > 1;
-- SELECT name FROM actors WHERE age > 30;

INSERT INTO actors (Name, Age, Oscars)
VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (Name, Age, Oscars)
VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (Name, Age, Oscars)
VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (Name, Age, Oscars)
VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (Name, Age, Oscars)
VALUES ('John Cho', 43, 0);
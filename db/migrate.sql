DROP TABLE IF EXISTS airports;
CREATE TABLE airports (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255),
	city VARCHAR(255),
	country VARCHAR(255),
	iata VARCHAR(255),
	icao VARCHAR(255),
	x FLOAT8,
	y FLOAT8,
	elevation VARCHAR(255),
	timezone VARCHAR(255),
	dst VARCHAR(255),
	tz_id VARCHAR(255),
	type VARCHAR(255),
	source VARCHAR(255)
);

LOAD DATA LOCAL
    INFILE '/Users/aboho/Desktop/airports-test/db/airports.txt'
    REPLACE INTO TABLE airports
    FIELDS ESCAPED BY '\"'
    TERMINATED BY ','
    OPTIONALLY ENCLOSED BY '\"'
    LINES TERMINATED BY '\n'
    (`id`, `name`, `city`, `country`, `iata`, `icao`, `y`, `x`, `elevation`, `timezone`, `dst`, `tz_id`, `type`, `source`);
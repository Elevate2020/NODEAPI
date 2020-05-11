--Schema :

CREATE SCHEMA item_dev
    AUTHORIZATION postgres;

--Table : 

DROP TABLE IF EXISTS item_dev.item_attributes;

CREATE TABLE IF NOT EXISTS item_dev.item_attributes(
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(50) NOT NULL,
	description varchar(200),
	abbreviation varchar(20),
	manufacturer_id varchar(10),
	manufacturer_name varchar(50),
	manufactured_date date,
	expiry_date date,
	purchase_date date,
	rating float,
	color varchar(20),
	height float,
	width float,
	depth float,
	weight float,
	units_per_pack integer,
	brand varchar(50),
	vendor_case_pack integer,
	is_fragile bool,
	is_returnable bool,
	is_item_hazardous bool,
	status varchar(10),
	created_by varchar(8) not null,
	updated_by varchar(8)	
    ); 



 
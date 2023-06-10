create database if not exists mfg_shop;
use mfg_shop;
create table color_product(id_color int primary key auto_increment, name_color varchar(255));
create table size_product(id_size int primary key auto_increment, name_size varchar(45));
create table type_product(id_type_product int primary key auto_increment, name_type_product varchar(255));
create table product(id_product int primary key auto_increment, name_product varchar(255), prev_cost bigint, curr_cost bigint, 
					amount_availble int, label_product varchar(255), desc_product mediumtext, material varchar(255), graphic varchar(255), id_type_product int,
                    foreign key (id_type_product) references type_product(id_type_product));
create table img_product(id_img int primary key auto_increment, path_img mediumtext, id_product int, foreign key (id_product) references product(id_product));
create table color_product_product(id_color int, foreign key(id_color) references color_product(id_color), id_product int, foreign key(id_product) references product(id_product));
create table size_product_product(id_size int, foreign key(id_size) references size_product(id_size), id_product int, foreign key(id_product) references product(id_product));

create table roles(id_roles int primary key auto_increment, name_roles varchar(45));
create table account(id_account int primary key auto_increment, name_account varchar(255), password mediumtext);
create table roles_account(id_account int, foreign key(id_account) references account(id_account), id_roles int, foreign key(id_roles) references roles(id_roles));

create table employee(id_employee int auto_increment primary key, name_employee varchar(255), identity_card varchar(45), email varchar(255), phone_number varchar(20), 
					  address varchar(255), path_img text, gender tinyint, dateOfBirth date, id_account int, foreign key(id_account)references account(id_account));
create table customer(id_customer int auto_increment primary key, name_customer varchar(255), identity_card varchar(45), email varchar(255), phone_number varchar(20), 
					  address varchar(255), path_img text, gender tinyint, dateOfBirth date, id_account int, foreign key(id_account)references account(id_account));
create table orders(id_order int auto_increment primary key, id_customer int, foreign key(id_customer) references customer(id_customer), total_money bigint, 
					  status_payment tinyint, booking_date date);
create table orders_product(id_product int, foreign key (id_product) references product(id_product), id_order int, foreign key(id_order) references orders(id_order), amount_product int);
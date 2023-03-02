CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(80) NOT NULL,
    email character varying(80)
);
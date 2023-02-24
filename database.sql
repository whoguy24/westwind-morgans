CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(80) NOT NULL,
    email character varying(80),
    first_name text,
    last_name text,
    role text,
    phone text,
    comments text,
    created_by text,
    reset_token text
);

CREATE TABLE images (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    horse_id integer REFERENCES horses(id) ON DELETE CASCADE
);

CREATE TABLE horses (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text,
    category text,
    color text,
    pedigree_url text,
    sire_id integer REFERENCES horses(id) ON DELETE CASCADE,
    dam_id integer REFERENCES horses(id) ON DELETE CASCADE,
    visible boolean DEFAULT true,
    sex text,
    breed text,
    type text,
    crioonline_id integer,
    birth_date date,
    testimonial text,
    description text,
    profile_id integer REFERENCES images(id) ON DELETE CASCADE,
    CONSTRAINT horses_check CHECK (sire_id <> id),
    CONSTRAINT horses_check1 CHECK (dam_id <> id)
);

CREATE UNIQUE INDEX users_pkey ON users(id int4_ops);
CREATE UNIQUE INDEX users_username_key ON users(username text_ops);
CREATE UNIQUE INDEX horses_pkey ON horses(id int4_ops);
CREATE UNIQUE INDEX images_pkey ON images(id int4_ops);
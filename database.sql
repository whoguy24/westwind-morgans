SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: horses; Type: TABLE; Schema: public; Owner: whoguy
--

CREATE TABLE public.horses (
    id integer NOT NULL,
    name text,
    category text,
    color text,
    pedigree_url text,
    sire_id integer,
    dam_id integer,
    visible boolean DEFAULT true,
    sex text,
    breed text,
    type text,
    crioonline_id integer,
    birth_date date,
    testimonial text,
    description text,
    profile_id integer,
    CONSTRAINT horses_check CHECK ((sire_id <> id)),
    CONSTRAINT horses_check1 CHECK ((dam_id <> id))
);


ALTER TABLE public.horses OWNER TO whoguy;

--
-- Name: horses_id_seq; Type: SEQUENCE; Schema: public; Owner: whoguy
--

ALTER TABLE public.horses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.horses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: images; Type: TABLE; Schema: public; Owner: whoguy
--

CREATE TABLE public.images (
    id integer NOT NULL,
    horse_id integer
);


ALTER TABLE public.images OWNER TO whoguy;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: whoguy
--

ALTER TABLE public.images ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: whoguy
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
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


ALTER TABLE public.users OWNER TO whoguy;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: whoguy
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO whoguy;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: whoguy
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: horses; Type: TABLE DATA; Schema: public; Owner: whoguy
--

COPY public.horses (id, name, category, color, pedigree_url, sire_id, dam_id, visible, sex, breed, type, crioonline_id, birth_date, testimonial, description, profile_id) FROM stdin;
1	Adiel's Roxie Girl	Brood Mare	Bay	https://www.allbreedpedigree.com/adiels+roxie+girl	116	131	t	F	Morgan	mares	352309	2006-01-01	\N	\N	2
20	War Justins Legacy	Stud	Black	https://www.allbreedpedigree.com/war+justins+legacy	125	76	t	M	Morgan	stallions	352332	2006-01-01	\N	\N	235
26	Westwind Eyelash	Brood Mare	Palomino	https://www.allbreedpedigree.com/westwind+eyelash	118	132	t	F	Morgan	mares	352232	2004-01-01	\N	\N	21
42	Westwind Morgan	Stud	Seal Brown	https://www.allbreedpedigree.com/westwind+morgan	20	77	t	M	Morgan	stallions	352383	2014-01-01	\N	\N	238
35	Westwind Kate	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+kate	16	115	t	F	Morgan	mares	352211	2012-01-01	\N	\N	30
4	Westwind Otto	Stud	Palomino	https://www.allbreedpedigree.com/westwind+otto	16	26	t	M	Morgan	stallions	352381	2016-01-01	\N	\N	\N
3	Lazy Heart D Dolls Delite	Brood Mare	Chestnut	https://www.allbreedpedigree.com/lazy+heart+d+dolls+delite	142	145	t	F	Morgan	mares	352376	2001-05-27	\N	\N	8
13	Red Rose Windsong	Brood Mare	Palomino	https://www.allbreedpedigree.com/red+rose+windsong	123	139	t	F	Morgan	mares	352380	2008-01-01	\N	\N	9
15	Sweet's Sweet Mabel	Brood Mare	Bay	https://www.allbreedpedigree.com/sweets+sweet+mabel	121	136	t	F	Morgan	mares	352250	1996-01-01	\N	\N	10
18	War Justa Lark	Brood Mare	Black	https://www.allbreedpedigree.com/war+justa+lark	125	141	t	F	Morgan	mares	514766	2006-01-01	\N	\N	14
22	Westwind Buster Brown	Gelding	Bay	https://www.allbreedpedigree.com/westwind+buster+brown	125	136	t	M	Morgan	geldings	352287	2000-01-01	\N	\N	18
21	Westwind Black Betty	Brood Mare	Black	https://www.allbreedpedigree.com/westwind+black+betty	125	135	t	F	Morgan	mares	352329	2000-01-01	\N	\N	16
23	Westwind Cutter	Gelding	Bay	https://www.allbreedpedigree.com/westwind+cutter	125	136	t	M	Morgan	geldings	352299	2004-01-01	\N	\N	19
25	Westwind Ethan	Stud	Black	https://www.allbreedpedigree.com/westwind+ethan	125	135	t	M	Morgan	stallions	352331	2004-01-01	\N	\N	20
27	Westwind Fancy	Brood Mare	Black	https://www.allbreedpedigree.com/westwind+fancy	125	135	t	F	Morgan	mares	352341	2005-01-01	\N	\N	22
28	Westwind Hazel Run	Brood Mare	Chestnut	https://www.allbreedpedigree.com/westwind+hazel+run	116	138	t	F	Morgan	mares	352367	2009-01-01	\N	\N	23
31	Westwind Jada Babe	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+jada+babe	16	126	t	F	Morgan	mares	352306	2011-01-01	\N	\N	26
32	Westwind Juanita	Brood Mare	Black	https://www.allbreedpedigree.com/westwind+juanita	16	127	t	F	Morgan	mares	352342	2011-01-01	\N	\N	27
33	Westwind Kandi	Brood Mare	Black	https://www.allbreedpedigree.com/westwind+kandi	119	27	t	F	Morgan	mares	352344	2012-01-01	\N	\N	29
17	Triple S Win Spar	Brood Mare	Liver Chestnut	https://www.allbreedpedigree.com/triple+s+win+spar	124	106	t	F	Morgan	mares	352374	1998-01-01	\N	\N	244
40	Westwind Margarita	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+margarita	16	115	t	F	Morgan	mares	352293	2014-06-17	\N	\N	34
38	Westwind Lily	Brood Mare	Black	https://www.allbreedpedigree.com/westwind+lily	25	127	t	F	Morgan	mares	352334	2013-07-01	\N	\N	33
46	Westwind Natalie	Brood Mare	Black	https://www.allbreedpedigree.com/westwind+natalie	25	126	t	F	Morgan	mares	352336	2015-05-16	\N	\N	39
41	Westwind Maria	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+maria	16	21	t	F	Morgan	mares	451741	2014-06-24	\N	\N	35
6	Westwind Quinlan	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+quinlan	16	26	t	F	Morgan	mares	352322	2018-01-01	\N	\N	49
45	Westwind Naomi	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+naomi	16	18	t	F	Morgan	mares	352296	2015-06-29	\N	\N	38
47	Westwind Nikki	Brood Mare	Buckskin	https://www.allbreedpedigree.com/westwind+nikki	16	26	t	F	Morgan	mares	\N	2015-01-01	\N	Lease	40
48	Westwind Noah	Stud	Seal Brown	https://www.allbreedpedigree.com/westwind+noah	16	77	t	M	Morgan	stallions	352384	2015-05-13	\N	\N	41
50	Westwind Olive	Brood Mare	Seal Brown	https://www.allbreedpedigree.com/westwind+olive	16	126	t	F	Morgan	mares	352274	2016-01-01	\N	\N	43
5	Westwind Que	Gelding	Bay	https://www.allbreedpedigree.com/westwind+qu16	29	t	M	Morgan	geldings	352320	2018-01-01	\N	\N	48
8	Westwind Reata	Filly	Bay	https://www.allbreedpedigree.com/westwind+reata	16	29	t	F	Morgan	fillies	352323	2019-07-18	\N	\N	50
9	Westwind Rebecca	Filly	Bay	https://www.allbreedpedigree.com/westwind+rebecca	16	21	t	F	Morgan	fillies	352278	2019-05-22	\N	\N	51
10	Westwind Renee	Filly	Bay	https://www.allbreedpedigree.com/westwind+renee	25	37	t	F	Morgan	fillies	352325	2019-07-18	\N	\N	53
11	Westwind Rhonda	Filly	Bay	https://www.allbreedpedigree.com/westwind+rhonda	16	34	t	F	Morgan	fillies	352324	2019-01-01	\N	\N	54
12	Westwind Romeo	Colt	Bay	https://www.allbreedpedigree.com/westwind+romeo	16	15	t	M	Morgan	colts	352280	2019-04-30	\N	\N	56
14	Westwind Rowdy	Colt	Bay	https://www.allbreedpedigree.com/westwind+rowdy	16	27	t	M	Morgan	colts	352285	2019-01-01	\N	\N	57
16	Sweets Baybarry	Stud	Bay	https://www.allbreedpedigree.com/sweets+baybarry	122	134	t	M	Morgan	stallions	352330	1994-01-01	\N	\N	232
36	Westwind Laci	Filly	Bay	https://www.allbreedpedigree.com/westwind+laci	20	128	t	F	Morgan	fillies	352288	2013-06-05	\N	\N	31
2	KS Bluestem Jada Justina	Brood Mare	Dark Bay/Brown	https://www.allbreedpedigree.com/ks+bluestem+jada+justina	117	137	t	F	Morgan	mares	519338	2005-01-01	\N	\N	241
24	Westwind Dewdrop	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+dewdrop	125	130	t	F	Morgan	mares	352304	2003-01-01	\N	\N	245
29	Westwind Hope	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+hope	25	15	t	F	Morgan	mares	352305	2009-01-01	\N	\N	248
30	Westwind Isis	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+isis	59	26	t	F	Morgan	mares	449199	2010-03-01	\N	\N	251
19	War Justatola	Brood Mare	\N	https://www.allbreedpedigree.com/war+justatola	125	148	t	F	Morgan	mares	352220	2006-01-01	\N	\N	254
34	Westwind Kassie	Brood Mare	Seal Brown	https://www.allbreedpedigree.com/westwind+kassie	119	127	t	F	Morgan	mares	352385	2012-01-01	\N	\N	256
37	Westwind Lena	Brood Mare	Brown	https://www.allbreedpedigree.com/westwind+lena	16	19	t	F	Morgan	mares	352291	2013-05-05	\N	\N	258
7	Westwind Rachel	Brood Mare	Palomino	https://www.allbreedpedigree.com/westwind+rachel	16	26	t	F	Morgan	mares	352382	2019-05-23	\N	\N	168
76	War Tosca Tania	\N	\N	https://www.allbreedpedigree.com/war+tosca+tania	107	109	f	F	\N	mares	\N	\N	\N	\N	\N
77	Westwind Carmelita	\N	\N	https://www.allbreedpedigree.com/westwind+carmelita	125	135	f	F	\N	mares	\N	\N	\N	\N	\N
78	Sweets Classy Zip	\N	\N	https://www.allbreedpedigree.com/sweets+classy+zip	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
79	Sweets Brandi	\N	\N	https://www.allbreedpedigree.com/sweets+brandi	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
80	DS Ebony Lady	\N	\N	https://www.allbreedpedigree.com/ds+ebony+lady	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
81	Golden Sonfield	\N	\N	https://www.allbreedpedigree.com/golden+sonfield	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
82	Shawalla Gerri	\N	\N	https://www.allbreedpedigree.com/shawalla+gerri	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
83	Vintage Midnight Son	\N	\N	https://www.allbreedpedigree.com/vintage+midnight+son	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
84	Sparfield Trixianne	\N	\N	https://www.allbreedpedigree.com/sparfield+trixianne	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
85	T-Bone Fella Della	\N	\N	https://www.allbreedpedigree.com/t-bone+fella+della	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
86	Rhythms Bimbo	\N	\N	https://www.allbreedpedigree.com/rhythms+bimbo	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
87	Kings Fancy Duchess	\N	\N	https://www.allbreedpedigree.com/kings+fancy+duchess	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
88	Triple S Gold Eagle	\N	\N	https://www.allbreedpedigree.com/triple+s+gold+eagle	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
89	Triple S Red Carmen	\N	\N	https://www.allbreedpedigree.com/triple+s+red+carmen	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
90	Triple S Red Major	\N	\N	https://www.allbreedpedigree.com/triple+s+red+major	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
91	Red Madge	\N	\N	https://www.allbreedpedigree.com/red+madge	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
92	Condo	\N	\N	https://www.allbreedpedigree.com/condo	\N	\N	\N	stallions	\N	\N	\N	\N	\N
93	Lita Spar	\N	\N	https://www.allbreedpedigree.com/lita+spar	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
94	Beau Spar	\N	\N	https://www.allbreedpedigree.com/beau+spar	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
95	Miss Dakota Rockwood	\N	\N	https://www.allbreedpedigree.com/miss+dakota+rockwood	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
98	Sweets Classy Boy	\N	\N	https://www.allbreedpedigree.com/sweets+classy+boy	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
99	Rhythms Joy	\N	\N	https://www.allbreedpedigree.com/rhythms+joy\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
100	Sweets Dixie Donna	\N	\N	https://www.allbreedpedigree.com/sweets+dixie+donna	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
101	Sweets Jet Hawk	\N	\N	https://www.allbreedpedigree.com/sweets+jet+hawk	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
102	T-Bone Cards Fancy	\N	\N	https://www.allbreedpedigree.com/t-bone+cards+fancy	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
103	Triple S Silver Fox	\N	\N	https://www.allbreedpedigree.com/triple+s+silver+fox	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
104	Triple S Summer Breeze	\N	\N	https://www.allbreedpedigree.com/triple+s+summer+breeze	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
105	Primavera Ramona	\N	\N	https://www.allbreedpedigree.com/primavera+ramona	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
106	Circle H Nopalita	\N	\N	https://www.allbreedpedigree.com/circle+h+nopalita	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
107	War Omega Bird	\N	\N	https://www.allbreedpedigree.com/war+omega+bird	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
108	War Tosca Lele	\N	\N	https://www.allbreedpedigree.com/war+tosca+lele	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
109	War Tosca Tola	\N	\N	https://www.allbreedpedigree.com/war+tosca+tola	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
110	Western Mansfield	\N	\N	https://www.allbreedpedigree.com/western+mansfield	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
111	Funquest Pukancy	\N	\N	https://www.allbreedpedigree.com/funquest+pukancy	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
115	Westwind Dee Dee	\N	\N	https://www.allbreedpedigree.com/westwind+dee+dee	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
116	Adiel's Snicker Zip	\N	\N	https://www.allbreedpedigree.com/adiels+snicker+zip	78	79	f	M	\N	stallions	\N	\N	\N	\N	\N
114	Westwind Querido	Gelding	N/A	https://www.allbreedpedigree.com/westwind+querido	59	17	f	M	Morgan	geldings	\N	\N	\N	\N	\N
59	Westwind Storm	Stud	Black	https://www.allbreedpedigree.com/westwind+storm	120	21	t	M	Morgan	stallions	352333	2008-01-01	\N	\N	60
52	Westwind Ophelia	Brood Mare	Dark Bay/Brown	https://www.allbreedpedigree.com/westwind+ophelia	16	77	t	F	Morgan	mares	352271	2016-01-01	\N	\N	45
53	Westwind Orchid	Brood Mare	Seal Brown	https://www.allbreedpedigree.com/westwind+orchid	16	21	t	F	Morgan	mares	352270	2016-01-01	\N	\N	46
57	Westwind Sandy	Colt	Bay	https://www.allbreedpedigree.com/westwind+sandy	20	35	t	M	Morgan	colts	381037	2020-01-01	\N	\N	59
61	Westwind Taylor	Filly	Bay	https://www.allbreedpedigree.com/westwind+taylor	16	44	t	F	Morgan	fillies	518025	2021-06-14	\N	\N	62
62	Westwind Thelma	Filly	Bay	https://www.allbreedpedigree.com/westwind+thelma	16	39	t	F	Morgan	fillies	518041	2021-06-21	\N	\N	65
63	Westwind Tori	Filly	Bay	https://www.allbreedpedigree.com/westwind+tori	16	38	t	F	Morgan	fillies	518043	2021-06-30	\N	\N	67
64	Westwind Travis	Colt	Bay	https://www.allbreedpedigree.com/westwind+travis	16	26	t	M	Morgan	colts	517964	2021-06-13	\N	\N	69
66	Westwind Ty	Colt	Bay	https://www.allbreedpedigree.com/westwind+ty16	15	t	M	Morgan	colts	517963	2021-07-12	\N	\N	72
67	Westwind Udele	Filly	Black	\N	25	13	t	F	Morgan	fillies	519453	2022-07-04	\N	\N	73
75	Westwind Uylanna	Filly	Black	\N	25	52	t	F	Morgan	fillies	514112	2022-04-04	\N	\N	74
68	Westwind Uma	Filly	Bay	https://www.allbreedpedigree.com/westwind+uma2	25	40	t	F	Morgan	fillies	514157	2022-05-10	\N	\N	75
69	Westwind Unbridled	Colt	Bay	https://www.allbreedpedigree.com/westwind+unbridled	25	32	t	M	Morgan	colts	514113	2022-05-04	\N	\N	76
70	Westwind Union	Colt	Brown	https://www.allbreedpedigree.com/westwind+union	16	27	t	M	Morgan	colts	519454	2022-06-27	\N	\N	79
72	Westwind Upton	Colt	\N	\N	25	50	t	M	Morgan	colts	521715	2022-07-09	\N	\N	83
73	Westwind Uriah	Colt	Black	https://www.allbreedpedigree.com/westwind+uriah	25	53	t	M	Morgan	colts	514110	2022-05-03	\N	\N	84
74	Westwind Ursula	Filly	Black	https://www.allbreedpedigree.com/westwind+ursula2	42	29	t	F	Morgan	fillies	514133	2022-05-07	\N	\N	269
55	Westwind Sadie	Filly	Bay	https://www.allbreedpedigree.com/westwind+sadie	25	41	f	F	Morgan	fillies	381031	\N	\N	\N	\N
56	Westwind Sally	Filly	Bay	https://www.allbreedpedigree.com/westwind+sally	59	24	f	F	Morgan	fillies	381034	\N	\N	\N	\N
54	Westwind Rita	Filly	Bay	https://www.allbreedpedigree.com/westwind+rita	25	36	f	F	Morgan	testimonials	352281	\N	Detailed testmonial to go here.	\N	55
117	Adiels Stetson	\N	\N	https://www.allbreedpedigree.com/adiels+stetson	78	80	f	M	\N	stallions	\N	\N	\N	\N	\N
118	Golden Sondanz	\N	\N	https://www.allbreedpedigree.com/golden+sondanz	81	82	f	M	\N	stallions	\N	\N	\N	\N	\N
120	Sir Danes Sire Storm	\N	\N	https://www.allbreedpedigree.com/sir+danes+sire+storm	83	84	f	M	\N	stallions	\N	\N	\N	\N	\N
121	Sweets Dexter	\N	\N	https://www.allbreedpedigree.com/sweets+dexter2	122	85	f	M	\N	stallions	\N	\N	\N	\N	\N
122	T-Bone Bimbo	\N	\N	https://www.allbreedpedigree.com/t-bone+bimb86	87	f	M	\N	stallions	\N	\N	\N	\N	\N
123	Triple S Bald Eagle	\N	\N	https://www.allbreedpedigree.com/triple+s+bald+eagle	88	89	f	M	\N	stallions	\N	\N	\N	\N	\N
124	Triple S Red Wind	\N	\N	https://www.allbreedpedigree.com/triple+s+red+wind	90	91	f	M	\N	stallions	\N	\N	\N	\N	\N
125	War Justin	\N	\N	https://www.allbreedpedigree.com/w+a+r+justi110	111	f	M	\N	stallions	\N	\N	\N	\N	\N
126	Adiel's Black Saphire	\N	\N	https://www.allbreedpedigree.com/adiels+black+saphire	78	80	f	F	\N	mares	\N	\N	\N	\N	\N
127	Adiels Magnolia	\N	\N	https://www.allbreedpedigree.com/adiels+magnolia	78	80	f	F	\N	mares	\N	\N	\N	\N	\N
128	BFM Sweet Georgia Moon	\N	\N	https://www.allbreedpedigree.com/bfm+sweet+georgia+moon	16	15	f	F	\N	mares	\N	\N	\N	\N	\N
130	EDS Dewdrop	Brood Mare	\N	https://www.allbreedpedigree.com/eds+dewdrop	94	95	f	F	\N	mares	\N	\N	\N	\N	\N
131	KSBS Sunflower Girl	\N	\N	https://www.allbreedpedigree.com/ksbs+sunflower+girl	149	152	f	F	\N	mares	\N	\N	\N	\N	\N
132	Sweet's Duchess	\N	\N	https://www.allbreedpedigree.com/sweets+duchess	122	85	f	F	\N	mares	\N	\N	\N	\N	\N
134	Sweets B-Bomb	\N	\N	https://www.allbreedpedigree.com/sweets+b+bomb	98	99	f	F	\N	mares	\N	\N	\N	\N	\N
135	Sweets Dee Dee	\N	\N	https://www.allbreedpedigree.com/sweets+dee+dee	98	100	f	F	\N	mares	\N	\N	\N	\N	\N
136	Sweets Dixie Daisy	\N	\N	https://www.allbreedpedigree.com/sweets+dixie+daisy	98	100	f	F	\N	mares	\N	\N	\N	\N	\N
137	Sweets Jada Babe	\N	\N	https://www.allbreedpedigree.com/sweets+jada+babe	101	102	f	F	\N	mares	\N	\N	\N	\N	\N
138	Triple S Silver Butie	\N	\N	https://www.allbreedpedigree.com/triple+s+silver+butie	103	104	f	F	\N	mares	\N	\N	\N	\N	\N
139	Triple S Southwind	\N	\N	https://www.allbreedpedigree.com/triple+s+southwind	124	105	f	F	\N	mares	\N	\N	\N	\N	\N
141	War Le Bird	\N	\N	https://www.allbreedpedigree.com/war+le+bird107	108	f	F	\N	mares	\N	\N	\N	\N	\N
142	Lazy Heart D Sir Knight	\N	\N	https://www.allbreedpedigree.com/lazy+heart+d+sir+knight	143	144	f	M	\N	stallions	\N	\N	\N	\N	\N
143	Double TK Dillingerb	\N	\N	https://www.allbreedpedigree.com/double+tk+dillingerb	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
144	Lazy Heart D Daisy	\N	\N	https://www.allbreedpedigree.com/lazy+heart+d+daisy	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
145	Thunder Doll	\N	\N	https://www.allbreedpedigree.com/thunder+dol146	147	f	F	\N	mares	\N	\N	\N	\N	\N
146	Funquest Thunderbird	\N	\N	https://www.allbreedpedigree.com/funquest+thunderbird	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
147	Vales Highland Lass	\N	\N	https://www.allbreedpedigree.com/vales+highland+lass	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
148	War Tosca Bird	\N	\N	https://www.allbreedpedigree.com/war+tosca+bird	107	109	f	F	\N	mares	\N	\N	\N	\N	\N
149	Kells in Kirbys Honor	\N	\N	https://www.allbreedpedigree.com/kells+in+kirbys+honor	150	151	f	M	\N	stallions	\N	\N	\N	\N	\N
150	Spring Hills KCL	\N	\N	https://www.allbreedpedigree.com/spring+hills+kcl	\N	\N	f	M	\N	stallions	\N	\N	\N	\N	\N
151	Pittridge Shonda	\N	\N	https://www.allbreedpedigree.com/pittridge+shonda	\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
152	Burchtree Roxanne	\N	\N	https://www.allbreedpedigree.com/burchtree+roxanne	125	153	f	F	\N	mares	\N	\N	\N	\N	\N
153	Sweets Tonga	\N	\N	https://www.allbreedpedigree.com/sweets+tong\N	\N	f	F	\N	mares	\N	\N	\N	\N	\N
119	KS Bluestem Jada Joe	\N	\N	https://www.allbreedpedigree.com/ks+bluestem+jada+joe	125	137	f	M	\N	stallions	\N	\N	\N	\N	4
166	Toy Story	Brood Mare	Chestnut	https://www.allbreedpedigree.com/toy+story3	\N	\N	f	F	Morgan	mares	\N	1998-01-01	\N	\N	11
43	Westwind Nadine	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+nadine	16	27	t	F	Morgan	mares	352295	2015-05-18	\N	\N	36
44	Westwind Nancy	Brood Mare	Chestnut	https://www.allbreedpedigree.com/westwind+nancy	20	15	t	F	Morgan	mares	352362	2015-05-09	\N	\N	37
49	Westwind Odele	Brood Mare	Bay	https://www.allbreedpedigree.com/westwind+odele	16	127	t	F	Morgan	mares	352273	2016-01-01	\N	\N	42
51	Westwind Olivia	Brood Mare	Seal Brown	https://www.allbreedpedigree.com/westwind+olivia	16	18	t	F	Morgan	mares	352318	2016-01-01	\N	\N	44
65	Westwind Trisha	Filly	Bay	https://www.allbreedpedigree.com/westwind+trisha	16	2	t	F	Morgan	fillies	519333	2021-07-30	\N	\N	70
169	Westwind Jacqueline	Brood Mare	Liver Chestnut	https://www.allbreedpedigree.com/westwind+jacqueline	\N	\N	f	F	Morgan	mares	\N	2011-01-01	\N	\N	25
39	Westwind Lois	Brood Mare	Black	https://www.allbreedpedigree.com/westwind+lois	20	115	t	F	Morgan	mares	352335	2013-07-07	\N	\N	260
154	Westwind Robin	Filly	Seal Brown	https://www.allbreedpedigree.com/westwind+robin	16	38	f	F	Morgan	testimonials	352355	2019-07-23	Detailed testmonial to go here.	\N	\N
174	Westwind Unforgettable	Filly	Black	https://www.allbreedpedigree.com/westwind+unforgettable	\N	\N	t	F	Morgan	fillies	\N	2022-01-01	\N	\N	77
175	Westwind Unforgiven	Colt	Bay	https://www.allbreedpedigree.com/westwind+unforgiven	\N	\N	t	M	Morgan	colts	\N	2022-01-01	\N	\N	78
177	Sweets Cin Della	\N	\N	\N	122	85	f	F	\N	\N	\N	\N	\N	\N	\N
164	KS Bluestem Dela Rosa	Brood Mare	Chestnut	https://www.allbreedpedigree.com/ks+bluestem+della+rosa	117	177	t	F	Morgan	mare\N	2006-01-01	\N	\N	3
168	Vintage Lusita	Brood Mare	Chestnut	https://www.allbreedpedigree.com/vintage+lusita	\N	166	t	F	Morgan	mares	\N	2005-01-01	\N	\N	13
173	Westwind Trace	Colt	Black	https://www.allbreedpedigree.com/westwind+trace	\N	\N	t	M	Morgan	colts	\N	2021-01-01	\N	\N	68
176	Westwind Untouchable	Colt	Chestnut	https://www.allbreedpedigree.com/westwind+untouchable	\N	\N	t	M	Morgan	colts	\N	2022-01-01	\N	\N	81
165	KS Bluestem Tongas Legacy	Brood Mare	Black	https://www.allbreedpedigree.com/ks+bluestem+tongas+legacy	125	153	t	F	Morgan	mare\N	1996-01-01	\N	\N	7
163	KS Bluestem Chuckanut	Brood Mare	Black	https://www.allbreedpedigree.com/ks+bluestem+chuckanut	117	165	t	F	Morgan	mares	\N	2006-01-01	\N	\N	1
167	Triple S May Spar	Brood Mare	Liver Chestnut	https://www.allbreedpedigree.com/triple+s+may+spar	\N	\N	f	F	Morgan	mares	\N	1998-01-01	\N	\N	12
172	Westwind Redhawk	Gelding	Chestnut	https://www.allbreedpedigree.com/westwind+redhawk	\N	\N	f	M	Morgan	geldings	\N	2019-01-01	\N	\N	52
58	Westwind Sarah	Filly	Bay	https://www.allbreedpedigree.com/westwind+sarah	59	17	f	F	Morgan	fillies	381035	\N	\N	\N	263
60	Westwind Tatum	Filly	Bay	https://www.allbreedpedigree.com/westwind+tatum	16	21	f	F	Morgan	testimonials	518045	2021-07-01	Detailed testmonial to go here.	\N	61
155	Westwind Tamera	Filly	Bay	https://www.allbreedpedigree.com/westwind+tamera	16	46	f	F	Morgan	testimonials	517998	2021-05-22	Detailed testmonial to go here.	\N	\N
159	Westwind Ulyssa	Filly	Bay	https://www.allbreedpedigree.com/westwind+ulyssa	59	35	f	F	Morgan	testimonials	514115	2022-03-27	Detailed testmonial to go here.	\N	\N
160	Westwind Ulysses	Colt	Bay	https://www.allbreedpedigree.com/westwind+ulysses2	16	34	f	M	Morgan	testimonials	514147	2022-02-26	Detailed testmonial to go here.	\N	\N
162	Westwind Natasha	Filly	Bay	https://www.allbreedpedigree.com/westwind+natasha	16	21	f	F	Morgan	testimonials	352297	2015-06-01	Detailed testmonial to go here.	\N	\N
156	Westwind Tess	Filly	Dark Bay/Brown	https://www.allbreedpedigree.com/westwind+tess	119	3	f	F	Morgan	testimonials	514215	2021-06-06	Detailed testmonial to go here.	\N	64
157	Westwind Tilly	Filly	Dark Bay/Brown	https://www.allbreedpedigree.com/westwind+tilly	25	37	f	F	Morgan	testimonials	518030	2021-06-08	Detailed testmonial to go here.	\N	66
158	Westwind True	Colt	Black	https://www.allbreedpedigree.com/westwind+true	59	24	f	M	Morgan	testimonials	451557	2021-08-05	Detailed testmonial to go here.	\N	71
161	Westwind Uno Mas	Colt	Palomino	\N	16	26	f	Morgan	testimonials	520751	2022-06-15	Detailed testmonial to go here.	\N	80
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: whoguy
--

COPY public.images (id, horse_id) FROM stdin;
1	163
2	1
3	164
4	119
5	119
6	2
7	165
8	3
9	13
10	15
11	166
12	167
13	168
14	18
15	18
16	21
17	21
18	22
19	23
20	25
21	26
22	27
23	28
24	28
25	169
26	31
27	32
28	32
29	33
30	35
31	36
32	36
33	38
34	40
35	41
36	43
37	44
38	45
39	46
40	47
41	48
42	49
43	50
44	51
45	52
46	53
48	5
49	6
50	8
51	9
52	172
53	10
54	11
55	54
56	12
57	14
58	14
59	57
60	59
61	60
62	61
63	61
64	156
65	62
66	157
67	63
68	173
69	64
70	65
71	158
72	66
73	67
74	75
75	68
76	69
77	174
78	175
79	70
80	161
81	176
82	176
83	72
84	84
85	163
86	1
87	163
88	164
89	164
90	164
91	119
92	119
93	119
94	2
95	165
96	165
97	3
98	13
99	15
100	15
101	166
102	167
103	167
104	168
105	168
106	18
107	18
108	18
109	19
110	21
111	21
112	21
113	21
114	22
115	22
116	23
117	23
118	25
119	25
120	26
121	26
122	27
123	27
124	28
125	28
126	28
127	30
128	166
129	169
130	169
131	31
132	31
133	32
134	32
135	32
136	33
137	33
138	35
139	35
140	36
141	38
142	39
143	40
144	40
145	40
146	41
147	41
148	43
149	43
150	44
151	45
152	45
153	46
154	47
156	48
157	48
158	50
159	50
160	51
161	52
162	52
163	52
164	53
165	5
166	5
167	6
168	7
169	8
170	9
171	9
172	172
173	172
174	10
175	11
176	11
177	54
178	54
179	54
180	12
181	12
182	14
183	14
184	14
185	57
186	57
187	59
188	59
189	60
190	60
191	61
192	61
193	61
194	156
195	156
196	62
197	62
198	157
199	157
200	157
201	157
202	63
203	63
204	173
205	173
206	64
207	64
208	65
209	65
210	158
211	158
212	66
213	66
214	67
215	75
216	75
217	68
218	68
219	69
220	69
221	174
222	174
223	175
224	175
225	161
226	176
227	176
228	176
229	72
230	72
231	73
155	47
232	16
233	16
234	16
235	20
236	20
237	20
238	42
239	42
240	42
241	2
242	2
243	2
244	17
245	24
246	24
247	24
248	29
249	29
250	29
251	30
252	30
253	30
254	19
255	19
256	34
257	34
258	37
259	37
260	39
261	39
262	39
263	58
264	58
265	58
269	74
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: whoguy
--

COPY public.users (id, username, password, email, first_name, last_name, role, phone, comments, created_by, reset_token) FROM stdin;
\.


--
-- Name: horses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: whoguy
--

SELECT pg_catalog.setval('public.horses_id_seq', 177, true);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: whoguy
--

SELECT pg_catalog.setval('public.images_id_seq', 269, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: whoguy
--

SELECT pg_catalog.setval('public.users_id_seq', 92, true);


--
-- Name: horses horses_pkey; Type: CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.horses
    ADD CONSTRAINT horses_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: horses horses_dam_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.horses
    ADD CONSTRAINT horses_dam_id_fkey FOREIGN KEY (dam_id) REFERENCES public.horses(id) ON DELETE CASCADE;


--
-- Name: horses horses_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.horses
    ADD CONSTRAINT horses_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.images(id) ON DELETE CASCADE;


--
-- Name: horses horses_sire_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.horses
    ADD CONSTRAINT horses_sire_id_fkey FOREIGN KEY (sire_id) REFERENCES public.horses(id) ON DELETE CASCADE;


--
-- Name: images images_horse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: whoguy
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_horse_id_fkey FOREIGN KEY (horse_id) REFERENCES public.horses(id) ON DELETE CASCADE;
--
-- gyrgqbjlQL database dump
--

-- Dumped from database version 14.6
-- Dumped by pg_dump version 14.6

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
-- Name: Challenges; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."Challenges" (
    id integer NOT NULL,
    challenge character varying(255),
    category character varying(255),
    "uniqueId" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Challenges" OWNER TO gyrgqbjl;

--
-- Name: Challenges_id_seq; Type: SEQUENCE; Schema: public; Owner: gyrgqbjl
--

CREATE SEQUENCE public."Challenges_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Challenges_id_seq" OWNER TO gyrgqbjl;

--
-- Name: Challenges_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gyrgqbjl
--

ALTER SEQUENCE public."Challenges_id_seq" OWNED BY public."Challenges".id;


--
-- Name: Conversations; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."Conversations" (
    id integer NOT NULL,
    "conversationStarter" character varying(255),
    category character varying(255),
    level integer,
    "conversationId" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Conversations" OWNER TO gyrgqbjl;

--
-- Name: Conversations_id_seq; Type: SEQUENCE; Schema: public; Owner: gyrgqbjl
--

CREATE SEQUENCE public."Conversations_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Conversations_id_seq" OWNER TO gyrgqbjl;

--
-- Name: Conversations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gyrgqbjl
--

ALTER SEQUENCE public."Conversations_id_seq" OWNED BY public."Conversations".id;


--
-- Name: MessagesOfTheDays; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."MessagesOfTheDays" (
    id integer NOT NULL,
    text character varying(255),
    author character varying(255),
    "messageId" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."MessagesOfTheDays" OWNER TO gyrgqbjl;

--
-- Name: MessagesOfTheDays_id_seq; Type: SEQUENCE; Schema: public; Owner: gyrgqbjl
--

CREATE SEQUENCE public."MessagesOfTheDays_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."MessagesOfTheDays_id_seq" OWNER TO gyrgqbjl;

--
-- Name: MessagesOfTheDays_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gyrgqbjl
--

ALTER SEQUENCE public."MessagesOfTheDays_id_seq" OWNED BY public."MessagesOfTheDays".id;


--
-- Name: PickupLines; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."PickupLines" (
    id integer NOT NULL,
    line character varying(255),
    "lineId" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."PickupLines" OWNER TO gyrgqbjl;

--
-- Name: PickupLines_id_seq; Type: SEQUENCE; Schema: public; Owner: gyrgqbjl
--

CREATE SEQUENCE public."PickupLines_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PickupLines_id_seq" OWNER TO gyrgqbjl;

--
-- Name: PickupLines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gyrgqbjl
--

ALTER SEQUENCE public."PickupLines_id_seq" OWNED BY public."PickupLines".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO gyrgqbjl;

--
-- Name: UserChallenges; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."UserChallenges" (
    "userId" integer,
    "challengeId" integer
);


ALTER TABLE public."UserChallenges" OWNER TO gyrgqbjl;

--
-- Name: UserConversations; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."UserConversations" (
    "userId" integer,
    "conversationId" integer
);


ALTER TABLE public."UserConversations" OWNER TO gyrgqbjl;

--
-- Name: UserPickupLines; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."UserPickupLines" (
    "userId" integer,
    "pickupLineId" integer
);


ALTER TABLE public."UserPickupLines" OWNER TO gyrgqbjl;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: gyrgqbjl
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO gyrgqbjl;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: gyrgqbjl
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO gyrgqbjl;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gyrgqbjl
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Challenges id; Type: DEFAULT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."Challenges" ALTER COLUMN id SET DEFAULT nextval('public."Challenges_id_seq"'::regclass);


--
-- Name: Conversations id; Type: DEFAULT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."Conversations" ALTER COLUMN id SET DEFAULT nextval('public."Conversations_id_seq"'::regclass);


--
-- Name: MessagesOfTheDays id; Type: DEFAULT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."MessagesOfTheDays" ALTER COLUMN id SET DEFAULT nextval('public."MessagesOfTheDays_id_seq"'::regclass);


--
-- Name: PickupLines id; Type: DEFAULT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."PickupLines" ALTER COLUMN id SET DEFAULT nextval('public."PickupLines_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Challenges; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."Challenges" VALUES (1, 'Sign up for dancing lessons and commit to going each time.', 'Social', 'id001', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (2, 'Go to a dance club tonight and dance with at least 10 people.', 'Social', 'id002', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (3, 'Volunteer at your local food bank and talk to everyone you come in contact with.', 'Social', 'id003', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (4, 'Volunteer at your local animal shelter and talk to everyone you come in contact with.', 'Social', 'id004', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (5, 'Go to a movie in the park and sit close to people you don not know. Start a conversation with them.', 'Social', 'id005', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (6, 'Host a movie night at your home/apartment with friends. Be sure to engage in conversation andn dialog.', 'Social', 'id006', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (7, 'Make a short movie with firends. Be the protagonist who goes out of the way to be outgoing.', 'Social', 'id007', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (8, 'Sign up for a local book club and go to a meeting. While there, ask members of the group to grab coffee after a meeting.', 'Social', 'id008', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (9, 'Sign up to read a book aloud at a local library.', 'Educational', 'id009', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (10, 'Invite friends to go on a weekend trip. Let everyone know that phones should be put away so everyone can connect on a social level.', 'Social', 'id010', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (11, 'Take a road trip with friends. Put phones away so everyone can have meaningful conversations.', 'Social', 'id011', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (12, 'Take a photography class. Ask members of the class to go out for coffee after class.', 'Educational', 'id012', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (13, 'Attend a yoga class. Ask members of the class to go out for coffee after class.', 'Social', 'id013', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (14, 'Play a pick up sports game at the park. Ask people to go out for coffee or drinks after class.', 'Social', 'id014', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (15, 'Sign up for music instrument lessons. Use it as an opportunity to ask questions of your teacher to create good social dialog.', 'Educational', 'id015', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (16, 'Start a conversation with a complete stranger at the grocery store.', 'Social', 'id016', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (17, 'Go speed dating.', 'Social', 'id017', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (18, 'Invite a co-worker to lunch. Put your phones away so you can have a good conversation during the meal.', 'Work', 'id018', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (19, 'Bring in donuts for the office and stick around to talk with everyone.', 'Work', 'id019', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');
INSERT INTO public."Challenges" VALUES (20, 'Sign up for a coding bookcamp. Always be the one to check-in with your classmates and teachers.', 'Work', 'id020', '2022-10-22 10:47:48.462-04', '2022-10-22 10:47:48.462-04');


--
-- Data for Name: Conversations; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."Conversations" VALUES (1, 'Try sharing a related story with a co-worker when in you find yourself in a conversation.', 'Work', 1, 'idW001', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (2, 'Ask a co-worker a more direct question to find out how their weekend was. An example is - What was the highlight of your weekend?', 'Work', 2, 'idW002', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (3, 'Ask a journey question to a co-worker. Like - how did you go from working for Walmrt to becoming the senior manager of A.I.?', 'Work', 1, 'idW003', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (4, 'Talk to a co-worker about what they find the most fulfilling in their current role.', 'Work', 2, 'idW004', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (5, 'Ask a co-worker how they went from hating exercising to running a marathon.', 'Work', 2, 'idW005', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (6, 'Have a meaningful one-on-one convesation with a co-worker about something that matters to you instead of just chatting in a group of people.', 'Work', 2, 'idW006', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (7, 'Ask someone ow their family is doing.', 'Work', 1, 'idW007', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (8, 'Ask your co-worker if they have any exciting travel plans in the near future.', 'Work', 1, 'idW008', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (9, 'Ask someone what kind of music they liek listening to. Try to relate to their answer and tell them what kind of music you like.', 'Work', 1, 'idW009', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (10, 'Let a trusted firend know that you are going to make it a point to leave sarcasm out of all your conversations today. Have your friend hold you accountable.', 'Social', 3, 'idS001', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (11, 'Let a trusted firend know that you are going to make it a point to leave complaining out of all your conversations today. Have your friend hold you accountable.', 'Social', 3, 'idS002', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (12, 'Talk to someone you trust today and tell them you feel comfortable around them.', 'Social', 3, 'idS003', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (13, 'Reach out to someone you know well and ask them about something that is important to them. See how they respond.', 'Social', 2, 'ids004', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (14, 'Try exiting a conversation gracefully instead of interupting the flow and running for the door. A good way to begin your exist is - it was great meeting you and I hope we can talk again.', 'Social', 2, 'ids005', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (15, 'Ask a friend if they have read any god books recently. Listen to their answer and share with them what books you have read recently.', 'Social', 1, 'ids006', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (16, 'Show a friend a funny video or meme you discovered. Share with them why you like it.', 'Social', 1, 'ids007', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (17, 'Share about your pets and let the other person talk about their pet too. Try to be relatable ', 'Social', 1, 'ids008', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (18, 'Double check your handshake. A lot is said in a handshake, so make sure it embodies confidence, even if you do not feel confident. Someone may even let you know you have a good handshake.', 'Education', 1, 'ide001', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (19, 'Practice saying yes to classmates when it is in your best interests, and practice how to say no, so you leave the conversation amicably.', 'Education', 1, 'ide002', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (20, 'Take charge and be the one to choose where your group will work on a project. Make sure it is a comfortable environment for you.', 'Education', 2, 'ide003', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (21, 'Ask your classmate how they are liking their classes this semester.', 'Education', 1, 'ide004', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (22, 'Tell a classmate or friend about any travel you have coming up. Also ask if they are traveling in the near future.', 'Education', 2, 'ide005', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');
INSERT INTO public."Conversations" VALUES (23, 'Tell a classmate a joke and ask if they know any funny jokes.', 'Education', 1, 'ide006', '2022-10-22 10:47:48.476-04', '2022-10-22 10:47:48.476-04');


--
-- Data for Name: MessagesOfTheDays; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."MessagesOfTheDays" VALUES (1, 'Genius is one percent inspiration and ninety-nine percent perspiration.', 'Thomas Edison', 'id001', '2022-10-22 10:47:48.456-04', '2022-10-22 10:47:48.456-04');
INSERT INTO public."MessagesOfTheDays" VALUES (2, 'Difficulties increase the nearer we get to the goal.', 'Johann Wolfgang von Goethe', 'id002', '2022-10-22 10:47:48.456-04', '2022-10-22 10:47:48.456-04');
INSERT INTO public."MessagesOfTheDays" VALUES (3, 'Fate is in your hands and no one elses.', 'Byron Pulsifer', 'id003', '2022-10-22 10:47:48.456-04', '2022-10-22 10:47:48.456-04');
INSERT INTO public."MessagesOfTheDays" VALUES (4, 'Nothing happens unless first we dream.', 'Carl Sandburg', 'id004', '2022-10-22 10:47:48.456-04', '2022-10-22 10:47:48.456-04');
INSERT INTO public."MessagesOfTheDays" VALUES (5, 'Self-complacency is fatal to progress.', 'Margaret Sangster', 'id005', '2022-10-22 10:47:48.456-04', '2022-10-22 10:47:48.456-04');
INSERT INTO public."MessagesOfTheDays" VALUES (6, 'Life is change. Growth is optional. Choose wisely.', 'Karen Clark', 'id006', '2022-10-22 10:47:48.456-04', '2022-10-22 10:47:48.456-04');
INSERT INTO public."MessagesOfTheDays" VALUES (7, 'A rolling stone gathers no moss.', 'Publilius Syrus', 'id007', '2022-10-22 10:47:48.456-04', '2022-10-22 10:47:48.456-04');


--
-- Data for Name: PickupLines; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."PickupLines" VALUES (1, 'Ask someone if they speak a language other than English. Ask them how they say, “I love you” in that language. Then tell them you are taken, but you will take their number.', 'id001', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (2, 'Walk up to someone and ask them how they pronounce their number (phone number). Then call them immediately.', 'id002', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (3, 'With earbuds in as if you are on a call, walk up next to someone and ask out loud if they walk to go grab a drink. (The person will think you are talking to them) You can respond that you are on the phone, but you will go with them anyway.', 'id003', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (4, 'You look really familiar, did we go to college together? Maybe we took chemistry together? Oh, no, well, we sure do have chemistry now.', 'id004', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (5, 'Hey, I saw you standing here earlier. Do you believe in love at first sight or should I walk by again?', 'id005', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (6, 'Do you go on dates with strangers? No, well let me introduce myself, I am….', 'id006', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (7, 'Hey, are you sunburned or do you always look this hot?', 'id007', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (8, 'Hey, do you have a pen I can borrow? (Receive pen and act like you are writing something) Your pen does not work. (They respond that it does work) Then try writing your number down right here.', 'id008', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (9, 'Hey, what are you doing right now? (They respond in a way that they are leaving) Well can I at least tie your laces for you because I do not want you falling for anyone else besides me?', 'id009', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (10, 'Hey, are you Russian? Well I am rushing to take you out for a drink.', 'id010', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (11, 'Hey, what do you have on your to-do list today? Well why do not you add me on there because I would love to grab a drink with you.', 'id011', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');
INSERT INTO public."PickupLines" VALUES (12, 'Hey, what was your favorite subject in school? Well, mine was math because I am pretty good with numbers. Why do not you give me yours and I will prove it?', 'id012', '2022-10-22 10:47:48.465-04', '2022-10-22 10:47:48.465-04');


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."SequelizeMeta" VALUES ('20221012003415-create-messageoftheday.js');
INSERT INTO public."SequelizeMeta" VALUES ('20221013011506-create-challenge.js');
INSERT INTO public."SequelizeMeta" VALUES ('20221013024435-create-pickupline.js');
INSERT INTO public."SequelizeMeta" VALUES ('20221013231606-create-conversation.js');
INSERT INTO public."SequelizeMeta" VALUES ('20221015143613-create-user.js');
INSERT INTO public."SequelizeMeta" VALUES ('20221020214607-create-user-challenge.js');
INSERT INTO public."SequelizeMeta" VALUES ('20221020221009-create-user-pickup-line.js');
INSERT INTO public."SequelizeMeta" VALUES ('20221020234610-create-user-conversation.js');


--
-- Data for Name: UserChallenges; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."UserChallenges" VALUES (1, 1);


--
-- Data for Name: UserConversations; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."UserConversations" VALUES (2, 8);


--
-- Data for Name: UserPickupLines; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."UserPickupLines" VALUES (1, 2);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: gyrgqbjl
--

INSERT INTO public."Users" VALUES (1, 'omar@email.com', '$2b$10$zSnIb8o.xP4mygbogeaT6.G986h7u2pHMKQJ2skjEl331CVrZMy/a', '2022-10-22 10:47:48.562-04', '2022-10-22 10:47:48.562-04');
INSERT INTO public."Users" VALUES (2, 'john@email.com', '$2b$10$mQU/KmtYs9jKWygYrGyNJe.ko6HquBxUUH8JFLIqbKSYEHvLsTyFe', '2022-10-22 10:47:48.618-04', '2022-10-22 10:47:48.618-04');


--
-- Name: Challenges_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gyrgqbjl
--

SELECT pg_catalog.setval('public."Challenges_id_seq"', 20, true);


--
-- Name: Conversations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gyrgqbjl
--

SELECT pg_catalog.setval('public."Conversations_id_seq"', 23, true);


--
-- Name: MessagesOfTheDays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gyrgqbjl
--

SELECT pg_catalog.setval('public."MessagesOfTheDays_id_seq"', 7, true);


--
-- Name: PickupLines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gyrgqbjl
--

SELECT pg_catalog.setval('public."PickupLines_id_seq"', 12, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gyrgqbjl
--

SELECT pg_catalog.setval('public."Users_id_seq"', 2, true);


--
-- Name: Challenges Challenges_pkey; Type: CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."Challenges"
    ADD CONSTRAINT "Challenges_pkey" PRIMARY KEY (id);


--
-- Name: Conversations Conversations_pkey; Type: CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."Conversations"
    ADD CONSTRAINT "Conversations_pkey" PRIMARY KEY (id);


--
-- Name: MessagesOfTheDays MessagesOfTheDays_pkey; Type: CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."MessagesOfTheDays"
    ADD CONSTRAINT "MessagesOfTheDays_pkey" PRIMARY KEY (id);


--
-- Name: PickupLines PickupLines_pkey; Type: CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."PickupLines"
    ADD CONSTRAINT "PickupLines_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: UserChallenges UserChallenges_challengeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."UserChallenges"
    ADD CONSTRAINT "UserChallenges_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES public."Challenges"(id);


--
-- Name: UserChallenges UserChallenges_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."UserChallenges"
    ADD CONSTRAINT "UserChallenges_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id);


--
-- Name: UserConversations UserConversations_conversationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."UserConversations"
    ADD CONSTRAINT "UserConversations_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES public."Conversations"(id);


--
-- Name: UserConversations UserConversations_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."UserConversations"
    ADD CONSTRAINT "UserConversations_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id);


--
-- Name: UserPickupLines UserPickupLines_pickupLineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."UserPickupLines"
    ADD CONSTRAINT "UserPickupLines_pickupLineId_fkey" FOREIGN KEY ("pickupLineId") REFERENCES public."PickupLines"(id);


--
-- Name: UserPickupLines UserPickupLines_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gyrgqbjl
--

ALTER TABLE ONLY public."UserPickupLines"
    ADD CONSTRAINT "UserPickupLines_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id);


--
-- gyrgqbjlQL database dump complete
--


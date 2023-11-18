CREATE TABLE public.test (
	test_id serial NOT NULL,
	test_name varchar NOT NULL,
	complexity varchar NOT NULL,
	topic varchar NOT NULL,
	author_name varchar NOT NULL,
	words json NOT NULL
);

INSERT INTO public.test (test_name,complexity,topic,author_name,words) VALUES
('City Vocabulary','EASY','City','Admin','[{"russian":"школа","english":"school"},{"russian":"музей","english":"museum"},{"russian":"парк","english":"park"}]'),
('City Vocabulary','MEDIUM','City','Admin','[{"russian":"университет","english":"university"},{"russian":"река","english":"river"},{"russian":"библиотека","english":"library"}]'),
('City Vocabulary','DIFFICULT','City','Admin','[{"russian":"завод","english":"factory"},{"russian":"церковь","english":"church"},{"russian":"заправочная станция","english":"petrol station"}]'),
('Office Vocabulary','EASY','Office','Admin','[{"russian":"линейка","english":"ruler"},{"russian":"ножницы","english":"scissors"},{"russian":"карандаш","english":"pencil"}]');

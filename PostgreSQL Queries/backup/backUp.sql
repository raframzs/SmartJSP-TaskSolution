PGDMP                 
         y            manager-SmartJSP    10.15    10.15     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �
           1262    16678    manager-SmartJSP    DATABASE     �   CREATE DATABASE "manager-SmartJSP" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
 "   DROP DATABASE "manager-SmartJSP";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �
           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �
           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16787    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public       postgres    false    3            �            1259    16789    pais    TABLE     V   CREATE TABLE public.pais (
    id bigint NOT NULL,
    name character varying(255)
);
    DROP TABLE public.pais;
       public         postgres    false    3            �            1259    16794    usuario    TABLE     n  CREATE TABLE public.usuario (
    id bigint NOT NULL,
    apellido character varying(255),
    email character varying(255),
    estado character varying(255),
    fecha date,
    nombre character varying(255),
    numero_documento bigint,
    observacion character varying(255),
    telefono bigint,
    tipo_documento character varying(255),
    id_pais bigint
);
    DROP TABLE public.usuario;
       public         postgres    false    3            �
          0    16789    pais 
   TABLE DATA               (   COPY public.pais (id, name) FROM stdin;
    public       postgres    false    197   �       �
          0    16794    usuario 
   TABLE DATA               �   COPY public.usuario (id, apellido, email, estado, fecha, nombre, numero_documento, observacion, telefono, tipo_documento, id_pais) FROM stdin;
    public       postgres    false    198          �
           0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 50, true);
            public       postgres    false    196            t
           2606    16793    pais pais_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.pais
    ADD CONSTRAINT pais_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.pais DROP CONSTRAINT pais_pkey;
       public         postgres    false    197            v
           2606    16801    usuario persona_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT persona_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT persona_pkey;
       public         postgres    false    198            w
           2606    16802 #   usuario fki431su34fh1345iup043lcsqu    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT fki431su34fh1345iup043lcsqu FOREIGN KEY (id_pais) REFERENCES public.pais(id);
 M   ALTER TABLE ONLY public.usuario DROP CONSTRAINT fki431su34fh1345iup043lcsqu;
       public       postgres    false    197    198    2676            �
   7   x�3�t����M�L�2���K�I,I-*J�2�tN�KLI�2�t+J�K���qqq h��      �
   /  x�u�Aj�0E��S�	��dٻ��-��v3�W���䄒;��X�h
	�B�������U�$H�=��>?ﺁ]?߆��L43)`=	�B*�
u��w@�hj4$+X���s����s���6~1P�<Y��$nx ��Ph���X�T���;�ܲw��j��G�`����;5p����{�Y�9�Ɗ���S��&���8ZPx��E{*�6fa�]��tY�b;�c8��L';�}����҂d��g5֦��	I����C��-�o�դ(��ctEH
�Η��C�<�Q+M��m^�i,�D     
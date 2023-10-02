/*==============================================================*/
/* DBMS name:      Sybase SQL Anywhere 12                       */
/* Created on:     05-09-2023 9:10:02                           */
/*==============================================================*/


/*==============================================================*/
/* Table: DETALLETICKET                                         */
/*==============================================================*/
create table DETALLETICKET 
(
   ID_DETALLETICKET     integer                        not null AUTO_INCREMENT,
   ID_TICKET            integer                        null,
   COMENTARIOS          long varchar                   null,
   FECHADETALLETICKET   timestamp                      null,
   constraint PK_DETALLETICKET primary key (ID_DETALLETICKET)
);

/*==============================================================*/
/* Index: DETALLETICKET_PK                                      */
/*==============================================================*/
create unique index DETALLETICKET_PK on DETALLETICKET (
ID_DETALLETICKET ASC
);

/*==============================================================*/
/* Index: CONTIENE_FK                                           */
/*==============================================================*/
create index CONTIENE_FK on DETALLETICKET (
ID_TICKET ASC
);

/*==============================================================*/
/* Table: ESTADOTICKET                                          */
/*==============================================================*/
create table ESTADOTICKET 
(
   ID_ESTADO            integer                        not null AUTO_INCREMENT,
   ID_TICKET            integer                        null,
   ESTADO               varchar(30)                    null,
   constraint PK_ESTADOTICKET primary key (ID_ESTADO)
);

/*==============================================================*/
/* Index: ESTADOTICKET_PK                                       */
/*==============================================================*/
create unique index ESTADOTICKET_PK on ESTADOTICKET (
ID_ESTADO ASC
);

/*==============================================================*/
/* Index: POSEE_FK                                              */
/*==============================================================*/
create index POSEE_FK on ESTADOTICKET (
ID_TICKET ASC
);

/*==============================================================*/
/* Table: TECNICO                                               */
/*==============================================================*/
create table TECNICO 
(
   ID_TECNICO           integer                        not null AUTO_INCREMENT,
   PASSWORD             varchar(150)                   null,
   CORREOTECNICO        varchar(80)                    null,
   NOMBRETECNICO        varchar(80)                    null,
   PERFIL               varchar(80)                    null,
   constraint PK_TECNICO primary key (ID_TECNICO)
);

/*==============================================================*/
/* Index: TECNICO_PK                                            */
/*==============================================================*/
create unique index TECNICO_PK on TECNICO (
ID_TECNICO ASC
);

/*==============================================================*/
/* Table: TICKET                                                */
/*==============================================================*/
create table TICKET 
(
   ID_TICKET            integer                        not null AUTO_INCREMENT,
   ID_TECNICO           integer                        null,
   ID_USUARIO           integer                        null,
   ASUNTO               varchar(200)                   null,
   DESCRIPCION          long varchar                   null,
   FECHATICKET          timestamp                      null,
   constraint PK_TICKET primary key (ID_TICKET)
);

/*==============================================================*/
/* Index: TICKET_PK                                             */
/*==============================================================*/
create unique index TICKET_PK on TICKET (
ID_TICKET ASC
);

/*==============================================================*/
/* Index: ATIENDE_FK                                            */
/*==============================================================*/
create index ATIENDE_FK on TICKET (
ID_TECNICO ASC
);

/*==============================================================*/
/* Index: CREA_FK                                               */
/*==============================================================*/
create index CREA_FK on TICKET (
ID_USUARIO ASC
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO 
(
   ID_USUARIO           integer                        not null AUTO_INCREMENT,
   AREA                 long varchar                   null,
   CORREOUSUARIO        varchar(200)                   null,
   NOMBREUSUARIO        varchar(200)                   null,
   constraint PK_USUARIO primary key (ID_USUARIO)
);

/*==============================================================*/
/* Index: USUARIO_PK                                            */
/*==============================================================*/
create unique index USUARIO_PK on USUARIO (
ID_USUARIO ASC
);

alter table DETALLETICKET
   add constraint FK_DETALLET_CONTIENE_TICKET foreign key (ID_TICKET)
      references TICKET (ID_TICKET)
      on update restrict
      on delete restrict;

alter table ESTADOTICKET
   add constraint FK_ESTADOTI_POSEE_TICKET foreign key (ID_TICKET)
      references TICKET (ID_TICKET)
      on update restrict
      on delete restrict;

alter table TICKET
   add constraint FK_TICKET_ATIENDE_TECNICO foreign key (ID_TECNICO)
      references TECNICO (ID_TECNICO)
      on update restrict
      on delete restrict;

alter table TICKET
   add constraint FK_TICKET_CREA_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO)
      on update cascade
      on delete cascade;


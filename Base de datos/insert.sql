INSERT INTO `usuario`(`ID_USUARIO`, `AREA`, `CORREOUSUARIO`, `NOMBREUSUARIO`) VALUES (NULL,'hardware','juanperez@gmail.com','juan perez');

INSERT INTO `tecnico`(`ID_TECNICO`, `PASSWORD`, `CORREOTECNICO`, `NOMBRETECNICO`, `PERFIL`) VALUES (NULL,'12345','javierluna@gmail.com','javier Luna','Administrador');

INSERT INTO `ticket`(`ID_TICKET`, `ID_TECNICO`, `ID_USUARIO`, `ASUNTO`, `DESCRIPCION`, `FECHATICKET`) VALUES (NULL,1,1,'No prende','se mojo el teclado','2023-09-04');

INSERT INTO estadoticket(ID_ESTADO, ID_TICKET, ESTADO) VALUES (NULL,1,'En proceso');

INSERT INTO `detalleticket`(`ID_DETALLETICKET`, `ID_TICKET`, `COMENTARIOS`, `FECHADETALLETICKET`) VALUES (NULL,1,'Se estropeo la bateria','2023-09-05');

INSERT INTO detalleticket(ID_DETALLETICKET, ID_TICKET, FECHA, COMENTARIOS) VALUES (NULL,1,'2023-09-08','Se estropeo la bateria');


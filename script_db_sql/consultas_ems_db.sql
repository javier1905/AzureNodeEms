select * from operaciones
select * from tipos_maquina
select * from maquinas
select * from tipos_proceso
select * from piezas
select * from procesos
select * from turnos
select * from defectos
select * from operaciones
select * from trabajadores
--LISTADO OPERACIONES
--select id as idOperacion, nombre as nombreOperacion from operaciones where estado = 1

-- MAQUINAS POR OPERACION 
--select m.id as idMaquina, m.nombre as nombreMaquina from maquinas m join tipos_maquina tm on m.id_tipos_maquina = tm.id where m.estado = 1 and tm.id_operacion = 1

--PIZAS SEGUN MAQUINA ELEJIDA
-- select p.id as idPieza, p.nombre as nombrePieza from piezas p join procesos pro on pro.id_pieza = p.id where p.estado = 1 and pro.id_maquina = 8

--LISTADO TIPOS DE PROCESOS
--select id as idTipoProceso, nombre as nombreTipoProceso from tipos_proceso where estado = 1

--PROCESO SEGUN MAQUINA PIEZA Y TIPO DE PROCESO
--select pro.id as idProceso, pro.descripcion as descripcionProceso from procesos pro where pro.estado = 1 and pro.id_pieza = 1 and pro.id_maquina = 8 and pro.id_tipos_proceso = 1

--OBTENER TURNOS
--select t.id as idTurno, t.descripcion as descripcionTurno,t.hs_inicio as hsInicioTurno ,t.hs_fin as hsFinTurno  from turnos t where estado = 1

--OBTENER LISTADOS DE DEFECTOS 

select d.id as idDefecto, d.nombre as nombreDefecto, d.id_operacion as idOperacion,o.nombre as nombreOperacion from defectos d join operaciones o on d.id_operacion=o.id where d.estado = 1

--OBTENET LISTA DE TRABAJADORES

select t.id as idTrabajador, t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador, t.f_nacimiento as fechaNacimientoTrabajador, t.f_ingreso as fechaIngresoTrabajador, t.id_puesto as idPuestoTrabajador, p.nombre as nombrePuesto from trabajadores t join puestos p on t.id_puesto=p.id where t.estado = 1
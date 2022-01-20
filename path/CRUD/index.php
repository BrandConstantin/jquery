<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CRUD - Crear, leer, actualizar, eliminar</title>
    <link href="jquery-ui/jquery-ui.css" rel="stylesheet" />
  </head>
  <body>
    <div class="ui-widget">
      <center>
        <h1>Proyecto CRUD - JQuery</h1>
        <a href="#" id="nuevo">Agregar Usuario</a>
        <br /><br />
      </center>
      <table class="tabla" align="center">
        <thead class="ui-widget-header">
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Operaciones</th>
          </tr>
        </thead>

        <tbody class="ui-widget-content">
            <?php
                include('conexion.php');
                $con = db_connect();
                $rs = $con->query("SELECT * FROM usuarios");

                while ($row = $rs->fetch_assoc()) {

                echo '<td>'.$row['id'].'</td>';
                echo '<td>'.$row["usuario"].'</td>';
                    echo '<td>'.$row["nombre"].'</td>';
                    echo '<td>'.$row["apellido"].'</td>';
                    echo '<td>'.$row["telefono"].'</td>';
                    echo '<td>'.$row["email"].'</td>';
                    echo '<td><a href="#" class="editar" id="'.$row['id'].'">Editar</a> | <a href="#" class="eliminar" id="'.$row['id'].'">Eliminar</a></td></tr>';

                }
            ?>
        </tbody>
      </table>
    </div>

    <div id="agregar">
      <p class="titulo">Todos los campos son requeridos</p>

      <form id="formulario">
        <fieldset>
          <label for="usuario">Usuario</label>
          <input
            type="text"
            name="usuario"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="telefono">Teléfono</label>
          <input
            type="text"
            name="telefono"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            class="text ui-widget-content ui-corner-all"
          />
        </fieldset>
      </form>
    </div>

    <div id="editar">
      <p class="titulo">Todos los campos son requeridos</p>

      <form id="formulario2">
        <fieldset>
          <label for="usuario">Usuario</label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="apellido">Apellido</label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="telefono">Teléfono</label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            class="text ui-widget-content ui-corner-all"
          />
          <label for="password">Nuevo password</label>
          <input
            type="password"
            name="password"
            class="text ui-widget-content ui-corner-all"
          />
        </fieldset>
      </form>
    </div>

    <input type="hidden" id="user" />

    <div id="dialogo-confirm" title="¿Esta seguro de eliminar?">
      <p>El usuario sera eliminado de la BD.</p>
    </div>

    <script src="js/jquery-2.1.3.min.js"></script>
    <script src="jquery-ui/jquery-ui.min.js"></script>
  </body>
</html>

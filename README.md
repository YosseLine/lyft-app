![Lyft](assets/images/logo-pink.png)

# Reto - Lyft

* **Track:** _Common Core._
* **Curso:** _Crea tu propia red social._
* **Unidad:** _Agiliza tu desarrollo._
* **Alunma:** _Yosseline Apcho._

***

## Objetivos:

- Desarrollar una web-app que replique el sitio de Lyft.

***

## Datos del reto:

- la web-app deberá cumplir a detalle los pasos necesarios para que un usuario pueda registrarse. Opcionalmente, dicha web-app debería tener una versión desktop.

***

## Flujo de la aplicación:

* Vista splash con duración de 2 a 5 segundos que redirecciona a la vista de inicio:

* La vista de inicio cuenta con dos botones, en esta ocasión seguiremos el flujo de SING UP:

![Lyft](assets/images/splash.png)

* En la siguiente vista tenemos un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de NEXT debe estar deshabilitado hasta que se ingrese un número de 10 dígitos:

![Lyft](assets/images/ingreso-numero.png)

* Una vez ingresado el número de teléfono se habilita el botón y al dar click debe enviar una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista:

![Lyft](assets/images/generacion-codigo.png)

* En esta vista se debe ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la vista donde ingresa sus datos:

![Lyft](assets/images/verificacion-numero.png)

* La siguiente vista cuenta con un formulario que le pide al usuario su nombre, apellido y correo electrónico. También contiene un checkbox para que se acepten los términos y condiciones del servicio:

![Lyft](assets/images/ingreso-datos.png)

* Una vez realizado lo anterior, se muestra una vista al usuario que le indica que ha concluido con el registro exitosamente:

![Lyft](assets/images/final.png)

***

## Consideraciones:

- El estilo de las vistas, incluyendo sus elementos, han sido modificados para una mejor experiencia.

- Ha sido añadido un botón nombrado 'Generate code' y otro nombrado 'Resend code', para una mejor UX.

- Todas las vistas cuentan con un botón 'BACK' que te redirecciona a la vista anterior.

- Han sido añadidos dos botones. El primero llamado 'Back to home'; donde el usuario, al terminar su inscripción, puede acceder fácilmente a la vista de inicio. Y el segundo obtiene el nombre 'SIGN OFF', donde el usuario podrá cerrar sesión y dirigirse a la vista principal, si así lo desea.

- El color de la barra de navegador que se observará al abrir la web 'Lyft' desde un móvil, fue cambiado al color representativo de la página web, para una mejor experiencia.

- El estilo del cursor fue modificado para una mejor interacción con la web-app.

***

## Herramientas usadas:

- HTML5.

- CSS3.

- Bootstrap.

- jQuery.

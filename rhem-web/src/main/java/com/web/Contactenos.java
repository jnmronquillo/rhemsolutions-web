package com.web;

import com.google.sitebricks.At;
import com.google.sitebricks.http.Post;
import com.google.sitebricks.rendering.Decorated;
import com.model.Contacto;
import com.util.Mail;
import com.util.Utilities;

@At("/contactenos")
@Decorated
public class Contactenos extends Layout {
	private Contacto contacto = new Contacto();
	private String cssClass = "";
	private String msg = "";
	@Post
	public void enviarCorreo() {
		if(contacto.getVerificacion() == null)
			return;
		if(contacto.getVerificacion()!=5)
			return;
		if(!validate()){
			cssClass = "error";
			msg = "Todos los campos son requeridos";
			return;
		}
		String mensaje = "Email: "+contacto.getEmail()+
						"Nombre: "+contacto.getNombre()+
						"Telefono: "+contacto.getTelefono()+
						"Titulo: "+contacto.getTitulo()+
						"Mensaje: "+contacto.getMensaje();
		if(Mail.sendMessage(mensaje, Utilities.getTruncated(contacto.getMensaje(), 100), "juanrojas@rhemsolutions.com", null, null)){
			cssClass = "success";
			msg = "Su mensaje ha sido enviado";
		}else{
			cssClass = "error";
			msg = "Fallo en el envio reintente otra vez";
		}		
	}
	public Contacto getContacto() {
		return contacto;
	}
	public void setContacto(Contacto contacto) {
		this.contacto = contacto;
	}
	public String getCssClass() {
		return cssClass;
	}
	public String getMsg() {
		return msg;
	}
	private boolean validate(){
		boolean e = !"".equals(contacto.getEmail().trim());
		boolean m = !"".equals(contacto.getMensaje().trim());
		boolean n = !"".equals(contacto.getNombre().trim());
		return e && m && n;
	}
}
